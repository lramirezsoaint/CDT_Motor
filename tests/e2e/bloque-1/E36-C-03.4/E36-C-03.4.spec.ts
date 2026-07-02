import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { goToComunesView } from '../_shared/comunes-upload';
import { findField, openEditDialog } from '../_shared/comunes-edit';
import {
 clearFieldIfPossible,
 closeDialog,
 expectFieldInvalid,
 invalidFormatPattern,
 normalizeNegativeText,
 requiredMessagePattern,
 tryUpdate,
} from '../_shared/comunes-edit-negative';

type HeaderIndexes = {
 codigoSubcanal: number;
 nombreSubcanal: number;
 codigoCanal: number;
 estado: number;
};

type SubcanalRowSnapshot = {
 codigoSubcanal: string;
 nombreSubcanal: string;
 codigoCanal: string;
 estado: string;
 raw: string;
};

const ignoredLabelsPattern = /^codigo$|^nombre$|^codigo canal$|^nombre canal$|^estado$|^actualizar$|^cancelar$/i;

function normalizeText(value: string) {
 return normalizeNegativeText(value);
}

async function openSubcanalesView(page: Page) {
 await goToComunesView(page, 'Subcanales', 'comunes/subcanales').catch(async () => {
 await expect(page).toHaveURL(/comunes\/subcanales/i, { timeout: 20_000 });
 });

 await expect(page.locator('table').first(), '[BUG] La tabla de Subcanales no se renderiza al ingresar a la vista.').toBeVisible({
 timeout: 20_000,
 });
}

