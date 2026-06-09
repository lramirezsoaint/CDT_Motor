import { env } from '@config/env';
import { test } from '../_shared/bloque3.fixture';
import { LoginPage } from '@pages/auth/LoginPage';

test.describe('@bloque3 @gf @columnas @E60-GF-02.1.1', () => {
  test('@critical @bloque3 @gf @E60-GF-02.1.1 debe validar buscador de columnas en Cuentas Contables', async ({
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
    await test.step('Acceder a Parametrizacion > Cuentas Contables', async () => {
      await bloque3GastosFinancierosPage.openSidebarView('Parametrización', 'Cuentas Contables');
    });

    await test.step('Abrir menu de columnas y buscar una columna', async () => {
      const menu = await bloque3GastosFinancierosPage.openColumnsMenu();
      const searchInput = menu.getByPlaceholder(/buscar/i).or(menu.locator('input[type="search"]')).first();
      await searchInput.fill('Código');
      const options = menu.getByRole('menuitemcheckbox');
      const count = await options.count();
      test.expect(count, 'Debe haber al menos una columna filtrada.').toBeGreaterThan(0);
      await page.keyboard.press('Escape');
    });
  });
});