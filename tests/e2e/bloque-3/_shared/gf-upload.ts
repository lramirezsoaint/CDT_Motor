import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { ensureGfContext } from './gf-context';
import fs from 'fs';
import path from 'path';

export type GfUploadResult =
 | 'success'
 | 'headersError'
 | 'emptyFile'
 | 'maxSize'
 | 'validationError'
 | 'validationDownload';

export type GfUploadCase = {
 caseId: string;
 section: string;
 view: string;
 entityName: string;
 fileName: string;
 modalTitle: RegExp;
 fileFolder?: string;
};

export type GfErrorUploadCase = GfUploadCase & {
 errorMessage?: RegExp;
 expectedResult?: GfUploadResult;
};

export type GfOverwriteUploadCase = GfUploadCase;

type UploadCaseConfig = Omit<GfUploadCase, 'entityName'> & {
 expectedResult: GfUploadResult;
};

type GfUploadFlowOptions = {
 expectedResult: GfUploadResult;
 fileFolder?: string;
 errorMessage?: RegExp;
};

function tagsFor(caseId: string, expectedResult: GfUploadResult) {
 const flowTag = expectedResult === 'success' ? '@upload_valido' : '@upload_invalido';
 return `@bloque3 @${caseId} ${flowTag}`;
}

export async function ensureGfSession(page: Page) {
 await page.goto('/');

 if (!/distribuciones/i.test(page.url())) {
 const loginPage = new LoginPage(page);
 await loginPage.login(env.gestorGFUsername, env.gestorGFPassword);
 }

 await expect(page, 'Debe quedar autenticado en Distribuciones.').toHaveURL(/\/distribuciones/i, {
 timeout: 40_000,
 });
 await ensureGfContext(page);
}

export async function openGfView(page: Page, config: Pick<GfUploadCase, 'section' | 'view'>) {
 await ensureGfContext(page);
 await expect(page, 'Debe estar en Distribuciones antes de navegar al menu GF.').toHaveURL(/\/distribuciones/i, {
 timeout: 40_000,
 });

 await page.getByText(config.section, { exact: false }).click();
 await page.getByRole('link', { name: new RegExp(config.view, 'i') }).click();

 await expect(
 page.getByRole('heading', { name: new RegExp(config.view, 'i') }).or(page.getByText(new RegExp(config.view, 'i'))).first(),
 `Debe abrir la vista ${config.section} > ${config.view}.`,
 ).toBeVisible({ timeout: 30_000 });
}

export function resolveGfUploadFile(config: Pick<GfUploadCase, 'caseId' | 'fileName' | 'fileFolder'>) {
 return path.resolve('fixtures', 'files', 'bloque-3', config.fileFolder ?? config.caseId, config.fileName);
}

export async function openGfUploadDialog(page: Page, config: Pick<GfUploadCase, 'modalTitle'>): Promise<Locator> {
 const uploadButton = page
 .getByRole('button', { name: /^cargar$/i })
 .or(page.locator('button').filter({ hasText: /^cargar$/i }))
 .first();

 await expect(uploadButton, 'Debe existir el boton Cargar.').toBeVisible({ timeout: 20_000 });
 await expect(uploadButton, 'El boton Cargar debe estar habilitado.').toBeEnabled();
 await uploadButton.click();

 const dialog = page.getByTestId('cargas-parametros-upload-dialog').or(page.getByRole('dialog')).first();
 await expect(dialog, 'Debe mostrarse el modal de carga.').toBeVisible({ timeout: 20_000 });
 await expect(dialog.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado del modal.').toBeVisible();
 await expect(processButton(dialog), 'El boton procesar debe iniciar deshabilitado.').toBeDisabled();

 const continueButton = dialog.getByRole('button', { name: /continuar con la carga/i }).first();
 if (await continueButton.isVisible({ timeout: 3_000 }).catch(() => false)) {
 await continueButton.click();
 }

 return dialog;
}

export async function attachGfUploadFile(
 dialog: Locator,
 uploadCaseOrFileName: GfUploadCase | string
) {
 const filePath =
 typeof uploadCaseOrFileName === 'string'
 ? resolveGfUploadFileByName(uploadCaseOrFileName)
 : resolveGfUploadFile(uploadCaseOrFileName);

 const inputFile = dialog.locator('input[type="file"]').first();

 await expect(
 inputFile,
 'Debe existir un input file dentro del modal.'
 ).toBeAttached({
 timeout: 10_000,
 });

 await inputFile.setInputFiles(filePath);
}

export async function runGfUploadFlow(page: Page, uploadCase: GfUploadCase, options: GfUploadFlowOptions) {
 await openGfView(page, uploadCase);
 const dialog = await openGfUploadDialog(page, uploadCase);
 await attachGfUploadFile(dialog, {
 ...uploadCase,
 fileFolder: options.fileFolder ?? uploadCase.fileFolder ?? uploadCase.caseId,
 });
 await confirmGfUploadByResult(dialog, uploadCase.entityName, options.expectedResult, options.errorMessage);
}

export async function confirmGfUpload(dialog: Locator, entityName: string) {
 await confirmGfUploadByResult(dialog, entityName, 'success');
}

export async function confirmGfUploadWithError(dialog: Locator, entityName: string, errorMessage?: RegExp) {
 await confirmGfUploadByResult(dialog, entityName, 'validationError', errorMessage);
}

export async function confirmGfUploadOverwrite(dialog: Locator, entityName: string) {
 await confirmGfUploadByResult(dialog, entityName, 'success');
}

export async function confirmGfUploadByResult(
 dialog: Locator,
 entityName: string,
 expectedResult: GfUploadResult,
 errorMessage?: RegExp,
) {
 if (expectedResult === 'emptyFile' || expectedResult === 'maxSize') {
 await assertImmediateUploadError(dialog, expectedResult);
 return;
 }

 const button = processButton(dialog);
 await expect(button, `El boton procesar debe habilitarse al seleccionar archivo para ${entityName}.`).toBeEnabled({
 timeout: 20_000,
 });
 await button.click();

 await expect(dialog.getByText(/procesando archivo/i), 'Debe mostrarse estado de procesamiento.').toBeVisible({
 timeout: 20_000,
 }).catch(() => undefined);

 if (expectedResult === 'success') {
 await assertUploadSuccess(dialog);
 return;
 }

 if (expectedResult === 'headersError') {
 await assertHeadersError(dialog);
 return;
 }

 await assertValidationError(dialog, expectedResult, errorMessage);
}

function processButton(dialog: Locator) {
 return dialog.getByRole('button', { name: /procesar archivo|aceptar/i }).first();
}

function resolveGfUploadFileByName(fileName: string) {
 const directPath = path.resolve('fixtures', 'files', 'bloque-3', fileName);
 if (fs.existsSync(directPath)) {
 return directPath;
 }

 const matches: string[] = [];
 collectMatchingFiles(path.resolve('fixtures', 'files', 'bloque-3'), fileName, matches);
 expect(matches.length, `Debe existir el fixture ${fileName} en fixtures/files/bloque-3.`).toBeGreaterThan(0);
 return matches[0];
}

function collectMatchingFiles(dir: string, fileName: string, matches: string[]) {
 if (!fs.existsSync(dir)) return;

 for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
 const fullPath = path.join(dir, entry.name);
 if (entry.isDirectory()) {
 collectMatchingFiles(fullPath, fileName, matches);
 } else if (entry.name.toLowerCase() === fileName.toLowerCase()) {
 matches.push(fullPath);
 }
 }
}

