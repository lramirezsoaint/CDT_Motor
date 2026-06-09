import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E67-DIS
 * Descripción: Validar que el archivo descargado de Distribución muestre, las cabeceras, los datos correctamente y no tenga perdida de información
 * Casos:
 * - E67-DIS: Validar alteración en el archivo descargado Distribución
 */

test.describe('@bloque2 @E67-DIS', () => {
  test.skip('@bloque2 @E67-DIS placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E67-DIS.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
