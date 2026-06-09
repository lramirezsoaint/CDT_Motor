import { env } from '@config/env';
import { test } from '../_shared/bloque3.fixture';
import { LoginPage } from '@pages/auth/LoginPage';

test.describe('@bloque3 @gf @critical @E9-GF-02.4', () => {
  test('@critical @bloque3 @gf @E9-GF-02.4 debe validar visualizacion de datos de Drivers CC Vida cargados', async ({
    bloque3GastosFinancierosPage,
    page,
  }) => {
    try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorUsername,
        env.gestorPassword
      );
    } catch (error) { }
    await test.step('Acceder a Aprovisionamiento > Drivers CC Vida', async () => {
      await bloque3GastosFinancierosPage.openSidebarView('Aprovisionamiento', 'Drivers CC Vida');
    });

    await test.step('Validar que se muestre tabla con estructura de columnas', async () => {
      const table = bloque3GastosFinancierosPage['table'];
      await test.expect(table, 'Debe existir una tabla de Drivers CC Vida.').toBeVisible({ timeout: 20_000 });

      const headers = page.getByRole('columnheader');
      await test.expect(headers.first(), 'La tabla debe tener cabeceras de columnas.').toBeVisible({ timeout: 10000 });
      const headerCount = await headers.count();
      test.expect(headerCount, 'La tabla debe tener al menos una columna.').toBeGreaterThan(0);
    });

    await test.step('Validar que la tabla contenga datos cargados', async () => {
      const table = bloque3GastosFinancierosPage['table'];
      const rows = table.locator('tbody tr');

      await test.expect(rows.first(), 'Debe haber al menos una fila de datos.').toBeVisible({ timeout: 15_000 });

      const rowCount = await rows.count();
      test.expect(rowCount, 'La tabla debe mostrar registros de Drivers CC Vida.').toBeGreaterThan(0);
    });

    await test.step('Validar que los datos mostrados coincidan con estructura esperada', async () => {
      const firstRow = bloque3GastosFinancierosPage['table'].locator('tbody tr').first();
      const cells = firstRow.locator('td');

      await test.expect(cells.first(), 'La primera celda debe contener datos de Drivers CC Vida.').toBeVisible({ timeout: 10_000 });

      const firstCellText = await cells.first().innerText();
      test.expect(firstCellText.trim().length, 'El dato de Drivers CC Vida no debe estar vacío.').toBeGreaterThan(0);
    });
  });
});