import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E11-GT-01
 * Descripción: Validar que el archivo descargado en el  proceso de Parametrización de Gastos Técnicos muestre los datos correctamente y no tenga perdida de información
 * Casos:
 * - E11-GT-01.1: Validar alteración en el archivo descargado Ramo de proceso de Parametrización de Gastos Técnicos
 * - E11-GT-01.2: Validar alteración en el archivo descargado Cuentas Contables de proceso de Parametrización de Gastos Técnicos
 * - E11-GT-01.3: Validar alteración en el archivo descargado Centros de proceso de Parametrización de Gastos Técnicos
 */

test.describe('@bloque2 @E11-GT-01', () => {
  test.skip('@bloque2 @E11-GT-01 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E11-GT-01.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
