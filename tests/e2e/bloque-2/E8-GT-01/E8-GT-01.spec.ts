import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E8-GT-01
 * Descripción: Validar la carga de un archivo con los datos incompletos en  Parametrización de Gastos Técnicos
 * Casos:
 * - E8-GT-01.1: Validar la carga de archivo con los datos incompletos para Ramo definido en el  proceso de Parametrización de Gastos Técnicos
 * - E8-GT-01.2: Validar la carga de archivo con los datos incompletos para Cuentas Contables definido en  el  proceso de Parametrización de Gastos Técnicos
 * - E8-GT-01.3: Validar la carga de archivo con los datos incompletos para Centros definido en  el  proceso de Parametrización de Gastos Técnicos
 */

test.describe('@bloque2 @E8-GT-01', () => {
  test.skip('@bloque2 @E8-GT-01 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E8-GT-01.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
