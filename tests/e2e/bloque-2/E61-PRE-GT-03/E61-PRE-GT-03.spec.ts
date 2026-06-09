import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E61-PRE-GT-03
 * Descripción: Validar que no se cargue un archivo de más de 30 Mb en Asignaciones de Gastos Técnicos para Presupuesto
 */

test.describe('@bloque2 @E61-PRE-GT-03', () => {
  test.skip('@bloque2 @E61-PRE-GT-03 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E61-PRE-GT-03.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
