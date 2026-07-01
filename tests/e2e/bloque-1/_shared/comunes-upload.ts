import fs from 'fs';
import path from 'path';
import { expect } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { env } from '@config/env';

export interface UploadFileOptions {
  fixtureDir: string;
  relativePath: string;
  envVarName?: string;
  localFallbacks?: string[];
}

export interface UploadFileWithNameOptions extends UploadFileOptions {
  uploadName: string;
  mimeType?: string;
}

export interface TableValidationOptions {
  expectedColumns: string[];
  minRows: number;
  entityName: string;
}

export interface UploadSuccessOptions {
  entityName: string;
  timeoutMs?: number;
  closeWithAccept?: boolean;
}

export function appOrigin() {
  return new URL(env.baseUrl.trim()).origin;
}

export function resolveUploadPath(options: UploadFileOptions) {
  const envPath = options.envVarName ? process.env[options.envVarName]?.trim() : '';
  if (envPath && fs.existsSync(envPath)) {
    return envPath;
  }

  for (const candidate of options.localFallbacks ?? []) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  return path.resolve(options.fixtureDir, options.relativePath);
}

export async function goToComunesView(page: Page, menuName: string, route: string) {
  await page.goto(`${appOrigin()}/distribuciones/`, { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle').catch(() => undefined);

  const comunesToggle = page
    .getByRole('button', { name: /comunes/i })
    .or(page.getByRole('link', { name: /comunes/i }))
    .first();
  await expect(comunesToggle).toBeVisible({ timeout: 15_000 });
  await comunesToggle.click().catch(() => undefined);

  const targetLink = page.getByRole('link', { name: new RegExp(menuName, 'i') }).first();
  await expect(targetLink).toBeVisible({ timeout: 15_000 });
  await targetLink.click();

  await expect(page).toHaveURL(new RegExp(route.replace('/', '\\/'), 'i'), { timeout: 20_000 });
  await expect(page.getByRole('heading', { name: new RegExp(menuName, 'i') })).toBeVisible({ timeout: 20_000 });
}

export async function openUploadDialog(page: Page, modalTitlePattern: RegExp) {
  const cargarButton = page.getByRole('button', { name: /cargar/i }).first();
  await expect(cargarButton).toBeVisible({ timeout: 10_000 });
  await cargarButton.click();

  const dialog = page.getByTestId('cargas-parametros-upload-dialog');
  await expect(dialog).toBeVisible({ timeout: 10_000 });
  await expect(dialog.getByRole('heading', { name: modalTitlePattern })).toBeVisible({ timeout: 10_000 });

  return dialog;
}

export async function uploadFile(page: Page, options: UploadFileOptions) {
  const absolutePath = resolveUploadPath(options);
  const dialog = page.getByTestId('cargas-parametros-upload-dialog');
  const input = dialog.locator('input[type="file"]').first();
  await expect(input, '[BUG] El modal de carga no expone un input de archivo para seleccionar el Excel.').toBeAttached({
    timeout: 10_000,
  });
  await input.setInputFiles(absolutePath);
  return absolutePath;
}

export async function uploadFileWithName(page: Page, options: UploadFileWithNameOptions) {
  const absolutePath = resolveUploadPath(options);
  const dialog = page.getByTestId('cargas-parametros-upload-dialog');
  const input = dialog.locator('input[type="file"]').first();
  await expect(input, '[BUG] El modal de carga no expone un input de archivo para seleccionar el Excel.').toBeAttached({
    timeout: 10_000,
  });
  await input.setInputFiles({
    name: options.uploadName,
    mimeType: options.mimeType ?? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    buffer: fs.readFileSync(absolutePath),
  });
  return absolutePath;
}

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function columnMatches(actual: string, expected: string) {
  const normalizedActual = normalizeText(actual);
  const normalizedExpected = normalizeText(expected);

  if (normalizedActual.includes(normalizedExpected)) {
    return true;
  }

  if (normalizedExpected === 'canal') {
    return normalizedActual.includes('canal');
  }

  return false;
}

export async function validateTableStructure(page: Page, options: TableValidationOptions) {
  const dialog = page.getByTestId('cargas-parametros-upload-dialog');
  await dialog.waitFor({ state: 'hidden', timeout: 180_000 }).catch(() => undefined);

  const table = page.locator('table').first();
  await expect(
    table,
    `[BUG] Tabla de ${options.entityName} no muestra datos tras la carga.`,
  ).toBeVisible({ timeout: 180_000 });

  const headers = (await page.locator('table thead th, [role="columnheader"]').allTextContents())
    .map((value) => value.trim())
    .filter(Boolean);
  const missingColumns = options.expectedColumns.filter(
    (expectedColumn) => !headers.some((actualColumn) => columnMatches(actualColumn, expectedColumn)),
  );

  expect(
    missingColumns,
    `[BUG] Columnas de ${options.entityName} no coinciden con la estructura esperada. Valor esperado: ${options.expectedColumns.join(', ')}. Valor actual: ${headers.join(', ')}.`,
  ).toEqual([]);

  const rows = page.locator('table tbody tr');
  await expect
    .poll(async () => await rows.count(), {
      message: `[BUG] Tabla de ${options.entityName} no muestra datos tras la carga. Valor esperado: al menos ${options.minRows} fila(s).`,
      timeout: 180_000,
    })
    .toBeGreaterThanOrEqual(options.minRows);
}

export async function validateSuccessfulUpload(page: Page, options: UploadSuccessOptions) {
  const dialog = page.getByTestId('cargas-parametros-upload-dialog');
  const timeoutMs = options.timeoutMs ?? 180_000;

  await expect(
    dialog,
    `[BUG] El modal de ${options.entityName} no muestra la confirmacion visual de carga exitosa despues de presionar "Aceptar".`,
  ).toContainText(/carga exitosa del archivo/i, { timeout: timeoutMs });

  await expect(
    dialog,
    `[BUG] El modal de ${options.entityName} no informa que el archivo se cargo correctamente despues del procesamiento.`,
  ).toContainText(/archivo se cargo correctamente|archivo se cargó correctamente/i, { timeout: timeoutMs });

  await expect(
    dialog.getByRole('button', { name: /subir otro archivo/i }),
    `[BUG] El modal de ${options.entityName} no ofrece la opcion "Subir otro archivo" despues de una carga exitosa.`,
  ).toBeVisible({ timeout: timeoutMs });

  if (options.closeWithAccept) {
    const confirmButton = dialog.getByRole('button', { name: /^aceptar$/i }).last();
    await expect(
      confirmButton,
      `[BUG] El modal de ${options.entityName} muestra carga exitosa, pero el boton final "Aceptar" no esta habilitado para cerrar el flujo.`,
    ).toBeEnabled({ timeout: timeoutMs });
    await confirmButton.click();
  }
}

export function acceptButtonFrom(dialog: Locator) {
  return dialog.getByTestId('cargas-upload-btn-procesar');
}
