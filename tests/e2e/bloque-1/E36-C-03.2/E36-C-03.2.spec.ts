import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { goToComunesView } from '../_shared/comunes-upload';
import { currentFieldValue, findField, openEditDialog } from '../_shared/comunes-edit';

type HeaderIndexes = {
 codigo: number;
 nombre: number;
 codigoLinea: number;
 nombreLinea: number;
 metodoValoracion: number;
 estado: number;
};

type ProductRowSnapshot = {
 codigo: string;
 nombre: string;
 codigoLinea: string;
 nombreLinea: string;
 metodoValoracion: string;
 estado: string;
 raw: string;
};

const requiredMessagePattern = /requerid|obligatori|ingrese|complete/i;
const invalidFormatPattern = /inval|inv[aá]lid|especial|permitid|formato|ingrese/i;

function normalizeText(value: string) {
 return value
 .normalize('NFD')
 .replace(/[\u0300-\u036f]/g, '')
 .replace(/\s+/g, ' ')
 .toLowerCase()
 .trim();
}

async function openGrupoProductoView(page: Page) {
 await goToComunesView(page, 'Grupo Producto', 'comunes/grupo-producto').catch(async () => {
 await expect(page).toHaveURL(/comunes\/grupo-producto/i, { timeout: 20_000 });
 });

 const table = page.locator('table').first();
 await expect(table, '[BUG] La tabla de Grupo Producto no se renderiza al ingresar a la vista.').toBeVisible({
 timeout: 20_000,
 });
}

async function tableHeaders(page: Page) {
 return (await page.locator('table thead th, [role="columnheader"]').allTextContents())
 .map((value) => value.trim())
 .filter(Boolean);
}

function findHeaderIndex(headers: string[], patterns: RegExp[]) {
 return headers.findIndex((header) => patterns.some((pattern) => pattern.test(normalizeText(header))));
}

async function getHeaderIndexes(page: Page): Promise<HeaderIndexes> {
 const headers = await tableHeaders(page);

 const indexes = {
 codigo: findHeaderIndex(headers, [/^codigo$/i]),
 nombre: findHeaderIndex(headers, [/^nombre$/i]),
 codigoLinea: findHeaderIndex(headers, [/^codigo linea$/i, /^cod linea$/i, /^linea$/i]),
 nombreLinea: findHeaderIndex(headers, [/^nombre linea$/i]),
 metodoValoracion: findHeaderIndex(headers, [/^met\.? valoracion$/i, /^metodo de valoracion$/i, /^valoracion$/i]),
 estado: findHeaderIndex(headers, [/^estado$/i]),
 };

 expect(indexes.codigo, `[BUG] La tabla no muestra la columna Código. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.nombre, `[BUG] La tabla no muestra la columna Nombre. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.codigoLinea, `[BUG] La tabla no muestra la columna Código Línea. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.nombreLinea, `[BUG] La tabla no muestra la columna Nombre Línea. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.metodoValoracion, `[BUG] La tabla no muestra la columna Método de Valoración. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.estado, `[BUG] La tabla no muestra la columna Estado. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);

 return indexes;
}

async function rowCells(row: Locator) {
 return (await row.locator('td').allTextContents()).map((value) => value.trim());
}

async function firstEditableRow(page: Page) {
 const noRecordsMessage = page.getByText(/no existen registros para mostrar en la tabla|no hay resultados/i).first();
 if (await noRecordsMessage.isVisible().catch(() => false)) {
 throw new Error('[DATA] No hay registros disponibles en Grupo Producto para validar edición inválida por campo.');
 }

 const rows = page.locator('table tbody tr');
 const count = await rows.count();

 for (let index = 0; index < count; index += 1) {
 const row = rows.nth(index);
 const editButton = row.locator('td:last-child button').first();
 if (await editButton.isVisible().catch(() => false)) {
 return row;
 }
 }

 throw new Error('[BUG] La tabla de Grupo Producto no muestra ninguna fila editable con icono de lápiz.');
}

