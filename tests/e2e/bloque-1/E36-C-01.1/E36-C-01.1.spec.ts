import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { goToComunesView } from '../_shared/comunes-upload';

type HeaderIndexes = {
 codigo: number;
 nombre: number;
 negocio: number;
 estado: number;
};

type RowSnapshot = {
 codigo: string;
 nombre: string;
 negocio: string;
 estado: string;
};

type PendingChanges = Partial<RowSnapshot>;

const associatedDataMessage = 'El registro que desea modificar cuenta con datos asociados. Favor de validar.';

function normalizeText(value: string) {
 return value
 .normalize('NFD')
 .replace(/[\u0300-\u036f]/g, '')
 .replace(/\s+/g, ' ')
 .toLowerCase()
 .trim();
}

function randomLetters(length: number) {
 const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
}

function randomDigits(length: number) {
 return Array.from({ length }, () => Math.floor(Math.random() * 10).toString()).join('');
}

function buildCodigo(previousValue: string) {
 let candidate = '';

 do {
 candidate = `${randomLetters(4)}${randomDigits(4)}`;
 } while (normalizeText(candidate) === normalizeText(previousValue));

 return candidate;
}

function buildNombre(previousValue: string) {
 const suffix = `${randomLetters(2)}${randomDigits(2)}`;
 const seed = previousValue.trim() || 'Linea QA';
 return `${seed} ${suffix}`.slice(0, 60);
}

async function openLineasView(page: Page) {
 try {
 await goToComunesView(page, 'Líneas', 'comunes/lineas');
 } catch {
 const directLineasLink = page.getByRole('link', { name: /l[ií]neas/i }).first();
 if (await directLineasLink.isVisible().catch(() => false)) {
 await directLineasLink.click().catch(() => undefined);
 }

 await expect(page).toHaveURL(/comunes\/lineas/i, { timeout: 20_000 });
 }

 const table = page.locator('table').first();
 await expect(table, '[BUG] La tabla de Líneas no se renderiza al ingresar a la vista.').toBeVisible({ timeout: 20_000 });
}

async function headerIndexes(page: Page): Promise<HeaderIndexes> {
 const headers = (await page.locator('table thead th, [role="columnheader"]').allTextContents())
 .map((value) => value.trim())
 .filter(Boolean);

 const findIndex = (matcher: RegExp) => headers.findIndex((header) => matcher.test(normalizeText(header)));

 const indexes = {
 codigo: findIndex(/^codigo$/i),
 nombre: findIndex(/^nombre$/i),
 negocio: findIndex(/^negocio$/i),
 estado: findIndex(/^estado$/i),
 };

 expect(indexes.codigo, `[BUG] La tabla no muestra la columna Código. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.nombre, `[BUG] La tabla no muestra la columna Nombre. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.negocio, `[BUG] La tabla no muestra la columna Negocio. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 expect(indexes.estado, `[BUG] La tabla no muestra la columna Estado. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);

 return indexes;
}

async function rowCells(row: Locator) {
 return (await row.locator('td').allTextContents()).map((value) => value.trim());
}

async function firstRow(page: Page) {
 const row = page.locator('table tbody tr').first();
 await expect(row, '[BUG] La tabla de Líneas no tiene una primera fila disponible para editar.').toBeVisible({ timeout: 20_000 });
 return row;
}

async function snapshot(row: Locator, indexes: HeaderIndexes): Promise<RowSnapshot> {
 const cells = await rowCells(row);

 return {
 codigo: cells[indexes.codigo] ?? '',
 nombre: cells[indexes.nombre] ?? '',
 negocio: cells[indexes.negocio] ?? '',
 estado: cells[indexes.estado] ?? '',
 };
}

