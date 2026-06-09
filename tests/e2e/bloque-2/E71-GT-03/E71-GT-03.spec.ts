import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E71-GT-03
 * Descripción: Validación de la carga de los archivos descargados en Asignaciones de Gastos Técnicos
 * Casos:
 * - E71-GT-03.1: Validar la carga de archivo de Método Subcanal descargado en la parametrización de Gastos Técnicos
 * - E71-GT-03.2: Validar la carga de archivo de Especiales NIIF descargado en la parametrización de Gastos Técnicos
 * - E71-GT-03.3: Validar la carga de archivo de Método Producto descargado en la parametrización de Gastos Técnicos
 */

test.describe('@bloque2 @E71-GT-03', () => {
  test.skip('@bloque2 @E71-GT-03 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E71-GT-03.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