async function snapshot(row: Locator, indexes: HeaderIndexes): Promise<ProductRowSnapshot> {
 const cells = await rowCells(row);
 const raw = ((await row.innerText().catch(() => '')) ?? '').trim();

 return {
 codigo: cells[indexes.codigo] ?? '',
 nombre: cells[indexes.nombre] ?? '',
 codigoLinea: cells[indexes.codigoLinea] ?? '',
 nombreLinea: cells[indexes.nombreLinea] ?? '',
 metodoValoracion: cells[indexes.metodoValoracion] ?? '',
 estado: cells[indexes.estado] ?? '',
 raw,
 };
}

async function findRowBySnapshot(page: Page, indexes: HeaderIndexes, original: ProductRowSnapshot) {
 const rows = page.locator('table tbody tr');
 const count = await rows.count();

 for (let index = 0; index < count; index += 1) {
 const row = rows.nth(index);
 const values = await snapshot(row, indexes);
 if (
 normalizeText(values.codigo) === normalizeText(original.codigo) &&
 normalizeText(values.nombre) === normalizeText(original.nombre)
 ) {
 return row;
 }
 }

 return null;
}

async function fieldContainer(dialog: Locator, field: Locator) {
 const fieldId = await field.getAttribute('id').catch(() => null);
 if (fieldId) {
 const label = dialog.locator(`label[for="${fieldId}"]`).first();
 if (await label.isVisible().catch(() => false)) {
 const container = label.locator('xpath=ancestor::*[self::div or self::section][1]').first();
 if (await container.isVisible().catch(() => false)) return container;
 }
 }

 return field.locator('xpath=ancestor::*[self::div or self::section][1]').first();
}

async function visibleFieldMessages(container: Locator, field: Locator) {
 const candidates = [
 container.locator('[role="alert"], [role="status"], p, span, div'),
 field.locator('xpath=following::*[self::p or self::span or self::div][position()<=3]'),
 ];

 const messages = new Set<string>();

 for (const candidate of candidates) {
 const texts = await candidate.allTextContents().catch(() => []);
 for (const text of texts) {
 const normalized = text.replace(/\s+/g, ' ').trim();
 if (!normalized) continue;
 if (normalized.length < 4) continue;
 if (/^codigo$|^nombre$|^codigo linea$|^nombre linea$|^metodo de valoracion$|^estado$|^actualizar$|^cancelar$/i.test(normalized)) continue;
 messages.add(normalized);
 }
 }

 return Array.from(messages);
}

async function expectFieldInvalid(
 dialog: Locator,
 field: Locator,
 messagePattern: RegExp,
 missingMessage: string,
 wrongMessage: string,
) {
 const container = await fieldContainer(dialog, field);
 const invalidSignals = await Promise.all([
 field.getAttribute('aria-invalid').catch(() => null),
 field.evaluate((element) => element.getAttribute('data-invalid')).catch(() => null),
 field.evaluate((element) => element.className).catch(() => ''),
 container.evaluate((element) => element.className).catch(() => ''),
 ]);

 const [ariaInvalid, dataInvalid, fieldClassName, containerClassName] = invalidSignals;
 const hasInvalidState =
 ariaInvalid === 'true' ||
 dataInvalid === 'true' ||
 /invalid|error|destructive|border-red|ring-red/i.test(`${fieldClassName} ${containerClassName}`);

 expect(hasInvalidState, '[BUG] Error no visible al usuario. El campo inválido no queda marcado visualmente.').toBe(true);

 const messages = await visibleFieldMessages(container, field);
 expect(messages.length, missingMessage).toBeGreaterThan(0);
 expect(messages.some((message) => messagePattern.test(normalizeText(message))), wrongMessage).toBe(true);

 return messages;
}

async function clearFieldIfPossible(dialog: Locator, field: Locator) {
 const tagName = await field.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
 const role = (await field.getAttribute('role').catch(() => '')) ?? '';
 const readOnly = await field.evaluate((element) => element.hasAttribute('readonly')).catch(() => false);

 if (!(await field.isEnabled().catch(() => false))) {
 return { cleared: false as const, reason: 'disabled' };
 }

 if ((tagName === 'input' || tagName === 'textarea') && !readOnly) {
 await field.fill('');
 await field.blur().catch(() => undefined);
 return { cleared: true as const, reason: 'editable-text' };
 }

 const container = await fieldContainer(dialog, field);
 const clearCandidates = container.locator('button').filter({ has: container.locator('svg') });
 const clearCount = await clearCandidates.count().catch(() => 0);

 for (let index = 0; index < clearCount; index += 1) {
 const candidate = clearCandidates.nth(index);
 if (!(await candidate.isVisible().catch(() => false))) continue;
 await candidate.click().catch(() => undefined);
 await field.blur().catch(() => undefined);
 if (normalizeText(await currentFieldValue(field)) === '') {
 return { cleared: true as const, reason: 'clear-button' };
 }
 }

 if (role === 'combobox' || tagName === 'button' || readOnly) {
 return { cleared: false as const, reason: 'not-clearable' };
 }

 return { cleared: false as const, reason: 'unsupported' };
}

