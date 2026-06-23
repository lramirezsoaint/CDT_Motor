import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { ensureGfContext } from '../_shared/gf-context';

test('E0-LOGIN-ADMIN-02', async ({ page }) => {

  try {
        const loginPage = new LoginPage(page);
        await loginPage.login(
          env.username,
          env.password
        );
      } catch (error) { }

  // VALIDAR DASHBOARD
  await expect(page)
    .toHaveURL(/\/distribuciones/i);
  await ensureGfContext(page);

  // ABRIR COMUNES
  await page.getByText('Comunes').click();

  // =========================
  // LINEAS
  // =========================

  await page.getByText('Líneas').click();

  await expect(
    page.getByRole('heading', {
      name: /líneas/i
    })
  ).toBeVisible();

  // =========================
  // GRUPO PRODUCTO
  // =========================

  await page.getByText('Grupo Producto').click();

  await expect(
    page.getByRole('heading', {
      name: /grupo producto/i
    })
  ).toBeVisible();

  // =========================
  // CANALES
  // =========================

  await page.getByRole('link', {
  name: 'Canales',
  exact: true
}).click();

  await expect(
    page.getByRole('heading', {
      name: /canales/i
    })
  ).toBeVisible();

  // =========================
  // SUBCANALES
  // =========================

  await page.getByText('Subcanales').click();

  await expect(
    page.getByRole('heading', {
      name: /subcanales/i
    })
  ).toBeVisible();

  // =========================
  // MAESTRO UOA
  // =========================

  await page.getByText('Maestro UoA').click();

  await expect(
    page.getByRole('heading', {
      name: /maestro uoa/i
    })
  ).toBeVisible();

  // =========================
  // UNIDADES DE CUENTA
  // =========================

 await page.getByText(/Unidades de Cuenta/i).click();

  await expect(
    page.getByRole('heading', {
      name: /unidades de cuenta/i
    })
  ).toBeVisible();

  // =========================
  // CONFIGURACION PARCHES
  // =========================

  await page.getByText('Configuración de Parches').click();

  await expect(
    page.getByRole('heading', {
      name: /configuración de parches/i
    })
  ).toBeVisible();

});
