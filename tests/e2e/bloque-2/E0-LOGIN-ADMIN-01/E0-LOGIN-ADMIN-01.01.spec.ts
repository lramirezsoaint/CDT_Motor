import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { selectGtDistribution } from '../_shared/gt-distribution';

test('@bloque2 @gt @admin @E0-LOGIN-ADMIN-01.01 E0-LOGIN-ADMIN-01', async ({ page }) => {
  try {
    const loginPage = new LoginPage(page);
    await loginPage.login(
      env.username,
      env.password
    );
    
  } catch (error) { }
  await selectGtDistribution(page, 'REAL');
  await expect(page)
    .toHaveURL(/\/distribuciones/i);

});