async function rowByOriginalKey(page: Page, original: RowSnapshot, indexes: HeaderIndexes) {
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

async function openEditDialog(page: Page, row: Locator) {
 const editButton = row.locator('td:last-child button').first();
 await expect(editButton, '[BUG] La primera fila no muestra el icono de edición.').toBeVisible({ timeout: 10_000 });
 await editButton.click();

 const dialog = page.getByRole('dialog').filter({ has: page.getByText(/editar l[ií]nea/i) }).first();
 await expect(dialog, '[BUG] No se abre el modal de edición.').toBeVisible({ timeout: 10_000 });
 await expect(dialog.getByText(/editar l[ií]nea/i), 'El modal debe mostrar el título "Editar Línea".').toBeVisible({
 timeout: 10_000,
 });

 return dialog;
}

async function currentFieldValue(field: Locator) {
 const tagName = await field.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
 if (tagName === 'input' || tagName === 'textarea') {
 return (await field.inputValue().catch(() => '')).trim();
 }

 return ((await field.textContent().catch(() => '')) ?? '').trim();
}

async function fieldControl(dialog: Locator, page: Page, label: string) {
 const pattern = new RegExp(label, 'i');
 const candidates = [
 dialog.getByLabel(pattern).first(),
 dialog.getByRole('textbox', { name: pattern }).first(),
 dialog.getByRole('combobox', { name: pattern }).first(),
 dialog.locator(`input[id*="${label}" i], input[name*="${label}" i], [data-testid*="${label}" i]`).first(),
 ];

 for (const candidate of candidates) {
 if ((await candidate.count().catch(() => 0)) === 0) continue;
 if (await candidate.isVisible().catch(() => false)) return candidate;
 }

 throw new Error(`[BUG] No se encontró el control del campo ${label} en el modal de edición.`);
}

async function fillIfEditable(field: Locator, nextValue: string) {
 if (!(await field.isEnabled().catch(() => false))) {
 return false;
 }

 await field.fill('');
 await field.fill(nextValue);
 await expect(field).toHaveValue(nextValue);
 return true;
}

async function selectDifferentOption(page: Page, field: Locator, currentValue: string) {
 if (!(await field.isEnabled().catch(() => false))) {
 return null;
 }

 await field.click();
 const options = page.locator('[role="option"], [role="listbox"] li');
 await expect(options.first(), '[BUG] El selector no despliega opciones visibles para editar la fila.').toBeVisible({
 timeout: 10_000,
 });

 const optionTexts = await options.evaluateAll((nodes) =>
 nodes
 .map((node) => {
 const element = node as HTMLElement;
 const style = window.getComputedStyle(element);
 return {
 hidden: style.display === 'none' || style.visibility === 'hidden',
 text: (element.innerText || element.textContent || '').trim(),
 disabled: node.getAttribute('aria-disabled') === 'true',
 };
 })
 .filter((entry) => !entry.hidden && entry.text && !entry.disabled)
 .map((entry) => entry.text),
 );

 const nextOption = optionTexts.find((option) => normalizeText(option) !== normalizeText(currentValue));
 expect(nextOption, `[BUG] El selector no ofrece una opción distinta a "${currentValue}" para validar la edición.`).toBeTruthy();

 await page.getByRole('option', { name: new RegExp(`^\\s*${nextOption}\\s*$`, 'i') }).first().click();
 await expect.poll(async () => normalizeText(await currentFieldValue(field))).toContain(normalizeText(nextOption!));

 return nextOption!;
}

async function captureVisibleMessages(page: Page, dialog: Locator) {
 const messages = new Set<string>();

 const collectors = [
 page.locator('[role="alert"], [role="status"], [data-sonner-toast], .Toastify__toast, .MuiAlert-root'),
 dialog.locator('[role="alert"], [role="status"], p, span, div'),
 ];

 for (const locator of collectors) {
 const texts = await locator.allTextContents().catch(() => []);
 for (const text of texts) {
 const normalized = text.replace(/\s+/g, ' ').trim();
 if (!normalized) continue;
 if (normalized.length < 6) continue;
 if (/^codigo$|^nombre$|^negocio$|^estado$|^cancelar$|^actualizar$|^close$/i.test(normalized)) continue;
 messages.add(normalized);
 }
 }

 return Array.from(messages);
}

async function save(dialog: Locator) {
 const updateButton = dialog.getByRole('button', { name: /actualizar/i }).first();
 await expect(updateButton, '[BUG] El modal no muestra el botón "Actualizar".').toBeEnabled({ timeout: 10_000 });
 await updateButton.click();
}

test.describe('@bloque1 @E36-C-01.1 ', () => {
 test('@bloque1 @E36-C-01.1 @editar debe editar la primera Línea usando solo los campos habilitados y capturar el resultado', async ({
 page,
 }) => {
 test.setTimeout(240_000);

 page.context().on('page', async (openedPage) => {
 if (openedPage === page) {
 return;
 }

 await openedPage.close().catch(() => undefined);
 });

 await test.step('QA: ingresar a Distribución y abrir Comunes > Líneas', async () => {
 await openLineasView(page);
 });

 const indexes = await headerIndexes(page);
 const targetRow = await firstRow(page);
 const original = await snapshot(targetRow, indexes);

 let resultMessage = 'Sin mensaje visible';
 let updateBlocked = false;

 await test.step('QA: abrir la primera fila y modificar solo los campos editables', async () => {
 const dialog = await openEditDialog(page, targetRow);

 const codigoField = await fieldControl(dialog, page, 'codigo');
 const nombreField = await fieldControl(dialog, page, 'nombre');
 const negocioField = await fieldControl(dialog, page, 'negocio');
 const estadoField = await fieldControl(dialog, page, 'estado');

 const changes: PendingChanges = {};

 if (await fillIfEditable(codigoField, buildCodigo(original.codigo))) {
 changes.codigo = await currentFieldValue(codigoField);
 }

 if (await fillIfEditable(nombreField, buildNombre(original.nombre))) {
 changes.nombre = await currentFieldValue(nombreField);
 }

 const negocioNuevo = await selectDifferentOption(page, negocioField, original.negocio);
 if (negocioNuevo) {
 changes.negocio = negocioNuevo;
 }

 const estadoNuevo = await selectDifferentOption(page, estadoField, original.estado);
 if (estadoNuevo) {
 changes.estado = estadoNuevo;
 }

 expect(
 Object.keys(changes).length,
 '[BUG] La primera fila abre el modal de edición, pero no expone ningún campo editable para validar el flujo.',
 ).toBeGreaterThan(0);

 await save(dialog);

 const dialogClosed = await dialog.waitFor({ state: 'hidden', timeout: 8_000 }).then(
 () => true,
 () => false,
 );

 const capturedMessages = await captureVisibleMessages(page, dialog);
 const associatedVisible = capturedMessages.some((message) =>
 normalizeText(message).includes(normalizeText(associatedDataMessage)),
 );

 if (capturedMessages.length > 0) {
 resultMessage = capturedMessages[0];
 test.info().annotations.push({
 type: 'resultado-edicion',
 description: capturedMessages.join(' | '),
 });
 }

 if (!dialogClosed) {
 updateBlocked = true;
 expect(
 capturedMessages.length,
 '[BUG] La edición no se confirmó y tampoco se mostró un mensaje o error visible después de presionar "Actualizar".',
 ).toBeGreaterThan(0);

 if (associatedVisible) {
 await expect(dialog.getByText(associatedDataMessage).or(page.getByText(associatedDataMessage)).first()).toBeVisible();
 }

 return;
 }

 await expect
 .poll(async () => {
 const refreshedRow = await rowByOriginalKey(page, original, indexes);
 if (!refreshedRow) return null;
 return snapshot(refreshedRow, indexes);
 }, {
 message: '[BUG] No se encontró nuevamente la primera fila después de confirmar la edición.',
 timeout: 15_000,
 })
 .not.toBeNull();

 const refreshedRow = await rowByOriginalKey(page, original, indexes);
 expect(refreshedRow, '[BUG] No se puede validar la primera fila después de la edición.').toBeTruthy();

 const updated = await snapshot(refreshedRow!, indexes);

 if (changes.codigo) {
 expect(
 normalizeText(updated.codigo),
 `[BUG] La tabla no refleja el nuevo código. Esperado: ${changes.codigo}. Actual: ${updated.codigo}.`,
 ).toContain(normalizeText(changes.codigo));
 }

 if (changes.nombre) {
 expect(
 normalizeText(updated.nombre),
 `[BUG] La tabla no refleja el nuevo nombre. Esperado: ${changes.nombre}. Actual: ${updated.nombre}.`,
 ).toContain(normalizeText(changes.nombre));
 }

 if (changes.negocio) {
 expect(
 normalizeText(updated.negocio),
 `[BUG] La tabla no refleja el nuevo negocio. Esperado: ${changes.negocio}. Actual: ${updated.negocio}.`,
 ).toContain(normalizeText(changes.negocio));
 }

 if (changes.estado) {
 expect(
 normalizeText(updated.estado),
 `[BUG] La tabla no refleja el nuevo estado. Esperado: ${changes.estado}. Actual: ${updated.estado}.`,
 ).toContain(normalizeText(changes.estado));
 }
 });

 await test.step('QA: registrar el resultado visible de la edición', async () => {
 test.info().annotations.push({
 type: 'mensaje-final',
 description: updateBlocked ? `Edición bloqueada: ${resultMessage}` : `Edición confirmada: ${resultMessage}`,
 });

 expect(resultMessage, '[BUG] No se logró capturar ningún mensaje o resultado visible del flujo de edición.').not.toBe('');
 });
 });
});
