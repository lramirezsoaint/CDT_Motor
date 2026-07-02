import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { goToComunesView } from '../_shared/comunes-upload';
import {
 buildEditCodigo,
 buildEditNombre,
 currentFieldValue,
 fillIfEditable,
 findField,
 normalizeEditText,
 openEditDialog,
 selectDifferentOptionIfEditable,
} from '../_shared/comunes-edit';

type HeaderIndexes = {
 codigoSubcanal: number;
 nombreSubcanal: number;
 codigoCanal: number;
 nombreCanal: number;
 estado: number;
 modificado: number;
};

type SubcanalRowSnapshot = {
 codigoSubcanal: string;
 nombreSubcanal: string;
 codigoCanal: string;
 nombreCanal: string;
 estado: string;
 modificado: string;
};

type PendingChanges = Partial<Pick<SubcanalRowSnapshot, 'codigoSubcanal' | 'nombreSubcanal' | 'codigoCanal' | 'nombreCanal' | 'estado'>>;

const successMessagePattern = /cambios guardados correctamente/i;

async function openSubcanalesView(page: Page) {
 await goToComunesView(page, 'Subcanales', 'comunes/subcanales');

 const table = page.locator('table').first();
 await expect(table, '[BUG] La tabla de Subcanales no se renderiza al ingresar a la vista.').toBeVisible({
 timeout: 20_000,
 });
}

async function tableHeaders(page: Page) {
 return (await page.locator('table thead th, [role="columnheader"]').allTextContents())
 .map((value) => value.trim())
 .filter(Boolean);
}

function findHeaderIndex(headers: string[], patterns: RegExp[]) {
 return headers.findIndex((header) => patterns.some((pattern) => pattern.test(normalizeEditText(header))));
}

