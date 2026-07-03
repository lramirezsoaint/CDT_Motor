import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test('@bloque3 @E40-DIS-02 @distribucion CREAR-DISTRIBUCION-ERROR', async ({ page }) => {
  try {
    const loginPage = new LoginPage(page);
    await loginPage.login(env.gestorGFUsername, env.gestorGFPassword);
  } catch (error) { }

  await expect(page).toHaveURL(/\/distribuciones/i);

  // 1. Nueva Distribución
  await page.getByRole('button', { name: /nueva distribución/i }).click();

  const modal = page.getByRole('dialog');
  await expect(modal).toBeVisible();

  // 2. Llenar con datos DUPLICADOS (idénticos a una existente)
  await modal.getByLabel(/nombre/i).fill('202501_Real Local_Flujo del mes');

  await modal.getByLabel(/tipo/i).click();
  await page.getByRole('option', { name: 'Real Local' }).click();

  await modal.getByLabel(/periodo/i).click();
  await page.getByTestId('periodo-option-202501').click();

  await modal.getByLabel(/versión/i).fill('1');
  await modal.getByLabel(/tasa de cambio/i).fill('13.98');

  await page.getByTestId('seccion').click();
  await page.locator('[data-radix-popper-content-wrapper]')
    .getByText('Flujo del mes', { exact: true }).click();

  // 3. Crear
  const crearButton = modal.getByRole('button', { name: /^crear$/i });
  await expect(crearButton).toBeEnabled();
  await crearButton.click();

  // 4. Verificar toast de error
  await expect(
    page.getByText(/El registro que intentas agregar ya existe en el sistema/i)
  ).toBeVisible({ timeout: 15000 });
});
