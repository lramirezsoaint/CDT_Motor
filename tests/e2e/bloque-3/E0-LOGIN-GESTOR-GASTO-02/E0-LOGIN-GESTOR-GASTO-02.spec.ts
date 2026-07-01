import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test('@critical @bloque3 @auth @gf @login @E0-LOGIN-GESTOR-GASTO-02 E0-LOGIN-GESTOR-GASTO-02', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(env.gestorGFUsername, env.gestorGFPassword);

  await expect(page, 'Debe quedar autenticado en la pantalla de Distribuciones').toHaveURL(/\/distribuciones/i, {
    timeout: 40_000,
  });
  await expect(page.getByRole('button', { name: /^Comunes$/ }), 'El rol GF no debe ver el menu Comunes').toHaveCount(0);
});