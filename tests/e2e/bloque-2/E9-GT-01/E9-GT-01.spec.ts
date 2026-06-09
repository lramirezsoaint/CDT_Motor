import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E9-GT-01
 * Descripción: Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de Parametrización de Gastos Técnicos
 * Casos:
 * - E9-GT-01.1: Validar que se muestran en el FrontEnd los datos de archivo Ramo definidos en el proceso de Parametrización de Gastos Técnicos
 * - E9-GT-01.2: Validar que se muestran en el FrontEnd los datos de archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos
 * - E9-GT-01.3: Validar que se muestran en el FrontEnd los datos de archivo Centros definidos en el proceso de Parametrización de Gastos Técnicos
 */

test.describe('@bloque2 @E9-GT-01', () => {
  test.skip('@bloque2 @E9-GT-01 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E9-GT-01.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
