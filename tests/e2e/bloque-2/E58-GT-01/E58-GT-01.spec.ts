import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E58-GT-01
 * Descripción: Validar que no se cargue el archivo sin que su antecesor ya se encuentre cargado en Parametrización de Gastos Técnicos
 * Casos:
 * - E58-GT-01.1: Carga de un archivo en la opción/funcionalidad Centros sin que su antecesor ya se encuentre cargado en Parametrización de Gastos Técnicos
 */

test.describe('@bloque2 @E58-GT-01', () => {
  test.skip('@bloque2 @E58-GT-01 placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario E58-GT-01.
    // Usa el catálogo en catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
