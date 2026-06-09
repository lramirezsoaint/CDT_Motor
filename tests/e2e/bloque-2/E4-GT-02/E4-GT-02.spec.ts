import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import path from 'path';

test('E4-GT-01.2', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.login(
    env.gestorGastoUsername,
    env.gestorGastoPassword
  );

  await expect(page)
    .toHaveURL(/\/distribuciones/i);

  // Parametrización > Cuentas Contables
  await page.getByText('Parametrización').click();

  await page.getByRole('link', {
    name: /cuentas contables/i
  }).click();

  // Cargar
  await page.getByRole('button', {
    name: /cargar/i
  }).click();

  const modal = page.getByRole('dialog');

  await expect(modal).toBeVisible();

  await expect(
    modal.getByText(/cargar cuentas contables/i)
  ).toBeVisible();

  const aceptarButton = modal.getByRole('button', {
    name: /^aceptar$/i
  });

  await expect(aceptarButton).toBeDisabled();

  const archivoCuentasContables = path.resolve(
    'fixtures',
    'files',
    'bloque-2',
    'E4-GT-01.2',
    'REAL Cuentas Contables GT.xlsx'
  );

  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),

    page.getByText(
      'Haz click para examinar',
      { exact: true }
    ).click()
  ]);

  await fileChooser.setFiles(archivoCuentasContables);

  await expect(aceptarButton).toBeEnabled();

  await expect(
    modal.getByRole('button', {
      name: /subir otro archivo|subir nuevo archivo/i
    })
  ).toBeVisible();

  await aceptarButton.click();

  await expect(
    page.getByText(
      /¡listo! el archivo se cargó correctamente/i
    )
  ).toBeVisible({
    timeout: 120000
  });

  await expect(
    page.getByRole('button', {
      name: /^aceptar$/i
    })
  ).toBeVisible();

});