import { expect, test } from '@playwright/test';

test.afterEach(async ({}, testInfo) => {
  if (testInfo.status === testInfo.expectedStatus || testInfo.errors.length === 0) {
    return;
  }

  throw new Error([
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
  ].join('\n'));
});

test('E37-AM-01.01.1 elimina registro y valida resultado success @bloque5', async () => {
  expect(false, buildDeletePlaywrightError()).toBe(true);
});

function buildDeletePlaywrightError(): string {
  return [
    'Debe existir la opcion Eliminar en el menu de acciones.',
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
  ].join('\n');
}