async function getHeaderIndexes(page: Page): Promise<HeaderIndexes> {
 const headers = await tableHeaders(page);

 const indexes = {
 codigoSubcanal: findHeaderIndex(headers, [/^codigo$/i, /^codigo subcanal$/i]),
 nombreSubcanal: findHeaderIndex(headers, [/^nombre$/i, /^nombre subcanal$/i]),
 codigoCanal: findHeaderIndex(headers, [/^codigo canal$/i, /^canal$/i]),
 nombreCanal: findHeaderIndex(headers, [/^nombre canal$/i]),
 estado: findHeaderIndex(headers, [/^estado$/i]),
 modificado: findHeaderIndex(headers, [/^modificado$/i]),
 };

 expect(indexes.codigoSubcanal, `[BUG] La tabla no muestra la columna Código Subcanal. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.nombreSubcanal, `[BUG] La tabla no muestra la columna Nombre Subcanal. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.codigoCanal, `[BUG] La tabla no muestra la columna Código Canal. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.nombreCanal, `[BUG] La tabla no muestra la columna Nombre Canal. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.estado, `[BUG] La tabla no muestra la columna Estado. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);

 return indexes;
}

async function rowCells(row: Locator) {
 return (await row.locator('td').allTextContents()).map((value) => value.trim());
}

async function firstRow(page: Page) {
 const row = page.locator('table tbody tr').first();
 await expect(row, '[BUG] La tabla de Subcanales no tiene una primera fila disponible para editar.').toBeVisible({
 timeout: 20_000,
 });
 return row;
}

async function snapshot(row: Locator, indexes: HeaderIndexes): Promise<SubcanalRowSnapshot> {
 const cells = await rowCells(row);

 return {
 codigoSubcanal: cells[indexes.codigoSubcanal] ?? '',
 nombreSubcanal: cells[indexes.nombreSubcanal] ?? '',
 codigoCanal: cells[indexes.codigoCanal] ?? '',
 nombreCanal: cells[indexes.nombreCanal] ?? '',
 estado: cells[indexes.estado] ?? '',
 modificado: indexes.modificado >= 0 ? cells[indexes.modificado] ?? '' : '',
 };
}

async function rowByUpdatedValues(
 page: Page,
 indexes: HeaderIndexes,
 expected: Pick<SubcanalRowSnapshot, 'codigoSubcanal' | 'nombreSubcanal' | 'codigoCanal' | 'estado'>,
) {
 const rows = page.locator('table tbody tr');
 const count = await rows.count();

 for (let index = 0; index < count; index += 1) {
 const row = rows.nth(index);
 const values = await snapshot(row, indexes);
 if (
 normalizeEditText(values.codigoSubcanal) === normalizeEditText(expected.codigoSubcanal) &&
 normalizeEditText(values.nombreSubcanal) === normalizeEditText(expected.nombreSubcanal) &&
 normalizeEditText(values.codigoCanal) === normalizeEditText(expected.codigoCanal) &&
 normalizeEditText(values.estado) === normalizeEditText(expected.estado)
 ) {
 return row;
 }
 }

 return null;
}

async function save(dialog: Locator) {
 const updateButton = dialog.getByRole('button', { name: /actualizar/i }).first();
 await expect(updateButton, '[BUG] El modal de edición no muestra el botón "Actualizar".').toBeEnabled({
 timeout: 10_000,
 });
 await updateButton.click();
}

test.describe('@bloque1 @E36-C-01.4 ', () => {
 test('@bloque1 @E36-C-01.4 @editar debe editar un Subcanal y mantener consistente la relación Canal', async ({
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
 const targetRow = await firstRow(page);
 const original = await snapshot(targetRow, indexes);

 expect(original.codigoSubcanal, '[BUG] La primera fila de Subcanales no muestra un código base para editar.').not.toBe('');
 expect(original.nombreSubcanal, '[BUG] La primera fila de Subcanales no muestra un nombre base para editar.').not.toBe('');

 await test.step('QA: abrir modal y editar campos habilitados del subcanal', async () => {
 const dialog = await openEditDialog(page, targetRow, /subcanal|canal/i);

 const codigoSubcanalField = await findField(dialog, ['codigo subcanal', 'codigo']);
 const nombreSubcanalField = await findField(dialog, ['nombre subcanal', 'nombre']);
 const codigoCanalField = await findField(dialog, ['codigo canal', 'canal']);
 const nombreCanalField = await findField(dialog, ['nombre canal']);
 const estadoField = await findField(dialog, ['estado']);

 await expect(nombreCanalField, '[BUG] Se puede editar manualmente Nombre Canal.').toBeDisabled();

 const changes: PendingChanges = {};
 const originalNombreCanal = await currentFieldValue(nombreCanalField);

 const maybeCodigo = await fillIfEditable(codigoSubcanalField, buildEditCodigo(original.codigoSubcanal));
 if (maybeCodigo) {
 changes.codigoSubcanal = maybeCodigo;
 }

 const maybeNombre = await fillIfEditable(nombreSubcanalField, buildEditNombre(original.nombreSubcanal, 'Subcanal QA'));
 if (maybeNombre) {
 changes.nombreSubcanal = maybeNombre;
 }

 const maybeCodigoCanal = await selectDifferentOptionIfEditable(page, codigoCanalField, original.codigoCanal);
 if (maybeCodigoCanal) {
 changes.codigoCanal = maybeCodigoCanal;

 await expect
 .poll(async () => await currentFieldValue(nombreCanalField), {
 message: '[BUG] Nombre Canal no se actualiza automáticamente al cambiar Código Canal.',
 timeout: 10_000,
 })
 .not.toBe(originalNombreCanal);

 const updatedNombreCanal = await currentFieldValue(nombreCanalField);
 expect(
 normalizeEditText(updatedNombreCanal),
 '[BUG] Nombre Canal no se actualiza automáticamente al cambiar Código Canal.',
 ).not.toBe(normalizeEditText(originalNombreCanal));
 changes.nombreCanal = updatedNombreCanal;
 }

 const maybeEstado = await selectDifferentOptionIfEditable(page, estadoField, original.estado);
 if (maybeEstado) {
 changes.estado = maybeEstado;
 }

 expect(
 Object.keys(changes).length,
 '[BUG] El modal de edición se abre, pero no expone campos editables para validar la actualización del subcanal.',
 ).toBeGreaterThan(0);

 await save(dialog);

 await expect
 .poll(async () => successMessagePattern.test(await page.locator('body').innerText()), {
 message: '[BUG] No aparece mensaje de éxito después de editar el subcanal.',
 timeout: 10_000,
 })
 .toBe(true);

 await expect(dialog, '[BUG] No se guardan los cambios y el modal permanece abierto.').toBeHidden({ timeout: 15_000 });

 const expectedRowValues = {
 codigoSubcanal: changes.codigoSubcanal ?? original.codigoSubcanal,
 nombreSubcanal: changes.nombreSubcanal ?? original.nombreSubcanal,
 codigoCanal: changes.codigoCanal ?? original.codigoCanal,
 estado: changes.estado ?? original.estado,
 };

 await expect
 .poll(async () => await rowByUpdatedValues(page, indexes, expectedRowValues), {
 message: '[BUG] No se guardan los cambios o la tabla no refleja la edición del subcanal.',
 timeout: 20_000,
 })
 .not.toBeNull();

 const refreshedRow = await rowByUpdatedValues(page, indexes, expectedRowValues);
 expect(refreshedRow, '[BUG] No se guardan los cambios.').toBeTruthy();

 const updatedSnapshot = await snapshot(refreshedRow!, indexes);

 if (changes.codigoSubcanal) {
 expect(
 normalizeEditText(updatedSnapshot.codigoSubcanal),
 `[BUG] No se guardan los cambios. Código Subcanal esperado: ${changes.codigoSubcanal}. Actual: ${updatedSnapshot.codigoSubcanal}.`,
 ).toBe(normalizeEditText(changes.codigoSubcanal));
 }

 if (changes.nombreSubcanal) {
 expect(
 normalizeEditText(updatedSnapshot.nombreSubcanal),
 `[BUG] No se guardan los cambios. Nombre Subcanal esperado: ${changes.nombreSubcanal}. Actual: ${updatedSnapshot.nombreSubcanal}.`,
 ).toBe(normalizeEditText(changes.nombreSubcanal));
 }

 if (changes.codigoCanal) {
 expect(
 normalizeEditText(updatedSnapshot.codigoCanal),
 `[BUG] No se guardan los cambios. Código Canal esperado: ${changes.codigoCanal}. Actual: ${updatedSnapshot.codigoCanal}.`,
 ).toBe(normalizeEditText(changes.codigoCanal));
 }

 if (changes.estado) {
 expect(
 normalizeEditText(updatedSnapshot.estado),
 `[BUG] No se guardan los cambios. Estado esperado: ${changes.estado}. Actual: ${updatedSnapshot.estado}.`,
 ).toBe(normalizeEditText(changes.estado));
 }

 if (changes.nombreCanal) {
 expect(
 normalizeEditText(updatedSnapshot.nombreCanal),
 `[BUG] Inconsistencia entre Código Canal y Nombre Canal. Nombre Canal esperado: ${changes.nombreCanal}. Actual: ${updatedSnapshot.nombreCanal}.`,
 ).toBe(normalizeEditText(changes.nombreCanal));
 }

 if (indexes.modificado >= 0) {
 expect(
 normalizeEditText(updatedSnapshot.modificado),
 '[BUG] La fecha/hora de modificación no se actualiza después de guardar el subcanal.',
 ).not.toBe(normalizeEditText(original.modificado));
 }

 test.info().annotations.push({
 type: 'relacion-canal',
 description: `Codigo Canal: ${changes.codigoCanal ?? original.codigoCanal} | Nombre Canal: ${changes.nombreCanal ?? original.nombreCanal}`,
 });
 });
 });
});
