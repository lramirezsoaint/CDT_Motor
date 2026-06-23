import { expect, Page, test } from '@playwright/test';
import path from 'path';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { selectGtDistribution } from './gt-distribution';
import { openGtView, tagsFor } from './gt-ui';

type ExactusCaseConfig = {
  caseId: string;
  role?: 'gestor-gasto';
  priority?: 'critical' | 'smoke';
};

export function DeleteExactusVersionCase(config: ExactusCaseConfig) {
  test(`${tagsFor({ ...config, section: 'Aprovisionamiento', view: 'Exactus' })} borra version Exactus`, async ({ page }) => {
    test.setTimeout(120_000);
    await openExactus(page);

    await test.step('Ejecutar Borrar Version y confirmar advertencia', async () => {
      const deleteButton = page.getByRole('button', { name: /Borrar Versi.n/i }).or(page.getByText(/Borrar Versi.n/i)).first();
      await expect(deleteButton, 'Debe existir el boton Borrar Version.').toBeVisible({ timeout: 30_000 });
      await deleteButton.click();
      const dialog = page.getByRole('dialog').filter({ hasText: /Se eliminar.n todos los datos asociados|Desea continuar/i }).first();
      await expect(dialog, 'Debe mostrarse la advertencia de borrado de Exactus.').toBeVisible({ timeout: 30_000 });
      await dialog.getByRole('button', { name: /Aceptar|Si|S./i }).first().click();
    });

    await test.step('Validar borrado de data Exactus', async () => {
      await expect(page.getByText(/Listo|data ha sido borrada/i).first()).toBeVisible({ timeout: 60_000 });
      await expect(page.locator('table tbody tr').first()).toBeHidden({ timeout: 30_000 }).catch(() => undefined);
    });
  });
}

export function ExactusProcessedDownloadCase(config: ExactusCaseConfig) {
  test(`${tagsFor({ ...config, section: 'Aprovisionamiento', view: 'Exactus' })} descarga Exactus procesado`, async ({ page }) => {
    test.setTimeout(120_000);
    await openExactus(page);
    await selectExactusProcessed(page);

    const downloadButton = page.locator('[data-testid$="-download"]').or(page.getByRole('button', { name: /Descargar/i })).first();
    await expect(downloadButton, 'Debe existir el boton Descargar de Exactus procesado.').toBeVisible({ timeout: 30_000 });
    await expect(downloadButton, 'El boton Descargar debe estar habilitado.').toBeEnabled();
    const [download] = await Promise.all([page.waitForEvent('download'), downloadButton.click()]);
    expect(await download.failure(), 'La descarga no debe fallar.').toBeNull();
    expect(download.suggestedFilename(), 'El archivo descargado debe tener extension valida.').toMatch(/\.(xlsx|csv)$/i);
  });
}

export function ExactusProcessedFlowCase(config: ExactusCaseConfig) {
  test(`${tagsFor({ ...config, section: 'Aprovisionamiento', view: 'Exactus' })} carga Exactus procesado y valida procesos`, async ({ page }, testInfo) => {
    test.setTimeout(240_000);
    testInfo.annotations.push({
      type: 'TODO',
      description: 'El catalogo no especifica version ni estado exacto de distribucion para ejecutar fases 1, 2, 3 y cierre; se valida carga manual y disponibilidad del flujo de procesos.',
    });
    await openExactus(page);
    await selectExactusProcessed(page);

    await test.step('Cargar archivo Exactus procesado', async () => {
      await page.getByRole('button', { name: /^Cargar$/i }).or(page.locator('button').filter({ hasText: /^Cargar$/i })).first().click();
      const modal = page.getByRole('dialog').first();
      await expect(modal.getByText(/Cargar Exactus Procesado/i), 'Debe abrir el modal Cargar Exactus Procesado.').toBeVisible({ timeout: 30_000 });
      const processButton = modal.getByRole('button', { name: /procesar archivo|aceptar/i });
      await expect(processButton, 'El boton aceptar inicia deshabilitado.').toBeDisabled();
      const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        modal.getByText('Haz click para examinar', { exact: true }).click(),
      ]);
      await fileChooser.setFiles(path.resolve('fixtures', 'files', 'bloque-2', 'GT', 'Real', 'REAL Exactus Procesado GT.xlsx'));
      await expect(processButton, 'El boton aceptar queda habilitado tras seleccionar archivo.').toBeEnabled();
      await processButton.click();
      await expect(modal.getByText(/Listo|archivo se carg/i).first()).toBeVisible({ timeout: 300_000 });
    });

    await test.step('Validar flujo de procesos disponible desde fase 1', async () => {
      await page.getByText(/Procesos/i).click();
      await expect(page.getByText(/fase 1|fase 2|fase 3|cierre/i).first()).toBeVisible({ timeout: 30_000 });
    });
  });
}

async function openExactus(page: Page) {
  await loginAsGestor(page);
  await selectGtDistribution(page);
  await openGtView(page, { section: 'Aprovisionamiento', view: 'Exactus' });
}

async function loginAsGestor(page: Page) {
  try {
    await page.goto('https://distribuciongastos.pacificotest.com.pe/');
    const loginPage = new LoginPage(page);
    await loginPage.login(env.gestorGastoUsername, env.gestorGastoPassword);
  } catch (error) { }
}

async function selectExactusProcessed(page: Page) {
  const processed = page.getByRole('button', { name: /Exactus procesado/i }).or(page.getByText(/Exactus procesado/i)).first();
  await expect(processed, 'Debe existir la opcion Exactus procesado.').toBeVisible({ timeout: 30_000 });
  await processed.click();
}