async function assertUploadSuccess(dialog: Locator) {
 await expect(
 dialog.getByText(/listo|archivo se carg[oó] correctamente|cargado satisfactoriamente/i),
 'Debe mostrarse mensaje de carga correcta.',
 ).toBeVisible({ timeout: 300_000 });

 await expect(
 dialog.getByRole('button', { name: /subir otro archivo|subir un nuevo archivo/i }),
 'Debe mostrarse la accion Subir otro archivo.',
 ).toBeVisible();

 await expect(dialog.getByRole('button', { name: /^aceptar$/i }), 'Aceptar debe estar habilitado.').toBeEnabled();
}

async function assertHeadersError(dialog: Locator) {
 await expect(
 dialog.getByText(/cabeceras.*no coinciden|verifique la plantilla|estructura.*archivo/i),
 'Debe mostrarse error de cabeceras o plantilla.',
 ).toBeVisible({ timeout: 300_000 });

 await expect(dialog.getByRole('button', { name: /intentar de nuevo/i }), 'Debe mostrarse Intentar de nuevo.').toBeVisible();
}

async function assertImmediateUploadError(dialog: Locator, expectedResult: 'emptyFile' | 'maxSize') {
 if (expectedResult === 'emptyFile') {
 await expect(
 dialog.getByText(/archivo seleccionado no contiene informaci[oó]n|archivo.*vac[ií]o|verifique el contenido/i),
 'Debe mostrarse error de archivo vacio.',
 ).toBeVisible({ timeout: 20_000 });
 return;
 }

 await expect(
 dialog.getByText(/excede el tama[nñ]o m[aá]ximo|30 mb|l[ií]mite establecido/i),
 'Debe mostrarse error de archivo mayor a 30 MB.',
 ).toBeVisible({ timeout: 20_000 });
}

async function assertValidationError(dialog: Locator, expectedResult: GfUploadResult, errorMessage?: RegExp) {
 if (errorMessage) {
 await expect(dialog.getByText(errorMessage), 'Debe mostrarse el mensaje de error esperado.').toBeVisible({
 timeout: 300_000,
 });
 } else {
 await expect(
 dialog.getByText(/faltan algunos datos obligatorios|formato incorrecto|no existen en el cat[aá]logo|error/i),
 'Debe mostrarse mensaje de validacion de datos.',
 ).toBeVisible({ timeout: 300_000 });
 }

 if (expectedResult === 'validationDownload') {
 const downloadErrors = dialog.getByRole('button', { name: /descargar errores/i }).first();
 await expect(downloadErrors, 'Debe mostrarse Descargar errores.').toBeVisible();

 const [download] = await Promise.all([
 dialog.page().waitForEvent('download', { timeout: 60_000 }),
 downloadErrors.click(),
 ]);

 expect(download.suggestedFilename(), 'La descarga de errores debe ser CSV o Excel.').toMatch(/\.(csv|xlsx?)$/i);
 expect(await download.failure(), 'La descarga de errores no debe fallar.').toBeNull();
 return;
 }

 await expect(
 dialog.getByRole('button', { name: /intentar de nuevo/i }).or(dialog.getByRole('button', { name: /descargar errores/i })).first(),
 'Debe mostrarse una accion de recuperacion.',
 ).toBeVisible();
}

export function UploadCase(config: UploadCaseConfig) {
 test.use({ storageState: '.auth/gestorGF.json' });

 test(`${tagsFor(config.caseId, config.expectedResult)} carga archivo y valida resultado ${config.expectedResult}`, async ({ page }) => {
 test.setTimeout(360_000);

 await test.step('Abrir sesion de Gestor GF', async () => {
 await ensureGfSession(page);
 });

 await test.step(`Cargar archivo en ${config.section} > ${config.view}`, async () => {
 await runGfUploadFlow(
 page,
 {
 ...config,
 entityName: config.view,
 },
 {
 expectedResult: config.expectedResult,
 fileFolder: config.fileFolder,
 },
 );
 });
 });
}
