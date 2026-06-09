import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E5-GT-02
 * Descripción: Validación la carga de un archivo que no corresponde con la opción/funcionalidad de proceso de Aprovisionamiento de Gastos Técnicos
 * Casos:
 * - E5-GT-02.1: Carga de un archivo en la opción/funcionalidad  Exactus sin procesar diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos
 * - E5-GT-02.2: Carga de un archivo en la opción/funcionalidad Driver Producto diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos
 * - E5-GT-02.3: Carga de un archivo en la opción/funcionalidad Driver Subcanal diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos
 * - E5-GT-02.4: Carga de un archivo en la opción/funcionalidad Unidad de cuenta GT diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos
 * - E5-GT-02.5: Carga de un archivo en la opción/funcionalidad Maestro de Negocio y Embebidos diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos
 */

test.describe('@bloque2 @E5-GT-02', () => {
  test.skip('@bloque2 @E5-GT-02 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E5-GT-02.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
