import { expect, test } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import { env } from '@config/env';
import scenarioData from '@data/bloque-1/E56-C-01.1.json';

const noResultsPattern = /no existen registros|no hay resultados/i;

function appOrigin() {
 return new URL(env.baseUrl.trim()).origin;
}

function currentPageButton(page: Page) {
 return page.locator('[data-testid^="pagination-page-"][data-variant="default"]').first();
}

async function goToComunesView(page: Page, menuName: string, route: string) {
 await page.goto(`${appOrigin()}/distribuciones/`, { waitUntil: 'domcontentloaded' });
 await page.waitForLoadState('networkidle').catch(() => undefined);

 const comunesToggle = page
 .getByRole('button', { name: /comunes/i })
 .or(page.getByRole('link', { name: /comunes/i }))
 .first();

 await expect(comunesToggle).toBeVisible({ timeout: 15_000 });
 await comunesToggle.click().catch(() => undefined);

 const targetLink = page.getByRole('link', { name: new RegExp(menuName, 'i') }).first();
 await expect(targetLink).toBeVisible({ timeout: 15_000 });
 await targetLink.click();

 await expect(page).toHaveURL(new RegExp(route.replace('/', '\\/'), 'i'), { timeout: 20_000 });
 await page.goto(`${appOrigin()}/${route}/`, { waitUntil: 'domcontentloaded' });
 await page.waitForLoadState('networkidle').catch(() => undefined);
}

async function paginatorControls(page: Page) {
 return {
 size: page.getByTestId('pagination-select-size'),
 first: page.getByTestId('pagination-first'),
 prev: page.getByTestId('pagination-prev'),
 next: page.getByTestId('pagination-next'),
 last: page.getByTestId('pagination-last'),
 };
}

async function hasPaginator(page: Page) {
 return (await page.getByTestId('pagination-select-size').count()) > 0;
}

async function waitForViewContent(page: Page) {
 await expect
 .poll(
 async () => ({
 table: await page.locator('table').count().catch(() => 0),
 paginator: await page.getByTestId('pagination-select-size').count().catch(() => 0),
 }),
 { timeout: 20_000 },
 )
 .toEqual(expect.objectContaining({ table: expect.any(Number), paginator: expect.any(Number) }));
}

async function tableState(page: Page) {
 const rows = page.locator('table tbody tr');
 const rowCount = await rows.count().catch(() => 0);
 const tableText = await page.locator('table').first().innerText().catch(() => '');
 const noData = noResultsPattern.test(tableText);

 return {
 rows,
 rowCount,
 noData,
 };
}

async function visibleDataRows(page: Page) {
 const state = await tableState(page);
 if (state.noData) return 0;
 return state.rowCount;
}

async function captureFirstRowSignature(page: Page) {
 const state = await tableState(page);
 if (state.noData || state.rowCount === 0) return '';
 return (await state.rows.first().innerText()).trim();
}

async function selectRowsPerPage(page: Page, size: number) {
 const controls = await paginatorControls(page);
 await expect(
 controls.size,
 `[BUG] El selector de filas por pagina no esta visible cuando deberia permitir seleccionar ${size} filas.`,
 ).toBeVisible({ timeout: 10_000 });
 await controls.size.click();
 await page.getByRole('option', { name: String(size) }).click({ timeout: 10_000 });
 await expect(
 controls.size,
 `[BUG] El selector de filas por pagina no refleja la opcion elegida. Valor esperado: ${size}.`,
 ).toContainText(String(size), { timeout: 10_000 });
}

async function assertInitialState(page: Page, vistaMenu: string) {
 const controls = await paginatorControls(page);
 await expect(
 controls.first,
 `[BUG] El paginador en ${vistaMenu} habilita "primera pagina" al cargar la vista. En pagina 1 este control debe estar deshabilitado.`,
 ).toBeDisabled();
 await expect(
 controls.prev,
 `[BUG] El paginador en ${vistaMenu} habilita "pagina anterior" al cargar la vista. En pagina 1 este control debe estar deshabilitado.`,
 ).toBeDisabled();

 const activePage = currentPageButton(page);
 await expect(
 activePage,
 `[BUG] El paginador en ${vistaMenu} no muestra una pagina activa al cargar la vista.`,
 ).toBeVisible();
 await expect(
 activePage,
 `[BUG] El paginador en ${vistaMenu} no inicia en la pagina 1. Valor esperado: 1.`,
 ).toHaveText('1');
}

async function assertNoDataState(page: Page, vistaMenu: string) {
 const controls = await paginatorControls(page);
 await expect(
 controls.first,
 `[BUG] El paginador permite ir a la primera pagina en ${vistaMenu} cuando no hay datos.`,
 ).toBeDisabled();
 await expect(
 controls.prev,
 `[BUG] El paginador permite ir a la pagina anterior en ${vistaMenu} cuando no hay datos.`,
 ).toBeDisabled();
 await expect(
 controls.next,
 `[BUG] El paginador permite ir a la pagina siguiente en ${vistaMenu} cuando no hay datos.`,
 ).toBeDisabled();
 await expect(
 controls.last,
 `[BUG] El paginador permite ir a la ultima pagina en ${vistaMenu} cuando no hay datos.`,
 ).toBeDisabled();
 await expect(
 controls.size,
 `[BUG] El selector de filas permanece habilitado en ${vistaMenu} cuando no hay datos.`,
 ).toBeDisabled();
}

