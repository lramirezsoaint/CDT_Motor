import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { selectGtDistribution } from '../_shared/gt-distribution';

test('@bloque2 @gt @gestor-gasto @E0-LOGIN-GESTOR-GASTO-01 E0-LOGIN-GESTOR-GASTO-01', async ({ page }) => {

  try {
        const loginPage = new LoginPage(page);
        await loginPage.login(
        env.gestorGastoUsername,
        env.gestorGastoPassword
        );
      } catch (error) { }
      await selectGtDistribution(page, 'REAL');

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


