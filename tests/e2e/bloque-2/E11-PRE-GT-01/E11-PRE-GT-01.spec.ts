import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E11-PRE-GT-01
 * Descripción: Validar que el archivo descargado en el  proceso de Parametrización de  Gastos Técnicos no tenga pérdida de información para el flujo Presupuesto
 */

test.describe('@bloque2 @E11-PRE-GT-01', () => {
  test.skip('@bloque2 @E11-PRE-GT-01 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E11-PRE-GT-01.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
