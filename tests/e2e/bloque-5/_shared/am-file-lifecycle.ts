import fs from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';
import { test as baseTest, expect as baseExpect } from '@fixtures/base.fixture';
import type { Page, TestInfo } from '@playwright/test';
import type { AmFileLifecycleCase } from './am-file-lifecycle-cases';
import {
  amUploadFixtureExistsByResult,
  confirmAmUploadByResult,
  ensureAmSession,
  openAmUploadDialog,
  openAmView,
  resolveAmUploadFileByResult,
} from './am-upload';
import { ensureAmContext } from './am-context';

export function FileLifecycleCase(
  test: typeof baseTest,
  expect: typeof baseExpect,
  config: AmFileLifecycleCase,
): void {
  test.use({ storageState: '.auth/gestorAM.json' });
  test(`@bloque5 @${config.caseId} @am ${flowTag(config)} @gestor-asiento @regression ${title(config)}`, async ({ page }, testInfo) => {
    test.setTimeout(360_000);
    const fixture = fixtureFile(config);
    test.skip(requiresFixture(config) && !fixture, fixtureReason(config));

    await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => {
          await ensureAmContext(page, 'upload');
          await expect(page).toHaveURL(/\/distribuciones/i);
      await ensureAmSession(
        page,
        config.flow === 'download' || config.flow === 'downloadIntegrity' ? 'read' : 'mutation',
      );
    });
    await test.step(`${title(config)} en ${config.section} > ${config.view}`, async () => {
      await openAmView(page, config);
      await activateTab(page, config.tab);
      if (config.flow === 'download' || config.flow === 'downloadIntegrity') {
        const downloaded = await downloadFile(page, config, expect, testInfo);
        if (config.flow === 'downloadIntegrity') assertWorkbookIntegrity(downloaded, config, expect);
        return;
      }
      if (config.flow === 'reloadDownloaded') {
        const downloaded = await downloadFile(page, config, expect, testInfo);
        await uploadFile(page, config, downloaded, 'success');
        return;
      }
      if (config.flow === 'maxSize') {
        expect(fs.statSync(fixture!).size, 'El fixture debe exceder 30 MB.').toBeGreaterThan(30 * 1024 * 1024);
        await uploadFile(page, config, fixture!, 'maxSize');
        return;
      }
      await uploadFile(page, config, fixture!, config.flow === 'dependencyError' ? 'validationError' : 'success');
    });
  });
}

async function activateTab(page: Page, tab?: string): Promise<void> {
  if (!tab) return;

  const target = page
    .getByRole('tab', { name: new RegExp(tab, 'i') })
    .or(page.getByRole('button', { name: new RegExp(tab, 'i') }))
    .first();

  await baseExpect(target, `Debe existir la vista ${tab}.`).toBeVisible({ timeout: 20_000 });
  await target.click();
  await page
    .getByText(/Cargando/i)
    .waitFor({ state: 'hidden', timeout: 15_000 })
    .catch(() => undefined);
}

function fixtureFile(config: AmFileLifecycleCase): string | undefined {
  if (!requiresFixture(config)) return undefined;
  const expectedResult = fixtureResult(config);
  if (!amUploadFixtureExistsByResult(config.entityName, expectedResult)) return undefined;
  return resolveAmUploadFileByResult(config.entityName, expectedResult);
}

function requiresFixture(config: AmFileLifecycleCase): boolean {
  return ['dependencyError', 'overwrite', 'maxSize'].includes(config.flow);
}

function fixtureReason(config: AmFileLifecycleCase): string {
  const expectedResult = fixtureResult(config);
  return `TODO [FIXTURE]: falta archivo ${expectedResult} para "${config.entityName}" en fixtures/files/bloque-5/Real/${expectedResult}/.`;
}

function fixtureResult(config: AmFileLifecycleCase): 'success' | 'maxSize' | 'validationError' {
  if (config.flow === 'maxSize') return 'maxSize';
  if (config.flow === 'dependencyError') return 'validationError';
  return 'success';
}

