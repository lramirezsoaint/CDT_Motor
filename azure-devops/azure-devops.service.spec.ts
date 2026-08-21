import { expect, test } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { defaultAzureIncidentClient, processAzureIncident, type AzureIncidentClient } from './azure-devops.service';
import { buildAzureBugPatch } from './azure-devops.mapper';
import { createAzureBug } from './azure-devops.client';
import type { IncidentCandidate, IncidentRuntimeConfig, IncidentDecision, Confidence } from '../integrations/incidents/incident.types';

const baseConfig: IncidentRuntimeConfig = {
  autoCreateIncidents: true,
  mode: 'create',
  provider: 'azure',
  attachEvidence: false,
  attachVideo: false,
  maxVideoMb: 50,
  requestTimeoutMs: 15_000,
  azureOrganization: 'org',
  azureProject: 'project',
  hasAzurePat: true,
  azureValidateOnly: false,
  azureAttachEvidence: false,
  azureAttachVideo: false,
  azureMaxVideoMb: 50,
  jiraBaseUrl: '',
  jiraProjectKey: '',
  jiraEmail: '',
  hasJiraApiToken: false,
  jiraIssueType: 'Bug',
  jiraValidateOnly: true,
  trelloBoardId: '',
  trelloListId: '',
  hasTrelloApiKey: false,
  hasTrelloToken: false,
  trelloValidateOnly: true,
};

function makeCandidate(decision: IncidentDecision = 'BUG_AUTO', confidence: Confidence = 'HIGH'): IncidentCandidate {
  return {
    caseId: 'E37-AM-01.01.1',
    title: 'elimina registro y valida resultado success',
    bugTitle: '[QA-AUTO][E37-AM-01.01.1] No se encuentra la opcion Eliminar en Cuentas Contables',
    bugDescription: 'N/D',
    block: 'Bloque 5',
    specFile: 'tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts',
    project: 'chromium-gestorAM',
    role: 'gestorAM',
    browser: 'chromium',
    status: 'FAILED',
    durationMs: 53000,
    retry: 0,
    finalUrl: 'https://distribuciongastos.pacificotest.com.pe/parametrizacion/cuentas-contables/',
    phase: 'Ejecutar accion Eliminar desde la tabla',
    classification: 'NAV_FAILURE',
    errorMessage: 'Debe existir la opcion Eliminar en el menu de acciones.',
    expectedResult: 'La opcion Eliminar en el menu de acciones debe estar visible.',
    observedResult: 'No se encontro la opcion Eliminar en el menu de acciones dentro del tiempo maximo de 5000 ms.',
    stackSummary: 'tests/e2e/bloque-5/_shared/am-delete-record.ts:94',
    expected: 'visible',
    received: 'N/D',
    errorOrigin: 'tests/e2e/bloque-5/_shared/am-delete-record.ts:94',
    timeout: '5000 ms',
    executedAt: '2026-08-19T00:00:00.000Z',
    evidence: {
      screenshot: ['test-results/e37/test-failed-1.png'],
      video: ['test-results/e37/video.webm'],
      trace: ['test-results/e37/trace.zip'],
      htmlReport: ['playwright-report/index.html'],
      logs: ['test-results/e37/error-context.md'],
    },
    action: decision === 'BUG_AUTO' ? 'CANDIDATO A BUG' : 'CANDIDATO A BUG - REVISION',
    technicalDiagnostic: {
      error: 'ELEMENT_NOT_FOUND',
      caseId: 'E37-AM-01.01.1',
      phase: 'Ejecutar accion Eliminar desde la tabla',
      probableCause: 'NAV_FAILURE',
      message: 'Debe existir la opcion Eliminar en el menu de acciones.',
      expectedRole: 'gestorAM',
      expectedProject: 'chromium-gestorAM',
      usedProject: 'chromium-gestorAM',
      file: 'tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts',
      technicalOrigin: 'tests/e2e/bloque-5/_shared/am-delete-record.ts:94',
      view: 'Cuentas Contables',
    },
    incidentDecision: {
      classification: 'BUSINESS_RULE_FAILURE',
      probableCause: 'OPTION_NOT_AVAILABLE',
      confidence,
      evidence: [],
      decision,
      reason:
        'El caso requiere funcionalmente la accion Eliminar y la ejecucion se realizo con el rol, proyecto y vista esperados, pero dicha accion no se encuentra disponible.',
      recommendation: 'Registrar incidencia funcional por ausencia de la accion Eliminar en la vista Cuentas Contables para el rol gestorAM.',
      azureDevOpsEligibility: decision === 'BUG_AUTO' && confidence === 'HIGH' ? 'ELEGIBLE PARA CREACION AUTOMATICA' : 'REQUIERE REVISION',
    },
    originalError: 'Error: Debe existir la opcion Eliminar en el menu de acciones.',
  };
}

function makeCandidateWithEvidence(options: { screenshot?: string; trace?: string; video?: string } = {}): IncidentCandidate {
  const candidate = makeCandidate();
  candidate.evidence.screenshot = options.screenshot ? [options.screenshot] : [];
  candidate.evidence.trace = options.trace ? [options.trace] : [];
  candidate.evidence.video = options.video ? [options.video] : [];
  return candidate;
}

