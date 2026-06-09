import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test('E0-LOGIN-GESTOR-GASTO-02', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.login(
    env.gestorGastoUsername,
    env.gestorGastoPassword
  );

  await expect(page)
    .toHaveURL(/\/distribuciones/i);

  await expect(
    page.getByRole('heading', {
      name: /distribuciones/i
    })
  ).toBeVisible();

  // EL GESTOR NO DEBE VER COMUNES
  await expect(
    page.getByText('Comunes')
  ).toHaveCount(0);

});