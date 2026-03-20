import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test.describe('@auth @smoke @E0-LOGIN-ADMIN-01', () => {
  test('@smoke @auth @E0-LOGIN-ADMIN-01 debe permitir autenticarse con rol administrador', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    const loginButton = page.getByRole('button', { name: /logo de microsoft/i });
    const needsLogin = await loginButton.isVisible().catch(() => false);

    if (needsLogin) {
      await loginPage.loginWithMicrosoft(env.username, env.password);
    }

    await loginPage.assertAuthenticated();
    await expect(page.getByText(/distribuci\u00f3n/i).first()).toBeVisible();
  });
});
