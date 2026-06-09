import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E69-GT-EC
 * Descripción: Validar que se procesen las fases en la sección "Procesos" usando "Exactus Procesado" de Gastos Técnicos en el  modo de ejecución Completo
 */

test.describe('@bloque2 @E69-GT-EC', () => {
  test.skip('@bloque2 @E69-GT-EC placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E69-GT-EC.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
