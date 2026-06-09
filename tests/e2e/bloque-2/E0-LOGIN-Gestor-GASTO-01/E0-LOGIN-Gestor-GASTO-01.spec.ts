import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test('E0-LOGIN-ADMIN-02', async ({ page }) => {

  const loginPage = new LoginPage(page);

  // LOGIN
 await loginPage.login(
  env.gestorGastoUsername,
  env.gestorGastoPassword
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