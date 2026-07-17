import XLSX from 'xlsx';
import { expect, test } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import { acceptButtonFrom, goToComunesView, openUploadDialog, validateSuccessfulUpload, validateTableStructure } from './comunes-upload';
import { executeNegativeUpload } from './comunes-upload-negative';
import { uploadOverwriteFile } from './comunes-upload-overwrite';
import type { ComunesUploadCaseConfig } from './comunes-case-config';

const wrongTemplatePattern = /cabeceras.*no coinciden|plantilla|estructura.*no coincide|no coincide.*esperadas/i;
const incompleteDataPattern = /faltan algunos datos obligatorios|campos requeridos.*completos/i;
const maxSizePattern = /excede.*tamano maximo permitido|excede.*tama[nñ]o.*30\s*mb|30\s*mb/i;
const predecessorPattern = /archivo anterior aun no ha sido cargado|anterior.*no.*cargado/i;

function workbookBuffer(headers: string[], values: string[]) {
 const workbook = XLSX.utils.book_new();
 const worksheet = XLSX.utils.aoa_to_sheet([headers, values]);
 XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
 return XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' }) as Buffer;
}

function incompleteWorkbookBuffer(headers: string[]) {
 return workbookBuffer(headers, headers.map(() => ''));
}

function oversizedWorkbookBuffer() {
 return Buffer.alloc(31 * 1024 * 1024, 'A');
}

async function setBufferFile(page: Page, fileName: string, buffer: Buffer) {
 const dialog = page.getByTestId('cargas-parametros-upload-dialog');
 const input = dialog.locator('input[type="file"]').first();
 await expect(input, '[BUG] El modal de carga no expone un input de archivo para seleccionar el Excel.').toBeAttached({
 timeout: 10_000,
 });
 await input.setInputFiles({
 name: fileName,
 mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
 buffer,
 });
}

async function visibleMessageMatching(page: Page, expectedMessage: RegExp) {
 const locators = [
 page.locator('[role="alert"]'),
 page.locator('[role="status"]'),
 page.locator('[data-sonner-toast]'),
 page.locator('.Toastify__toast'),
 page.locator('.MuiAlert-root'),
 page.locator('[aria-live="polite"], [aria-live="assertive"]'),
 page.getByTestId('cargas-parametros-upload-dialog'),
 ];

 for (const locator of locators) {
 const count = await locator.count().catch(() => 0);
 for (let index = 0; index < count; index += 1) {
 const candidate = locator.nth(index);
 if (!(await candidate.isVisible().catch(() => false))) continue;
 const text = (await candidate.innerText().catch(() => ''))
 .normalize('NFD')
 .replace(/[\u0300-\u036f]/g, '')
 .replace(/\s+/g, ' ')
 .toLowerCase()
 .trim();
 if (expectedMessage.test(text)) return text;
 }
 }

 return '';
}

async function executeNegativeBufferUpload(page: Page, config: ComunesUploadCaseConfig, buffer: Buffer, expectedMessage: RegExp) {
 await test.step(`QA: ingresar a Distribucion y abrir Comunes > ${config.menu}`, async () => {
 await goToComunesView(page, config.menu, config.route);
 });

 await test.step(`QA: abrir modal de carga de ${config.entityName}`, async () => {
 const dialog = await openUploadDialog(page, config.modalPattern);
 const continueButton = dialog.getByRole('button', { name: /continuar con la carga/i }).first();
 if (await continueButton.isVisible().catch(() => false)) {
 await continueButton.click();
 }
 await expect(acceptButtonFrom(dialog)).toBeDisabled();
 });

 await test.step(`QA: seleccionar archivo negativo para ${config.entityName}`, async () => {
 const dialog = page.getByTestId('cargas-parametros-upload-dialog');
 await setBufferFile(page, config.uploadName, buffer);
 await expect(dialog).toContainText(config.uploadName, { timeout: 10_000 });
 const acceptButton = acceptButtonFrom(dialog);
 if (await acceptButton.isEnabled().catch(() => false)) {
 await acceptButton.click();
 }
 });

 await test.step(`QA: validar mensaje de rechazo para ${config.entityName}`, async () => {
 await expect
 .poll(async () => await visibleMessageMatching(page, expectedMessage), {
 message: `[BUG] No aparece el mensaje esperado de rechazo para ${config.entityName}.`,
 timeout: 20_000,
 })
 .not.toBe('');
 });
}

export async function executeWrongTemplateUpload(page: Page, caseId: string, config: ComunesUploadCaseConfig) {
 await executeNegativeUpload(page, {
 caseId,
 menu: config.menu,
 route: config.route,
 modalPattern: config.modalPattern,
 fixtureDir: config.invalidFixtureDir ?? '',
 relativePath: config.invalidRelativePath ?? '',
 uploadName: config.uploadName,
 expectedMessage: wrongTemplatePattern,
 entityName: config.entityName,
 shouldProcess: true,
 confirmReplaceWarning: config.confirmReplaceWarning,
 });
}

export async function executeIncompleteRequiredDataUpload(page: Page, config: ComunesUploadCaseConfig) {
 await executeNegativeBufferUpload(page, config, incompleteWorkbookBuffer(config.headers), incompleteDataPattern);
}

export async function executeOversizedUpload(page: Page, config: ComunesUploadCaseConfig) {
 await executeNegativeBufferUpload(page, config, oversizedWorkbookBuffer(), maxSizePattern);
}

export async function executePredecessorBlockedUpload(page: Page, caseId: string, config: ComunesUploadCaseConfig) {
 await executeNegativeUpload(page, {
 caseId,
 menu: config.menu,
 route: config.route,
 modalPattern: config.modalPattern,
 fixtureDir: config.validFixtureDir ?? '',
 relativePath: config.validRelativePath ?? '',
 uploadName: config.uploadName,
 expectedMessage: predecessorPattern,
 entityName: config.entityName,
 shouldProcess: true,
 confirmReplaceWarning: config.confirmReplaceWarning,
 });
}

export async function executeSimpleOverwriteUpload(page: Page, config: ComunesUploadCaseConfig) {
 await goToComunesView(page, config.menu, config.route);
 const { dialog } = await uploadOverwriteFile(page, {
 caseId: config.caseId,
 entityName: config.entityName,
 modalPattern: config.modalPattern,
 fixtureDir: config.validFixtureDir ?? '',
 relativePath: config.validRelativePath ?? '',
 uploadName: config.uploadName,
 expectedSampleTexts: [],
 });
 await acceptButtonFrom(dialog).click();
 await validateSuccessfulUpload(page, { entityName: config.entityName, closeWithAccept: true, timeoutMs: 240_000 });
}

export async function executeUploadAndValidateVisibleTable(page: Page, config: ComunesUploadCaseConfig) {
 await goToComunesView(page, config.menu, config.route);
 const { dialog } = await uploadOverwriteFile(page, {
 caseId: config.caseId,
 entityName: config.entityName,
 modalPattern: config.modalPattern,
 fixtureDir: config.validFixtureDir ?? '',
 relativePath: config.validRelativePath ?? '',
 uploadName: config.uploadName,
 expectedSampleTexts: [],
 });
 await acceptButtonFrom(dialog).click();
 await validateSuccessfulUpload(page, { entityName: config.entityName, closeWithAccept: true, timeoutMs: 240_000 });
 await validateTableStructure(page, {
 expectedColumns: config.headers,
 minRows: config.minRows ?? 1,
 entityName: config.entityName,
 });
}
