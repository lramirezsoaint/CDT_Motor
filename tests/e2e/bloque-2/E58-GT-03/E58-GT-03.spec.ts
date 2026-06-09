import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E58-GT-03
 * Descripción: Validar que no se cargue el archivo sin que su antecesor ya se encuentre cargado en Asignaciones de Gastos Técnicos
 * Casos:
 * - E58-GT-03.1: Carga de un archivo en la opción/funcionalidad Asignaciones Método Subcanal sin que su antecesor ya se encuentre cargado en Asignaciones de Gastos Técnicos
 * - E58-GT-03.2: Carga de un archivo en la opción/funcionalidad Asignaciones Método Producto sin que su antecesor ya se encuentre cargado en Asignaciones de Gastos Técnicos
 * - E58-GT-03.3: Carga de un archivo en la opción/funcionalidad Asignaciones Especiales NIIF sin que su antecesor ya se encuentre cargado en Asignaciones de Gastos Técnicos
 */

test.describe('@bloque2 @E58-GT-03', () => {
  test.skip('@bloque2 @E58-GT-03 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E58-GT-03.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
