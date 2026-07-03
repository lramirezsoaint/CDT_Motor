import { test } from '../_shared/bloque3.fixture';
import { expect } from '@fixtures/base.fixture';

test('@bloque3 @E40-DIS-03 @distribucion CREAR-DISTRIBUCION-ERROR-FORMATO', async ({ page }) => {
  await expect(page).toHaveURL(/\/distribuciones/i);

  // 1. Nueva Distribución
  await page.getByRole('button', { name: /nueva distribución/i }).click();

  const modal = page.getByRole('dialog');
  await expect(modal).toBeVisible();

  // 2. Seleccionar Tipo: Presupuesto
  await modal.getByLabel(/tipo/i).click();
  await page.getByRole('option', { name: 'Presupuesto' }).click();

  // 3. Llenar campos con datos INVÁLIDOS
  await modal.getByLabel(/nombre/i).fill('*');

  await modal.getByLabel(/periodo/i).click();
  await page.getByTestId('periodo-option-202612').click();

  await modal.getByLabel(/versión/i).fill('99');

  await modal.getByLabel(/tasa de cambio/i).fill('1234');

  await page.getByTestId('seccion').click();
  await page.locator('[data-radix-popper-content-wrapper]')
    .getByText('Ajustes del mes', { exact: true }).click();

  // 4. Verificar mensajes de error
  await expect(
    modal.getByText(/El nombre debe tener entre 1 y 100 caracteres/i)
  ).toBeVisible();

  await expect(
    modal.getByText(/Para Presupuesto, el período debe terminar en '00'/i)
  ).toBeVisible();

  await expect(
    modal.getByText(/El valor ingresado no es válido.*número entre 1 y 15/i)
  ).toBeVisible();

  await expect(
    modal.getByText(/Formato no admitido.*hasta 4 cifras/i)
  ).toBeVisible();

  // 5. Botón Crear deshabilitado
  const crearButton = modal.getByRole('button', { name: /^crear$/i });
  await expect(crearButton).toBeDisabled();
});
