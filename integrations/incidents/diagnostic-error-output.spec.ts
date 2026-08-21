import { expect, test } from '@playwright/test';
import { buildIncidentCandidate, formatIncidentPreview } from './incident-builder';
import {
  buildDiagnosticErrorFromTestInfo,
  buildDiagnosticReportFromTestInfo,
} from '../../tests/e2e/_globalshared/diagnostics/diagnostic-error';

test.describe('diagnostic error output', () => {
  test('diagnostic error does not concatenate original Playwright error', () => {
    const originalError = makeOriginalError();
    const diagnosticError = buildDiagnosticErrorFromTestInfo({
      testInfo: makeTestInfo(),
      originalError,
      currentUrl: 'https://app.test/distribuciones',
    });

    expect(diagnosticError.message).toContain('DIAGNOSTICO');
    expect(diagnosticError.message).toContain('Caso: E37-AM-01.01.1');
    expect(diagnosticError.message).toContain('Causa probable: NAV_FAILURE');
    expect(diagnosticError.message).toContain('Mensaje: No se encontro o no se pudo abrir el menu, modulo o vista esperada.');
    expect(diagnosticError.message).not.toContain('ERROR ORIGINAL');
    expect(diagnosticError.message).not.toContain('STACK ORIGINAL');
    expect(diagnosticError.message).not.toContain('Debe existir la opcion Eliminar');
    expect(diagnosticError.message).not.toContain('Locator:');
    expect(diagnosticError.message).not.toContain('Call log:');
    expect(diagnosticError.stack).toBe(diagnosticError.message);
  });

  test('diagnostic report keeps original error for attachments', () => {
    const report = buildDiagnosticReportFromTestInfo({
      testInfo: makeTestInfo(),
      originalError: makeOriginalError(),
      currentUrl: 'https://app.test/distribuciones',
    });

    expect(report).toContain('DIAGNOSTICO');
    expect(report).toContain('ERROR ORIGINAL');
    expect(report).toContain('STACK ORIGINAL');
    expect(report).toContain('Locator: getByRole');
    expect(report).toContain('Expected: visible');
    expect(report).toContain('Timeout: 5000ms');
    expect(report).toContain('Call log:');
    expect(report).toContain('at openDeleteAction');
  });

  test('incident preview keeps Playwright original error and skips pure diagnostic block', () => {
    const originalError = makeOriginalError();
    const diagnosticError = buildDiagnosticErrorFromTestInfo({
      testInfo: makeTestInfo(),
      originalError,
      currentUrl: 'https://app.test/distribuciones',
    });
    const candidate = buildIncidentCandidate(makeTestCase(), {
      error: { message: originalError.message, stack: originalError.stack },
      errors: [
        { message: originalError.message, stack: originalError.stack },
        { message: diagnosticError.message, stack: diagnosticError.stack },
      ],
      attachments: [],
      status: 'failed',
      duration: 53949,
      retry: 0,
    } as never);
    const preview = formatIncidentPreview(candidate, 'preview');
    const originalSection = preview.slice(preview.indexOf('## ERROR ORIGINAL'));

    expect(preview).toContain('## ERROR ORIGINAL');
    expect(originalSection).toContain('Error: Debe existir la opcion Eliminar');
    expect(originalSection).toContain('Locator: getByRole');
    expect(originalSection).toContain('Expected: visible');
    expect(originalSection).toContain('Timeout: 5000ms');
    expect(originalSection).toContain('Call log:');
    expect(originalSection).toContain('at openDeleteAction');
    expect(originalSection).not.toContain('DIAGNOSTICO');
    expect(originalSection).not.toContain('Causa probable: NAV_FAILURE');
  });
});

function makeTestInfo() {
  return {
    file: 'tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts',
    title: 'E37-AM-01.01.1 elimina registro y valida resultado success @bloque5',
    titlePath: ['tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts'],
    project: { name: 'chromium-gestorAM' },
  } as never;
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

function makeOriginalError(): Error {
  const error = new Error(buildPlaywrightError());
  error.stack = buildPlaywrightError();
  return error;
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
