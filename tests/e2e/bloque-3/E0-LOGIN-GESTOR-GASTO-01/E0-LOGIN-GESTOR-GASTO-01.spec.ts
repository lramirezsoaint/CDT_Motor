import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { ensureGfContext } from '../_shared/gf-context';

test('E0-LOGIN-GESTOR-GASTO-01', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.login(
    env.gestorGFUsername,
    env.gestorGFPassword
  );
  // VALIDAR LOGIN
  await expect(page)
    .toHaveURL(/\/distribuciones/i);

  // VALIDAR DASHBOARD
  await expect(
    page.getByRole('heading', {
      name: /distribuciones/i
    })
  ).toBeVisible();

});
