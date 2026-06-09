import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E71-GT-01
 * Descripción: Validación de la carga de los archivos descargados en Parametrización de Gastos Técnicos
 * Casos:
 * - E71-GT-01.1: Validar la carga de archivo de Ramo descargado en la parametrización de Gastos Técnicos
 * - E71-GT-01.2: Validar la carga de archivo de Cuentas Contables descargado en la parametrización de Gastos Técnicos
 * - E71-GT-01.3: Validar la carga de archivo de Centros descargado en la parametrización de Gastos Técnicos
 */

test.describe('@bloque2 @E71-GT-01', () => {
  test.skip('@bloque2 @E71-GT-01 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E71-GT-01.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
