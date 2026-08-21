import { expect, test } from '@playwright/test';
import { buildIncidentCandidate, formatIncidentPreview } from './incident-builder';
import type { IncidentCandidate } from './incident.types';

function makeCandidate(overrides: Partial<IncidentCandidate> = {}): IncidentCandidate {
  const base: IncidentCandidate = {
    caseId: 'E37-AM-01.01.1',
    title: 'Abrir vista del flujo de Asientos Manuales',
    bugTitle: '[QA-AUTO][E37-AM-01.01.1] Timeout al abrir la vista de Distribuciones',
    block: 'Bloque 5',
    specFile: 'tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts',
    project: 'chromium-gestorAM',
    role: 'gestorAM',
    browser: 'chromium',
    status: 'TIMEDOUT',
    durationMs: 92393,
    retry: 0,
    finalUrl: 'https://distribuciongastos.pacificotest.com.pe/distribuciones/',
    phase: 'Abrir vista del flujo de Asientos Manuales',
    classification: 'AUTH_FAILURE',
    errorMessage: 'No se encontro navigation until "load" dentro del tiempo maximo de 60000 ms.',
    expectedResult: 'DIAGNOSTICO',
    observedResult: 'No se encontro navigation until "load" dentro del tiempo maximo de 60000 ms.',
    stackSummary: 'pages/auth/LoginPage.ts:57',
    expected: 'N/D',
    received: 'N/D',
    errorOrigin: 'pages/auth/LoginPage.ts:57',
    timeout: '60000 ms',
    executedAt: '2026-08-18T17:22:18.253Z',
    evidence: {
      screenshot: ['test-results/e37/screenshot.png'],
      video: ['test-results/e37/video.webm'],
      trace: ['test-results/e37/trace.zip'],
      htmlReport: [],
      logs: ['test-results/e37/error-context.md'],
    },
    action: 'CANDIDATO A BUG - REVISION',
    technicalDiagnostic: {
      error: 'TIMEOUT',
      caseId: 'E37-AM-01.01.1',
      phase: 'Abrir vista del flujo de Asientos Manuales',
      probableCause: 'AUTH_FAILURE',
      message: 'DIAGNOSTICO',
      expectedRole: 'gestorAM',
      expectedProject: 'chromium-gestorAM',
      usedProject: 'chromium-gestorAM',
      file: 'tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts',
      technicalOrigin: 'pages/auth/LoginPage.ts:57',
      view: 'Distribuciones',
    },
    incidentDecision: {
      classification: 'PROCESSING_TIMEOUT',
      probableCause: 'PROCESS_TIMEOUT',
      confidence: 'MEDIUM',
      evidence: ['timeout'],
      decision: 'BUG_REVIEW',
      reason: 'El proceso no alcanzo el estado esperado dentro del tiempo maximo.',
      recommendation: 'Revisar trace, tiempos de backend y estado del proceso antes de decidir si corresponde Bug funcional.',
      azureDevOpsEligibility: 'REQUIERE REVISION',
    },
    originalError: [
      'TimeoutError: page.waitForURL: Timeout 60000ms exceeded.',
      'Call log:',
      '  - waiting for navigation until "load"',
    ].join('\n'),
  };

  return {
    ...base,
    ...overrides,
    evidence: { ...base.evidence, ...overrides.evidence },
    technicalDiagnostic: { ...base.technicalDiagnostic, ...overrides.technicalDiagnostic },
    incidentDecision: { ...base.incidentDecision, ...overrides.incidentDecision },
  };
}

