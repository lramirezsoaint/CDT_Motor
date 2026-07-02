import { expect } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';

export function normalizeEditText(value: string) {
 return value
 .normalize('NFD')
 .replace(/[\u0300-\u036f]/g, '')
 .replace(/\s+/g, ' ')
 .toLowerCase()
 .trim();
}

export function compactEditKey(value: string) {
 return normalizeEditText(value).replace(/\s+/g, '');
}

export function randomLetters(length: number) {
 const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
}

export function randomDigits(length: number) {
 return Array.from({ length }, () => Math.floor(Math.random() * 10).toString()).join('');
}

export function buildEditCodigo(previousValue: string) {
 let candidate = '';

 do {
 candidate = `${randomLetters(4)}${randomDigits(4)}`;
 } while (normalizeEditText(candidate) === normalizeEditText(previousValue));

 return candidate;
}

export function buildEditNombre(previousValue: string, fallback = 'Registro QA', maxLength = 80) {
 const suffix = `${randomLetters(2)}${randomDigits(2)}`;
 const seed = previousValue.trim() || fallback;
 return `${seed} ${suffix}`.slice(0, maxLength);
}

export async function currentFieldValue(field: Locator) {
 const tagName = await field.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
 if (tagName === 'input' || tagName === 'textarea') {
 return (await field.inputValue().catch(() => '')).trim();
 }

 return ((await field.textContent().catch(() => '')) ?? '').trim();
}

export async function openEditDialog(page: Page, row: Locator, keywordPattern: RegExp) {
 const editButton = row.locator('td:last-child button').first();
 await expect(editButton, '[BUG] No se abre el modal de edición porque la fila no muestra el icono de lápiz.').toBeVisible({
 timeout: 10_000,
 });
 await editButton.click();

 const dialog = page
 .getByRole('dialog')
 .filter({ has: page.getByText(keywordPattern) })
 .last();
 const fallbackDialog = page.getByRole('dialog').last();
 const targetDialog = (await dialog.isVisible().catch(() => false)) ? dialog : fallbackDialog;

 await expect(targetDialog, '[BUG] No se abre el modal de edición.').toBeVisible({ timeout: 10_000 });
 await expect(targetDialog, '[BUG] El modal abierto no corresponde al flujo esperado.').toContainText(keywordPattern, {
 timeout: 10_000,
 });

 return targetDialog;
}

export async function findField(dialog: Locator, labels: string[]) {
 const candidates: Locator[] = [];

 for (const label of labels) {
 const pattern = new RegExp(label, 'i');
 const compactLabel = compactEditKey(label);
 const labelAnchors = [
 dialog.locator('label').filter({ hasText: pattern }).first(),
 dialog.locator('div, span, p').filter({ hasText: pattern }).first(),
 ];

 candidates.push(dialog.getByLabel(pattern).first());
 candidates.push(dialog.getByRole('textbox', { name: pattern }).first());
 candidates.push(dialog.getByRole('combobox', { name: pattern }).first());
 candidates.push(
 dialog
 .locator(
 `input[id*="${label}" i], input[name*="${label}" i], [data-testid*="${label}" i], button[id*="${label}" i], button[name*="${label}" i], ` +
 `input[id*="${compactLabel}" i], input[name*="${compactLabel}" i], [data-testid*="${compactLabel}" i], button[id*="${compactLabel}" i], button[name*="${compactLabel}" i]`,
 )
 .first(),
 );

 for (const anchor of labelAnchors) {
 candidates.push(anchor.locator('xpath=following::input[1]'));
 candidates.push(anchor.locator('xpath=following::*[@role="combobox"][1]'));
 candidates.push(anchor.locator('xpath=following::button[1]'));
 candidates.push(anchor.locator('xpath=ancestor::div[1]//*[self::input or self::button or @role="combobox"][1]'));
 candidates.push(anchor.locator('xpath=ancestor::div[2]//*[self::input or self::button or @role="combobox"][1]'));
 }
 }

 for (const candidate of candidates) {
 if ((await candidate.count().catch(() => 0)) === 0) continue;
 if (await candidate.isVisible().catch(() => false)) return candidate;
 }

 throw new Error(`[BUG] No se encontró el control del campo ${labels.join(' / ')} en el modal de edición.`);
}

export async function fillTextField(field: Locator, nextValue: string) {
 await expect(field).toBeVisible({ timeout: 10_000 });
 await expect(field).toBeEnabled({ timeout: 10_000 });
 await field.fill('');
 await field.fill(nextValue);
 await expect(field).toHaveValue(nextValue);
}

export async function fillIfEditable(field: Locator, nextValue: string) {
 if (!(await field.isEnabled().catch(() => false))) {
 return null;
 }

 await fillTextField(field, nextValue);
 return await currentFieldValue(field);
}

export async function selectDifferentOption(page: Page, field: Locator, currentValue: string) {
 await expect(field).toBeVisible({ timeout: 10_000 });
 await expect(field).toBeEnabled({ timeout: 10_000 });
 await field.click();

 const options = page.locator('[role="option"], [role="listbox"] li');
 await expect(options.first(), '[BUG] El selector no despliega opciones visibles para completar la edición.').toBeVisible({
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

 const nextOption = optionTexts.find((option) => normalizeEditText(option) !== normalizeEditText(currentValue));
 expect(nextOption, `[BUG] El selector no ofrece una opción distinta a "${currentValue}" para validar la edición.`).toBeTruthy();

 await page.getByRole('option', { name: new RegExp(`^\\s*${nextOption}\\s*$`, 'i') }).first().click();
 await expect.poll(async () => normalizeEditText(await currentFieldValue(field))).toContain(normalizeEditText(nextOption!));

 return nextOption!;
}

export async function selectDifferentOptionIfEditable(page: Page, field: Locator, currentValue: string) {
 if (!(await field.isEnabled().catch(() => false))) {
 return null;
 }

 return await selectDifferentOption(page, field, currentValue);
}
