import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test('CREAR-DISTRIBUCION-ERROR', async ({ page }) => {

  try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorUsername,
        env.gestorPassword
      );
    } catch (error) { }

  await expect(page).toHaveURL(/\/distribuciones/i);

  await page.getByRole('button', {
    name: /nueva distribución/i
  }).click();

  const modal = page.getByRole('dialog');

  await expect(modal).toBeVisible();

  await expect(
    modal.getByText(/crear distribución/i)
  ).toBeVisible();

  const crearButton = modal.getByRole('button', {
    name: /^crear$/i
  });

  await expect(crearButton).toBeDisabled();

  const periodo = '202501';
  const tipo = 'Real Local';
  const seccion = 'Flujo del mes';

  await modal.getByLabel(/nombre/i)
    .fill(`${periodo}_${tipo}_${seccion}`);

  await modal.getByLabel(/tipo/i).click();

  await page.getByRole('option', {
    name: tipo
  }).click();

  await modal.getByLabel(/periodo/i).click();

  await page
    .getByTestId(`periodo-option-${periodo}`)
    .click();

  await modal.getByLabel(/versión/i)
    .fill('1.0');

  await modal.getByLabel(/tasa de cambio/i)
    .fill('13');

  await page.getByTestId('seccion').click();

  await page
    .locator('[data-radix-popper-content-wrapper]')
    .getByText(seccion, { exact: true })
    .click();

  await expect(crearButton).toBeDisabled();
});