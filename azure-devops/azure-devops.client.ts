import fs from 'fs';
import type { AzureJsonPatchOperation } from './azure-devops.mapper';
import type { IncidentRuntimeConfig } from '../integrations/incidents/incident.types';
import { debug, error as logError } from '../integrations/incidents/incident-logger';

const API_VERSION = '7.1';
const DEFAULT_TIMEOUT_MS = 15_000;

export type AzureWorkItemSummary = {
  id: number;
  url?: string;
  __statusCode?: number;
  fields?: Record<string, string>;
  _links?: {
    html?: {
      href?: string;
    };
  };
};

export type AzureWorkItemRelation = {
  rel?: string;
  url?: string;
  attributes?: {
    comment?: string;
    name?: string;
    [key: string]: unknown;
  };
};

export type AzureWorkItemWithRelations = AzureWorkItemSummary & {
  relations?: AzureWorkItemRelation[];
};

export type AzureWiqlResponse = {
  workItems?: Array<{ id: number; url?: string }>;
  __statusCode?: number;
};

export type CreateAzureBugOptions = {
  validateOnly?: boolean;
};

export type AzureAttachmentUploadResponse = {
  id?: string;
  url: string;
  __statusCode?: number;
};

export class AzureDevOpsRequestError extends Error {
  constructor(message: string, readonly statusCode?: number) {
    super(message);
    this.name = 'AzureDevOpsRequestError';
  }
}

export function loadIncidentRuntimeConfig(): IncidentRuntimeConfig {
  const incidentProvider = readEnvValue('INCIDENT_PROVIDER');
  const autoCreateIncidents = readEnvValue('AUTO_CREATE_INCIDENTS');
  const incidentMode = readEnvValue('INCIDENT_MODE');
  const azureValidateOnly = readEnvValue('AZURE_DEVOPS_VALIDATE_ONLY');
  const attachEvidence = readBooleanEnvWithFallback('INCIDENT_ATTACH_EVIDENCE', 'AZURE_DEVOPS_ATTACH_EVIDENCE', false);
  const attachVideo = readBooleanEnvWithFallback('INCIDENT_ATTACH_VIDEO', 'AZURE_DEVOPS_ATTACH_VIDEO', false);
  const maxVideoMb = readPositiveNumberEnvWithFallback('INCIDENT_MAX_VIDEO_MB', 'AZURE_DEVOPS_MAX_VIDEO_MB', 50);
  const requestTimeoutMs = readPositiveNumberEnvWithFallback('INCIDENT_REQUEST_TIMEOUT_MS', 'AZURE_DEVOPS_REQUEST_TIMEOUT_MS', 15_000);
  const config: IncidentRuntimeConfig = {
    autoCreateIncidents: autoCreateIncidents === 'true',
    mode: incidentMode === 'create' ? 'create' : 'preview',
    provider: readIncidentProvider(incidentProvider),
    attachEvidence,
    attachVideo,
    maxVideoMb,
    requestTimeoutMs,
    azureOrganization: process.env.AZURE_DEVOPS_ORGANIZATION?.trim() ?? '',
    azureProject: process.env.AZURE_DEVOPS_PROJECT?.trim() ?? '',
    hasAzurePat: Boolean(process.env.AZURE_DEVOPS_PAT?.trim()),
    azureValidateOnly: azureValidateOnly === 'true',
    azureAttachEvidence: attachEvidence,
    azureAttachVideo: attachVideo,
    azureMaxVideoMb: maxVideoMb,
    jiraBaseUrl: process.env.JIRA_BASE_URL?.trim() ?? '',
    jiraProjectKey: process.env.JIRA_PROJECT_KEY?.trim() ?? '',
    jiraEmail: process.env.JIRA_EMAIL?.trim() ?? '',
    hasJiraApiToken: Boolean(process.env.JIRA_API_TOKEN?.trim()),
    jiraIssueType: process.env.JIRA_ISSUE_TYPE?.trim() || 'Bug',
    jiraValidateOnly: readEnvValue('JIRA_VALIDATE_ONLY') !== 'false',
    trelloBoardId: process.env.TRELLO_BOARD_ID?.trim() ?? '',
    trelloListId: process.env.TRELLO_LIST_ID?.trim() ?? '',
    hasTrelloApiKey: Boolean(process.env.TRELLO_API_KEY?.trim()),
    hasTrelloToken: Boolean(process.env.TRELLO_TOKEN?.trim()),
    trelloValidateOnly: readEnvValue('TRELLO_VALIDATE_ONLY') !== 'false',
  };

  debugAzureConfig(config);

  return config;
}

