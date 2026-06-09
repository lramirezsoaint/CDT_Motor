import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E61-GT-02
 * Descripción: Validar que no se cargue un archivo de más de 30 Mb en Aprovisionamiento de Gastos Técnicos
 * Casos:
 * - E61-GT-02.1: Validar la carga de archivo de más de 30 mb de peso para Exactus sin procesar de Aprovisionamiento definido en el proceso de Gastos Técnicos
 * - E61-GT-02.2: Validar la carga de archivo de más de 30 mb de peso para Driver Producto de Aprovisionamiento definido en el proceso de Gastos Técnicos
 * - E61-GT-02.3: Validar la carga de archivo de más de 30 mb de peso para Driver Subcanal  de Aprovisionamiento definido en el proceso de Gastos Técnicos
 * - E61-GT-02.4: Validar la carga de archivo de más de 30 mb de peso para Unidad de cuenta GT de Aprovisionamiento definido en el proceso de Gastos Técnicos
 * - E61-GT-02.5: Validar la carga de archivo de más de 30 mb de peso para Maestro de Negocio y Embebidos de Aprovisionamiento definido en el proceso de Gastos Técnicos
 */

test.describe('@bloque2 @E61-GT-02', () => {
  test.skip('@bloque2 @E61-GT-02 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E61-GT-02.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
