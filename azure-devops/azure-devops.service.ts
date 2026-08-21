import fs from 'fs';
import path from 'path';
import type {
  AzureEvidenceAttachmentType,
  AzureIncidentResult,
  IncidentCandidate,
  IncidentRuntimeConfig,
} from '../integrations/incidents/incident.types';
import {
  createAzureBug,
  getAzureWorkItemWithRelations,
  getAzureWorkItems,
  linkAzureAttachmentToWorkItem,
  queryAzureWorkItems,
  uploadAzureAttachment,
  validateAzurePreviewConfig,
  type AzureAttachmentUploadResponse,
  type AzureWorkItemSummary,
  type AzureWorkItemWithRelations,
  type AzureWiqlResponse,
  type CreateAzureBugOptions,
} from './azure-devops.client';
import { buildDuplicateWiql, findDuplicateBySignature } from './azure-devops.dedup';
import { buildAzureBugPatch, buildDedupSignature } from './azure-devops.mapper';
import {
  buildAzureEvidenceComment,
  buildAzureEvidenceSignature,
  hasAzureEvidenceSignature,
} from './azure-devops.evidence';
import { debug } from '../integrations/incidents/incident-logger';

export type AzureIncidentClient = {
  queryWorkItems(config: IncidentRuntimeConfig, wiql: string): Promise<AzureWiqlResponse>;
  getWorkItems(config: IncidentRuntimeConfig, ids: number[]): Promise<AzureWorkItemSummary[]>;
  getWorkItemWithRelations(config: IncidentRuntimeConfig, workItemId: number): Promise<AzureWorkItemWithRelations>;
  createBug(
    patch: ReturnType<typeof buildAzureBugPatch>,
    config: IncidentRuntimeConfig,
    options?: CreateAzureBugOptions,
  ): Promise<AzureWorkItemSummary>;
  uploadAttachment(filePath: string, fileName: string, config: IncidentRuntimeConfig): Promise<AzureAttachmentUploadResponse>;
  linkAttachment(
    workItemId: number,
    attachmentUrl: string,
    comment: string,
    config: IncidentRuntimeConfig,
  ): Promise<AzureWorkItemSummary>;
};

export const defaultAzureIncidentClient: AzureIncidentClient = {
  queryWorkItems: queryAzureWorkItems,
  getWorkItems: getAzureWorkItems,
  getWorkItemWithRelations: getAzureWorkItemWithRelations,
  createBug: createAzureBug,
  uploadAttachment: uploadAzureAttachment,
  linkAttachment: linkAzureAttachmentToWorkItem,
};

