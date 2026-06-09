import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E61-GT-03
 * Descripción: Validar que no se cargue un archivo de más de 30 Mb en Asignaciones de Gastos Técnicos
 * Casos:
 * - E61-GT-03.1: Validar la carga de archivo de más de 30 mb de peso para Métodos Subcanal de Asignaciones definido en el proceso de Gastos Técnicos
 * - E61-GT-03.2: Validar la carga de archivo de más de 30 mb de peso para Métodos Producto de Asignaciones definido en el proceso de Gastos Técnicos
 * - E61-GT-03.3: Validar la carga de archivo de más de 30 mb de peso para Especiales NIIF de Asignaciones definido en el proceso de Gastos Técnicos
 */

test.describe('@bloque2 @E61-GT-03', () => {
  test.skip('@bloque2 @E61-GT-03 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E61-GT-03.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
