import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { ensureGfContext } from '../_shared/gf-context';

test('CREAR-DISTRIBUCION-REAL-NIIF-SUGERENCIA', async ({ page }) => {

  try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorGFUsername,
        env.gestorGFPassword
      );
    } catch (error) { }

  await expect(page).toHaveURL(/\/distribuciones/i);
  await ensureGfContext(page);

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

  const nombreInicial = `Distribucion QA ${Date.now()}`;
  const periodo = '202501';
  const tipo = 'Real NIIF';
  const seccion = 'Flujo del mes';

  await modal.getByLabel(/nombre/i)
    .fill(nombreInicial);

  await modal.getByLabel(/tipo/i).click();

  await page.getByRole('option', {
    name: /real niif/i
  }).click();

  
  // Opción A: aplicar sugerencia
  await modal.getByRole('button', {
    name: /aplicar/i
  }).click();

  await expect(
    modal.getByLabel(/nombre/i)
  ).toHaveValue(/real niif/i);

  await modal.getByLabel(/periodo/i).click();

  await page
    .getByTestId(`periodo-option-${periodo}`)
    .click();

  await modal.getByLabel(/versión/i)
    .fill('1');

  await modal.getByLabel(/tasa de cambio/i)
    .fill('13.98');

  await page.getByTestId('seccion').click();

  await page
    .locator('[data-radix-popper-content-wrapper]')
    .getByText(seccion, { exact: true })
    .click();

  await expect(crearButton).toBeEnabled();

  await crearButton.click();

});
