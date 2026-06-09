import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E6-GT-01
 * Descripción: Validar la carga de un archivo con la estructura definida para el  proceso de Parametrización de Gastos Técnicos sin datos
 * Casos:
 * - E6-GT-01.1: Carga de archivo con la estructura definida y sin datos en Ramo de proceso de Parametrización de Gastos Técnicos
 * - E6-GT-01.2: Carga de archivo con la estructura definida y sin datos en Cuentas Contables de proceso de Parametrización de Gastos Técnicos
 * - E6-GT-01.3: Carga de archivo con la estructura definida y sin datos en Centros de proceso de Parametrización de Gastos Técnicos
 */

test.describe('@bloque2 @E6-GT-01', () => {
  test.skip('@bloque2 @E6-GT-01 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E6-GT-01.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