export function validateAzurePreviewConfig(config: IncidentRuntimeConfig): string[] {
  const errors: string[] = [];

  if (config.provider !== 'azure') {
    return errors;
  }

  if (!config.azureOrganization) {
    errors.push('Falta AZURE_DEVOPS_ORGANIZATION.');
  }

  if (!config.azureProject) {
    errors.push('Falta AZURE_DEVOPS_PROJECT.');
  }

  if (config.mode === 'create' && config.autoCreateIncidents && !config.hasAzurePat) {
    errors.push('Falta AZURE_DEVOPS_PAT para crear incidencias reales.');
  }

  return errors;
}

function readEnvValue(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value.toLowerCase() : undefined;
}

function readRawEnvValue(name: string): string {
  const value = process.env[name];
  return value === undefined || value.trim() === '' ? '<unset>' : value.trim();
}

function readPositiveNumberEnv(name: string, fallback: number): number {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function readBooleanEnvWithFallback(primary: string, fallbackName: string, defaultValue: boolean): boolean {
  const primaryValue = readEnvValue(primary);
  if (primaryValue !== undefined) {
    return primaryValue === 'true';
  }

  const fallbackValue = readEnvValue(fallbackName);
  if (fallbackValue !== undefined) {
    return fallbackValue === 'true';
  }

  return defaultValue;
}

function readPositiveNumberEnvWithFallback(primary: string, fallbackName: string, fallback: number): number {
  if (process.env[primary] !== undefined) {
    return readPositiveNumberEnv(primary, fallback);
  }

  return readPositiveNumberEnv(fallbackName, fallback);
}

function readIncidentProvider(value: string | undefined): IncidentRuntimeConfig['provider'] {
  if (value === undefined) {
    return 'azure';
  }

  if (value === 'azure' || value === 'jira' || value === 'trello' || value === 'none') {
    return value;
  }

  throw new Error(`INCIDENT_PROVIDER no soportado: ${value}`);
}

function debugAzureConfig(config: IncidentRuntimeConfig): void {
  debug('[AZURE CONFIG DEBUG]', {
    INCIDENT_PROVIDER: readRawEnvValue('INCIDENT_PROVIDER'),
    AUTO_CREATE_INCIDENTS: readRawEnvValue('AUTO_CREATE_INCIDENTS'),
    INCIDENT_MODE: readRawEnvValue('INCIDENT_MODE'),
    AZURE_DEVOPS_ORGANIZATION_CONFIGURED: Boolean(config.azureOrganization),
    AZURE_DEVOPS_PROJECT_CONFIGURED: Boolean(config.azureProject),
    AZURE_DEVOPS_PAT_CONFIGURED: config.hasAzurePat,
    AZURE_DEVOPS_VALIDATE_ONLY: config.azureValidateOnly,
    AZURE_DEVOPS_ATTACH_EVIDENCE: config.azureAttachEvidence,
    AZURE_DEVOPS_ATTACH_VIDEO: config.azureAttachVideo,
    AZURE_DEVOPS_MAX_VIDEO_MB: config.azureMaxVideoMb,
    INCIDENT_ATTACH_EVIDENCE: config.attachEvidence,
    INCIDENT_ATTACH_VIDEO: config.attachVideo,
    INCIDENT_MAX_VIDEO_MB: config.maxVideoMb,
    INCIDENT_REQUEST_TIMEOUT_MS: config.requestTimeoutMs,
    'effective.provider': config.provider,
    'effective.autoCreate': config.autoCreateIncidents,
    'effective.mode': config.mode,
  });
}

export function getAzureWorkItemEndpoint(config: IncidentRuntimeConfig, options: CreateAzureBugOptions = {}): string {
  const query = options.validateOnly ? `validateOnly=true&api-version=${API_VERSION}` : `api-version=${API_VERSION}`;

  return `https://dev.azure.com/${encodeURIComponent(config.azureOrganization)}/${encodeURIComponent(
    config.azureProject,
  )}/_apis/wit/workitems/$Bug?${query}`;
}

export function getAzureWiqlEndpoint(config: IncidentRuntimeConfig): string {
  return `https://dev.azure.com/${encodeURIComponent(config.azureOrganization)}/${encodeURIComponent(
    config.azureProject,
  )}/_apis/wit/wiql?api-version=${API_VERSION}`;
}

export function getAzureWorkItemsEndpoint(config: IncidentRuntimeConfig, ids: number[]): string {
  const fields = [
    'System.Id',
    'System.Title',
    'System.State',
    'System.Tags',
    'System.Description',
  ].join(',');

  return `https://dev.azure.com/${encodeURIComponent(config.azureOrganization)}/${encodeURIComponent(
    config.azureProject,
  )}/_apis/wit/workitems?ids=${ids.join(',')}&fields=${encodeURIComponent(fields)}&api-version=${API_VERSION}`;
}

export function getAzureAttachmentEndpoint(config: IncidentRuntimeConfig, fileName: string): string {
  return `https://dev.azure.com/${encodeURIComponent(config.azureOrganization)}/${encodeURIComponent(
    config.azureProject,
  )}/_apis/wit/attachments?fileName=${encodeURIComponent(fileName)}&api-version=${API_VERSION}`;
}

export function getAzureWorkItemRelationsEndpoint(config: IncidentRuntimeConfig, workItemId: number): string {
  return `https://dev.azure.com/${encodeURIComponent(config.azureOrganization)}/${encodeURIComponent(
    config.azureProject,
  )}/_apis/wit/workitems/${workItemId}?api-version=${API_VERSION}`;
}

export function getAzureWorkItemWithRelationsEndpoint(config: IncidentRuntimeConfig, workItemId: number): string {
  return `https://dev.azure.com/${encodeURIComponent(config.azureOrganization)}/${encodeURIComponent(
    config.azureProject,
  )}/_apis/wit/workitems/${workItemId}?$expand=relations&api-version=${API_VERSION}`;
}

export async function queryAzureWorkItems(config: IncidentRuntimeConfig, wiql: string): Promise<AzureWiqlResponse> {
  const endpoint = getAzureWiqlEndpoint(config);
  const requestBody = JSON.stringify({ query: wiql });

  logRuntimeDiagnostics('queryWiql');
  logAzureRequestStart('queryWiql', {
    method: 'POST',
    requestUrl: endpoint,
    contentType: 'application/json',
    requestBodyBytes: Buffer.byteLength(requestBody, 'utf8'),
  });

  return azureRequest<AzureWiqlResponse>(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: requestBody,
  }, 'queryWiql');
}

