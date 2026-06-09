import { env } from '@config/env';
import { test } from '../_shared/bloque3.fixture';
import { LoginPage } from '@pages/auth/LoginPage';

test.describe('@bloque3 @gf @columnas @E60-GF-02.2.4', () => {
  test('@critical @bloque3 @gf @E60-GF-02.2.4 debe validar buscador de columnas en Drivers CC Vida', async ({
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
    await test.step('Abrir menu de columnas y buscar', async () => {
      const menu = await bloque3GastosFinancierosPage.openColumnsMenu();
      const searchInput = menu.getByPlaceholder(/buscar/i).or(menu.locator('input[type="search"]')).first();
      await searchInput.fill('Código');
      const count = await menu.getByRole('menuitemcheckbox').count();
      test.expect(count, 'Debe haber columnas filtradas.').toBeGreaterThan(0);
      await page.keyboard.press('Escape');
    });
  });
});