import { expect, test } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import {
  AzureDevOpsRequestError,
  createAzureBug,
  getAzureAttachmentEndpoint,
  getAzureWiqlEndpoint,
  getAzureWorkItems,
  getAzureWorkItemsEndpoint,
  getAzureWorkItemWithRelations,
  getAzureWorkItemWithRelationsEndpoint,
  getAzureWorkItemRelationsEndpoint,
  getAzureWorkItemEndpoint,
  linkAzureAttachmentToWorkItem,
  loadIncidentRuntimeConfig,
  queryAzureWorkItems,
  uploadAzureAttachment,
} from './azure-devops.client';
import type { AzureJsonPatchOperation } from './azure-devops.mapper';
import type { IncidentRuntimeConfig } from '../integrations/incidents/incident.types';

test.describe('azure incident runtime config', () => {
  test('uses process environment values before defaults', () => {
    const previous = {
      INCIDENT_PROVIDER: process.env.INCIDENT_PROVIDER,
      AUTO_CREATE_INCIDENTS: process.env.AUTO_CREATE_INCIDENTS,
      INCIDENT_MODE: process.env.INCIDENT_MODE,
      INCIDENT_ATTACH_EVIDENCE: process.env.INCIDENT_ATTACH_EVIDENCE,
      INCIDENT_ATTACH_VIDEO: process.env.INCIDENT_ATTACH_VIDEO,
      INCIDENT_MAX_VIDEO_MB: process.env.INCIDENT_MAX_VIDEO_MB,
      INCIDENT_REQUEST_TIMEOUT_MS: process.env.INCIDENT_REQUEST_TIMEOUT_MS,
      AZURE_DEVOPS_ORGANIZATION: process.env.AZURE_DEVOPS_ORGANIZATION,
      AZURE_DEVOPS_PROJECT: process.env.AZURE_DEVOPS_PROJECT,
      AZURE_DEVOPS_PAT: process.env.AZURE_DEVOPS_PAT,
      AZURE_DEVOPS_VALIDATE_ONLY: process.env.AZURE_DEVOPS_VALIDATE_ONLY,
      AZURE_DEVOPS_ATTACH_EVIDENCE: process.env.AZURE_DEVOPS_ATTACH_EVIDENCE,
      AZURE_DEVOPS_ATTACH_VIDEO: process.env.AZURE_DEVOPS_ATTACH_VIDEO,
      AZURE_DEVOPS_MAX_VIDEO_MB: process.env.AZURE_DEVOPS_MAX_VIDEO_MB,
    };

    process.env.INCIDENT_PROVIDER = 'azure';
    process.env.AUTO_CREATE_INCIDENTS = 'true';
    process.env.INCIDENT_MODE = 'create';
    process.env.INCIDENT_ATTACH_EVIDENCE = 'true';
    process.env.INCIDENT_ATTACH_VIDEO = 'true';
    process.env.INCIDENT_MAX_VIDEO_MB = '75';
    process.env.INCIDENT_REQUEST_TIMEOUT_MS = '20000';
    process.env.AZURE_DEVOPS_ORGANIZATION = 'org';
    process.env.AZURE_DEVOPS_PROJECT = 'project';
    process.env.AZURE_DEVOPS_PAT = 'secret-value-not-printed';
    process.env.AZURE_DEVOPS_VALIDATE_ONLY = 'true';
    process.env.AZURE_DEVOPS_ATTACH_EVIDENCE = 'true';
    process.env.AZURE_DEVOPS_ATTACH_VIDEO = 'true';
    process.env.AZURE_DEVOPS_MAX_VIDEO_MB = '75';

    try {
      const config = loadIncidentRuntimeConfig();

      expect(config.provider).toBe('azure');
      expect(config.autoCreateIncidents).toBe(true);
      expect(config.mode).toBe('create');
      expect(config.azureOrganization).toBe('org');
      expect(config.azureProject).toBe('project');
      expect(config.hasAzurePat).toBe(true);
      expect(config.azureValidateOnly).toBe(true);
      expect(config.azureAttachEvidence).toBe(true);
      expect(config.azureAttachVideo).toBe(true);
      expect(config.azureMaxVideoMb).toBe(75);
      expect(config.attachEvidence).toBe(true);
      expect(config.attachVideo).toBe(true);
      expect(config.maxVideoMb).toBe(75);
      expect(config.requestTimeoutMs).toBe(20000);
    } finally {
      restoreEnv(previous);
    }
  });

  test('falls back to safe preview values when incident env vars are missing', () => {
    const previous = {
      INCIDENT_PROVIDER: process.env.INCIDENT_PROVIDER,
      AUTO_CREATE_INCIDENTS: process.env.AUTO_CREATE_INCIDENTS,
      INCIDENT_MODE: process.env.INCIDENT_MODE,
      INCIDENT_ATTACH_EVIDENCE: process.env.INCIDENT_ATTACH_EVIDENCE,
      INCIDENT_ATTACH_VIDEO: process.env.INCIDENT_ATTACH_VIDEO,
      INCIDENT_MAX_VIDEO_MB: process.env.INCIDENT_MAX_VIDEO_MB,
      INCIDENT_REQUEST_TIMEOUT_MS: process.env.INCIDENT_REQUEST_TIMEOUT_MS,
      AZURE_DEVOPS_ORGANIZATION: process.env.AZURE_DEVOPS_ORGANIZATION,
      AZURE_DEVOPS_PROJECT: process.env.AZURE_DEVOPS_PROJECT,
      AZURE_DEVOPS_PAT: process.env.AZURE_DEVOPS_PAT,
      AZURE_DEVOPS_VALIDATE_ONLY: process.env.AZURE_DEVOPS_VALIDATE_ONLY,
      AZURE_DEVOPS_ATTACH_EVIDENCE: process.env.AZURE_DEVOPS_ATTACH_EVIDENCE,
      AZURE_DEVOPS_ATTACH_VIDEO: process.env.AZURE_DEVOPS_ATTACH_VIDEO,
      AZURE_DEVOPS_MAX_VIDEO_MB: process.env.AZURE_DEVOPS_MAX_VIDEO_MB,
    };

    delete process.env.INCIDENT_PROVIDER;
    delete process.env.AUTO_CREATE_INCIDENTS;
    delete process.env.INCIDENT_MODE;
    delete process.env.INCIDENT_ATTACH_EVIDENCE;
    delete process.env.INCIDENT_ATTACH_VIDEO;
    delete process.env.INCIDENT_MAX_VIDEO_MB;
    delete process.env.INCIDENT_REQUEST_TIMEOUT_MS;
    delete process.env.AZURE_DEVOPS_ORGANIZATION;
    delete process.env.AZURE_DEVOPS_PROJECT;
    delete process.env.AZURE_DEVOPS_PAT;
    delete process.env.AZURE_DEVOPS_VALIDATE_ONLY;
    delete process.env.AZURE_DEVOPS_ATTACH_EVIDENCE;
    delete process.env.AZURE_DEVOPS_ATTACH_VIDEO;
    delete process.env.AZURE_DEVOPS_MAX_VIDEO_MB;

    try {
      const config = loadIncidentRuntimeConfig();

      expect(config.provider).toBe('azure');
      expect(config.autoCreateIncidents).toBe(false);
      expect(config.mode).toBe('preview');
      expect(config.hasAzurePat).toBe(false);
      expect(config.azureValidateOnly).toBe(false);
      expect(config.azureAttachEvidence).toBe(false);
      expect(config.azureAttachVideo).toBe(false);
      expect(config.azureMaxVideoMb).toBe(50);
      expect(config.attachEvidence).toBe(false);
      expect(config.attachVideo).toBe(false);
      expect(config.maxVideoMb).toBe(50);
      expect(config.requestTimeoutMs).toBe(15000);
    } finally {
      restoreEnv(previous);
    }
  });
});

