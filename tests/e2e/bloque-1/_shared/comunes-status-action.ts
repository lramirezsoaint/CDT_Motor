import { expect } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { captureVisibleMessages, selectExactComboboxOption } from './comunes-add-positive';
import { currentFieldValue, findField, normalizeEditText, openEditDialog } from './comunes-edit';
import { goToComunesView } from './comunes-upload';

export const updateSuccessPattern = /cambios guardados correctamente/i;
export const dependencyBlockedPattern =
 /dependenc|datos asociados|no es posible inactivar|favor de validar|actualmente hay un proceso en ejecucion|proceso en ejecucion|no es posible editar o eliminar/i;
export const deleteBlockedPattern = /actualmente hay un proceso en ejecucion|proceso en ejecucion|no es posible editar o eliminar/i;
export const deleteSuccessPattern = /registro eliminado con exito|registro eliminado/i;

export type InactivateConfig = {
 menu: string;
 route: string;
 modalPattern: RegExp;
 keyLabels: string[];
 stateLabels?: string[];
 positive?: boolean;
};

type TableIndexes = {
 key: number[];
 state: number;
};

export async function openComunesTable(page: Page, menu: string, route: string) {
 await goToComunesView(page, menu, route);
 const table = page.locator('table').first();
 await expect(table, `[BUG] La tabla de ${menu} no se renderiza al ingresar a la vista.`).toBeVisible({ timeout: 20_000 });
 return table;
}

export async function tableHeaders(page: Page) {
 return (await page.locator('table thead th, [role="columnheader"]').allTextContents())
 .map((value) => value.trim())
 .filter(Boolean);
}

function findHeaderIndex(headers: string[], labels: string[]) {
 const patterns = labels.map((label) => new RegExp(label, 'i'));
 return headers.findIndex((header) => patterns.some((pattern) => pattern.test(normalizeEditText(header))));
}

