import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { selectGtDistribution } from '../_shared/gt-distribution';

test('@bloque2 @gt @gestorGT @E0-LOGIN-GESTOR-GASTO-03.2 E0-LOGIN-ADMIN-03', async ({ page }) => {

  try {
        const loginPage = new LoginPage(page);
        await loginPage.login(
        env.gestorGTUsername,
        env.gestorGTPassword       
        );
        await selectGtDistribution(page);
      } catch (error) { }
      

  await expect(page)
    .toHaveURL(/\/distribuciones/i);

  // ParametrizaciÃ³n > Cuentas Contables
  await page.getByText('Aprovisionamiento').click();

  await page.getByRole('link', {
    name: /Exactus/i
  }).click();

  // ParametrizaciÃ³n > Centros
  await page.getByRole('link', {
    name: /Driver Producto/i
  }).click();

  await page.getByRole('link', {
    name: /Unidad de Cuenta GT/i
  }).click();

  // ParametrizaciÃ³n > Maestro Producto
  await page.getByRole('link', {
    name: /Maestro de Negocios* y Embebidos/i
  }).click();
});


