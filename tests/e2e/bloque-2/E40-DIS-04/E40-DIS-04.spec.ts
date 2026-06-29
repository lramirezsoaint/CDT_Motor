import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { selectGtDistribution } from '../_shared/gt-distribution';

test.use({ storageState: '.auth/gestorGT.json' });
test('@bloque2 @gt @gestorGT @E40-DIS-04 CREAR-DISTRIBUCION-REAL-NIIF-SUGERENCIA', async ({ page }) => {

  try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorGTUsername,
      env.gestorGTPassword
      );
    } catch (error) { }
await selectGtDistribution(page);
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

  
  // OpciÃ³n A: aplicar sugerencia
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