export async function processAzureIncident(
  candidate: IncidentCandidate,
  config: IncidentRuntimeConfig,
  client: AzureIncidentClient = defaultAzureIncidentClient,
): Promise<AzureIncidentResult> {
  logAzurePipeline('service-entry');

  const eligibleForCreation = isAutoCreateEligible(candidate, config);

  debugAzureCreationGate(candidate, config, eligibleForCreation);

  if (config.mode === 'preview') {
    logAzurePipeline('service-end', { status: 'SKIPPED', reason: 'INCIDENT_MODE=preview' });
    return { status: 'SKIPPED', reason: 'INCIDENT_MODE=preview' };
  }

  if (!config.autoCreateIncidents) {
    logAzurePipeline('service-end', { status: 'SKIPPED', reason: 'AUTO_CREATE_INCIDENTS=false' });
    return { status: 'SKIPPED', reason: 'AUTO_CREATE_INCIDENTS=false' };
  }

  if (!eligibleForCreation) {
    logAzurePipeline('service-end', { status: 'SKIPPED', reason: 'NO ELEGIBLE' });
    return { status: 'SKIPPED', reason: 'NO ELEGIBLE' };
  }

  logAzurePipeline('gate-passed');

  if (validateAzurePreviewConfig(config).length > 0) {
    logAzurePipeline('service-end', { status: 'SKIPPED', reason: 'CONFIGURACION INCOMPLETA' });
    return { status: 'SKIPPED', reason: 'CONFIGURACION INCOMPLETA' };
  }

  try {
    logAzurePipeline('dedup-start');
    const signature = buildDedupSignature(candidate);
    logCandidateDiagnostics(candidate);
    logAzureDedup('signature-built', { signature });
    logAzureDedup('wiql-start');
    const wiql = buildDuplicateWiql(candidate, config);
    logAzureDedup('wiql-request');
    const queryResult = await client.queryWorkItems(config, wiql);
    const ids = (queryResult.workItems ?? []).map((item) => item.id).filter((id) => Number.isFinite(id));
    logAzureDedup('wiql-response', {
      statusCode: queryResult.__statusCode ?? 'N/D',
      candidateCount: ids.length,
    });
    logAzureDedup('workitems-start', { count: ids.length });
    const workItems = await client.getWorkItems(config, ids);
    logAzureDedup('workitems-response', { count: workItems.length });
    const duplicate = findDuplicateBySignature(candidate, workItems);
    logAzureDedup('completed', { duplicate: Boolean(duplicate) });
    logAzurePipeline('dedup-end', {
      candidateCount: workItems.length,
      duplicate: Boolean(duplicate),
    });

    if (duplicate) {
      const attachments = await processAzureEvidenceAttachments(candidate, config, client, duplicate.id);
      logAzurePipeline('service-end', { status: 'DUPLICATE', workItemId: duplicate.id });
      return {
        status: 'DUPLICATE',
        workItemId: duplicate.id,
        url: duplicate._links?.html?.href ?? duplicate.url,
        duplicateSignature: buildDedupSignature(candidate),
        attachments,
      };
    }

    const validateOnly = config.azureValidateOnly;
    logAzurePipeline('create-start', { validateOnly });
    const created = await client.createBug(buildAzureBugPatch(candidate), config, { validateOnly });
    logAzurePipeline('create-response', {
      validateOnly,
      statusCode: created.__statusCode ?? 'N/D',
      workItemId: created.id,
    });

    if (validateOnly) {
      logAzurePipeline('service-end', { status: 'VALIDATED' });
      return {
        status: 'VALIDATED',
        message: 'Azure DevOps validateOnly=true ejecuto el POST sin crear Work Item.',
        duplicateSignature: buildDedupSignature(candidate),
      };
    }

    const attachments = await processAzureEvidenceAttachments(candidate, config, client, created.id);
    logAzurePipeline('service-end', { status: 'CREATED', workItemId: created.id });

    return {
      status: 'CREATED',
      workItemId: created.id,
      url: created._links?.html?.href ?? created.url,
      duplicateSignature: buildDedupSignature(candidate),
      attachments,
    };
  } catch (error) {
    const statusCode = getErrorStatusCode(error);
    logAzurePipeline('service-end', { status: 'ERROR', statusCode: statusCode ?? 'N/D' });
    return {
      status: 'ERROR',
      message: error instanceof Error ? error.message : String(error),
      statusCode,
      operation: config.azureValidateOnly ? 'validate' : 'create',
      duplicateSignature: buildDedupSignature(candidate),
    };
  }
}

