import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E37-GT-01
 * Descripción: Validar  que solo el rol de administrador de Gastos pueda eliminar un registro en el  flujo de Gastos Técnicos
 * Casos:
 * - E37-GT-01.01.1: Validar el correcto funcionamiento de eliminar un registro de Ramo en el  flujo de Gastos Técnicos
 * - E37-GT-01.01.2: Validar el correcto funcionamiento de eliminar un registro de Cuentas Contables en el  flujo de Gastos Técnicos
 * - E37-GT-01.01.3: Validar el correcto funcionamiento de eliminar un registro de Centros en el  flujo de Gastos Técnicos
 * - E37-GT-01.02.1: Validar el correcto funcionamiento de eliminar un registro de Driver Producto en el  flujo de Gastos Técnicos
 * - E37-GT-01.02.3: Validar el correcto funcionamiento de eliminar un registro de Drive Subcanal en el  flujo de Gastos Técnicos
 * - E37-GT-01.02.4: Validar el correcto funcionamiento de eliminar un registro de Unidad de Cuenta GT en el  flujo de Gastos Técnicos
 * - E37-GT-01.02.5: Validar el correcto funcionamiento de eliminar un registro de Maestro de Negocios y Embebidos en el  flujo de Gastos Técnicos
 * - E37-GT-01.03.1: Validar el correcto funcionamiento de eliminar un registro de Método Subcanal en el  flujo de Gastos Técnicos
 * - E37-GT-01.03.2: Validar el correcto funcionamiento de eliminar un registro de Método Producto en el  flujo de Gastos Técnicos
 * - E37-GT-01.03.3: Validar el correcto funcionamiento de eliminar un registro de Especiales NIIF en el  flujo de Gastos Técnicos
 */

test.describe('@bloque2 @E37-GT-01', () => {
  test.skip('@bloque2 @E37-GT-01 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E37-GT-01.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
