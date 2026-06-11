import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test('E0-LOGIN-ADMIN-03', async ({ page }) => {

  try {
        const loginPage = new LoginPage(page);
        await loginPage.login(
        env.gestorGastoUsername,
        env.gestorGastoPassword
        );
      } catch (error) { }

  await expect(page)
    .toHaveURL(/\/distribuciones/i);

  // Parametrización > Cuentas Contables
  await page.getByText('Aprovisionamiento').click();

  await page.getByRole('link', {
    name: /Exactus/i
  }).click();

  // Parametrización > Centros
  await page.getByRole('link', {
    name: /Driver Producto/i
  }).click();

  await page.getByRole('link', {
    name: /Unidad de Cuenta GT/i
  }).click();

  // Parametrización > Maestro Producto
  await page.getByRole('link', {
    name: /Maestro de Negocios* y Embebidos/i
  }).click();
});

