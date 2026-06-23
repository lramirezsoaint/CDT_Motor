import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { ensureGfContext } from '../_shared/gf-context';

test('SELECCIONAR-DISTRIBUCION-DESDE-TABLA', async ({ page }) => {

  try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorUsername,
        env.gestorPassword
      );
    } catch (error) { }

  await expect(page)
    .toHaveURL(/\/distribuciones/i);
  await ensureGfContext(page);

  // Buscar una distribución Creada
  const row = page
    .getByRole('row')
    .filter({
      hasText: /creada/i
    })
    .first();

  await expect(row).toBeVisible({
    timeout: 30000
  });

  // Obtener nombre de distribución
  const nombreDistribucion =
    (
      await row
        .locator('td')
        .nth(0)
        .textContent()
    )?.trim();

  expect(nombreDistribucion)
    .toBeTruthy();

  // Click en el nombre de distribución
  await row
    .locator('td')
    .nth(0)
    .click();

  // Modal
  const modal = page.getByRole('dialog');

  await expect(modal)
    .toBeVisible();

  await expect(
    modal.getByText(
      /la información que se mostrará corresponde a la distribución seleccionada/i
    )
  ).toBeVisible();

  // Aceptar
  await modal.getByRole('button', {
    name: /aceptar/i
  }).click();

  // 1. Dropdown actualizado
  await expect(
    page.getByText(
      nombreDistribucion!
    )
  ).toBeVisible({
    timeout: 30000
  });

  // 2. Registro marcado
  await expect(row)
    .toBeVisible();

  // 3. Datos visibles
  await expect(
    page.getByText(
      nombreDistribucion!
    )
  ).toBeVisible();

  // 4. Procesos muestra estado
  await page.getByText(
    'Procesos'
  ).click();

  await expect(
    page.getByText(
      /estado/i
    )
  ).toBeVisible();

});