async function totalPageButtons(page: Page) {
 return page.locator('[data-testid^="pagination-page-"]').count();
}

test.describe('@bloque1 @E56-C-01.1 ', () => {
 scenarioData.vistas.forEach((vista) => {
 test(`@bloque1 @E56-C-01.1 @paginacion debe validar paginador en ${vista.menu}`, async ({ page }) => {
 await test.step(`Navegar por menu lateral a ${vista.menu}`, async () => {
 await goToComunesView(page, vista.menu, vista.ruta);
 await waitForViewContent(page);
 });

 await test.step('Validar existencia del paginador o registrar no aplica', async () => {
 if (!(await hasPaginator(page))) {
 test.info().annotations.push({
 type: 'no-aplica',
 description: `La vista ${vista.menu} no expone paginador visible en la UI actual.`,
 });
 test.skip(true, `La vista ${vista.menu} no expone paginador visible en la UI actual.`);
 }
 });

 await test.step('Validar estado inicial del paginador', async () => {
 const state = await tableState(page);
 if (state.noData) {
 await assertNoDataState(page, vista.menu);
 return;
 }

 await assertInitialState(page, vista.menu);
 });

 await test.step('Validar selector de filas por pagina', async () => {
 const state = await tableState(page);
 if (state.noData) {
 await assertNoDataState(page, vista.menu);
 return;
 }

 for (const size of scenarioData.filasPorPagina) {
 await selectRowsPerPage(page, size);
 const visibleRows = await visibleDataRows(page);
 expect(
 visibleRows,
 `[BUG] El selector de filas muestra mas elementos de los seleccionados en ${vista.menu}. Valor esperado: maximo ${size} filas visibles. Valor actual: ${visibleRows}.`,
 ).toBeLessThanOrEqual(size);
 }
 });

 await test.step('Validar navegacion a siguiente pagina cuando aplique', async () => {
 const state = await tableState(page);
 if (state.noData) {
 await assertNoDataState(page, vista.menu);
 return;
 }

 await selectRowsPerPage(page, scenarioData.filasPorPagina[0]);
 const pageCount = await totalPageButtons(page);
 if (pageCount <= 1) {
 test.info().annotations.push({
 type: 'no-aplica',
 description: `La vista ${vista.menu} no tiene suficientes registros para validar cambio de pagina.`,
 });
 return;
 }

 const firstRowBefore = await captureFirstRowSignature(page);
 const controls = await paginatorControls(page);
 await expect(
 controls.next,
 `[BUG] El paginador en ${vista.menu} no habilita "siguiente pagina" aunque existen ${pageCount} paginas.`,
 ).toBeEnabled();
 await controls.next.click();

 await expect(
 currentPageButton(page),
 `[BUG] El paginador en ${vista.menu} no cambia a la pagina 2 despues de usar "siguiente pagina".`,
 ).toHaveText('2', { timeout: 10_000 });
 const firstRowAfter = await captureFirstRowSignature(page);
 expect(
 firstRowAfter,
 `[BUG] El paginador en ${vista.menu} no cambia los datos al avanzar de pagina. Valor anterior: "${firstRowBefore}". Valor actual: "${firstRowAfter}".`,
 ).not.toBe(firstRowBefore);
 });

 await test.step('Validar estado de ultima pagina cuando aplique', async () => {
 const state = await tableState(page);
 if (state.noData) {
 await assertNoDataState(page, vista.menu);
 return;
 }

 await selectRowsPerPage(page, scenarioData.filasPorPagina[0]);
 const pageCount = await totalPageButtons(page);
 if (pageCount <= 1) {
 test.info().annotations.push({
 type: 'no-aplica',
 description: `La vista ${vista.menu} no tiene multiples paginas para validar ultima pagina.`,
 });
 return;
 }

 const controls = await paginatorControls(page);
 await expect(
 controls.last,
 `[BUG] El paginador en ${vista.menu} no habilita "ultima pagina" aunque existen ${pageCount} paginas.`,
 ).toBeEnabled();
 await controls.last.click();

 await expect(
 currentPageButton(page),
 `[BUG] El paginador en ${vista.menu} no muestra activa la ultima pagina esperada. Valor esperado: ${pageCount}.`,
 ).toHaveText(String(pageCount), { timeout: 10_000 });
 await expect(
 controls.next,
 `[BUG] El paginador permite navegacion adicional en ${vista.menu} estando ya en la ultima pagina ${pageCount}.`,
 ).toBeDisabled();
 await expect(
 controls.last,
 `[BUG] El boton "ultima pagina" sigue habilitado en ${vista.menu} aun estando en la pagina final ${pageCount}.`,
 ).toBeDisabled();
 });
 });
 });
});