export async function getAzureWorkItems(config: IncidentRuntimeConfig, ids: number[]): Promise<AzureWorkItemSummary[]> {
  if (ids.length === 0) {
    return [];
  }

  const endpoint = getAzureWorkItemsEndpoint(config, ids);
  logAzureRequestStart('getWorkItems', {
    method: 'GET',
    requestUrl: endpoint,
    contentType: 'application/json',
    count: ids.length,
  });

  const response = await azureRequest<{ value?: AzureWorkItemSummary[]; __statusCode?: number }>(endpoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }, 'getWorkItems');

  return (response.value ?? []).map((item) => ({ ...item, __statusCode: response.__statusCode }));
}

export async function getAzureWorkItemWithRelations(
  config: IncidentRuntimeConfig,
  workItemId: number,
): Promise<AzureWorkItemWithRelations> {
  const endpoint = getAzureWorkItemWithRelationsEndpoint(config, workItemId);
  logAzureRequestStart('getWorkItemRelations', {
    method: 'GET',
    requestUrl: endpoint,
    contentType: 'application/json',
    workItemId,
  });

  return azureRequest<AzureWorkItemWithRelations>(endpoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }, 'getWorkItemRelations');
}

export async function createAzureBug(
  patch: AzureJsonPatchOperation[],
  config: IncidentRuntimeConfig,
  options: CreateAzureBugOptions = {},
): Promise<AzureWorkItemSummary> {
  const validateOnly = options.validateOnly === true;
  const endpoint = getAzureWorkItemEndpoint(config, { validateOnly });
  const requestBody = JSON.stringify(patch);
  const requestBodyBytes = Buffer.byteLength(requestBody, 'utf8');
  const requestStartedAt = new Date();

  if (!Array.isArray(patch)) {
    throw new AzureDevOpsRequestError('El JSON Patch de Azure DevOps debe ser un arreglo.');
  }

  logAzureRequestStart('createBug', {
    validateOnly,
    method: 'POST',
    organization: config.azureOrganization || 'N/D',
    project: config.azureProject || 'N/D',
    apiVersion: API_VERSION,
    workItemType: 'Bug',
    requestUrl: endpoint,
    authConfigured: config.hasAzurePat,
  });
  debug('[AZURE CLIENT REQUEST]', {
    requestStartedAt: requestStartedAt.toISOString(),
    bodyIsArray: Array.isArray(patch),
    'fields.System.Title': hasPatchPath(patch, '/fields/System.Title'),
    'fields.System.Description': hasPatchPath(patch, '/fields/System.Description'),
    'fields.System.Tags': hasPatchPath(patch, '/fields/System.Tags'),
    operations: patch.length,
    requestBodyBytes,
    paths: patch.map((operation) => operation.path).join(', '),
  });
  debug('[AZURE PIPELINE]', { step: 'create-request', validateOnly });

  try {
    const created = await azureRequest<AzureWorkItemSummary>(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json-patch+json',
      },
      body: requestBody,
    }, 'createBug');

    debug('[AZURE PIPELINE]', {
      step: 'create-response',
      validateOnly,
      statusCode: created.__statusCode ?? '2xx',
      workItemId: created.id,
      elapsedMs: Date.now() - requestStartedAt.getTime(),
    });

    return created;
  } catch (error) {
    debug('[AZURE PIPELINE]', {
      step: 'create-response',
      validateOnly,
      status: 'ERROR',
      elapsedMs: Date.now() - requestStartedAt.getTime(),
    });
    throw error;
  }
}

