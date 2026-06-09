import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E37-GT-02
 * Descripción: Validar restricciones al eliminar un registro en el Gastos Técnicos
 * Casos:
 * - E37-GT-02.01.1: Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Ramo
 * - E37-GT-02.01.2: Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Cuentas Contables
 * - E37-GT-02.01.3: Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de  Centros
 * - E37-GT-02.02.1: Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Driver Producto
 * - E37-GT-02.02.2: Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Drive Subcanal
 * - E37-GT-02.02.3: Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Unidad de Cuenta GT
 * - E37-GT-02.02.4: Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Maestro de Negocios y Embebidos
 * - E37-GT-02.03.1: Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Método Subcanal
 * - E37-GT-02.03.2: Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de MetodoProducto
 * - E37-GT-02.03.3: Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Especiales NIIF
 */

test.describe('@bloque2 @E37-GT-02', () => {
  test.skip('@bloque2 @E37-GT-02 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E37-GT-02.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
