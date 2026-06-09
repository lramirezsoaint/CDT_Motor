import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E5-GT-01
 * Descripción: Validación la carga de un archivo que no corresponde con la opción/funcionalidad de proceso de  Parametrización de Gastos Técnicos
 * Casos:
 * - E5-GT-01.1: Carga de un archivo en la opción/funcionalidad Ramo diferente al definidos en el proceso de Parametrización de Gastos Técnicos
 * - E5-GT-01.2: Carga de un archivo en la opción/funcionalidad Cuentas Contables diferente al definidos en el proceso de Parametrización de Gastos Técnicos
 * - E5-GT-01.3: Carga de un archivo en la opción/funcionalidad Centros diferente al definidos en el proceso de Parametrización de Gastos Técnicos
 */

test.describe('@bloque2 @E5-GT-01', () => {
  test.skip('@bloque2 @E5-GT-01 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E5-GT-01.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
