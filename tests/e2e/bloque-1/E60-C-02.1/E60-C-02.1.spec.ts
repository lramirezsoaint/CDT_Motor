import { expect, test } from '@fixtures/base.fixture';
import { goToComunesView } from '../_shared/comunes-upload';
import {
 collectColumnOptionStates,
 getColumnOption,
 normalizeColumnsText,
 openColumnsMenu,
 tableHeaderTexts,
} from '../_shared/comunes-columns';

function headerMatchesLabel(actualHeader: string, expectedLabel: string) {
 const normalizedHeader = normalizeColumnsText(actualHeader);
 const normalizedLabel = normalizeColumnsText(expectedLabel);

 return normalizedHeader.includes(normalizedLabel) || normalizedLabel.includes(normalizedHeader);
}

function headersContainLabel(headers: string[], expectedLabel: string) {
 return headers.some((header) => headerMatchesLabel(header, expectedLabel));
}

test.describe('@bloque1 @E60-C-02.1 ', () => {
 test('@bloque1 @E60-C-02.1 @columnas debe agregar y quitar columnas opcionales en Unidades de Cuenta - BBA/VFA reflejandolo en tabla', async ({
 page,
 }) => {
 test.setTimeout(300_000);

 let defaultColumnLabels: string[] = [];
 let optionalColumnLabels: string[] = [];
 let baselineHeaders: string[] = [];

 await test.step('QA: ingresar a Distribucion y abrir Comunes > Unidades de Cuenta - BBA/VFA', async () => {
 await goToComunesView(page, 'Unidades de Cuenta - BBA/VFA', 'comunes/unidades-cuenta-bba-vfa').catch(
 async () => {
 await expect(page).toHaveURL(/comunes\/unidades-cuenta-bba-vfa/i, { timeout: 20_000 });
 await expect(
 page.getByRole('heading', { name: /unidades de cuenta.*bba.?vfa/i }),
 '[BUG] La vista Unidades de Cuenta - BBA/VFA no muestra el encabezado esperado despues de la navegacion.',
 ).toBeVisible({ timeout: 20_000 });
 },
 );

 await expect(
 page.locator('table').first(),
 '[BUG] La tabla de Unidades de Cuenta - BBA/VFA no se renderiza al ingresar a la vista.',
 ).toBeVisible({ timeout: 20_000 });
 baselineHeaders = await tableHeaderTexts(page);
 expect(
 baselineHeaders.length,
 '[BUG] La tabla inicial de Unidades de Cuenta - BBA/VFA no expone headers visibles para usar como baseline.',
 ).toBeGreaterThan(0);
 });

 await test.step('QA: abrir Columnas y detectar dinamicamente columnas por defecto y opcionales', async () => {
 const columnMenu = await openColumnsMenu(page);
 const initialStates = await collectColumnOptionStates(columnMenu);
 const defaultColumns = initialStates.filter((option) => option.isDefault);
 const optionalColumns = initialStates.filter((option) => !option.isDefault && !option.disabled);

 expect(
 defaultColumns.length,
 '[BUG] El modal de columnas no identifica columnas marcadas como "Por Defecto" en Unidades de Cuenta - BBA/VFA.',
 ).toBeGreaterThan(0);
 expect(
 optionalColumns.length,
 '[BUG] El modal de columnas no expone columnas opcionales interactuables para validar.',
 ).toBeGreaterThan(0);

 defaultColumnLabels = defaultColumns.map((option) => option.label);
 optionalColumnLabels = optionalColumns.map((option) => option.label);

 for (const option of defaultColumns) {
 expect(
 option.checked,
 `[BUG] Columnas por defecto desaparecen desde el estado inicial del modal. La columna ${option.label} aparece sin seleccionar.`,
 ).toBe(true);
 }

 await columnMenu.getByTestId('table-column-toggle-cancel').click();
 await expect(columnMenu).toBeHidden({ timeout: 10_000 });
 });

 for (const columnName of optionalColumnLabels) {
 await test.step(`QA: marcar la columna opcional ${columnName}, aceptar y validar que aparece en tabla`, async () => {
 const columnMenu = await openColumnsMenu(page);
 const option = await getColumnOption(columnMenu, columnName);

 await expect(
 option,
 `[BUG] No se puede seleccionar columna opcional. No se encontro la columna ${columnName} en el modal.`,
 ).toBeVisible({ timeout: 10_000 });
 expect(
 (await option.getAttribute('aria-disabled')) === 'true',
 `[BUG] No se puede seleccionar columna opcional. La columna ${columnName} aparece deshabilitada.`,
 ).toBe(false);
 await expect(
 option,
 `[BUG] La columna opcional ${columnName} ya aparece seleccionada antes del flujo de agregado.`,
 ).toHaveAttribute('aria-checked', 'false');

 await option.click();
 await expect(
 option,
 `[BUG] No se puede seleccionar columna opcional. La columna ${columnName} no queda marcada en el modal.`,
 ).toHaveAttribute('aria-checked', 'true');

 for (const defaultColumn of defaultColumnLabels) {
 const defaultOption = await getColumnOption(columnMenu, defaultColumn);
 await expect(
 defaultOption,
 `[BUG] Columnas por defecto desaparecen durante la seleccion de ${columnName}. Falta ${defaultColumn} en el modal.`,
 ).toHaveAttribute('aria-checked', 'true');
 }

 const acceptButton = columnMenu.getByTestId('table-column-toggle-accept');
 await expect(
 acceptButton,
 '[BUG] El boton "Aceptar" del modal de columnas no esta disponible para aplicar la seleccion.',
 ).toBeEnabled();
 await acceptButton.click();
 await expect(columnMenu).toBeHidden({ timeout: 10_000 });

 await expect
 .poll(async () => {
 const headers = await tableHeaderTexts(page);
 const baselineVisible = baselineHeaders.every((label) => headersContainLabel(headers, label));
 const optionalVisible = headersContainLabel(headers, columnName);
 return baselineVisible && optionalVisible;
 }, {
 message: `[BUG] Columna seleccionada no aparece en la tabla tras marcar ${columnName}.`,
 timeout: 20_000,
 })
 .toBe(true);
 });

 await test.step(`QA: desmarcar la columna opcional ${columnName}, aceptar y validar que desaparece de tabla`, async () => {
 const columnMenu = await openColumnsMenu(page);
 const option = await getColumnOption(columnMenu, columnName);

 await expect(
 option,
 `[BUG] No se puede volver a localizar la columna opcional ${columnName} para desmarcarla.`,
 ).toBeVisible({ timeout: 10_000 });
 await expect(
 option,
 `[BUG] El estado del checkbox cambia incorrectamente. La columna ${columnName} deberia seguir marcada antes del flujo de desmarcado.`,
 ).toHaveAttribute('aria-checked', 'true');

 await option.click();
 await expect(
 option,
 `[BUG] El estado del checkbox cambia incorrectamente. La columna ${columnName} no se desmarca en el modal.`,
 ).toHaveAttribute('aria-checked', 'false');

 for (const defaultColumn of defaultColumnLabels) {
 const defaultOption = await getColumnOption(columnMenu, defaultColumn);
 await expect(
 defaultOption,
 `[BUG] Columnas por defecto desaparecen durante el desmarcado de ${columnName}. Falta ${defaultColumn} en el modal.`,
 ).toHaveAttribute('aria-checked', 'true');
 }

 const acceptButton = columnMenu.getByTestId('table-column-toggle-accept');
 await expect(acceptButton).toBeEnabled();
 await acceptButton.click();
 await expect(columnMenu).toBeHidden({ timeout: 10_000 });

 await expect
 .poll(async () => {
 const headers = await tableHeaderTexts(page);
 const baselineVisible = baselineHeaders.every((label) => headersContainLabel(headers, label));
 const optionalHidden = !headersContainLabel(headers, columnName);
 return baselineVisible && optionalHidden;
 }, {
 message: `[BUG] Inconsistencia entre modal y tabla al quitar la columna ${columnName}.`,
 timeout: 20_000,
 })
 .toBe(true);
 });
 }
 });
});
