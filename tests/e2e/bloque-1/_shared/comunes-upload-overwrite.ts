import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';
import { expect } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import {
 acceptButtonFrom,
 openUploadDialog,
 resolveUploadPath,
 uploadFile,
 uploadFileWithName,
 validateSuccessfulUpload,
} from './comunes-upload';
import { findRowContaining } from './comunes-add-positive';
import { normalizeEditText } from './comunes-edit';

export type OverwriteScenarioConfig = {
 caseId: string;
 entityName: string;
 modalPattern: RegExp;
 fixtureDir: string;
 relativePath: string;
 localFallbacks?: string[];
 uploadName?: string;
 expectedSampleTexts: string[];
 preservedTexts?: string[];
 overwrittenTexts?: string[];
};

export function requireFixtureOrThrow(config: OverwriteScenarioConfig) {
 const absolutePath = resolveUploadPath({
 fixtureDir: config.fixtureDir,
 relativePath: config.relativePath,
 localFallbacks: config.localFallbacks,
 });

 if (!fs.existsSync(absolutePath)) {
 throw new Error(
 `[DATA] No existe un archivo controlado para ${config.entityName}. Ruta esperada: ${path.relative(process.cwd(), absolutePath)}.`,
 );
 }

 return absolutePath;
}

export function readWorkbookSample(filePath: string) {
 const workbook = XLSX.readFile(filePath);
 const sheetName = workbook.SheetNames[0];
 const worksheet = workbook.Sheets[sheetName];
 const rows = XLSX.utils.sheet_to_json<string[]>(worksheet, { header: 1 });
 const firstDataRow = rows.slice(1).find((row) => row.some((cell) => String(cell ?? '').trim()));

 return {
 rows,
 firstDataRow: (firstDataRow ?? []).map((value) => String(value ?? '').trim()).filter(Boolean),
 };
}

function primaryAcceptButton(dialog: Locator) {
 return dialog.getByRole('button', { name: /^aceptar$/i }).last();
}

async function expectInitialDisabledState(dialog: Locator, entityName: string) {
 const initialAccept = primaryAcceptButton(dialog);
 if ((await initialAccept.count().catch(() => 0)) > 0 && (await initialAccept.isVisible().catch(() => false))) {
 await expect(
 initialAccept,
 `[BUG] El botón Aceptar del modal de carga de ${entityName} debería iniciar deshabilitado antes de seleccionar un archivo.`,
 ).toBeDisabled();
 return;
 }

 const processButton = acceptButtonFrom(dialog);
 if ((await processButton.count().catch(() => 0)) > 0 && (await processButton.isVisible().catch(() => false))) {
 await expect(
 processButton,
 `[BUG] El botón Procesar archivo del modal de carga de ${entityName} debería iniciar deshabilitado antes de seleccionar un archivo.`,
 ).toBeDisabled();
 }
}

export async function expectOverwriteWarning(dialogTextSource: string, entityName: string) {
 expect(
 /informacion previamente cargada sera reemplazada|informaci[oó]n previamente cargada ser[aá] reemplazada|desea continuar con la carga/i.test(
 normalizeEditText(dialogTextSource),
 ),
 `[BUG] No se muestra la alerta de sobrescritura esperada en ${entityName}.`,
 ).toBe(true);
}

async function continueUploadIfNeeded(dialog: Locator, entityName: string) {
 const continueButton = dialog.getByRole('button', { name: /continuar con la carga/i }).first();
 if ((await continueButton.count().catch(() => 0)) === 0 || !(await continueButton.isVisible().catch(() => false))) {
 return;
 }

 const dialogText = await dialog.innerText().catch(() => '');
 await expectOverwriteWarning(dialogText, entityName);
 await continueButton.click();
}

export async function uploadOverwriteFile(page: Page, config: OverwriteScenarioConfig) {
 const dialog = await openUploadDialog(page, config.modalPattern);
 await expectInitialDisabledState(dialog, config.entityName);
 await continueUploadIfNeeded(dialog, config.entityName);

 const uploadedFile = config.uploadName
 ? await uploadFileWithName(page, {
 fixtureDir: config.fixtureDir,
 relativePath: config.relativePath,
 localFallbacks: config.localFallbacks,
 uploadName: config.uploadName,
 })
 : await uploadFile(page, {
 fixtureDir: config.fixtureDir,
 relativePath: config.relativePath,
 localFallbacks: config.localFallbacks,
 });
 const uploadedFileName = config.uploadName ?? path.basename(uploadedFile);

 await expect(
 dialog,
 `[BUG] El modal no muestra el archivo seleccionado (${uploadedFileName}) después del upload de ${config.entityName}.`,
 ).toContainText(uploadedFileName, { timeout: 10_000 });

 await expect(
 acceptButtonFrom(dialog),
 `[BUG] No se habilita el botón Aceptar al seleccionar el archivo ${uploadedFileName} en ${config.entityName}.`,
 ).toBeEnabled({ timeout: 15_000 });

 return { dialog, uploadedFile, uploadedFileName };
}

async function expectWorkbookRowVisible(page: Page, config: OverwriteScenarioConfig) {
 await expect
 .poll(async () => await findRowContaining(page, config.expectedSampleTexts), {
 message: `[BUG] La carga de ${config.entityName} no dejó visible una fila representativa del archivo cargado.`,
 timeout: 20_000,
 })
 .toBeTruthy();
}

export async function processSelectiveOverwriteUpload(page: Page, config: OverwriteScenarioConfig) {
 const { dialog, uploadedFile } = await uploadOverwriteFile(page, config);
 await acceptButtonFrom(dialog).click();
 await validateSuccessfulUpload(page, { entityName: config.entityName, closeWithAccept: true, timeoutMs: 240_000 });
 await expectWorkbookRowVisible(page, config);

 const preservedRow = await findRowContaining(page, config.preservedTexts ?? []);
 expect(
 preservedRow,
 `[BUG] La carga de ${config.entityName} sobrescribió información manual que debía mantenerse porque no coincidía por código.`,
 ).toBeTruthy();

 return uploadedFile;
}

export async function processPriorityOverwriteUpload(page: Page, config: OverwriteScenarioConfig) {
 const { dialog, uploadedFile } = await uploadOverwriteFile(page, config);
 await acceptButtonFrom(dialog).click();
 await validateSuccessfulUpload(page, { entityName: config.entityName, closeWithAccept: true, timeoutMs: 240_000 });
 await expectWorkbookRowVisible(page, config);

 const overwrittenRow = await findRowContaining(page, config.overwrittenTexts ?? []);
 expect(
 overwrittenRow,
 `[BUG] La carga de ${config.entityName} no tuvo prioridad sobre la información ingresada manualmente.`,
 ).toBeNull();

 return uploadedFile;
}
