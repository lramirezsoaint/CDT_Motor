import { expect, test } from '@playwright/test';
import path from 'path';
import { IncidentReporter } from './incident-reporter';
import type { AzureIncidentResult } from '../integrations/incidents/incident.types';
import type { IncidentProviderResult } from '../integrations/incidents/providers/incident-provider.types';

test.describe('incident reporter Azure pipeline', () => {
  test('onTestEnd awaits Azure processing before finishing', async () => {
    let resolveAzure!: (result: AzureIncidentResult) => void;
    const pendingAzure = new Promise<AzureIncidentResult>((resolve) => {
      resolveAzure = resolve;
    });
    const reporter = new IncidentReporter({
      processAzureIncident: async () => pendingAzure,
    });
    const result = makeFailedResult();
    let finished = false;

    (reporter as unknown as { runtimeConfig: unknown }).runtimeConfig = {
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
    (reporter as unknown as { outputDir: string }).outputDir = path.join(process.cwd(), 'test-results', 'incident-reporter-await');

    const reporterPromise = reporter.onTestEnd(makeTestCase(), result).then(() => {
      finished = true;
    });

    await Promise.resolve();
    expect(finished).toBe(false);

    resolveAzure({
      status: 'CREATED',
      workItemId: 12345,
      url: 'https://dev.azure.com/org/project/_workitems/edit/12345',
    });
    await reporterPromise;

    expect(finished).toBe(true);
    expect(result.attachments.some((attachment) => attachment.name === 'incident-preview')).toBe(true);
    expect(result.attachments.some((attachment) => attachment.name === 'azure-devops-incident-preview')).toBe(true);
    expect(result.attachments.some((attachment) => attachment.name === 'incident-provider-summary')).toBe(true);
    expect(result.attachments.some((attachment) => attachment.name === 'azure-devops-summary')).toBe(true);
  });

  test('CREATED genera azure-devops-summary con work item y evidencias', async () => {
    const reporter = makeReporterWithAzurePromise(
      Promise.resolve({
        status: 'CREATED',
        workItemId: 60785,
        attachments: [
          { type: 'screenshot', status: 'LINKED', fileName: 'screenshot.png' },
          { type: 'trace', status: 'LINKED', fileName: 'trace.zip' },
          { type: 'video', status: 'LINKED', fileName: 'video.webm' },
        ],
      }),
    );
    const result = makeFailedResult();

    await reporter.onTestEnd(makeTestCase(), result);

    const summary = getAttachmentBody(result, 'azure-devops-summary');
    expect(summary).toContain('Estado:\nCREATED');
    expect(summary).toContain('Bug Azure DevOps:\n#60785');
    expect(summary).toContain('Screenshot:\nADJUNTADO');
    expect(summary).toContain('Trace:\nADJUNTADO');
    expect(summary).toContain('Video:\nADJUNTADO');
    expect(summary).toContain('Incident Preview:\ntest-results/incident-reporter-await/');
  });

  test('DUPLICATE genera azure-devops-summary con work item', async () => {
    const reporter = makeReporterWithAzurePromise(
      Promise.resolve({
        status: 'DUPLICATE',
        workItemId: 60724,
        attachments: [
          { type: 'screenshot', status: 'LINKED', fileName: 'screenshot.png' },
          { type: 'trace', status: 'LINKED', fileName: 'trace.zip' },
          { type: 'video', status: 'SKIPPED', reason: 'VIDEO_DISABLED', fileName: 'video.webm' },
        ],
      }),
    );
    const result = makeFailedResult();

    await reporter.onTestEnd(makeTestCase(), result);

    const summary = getAttachmentBody(result, 'azure-devops-summary');
    expect(summary).toContain('Estado:\nDUPLICADO - NO CREADO');
    expect(summary).toContain('Bug Azure DevOps:\n#60724');
    expect(summary).toContain('Video:\nNO ENVIADO - VIDEO DESACTIVADO');
  });

  test('azure-devops-summary muestra ALREADY_LINKED correctamente', async () => {
    const reporter = makeReporterWithAzurePromise(
      Promise.resolve({
        status: 'DUPLICATE',
        workItemId: 60724,
        attachments: [
          { type: 'screenshot', status: 'ALREADY_LINKED', fileName: 'screenshot.png' },
          { type: 'trace', status: 'ALREADY_LINKED', fileName: 'trace.zip' },
          { type: 'video', status: 'ALREADY_LINKED', fileName: 'video.webm' },
        ],
      }),
    );
    const result = makeFailedResult();

    await reporter.onTestEnd(makeTestCase(), result);

    const summary = getAttachmentBody(result, 'azure-devops-summary');
    expect(summary).toContain('Screenshot:\nYA EXISTÍA - NO SE VOLVIÓ A ADJUNTAR');
    expect(summary).toContain('Trace:\nYA EXISTÍA - NO SE VOLVIÓ A ADJUNTAR');
    expect(summary).toContain('Video:\nYA EXISTÍA - NO SE VOLVIÓ A ADJUNTAR');
  });

  test('onEnd waits for one pending Azure task', async () => {
    let resolveAzure!: (result: AzureIncidentResult) => void;
    const reporter = makeReporterWithAzurePromise(new Promise<AzureIncidentResult>((resolve) => {
      resolveAzure = resolve;
    }));
    const result = makeFailedResult();
    let onEndFinished = false;

    void reporter.onTestEnd(makeTestCase(), result);
    expect(reporter.getPendingTaskCount()).toBe(1);

    const onEndPromise = reporter.onEnd().then(() => {
      onEndFinished = true;
    });
    await delay(100);
    expect(onEndFinished).toBe(false);
    expect(reporter.getPendingTaskCount()).toBe(1);

    resolveAzure({ status: 'SKIPPED', reason: 'diagnostic mock' });
    await onEndPromise;

    expect(onEndFinished).toBe(true);
    expect(reporter.getPendingTaskCount()).toBe(0);
  });

  test('onEnd waits for multiple pending Azure tasks', async () => {
    let resolveFirst!: (result: AzureIncidentResult) => void;
    let resolveSecond!: (result: AzureIncidentResult) => void;
    const responses = [
      new Promise<AzureIncidentResult>((resolve) => {
        resolveFirst = resolve;
      }),
      new Promise<AzureIncidentResult>((resolve) => {
        resolveSecond = resolve;
      }),
    ];
    const reporter = makeReporterWithQueue(responses);
    let onEndFinished = false;

    void reporter.onTestEnd(makeTestCase(), makeFailedResult());
    void reporter.onTestEnd(makeTestCase(), makeFailedResult());
    expect(reporter.getPendingTaskCount()).toBe(2);

    const onEndPromise = reporter.onEnd().then(() => {
      onEndFinished = true;
    });
    await delay(100);
    expect(onEndFinished).toBe(false);
    expect(reporter.getPendingTaskCount()).toBe(2);

    resolveFirst({ status: 'SKIPPED', reason: 'first mock' });
    await delay(0);
    expect(onEndFinished).toBe(false);
    expect(reporter.getPendingTaskCount()).toBe(1);

    resolveSecond({ status: 'SKIPPED', reason: 'second mock' });
    await onEndPromise;

    expect(onEndFinished).toBe(true);
    expect(reporter.getPendingTaskCount()).toBe(0);
  });

  test('rejected Azure task is awaited and does not leave pending tasks', async () => {
    const reporter = makeReporterWithAzurePromise(Promise.reject(new Error('queryWiql failed')));

    void reporter.onTestEnd(makeTestCase(), makeFailedResult());
    expect(reporter.getPendingTaskCount()).toBe(1);

    await reporter.onEnd();

    expect(reporter.getPendingTaskCount()).toBe(0);
  });

  test('delayed queryWiql-like task completes before onEnd resolves', async () => {
    const reporter = makeReporterWithAzurePromise(
      delay(1000).then(() => ({ status: 'SKIPPED', reason: 'slow queryWiql mock' }) as AzureIncidentResult),
    );
    let onEndFinished = false;

    void reporter.onTestEnd(makeTestCase(), makeFailedResult());
    const onEndPromise = reporter.onEnd().then(() => {
      onEndFinished = true;
    });

    await delay(100);
    expect(onEndFinished).toBe(false);
    expect(reporter.getPendingTaskCount()).toBe(1);

    await onEndPromise;

    expect(onEndFinished).toBe(true);
    expect(reporter.getPendingTaskCount()).toBe(0);
  });

  test('onEnd waits until Azure task with attachments finishes', async () => {
    const reporter = makeReporterWithAzurePromise(
      delay(1000).then(() => ({
        status: 'CREATED',
        workItemId: 60721,
        attachments: [
          { type: 'screenshot', status: 'LINKED', fileName: 'screenshot.png' },
          { type: 'trace', status: 'LINKED', fileName: 'trace.zip' },
          { type: 'video', status: 'SKIPPED', reason: 'VIDEO_DISABLED', fileName: 'video.webm' },
        ],
      }) as AzureIncidentResult),
    );
    let onEndFinished = false;

    void reporter.onTestEnd(makeTestCase(), makeFailedResult());
    const onEndPromise = reporter.onEnd().then(() => {
      onEndFinished = true;
    });

    await delay(100);
    expect(onEndFinished).toBe(false);
    expect(reporter.getPendingTaskCount()).toBe(1);

    await onEndPromise;

    expect(onEndFinished).toBe(true);
    expect(reporter.getPendingTaskCount()).toBe(0);
  });

  test('normal mode keeps Azure and preview summaries without evidence block or summary body', async () => {
    process.env.DEBUG_INCIDENTS = 'false';
    const logs = await captureConsoleLog(async () => {
      const reporter = makeReporterWithAzurePromise(
        Promise.resolve({
          status: 'DUPLICATE',
          workItemId: 60724,
          attachments: [
            { type: 'screenshot', status: 'ALREADY_LINKED', fileName: 'screenshot.png' },
            { type: 'trace', status: 'ALREADY_LINKED', fileName: 'trace.zip' },
            { type: 'video', status: 'SKIPPED', reason: 'VIDEO_DISABLED', fileName: 'video.webm' },
          ],
        }),
      );

      await reporter.onTestEnd(makeTestCase(), makeFailedResult());
    });

    expect(logs).toContain('[INCIDENT]');
    expect(logs).toContain('caseId=E37-AM-01.01.1');
    expect(logs).toContain('classification=BUSINESS_RULE_FAILURE');
    expect(logs).toContain('decision=BUG_AUTO');
    expect(logs).not.toContain('confidence=HIGH');
    expect(logs).toContain('[PROVIDER:AZURE]');
    expect(logs).toContain('DUPLICATE #60724');
    expect(logs).not.toContain('[AZURE EVIDENCE]');
    expect(logs).not.toContain('screenshot=ALREADY_LINKED');
    expect(logs).not.toContain('trace=ALREADY_LINKED');
    expect(logs).not.toContain('video=SKIPPED');
    expect(logs).toContain('[INCIDENT PREVIEW]');
    expect(logs.some((line) => line.startsWith('path=test-results/incident-reporter-await/'))).toBe(true);
    expect(logs).not.toContain('[INCIDENT DEBUG]');
    expect(logs).not.toContain('[INCIDENT REPORTER]');
    expect(logs).not.toContain('AZURE DEVOPS INCIDENT PREVIEW');
    expect(logs).not.toContain('AZURE DEVOPS');
    expect(logs).not.toContain('Bug Azure DevOps:');
  });

  test('incident-preview sigue adjunto junto con azure-devops-summary', async () => {
    const reporter = makeReporterWithAzurePromise(Promise.resolve({ status: 'SKIPPED', reason: 'diagnostic mock' }));
    const result = makeFailedResult();

    await reporter.onTestEnd(makeTestCase(), result);

    expect(result.attachments.some((attachment) => attachment.name === 'incident-preview')).toBe(true);
    expect(result.attachments.some((attachment) => attachment.name === 'azure-devops-incident-preview')).toBe(true);
    expect(result.attachments.some((attachment) => attachment.name === 'incident-provider-summary')).toBe(true);
    expect(result.attachments.some((attachment) => attachment.name === 'azure-devops-summary')).toBe(true);
  });

  test('provider=jira adjunta incident-preview sin alias legacy Azure', async () => {
    const reporter = makeReporterWithProviderResult({ provider: 'jira', status: 'DUPLICATE', incidentId: 'SCRUM-2' });
    const result = makeFailedResult();

    await reporter.onTestEnd(makeTestCase(), result);

    expect(result.attachments.some((attachment) => attachment.name === 'incident-preview')).toBe(true);
    expect(result.attachments.some((attachment) => attachment.name === 'azure-devops-incident-preview')).toBe(false);
    expect(result.attachments.some((attachment) => attachment.name === 'incident-provider-summary')).toBe(true);
    expect(result.attachments.some((attachment) => attachment.name === 'azure-devops-summary')).toBe(false);
  });

  test('provider=trello adjunta incident-preview sin alias legacy Azure', async () => {
    const reporter = makeReporterWithProviderResult({ provider: 'trello', status: 'CREATED', incidentId: 'card-1' });
    const result = makeFailedResult();

    await reporter.onTestEnd(makeTestCase(), result);

    expect(result.attachments.some((attachment) => attachment.name === 'incident-preview')).toBe(true);
    expect(result.attachments.some((attachment) => attachment.name === 'azure-devops-incident-preview')).toBe(false);
    expect(result.attachments.some((attachment) => attachment.name === 'incident-provider-summary')).toBe(true);
    expect(result.attachments.some((attachment) => attachment.name === 'azure-devops-summary')).toBe(false);
  });

  test('reemplaza DIAGNOSTICO legacy en result.errors antes del HTML reporter', async () => {
    const reporter = makeReporterWithProviderResult({ provider: 'jira', status: 'DUPLICATE', incidentId: 'SCRUM-3' });
    const result = makeFailedResultWithLegacyDiagnostic();

    await reporter.onTestEnd(makeTestCase(), result);

    const messages = result.errors.map((error) => String(error.message));
    const diagnosticMessages = messages.filter((message) => /^DIAGNOSTICO\b|^Error:\s*DIAGNOSTICO\b/im.test(message));
    expect(diagnosticMessages).toHaveLength(1);
    expect(messages.join('\n')).toContain('Error: Debe existir la opcion Eliminar en el menu de acciones.');
    expect(diagnosticMessages[0]).toContain('Fase: Ejecutar accion Eliminar desde la tabla');
    expect(diagnosticMessages[0]).toContain('Causa probable: OPTION_NOT_AVAILABLE');
    expect(diagnosticMessages[0]).toContain('Mensaje: Debe existir la opcion Eliminar en el menu de acciones.');
    expect(diagnosticMessages[0]).toContain('Vista: Cuentas Contables');
    expect(diagnosticMessages[0]).not.toContain('Fase: Abrir modulo y vista');
    expect(diagnosticMessages[0]).not.toContain('Causa probable: NAV_FAILURE');
    expect(diagnosticMessages[0]).not.toContain('No se encontro o no se pudo abrir el menu');
    expect(diagnosticMessages[0]).not.toContain('Vista: No inferido');

    const preview = getAttachmentPathBody(result, 'incident-preview');
    expect(preview).toContain('Fase:\nEjecutar accion Eliminar desde la tabla');
    expect(preview).toContain('Causa probable:\nOPTION_NOT_AVAILABLE');
    expect(preview).toContain('Mensaje:\nDebe existir la opcion Eliminar en el menu de acciones.');
    expect(preview).toContain('Vista:\nCuentas Contables');
  });
});

function makeReporterWithAzurePromise(response: Promise<AzureIncidentResult>): IncidentReporter {
  return makeReporterWithQueue([response]);
}

function makeReporterWithQueue(responses: Promise<AzureIncidentResult>[]): IncidentReporter {
  const reporter = new IncidentReporter({
    processAzureIncident: async () => {
      const response = responses.shift();
      if (!response) {
        throw new Error('No Azure mock response configured.');
      }

      return response;
    },
  });

  (reporter as unknown as { runtimeConfig: unknown }).runtimeConfig = {
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
  (reporter as unknown as { outputDir: string }).outputDir = path.join(process.cwd(), 'test-results', 'incident-reporter-await');

  return reporter;
}

function makeReporterWithProviderResult(providerResult: IncidentProviderResult): IncidentReporter {
  const reporter = new IncidentReporter({
    processIncidentProvider: async () => providerResult,
  });

  (reporter as unknown as { runtimeConfig: unknown }).runtimeConfig = makeRuntimeConfig(providerResult.provider);
  (reporter as unknown as { outputDir: string }).outputDir = path.join(process.cwd(), 'test-results', 'incident-reporter-await');

  return reporter;
}

function makeRuntimeConfig(provider: 'azure' | 'jira' | 'trello' | 'none') {
  return {
    autoCreateIncidents: true,
    mode: 'create',
    provider,
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
    jiraBaseUrl: 'https://jira.example.test',
    jiraProjectKey: 'SCRUM',
    jiraEmail: 'qa@example.test',
    hasJiraApiToken: true,
    jiraIssueType: 'Bug',
    jiraValidateOnly: true,
    trelloBoardId: 'board-1',
    trelloListId: 'list-1',
    hasTrelloApiKey: true,
    hasTrelloToken: true,
    trelloValidateOnly: true,
  };
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function captureConsoleLog(callback: () => Promise<void>): Promise<string[]> {
  const previousDebug = process.env.DEBUG_INCIDENTS;
  const original = console.log;
  const logs: string[] = [];
  console.log = (value?: unknown) => {
    logs.push(String(value));
  };

  try {
    await callback();
  } finally {
    console.log = original;
    if (previousDebug === undefined) {
      delete process.env.DEBUG_INCIDENTS;
    } else {
      process.env.DEBUG_INCIDENTS = previousDebug;
    }
  }

  return logs;
}

function makeTestCase() {
  return {
    annotations: [],
    title: 'E37-AM-01.01.1 elimina registro y valida resultado success @bloque5',
    titlePath: () => ['tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts'],
    location: { file: 'tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts' },
    parent: { project: () => ({ name: 'chromium-gestorAM', use: { browserName: 'chromium' } }) },
  } as never;
}

function makeFailedResult() {
  const error = {
    message: buildPlaywrightError(),
    stack: buildPlaywrightError(),
  };

  return {
    error,
    errors: [error],
    attachments: [],
    status: 'failed',
    duration: 53949,
    retry: 0,
  } as never as {
    error: typeof error;
    errors: Array<typeof error>;
    attachments: Array<{ name: string; contentType: string; path?: string; body?: Buffer }>;
    status: 'failed';
    duration: number;
    retry: number;
  };
}

function makeFailedResultWithLegacyDiagnostic() {
  const original = buildPlaywrightError();
  const legacyDiagnostic = [
    'DIAGNOSTICO',
    'Caso: E37-AM-01.01.1',
    'Fase: Abrir modulo y vista',
    'Causa probable: NAV_FAILURE',
    'Mensaje: No se encontro o no se pudo abrir el menu, modulo o vista esperada.',
    'Rol esperado: gestorAM',
    'Proyecto esperado: chromium-gestorAM',
    'Proyecto usado: chromium-gestorAM',
    'URL final: https://distribuciongastos.pacificotest.com.pe/parametrizacion/cuentas-contables/',
    'Archivo: tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts',
    'Vista: No inferido',
  ].join('\n');

  return {
    error: { message: original, stack: original },
    errors: [
      { message: original, stack: original },
      { message: legacyDiagnostic, stack: legacyDiagnostic },
    ],
    attachments: [],
    status: 'failed',
    duration: 53949,
    retry: 0,
  } as never as ReturnType<typeof makeFailedResult>;
}

function getAttachmentBody(result: ReturnType<typeof makeFailedResult>, name: string): string {
  const attachment = result.attachments.find((item) => item.name === name);
  expect(attachment, `attachment ${name} debe existir`).toBeTruthy();
  expect(attachment?.contentType).toBe('text/plain');
  expect(attachment?.body, `attachment ${name} debe tener body`).toBeTruthy();

  return attachment?.body?.toString('utf8') ?? '';
}

function getAttachmentPathBody(result: ReturnType<typeof makeFailedResult>, name: string): string {
  const attachment = result.attachments.find((item) => item.name === name);
  expect(attachment, `attachment ${name} debe existir`).toBeTruthy();
  expect(attachment?.path, `attachment ${name} debe tener path`).toBeTruthy();
  return require('fs').readFileSync(attachment!.path!, 'utf8');
}

function buildPlaywrightError(): string {
  return [
    'Error: Debe existir la opcion Eliminar en el menu de acciones.',
    '',
    'expect(locator).toBeVisible() failed',
    '',
    'Locator: getByRole(\'menuitem\', { name: /eliminar|borrar|delete/i })',
    'Expected: visible',
    'Timeout: 5000ms',
    'Error: element(s) not found',
    '',
    'Call log:',
    '  - waiting for getByRole(\'menuitem\', { name: /eliminar|borrar|delete/i })',
    '',
    '    at openDeleteAction (C:\\CDT\\Distribucion_framework_base\\tests\\e2e\\bloque-5\\_shared\\am-delete-record.ts:94:89)',
  ].join('\n');
}
