import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E60-GT
 * Descripción: Validar el funcionamiento de botón 'Ver'' más columnas en el  flujo de Gastos Técnicos
 */

test.describe('@bloque2 @E60-GT', () => {
  test.skip('@bloque2 @E60-GT placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E60-GT.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
