import { expect, test } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import { clickFinalAdd, openPositiveAddDialog, selectComboboxOption } from './comunes-add-positive';
import { fillTextField, findField } from './comunes-edit';
import { goToComunesView } from './comunes-upload';

const downloadErrorPattern = /ocurrio un error en el sistema durante la descarga del archivo|durante la descarga/i;
const createErrorPattern = /ocurrio un error en el sistema durante la creacion del registro|durante la creacion/i;
const queryErrorPattern = /ocurrio un error en el sistema al realizar la consulta|realizar la consulta/i;

async function failMatchingRequests(page: Page, pattern: RegExp, methods: string[]) {
 await page.route('**/*', async (route) => {
 const request = route.request();
 if (methods.includes(request.method()) && pattern.test(request.url())) {
 await route.fulfill({ status: 500, contentType: 'application/json', body: '{"message":"forced-error"}' });
 return;
 }
 await route.continue();
 });
}

async function expectError(page: Page, pattern: RegExp, context: string) {
 await expect(page.getByText(pattern).first(), `[BUG] No se mostro el mensaje de error esperado al ${context}.`).toBeVisible({
 timeout: 30_000,
 });
}

export async function executeDownloadSystemError(page: Page) {
 await test.step('QA: abrir Comunes > Lineas e interceptar descarga', async () => {
 await goToComunesView(page, 'Líneas', 'comunes/lineas');
 await failMatchingRequests(page, /download|descargar|export|archivo|file/i, ['GET', 'POST']);
 });

 await test.step('QA: ejecutar descarga y validar error controlado', async () => {
 const downloadButton = page
 .getByRole('button', { name: /descargar/i })
 .or(page.locator('[aria-label*="descargar" i], [title*="descargar" i], [data-testid*="download" i]'))
 .first();
 await expect(downloadButton, '[BUG] No se muestra el boton Descargar en Lineas.').toBeVisible({ timeout: 20_000 });
 await downloadButton.click();
 await expectError(page, downloadErrorPattern, 'descargar archivo de comunes');
 });
}

export async function executeCreateSystemError(page: Page) {
 await test.step('QA: abrir alta de Subcanales e interceptar creacion', async () => {
 await failMatchingRequests(page, /subcanal|comunes/i, ['POST']);
 const dialog = await openPositiveAddDialog(page, 'Subcanales', 'comunes/subcanales', /agregar subcanal/i);
 const codigoField = await findField(dialog, ['codigo subcanal', 'codigo']);
 const nombreField = await findField(dialog, ['nombre subcanal', 'nombre']);
 const codigoCanalField = await findField(dialog, ['codigo canal', 'canal']);
 const estadoField = await findField(dialog, ['estado']);

 await selectComboboxOption(page, codigoCanalField);
 await selectComboboxOption(page, estadoField, { preferredPattern: /activo/i });
 await fillTextField(codigoField, `ERR${Date.now().toString().slice(-5)}`);
 await fillTextField(nombreField, `SUBCANAL ERROR ${Date.now().toString().slice(-5)}`);
 await clickFinalAdd(dialog);
 });

 await test.step('QA: validar error controlado de creacion', async () => {
 await expectError(page, createErrorPattern, 'crear registro');
 });
}

export async function executeQuerySystemError(page: Page) {
 await test.step('QA: abrir Distribuciones e interceptar consulta', async () => {
 await page.goto('/distribuciones/', { waitUntil: 'domcontentloaded' });
 await expect(page.getByRole('heading', { name: /distribuciones/i })).toBeVisible({ timeout: 20_000 });
 await failMatchingRequests(page, /distribucion|consulta|search|filter|filtro/i, ['GET', 'POST']);
 });

 await test.step('QA: ejecutar busqueda y validar error controlado', async () => {
 const searchInput = page.getByPlaceholder(/buscar/i).first();
 await expect(searchInput, '[BUG] No se muestra el buscador general de Distribuciones.').toBeVisible({ timeout: 10_000 });
 await searchInput.fill(`ERR-${Date.now()}`);
 await page.keyboard.press('Enter');
 await expectError(page, queryErrorPattern, 'realizar consulta');
 });
}
