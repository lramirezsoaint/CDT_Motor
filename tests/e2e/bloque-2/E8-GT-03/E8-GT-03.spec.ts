import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E8-GT-03
 * Descripción: Validar la carga de un archivo con los datos incompletos en Asignación de Gastos Técnicos
 * Casos:
 * - E8-GT-03.1: Validar la carga de archivo con los datos incompletos para Método Subcanal definido en el  proceso de Parametrización de Gastos Técnicos
 * - E8-GT-03.2: Validar la carga de archivo con los datos incompletos para Método Producto en el  proceso de Parametrización de Gastos Técnicos
 * - E8-GT-03.3: Validar la carga de archivo con los datos incompletos para Especiales NIIF en el  proceso de Parametrización de Gastos Técnicos
 */

test.describe('@bloque2 @E8-GT-03', () => {
  test.skip('@bloque2 @E8-GT-03 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E8-GT-03.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
