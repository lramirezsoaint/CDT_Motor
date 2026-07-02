import { expect } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';

export const defaultMaestroUoaColumns = [
 'Unidad de Cuenta',
 'Met. Valoración',
 'Moneda',
 'Año',
 'Mes',
 'Producto UoA',
 'Bruto Cedido',
];

export function normalizeColumnsText(value: string) {
 return value
 .normalize('NFD')
 .replace(/[\u0300-\u036f]/g, '')
 .replace(/subanal/gi, 'subcanal')
 .toLowerCase()
 .trim();
}

function escapeRegex(value: string) {
 return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export async function getColumnOption(menu: Locator, label: string) {
 const options = menu.getByRole('menuitemcheckbox');
 const target = normalizeColumnsText(label);
 const count = await options.count();

 for (let index = 0; index < count; index += 1) {
 const option = options.nth(index);
 const rawText = await option.innerText();
 const [firstLine] = rawText
 .split('\n')
 .map((value) => value.trim())
 .filter(Boolean);

 if (firstLine && normalizeColumnsText(firstLine) === target) {
 return option;
 }
 }

 return options.filter({ hasText: new RegExp(escapeRegex(label), 'i') }).first();
}

export async function openColumnsMenu(page: Page) {
 const existingMenu = page.getByRole('menu').last();
 if ((await existingMenu.count()) > 0 && (await existingMenu.isVisible().catch(() => false))) {
 return existingMenu;
 }

 const viewButton = page.getByTestId('table-column-toggle-trigger');
 await expect(viewButton, '[BUG] El botón "Ver" para gestionar columnas no está visible en Maestro UoA.').toBeVisible({
 timeout: 15_000,
 });
 await viewButton.click();

 const columnMenu = page.getByRole('menu').last();
 await expect(columnMenu, '[BUG] Modal de columnas no se abre correctamente.').toBeVisible({ timeout: 10_000 });
 await expect(columnMenu, '[BUG] El selector no muestra el título esperado "Columnas".').toContainText(/columnas/i);

 return columnMenu;
}

export async function visibleColumnOptionTexts(menu: Locator) {
 return menu.getByRole('menuitemcheckbox').evaluateAll((nodes) =>
 nodes
 .filter((node) => {
 const style = window.getComputedStyle(node);
 return style.display !== 'none' && style.visibility !== 'hidden';
 })
 .map((node) =>
 (node.textContent || '')
 .split('\n')
 .map((value) => value.trim())
 .filter(Boolean)[0],
 )
 .filter(Boolean),
 );
}

export type ColumnOptionState = {
 label: string;
 normalizedLabel: string;
 checked: boolean;
 disabled: boolean;
 isDefault: boolean;
};

export async function collectColumnOptionStates(menu: Locator) {
 const options = menu.getByRole('menuitemcheckbox');
 const count = await options.count();
 const states: ColumnOptionState[] = [];

 for (let index = 0; index < count; index += 1) {
 const option = options.nth(index);
 await option.scrollIntoViewIfNeeded();

 const rawText = await option.innerText();
 const lines = rawText
 .split('\n')
 .map((value) => value.trim())
 .filter(Boolean);

 const label = lines[0] ?? '';
 const fullText = lines.join(' ');

 states.push({
 label,
 normalizedLabel: normalizeColumnsText(label),
 checked: (await option.getAttribute('aria-checked')) === 'true',
 disabled: (await option.getAttribute('aria-disabled')) === 'true',
 isDefault: normalizeColumnsText(fullText).includes(normalizeColumnsText('Por Defecto')),
 });
 }

 return states.filter((state) => state.label);
}

export async function tableHeaderTexts(page: Page) {
 return (await page.locator('table thead th, [role="columnheader"]').allTextContents())
 .map((value) => value.trim())
 .filter(Boolean);
}

export function headerMatchesColumnLabel(actualHeader: string, expectedLabel: string) {
 const normalizedHeader = normalizeColumnsText(actualHeader);
 const normalizedLabel = normalizeColumnsText(expectedLabel);

 return normalizedHeader.includes(normalizedLabel) || normalizedLabel.includes(normalizedHeader);
}

export function headersContainColumnLabel(headers: string[], expectedLabel: string) {
 return headers.some((header) => headerMatchesColumnLabel(header, expectedLabel));
}

export function missingColumnLabels(headers: string[], expectedLabels: string[]) {
 return expectedLabels.filter((label) => !headersContainColumnLabel(headers, label));
}

async function firstNonEmptyValueInColumn(page: Page, columnIndex: number) {
 const rows = page.locator('table tbody tr');
 const rowCount = await rows.count();

 for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
 const value = (await rows.nth(rowIndex).locator('td').nth(columnIndex).innerText().catch(() => '')).trim();
 if (value) return value;
 }

 return '';
}

export async function expectColumnVisibleInTable(page: Page, columnName: string) {
 await expect
 .poll(async () => await tableHeaderTexts(page), {
 message: `[BUG] La columna ${columnName} no aparece en la tabla tras seleccionarla.`,
 timeout: 20_000,
 })
 .toContain(columnName);

 const headers = await tableHeaderTexts(page);
 const targetColumnIndex = headers.findIndex((header) => normalizeColumnsText(header) === normalizeColumnsText(columnName));

 expect(
 targetColumnIndex,
 `[BUG] La columna ${columnName} no aparece en la tabla tras seleccionarla. Headers actuales: ${headers.join(', ')}.`,
 ).toBeGreaterThanOrEqual(0);

 await expect
 .poll(async () => await firstNonEmptyValueInColumn(page, targetColumnIndex), {
 message: `[BUG] La tabla no muestra datos en la columna ${columnName} después de seleccionarla.`,
 timeout: 20_000,
 })
 .not.toBe('');
}

export async function expectColumnHiddenInTable(page: Page, columnName: string) {
 await expect
 .poll(async () => await tableHeaderTexts(page), {
 message: `[BUG] La columna ${columnName} sigue visible después de deseleccionarla.`,
 timeout: 20_000,
 })
 .not.toContain(columnName);
}