async function processAzureEvidenceAttachments(
  candidate: IncidentCandidate,
  config: IncidentRuntimeConfig,
  client: AzureIncidentClient,
  workItemId: number,
): Promise<NonNullable<AzureIncidentResult['attachments']>> {
  if (!config.azureAttachEvidence) {
    return [
      { type: 'screenshot', status: 'SKIPPED', reason: 'AZURE_DEVOPS_ATTACH_EVIDENCE=false' },
      { type: 'trace', status: 'SKIPPED', reason: 'AZURE_DEVOPS_ATTACH_EVIDENCE=false' },
      { type: 'video', status: 'SKIPPED', reason: 'AZURE_DEVOPS_ATTACH_EVIDENCE=false' },
    ];
  }

  const evidenceItems = [
    { type: 'screenshot' as const, filePath: candidate.evidence.screenshot[0], extension: '.png' },
    { type: 'trace' as const, filePath: candidate.evidence.trace[0], extension: '.zip' },
    { type: 'video' as const, filePath: candidate.evidence.video[0], extension: '.webm' },
  ];
  const results: NonNullable<AzureIncidentResult['attachments']> = [];
  let workItem: AzureWorkItemWithRelations;

  try {
    logAzureAttachment('dedup-check-start', { workItemId });
    workItem = await client.getWorkItemWithRelations(config, workItemId);
    logAzureAttachment('dedup-check-end', {
      workItemId,
      status: 'OK',
      relations: workItem.relations?.length ?? 0,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    logAzureAttachment('dedup-check-end', {
      workItemId,
      status: 'SKIPPED',
      reason: 'EVIDENCE_DEDUP_CHECK_FAILED',
    });
    return evidenceItems.map((item) => ({
      type: item.type,
      status: 'SKIPPED',
      reason: 'EVIDENCE_DEDUP_CHECK_FAILED',
      message: shortAzureAttachmentMessage(message),
    }));
  }

  for (const item of evidenceItems) {
    const result = await processSingleEvidenceAttachment(candidate, config, client, workItemId, workItem, item);
    results.push(result);
  }

  return results;
}

async function processSingleEvidenceAttachment(
  candidate: IncidentCandidate,
  config: IncidentRuntimeConfig,
  client: AzureIncidentClient,
  workItemId: number,
  workItem: AzureWorkItemWithRelations,
  item: { type: AzureEvidenceAttachmentType; filePath?: string; extension: string },
): Promise<NonNullable<AzureIncidentResult['attachments']>[number]> {
  const signature = buildAzureEvidenceSignature(candidate, item.type);
  const fileName = buildAzureEvidenceFileName(candidate, item.type, item.extension);

  if (item.type === 'video' && !config.azureAttachVideo) {
    logAzureAttachment('upload-end', { type: item.type, status: 'SKIPPED', reason: 'VIDEO_DISABLED', fileName });
    return { type: item.type, status: 'SKIPPED', reason: 'VIDEO_DISABLED', fileName };
  }

  if (hasAzureEvidenceSignature(workItem, signature)) {
    logAzureAttachment('dedup-check', { type: item.type, status: 'ALREADY_LINKED', workItemId, fileName });
    return { type: item.type, status: 'ALREADY_LINKED', fileName };
  }

  if (!item.filePath) {
    logAzureAttachment('upload-end', { type: item.type, status: 'FILE_NOT_FOUND', reason: 'FILE_NOT_FOUND' });
    return { type: item.type, status: 'FILE_NOT_FOUND', reason: 'FILE_NOT_FOUND' };
  }

  const localPath = path.resolve(process.cwd(), item.filePath);

  if (!fs.existsSync(localPath)) {
    logAzureAttachment('upload-end', { type: item.type, status: 'FILE_NOT_FOUND', reason: 'FILE_NOT_FOUND', fileName });
    return { type: item.type, status: 'FILE_NOT_FOUND', reason: 'FILE_NOT_FOUND', fileName };
  }

  const fileSizeBytes = fs.statSync(localPath).size;
  logAzureAttachment('upload-start', { type: item.type, fileName, fileSizeBytes });

  if (fileSizeBytes === 0) {
    logAzureAttachment('upload-end', { type: item.type, status: 'EMPTY_FILE', reason: 'EMPTY_FILE', fileName });
    return { type: item.type, status: 'EMPTY_FILE', reason: 'EMPTY_FILE', fileName };
  }

  if (item.type === 'video' && fileSizeBytes > getAzureMaxVideoBytes(config)) {
    logAzureAttachment('upload-end', {
      type: item.type,
      status: 'SKIPPED',
      reason: 'VIDEO_TOO_LARGE',
      fileName,
      fileSizeBytes,
      maxMb: config.azureMaxVideoMb,
    });
    return { type: item.type, status: 'SKIPPED', reason: 'VIDEO_TOO_LARGE', fileName, maxMb: config.azureMaxVideoMb };
  }

  let uploaded: AzureAttachmentUploadResponse;
  try {
    uploaded = await client.uploadAttachment(localPath, fileName, config);
    logAzureAttachment('upload-end', { type: item.type, status: 'UPLOADED', fileName });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    logAzureAttachment('upload-end', { type: item.type, status: 'UPLOAD_ERROR', fileName });
    return { type: item.type, status: 'UPLOAD_ERROR', fileName, message: shortAzureAttachmentMessage(message) };
  }

  try {
    logAzureAttachment('link-start', { type: item.type, workItemId, fileName });
    await client.linkAttachment(workItemId, uploaded.url, buildAzureEvidenceComment(candidate, item.type), config);
    logAzureAttachment('link-end', { type: item.type, status: 'LINKED', workItemId, fileName });
    return { type: item.type, status: 'LINKED', fileName };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    logAzureAttachment('link-end', { type: item.type, status: 'LINK_ERROR', workItemId, fileName });
    return { type: item.type, status: 'LINK_ERROR', fileName, message: shortAzureAttachmentMessage(message) };
  }
}

function buildAzureEvidenceFileName(candidate: IncidentCandidate, type: AzureEvidenceAttachmentType, extension: string): string {
  return `${sanitizeEvidenceFilePart(candidate.caseId)}_${sanitizeEvidenceFilePart(candidate.project)}_retry-${candidate.retry}_${type}${extension}`;
}

function getAzureMaxVideoBytes(config: IncidentRuntimeConfig): number {
  return config.azureMaxVideoMb * 1024 * 1024;
}

function sanitizeEvidenceFilePart(value: string): string {
  return value.replace(/[^a-z0-9._-]+/gi, '_').replace(/^_+|_+$/g, '') || 'N_D';
}

function shortAzureAttachmentMessage(message: string): string {
  return message.replace(/\s+/g, ' ').trim().slice(0, 180);
}

function logAzureAttachment(step: string, details: Record<string, unknown>): void {
  debug('[AZURE ATTACHMENT]', { step, ...details });
}

function logCandidateDiagnostics(candidate: IncidentCandidate): void {
  if (process.env.AZURE_DEVOPS_RUNTIME_DIAGNOSTIC !== 'true') {
    return;
  }

  const patch = buildAzureBugPatch(candidate);
  const description = patch.find((operation) => operation.path === '/fields/System.Description')?.value ?? '';

  debug('[AZURE RUNTIME]', {
    runtimeContext: 'service',
    candidateBytes: Buffer.byteLength(JSON.stringify(candidate), 'utf8'),
    originalErrorBytes: Buffer.byteLength(candidate.originalError ?? '', 'utf8'),
    descriptionBytes: Buffer.byteLength(description, 'utf8'),
  });
}

function logAzurePipeline(step: string, details: Record<string, unknown> = {}): void {
  debug('[AZURE PIPELINE]', { step, ...details });
}

function logAzureDedup(step: string, details: Record<string, unknown> = {}): void {
  debug('[AZURE DEDUP]', { step, ...details });
}

function debugAzureCreationGate(
  candidate: IncidentCandidate,
  config: IncidentRuntimeConfig,
  eligibleForCreation: boolean,
): void {
  debug('[AZURE CREATION GATE DEBUG]', {
    provider: config.provider,
    autoCreate: config.autoCreateIncidents,
    mode: config.mode,
    decision: candidate.incidentDecision.decision,
    confidence: candidate.incidentDecision.confidence,
    eligibleForCreation,
  });
}


function isAutoCreateEligible(candidate: IncidentCandidate, config: IncidentRuntimeConfig): boolean {
  return (
    config.provider === 'azure' &&
    candidate.incidentDecision.decision === 'BUG_AUTO' &&
    candidate.incidentDecision.confidence === 'HIGH'
  );
}

function getErrorStatusCode(error: unknown): number | undefined {
  if (error && typeof error === 'object' && 'statusCode' in error) {
    const statusCode = Number((error as { statusCode?: unknown }).statusCode);
    return Number.isFinite(statusCode) ? statusCode : undefined;
  }

  return undefined;
}