function createEvidenceFile(name: string, bytes: number[] = [1, 2, 3]): string {
  const dir = path.join(process.cwd(), 'test-results', 'azure-service-evidence');
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, name);
  fs.writeFileSync(filePath, Buffer.from(bytes));
  return path.relative(process.cwd(), filePath).replace(/\\/g, '/');
}

function makeClient(overrides: Partial<AzureIncidentClient> = {}) {
  const calls = {
    query: 0,
    get: 0,
    relations: 0,
    create: 0,
    upload: 0,
    link: 0,
  };
  const client: AzureIncidentClient = {
    async queryWorkItems() {
      calls.query += 1;
      return { workItems: [] };
    },
    async getWorkItems() {
      calls.get += 1;
      return [];
    },
    async getWorkItemWithRelations() {
      calls.relations += 1;
      return { id: 123, relations: [] };
    },
    async createBug() {
      calls.create += 1;
      return { id: 123, url: 'https://dev.azure.com/org/project/_workitems/edit/123' };
    },
    async uploadAttachment() {
      calls.upload += 1;
      return { url: 'https://dev.azure.com/org/project/_apis/wit/attachments/1' };
    },
    async linkAttachment() {
      calls.link += 1;
      return { id: 123 };
    },
    ...overrides,
  };

  return { client, calls };
}

function evidenceRelation(
  signature: string,
  options: { comment?: string; name?: string } = {},
) {
  return {
    rel: 'AttachedFile',
    attributes: {
      name: options.name ?? 'evidence.png',
      comment: options.comment ?? `QA-AUTO Evidence\nQA-AUTO-EVIDENCE: ${signature}`,
    },
  };
}

function evidenceSignature(candidate: IncidentCandidate, type: 'screenshot' | 'trace' | 'video', retry = candidate.retry): string {
  return `${candidate.caseId}|${candidate.project}|${retry}|${type}`;
}

