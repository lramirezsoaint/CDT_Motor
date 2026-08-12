import fs from 'fs';
import path from 'path';
import { test, expect } from './demo.fixture';
import type { TestInfo } from '@playwright/test';
import type { AmFileLifecycleCase } from '../../bloque-5/_shared/am-file-lifecycle-cases';
import { AM_FILE_LIFECYCLE_CASES } from '../../bloque-5/_shared/am-file-lifecycle-cases';
import {
  amUploadFixtureExistsByResult,
  confirmAmUploadByResult,
  ensureAmSession,
  openAmUploadDialog,
  openAmView,
  resolveAmUploadFileByResult,
} from '../../bloque-5/_shared/am-upload';

export const DEMO_FILE_LIFECYCLE_CASES = AM_FILE_LIFECYCLE_CASES;

export function defineDemoFileLifecycleCase(config: AmFileLifecycleCase): void {
  test(`@bloque-demo @${config.caseId} @am ${flowTag(config)} @gestor-asiento @regression ${title(config)}`, async ({
    page,
  }, testInfo) => {
    test.setTimeout(360_000);
    const fixture = fixtureFile(config);
    test.skip(requiresFixture(config) && !fixture, fixtureReason(config));

    await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => {
      await ensureAmSession(page, config.flow === 'download' ? 'read' : 'upload');
      await expect(page, 'Debe permanecer en Distribuciones para ejecutar el caso demo.').toHaveURL(/\/distribuciones/i);
    });

    await test.step(`${title(config)} en ${config.section} > ${config.view}`, async () => {
      await openAmView(page, config);

      if (config.flow === 'download') {
        await downloadFile(page, config, testInfo);
        return;
      }

      if (config.flow === 'maxSize') {
        expect(fs.statSync(fixture!).size, 'El fixture debe exceder 30 MB.').toBeGreaterThan(30 * 1024 * 1024);
        await uploadFile(page, config, fixture!, 'maxSize');
        return;
      }

      throw new Error(`Flujo demo no soportado para ${config.caseId}: ${config.flow}`);
    });
  });
}

function fixtureFile(config: AmFileLifecycleCase): string | undefined {
  if (!requiresFixture(config)) return undefined;
  if (!amUploadFixtureExistsByResult(config.entityName, 'maxSize')) return undefined;
  return resolveAmUploadFileByResult(config.entityName, 'maxSize');
}

function requiresFixture(config: AmFileLifecycleCase): boolean {
  return config.flow === 'maxSize';
}

function fixtureReason(config: AmFileLifecycleCase): string {
  return `TODO [FIXTURE]: falta archivo maxSize para "${config.entityName}" en fixtures/files/bloque-5/Real/maxSize/.`;
}

async function uploadFile(page: Parameters<typeof openAmUploadDialog>[0], config: AmFileLifecycleCase, file: string, result: 'maxSize') {
  const dialog = await openAmUploadDialog(page, config);
  await dialog.locator('input[type="file"]').first().setInputFiles(file);
  await confirmAmUploadByResult(dialog, config.entityName, result);
}

async function downloadFile(
  page: Parameters<typeof openAmUploadDialog>[0],
  config: AmFileLifecycleCase,
  testInfo: TestInfo,
): Promise<void> {
  const button = downloadButton(page, config);
  await expect(button, `Debe existir Descargar en ${config.entityName}.`).toBeVisible({ timeout: 20_000 });
  await expect(button, `Descargar debe estar habilitado en ${config.entityName}.`).toBeEnabled({ timeout: 30_000 });

  const [download] = await Promise.all([page.waitForEvent('download', { timeout: 60_000 }), button.click()]);
  const fileName = download.suggestedFilename();
  expect(fileName, 'La descarga debe ser Excel o CSV.').toMatch(/\.(xlsx?|csv)$/i);
  expect(await download.failure(), 'La descarga no debe fallar.').toBeNull();

  const downloadedPath = testInfo.outputPath(path.basename(fileName));
  await download.saveAs(downloadedPath);
  expect(fs.statSync(downloadedPath).size, 'El archivo descargado no debe estar vacio.').toBeGreaterThan(0);
}

function downloadButton(page: Parameters<typeof openAmUploadDialog>[0], config: AmFileLifecycleCase) {
  return page
    .getByTestId(downloadTestId(config.entityName) ?? '__never__')
    .or(page.getByRole('button', { name: /descargar/i }))
    .or(page.locator('[data-testid*="download"], button[id*="download"], [aria-label*="descargar" i]'))
    .first();
}

function downloadTestId(entityName: string): string | undefined {
  const testIds: Record<string, string> = {
    'cuentas contables': 'btn-cuentas-contables-download',
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

function flowTag(config: AmFileLifecycleCase): string {
  return config.flow === 'download' ? '@download_catalogo' : '@upload_invalido';
}

function title(config: AmFileLifecycleCase): string {
  if (config.flow === 'download') return `descarga archivo de ${config.entityName}`;
  return `rechaza archivo mayor a 30 MB de ${config.entityName}`;
}