async function getHeaderIndexes(page: Page): Promise<HeaderIndexes> {
 const headers = (await page.locator('table thead th, [role="columnheader"]').allTextContents()).map((v) => v.trim()).filter(Boolean);
 const findIndex = (matcher: RegExp) => headers.findIndex((header) => matcher.test(normalizeText(header)));
 const indexes = {
 codigoSubcanal: findIndex(/^codigo$|^codigo subcanal$/i),
 nombreSubcanal: findIndex(/^nombre$|^nombre subcanal$/i),
 codigoCanal: findIndex(/^codigo canal$|^canal$/i),
 estado: findIndex(/^estado$/i),
 };

 expect(indexes.codigoSubcanal, `[BUG] La tabla no muestra la columna Código Subcanal. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.nombreSubcanal, `[BUG] La tabla no muestra la columna Nombre Subcanal. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.codigoCanal, `[BUG] La tabla no muestra la columna Código Canal. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.estado, `[BUG] La tabla no muestra la columna Estado. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 return indexes;
}

async function firstEditableRow(page: Page) {
 const noRecordsMessage = page.getByText(/no existen registros para mostrar en la tabla|no hay resultados/i).first();
 if (await noRecordsMessage.isVisible().catch(() => false)) {
 throw new Error('[DATA] No hay registros disponibles en Subcanales para validar edición inválida por campo.');
 }

 const rows = page.locator('table tbody tr');
 const count = await rows.count();
 for (let index = 0; index < count; index += 1) {
 const row = rows.nth(index);
 const editButton = row.locator('td:last-child button').first();
 if (await editButton.isVisible().catch(() => false)) return row;
 }
 throw new Error('[BUG] La tabla de Subcanales no muestra ninguna fila editable con icono de lápiz.');
}

async function snapshot(row: Locator, indexes: HeaderIndexes): Promise<SubcanalRowSnapshot> {
 const cells = (await row.locator('td').allTextContents()).map((value) => value.trim());
 return {
 codigoSubcanal: cells[indexes.codigoSubcanal] ?? '',
 nombreSubcanal: cells[indexes.nombreSubcanal] ?? '',
 codigoCanal: cells[indexes.codigoCanal] ?? '',
 estado: cells[indexes.estado] ?? '',
 raw: ((await row.innerText().catch(() => '')) ?? '').trim(),
 };
}

async function findRowBySnapshot(page: Page, indexes: HeaderIndexes, original: SubcanalRowSnapshot) {
 const rows = page.locator('table tbody tr');
 const count = await rows.count();
 for (let index = 0; index < count; index += 1) {
 const row = rows.nth(index);
 const values = await snapshot(row, indexes);
 if (
 normalizeText(values.codigoSubcanal) === normalizeText(original.codigoSubcanal) &&
 normalizeText(values.nombreSubcanal) === normalizeText(original.nombreSubcanal)
 ) {
 return row;
 }
 }
 return null;
}

async function assertNoTableMutation(page: Page, indexes: HeaderIndexes, original: SubcanalRowSnapshot) {
 const rowAfterInvalid = await ((await findRowBySnapshot(page, indexes, original)) ?? firstEditableRow(page));
 const afterInvalid = await snapshot(rowAfterInvalid, indexes);
 expect(normalizeText(afterInvalid.raw), '[BUG] Se permite guardar con datos inválidos y la tabla cambia indebidamente.').toContain(
 normalizeText(original.raw),
 );
}

test.describe('@bloque1 @E36-C-03.4 ', () => {
 test('@bloque1 @E36-C-03.4 @editar debe bloquear la edicion de Subcanales con errores especificos por campo', async ({
 page,
 }) => {
 test.setTimeout(300_000);

 page.context().on('page', async (openedPage) => {
 if (openedPage === page) return;
 await openedPage.close().catch(() => undefined);
 });

 await test.step('QA: ingresar a Distribución y abrir Comunes > Subcanales', async () => {
 await openSubcanalesView(page);
 });

 const indexes = await getHeaderIndexes(page);
 const originalRow = await firstEditableRow(page);
 const original = await snapshot(originalRow, indexes);
 const requiredFieldResults: string[] = [];

 await test.step('QA: validar obligatoriedad en Nombre Subcanal y Código Canal si la UI permite vaciarlos', async () => {
 const requiredFields = [
 { labels: ['nombre subcanal', 'nombre'], tag: 'nombre-subcanal' },
 { labels: ['codigo canal', 'canal'], tag: 'codigo-canal' },
 ];

 for (const requiredField of requiredFields) {
 const row = (await findRowBySnapshot(page, indexes, original)) ?? (await firstEditableRow(page));
 const dialog = await openEditDialog(page, row, /subcanal|canal/i);
 const field = await findField(dialog, requiredField.labels);
 const clearResult = await clearFieldIfPossible(dialog, field);

 if (!clearResult.cleared) {
 test.info().annotations.push({
 type: `required-skip-${requiredField.tag}`,
 description: `El campo ${requiredField.tag} no pudo vaciarse desde la UI real. Motivo: ${clearResult.reason}.`,
 });
 requiredFieldResults.push(`${requiredField.tag}:${clearResult.reason}`);
 await closeDialog(dialog, page);
 continue;
 }

 const requiredMessages = await expectFieldInvalid({
 dialog,
 field,
 messagePattern: requiredMessagePattern,
 ignoredLabelsPattern,
 missingMessage: `[BUG] No se muestra mensaje de campo requerido para ${requiredField.tag}.`,
 wrongMessage: `[BUG] Mensaje no corresponde al campo ${requiredField.tag}.`,
 });

 const { updateButton, enabled } = await tryUpdate(dialog);
 await expect(dialog, '[BUG] Se permite guardar con datos inválidos.').toBeVisible();
 if (enabled) await expect(updateButton, '[BUG] Se permite guardar con datos inválidos.').not.toBeHidden();

 await assertNoTableMutation(page, indexes, original);
 requiredFieldResults.push(`${requiredField.tag}:validated`);
 test.info().annotations.push({
 type: `validation-required-${requiredField.tag}`,
 description: requiredMessages.join(' | '),
 });
 await closeDialog(dialog, page);
 }

 expect(
 requiredFieldResults.some((entry) => entry.endsWith(':validated')),
 '[BUG] Ninguno de los campos objetivo de Subcanales pudo validarse por obligatoriedad con la UI real disponible.',
 ).toBe(true);
 });

 await test.step('QA: validar caracteres especiales no permitidos en Nombre Subcanal', async () => {
 const row = (await findRowBySnapshot(page, indexes, original)) ?? (await firstEditableRow(page));
 const dialog = await openEditDialog(page, row, /subcanal|canal/i);
 const nombreField = await findField(dialog, ['nombre subcanal', 'nombre']);

 await nombreField.fill('$#@!*?+');
 await nombreField.blur().catch(() => undefined);

 const invalidMessages = await expectFieldInvalid({
 dialog,
 field: nombreField,
 messagePattern: invalidFormatPattern,
 ignoredLabelsPattern,
 missingMessage: '[BUG] Error no visible al usuario.',
 wrongMessage: '[BUG] No se valida formato incorrecto en Nombre Subcanal.',
 });

 const { updateButton, enabled } = await tryUpdate(dialog);
 await expect(dialog, '[BUG] Se permite guardar con datos inválidos.').toBeVisible();
 if (enabled) await expect(updateButton, '[BUG] Se permite guardar con datos inválidos.').not.toBeHidden();

 await assertNoTableMutation(page, indexes, original);
 test.info().annotations.push({ type: 'validation-invalid-nombre-subcanal', description: invalidMessages.join(' | ') });
 await closeDialog(dialog, page);
 });
 });
});
