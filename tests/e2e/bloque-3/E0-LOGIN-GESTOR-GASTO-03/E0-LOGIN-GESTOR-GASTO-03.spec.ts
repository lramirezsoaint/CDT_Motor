import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { ensureGfContext } from '../_shared/gf-context';

test('E0-LOGIN-ADMIN-03', async ({ page }) => {

  try {
        const loginPage = new LoginPage(page);
        await loginPage.login(
          env.username,
          env.password
        );
      } catch (error) { }

  await expect(page)
    .toHaveURL(/\/distribuciones/i);
  await ensureGfContext(page);

  // Parametrización > Cuentas Contables
  await page.getByText('Parametrización').click();

  await page.getByRole('link', {
    name: /cuentas contables/i
  }).click();

  await expect(page)
    .toHaveURL(/\/parametrizacion\/cuentas-contables/i);

  // Parametrización > Centros
  await page.getByRole('link', {
    name: /Centros/i
  }).click();

  await expect(page)
    .toHaveURL(/\/parametrizacion\/centros/i);

  // Parametrización > Maestro Producto
  await page.getByRole('link', {
    name: /Maestro producto/i
  }).click();
});