async function indexesFor(page: Page, config: Pick<InactivateConfig, 'keyLabels' | 'stateLabels'>): Promise<TableIndexes> {
 const headers = await tableHeaders(page);
 const key = config.keyLabels.map((label) => findHeaderIndex(headers, [label]));
 const state = findHeaderIndex(headers, config.stateLabels ?? ['estado']);

 for (let i = 0; i < key.length; i += 1) {
 expect(key[i], `[BUG] La tabla no muestra la columna clave ${config.keyLabels[i]}. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
 }
 expect(state, `[BUG] La tabla no muestra la columna Estado. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);

 return { key, state };
}

async function rowCells(row: Locator) {
 return (await row.locator('td').allTextContents()).map((value) => value.trim());
}

export async function findCandidateRow(
 page: Page,
 options?: {
 requireActive?: boolean;
 preferPatterns?: RegExp[];
 excludePatterns?: RegExp[];
 },
) {
 const rows = page.locator('table tbody tr');
 const count = await rows.count();
 expect(count, '[DATA] No hay filas visibles en la tabla para ejecutar el caso.').toBeGreaterThan(0);

 const candidates: { row: Locator; text: string }[] = [];
 for (let index = 0; index < count; index += 1) {
 const row = rows.nth(index);
 const text = normalizeEditText((await row.innerText().catch(() => '')).trim());
 if (!text) continue;
 if (options?.requireActive && !/\bactivo\b/.test(text)) continue;
 if (options?.excludePatterns?.some((pattern) => pattern.test(text))) continue;
 candidates.push({ row, text });
 }

 const preferred = options?.preferPatterns
 ? candidates.find(({ text }) => options.preferPatterns!.some((pattern) => pattern.test(text)))
 : undefined;
 const selected = preferred ?? candidates[0];
 expect(selected, '[DATA] No se encontró una fila candidata compatible con el estado esperado del caso.').toBeTruthy();
 return selected!.row;
}

export async function snapshotKeyState(row: Locator, page: Page, config: Pick<InactivateConfig, 'keyLabels' | 'stateLabels'>) {
 const indexes = await indexesFor(page, config);
 const cells = await rowCells(row);

 return {
 indexes,
 keyValues: indexes.key.map((index) => cells[index] ?? ''),
 state: cells[indexes.state] ?? '',
 raw: (await row.innerText().catch(() => '')).trim(),
 };
}

export async function rowByKey(page: Page, keyValues: string[], config: Pick<InactivateConfig, 'keyLabels' | 'stateLabels'>) {
 const rows = page.locator('table tbody tr');
 const count = await rows.count();
 const indexes = await indexesFor(page, config);

 for (let index = 0; index < count; index += 1) {
 const row = rows.nth(index);
 const cells = await rowCells(row);
 const rowKey = indexes.key.map((cellIndex) => cells[cellIndex] ?? '');
 if (rowKey.every((value, keyIndex) => normalizeEditText(value) === normalizeEditText(keyValues[keyIndex] ?? ''))) {
 return row;
 }
 }

 return null;
}

async function setEstado(page: Page, dialog: Locator, targetState: string) {
 const estadoField = await findField(dialog, ['estado']);
 const currentState = await currentFieldValue(estadoField);
 await selectExactComboboxOption(page, estadoField, targetState, { fallbackPattern: /activo|inactivo/i });
 return currentState;
}

async function clickActualizar(dialog: Locator) {
 const updateButton = dialog.getByRole('button', { name: /actualizar/i }).first();
 await expect(updateButton, '[BUG] El modal no muestra el botón "Actualizar".').toBeEnabled({ timeout: 10_000 });
 await updateButton.click();
}

export async function executePositiveInactivation(page: Page, config: InactivateConfig) {
 await openComunesTable(page, config.menu, config.route);
 const row = await findCandidateRow(page, { requireActive: true, preferPatterns: [/\bqa\b/i], excludePatterns: [/\binactivo\b/i] });
 const original = await snapshotKeyState(row, page, config);
 const dialog = await openEditDialog(page, row, config.modalPattern);

 await setEstado(page, dialog, 'Inactivo');
 await clickActualizar(dialog);

 await expect
 .poll(async () => {
 const messages = await captureVisibleMessages(page, dialog);
 return messages.find((message) => updateSuccessPattern.test(normalizeEditText(message))) ?? '';
 }, {
 message: `[BUG] No aparece mensaje de éxito al inactivar en ${config.menu}.`,
 timeout: 12_000,
 })
 .not.toBe('');

 await expect(dialog, `[BUG] El modal de ${config.menu} permanece abierto después de inactivar.`).toBeHidden({ timeout: 15_000 });

 await expect
 .poll(async () => await rowByKey(page, original.keyValues, config), {
 message: `[BUG] No se encontró la fila original en ${config.menu} después de actualizar el estado.`,
 timeout: 20_000,
 })
 .not.toBeNull();

 const rowAfter = await rowByKey(page, original.keyValues, config);
 expect(rowAfter, `[BUG] No se encontró la fila original en ${config.menu} después de actualizar el estado.`).toBeTruthy();
 const after = await snapshotKeyState(rowAfter!, page, config);
 expect(
 normalizeEditText(after.state),
 `[BUG] El estado de la fila en ${config.menu} no cambió a Inactivo. Valor actual: ${after.state}.`,
 ).toContain('inactivo');
}

export async function executeNegativeInactivation(page: Page, config: InactivateConfig) {
 await openComunesTable(page, config.menu, config.route);
 const row = await findCandidateRow(page, { requireActive: true, excludePatterns: [/\bqa\b/i] });
 const original = await snapshotKeyState(row, page, config);
 const dialog = await openEditDialog(page, row, config.modalPattern);

 await setEstado(page, dialog, 'Inactivo');
 await clickActualizar(dialog);

 await expect
 .poll(async () => {
 const messages = await captureVisibleMessages(page, dialog);
 return messages.find((message) => dependencyBlockedPattern.test(normalizeEditText(message))) ?? '';
 }, {
 message: `[BUG] No aparece el mensaje de bloqueo por dependencias al inactivar en ${config.menu}.`,
 timeout: 12_000,
 })
 .not.toBe('');

 const rowAfter = await rowByKey(page, original.keyValues, config);
 expect(rowAfter, `[BUG] No se pudo ubicar la fila original en ${config.menu} después del intento fallido de inactivación.`).toBeTruthy();
 const after = await snapshotKeyState(rowAfter!, page, config);
 expect(
 normalizeEditText(after.state),
 `[BUG] El estado de la fila en ${config.menu} cambió indebidamente a pesar de la regla de negocio. Valor actual: ${after.state}.`,
 ).toBe(normalizeEditText(original.state));
}

export async function executeNegativeDeleteBlocked(page: Page, config: { menu: string; route: string }) {
 await openComunesTable(page, config.menu, config.route);
 const row = await findCandidateRow(page);
 const originalText = normalizeEditText((await row.innerText().catch(() => '')).trim());
 const actionButtons = row.locator('td:last-child button');
 const buttonCount = await actionButtons.count();
 expect(buttonCount, `[BUG] La fila de ${config.menu} no muestra acciones para eliminar.`).toBeGreaterThan(0);

 await actionButtons.last().click();

 const dialog = page.getByRole('dialog').last();
 const dialogVisible = await dialog.isVisible().catch(() => false);

 if (dialogVisible) {
 const deleteButton = dialog.getByRole('button', { name: /eliminar|confirmar|aceptar/i }).last();
 if ((await deleteButton.count().catch(() => 0)) > 0 && (await deleteButton.isVisible().catch(() => false))) {
 await deleteButton.click().catch(() => undefined);
 }
 }

 await expect
 .poll(async () => {
 const messages = await captureVisibleMessages(page, dialogVisible ? dialog : undefined);
 return messages.find((message) => deleteBlockedPattern.test(normalizeEditText(message))) ?? '';
 }, {
 message: `[BUG] No aparece el mensaje esperado de bloqueo al eliminar en ${config.menu}.`,
 timeout: 12_000,
 })
 .not.toBe('');

 const rows = page.locator('table tbody tr');
 const count = await rows.count();
 let stillVisible = false;
 for (let index = 0; index < count; index += 1) {
 const text = normalizeEditText((await rows.nth(index).innerText().catch(() => '')).trim());
 if (text === originalText) {
 stillVisible = true;
 break;
 }
 }

 expect(stillVisible, `[BUG] La fila de ${config.menu} desapareció de la tabla a pesar del bloqueo esperado de eliminación.`).toBe(true);
}