export async function uploadAzureAttachment(
  filePath: string,
  fileName: string,
  config: IncidentRuntimeConfig,
): Promise<AzureAttachmentUploadResponse> {
  const endpoint = getAzureAttachmentEndpoint(config, fileName);
  const body = fs.readFileSync(filePath);

  logAzureRequestStart('uploadAttachment', {
    method: 'POST',
    requestUrl: endpoint,
    contentType: 'application/octet-stream',
    fileName,
    requestBodyBytes: body.length,
  });

  return azureRequest<AzureAttachmentUploadResponse>(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/octet-stream',
    },
    body: body as unknown as BodyInit,
  }, 'uploadAttachment');
}

export async function linkAzureAttachmentToWorkItem(
  workItemId: number,
  attachmentUrl: string,
  comment: string,
  config: IncidentRuntimeConfig,
): Promise<AzureWorkItemSummary> {
  const endpoint = getAzureWorkItemRelationsEndpoint(config, workItemId);
  const patch: AzureJsonPatchOperation[] = [
    {
      op: 'add',
      path: '/relations/-',
      value: {
        rel: 'AttachedFile',
        url: attachmentUrl,
        attributes: { comment },
      },
    },
  ] as unknown as AzureJsonPatchOperation[];
  const requestBody = JSON.stringify(patch);

  logAzureRequestStart('linkAttachment', {
    method: 'PATCH',
    requestUrl: endpoint,
    contentType: 'application/json-patch+json',
    workItemId,
    requestBodyBytes: Buffer.byteLength(requestBody, 'utf8'),
  });

  return azureRequest<AzureWorkItemSummary>(endpoint, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json-patch+json',
    },
    body: requestBody,
  }, 'linkAttachment');
}

