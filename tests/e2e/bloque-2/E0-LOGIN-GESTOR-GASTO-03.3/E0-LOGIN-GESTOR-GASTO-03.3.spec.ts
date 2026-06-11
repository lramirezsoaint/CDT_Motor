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
  await page.getByText('Asignacion').click();

  await page.getByRole('link', {
    name: /Método Subcanal/i
  }).click();

 // Parametrización > Centros
  await page.getByRole('link', {
    name: /Método Producto/i
  }).click();

  // Parametrización > Maestro Producto
  await page.getByRole('link', {
    name: /Especiales NIIF/i
  }).click();
});