async function uploadFile(page: Page, config: AmFileLifecycleCase, file: string, result: 'success' | 'maxSize' | 'validationError') {
  const dialog = await openAmUploadDialog(page, config);
  await dialog.locator('input[type="file"]').first().setInputFiles(file);
  await confirmAmUploadByResult(dialog, config.entityName, result);
}

async function downloadFile(
  page: Page,
  config: AmFileLifecycleCase,
  expect: typeof baseExpect,
  testInfo: TestInfo,
): Promise<string> {
  const button = downloadButton(page, config);
  await expect(button, `Debe existir Descargar en ${config.entityName}.`).toBeVisible({ timeout: 20_000 });
  await expect(button, `Descargar debe estar habilitado en ${config.entityName}.`).toBeEnabled({ timeout: 30_000 });
  const [download] = await Promise.all([page.waitForEvent('download'), button.click()]);
  const fileName = download.suggestedFilename();
  expect(fileName, 'La descarga debe ser Excel o CSV.').toMatch(/\.(xlsx?|csv)$/i);
  expect(await download.failure(), 'La descarga no debe fallar.').toBeNull();
  const downloadedPath = testInfo.outputPath(path.basename(fileName));
  await download.saveAs(downloadedPath);
  expect(fs.statSync(downloadedPath).size, 'El archivo descargado no debe estar vacio.').toBeGreaterThan(0);
  return downloadedPath;
}

function downloadButton(page: Page, config: AmFileLifecycleCase) {
  const testId = downloadTestId(config.entityName);
  const specific = testId ? page.getByTestId(testId) : page.locator('__never__');

  return specific
    .or(page.getByRole('button', { name: /descargar/i }))
    .or(page.locator('[data-testid*="download"], button[id*="download"], [aria-label*="descargar" i]'))
    .first();
}

function downloadTestId(entityName: string): string | undefined {
  const testIds: Record<string, string> = {
    centros: 'btn-centros-download',
    'cuentas contables': 'btn-cuentas-contables-download',
    'exactus procesado': 'btn-exactus-procesado-download',
    exactus: 'btn-exactus-download',
    partidas: 'btn-partidas-download',
    'unidad de cuenta am': 'btn-unidad-de-cuenta-am-download',
  };

  return testIds[normalizeEntityName(entityName)];
}

function normalizeEntityName(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

function assertWorkbookIntegrity(file: string, config: AmFileLifecycleCase, expect: typeof baseExpect): void {
  const workbook = XLSX.readFile(file);
  expect(workbook.SheetNames.length, 'El archivo debe conservar al menos una hoja.').toBeGreaterThan(0);
  const rows = XLSX.utils.sheet_to_json<unknown[]>(workbook.Sheets[workbook.SheetNames[0]], {
    header: 1, blankrows: false, defval: '',
  });
  expect(rows.length, 'El archivo debe conservar columnas y datos cargados.').toBeGreaterThan(1);
  expect(rows[0].filter(Boolean).length, `La estructura de ${config.entityName} debe contener columnas.`).toBeGreaterThan(0);
}

function flowTag(config: AmFileLifecycleCase): string {
  if (config.flow === 'download' || config.flow === 'downloadIntegrity') return '@download_catalogo';
  if (config.flow === 'maxSize' || config.flow === 'dependencyError') return '@upload_invalido';
  return '@upload_valido';
}

function title(config: AmFileLifecycleCase): string {
  const verbs = {
    dependencyError: 'rechaza carga sin antecesores',
    overwrite: 'reemplaza informacion existente',
    maxSize: 'rechaza archivo mayor a 30 MB',
    download: 'descarga archivo',
    downloadIntegrity: 'conserva estructura y datos descargados',
    reloadDownloaded: 'recarga archivo descargado',
  };
  return `${verbs[config.flow]} de ${config.entityName}`;
}
