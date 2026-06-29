import { expect, Locator, Page, test } from '@playwright/test';
import path from 'path';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { SelectGtDistributionOptions, selectGtDistribution } from './gt-distribution';
import { GtCaseBase, openGtView, tagsFor, visibleButton } from './gt-ui';

type UploadAndTableCaseConfig = GtCaseBase & {
  modalTitle: RegExp;
  fileFolder: string;
  fileName: string;
  distribution?: SelectGtDistributionOptions;
  todo?: string;
};

export function UploadAndTableCase(config: UploadAndTableCaseConfig) {
  test(`${tagsFor(config)} carga archivo y valida tabla`, async ({ page }, testInfo) => {
    test.setTimeout(360_000);
    if (config.todo) {
      testInfo.annotations.push({ type: 'TODO', description: config.todo });
    }

    await test.step('Abrir vista del flujo de Gastos Tecnicos', async () => {
      try {
        await page.goto('https://distribuciongastos.pacificotest.com.pe/');
        const loginPage = new LoginPage(page);
        await loginPage.login(env.gestorGTUsername, env.gestorGTPassword);
      } catch (error) { }
    });

    await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
      await selectGtDistribution(page, config.distribution);
      await openGtView(page, config);
      await expect(page.getByRole('heading', { name: new RegExp(config.view, 'i') })).toBeVisible({ timeout: 30_000 });
    });

    const modal = await uploadFile(page, config);

    await test.step('Procesar archivo seleccionado', async () => {
      const processButton = modal.getByRole('button', { name: /procesar archivo|aceptar/i });
      await expect(processButton, 'El boton debe habilitarse tras seleccionar archivo.').toBeEnabled();
      await processButton.click();
      await expect(modal.getByText(/Listo|archivo se carg[oó] correctamente|cargado satisfactoriamente/i).first()).toBeVisible({ timeout: 300_000 });
      const acceptButton = modal.getByRole('button', { name: /^aceptar$/i });
      if (await acceptButton.isVisible({ timeout: 5_000 }).catch(() => false)) await acceptButton.click();
    });

    await test.step('Validar datos mostrados en tabla', async () => {
      const table = page.locator('table').first();
      await expect(table, 'Debe mostrarse una tabla con la estructura del documento cargado.').toBeVisible({ timeout: 30_000 });
      await expect(table.locator('thead th').first().or(table.locator('thead [role="columnheader"]').first()), 'La tabla debe mostrar columnas.').toBeVisible({ timeout: 30_000 });
      await expect(table.locator('tbody tr').first(), 'La tabla debe mostrar datos cargados.').toBeVisible({ timeout: 30_000 });
    });
  });
}

async function uploadFile(page: Page, config: UploadAndTableCaseConfig): Promise<Locator> {
  await test.step('Abrir modal Cargar y validar estado inicial', async () => {
    await visibleButton(page, /^cargar$/i).click();
  });

  const modal = page.getByTestId('cargas-parametros-upload-dialog').or(page.getByRole('dialog')).first();
  const processButton = modal.getByRole('button', { name: /procesar archivo|aceptar/i });
  await expect(modal, 'Debe mostrarse el modal de carga definido por el catalogo.').toBeVisible();
  await expect(modal.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado del modal.').toBeVisible();
  await expect(processButton, 'El boton de procesar/aceptar inicia deshabilitado.').toBeDisabled();

  const continueButton = modal.getByRole('button', { name: /continuar con la carga/i });
  try { await continueButton.click(); } catch (error) { }

  const filePath = path.resolve('fixtures', 'files', 'bloque-2', config.fileFolder, config.fileName);
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    modal.getByText('Haz click para examinar', { exact: true }).click(),
  ]);
  await fileChooser.setFiles(filePath);
  return modal;
}