test.describe('incident preview formatter', () => {
  test('formats PROCESS_TIMEOUT / BUG_REVIEW with only Playwright original error at the end', () => {
    const preview = formatIncidentPreview(makeCandidate(), 'preview');

    expect(preview).toContain('Tipo de fallo Playwright:\nAUTH_FAILURE');
    expect(preview).toContain('Clasificacion tecnica:\nPROCESSING_TIMEOUT');
    expect(preview).toContain('Causa probable:\nPROCESS_TIMEOUT');
    expect(preview).toContain('Decision:\nBUG_REVIEW');
    expect(preview).toContain('Confianza:\nMEDIUM');
    expect(preview).toContain('Elegibilidad Azure DevOps:\nREQUIERE REVISION');
    expect(preview).toContain('## AZURE DEVOPS\n\nElegibilidad Azure DevOps:\nREQUIERE REVISION\n\nEstado Azure DevOps:\nNO ENVIADO - INCIDENT_MODE=preview');
    expect(preview).toContain('## ERROR ORIGINAL\n\nTimeoutError: page.waitForURL');
    expect(preview).not.toContain('## ERROR ORIGINAL\n\nError: DIAGNOSTICO');
    expect(preview.indexOf('## AZURE DEVOPS')).toBeLessThan(preview.indexOf('## ERROR ORIGINAL'));
    expect(countOccurrences(preview, '## ERROR ORIGINAL')).toBe(1);
  });

  test('formats BUG_AUTO / HIGH without repeating decision details in Azure section', () => {
    const preview = formatIncidentPreview(
      makeCandidate({
        caseId: 'E35-AM-01.01.1',
        bugTitle: '[QA-AUTO][E35-AM-01.01.1] No se encuentra la opcion SI en Cuentas Contables',
        classification: 'NAV_FAILURE',
        incidentDecision: {
          classification: 'BUSINESS_RULE_FAILURE',
          probableCause: 'OPTION_NOT_AVAILABLE',
          confidence: 'HIGH',
          evidence: ['missing option'],
          decision: 'BUG_AUTO',
          reason:
            'El caso requiere funcionalmente la accion SI y la ejecucion se realizo con el rol, proyecto y vista esperados, pero dicha accion no se encuentra disponible.',
          recommendation: 'Registrar incidencia funcional utilizando las evidencias capturadas.',
          azureDevOpsEligibility: 'ELEGIBLE PARA CREACION AUTOMATICA',
        },
      }),
      'preview',
    );

    expect(preview).toContain('Decision:\nBUG_AUTO');
    expect(preview).toContain('Confianza:\nHIGH');
    expect(preview).toContain('Elegibilidad Azure DevOps:\nELEGIBLE PARA CREACION AUTOMATICA');
    expect(preview).toContain('Estado Azure DevOps:\nNO ENVIADO - INCIDENT_MODE=preview');

    const azureSection = preview.slice(preview.indexOf('## AZURE DEVOPS'), preview.indexOf('## ERROR ORIGINAL'));
    expect(azureSection).not.toContain('Decision:');
    expect(azureSection).not.toContain('Confianza:');
    expect(azureSection).not.toContain('Motivo:');
    expect(azureSection).not.toContain('Recomendacion:');
  });

  test('formats Azure CREATED result with work item id', () => {
    const preview = formatIncidentPreview(makeCandidate(), 'create', {
      status: 'CREATED',
      workItemId: 12345,
      url: 'https://dev.azure.com/org/project/_workitems/edit/12345',
    });

    expect(preview).toContain('Estado Azure DevOps:\nCREADO');
    expect(preview).toContain('Bug Azure DevOps:\n#12345');
    expect(preview).toContain('URL Azure DevOps:\nhttps://dev.azure.com/org/project/_workitems/edit/12345');
  });

  test('formats Azure DUPLICATE result with work item id', () => {
    const preview = formatIncidentPreview(makeCandidate(), 'create', {
      status: 'DUPLICATE',
      workItemId: 12345,
    });

    expect(preview).toContain('Estado Azure DevOps:\nDUPLICADO - NO CREADO');
    expect(preview).toContain('Bug Azure DevOps:\n#12345');
  });

  test('formats Azure ERROR result with visible detail', () => {
    const preview = formatIncidentPreview(makeCandidate(), 'create', {
      status: 'ERROR',
      message: 'Azure DevOps HTTP 400 Bad Request: Missing required field',
      statusCode: 400,
    });

    expect(preview).toContain('Estado Azure DevOps:\nERROR AL PROCESAR INCIDENTE');
    expect(preview).toContain('Detalle Azure DevOps:\nAzure DevOps HTTP 400 Bad Request: Missing required field');
  });

  test('formats Azure VALIDATED result as not created', () => {
    const preview = formatIncidentPreview(makeCandidate(), 'create', {
      status: 'VALIDATED',
      message: 'Azure DevOps validateOnly=true ejecuto el POST sin crear Work Item.',
    });

    expect(preview).toContain('Estado Azure DevOps:\nVALIDADO - NO CREADO');
    expect(preview).toContain('Detalle Azure DevOps:\nAzure DevOps validateOnly=true ejecuto el POST sin crear Work Item.');
  });

  test('formats Azure validateOnly ERROR result with validation wording', () => {
    const preview = formatIncidentPreview(makeCandidate(), 'create', {
      status: 'ERROR',
      operation: 'validate',
      message: 'Azure DevOps HTTP 400 Bad Request: Field Custom.Required is required',
      statusCode: 400,
    });

    expect(preview).toContain('Estado Azure DevOps:\nERROR AL VALIDAR INCIDENTE');
    expect(preview).toContain('Detalle Azure DevOps:\nAzure DevOps HTTP 400 Bad Request: Field Custom.Required is required');
  });

  test('formats Azure SKIPPED result as NO ENVIADO reason', () => {
    const preview = formatIncidentPreview(makeCandidate(), 'preview', {
      status: 'SKIPPED',
      reason: 'INCIDENT_MODE=preview',
    });

    expect(preview).toContain('Estado Azure DevOps:\nNO ENVIADO - INCIDENT_MODE=preview');
  });

  test('formats ALREADY_LINKED evidence as already existed without reattach', () => {
    const preview = formatIncidentPreview(makeCandidate(), 'create', {
      status: 'DUPLICATE',
      workItemId: 60724,
      attachments: [
        { type: 'screenshot', status: 'ALREADY_LINKED', fileName: 'screenshot.png' },
        { type: 'trace', status: 'ALREADY_LINKED', fileName: 'trace.zip' },
        { type: 'video', status: 'ALREADY_LINKED', fileName: 'video.webm' },
      ],
    });

    expect(preview).toContain('Screenshot:\nYA EXISTIA - NO SE VOLVIO A ADJUNTAR');
    expect(preview).toContain('Trace:\nYA EXISTIA - NO SE VOLVIO A ADJUNTAR');
    expect(preview).toContain('Video:\nYA EXISTIA - NO SE VOLVIO A ADJUNTAR');
    expect(preview).not.toContain('Screenshot:\nADJUNTADO');
  });

  test('formats LINKED evidence as attached', () => {
    const preview = formatIncidentPreview(makeCandidate(), 'create', {
      status: 'CREATED',
      workItemId: 12345,
      attachments: [
        { type: 'screenshot', status: 'LINKED', fileName: 'screenshot.png' },
        { type: 'trace', status: 'LINKED', fileName: 'trace.zip' },
        { type: 'video', status: 'SKIPPED', reason: 'VIDEO_DISABLED', fileName: 'video.webm' },
      ],
    });

    expect(preview).toContain('Screenshot:\nADJUNTADO');
    expect(preview).toContain('Trace:\nADJUNTADO');
    expect(preview).toContain('Video:\nNO ENVIADO - VIDEO DESACTIVADO');
  });

  test('formats video too large with configured max MB', () => {
    const preview = formatIncidentPreview(makeCandidate(), 'create', {
      status: 'CREATED',
      workItemId: 12345,
      attachments: [
        { type: 'screenshot', status: 'LINKED', fileName: 'screenshot.png' },
        { type: 'trace', status: 'LINKED', fileName: 'trace.zip' },
        { type: 'video', status: 'SKIPPED', reason: 'VIDEO_TOO_LARGE', fileName: 'video.webm', maxMb: 50 },
      ],
    });

    expect(preview).toContain('Video:\nNO ADJUNTADO - ARCHIVO MAYOR A 50 MB');
  });

  test('builds original error from Playwright error only without duplicated diagnostic wrapper', () => {
    const originalPlaywrightError = [
      'Error: Debe existir la opcion Eliminar en el menu de acciones.',
      '',
      'expect(locator).toBeVisible() failed',
      '',
      'Locator: getByRole(\'menuitem\', { name: /eliminar|borrar|delete/i })',
      'Expected: visible',
      'Timeout: 5000ms',
      'Error: element(s) not found',
      'Call log:',
      '  - Debe existir la opcion Eliminar en el menu de acciones. with timeout 5000ms',
      '',
      '  at openDeleteAction (tests/e2e/bloque-5/_shared/am-delete-record.ts:94:89)',
    ].join('\n');
    const diagnosticWrapper = [
      'Error: DIAGNOSTICO',
      'Caso: E37-AM-01.01.1',
      'Fase: Ejecutar accion Eliminar desde la tabla',
      'Causa probable: NAV_FAILURE',
      'Mensaje: No se encontro o no se pudo abrir el menu, modulo o vista esperada.',
      'Rol esperado: gestorAM',
      'Proyecto esperado: chromium-gestorAM',
      'Proyecto usado: chromium-gestorAM',
      'URL final: https://distribuciongastos.pacificotest.com.pe/parametrizacion/cuentas-contables/',
      'Archivo: tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts',
      'Vista: Cuentas Contables',
      '',
      'ERROR ORIGINAL',
      originalPlaywrightError,
      '',
      'STACK ORIGINAL',
      originalPlaywrightError,
    ].join('\n');
    const error = {
      message: diagnosticWrapper,
      stack: diagnosticWrapper,
    };
    const candidate = buildIncidentCandidate(
      {
        annotations: [],
        title: 'E37-AM-01.01.1 elimina registro y valida resultado success @bloque5',
        titlePath: () => ['tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts'],
        location: { file: 'tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts' },
        parent: { project: () => ({ name: 'chromium-gestorAM', use: { browserName: 'chromium' } }) },
      } as never,
      {
        error,
        errors: [error, error],
        attachments: [
          {
            name: 'error-context',
            contentType: 'text/markdown',
            path: 'test-results/e37/error-context.md',
          },
        ],
        status: 'failed',
        duration: 53949,
        retry: 0,
      } as never,
    );

    expect(candidate.originalError).toBe(originalPlaywrightError);
    expect(candidate.originalError).not.toContain('Error: DIAGNOSTICO');
    expect(candidate.originalError).not.toContain('Proyecto esperado:');
    expect(candidate.bugTitle).toBe('[QA-AUTO][E37-AM-01.01.1] No se encuentra la opcion Eliminar en Cuentas Contables');
  });

  test('aligns E37 visible diagnostic with final functional classification', () => {
    const originalPlaywrightError = buildDeletePlaywrightError();
    const staleDiagnosticWrapper = [
      'Error: DIAGNOSTICO',
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
      '',
      'ERROR ORIGINAL',
      originalPlaywrightError,
      '',
      'STACK ORIGINAL',
      originalPlaywrightError,
    ].join('\n');
    const error = { message: staleDiagnosticWrapper, stack: staleDiagnosticWrapper };

    const candidate = buildCandidateFromErrors({ resultError: error, resultErrors: [error] });
    const preview = formatIncidentPreview(candidate, 'preview');
    const diagnosticSection = preview.slice(preview.indexOf('## DIAGNOSTICO TECNICO'), preview.indexOf('## RESULTADO'));

    expect(candidate.technicalDiagnostic.probableCause).toBe('OPTION_NOT_AVAILABLE');
    expect(candidate.technicalDiagnostic.phase).toBe('Ejecutar accion Eliminar desde la tabla');
    expect(candidate.technicalDiagnostic.message).toBe('Debe existir la opcion Eliminar en el menu de acciones.');
    expect(candidate.technicalDiagnostic.view).toBe('Cuentas Contables');
    expect(candidate.incidentDecision).toMatchObject({
      classification: 'BUSINESS_RULE_FAILURE',
      probableCause: 'OPTION_NOT_AVAILABLE',
      decision: 'BUG_AUTO',
      confidence: 'HIGH',
    });

    expect(diagnosticSection).toContain('Fase:\nEjecutar accion Eliminar desde la tabla');
    expect(diagnosticSection).toContain('Causa probable:\nOPTION_NOT_AVAILABLE');
    expect(diagnosticSection).toContain('Mensaje:\nDebe existir la opcion Eliminar en el menu de acciones.');
    expect(diagnosticSection).toContain('Vista:\nCuentas Contables');
    expect(diagnosticSection).not.toContain('NAV_FAILURE');
    expect(diagnosticSection).not.toContain('Abrir modulo y vista');
    expect(diagnosticSection).not.toContain('Vista:\nNo inferido');
    expect(preview.slice(preview.indexOf('## ERROR ORIGINAL'))).toContain(originalPlaywrightError);
  });

  test('keeps a single result.error as the only original error', () => {
    const originalPlaywrightError = buildDeletePlaywrightError();
    const candidate = buildCandidateFromErrors({ resultError: { message: originalPlaywrightError, stack: originalPlaywrightError } });
    const preview = formatIncidentPreview(candidate, 'preview');
    const originalSection = preview.slice(preview.indexOf('## ERROR ORIGINAL'));

    expect(countOccurrences(preview, '## ERROR ORIGINAL')).toBe(1);
    expect(countOccurrences(originalSection, 'Debe existir la opcion Eliminar en el menu de acciones.')).toBe(2);
    expect(countOccurrences(originalSection, 'Error: Debe existir la opcion Eliminar en el menu de acciones.')).toBe(1);
    expect(countOccurrences(originalSection, 'at openDeleteAction')).toBe(1);
  });

  test('deduplicates equal result.error and result.errors[0]', () => {
    const originalPlaywrightError = buildDeletePlaywrightError();
    const error = { message: originalPlaywrightError, stack: originalPlaywrightError };
    const candidate = buildCandidateFromErrors({ resultError: error, resultErrors: [error] });
    const preview = formatIncidentPreview(candidate, 'preview');
    const originalSection = preview.slice(preview.indexOf('## ERROR ORIGINAL'));

    expect(countOccurrences(preview, '## ERROR ORIGINAL')).toBe(1);
    expect(countOccurrences(originalSection, 'Error: Debe existir la opcion Eliminar en el menu de acciones.')).toBe(1);
    expect(countOccurrences(originalSection, 'Call log:')).toBe(1);
    expect(countOccurrences(originalSection, 'at openDeleteAction')).toBe(1);
  });

  test('keeps distinct result errors without duplicating equal blocks', () => {
    const primaryError = buildDeletePlaywrightError();
    const secondaryError = [
      'Error: page closed unexpectedly',
      '',
      'at disposeContext (tests/e2e/bloque-5/_shared/am-delete-record.ts:120:7)',
    ].join('\n');
    const duplicatePrimary = { message: primaryError, stack: primaryError };
    const candidate = buildCandidateFromErrors({
      resultError: duplicatePrimary,
      resultErrors: [duplicatePrimary, { message: secondaryError, stack: secondaryError }],
    });
    const preview = formatIncidentPreview(candidate, 'preview');
    const originalSection = preview.slice(preview.indexOf('## ERROR ORIGINAL'));

    expect(countOccurrences(preview, '## ERROR ORIGINAL')).toBe(1);
    expect(countOccurrences(originalSection, 'Error: Debe existir la opcion Eliminar en el menu de acciones.')).toBe(1);
    expect(countOccurrences(originalSection, 'Call log:')).toBe(1);
    expect(countOccurrences(originalSection, 'at openDeleteAction')).toBe(1);
    expect(originalSection).toContain('Error: page closed unexpectedly');
  });

  test('deduplicates equal TimeoutError from result.error and result.errors[0]', () => {
    const timeoutError = buildNavigationTimeoutError();
    const error = { message: timeoutError, stack: timeoutError };
    const candidate = buildCandidateFromErrors({
      resultError: error,
      resultErrors: [error],
    });
    const originalSection = formatIncidentPreview(candidate, 'preview').slice(
      formatIncidentPreview(candidate, 'preview').indexOf('## ERROR ORIGINAL'),
    );

    expect(countOccurrences(originalSection, 'TimeoutError: page.waitForURL: Timeout 60000ms exceeded.')).toBe(1);
    expect(countOccurrences(originalSection, 'waiting for navigation until "load"')).toBe(1);
    expect(countOccurrences(originalSection, 'at LoginPage.loginWithMicrosoft')).toBe(1);
  });

  test('deduplicates two identical TimeoutError entries in result.errors', () => {
    const timeoutError = buildNavigationTimeoutError();
    const error = { message: timeoutError, stack: timeoutError };
    const candidate = buildCandidateFromErrors({
      resultErrors: [error, error],
    });
    const preview = formatIncidentPreview(candidate, 'preview');
    const originalSection = preview.slice(preview.indexOf('## ERROR ORIGINAL'));

    expect(countOccurrences(originalSection, 'TimeoutError: page.waitForURL: Timeout 60000ms exceeded.')).toBe(1);
    expect(countOccurrences(originalSection, 'at LoginPage.loginWithMicrosoft')).toBe(1);
  });

  test('keeps distinct TimeoutError and secondary error', () => {
    const timeoutError = buildNavigationTimeoutError();
    const secondaryError = [
      'Error: page closed unexpectedly',
      '',
      '    at cleanupContext (tests/e2e/bloque-5/_shared/am-context.ts:99:7)',
    ].join('\n');
    const candidate = buildCandidateFromErrors({
      resultError: { message: timeoutError, stack: timeoutError },
      resultErrors: [
        { message: timeoutError, stack: timeoutError },
        { message: secondaryError, stack: secondaryError },
      ],
    });
    const preview = formatIncidentPreview(candidate, 'preview');
    const originalSection = preview.slice(preview.indexOf('## ERROR ORIGINAL'));

    expect(countOccurrences(originalSection, 'TimeoutError: page.waitForURL: Timeout 60000ms exceeded.')).toBe(1);
    expect(originalSection).toContain('Error: page closed unexpectedly');
  });

  test('deduplicates repeated TimeoutError stack frames inside one error', () => {
    const timeoutError = [
      buildNavigationTimeoutError(),
      '',
      '    at LoginPage.loginWithMicrosoft (C:\\CDT\\Distribucion_framework_base\\pages\\auth\\LoginPage.ts:57:21)',
      '    at LoginPage.loginFromCurrentPage (C:\\CDT\\Distribucion_framework_base\\pages\\auth\\LoginPage.ts:28:5)',
      '    at LoginPage.loginWithMicrosoft (C:\\CDT\\Distribucion_framework_base\\pages\\auth\\LoginPage.ts:57:21)',
    ].join('\n');
    const candidate = buildCandidateFromErrors({
      resultError: { message: timeoutError, stack: timeoutError },
    });
    const preview = formatIncidentPreview(candidate, 'preview');
    const originalSection = preview.slice(preview.indexOf('## ERROR ORIGINAL'));

    expect(countOccurrences(originalSection, 'TimeoutError: page.waitForURL: Timeout 60000ms exceeded.')).toBe(1);
    expect(countOccurrences(originalSection, 'at LoginPage.loginWithMicrosoft')).toBe(1);
  });
});