async function assertNoTableMutation(page: Page, indexes: HeaderIndexes, original: ProductRowSnapshot) {
 const rowAfterInvalid = await ((await findRowBySnapshot(page, indexes, original)) ?? firstEditableRow(page));
 const afterInvalid = await snapshot(rowAfterInvalid, indexes);
 expect(
 normalizeText(afterInvalid.raw),
 '[BUG] Se permite guardar con datos inválidos y la tabla cambia indebidamente.',
 ).toContain(normalizeText(original.raw));
}

async function validateRequiredField(params: {
 page: Page;
 indexes: HeaderIndexes;
 original: ProductRowSnapshot;
 labels: string[];
 fieldTag: string;
}) {
 const { page, indexes, original, labels, fieldTag } = params;
 const row = (await findRowBySnapshot(page, indexes, original)) ?? (await firstEditableRow(page));
 const dialog = await openEditDialog(page, row, /producto/i);
 const field = await findField(dialog, labels);

 await expect(field, `[BUG] No se encontró el campo ${fieldTag} en el modal de edición.`).toBeVisible({ timeout: 10_000 });

 const clearResult = await clearFieldIfPossible(dialog, field);
 if (!clearResult.cleared) {
 test.info().annotations.push({
 type: `required-skip-${fieldTag}`,
 description: `El campo ${fieldTag} no pudo vaciarse desde la UI real. Motivo: ${clearResult.reason}.`,
 });

 await dialog.getByRole('button', { name: /cancelar/i }).click().catch(async () => {
 await page.keyboard.press('Escape').catch(() => undefined);
 });
 return { validated: false as const, reason: clearResult.reason };
 }

 const requiredMessages = await expectFieldInvalid(
 dialog,
 field,
 requiredMessagePattern,
 `[BUG] No se muestra mensaje de campo requerido para ${fieldTag}.`,
 `[BUG] Mensaje no corresponde al campo ${fieldTag}.`,
 );

 const { updateButton, enabled } = await tryUpdate(dialog);
 await expect(dialog, '[BUG] Se permite guardar con datos inválidos.').toBeVisible();
 if (enabled) {
 await expect(updateButton, '[BUG] Se permite guardar con datos inválidos.').not.toBeHidden();
 }

 await assertNoTableMutation(page, indexes, original);

 test.info().annotations.push({
 type: `validation-required-${fieldTag}`,
 description: requiredMessages.join(' | '),
 });

 await dialog.getByRole('button', { name: /cancelar/i }).click().catch(async () => {
 await page.keyboard.press('Escape').catch(() => undefined);
 });

 return { validated: true as const, reason: clearResult.reason };
}

async function tryUpdate(dialog: Locator) {
 const updateButton = dialog.getByRole('button', { name: /actualizar/i }).first();
 await expect(updateButton, '[BUG] El modal no muestra el botón "Actualizar".').toBeVisible({ timeout: 10_000 });

 const enabled = await updateButton.isEnabled().catch(() => false);
 if (enabled) {
 await updateButton.click();
 }

 return { updateButton, enabled };
}

