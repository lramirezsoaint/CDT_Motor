import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test('E0-LOGIN-GESTOR-GASTO-03.1', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.login(
    env.gestorGastoUsername,
    env.gestorGastoPassword
  );

  // VALIDAR LOGIN
  await expect(page)
    .toHaveURL(/\/distribuciones/i);

  // ABRIR PARAMETRIZACION
  await page.getByText('Parametrización').click();

  // =========================
  // RAMO
  // =========================

  await page.getByRole('link', {
    name: /Ramo/i
  }).click();

  // VALIDAR NO EXISTE ELIMINAR
  await expect(
    page.getByRole('button', {
      name: /eliminar/i
    })
  ).toHaveCount(0);

  // =========================
  // CUENTAS CONTABLES
  // =========================

  //await page.getByRole('link', {
  //  name: /Cuentas contables/i
  //}).click();

  //await expect(
  //  page.getByRole('button', {
  //    name: /eliminar/i
  //  })
  //).toHaveCount(0);

  // =========================
  // CENTROS
  // =========================

  await page.getByRole('link', {
    name: /Centros/i
  }).click();

  await expect(
    page.getByRole('button', {
      name: /eliminar/i
    })
  ).toHaveCount(0);

});