function buildCandidateFromErrors(input: {
  resultError?: { message?: string; stack?: string };
  resultErrors?: Array<{ message?: string; stack?: string }>;
}) {
  return buildIncidentCandidate(
    {
      annotations: [],
      title: 'E37-AM-01.01.1 elimina registro y valida resultado success @bloque5',
      titlePath: () => ['tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts'],
      location: { file: 'tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts' },
      parent: { project: () => ({ name: 'chromium-gestorAM', use: { browserName: 'chromium' } }) },
    } as never,
    {
      error: input.resultError,
      errors: input.resultErrors ?? [],
      attachments: [],
      status: 'failed',
      duration: 53949,
      retry: 0,
    } as never,
  );
}

function buildDeletePlaywrightError(): string {
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
    '  - Debe existir la opcion Eliminar en el menu de acciones. with timeout 5000ms',
    '  - waiting for getByRole(\'menuitem\', { name: /eliminar|borrar|delete/i })',
    '',
    '    at openDeleteAction (C:\\CDT\\Distribucion_framework_base\\tests\\e2e\\bloque-5\\_shared\\am-delete-record.ts:94:89)',
    '    at C:\\CDT\\Distribucion_framework_base\\tests\\e2e\\bloque-5\\_shared\\am-delete-record.ts:41:7',
    '    at C:\\CDT\\Distribucion_framework_base\\tests\\e2e\\bloque-5\\_shared\\am-delete-record.ts:40:7',
  ].join('\n');
}

function buildNavigationTimeoutError(): string {
  return [
    'TimeoutError: page.waitForURL: Timeout 60000ms exceeded.',
    '=========================== logs ===========================',
    'waiting for navigation until "load"',
    '  navigated to "https://distribuciongastos.pacificotest.com.pe/distribuciones/"',
    '============================================================',
    '',
    '    at LoginPage.loginWithMicrosoft (C:\\CDT\\Distribucion_framework_base\\pages\\auth\\LoginPage.ts:57:21)',
    '    at LoginPage.loginFromCurrentPage (C:\\CDT\\Distribucion_framework_base\\pages\\auth\\LoginPage.ts:28:5)',
    '    at ensureAmContext (C:\\CDT\\Distribucion_framework_base\\tests\\e2e\\bloque-5\\_shared\\am-context.ts:54:5)',
  ].join('\n');
}

function countOccurrences(value: string, search: string): number {
  return value.split(search).length - 1;
}