async function azureRequest<T>(url: string, init: RequestInit, operation?: string): Promise<T> {
  if (typeof fetch !== 'function') {
    throw new Error('La version actual de Node no tiene fetch nativo disponible.');
  }

  const pat = process.env.AZURE_DEVOPS_PAT?.trim();
  if (!pat) {
    throw new Error('Falta AZURE_DEVOPS_PAT para llamar Azure DevOps.');
  }

  const controller = new AbortController();
  const timeoutMs = getAzureRequestTimeoutMs();
  const requestStartedAt = Date.now();
  const diagnosticsEnabled = process.env.AZURE_DEVOPS_RUNTIME_DIAGNOSTIC === 'true';
  debug('[AZURE CLIENT]', {
    operation: operation ?? 'unknown',
    timeoutScheduled: true,
    timeoutMs,
    abortSignalAttached: true,
    signalAbortedBeforeFetch: controller.signal.aborted,
    beforeFetchAt: new Date(requestStartedAt).toISOString(),
  });
  const eventLoopLagTimer = diagnosticsEnabled ? scheduleEventLoopLagDiagnostic(operation) : undefined;
  const heartbeatTimer = diagnosticsEnabled ? scheduleFetchHeartbeat(operation) : undefined;
  const timeout = setTimeout(() => {
    debug('[AZURE CLIENT]', { operation: operation ?? 'unknown', abortTriggered: true });
    controller.abort();
  }, timeoutMs);

  try {
    const response = await fetchWithTimeout(url, init, pat, controller, timeoutMs, operation);
    debug('[AZURE CLIENT]', {
      operation: operation ?? 'unknown',
      afterFetchAt: new Date().toISOString(),
      signalAbortedAfterFetch: controller.signal.aborted,
    });

    if (operation) {
      logAzureResponse(operation, response, Date.now() - requestStartedAt);
    }

    const body = await parseResponseBody(response);

    if (operation) {
      if (operation === 'createBug' && !response.ok) {
        debug('[AZURE PIPELINE]', {
          step: 'create-response',
          statusCode: response.status,
          workItemId: 'N/D',
        });
      }
    }

    if (!response.ok) {
      logAzureClientError(operation, response.status, getAzureErrorMessage(body));
      throw new AzureDevOpsRequestError(
        `Azure DevOps HTTP ${response.status} ${response.statusText}: ${getAzureErrorMessage(body)}`,
        response.status,
      );
    }

    return withStatusCode(body as T, response.status);
  } finally {
    clearTimeout(timeout);
    if (heartbeatTimer) {
      clearTimeout(heartbeatTimer);
    }
    if (eventLoopLagTimer) {
      clearTimeout(eventLoopLagTimer);
    }
  }
}

async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  pat: string,
  controller: AbortController,
  timeoutMs: number,
  operation?: string,
): Promise<Response> {
  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
      headers: {
        Authorization: `Basic ${Buffer.from(`:${pat}`).toString('base64')}`,
        Accept: 'application/json',
        ...(init.headers ?? {}),
      },
    });
  } catch (error) {
    debug('[AZURE CLIENT]', {
      operation: operation ?? 'unknown',
      fetchErrorName: error instanceof Error ? error.name : typeof error,
      fetchErrorMessage: sanitizeAzureLogValue(error instanceof Error ? error.message : String(error)),
    });
    if (isAbortError(error)) {
      logAzureClientTimeout(operation, timeoutMs);
      throw new AzureDevOpsRequestError(buildTimeoutMessage(operation, timeoutMs));
    }

    logAzureClientError(operation, undefined, error instanceof Error ? error.message : String(error));
    throw error;
  }
}

