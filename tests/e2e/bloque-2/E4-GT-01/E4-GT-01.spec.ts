import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import path from 'path';
import fs from 'fs';

test('E4-GT-01.1', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.login(
    env.gestorGastoUsername,
    env.gestorGastoPassword
  );

  // 1. Validar acceso a Distribución
  await expect(page)
    .toHaveURL(/\/distribuciones/i);

  // 2. Parametrización > Ramo
  await page.getByText('Parametrización').click();

  await page.getByRole('link', {
    name: /Ramo/i
  }).click();

  // 3. Cargar
  await page.getByRole('button', {
    name: /Cargar/i
  }).click();

  // 4. Validar modal
  const modal = page.getByRole('dialog');

  await expect(modal).toBeVisible();

  await expect(
    modal.getByText(/Cargar ramo/i)
  ).toBeVisible();

  const continuarButton = modal.getByRole('button', {
    name: /Aceptar/i
  });

  await expect(continuarButton)
    .toBeDisabled();

  await page.getByRole('button', {
    name: /Continuar con la carga/i
  }).click();

  // Modal visible
  await expect(modal).toBeVisible();

  // Botón continuar deshabilitado
  await expect(continuarButton).toBeDisabled();

  const archivoRamo = path.resolve(
    'fixtures',
    'files',
    'bloque-2',
    'E4-GT-01.1',
    'REAL Ramos GT.xlsx'
  );

  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),

    page.getByText(
      'Haz click para examinar',
      { exact: true }
    ).click()
  ]);

  await fileChooser.setFiles(archivoRamo);

  const aceptarButton = page.getByRole('button', {
    name: /continuar con la carga|aceptar/i
  });
  
  // Continuar
  await continuarButton.click();

  // Esperar resultado exitoso
  await expect(
    page.getByText(
      /¡listo! el archivo se cargó correctamente/i
    )
  ).toBeVisible({
    timeout: 120000
  });

  // Validar botón final
  await expect(
    page.getByRole('button', {
      name: /^aceptar$/i
    })
  ).toBeVisible();
});