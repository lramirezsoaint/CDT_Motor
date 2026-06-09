import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E5-GT-03
 * Descripción: Validación la carga de un archivo que no corresponde con la opción/funcionalidad de  proceso de Asignaciones de Gastos Técnicos
 * Casos:
 * - E5-GT-03.1: Carga de un archivo en la opción/funcionalidad Asignaciones de Métodos Subcanal definidos en el proceso de Asignaciones de Gastos Técnicos
 * - E5-GT-03.2: Carga de un archivo en la opción/funcionalidad Método Producto definidos en el proceso de Asignaciones de Gastos Técnicos
 * - E5-GT-03.3: Carga de un archivo en la opción/funcionalidad de Especiales NIIF  definidos en el proceso de Asignaciones de Gastos Técnicos
 */

test.describe('@bloque2 @E5-GT-03', () => {
  test.skip('@bloque2 @E5-GT-03 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E5-GT-03.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
