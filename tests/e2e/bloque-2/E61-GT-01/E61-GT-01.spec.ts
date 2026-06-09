import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E61-GT-01
 * Descripción: Validar  que no se cargue un archivo de más de 30 Mb en la Parametrización de Gastos Técnicos
 * Casos:
 * - E61-GT-01.1: Validar la carga de archivo de más de 30 mb de peso para Ramo definido en la parametrización de Gastos Técnicos
 * - E61-GT-01.2: Validar la carga de archivo de más de 30 mb de peso para Cuentas Contables definido en la parametrización de Gastos Técnicos
 * - E61-GT-01.3: Validar la carga de archivo de más de 30 mb de peso para Centros definido en en la parametrización de Gastos Técnicos
 */

test.describe('@bloque2 @E61-GT-01', () => {
  test.skip('@bloque2 @E61-GT-01 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E61-GT-01.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