test.describe('@bloque1 @E36-C-03.2 ', () => {
 test('@bloque1 @E36-C-03.2 @editar debe bloquear la edicion de Grupo Producto con errores especificos por campo', async ({
 page,
 }) => {
 test.setTimeout(300_000);

 page.context().on('page', async (openedPage) => {
 if (openedPage === page) return;
 await openedPage.close().catch(() => undefined);
 });

 await test.step('QA: ingresar a Distribución y abrir Comunes > Grupo Producto', async () => {
 await openGrupoProductoView(page);
 });

 const indexes = await getHeaderIndexes(page);
 const originalRow = await firstEditableRow(page);
 const original = await snapshot(originalRow, indexes);
 const requiredFieldResults: string[] = [];

 expect(original.codigo, '[BUG] La primera fila no expone un código base para validar edición inválida.').not.toBe('');

 await test.step('QA: validar obligatoriedad por cada campo realmente vaciable en el modal', async () => {
 const requiredFields = [
 { labels: ['codigo'], tag: 'codigo' },
 { labels: ['nombre'], tag: 'nombre' },
 { labels: ['codigo linea'], tag: 'codigo-linea' },
 { labels: ['nombre linea'], tag: 'nombre-linea' },
 { labels: ['metodo de valoracion', 'valoracion'], tag: 'metodo-valoracion' },
 ];

 for (const requiredField of requiredFields) {
 const result = await validateRequiredField({
 page,
 indexes,
 original,
 labels: requiredField.labels,
 fieldTag: requiredField.tag,
 });
 requiredFieldResults.push(`${requiredField.tag}:${result.validated ? 'validated' : result.reason}`);
 }

 expect(
 requiredFieldResults.some((entry) => entry.endsWith(':validated')),
 '[BUG] Ninguno de los campos obligatorios del modal pudo validarse por obligatoriedad con la UI real disponible.',
 ).toBe(true);

 test.info().annotations.push({
 type: 'required-field-summary',
 description: requiredFieldResults.join(' | '),
 });
 });

 await test.step('QA: validar caracteres especiales no permitidos en Código', async () => {
 const row = (await findRowBySnapshot(page, indexes, original)) ?? (await firstEditableRow(page));
 const dialog = await openEditDialog(page, row, /producto/i);
 const codigoField = await findField(dialog, ['codigo']);

 if (!(await codigoField.isEnabled().catch(() => false))) {
 test.info().annotations.push({
 type: 'invalid-skip-codigo',
 description: 'El campo código no quedó editable en la UI real; se omite validación de formato.',
 });
 await dialog.getByRole('button', { name: /cancelar/i }).click().catch(async () => {
 await page.keyboard.press('Escape').catch(() => undefined);
 });
 return;
 }

 await codigoField.fill('$#@!*?+');
 await codigoField.blur().catch(() => undefined);

 const invalidMessages = await expectFieldInvalid(
 dialog,
 codigoField,
 invalidFormatPattern,
 '[BUG] Error no visible al usuario.',
 '[BUG] No se valida formato incorrecto en Código.',
 );

 const { updateButton, enabled } = await tryUpdate(dialog);
 await expect(dialog, '[BUG] Se permite guardar con datos inválidos.').toBeVisible();
 if (enabled) {
 await expect(updateButton, '[BUG] Se permite guardar con datos inválidos.').not.toBeHidden();
 }

 await assertNoTableMutation(page, indexes, original);

 test.info().annotations.push({
 type: 'validation-invalid-codigo',
 description: invalidMessages.join(' | '),
 });

 await dialog.getByRole('button', { name: /cancelar/i }).click().catch(async () => {
 await page.keyboard.press('Escape').catch(() => undefined);
 });
 });

 await test.step('QA: validar caracteres especiales no permitidos en Nombre', async () => {
 const row = (await findRowBySnapshot(page, indexes, original)) ?? (await firstEditableRow(page));
 const dialog = await openEditDialog(page, row, /producto/i);
 const nombreField = await findField(dialog, ['nombre']);

 await nombreField.fill('$#@!*?+');
 await nombreField.blur().catch(() => undefined);

 const invalidMessages = await expectFieldInvalid(
 dialog,
 nombreField,
 invalidFormatPattern,
 '[BUG] Error no visible al usuario.',
 '[BUG] No se valida formato incorrecto en Nombre.',
 );

 const { updateButton, enabled } = await tryUpdate(dialog);
 await expect(dialog, '[BUG] Se permite guardar con datos inválidos.').toBeVisible();
 if (enabled) {
 await expect(updateButton, '[BUG] Se permite guardar con datos inválidos.').not.toBeHidden();
 }

 await assertNoTableMutation(page, indexes, original);

 test.info().annotations.push({
 type: 'validation-invalid-nombre',
 description: invalidMessages.join(' | '),
 });

 await dialog.getByRole('button', { name: /cancelar/i }).click().catch(async () => {
 await page.keyboard.press('Escape').catch(() => undefined);
 });
 });
 });
});
