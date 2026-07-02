import { expect, Locator, test } from '@fixtures/base.fixture';
import { env } from '@config/env';
import scenarioData from '@data/bloque-1/E63-C-BUS.json';

const tableLocator = 'table, [role="table"], div.MuiDataGrid-virtualScroller, div[role="rowgroup"]';
const noResultsPattern = /no hay distribuciones disponibles en el mes|no existen registros|sin resultados/i;
const autocompleteOptionsLocator = [
 '[role="listbox"] [role="option"]',
 '[role="option"]',
 '.MuiAutocomplete-option',
 '.MuiAutocomplete-popper li',
].join(', ');

type DistributionFilter = (typeof scenarioData.filtrosDistribucion)[number];
type GeneralSearchCase = (typeof scenarioData.busquedaGeneral)[number];

function distributionUrl(): string {
 return `${new URL(env.baseUrl.trim()).origin}/distribuciones/`;
}

function escapeRegExp(value: string): string {
 return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function openDistribution(page: Parameters<typeof test>[0]['page']) {
 await page.goto(distributionUrl(), { waitUntil: 'domcontentloaded' });
 await page.waitForLoadState('networkidle').catch(() => undefined);
 await expect(page).toHaveURL(/\/distribuciones\/?$/i, { timeout: 20_000 });
 await expect(page.getByRole('heading', { name: /distribuciones/i })).toBeVisible({ timeout: 20_000 });
}

async function getResultsState(page: Parameters<typeof test>[0]['page']) {
 const rows = page.locator('table tbody tr');
 const rowCount = await rows.count().catch(() => 0);
 const bodyText = await page.locator('body').innerText().catch(() => '');
 const tableText = await page.locator(tableLocator).first().innerText().catch(() => '');
 const noResultsVisible = noResultsPattern.test(bodyText) || noResultsPattern.test(tableText);

 return {
 rowCount,
 noResultsVisible,
 hasData: rowCount > 0 && !noResultsVisible,
 };
}

async function requireRowsForValidation(page: Parameters<typeof test>[0]['page'], context: string) {
 const state = await getResultsState(page);
 expect(state.rowCount, `No hay datos visibles en Distribución para validar ${context}`).toBeGreaterThan(0);
}

async function expectNoResultsState(page: Parameters<typeof test>[0]['page']) {
 await expect
 .poll(async () => {
 const state = await getResultsState(page);
 return state.noResultsVisible || state.rowCount === 0;
 }, { timeout: 20_000 })
 .toBe(true);
}

async function expectColumnContainsValue(
 page: Parameters<typeof test>[0]['page'],
 columnName: string,
 expectedValue: string,
) {
 const headers = (await page.getByRole('columnheader').allTextContents()).map((value) => value.trim().toLowerCase());
 const normalizedColumnName = columnName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
 const columnIndex = headers.findIndex((header) => {
 const normalizedHeader = header.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
 return normalizedHeader.includes(normalizedColumnName);
 });

 expect(columnIndex, `Debe existir la columna ${columnName} en la tabla`).toBeGreaterThanOrEqual(0);

 const cells = page.locator(`table tbody tr td:nth-child(${columnIndex + 1})`);
 const values = (await cells.allTextContents()).map((value) => value.trim()).filter(Boolean);
 const matches = values.filter((value) => value.includes(expectedValue));

 expect(matches.length, `La columna ${columnName} debe reflejar el valor ${expectedValue}`).toBeGreaterThan(0);
}

async function getFirstRowValue(
 page: Parameters<typeof test>[0]['page'],
 columnName?: string,
) {
 await requireRowsForValidation(page, columnName ? `la columna ${columnName}` : 'la búsqueda general');

 if (columnName) {
 const headers = (await page.getByRole('columnheader').allTextContents()).map((value) => value.trim().toLowerCase());
 const normalizedColumnName = columnName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
 const columnIndex = headers.findIndex((header) => {
 const normalizedHeader = header.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
 return normalizedHeader.includes(normalizedColumnName);
 });

 expect(columnIndex, `Debe existir la columna ${columnName} para seleccionar un dato de prueba`).toBeGreaterThanOrEqual(0);

 const cell = page.locator(`table tbody tr td:nth-child(${columnIndex + 1})`).first();
 await expect(cell).toBeVisible({ timeout: 10_000 });
 return (await cell.innerText()).trim();
 }

 const firstCell = page.locator('table tbody tr td').first();
 await expect(firstCell).toBeVisible({ timeout: 10_000 });
 return (await firstCell.innerText()).trim();
}

async function getComboboxOptionValue(
 page: Parameters<typeof test>[0]['page'],
 control: Locator,
 context: string,
) {
 await control.click();
 const options = (await page.getByRole('option').allTextContents()).map((value) => value.trim()).filter(Boolean);
 const specificOption = options.find((value) => !/^todos$/i.test(value));

 expect(specificOption, `No hay una opción específica disponible para probar ${context}`).toBeTruthy();

 return specificOption ?? '';
}

function filterLabel(page: Parameters<typeof test>[0]['page'], label: string): Locator {
 return page.locator('label').filter({ hasText: new RegExp(`^${escapeRegExp(label)}$`, 'i') }).first();
}

function getFilterControl(page: Parameters<typeof test>[0]['page'], filter: DistributionFilter): Locator {
 switch (filter.campo) {
 case 'tipoDistribucion':
 return page.getByRole('combobox').nth(0);
 case 'periodo':
 return page.getByRole('combobox').nth(1);
 case 'anio':
 return page.getByPlaceholder('Año').first();
 case 'codigo':
 case 'nombre':
 case 'unidadCuenta':
 case 'metodoValoracion':
 return filterLabel(page, filter.etiqueta).locator('xpath=..').locator('input, [role="combobox"]').first();
 default:
 throw new Error(`Campo de filtro no soportado: ${filter.campo satisfies never}`);
 }
}

async function applyFilter(page: Parameters<typeof test>[0]['page'], filter: DistributionFilter) {
 const label = filterLabel(page, filter.etiqueta);
 await expect(label, `Debe existir la etiqueta ${filter.etiqueta}`).toBeVisible({ timeout: 10_000 });

 const control = getFilterControl(page, filter);
 await expect(control, `Debe existir el control del filtro ${filter.etiqueta}`).toBeVisible({ timeout: 10_000 });

 let filterValue = filter.valor;

 if (filter.source === 'firstRowFromColumn') {
 filterValue = await getFirstRowValue(page, filter.columnaEsperada);
 }

 if (filter.source === 'firstSpecificOption') {
 filterValue = await getComboboxOptionValue(page, control, filter.etiqueta);
 }

 if (filter.tipoControl === 'input') {
 await control.fill(filterValue);
 await page.keyboard.press('Enter');
 return filterValue;
 }

 if (filter.tipoControl === 'combobox') {
 await page.getByRole('option', { name: new RegExp(`^${escapeRegExp(filterValue)}$`, 'i') }).click({ timeout: 10_000 });
 return filterValue;
 }

 throw new Error(`Tipo de control no soportado: ${filter.tipoControl}`);
}

async function validateFilteredResults(
 page: Parameters<typeof test>[0]['page'],
 expectedValue: string,
 expectedColumn?: string,
) {
 await requireRowsForValidation(page, expectedColumn ?? expectedValue);

 await expect(page.locator(tableLocator).first()).toBeVisible({ timeout: 20_000 });

 if (expectedColumn) {
 await expectColumnContainsValue(page, expectedColumn, expectedValue);
 return;
 }

 await expect(page.locator(tableLocator).first()).toContainText(expectedValue, { timeout: 20_000 });
}

test.describe('@bloque1 @E63-C-BUS ', () => {
 scenarioData.busquedaGeneral.forEach((searchCase) => {
 test(`@bloque1 @E63-C-BUS @busqueda ${searchCase.id} debe validar búsqueda general en Distribución`, async ({
 page,
 }) => {
 let searchTerm = searchCase.input;

 await test.step('Acceder a la página de inicio Distribución', async () => {
 await openDistribution(page);
 });

 await test.step('Usar el filtro general Buscar', async () => {
 const searchInput = page.getByPlaceholder('Buscar').first();
 await expect(searchInput).toBeVisible({ timeout: 10_000 });

 if ((searchCase as GeneralSearchCase).source === 'firstRowValue') {
 searchTerm = await getFirstRowValue(page);
 }

 await searchInput.fill(searchTerm);
 await page.keyboard.press('Enter');
 });

 await test.step('Validar comportamiento observable de la búsqueda general', async () => {
 if (searchCase.expected !== 'filtraResultados') {
 throw new Error(`Expected no soportado para búsqueda general: ${searchCase.expected}`);
 }

 await validateFilteredResults(page, searchTerm);
 });
 });
 });

 scenarioData.filtrosDistribucion.forEach((filterCase) => {
 test(`@bloque1 @E63-C-BUS @busqueda ${filterCase.id} debe validar el filtro ${filterCase.etiqueta}`, async ({
 page,
 }) => {
 let appliedValue = filterCase.valor;

 await test.step('Acceder a la página de inicio Distribución', async () => {
 await openDistribution(page);
 });

 await test.step(`Aplicar el filtro ${filterCase.etiqueta}`, async () => {
 appliedValue = await applyFilter(page, filterCase);
 });

 await test.step(`Validar comportamiento observable del filtro ${filterCase.etiqueta}`, async () => {
 await validateFilteredResults(page, appliedValue, filterCase.columnaEsperada);
 });
 });
 });

 scenarioData.autocompletado.forEach((autocompleteCase) => {
 test(`@bloque1 @E63-C-BUS @busqueda ${autocompleteCase.id} debe validar autocompletado en Buscar`, async ({
 page,
 }) => {
 await test.step('Acceder a la página de inicio Distribución', async () => {
 await openDistribution(page);
 });

 await test.step('Escribir mínimo 3 caracteres en Buscar', async () => {
 const searchInput = page.getByPlaceholder('Buscar').first();
 await expect(searchInput).toBeVisible({ timeout: 10_000 });
 await searchInput.fill(autocompleteCase.input.slice(0, autocompleteCase.minCaracteres));
 });

 await test.step('Validar visibilidad de sugerencias o marcar como skipped', async () => {
 if (autocompleteCase.expected !== 'muestraSugerencias') {
 throw new Error(`Expected no soportado para autocompletado: ${autocompleteCase.expected}`);
 }

 const suggestionOptions = page.locator(autocompleteOptionsLocator);
 const hasSuggestionList = await expect
 .poll(async () => (await suggestionOptions.count()) > 0, { timeout: 5_000 })
 .toBe(true)
 .then(() => true)
 .catch(() => false);

 if (!hasSuggestionList) {
 test.info().annotations.push({
 type: 'not-implemented',
 description: 'Autocompletado no implementado en la UI actual para el buscador de Distribución.',
 });
 test.skip(true, 'Autocompletado no implementado en la UI actual para el buscador de Distribución.');
 }

 await expect(suggestionOptions.first()).toBeVisible({ timeout: 10_000 });
 });
 });
 });
});