test.describe('azure incident creation service', () => {
  test('default service client uses the product createAzureBug implementation', () => {
    expect(defaultAzureIncidentClient.createBug).toBe(createAzureBug);
  });

  test('BUG_AUTO + HIGH create=true autoCreate=true without duplicate creates once', async () => {
    const { client, calls } = makeClient();
    const result = await processAzureIncident(makeCandidate(), baseConfig, client);

    expect(result.status).toBe('CREATED');
    expect(result.status === 'CREATED' ? result.workItemId : undefined).toBe(123);
    expect(calls.query).toBe(1);
    expect(calls.get).toBe(1);
    expect(calls.create).toBe(1);
  });

  test('BUG_AUTO + HIGH with duplicate does not create', async () => {
    const candidate = makeCandidate();
    const { client, calls } = makeClient({
      async queryWorkItems() {
        calls.query += 1;
        return { workItems: [{ id: 77 }] };
      },
      async getWorkItems() {
        calls.get += 1;
        return [
          {
            id: 77,
            url: 'https://dev.azure.com/org/project/_workitems/edit/77',
            fields: {
              'System.Description': 'QA-AUTO-SIGNATURE:<br>E37-AM-01.01.1|OPTION_NOT_AVAILABLE|Cuentas Contables',
              'System.State': 'Active',
              'System.Tags': 'QA-AUTO; Playwright; E37-AM-01.01.1',
            },
          },
        ];
      },
    });
    const result = await processAzureIncident(candidate, baseConfig, client);

    expect(result.status).toBe('DUPLICATE');
    expect(result.status === 'DUPLICATE' ? result.workItemId : undefined).toBe(77);
    expect(calls.create).toBe(0);
  });

  test('CREATED + screenshot + trace uploads and links both evidences', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('created-screenshot.png'),
      trace: createEvidenceFile('created-trace.zip'),
    });
    const { client, calls } = makeClient();
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.status).toBe('CREATED');
    expect(calls.relations).toBe(1);
    expect(calls.upload).toBe(2);
    expect(calls.link).toBe(2);
    expect(result.attachments?.map((attachment) => attachment.status)).toEqual(['LINKED', 'LINKED', 'SKIPPED']);
    expect(result.attachments?.[2]).toMatchObject({ type: 'video', status: 'SKIPPED', reason: 'VIDEO_DISABLED' });
  });

  test('DUPLICATE + screenshot + trace links evidences to existing Bug without create', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('duplicate-screenshot.png'),
      trace: createEvidenceFile('duplicate-trace.zip'),
    });
    const { client, calls } = makeClient({
      async queryWorkItems() {
        calls.query += 1;
        return { workItems: [{ id: 60721 }], __statusCode: 200 };
      },
      async getWorkItems() {
        calls.get += 1;
        return [
          {
            id: 60721,
            fields: {
              'System.Description': 'QA-AUTO-SIGNATURE:<br>E37-AM-01.01.1|OPTION_NOT_AVAILABLE|Cuentas Contables',
              'System.State': 'Backlog',
              'System.Tags': 'QA-AUTO; Playwright; Bloque-5; E37-AM-01.01.1',
            },
          },
        ];
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.status).toBe('DUPLICATE');
    expect(result.status === 'DUPLICATE' ? result.workItemId : undefined).toBe(60721);
    expect(calls.create).toBe(0);
    expect(calls.relations).toBe(1);
    expect(calls.upload).toBe(2);
    expect(calls.link).toBe(2);
    expect(result.attachments?.map((attachment) => attachment.status)).toEqual(['LINKED', 'LINKED', 'SKIPPED']);
    expect(result.attachments?.[2]).toMatchObject({ type: 'video', status: 'SKIPPED', reason: 'VIDEO_DISABLED' });
  });

  test('feature flag false does not upload evidence', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('flag-off-screenshot.png'),
      trace: createEvidenceFile('flag-off-trace.zip'),
    });
    const { client, calls } = makeClient();
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: false }, client);

    expect(result.status).toBe('CREATED');
    expect(calls.upload).toBe(0);
    expect(calls.link).toBe(0);
    expect(calls.relations).toBe(0);
    expect(result.attachments?.every((attachment) => attachment.status === 'SKIPPED')).toBe(true);
  });

  test('missing screenshot is FILE_NOT_FOUND and trace continues', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: 'test-results/azure-service-evidence/missing.png',
      trace: createEvidenceFile('missing-screenshot-trace.zip'),
    });
    const { client, calls } = makeClient();
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[0]).toMatchObject({ type: 'screenshot', status: 'FILE_NOT_FOUND' });
    expect(result.attachments?.[1]).toMatchObject({ type: 'trace', status: 'LINKED' });
    expect(calls.relations).toBe(1);
    expect(calls.upload).toBe(1);
    expect(calls.link).toBe(1);
  });

  test('upload screenshot error keeps CREATED and trace continues', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('upload-error-screenshot.png'),
      trace: createEvidenceFile('upload-error-trace.zip'),
    });
    const { client, calls } = makeClient({
      async uploadAttachment(_filePath, fileName) {
        calls.upload += 1;
        if (fileName.includes('screenshot')) {
          throw Object.assign(new Error('Azure DevOps HTTP 500'), { statusCode: 500 });
        }

        return { url: 'https://dev.azure.com/org/project/_apis/wit/attachments/trace' };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[0]).toMatchObject({ type: 'screenshot', status: 'UPLOAD_ERROR' });
    expect(result.attachments?.[1]).toMatchObject({ type: 'trace', status: 'LINKED' });
    expect(calls.upload).toBe(2);
    expect(calls.link).toBe(1);
  });

  test('link screenshot error keeps CREATED and trace continues', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('link-error-screenshot.png'),
      trace: createEvidenceFile('link-error-trace.zip'),
    });
    const { client, calls } = makeClient({
      async linkAttachment(_workItemId, _attachmentUrl, comment) {
        calls.link += 1;
        if (comment.includes('Screenshot')) {
          throw Object.assign(new Error('Azure DevOps HTTP 400'), { statusCode: 400 });
        }

        return { id: 123 };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[0]).toMatchObject({ type: 'screenshot', status: 'LINK_ERROR' });
    expect(result.attachments?.[1]).toMatchObject({ type: 'trace', status: 'LINKED' });
    expect(calls.upload).toBe(2);
    expect(calls.link).toBe(2);
  });

  test('empty trace is EMPTY_FILE', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('empty-trace-screenshot.png'),
      trace: createEvidenceFile('empty-trace.zip', []),
    });
    const { client, calls } = makeClient();
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[0]).toMatchObject({ type: 'screenshot', status: 'LINKED' });
    expect(result.attachments?.[1]).toMatchObject({ type: 'trace', status: 'EMPTY_FILE' });
    expect(calls.relations).toBe(1);
    expect(calls.upload).toBe(1);
    expect(calls.link).toBe(1);
  });

  test('video flag false skips video with VIDEO_DISABLED and does not upload it', async () => {
    const candidate = makeCandidateWithEvidence({
      video: createEvidenceFile('video-disabled.webm'),
    });
    const { client, calls } = makeClient();
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true, azureAttachVideo: false }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[2]).toMatchObject({ type: 'video', status: 'SKIPPED', reason: 'VIDEO_DISABLED' });
    expect(calls.upload).toBe(0);
    expect(calls.link).toBe(0);
  });

  test('video flag true with valid file uploads and links video', async () => {
    const candidate = makeCandidateWithEvidence({
      video: createEvidenceFile('valid-video.webm'),
    });
    let receivedComment = '';
    const { client, calls } = makeClient({
      async linkAttachment(_workItemId, _attachmentUrl, comment) {
        calls.link += 1;
        receivedComment = comment;
        return { id: 123 };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true, azureAttachVideo: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[2]).toMatchObject({
      type: 'video',
      status: 'LINKED',
      fileName: 'E37-AM-01.01.1_chromium-gestorAM_retry-0_video.webm',
    });
    expect(receivedComment).toContain('QA-AUTO Video - E37-AM-01.01.1');
    expect(receivedComment).toContain('QA-AUTO-EVIDENCE: E37-AM-01.01.1|chromium-gestorAM|0|video');
    expect(calls.upload).toBe(1);
    expect(calls.link).toBe(1);
  });

  test('existing video evidence returns ALREADY_LINKED without upload or link', async () => {
    const candidate = makeCandidateWithEvidence({
      video: createEvidenceFile('already-linked-video.webm'),
    });
    const { client, calls } = makeClient({
      async getWorkItemWithRelations() {
        calls.relations += 1;
        return { id: 123, relations: [evidenceRelation(evidenceSignature(candidate, 'video'))] };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true, azureAttachVideo: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[2]).toMatchObject({ type: 'video', status: 'ALREADY_LINKED' });
    expect(calls.upload).toBe(0);
    expect(calls.link).toBe(0);
  });

  test('video above max MB is skipped with VIDEO_TOO_LARGE without upload', async () => {
    const candidate = makeCandidateWithEvidence({
      video: createEvidenceFile('too-large-video.webm', [1, 2, 3]),
    });
    const { client, calls } = makeClient();
    const result = await processAzureIncident(
      candidate,
      { ...baseConfig, azureAttachEvidence: true, azureAttachVideo: true, azureMaxVideoMb: 0.000001 },
      client,
    );

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[2]).toMatchObject({ type: 'video', status: 'SKIPPED', reason: 'VIDEO_TOO_LARGE', maxMb: 0.000001 });
    expect(calls.upload).toBe(0);
    expect(calls.link).toBe(0);
  });

  test('missing video file is FILE_NOT_FOUND and keeps CREATED', async () => {
    const candidate = makeCandidateWithEvidence({
      video: 'test-results/azure-service-evidence/missing-video.webm',
    });
    const { client, calls } = makeClient();
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true, azureAttachVideo: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[2]).toMatchObject({ type: 'video', status: 'FILE_NOT_FOUND' });
    expect(calls.upload).toBe(0);
    expect(calls.link).toBe(0);
  });

  test('video upload 500 is UPLOAD_ERROR and keeps CREATED', async () => {
    const candidate = makeCandidateWithEvidence({
      video: createEvidenceFile('upload-error-video.webm'),
    });
    const { client, calls } = makeClient({
      async uploadAttachment(_filePath, fileName) {
        calls.upload += 1;
        if (fileName.includes('video')) {
          throw Object.assign(new Error('Azure DevOps HTTP 500'), { statusCode: 500 });
        }

        return { url: 'https://dev.azure.com/org/project/_apis/wit/attachments/1' };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true, azureAttachVideo: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[2]).toMatchObject({ type: 'video', status: 'UPLOAD_ERROR' });
    expect(calls.upload).toBe(1);
    expect(calls.link).toBe(0);
  });

  test('video link 400 is LINK_ERROR and keeps CREATED', async () => {
    const candidate = makeCandidateWithEvidence({
      video: createEvidenceFile('link-error-video.webm'),
    });
    const { client, calls } = makeClient({
      async linkAttachment(_workItemId, _attachmentUrl, comment) {
        calls.link += 1;
        if (comment.includes('QA-AUTO Video')) {
          throw Object.assign(new Error('Azure DevOps HTTP 400'), { statusCode: 400 });
        }

        return { id: 123 };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true, azureAttachVideo: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[2]).toMatchObject({ type: 'video', status: 'LINK_ERROR' });
    expect(calls.upload).toBe(1);
    expect(calls.link).toBe(1);
  });

  test('video upload timeout is UPLOAD_ERROR', async () => {
    const candidate = makeCandidateWithEvidence({
      video: createEvidenceFile('timeout-video.webm'),
    });
    const { client, calls } = makeClient({
      async uploadAttachment(_filePath, fileName) {
        calls.upload += 1;
        if (fileName.includes('video')) {
          throw new Error('Timeout al subir evidencia a Azure DevOps.');
        }

        return { url: 'https://dev.azure.com/org/project/_apis/wit/attachments/1' };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true, azureAttachVideo: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[2]).toMatchObject({ type: 'video', status: 'UPLOAD_ERROR' });
    expect(calls.upload).toBe(1);
    expect(calls.link).toBe(0);
  });

  test('same screenshot and trace signatures already linked return ALREADY_LINKED without upload or link', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('both-already-linked-screenshot.png'),
      trace: createEvidenceFile('both-already-linked-trace.zip'),
    });
    const { client, calls } = makeClient({
      async getWorkItemWithRelations() {
        calls.relations += 1;
        return {
          id: 123,
          relations: [
            evidenceRelation(evidenceSignature(candidate, 'screenshot')),
            evidenceRelation(`  ${candidate.caseId} | ${candidate.project} | ${candidate.retry} | TRACE  `),
          ],
        };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.map((attachment) => attachment.status)).toEqual(['ALREADY_LINKED', 'ALREADY_LINKED', 'SKIPPED']);
    expect(calls.upload).toBe(0);
    expect(calls.link).toBe(0);
  });

  test('only screenshot signature already linked returns ALREADY_LINKED and trace uploads', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('already-linked-screenshot.png'),
      trace: createEvidenceFile('already-linked-trace.zip'),
    });
    const { client, calls } = makeClient({
      async getWorkItemWithRelations() {
        calls.relations += 1;
        return { id: 123, relations: [evidenceRelation(evidenceSignature(candidate, 'screenshot'))] };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[0]).toMatchObject({ type: 'screenshot', status: 'ALREADY_LINKED' });
    expect(result.attachments?.[1]).toMatchObject({ type: 'trace', status: 'LINKED' });
    expect(calls.upload).toBe(1);
    expect(calls.link).toBe(1);
  });

  test('screenshot existing and trace missing links only trace', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('screenshot-exists.png'),
      trace: createEvidenceFile('trace-missing-from-relations.zip'),
    });
    const { client, calls } = makeClient({
      async getWorkItemWithRelations() {
        calls.relations += 1;
        return { id: 123, relations: [evidenceRelation(evidenceSignature(candidate, 'screenshot'))] };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.attachments?.map((attachment) => attachment.status)).toEqual(['ALREADY_LINKED', 'LINKED', 'SKIPPED']);
    expect(calls.upload).toBe(1);
    expect(calls.link).toBe(1);
  });

  test('same case project and type with different retry is treated as new evidence', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('different-retry-screenshot.png'),
      trace: createEvidenceFile('different-retry-trace.zip'),
    });
    const { client, calls } = makeClient({
      async getWorkItemWithRelations() {
        calls.relations += 1;
        return { id: 123, relations: [evidenceRelation(evidenceSignature(candidate, 'screenshot', 1))] };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.attachments?.map((attachment) => attachment.status)).toEqual(['LINKED', 'LINKED', 'SKIPPED']);
    expect(calls.upload).toBe(2);
    expect(calls.link).toBe(2);
  });

  test('attachment comment without QA-AUTO-EVIDENCE marker does not match', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('no-marker-screenshot.png'),
      trace: createEvidenceFile('no-marker-trace.zip'),
    });
    const { client, calls } = makeClient({
      async getWorkItemWithRelations() {
        calls.relations += 1;
        return {
          id: 123,
          relations: [evidenceRelation('', { comment: `QA-AUTO Screenshot - ${candidate.caseId}` })],
        };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.attachments?.map((attachment) => attachment.status)).toEqual(['LINKED', 'LINKED', 'SKIPPED']);
    expect(calls.upload).toBe(2);
    expect(calls.link).toBe(2);
  });

  test('different evidence signature does not match', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('different-signature-screenshot.png'),
      trace: createEvidenceFile('different-signature-trace.zip'),
    });
    const { client, calls } = makeClient({
      async getWorkItemWithRelations() {
        calls.relations += 1;
        return { id: 123, relations: [evidenceRelation('E99-AM|chromium-other|0|screenshot')] };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.attachments?.map((attachment) => attachment.status)).toEqual(['LINKED', 'LINKED', 'SKIPPED']);
    expect(calls.upload).toBe(2);
    expect(calls.link).toBe(2);
  });

  test('relation read failure skips evidence without changing CREATED result', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('relation-fail-screenshot.png'),
      trace: createEvidenceFile('relation-fail-trace.zip'),
    });
    const { client, calls } = makeClient({
      async getWorkItemWithRelations() {
        calls.relations += 1;
        throw new Error('Azure DevOps HTTP 500 relations');
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.map((attachment) => attachment.status)).toEqual(['SKIPPED', 'SKIPPED', 'SKIPPED']);
    expect(result.attachments?.every((attachment) => attachment.reason === 'EVIDENCE_DEDUP_CHECK_FAILED')).toBe(true);
    expect(calls.upload).toBe(0);
    expect(calls.link).toBe(0);
  });

  test('DUPLICATE with existing screenshot and trace evidence does not create upload or link', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('duplicate-existing-screenshot.png'),
      trace: createEvidenceFile('duplicate-existing-trace.zip'),
    });
    const { client, calls } = makeClient({
      async queryWorkItems() {
        calls.query += 1;
        return { workItems: [{ id: 60721 }], __statusCode: 200 };
      },
      async getWorkItems() {
        calls.get += 1;
        return [
          {
            id: 60721,
            fields: {
              'System.Description': 'QA-AUTO-SIGNATURE:<br>E37-AM-01.01.1|OPTION_NOT_AVAILABLE|Cuentas Contables',
              'System.State': 'Backlog',
              'System.Tags': 'QA-AUTO; Playwright; Bloque-5; E37-AM-01.01.1',
            },
          },
        ];
      },
      async getWorkItemWithRelations() {
        calls.relations += 1;
        return {
          id: 60721,
          relations: [
            evidenceRelation(evidenceSignature(candidate, 'screenshot')),
            evidenceRelation(evidenceSignature(candidate, 'trace'), { name: 'trace.zip' }),
          ],
        };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.status).toBe('DUPLICATE');
    expect(calls.create).toBe(0);
    expect(calls.upload).toBe(0);
    expect(calls.link).toBe(0);
    expect(result.attachments?.map((attachment) => attachment.status)).toEqual(['ALREADY_LINKED', 'ALREADY_LINKED', 'SKIPPED']);
  });

  test('upload timeout is UPLOAD_ERROR and trace continues', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('upload-timeout-screenshot.png'),
      trace: createEvidenceFile('upload-timeout-trace.zip'),
    });
    const { client, calls } = makeClient({
      async uploadAttachment(_filePath, fileName) {
        calls.upload += 1;
        if (fileName.includes('screenshot')) {
          throw new Error('Timeout al subir evidencia a Azure DevOps.');
        }

        return { url: 'https://dev.azure.com/org/project/_apis/wit/attachments/trace' };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[0]).toMatchObject({ type: 'screenshot', status: 'UPLOAD_ERROR' });
    expect(result.attachments?.[1]).toMatchObject({ type: 'trace', status: 'LINKED' });
  });

  test('link timeout is LINK_ERROR and trace continues', async () => {
    const candidate = makeCandidateWithEvidence({
      screenshot: createEvidenceFile('link-timeout-screenshot.png'),
      trace: createEvidenceFile('link-timeout-trace.zip'),
    });
    const { client } = makeClient({
      async linkAttachment(_workItemId, _attachmentUrl, comment) {
        if (comment.includes('Screenshot')) {
          throw new Error('Timeout al vincular evidencia al Bug de Azure DevOps.');
        }

        return { id: 123 };
      },
    });
    const result = await processAzureIncident(candidate, { ...baseConfig, azureAttachEvidence: true }, client);

    expect(result.status).toBe('CREATED');
    expect(result.attachments?.[0]).toMatchObject({ type: 'screenshot', status: 'LINK_ERROR' });
    expect(result.attachments?.[1]).toMatchObject({ type: 'trace', status: 'LINKED' });
  });

  test('BUG_AUTO + HIGH with active Backlog bug 60721 and same signature returns DUPLICATE without create', async () => {
    const candidate = makeCandidate();
    const { client, calls } = makeClient({
      async queryWorkItems() {
        calls.query += 1;
        return { workItems: [{ id: 60721 }], __statusCode: 200 };
      },
      async getWorkItems() {
        calls.get += 1;
        return [
          {
            id: 60721,
            url: 'https://dev.azure.com/org/project/_workitems/edit/60721',
            fields: {
              'System.Description': 'QA-AUTO-SIGNATURE:<br>E37-AM-01.01.1|OPTION_NOT_AVAILABLE|Cuentas Contables',
              'System.State': 'Backlog',
              'System.Tags': 'QA-AUTO; Playwright; Bloque-5; E37-AM-01.01.1',
            },
          },
        ];
      },
    });
    const result = await processAzureIncident(candidate, baseConfig, client);

    expect(result.status).toBe('DUPLICATE');
    expect(result.status === 'DUPLICATE' ? result.workItemId : undefined).toBe(60721);
    expect(calls.query).toBe(1);
    expect(calls.get).toBe(1);
    expect(calls.create).toBe(0);
  });

  test('BUG_AUTO + HIGH with same case ID but different signature is not duplicate', async () => {
    const { client, calls } = makeClient({
      async queryWorkItems() {
        calls.query += 1;
        return { workItems: [{ id: 60721 }], __statusCode: 200 };
      },
      async getWorkItems() {
        calls.get += 1;
        return [
          {
            id: 60721,
            fields: {
              'System.Description': 'QA-AUTO-SIGNATURE:<br>E37-AM-01.01.1|PROCESS_TIMEOUT|Cuentas Contables',
              'System.State': 'Backlog',
              'System.Tags': 'QA-AUTO; Playwright; Bloque-5; E37-AM-01.01.1',
            },
          },
        ];
      },
    });
    const result = await processAzureIncident(makeCandidate(), baseConfig, client);

    expect(result.status).toBe('CREATED');
    expect(calls.create).toBe(1);
  });

  test('BUG_AUTO + HIGH with closed bug and same signature is not duplicate', async () => {
    const { client, calls } = makeClient({
      async queryWorkItems() {
        calls.query += 1;
        return { workItems: [{ id: 60721 }], __statusCode: 200 };
      },
      async getWorkItems() {
        calls.get += 1;
        return [
          {
            id: 60721,
            fields: {
              'System.Description': 'QA-AUTO-SIGNATURE:<br>E37-AM-01.01.1|OPTION_NOT_AVAILABLE|Cuentas Contables',
              'System.State': 'Closed',
              'System.Tags': 'QA-AUTO; Playwright; Bloque-5; E37-AM-01.01.1',
            },
          },
        ];
      },
    });
    const result = await processAzureIncident(makeCandidate(), baseConfig, client);

    expect(result.status).toBe('CREATED');
    expect(calls.create).toBe(1);
  });

  test('BUG_AUTO + HIGH with different existing signature continues to create', async () => {
    const { client, calls } = makeClient({
      async queryWorkItems() {
        calls.query += 1;
        return { workItems: [{ id: 78 }], __statusCode: 200 };
      },
      async getWorkItems() {
        calls.get += 1;
        return [
          {
            id: 78,
            fields: {
              'System.Description': 'QA-AUTO-SIGNATURE:<br>E37-AM-01.01.1|PROCESS_TIMEOUT|Cuentas Contables',
              'System.State': 'Active',
              'System.Tags': 'QA-AUTO; Playwright; E37-AM-01.01.1',
            },
          },
        ];
      },
    });
    const result = await processAzureIncident(makeCandidate(), baseConfig, client);

    expect(result.status).toBe('CREATED');
    expect(calls.create).toBe(1);
  });

  test('non BUG_AUTO decisions do not create', async () => {
    for (const decision of ['BUG_REVIEW', 'AUTOMATION_ISSUE', 'IGNORE'] as IncidentDecision[]) {
      const { client, calls } = makeClient();
      const result = await processAzureIncident(makeCandidate(decision, 'HIGH'), baseConfig, client);

      expect(result.status).toBe('SKIPPED');
      expect(result.status === 'SKIPPED' ? result.reason : undefined).toBe('NO ELEGIBLE');
      expect(calls.query).toBe(0);
      expect(calls.create).toBe(0);
    }
  });

  test('BUG_AUTO + MEDIUM does not create', async () => {
    const { client, calls } = makeClient();
    const result = await processAzureIncident(makeCandidate('BUG_AUTO', 'MEDIUM'), baseConfig, client);

    expect(result.status).toBe('SKIPPED');
    expect(result.status === 'SKIPPED' ? result.reason : undefined).toBe('NO ELEGIBLE');
    expect(calls.create).toBe(0);
  });

  test('preview mode does not query or create', async () => {
    const { client, calls } = makeClient();
    const result = await processAzureIncident(makeCandidate(), { ...baseConfig, mode: 'preview' }, client);

    expect(result.status).toBe('SKIPPED');
    expect(result.status === 'SKIPPED' ? result.reason : undefined).toBe('INCIDENT_MODE=preview');
    expect(calls.query).toBe(0);
    expect(calls.create).toBe(0);
  });

  test('AUTO_CREATE_INCIDENTS=false does not query or create', async () => {
    const { client, calls } = makeClient();
    const result = await processAzureIncident(makeCandidate(), { ...baseConfig, autoCreateIncidents: false }, client);

    expect(result.status).toBe('SKIPPED');
    expect(result.status === 'SKIPPED' ? result.reason : undefined).toBe('AUTO_CREATE_INCIDENTS=false');
    expect(calls.query).toBe(0);
    expect(calls.create).toBe(0);
  });

  test('WIQL error returns ERROR and does not try createBug', async () => {
    const candidate = makeCandidate();
    const { client, calls } = makeClient({
      async queryWorkItems() {
        calls.query += 1;
        throw new Error('Azure DevOps HTTP 500');
      },
    });
    const result = await processAzureIncident(candidate, baseConfig, client);

    expect(result.status).toBe('ERROR');
    expect(result.status === 'ERROR' ? result.message : '').toContain('Azure DevOps HTTP 500');
    expect(calls.create).toBe(0);
    expect(candidate.incidentDecision.decision).toBe('BUG_AUTO');
    expect(candidate.incidentDecision.confidence).toBe('HIGH');
  });

  test('WIQL timeout returns ERROR and does not try createBug', async () => {
    const { client, calls } = makeClient({
      async queryWorkItems() {
        calls.query += 1;
        throw new Error('Timeout al consultar duplicados en Azure DevOps.');
      },
    });
    const result = await processAzureIncident(makeCandidate(), baseConfig, client);

    expect(result.status).toBe('ERROR');
    expect(result.status === 'ERROR' ? result.message : '').toContain('Timeout al consultar duplicados');
    expect(calls.create).toBe(0);
  });

  test('WIQL 401 returns ERROR and does not try createBug', async () => {
    const { client, calls } = makeClient({
      async queryWorkItems() {
        calls.query += 1;
        throw Object.assign(new Error('Azure DevOps HTTP 401 Unauthorized'), { statusCode: 401 });
      },
    });
    const result = await processAzureIncident(makeCandidate(), baseConfig, client);

    expect(result.status).toBe('ERROR');
    expect(result.status === 'ERROR' ? result.statusCode : undefined).toBe(401);
    expect(calls.create).toBe(0);
  });

  test('WIQL 500 returns ERROR and does not try createBug', async () => {
    const { client, calls } = makeClient({
      async queryWorkItems() {
        calls.query += 1;
        throw Object.assign(new Error('Azure DevOps HTTP 500 Internal Server Error'), { statusCode: 500 });
      },
    });
    const result = await processAzureIncident(makeCandidate(), baseConfig, client);

    expect(result.status).toBe('ERROR');
    expect(result.status === 'ERROR' ? result.statusCode : undefined).toBe(500);
    expect(calls.create).toBe(0);
  });

  test('getWorkItems timeout returns ERROR and does not try createBug', async () => {
    const { client, calls } = makeClient({
      async queryWorkItems() {
        calls.query += 1;
        return { workItems: [{ id: 79 }], __statusCode: 200 };
      },
      async getWorkItems() {
        calls.get += 1;
        throw new Error('Timeout al leer candidatos de deduplicacion en Azure DevOps.');
      },
    });
    const result = await processAzureIncident(makeCandidate(), baseConfig, client);

    expect(result.status).toBe('ERROR');
    expect(result.status === 'ERROR' ? result.message : '').toContain('Timeout al leer candidatos');
    expect(calls.create).toBe(0);
  });

  test('createBug error returns ERROR with visible message and keeps classification unchanged', async () => {
    const candidate = makeCandidate();
    const { client, calls } = makeClient({
      async createBug() {
        calls.create += 1;
        throw Object.assign(new Error('Azure DevOps HTTP 400 Bad Request: Missing required field'), { statusCode: 400 });
      },
    });
    const result = await processAzureIncident(candidate, baseConfig, client);

    expect(result.status).toBe('ERROR');
    expect(result.status === 'ERROR' ? result.message : '').toContain('Missing required field');
    expect(result.status === 'ERROR' ? result.statusCode : undefined).toBe(400);
    expect(calls.create).toBe(1);
    expect(candidate.incidentDecision.decision).toBe('BUG_AUTO');
    expect(candidate.incidentDecision.confidence).toBe('HIGH');
  });

  test('missing PAT/config does not request Azure', async () => {
    const { client, calls } = makeClient();
    const result = await processAzureIncident(makeCandidate(), { ...baseConfig, hasAzurePat: false }, client);

    expect(result.status).toBe('SKIPPED');
    expect(result.status === 'SKIPPED' ? result.reason : undefined).toBe('CONFIGURACION INCOMPLETA');
    expect(calls.query).toBe(0);
    expect(calls.create).toBe(0);
  });

  test('maps bug to title, description and tags', () => {
    const patch = buildAzureBugPatch(makeCandidate());

    expect(Array.isArray(patch)).toBe(true);
    expect(patch).toHaveLength(3);
    expect(patch).toContainEqual({
      op: 'add',
      path: '/fields/System.Title',
      value: '[QA-AUTO][E37-AM-01.01.1] No se encuentra la opcion Eliminar en Cuentas Contables',
    });
    expect(patch.find((operation) => operation.path === '/fields/System.Title')?.value).not.toBe('');
    expect(patch.find((operation) => operation.path === '/fields/System.Description')?.value).toContain(
      'QA-AUTO-SIGNATURE:<br>\nE37-AM-01.01.1|OPTION_NOT_AVAILABLE|Cuentas Contables',
    );
    expect(patch.find((operation) => operation.path === '/fields/System.Description')?.value).not.toBe('');
    expect(patch.find((operation) => operation.path === '/fields/System.Tags')?.value).toContain('QA-AUTO; Playwright; Bloque-5');
    expect(patch.find((operation) => operation.path === '/fields/System.Tags')?.value).not.toBe('');
  });

  test('eligible create flow always returns CREATED, DUPLICATE or ERROR after gate passes', async () => {
    const expectedStatuses = new Set(['CREATED', 'DUPLICATE', 'ERROR']);
    const { client } = makeClient();

    const result = await processAzureIncident(makeCandidate(), baseConfig, client);

    expect(expectedStatuses.has(result.status)).toBe(true);
  });

  test('validateOnly mode posts to Azure but returns VALIDATED instead of CREATED', async () => {
    let receivedOptions: unknown;
    const { client, calls } = makeClient({
      async createBug(_patch, _config, options) {
        calls.create += 1;
        receivedOptions = options;
        return { id: 12345, url: 'https://dev.azure.com/org/project/_workitems/edit/12345', __statusCode: 200 };
      },
    });
    const result = await processAzureIncident(makeCandidate(), { ...baseConfig, azureValidateOnly: true }, client);

    expect(result.status).toBe('VALIDATED');
    expect(result.status === 'VALIDATED' ? result.message : '').toContain('validateOnly=true');
    expect(calls.create).toBe(1);
    expect(receivedOptions).toEqual({ validateOnly: true });
  });

  test('real create mode passes validateOnly=false to createBug', async () => {
    let receivedOptions: unknown;
    const { client, calls } = makeClient({
      async createBug(_patch, _config, options) {
        calls.create += 1;
        receivedOptions = options;
        return { id: 12345, url: 'https://dev.azure.com/org/project/_workitems/edit/12345', __statusCode: 200 };
      },
    });
    const result = await processAzureIncident(makeCandidate(), { ...baseConfig, azureValidateOnly: false }, client);

    expect(result.status).toBe('CREATED');
    expect(result.status === 'CREATED' ? result.workItemId : undefined).toBe(12345);
    expect(calls.create).toBe(1);
    expect(receivedOptions).toEqual({ validateOnly: false });
  });

  test('validateOnly Azure error returns validation ERROR', async () => {
    const { client } = makeClient({
      async createBug() {
        throw Object.assign(new Error('Azure DevOps HTTP 400 Bad Request: Field Custom.Required is required'), {
          statusCode: 400,
        });
      },
    });
    const result = await processAzureIncident(makeCandidate(), { ...baseConfig, azureValidateOnly: true }, client);

    expect(result.status).toBe('ERROR');
    expect(result.status === 'ERROR' ? result.operation : undefined).toBe('validate');
    expect(result.status === 'ERROR' ? result.statusCode : undefined).toBe(400);
    expect(result.status === 'ERROR' ? result.message : '').toContain('Field Custom.Required is required');
  });
});
