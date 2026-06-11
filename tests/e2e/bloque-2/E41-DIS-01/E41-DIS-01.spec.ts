import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test('VISUALIZAR-PROGRESO-DISTRIBUCION', async ({ page }) => {

  try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorGastoUsername,
      env.gestorGastoPassword
      );
    } catch (error) { }

  // 1. Accede a Distribuciones
  await expect(page)
    .toHaveURL(/\/distribuciones/i);

  // 2. Presiona icono ojo del primer registro
  await page
    .getByRole('row')
    .nth(1)
    .getByRole('button')
    .first()
    .click();

  // 3. Se levanta modal con información de progreso
  const modal = page.getByRole('dialog');

  await expect(modal).toBeVisible();

  await expect(
    modal.getByText(/proceso/i)
  ).toBeVisible();

  await expect(
    modal.getByText(/Resumido/i)
  ).toBeVisible();

  await expect(
    modal.getByText(/Completo/i)
  ).toBeVisible();

});