async function parseResponseBody(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function getAzureErrorMessage(body: unknown): string {
  if (typeof body === 'string') {
    return body;
  }

  if (body && typeof body === 'object' && 'message' in body) {
    return String((body as { message?: unknown }).message ?? 'Sin mensaje.');
  }

  return JSON.stringify(body);
}

function getAzureRequestTimeoutMs(): number {
  const configured = Number(process.env.INCIDENT_REQUEST_TIMEOUT_MS ?? process.env.AZURE_DEVOPS_REQUEST_TIMEOUT_MS ?? process.env.AZURE_DEVOPS_TIMEOUT_MS);
  return Number.isFinite(configured) && configured > 0 ? configured : DEFAULT_TIMEOUT_MS;
}

function logAzureRequestStart(operation: string, details: Record<string, unknown>): void {
  debug('[AZURE CLIENT]', { operation, ...details, requestStarted: true });
}

function logAzureResponse(operation: string, response: Response, elapsedMs: number): void {
  debug('[AZURE CLIENT]', {
    operation,
    responseReceived: true,
    statusCode: response.status,
    ok: response.ok,
    elapsedMs,
  });
}

function buildTimeoutMessage(operation: string | undefined, timeoutMs: number): string {
  if (operation === 'queryWiql') {
    return `Timeout al consultar duplicados en Azure DevOps. Azure DevOps request timeout after ${timeoutMs} ms`;
  }

  if (operation === 'getWorkItems') {
    return `Timeout al leer candidatos de deduplicacion en Azure DevOps. Azure DevOps request timeout after ${timeoutMs} ms`;
  }

  if (operation === 'getWorkItemRelations') {
    return `Timeout al leer relaciones de evidencia en Azure DevOps. Azure DevOps request timeout after ${timeoutMs} ms`;
  }

  if (operation === 'uploadAttachment') {
    return `Timeout al subir evidencia a Azure DevOps. Azure DevOps request timeout after ${timeoutMs} ms`;
  }

  if (operation === 'linkAttachment') {
    return `Timeout al vincular evidencia al Bug de Azure DevOps. Azure DevOps request timeout after ${timeoutMs} ms`;
  }

  return `Timeout al comunicarse con Azure DevOps. Azure DevOps request timeout after ${timeoutMs} ms`;
}

function logRuntimeDiagnostics(operation: string): void {
  debug('[AZURE RUNTIME]', {
    operation,
    runtimeContext: process.env.AZURE_DEVOPS_RUNTIME_CONTEXT || 'unknown',
    pid: process.pid,
    ppid: process.ppid,
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch,
    cwd: process.cwd(),
    nodeOptionsConfigured: Boolean(process.env.NODE_OPTIONS),
    httpProxyConfigured: Boolean(process.env.HTTP_PROXY || process.env.http_proxy),
    httpsProxyConfigured: Boolean(process.env.HTTPS_PROXY || process.env.https_proxy),
    noProxyConfigured: Boolean(process.env.NO_PROXY || process.env.no_proxy),
    fetchType: typeof fetch,
    fetchAvailable: typeof fetch === 'function',
  });
}

function scheduleFetchHeartbeat(operation: string | undefined): NodeJS.Timeout {
  return setTimeout(() => {
    debug('[AZURE CLIENT]', { operation: operation ?? 'unknown', heartbeatAfter1000ms: true });
  }, 1000);
}

function scheduleEventLoopLagDiagnostic(operation: string | undefined): NodeJS.Timeout {
  const started = Date.now();

  return setTimeout(() => {
    debug('[AZURE CLIENT]', { operation: operation ?? 'unknown', eventLoopLagMs: Date.now() - started - 100 });
  }, 100);
}

function logAzureClientError(operation: string | undefined, statusCode: number | undefined, message: string): void {
  logError('[AZURE ERROR]', {
    operation: operation ?? 'unknown',
    statusCode: statusCode ?? 'N/D',
    message: sanitizeAzureLogValue(message),
  });
}

function logAzureClientTimeout(operation: string | undefined, timeoutMs: number): void {
  logError('[AZURE ERROR]', {
    operation: operation ?? 'unknown',
    type: 'TIMEOUT',
    timeoutMs,
  });
}

function sanitizeAzureLogValue(value: string): string {
  return value
    .replace(/\b(AZURE_DEVOPS_PAT|PAT|password|secret|access_token|refresh_token)(\s*[:=]\s*)([^\s&]+)/gi, '$1$2[REDACTED]')
    .replace(/\b(Basic|Bearer)\s+[A-Za-z0-9._~+/=-]+/gi, '$1 [REDACTED]');
}

function isAbortError(error: unknown): boolean {
  return error instanceof Error && error.name === 'AbortError';
}

function hasPatchPath(patch: AzureJsonPatchOperation[], path: string): boolean {
  return patch.some((operation) => operation.path === path);
}

function withStatusCode<T>(body: T, statusCode: number): T {
  if (body && typeof body === 'object') {
    return Object.assign(body, { __statusCode: statusCode });
  }

  return body;
}
