import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E44-DIS-01
 * Descripción: Validar que el sistema permite visualizar una distribución desde el listado de distribuciones
 */

test.describe('@bloque2 @E44-DIS-01', () => {
  test('@bloque2 @E44-DIS-01 debe visualizar una distribución desde el listado de distribuciones', async ({ distribucionPage, page }) => {
    const version = '7';
    const tasaCambio = '33.33';

    await test.step('Abrir módulo Distribuciones', async () => {
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      await distribucionPage.openDistribuciones();
    });

    await test.step('Crear una nueva distribución para validar la visualización desde el listado', async () => {
      await distribucionPage.crearDistribucion({ version, tasaCambio });
      await expect(page.getByText(new RegExp(tasaCambio))).toBeVisible({ timeout: 20_000 });
    });

    await test.step('Buscar y seleccionar la distribución creada desde el listado', async () => {
      await distribucionPage.search(tasaCambio);
      await distribucionPage.expectFirstRowContains(tasaCambio);
      const firstRow = await distribucionPage.requireFirstDistributionRow('visualizar distribución desde el listado');
      const rowValues = await distribucionPage.getRowValues(firstRow);
      await distribucionPage.selectDistributionFromList(firstRow);

      try {
        await distribucionPage.confirmDistributionSelection(rowValues);
      } catch {
        await distribucionPage.expectViewModalContains(rowValues);
      }
    });
  });
});