test.describe('azure createBug client', () => {
  const config: IncidentRuntimeConfig = {
    autoCreateIncidents: true,
    mode: 'create',
    provider: 'azure',
    attachEvidence: false,
    attachVideo: false,
    maxVideoMb: 50,
    requestTimeoutMs: 15_000,
    azureOrganization: 'SOAINTCORP',
    azureProject: 'PER_2025-00000038_ PACIFICO_ Motor de Distribución de Gastos - M',
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
  const patch: AzureJsonPatchOperation[] = [
    { op: 'add', path: '/fields/System.Title', value: 'Title' },
    { op: 'add', path: '/fields/System.Description', value: 'Description' },
    { op: 'add', path: '/fields/System.Tags', value: 'QA-AUTO; Playwright' },
  ];

  test.beforeEach(() => {
    process.env.AZURE_DEVOPS_PAT = 'secret-value-not-printed';
    delete process.env.AZURE_DEVOPS_REQUEST_TIMEOUT_MS;
  });

  test.afterEach(() => {
    delete process.env.AZURE_DEVOPS_PAT;
    delete process.env.AZURE_DEVOPS_REQUEST_TIMEOUT_MS;
    delete (globalThis as { fetch?: unknown }).fetch;
  });

  test('builds encoded Bug endpoint for project with spaces and accents', () => {
    const endpoint = getAzureWorkItemEndpoint(config);

    expect(endpoint).toBe(
      'https://dev.azure.com/SOAINTCORP/PER_2025-00000038_%20PACIFICO_%20Motor%20de%20Distribuci%C3%B3n%20de%20Gastos%20-%20M/_apis/wit/workitems/$Bug?api-version=7.1',
    );
  });

  test('builds validateOnly Bug endpoint for project with spaces and accents', () => {
    const endpoint = getAzureWorkItemEndpoint(config, { validateOnly: true });

    expect(endpoint).toBe(
      'https://dev.azure.com/SOAINTCORP/PER_2025-00000038_%20PACIFICO_%20Motor%20de%20Distribuci%C3%B3n%20de%20Gastos%20-%20M/_apis/wit/workitems/$Bug?validateOnly=true&api-version=7.1',
    );
  });

  test('201 returns created work item id and sends json-patch headers', async () => {
    let request: { url: string; init: RequestInit } | undefined;
    globalThis.fetch = async (url, init) => {
      request = { url: String(url), init: init ?? {} };
      return new Response(JSON.stringify({ id: 12345, url: 'https://dev.azure.com/org/project/_workitems/edit/12345' }), {
        status: 201,
        statusText: 'Created',
        headers: { 'Content-Type': 'application/json' },
      });
    };

    const result = await createAzureBug(patch, config);

    expect(result.id).toBe(12345);
    expect(result.__statusCode).toBe(201);
    expect(request?.url).toBe(getAzureWorkItemEndpoint(config));
    expect((request?.init.headers as Record<string, string>)['Content-Type']).toBe('application/json-patch+json');
    expect((request?.init.headers as Record<string, string>).Accept).toBe('application/json');
    expect(JSON.parse(String(request?.init.body))).toEqual(patch);
    expect((request?.init.headers as Record<string, string>).Authorization).toMatch(/^Basic /);
    expect((request?.init.headers as Record<string, string>).Authorization).not.toContain('secret-value-not-printed');
  });

  test('validateOnly 200 returns validation response without changing request body', async () => {
    let request: { url: string; init: RequestInit } | undefined;
    globalThis.fetch = async (url, init) => {
      request = { url: String(url), init: init ?? {} };
      return new Response(JSON.stringify({ id: 12345, url: 'https://dev.azure.com/org/project/_workitems/edit/12345' }), {
        status: 200,
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json' },
      });
    };

    const result = await createAzureBug(patch, config, { validateOnly: true });

    expect(result.id).toBe(12345);
    expect(result.__statusCode).toBe(200);
    expect(request?.url).toBe(getAzureWorkItemEndpoint(config, { validateOnly: true }));
    expect(JSON.parse(String(request?.init.body))).toEqual(patch);
  });

  test('hung request is aborted and returns timeout error', async () => {
    const previousDebug = process.env.DEBUG_INCIDENTS;
    process.env.AZURE_DEVOPS_REQUEST_TIMEOUT_MS = '10';
    process.env.DEBUG_INCIDENTS = 'true';
    const logs: string[] = [];
    const originalLog = console.log;
    console.log = (value?: unknown) => {
      logs.push(String(value));
    };
    globalThis.fetch = async (_url, init) =>
      new Promise<Response>((_resolve, reject) => {
        const signal = init?.signal as AbortSignal | undefined;
        signal?.addEventListener('abort', () => {
          reject(new DOMException('The operation was aborted.', 'AbortError'));
        });
      });

    try {
      await expect(createAzureBug(patch, config)).rejects.toThrow(/Timeout al comunicarse con Azure DevOps/);
    } finally {
      console.log = originalLog;
      if (previousDebug === undefined) {
        delete process.env.DEBUG_INCIDENTS;
      } else {
        process.env.DEBUG_INCIDENTS = previousDebug;
      }
    }

    expect(logs).toContain('timeoutScheduled=true');
    expect(logs).toContain('timeoutMs=10');
    expect(logs).toContain('abortSignalAttached=true');
    expect(logs).toContain('abortTriggered=true');
    expect(logs).toContain('fetchErrorName=AbortError');
  });

  test('400 returns AzureDevOpsRequestError with visible message', async () => {
    mockFetchResponse(400, 'Bad Request', { message: 'Field Custom.Required is required' });

    await expectAzureError(400, /Field Custom\.Required is required/);
  });

  test('401 returns AzureDevOpsRequestError', async () => {
    mockFetchResponse(401, 'Unauthorized', { message: 'Unauthorized' });

    await expectAzureError(401, /Unauthorized/);
  });

  test('403 returns AzureDevOpsRequestError', async () => {
    mockFetchResponse(403, 'Forbidden', { message: 'Forbidden' });

    await expectAzureError(403, /Forbidden/);
  });

  test('invalid JSON error response does not throw SyntaxError', async () => {
    mockFetchResponse(500, 'Internal Server Error', 'plain text failure');

    await expectAzureError(500, /plain text failure/);
  });

  async function expectAzureError(statusCode: number, message: RegExp): Promise<void> {
    try {
      await createAzureBug(patch, config);
      throw new Error('Expected createAzureBug to fail.');
    } catch (error) {
      expect(error).toBeInstanceOf(AzureDevOpsRequestError);
      expect((error as AzureDevOpsRequestError).statusCode).toBe(statusCode);
      expect(error instanceof Error ? error.message : String(error)).toMatch(message);
      expect(error instanceof Error ? error.message : String(error)).not.toContain('secret-value-not-printed');
    }
  }
});

test.describe('azure dedup client requests', () => {
  const config: IncidentRuntimeConfig = {
    autoCreateIncidents: true,
    mode: 'create',
    provider: 'azure',
    attachEvidence: false,
    attachVideo: false,
    maxVideoMb: 50,
    requestTimeoutMs: 15_000,
    azureOrganization: 'SOAINTCORP',
    azureProject: 'PER_2025-00000038_ PACIFICO_ Motor de Distribución de Gastos - M',
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

  test.beforeEach(() => {
    process.env.AZURE_DEVOPS_PAT = 'secret-value-not-printed';
    delete process.env.AZURE_DEVOPS_REQUEST_TIMEOUT_MS;
  });

  test.afterEach(() => {
    delete process.env.AZURE_DEVOPS_PAT;
    delete process.env.AZURE_DEVOPS_REQUEST_TIMEOUT_MS;
    delete (globalThis as { fetch?: unknown }).fetch;
  });

  test('queryWiql uses POST application/json and returns statusCode', async () => {
    let request: { url: string; init: RequestInit } | undefined;
    globalThis.fetch = async (url, init) => {
      request = { url: String(url), init: init ?? {} };
      return new Response(JSON.stringify({ workItems: [] }), {
        status: 200,
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json' },
      });
    };

    const result = await queryAzureWorkItems(config, 'SELECT [System.Id] FROM WorkItems');

    expect(result.__statusCode).toBe(200);
    expect(request?.url).toBe(getAzureWiqlEndpoint(config));
    expect((request?.init.headers as Record<string, string>)['Content-Type']).toBe('application/json');
    expect((request?.init.headers as Record<string, string>).Accept).toBe('application/json');
    expect(JSON.parse(String(request?.init.body))).toEqual({ query: 'SELECT [System.Id] FROM WorkItems' });
  });

  test('queryWiql timeout is operation-specific', async () => {
    process.env.AZURE_DEVOPS_REQUEST_TIMEOUT_MS = '10';
    globalThis.fetch = async (_url, init) =>
      new Promise<Response>((_resolve, reject) => {
        const signal = init?.signal as AbortSignal | undefined;
        signal?.addEventListener('abort', () => {
          reject(new DOMException('The operation was aborted.', 'AbortError'));
        });
      });

    await expect(queryAzureWorkItems(config, 'SELECT [System.Id] FROM WorkItems')).rejects.toThrow(
      /Timeout al consultar duplicados en Azure DevOps/,
    );
  });

  test('queryWiql 401 returns AzureDevOpsRequestError', async () => {
    mockFetchResponse(401, 'Unauthorized', { message: 'Unauthorized' });

    await expect(queryAzureWorkItems(config, 'SELECT [System.Id] FROM WorkItems')).rejects.toMatchObject({
      statusCode: 401,
    });
  });

  test('getWorkItems uses GET batch endpoint and returns statusCode on items', async () => {
    let request: { url: string; init: RequestInit } | undefined;
    globalThis.fetch = async (url, init) => {
      request = { url: String(url), init: init ?? {} };
      return new Response(JSON.stringify({ value: [{ id: 123, fields: { 'System.State': 'Active' } }] }), {
        status: 200,
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json' },
      });
    };

    const result = await getAzureWorkItems(config, [123]);

    expect(result).toHaveLength(1);
    expect(result[0].__statusCode).toBe(200);
    expect(request?.url).toBe(getAzureWorkItemsEndpoint(config, [123]));
    expect(request?.init.method).toBe('GET');
  });

  test('getWorkItemWithRelations uses expand relations endpoint and returns statusCode', async () => {
    let request: { url: string; init: RequestInit } | undefined;
    globalThis.fetch = async (url, init) => {
      request = { url: String(url), init: init ?? {} };
      return new Response(
        JSON.stringify({
          id: 60724,
          relations: [{ rel: 'AttachedFile', attributes: { comment: 'QA-AUTO-EVIDENCE: E37|project|0|trace' } }],
        }),
        {
          status: 200,
          statusText: 'OK',
          headers: { 'Content-Type': 'application/json' },
        },
      );
    };

    const result = await getAzureWorkItemWithRelations(config, 60724);

    expect(result.id).toBe(60724);
    expect(result.__statusCode).toBe(200);
    expect(result.relations).toHaveLength(1);
    expect(request?.url).toBe(getAzureWorkItemWithRelationsEndpoint(config, 60724));
    expect(request?.init.method).toBe('GET');
  });

  test('getWorkItemWithRelations timeout is operation-specific', async () => {
    process.env.AZURE_DEVOPS_REQUEST_TIMEOUT_MS = '10';
    globalThis.fetch = async (_url, init) =>
      new Promise<Response>((_resolve, reject) => {
        const signal = init?.signal as AbortSignal | undefined;
        signal?.addEventListener('abort', () => {
          reject(new DOMException('The operation was aborted.', 'AbortError'));
        });
      });

    await expect(getAzureWorkItemWithRelations(config, 60724)).rejects.toThrow(/Timeout al leer relaciones de evidencia/);
  });
});

test.describe('azure attachment client requests', () => {
  const config: IncidentRuntimeConfig = {
    autoCreateIncidents: true,
    mode: 'create',
    provider: 'azure',
    attachEvidence: true,
    attachVideo: false,
    maxVideoMb: 50,
    requestTimeoutMs: 15_000,
    azureOrganization: 'SOAINTCORP',
    azureProject: 'PER_2025-00000038_ PACIFICO_ Motor de DistribuciÃ³n de Gastos - M',
    hasAzurePat: true,
    azureValidateOnly: false,
    azureAttachEvidence: true,
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
  const tempDir = path.join(process.cwd(), 'test-results', 'azure-attachment-client');
  const tempFile = path.join(tempDir, 'evidence.png');

  test.beforeEach(() => {
    process.env.AZURE_DEVOPS_PAT = 'secret-value-not-printed';
    delete process.env.AZURE_DEVOPS_REQUEST_TIMEOUT_MS;
    fs.mkdirSync(tempDir, { recursive: true });
    fs.writeFileSync(tempFile, Buffer.from([1, 2, 3]));
  });

  test.afterEach(() => {
    delete process.env.AZURE_DEVOPS_PAT;
    delete process.env.AZURE_DEVOPS_REQUEST_TIMEOUT_MS;
    delete (globalThis as { fetch?: unknown }).fetch;
  });

  test('upload attachment uses octet-stream and returns attachment url on 201', async () => {
    let request: { url: string; init: RequestInit } | undefined;
    globalThis.fetch = async (url, init) => {
      request = { url: String(url), init: init ?? {} };
      return new Response(JSON.stringify({ id: 'att-1', url: 'https://dev.azure.com/org/_apis/wit/attachments/att-1' }), {
        status: 201,
        statusText: 'Created',
        headers: { 'Content-Type': 'application/json' },
      });
    };

    const result = await uploadAzureAttachment(tempFile, 'E37_screenshot.png', config);

    expect(result.__statusCode).toBe(201);
    expect(result.url).toContain('/attachments/att-1');
    expect(request?.url).toBe(getAzureAttachmentEndpoint(config, 'E37_screenshot.png'));
    expect(request?.init.method).toBe('POST');
    expect((request?.init.headers as Record<string, string>)['Content-Type']).toBe('application/octet-stream');
    expect((request?.init.headers as Record<string, string>).Accept).toBe('application/json');
    expect((request?.init.headers as Record<string, string>).Authorization).toMatch(/^Basic /);
  });

  test('upload attachment 400/401/500 return AzureDevOpsRequestError', async () => {
    for (const [status, statusText] of [
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [500, 'Internal Server Error'],
    ] as const) {
      mockFetchResponse(status, statusText, { message: statusText });

      await expect(uploadAzureAttachment(tempFile, `E37_${status}.png`, config)).rejects.toMatchObject({
        statusCode: status,
      });
    }
  });

  test('upload attachment timeout is operation-specific', async () => {
    process.env.AZURE_DEVOPS_REQUEST_TIMEOUT_MS = '10';
    globalThis.fetch = async (_url, init) =>
      new Promise<Response>((_resolve, reject) => {
        const signal = init?.signal as AbortSignal | undefined;
        signal?.addEventListener('abort', () => {
          reject(new DOMException('The operation was aborted.', 'AbortError'));
        });
      });

    await expect(uploadAzureAttachment(tempFile, 'E37_timeout.png', config)).rejects.toThrow(/Timeout al subir evidencia/);
  });

  test('link attachment uses json patch and returns work item on 200', async () => {
    let request: { url: string; init: RequestInit } | undefined;
    globalThis.fetch = async (url, init) => {
      request = { url: String(url), init: init ?? {} };
      return new Response(JSON.stringify({ id: 60721 }), {
        status: 200,
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json' },
      });
    };

    const result = await linkAzureAttachmentToWorkItem(60721, 'https://dev.azure.com/org/_apis/wit/attachments/att-1', 'QA-AUTO Screenshot - E37', config);

    expect(result.id).toBe(60721);
    expect(request?.url).toBe(getAzureWorkItemRelationsEndpoint(config, 60721));
    expect(request?.init.method).toBe('PATCH');
    expect((request?.init.headers as Record<string, string>)['Content-Type']).toBe('application/json-patch+json');
    expect(JSON.parse(String(request?.init.body))).toEqual([
      {
        op: 'add',
        path: '/relations/-',
        value: {
          rel: 'AttachedFile',
          url: 'https://dev.azure.com/org/_apis/wit/attachments/att-1',
          attributes: { comment: 'QA-AUTO Screenshot - E37' },
        },
      },
    ]);
  });

  test('link attachment 400/401 return AzureDevOpsRequestError', async () => {
    for (const [status, statusText] of [
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
    ] as const) {
      mockFetchResponse(status, statusText, { message: statusText });

      await expect(linkAzureAttachmentToWorkItem(60721, 'https://dev.azure.com/org/att', 'comment', config)).rejects.toMatchObject({
        statusCode: status,
      });
    }
  });

  test('link attachment timeout is operation-specific', async () => {
    process.env.AZURE_DEVOPS_REQUEST_TIMEOUT_MS = '10';
    globalThis.fetch = async (_url, init) =>
      new Promise<Response>((_resolve, reject) => {
        const signal = init?.signal as AbortSignal | undefined;
        signal?.addEventListener('abort', () => {
          reject(new DOMException('The operation was aborted.', 'AbortError'));
        });
      });

    await expect(linkAzureAttachmentToWorkItem(60721, 'https://dev.azure.com/org/att', 'comment', config)).rejects.toThrow(
      /Timeout al vincular evidencia/,
    );
  });
});

function restoreEnv(values: Record<string, string | undefined>): void {
  for (const [key, value] of Object.entries(values)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}

function mockFetchResponse(status: number, statusText: string, body: unknown): void {
  globalThis.fetch = async () =>
    new Response(typeof body === 'string' ? body : JSON.stringify(body), {
      status,
      statusText,
      headers: { 'Content-Type': typeof body === 'string' ? 'text/plain' : 'application/json' },
    });
}
