import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test('E0-LOGIN-ADMIN-02', async ({ page }) => {

  try {
        const loginPage = new LoginPage(page);
        await loginPage.login(
          env.username,
          env.password
        );
      } catch (error) { }

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