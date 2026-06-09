import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test('E41-DIS-01', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.login(
    env.gestorGastoUsername,
    env.gestorGastoPassword
  );

  // 1. Accede a Distribuciones
  await expect(page)
    .toHaveURL(/\/distribuciones/i);

  // 2. Presiona el icono ojo del primer registro
  await page
    .getByRole('row')
    .nth(1)
    .getByRole('button')
    .click();

  // 3. Valida que se abre el modal
  await expect(
    page.getByRole('dialog')
  ).toBeVisible();

  // Validar información de avance
  await expect(
    page.getByText(/Fases del proceso/i)
  ).toBeVisible();

  // Validar que existen las fases
  await expect(
    page.getByText(/Modo de ejecución: Resumido/i)
  ).toBeVisible();

  await expect(
    page.getByText(/Modo de ejecución: Completo/i)
  ).toBeVisible();

});