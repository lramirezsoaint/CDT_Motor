import { expect } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import { captureVisibleMessages } from './comunes-add-positive';
import { findCandidateRow, openComunesTable } from './comunes-status-action';
import { normalizeEditText } from './comunes-edit';

const deleteSuccessPattern = /registro eliminado con exito|registro eliminado/i;

export async function executePositiveDelete(page: Page, config: { menu: string; route: string }) {
 await openComunesTable(page, config.menu, config.route);
 const row = await findCandidateRow(page, { preferPatterns: [/\bqa\b/i] });
 const originalText = normalizeEditText((await row.innerText().catch(() => '')).trim());
 const actionButtons = row.locator('td:last-child button');
 await expect(actionButtons.last(), `[BUG] La fila de ${config.menu} no muestra accion de eliminar.`).toBeVisible({ timeout: 10_000 });

 await actionButtons.last().click();
 const dialog = page.getByRole('dialog').last();
 await expect(dialog, `[BUG] No se abre confirmacion de eliminacion en ${config.menu}.`).toBeVisible({ timeout: 10_000 });
 const deleteButton = dialog.getByRole('button', { name: /eliminar|confirmar|aceptar/i }).last();
 await expect(deleteButton, `[BUG] La confirmacion de ${config.menu} no permite eliminar.`).toBeEnabled({ timeout: 10_000 });
 await deleteButton.click();

 await expect
 .poll(async () => {
 const messages = await captureVisibleMessages(page, dialog);
 return messages.find((message) => deleteSuccessPattern.test(normalizeEditText(message))) ?? '';
 }, {
 message: `[BUG] No aparece mensaje de eliminacion exitosa en ${config.menu}.`,
 timeout: 20_000,
 })
 .not.toBe('');

 const rows = page.locator('table tbody tr');
 await expect
 .poll(async () => {
 const count = await rows.count();
 for (let index = 0; index < count; index += 1) {
 const text = normalizeEditText((await rows.nth(index).innerText().catch(() => '')).trim());
 if (text === originalText) return true;
 }
 return false;
 }, {
 message: `[BUG] La fila eliminada en ${config.menu} sigue visible en la tabla.`,
 timeout: 20_000,
 })
 .toBe(false);
}
