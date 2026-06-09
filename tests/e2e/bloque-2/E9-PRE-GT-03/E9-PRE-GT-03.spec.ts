import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E9-PRE-GT-03
 * Descripción: Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de  Asignaciones de Gastos  Técnicos para presupuesto
 */

test.describe('@bloque2 @E9-PRE-GT-03', () => {
  test.skip('@bloque2 @E9-PRE-GT-03 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E9-PRE-GT-03.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
