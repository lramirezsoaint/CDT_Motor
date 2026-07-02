import { expect, test } from '@fixtures/base.fixture';
import { goToComunesView } from '../_shared/comunes-upload';
import {
 collectColumnOptionStates,
 getColumnOption,
 normalizeColumnsText,
 openColumnsMenu,
 tableHeaderTexts,
 visibleColumnOptionTexts,
} from '../_shared/comunes-columns';

function buildSearchTermFromLabel(label: string) {
 const words = label
 .split(/\s+/)
 .map((value) => value.trim())
 .filter(Boolean);

 const candidate = words.find((word) => normalizeColumnsText(word).length >= 3) ?? label.trim();
 return candidate.slice(0, Math.min(Math.max(candidate.length, 3), 5));
}

test.describe('@bloque1 @E60-C-02.2 ', () => {
 test('@bloque1 @E60-C-02.2 @busqueda debe filtrar columnas correctamente en Unidades de Cuenta - BBA/VFA desde el buscador del modal', async ({
 page,
 }) => {
 test.setTimeout(180_000);

 let targetOptionalColumn = '';
 let searchTerm = '';

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
 });

 await test.step('QA: abrir Columnas y validar estado inicial del buscador y columnas por defecto', async () => {
 const columnMenu = await openColumnsMenu(page);
 const searchInput = columnMenu.getByTestId('table-column-toggle-search');
 const initialStates = await collectColumnOptionStates(columnMenu);
 const defaultColumns = initialStates.filter((option) => option.isDefault);
 const optionalColumns = initialStates.filter((option) => !option.isDefault && !option.disabled);

 await expect(
 searchInput,
 '[BUG] El modal "Columnas" no expone el input de busqueda.',
 ).toBeVisible({ timeout: 10_000 });

 expect(
 defaultColumns.length,
 '[BUG] El modal de columnas no muestra columnas por defecto visibles al abrirse.',
 ).toBeGreaterThan(0);

 for (const option of defaultColumns) {
 expect(
 option.checked,
 `[BUG] Las columnas por defecto no aparecen seleccionadas en el estado inicial. Falta ${option.label}.`,
 ).toBe(true);
 }

 expect(
 optionalColumns.length,
 '[BUG] No aparecen columnas opcionales interactuables para validar el buscador.',
 ).toBeGreaterThan(0);

 targetOptionalColumn = optionalColumns[0].label;
 searchTerm = buildSearchTermFromLabel(targetOptionalColumn);
 });

 await test.step(`QA: buscar "${searchTerm}" y validar que el filtro solo muestra coincidencias`, async () => {
 const columnMenu = page.getByRole('menu').last();
 const searchInput = columnMenu.getByTestId('table-column-toggle-search');
 const totalVisibleBefore = (await visibleColumnOptionTexts(columnMenu)).length;

 await searchInput.fill('');
 await searchInput.fill(searchTerm);

 const visibleOptions = await visibleColumnOptionTexts(columnMenu);
 const normalizedSearchTerm = normalizeColumnsText(searchTerm);

 expect(
 visibleOptions.length,
 `[BUG] No aparecen resultados esperados al buscar "${searchTerm}" en el modal de columnas.`,
 ).toBeGreaterThan(0);

 if (totalVisibleBefore > 1) {
 expect(
 visibleOptions.length,
 `[BUG] El buscador no filtra correctamente. Antes de buscar habia ${totalVisibleBefore} opciones visibles y despues quedaron ${visibleOptions.length}.`,
 ).toBeLessThan(totalVisibleBefore);
 }

 for (const optionText of visibleOptions) {
 expect(
 normalizeColumnsText(optionText).includes(normalizedSearchTerm),
 `[BUG] Se muestran columnas no relacionadas al buscar "${searchTerm}". Valor inesperado: "${optionText}".`,
 ).toBe(true);
 }

 expect(
 visibleOptions.some((optionText) => normalizeColumnsText(optionText) === normalizeColumnsText(targetOptionalColumn)),
 `[BUG] No aparecen resultados esperados. La columna objetivo "${targetOptionalColumn}" no se muestra al buscar "${searchTerm}".`,
 ).toBe(true);
 });

 await test.step('QA: seleccionar una columna filtrada y validar que el checkbox cambia de estado', async () => {
 const columnMenu = page.getByRole('menu').last();
 const option = await getColumnOption(columnMenu, targetOptionalColumn);

 await expect(
 option,
 `[BUG] No se puede interactuar con columnas filtradas. No se encontro ${targetOptionalColumn} dentro del resultado filtrado.`,
 ).toBeVisible({ timeout: 10_000 });

 const checkedBefore = (await option.getAttribute('aria-checked')) === 'true';
 expect(
 (await option.getAttribute('aria-disabled')) === 'true',
 `[BUG] No se puede interactuar con columnas filtradas. La columna ${targetOptionalColumn} aparece deshabilitada.`,
 ).toBe(false);

 await option.click();
 await expect(
 option,
 `[BUG] No se puede interactuar con columnas filtradas. El checkbox de ${targetOptionalColumn} no cambia de estado correctamente.`,
 ).toHaveAttribute('aria-checked', checkedBefore ? 'false' : 'true');
 });

 await test.step('QA: aceptar cambios y validar que la tabla sigue visible sin romper la UI', async () => {
 const columnMenu = page.getByRole('menu').last();
 const acceptButton = columnMenu.getByTestId('table-column-toggle-accept');

 await expect(
 acceptButton,
 '[BUG] El boton "Aceptar" del modal de columnas no esta disponible despues de usar el buscador.',
 ).toBeEnabled();
 await acceptButton.click();
 await expect(columnMenu).toBeHidden({ timeout: 10_000 });

 await expect(
 page.locator('table').first(),
 '[BUG] La UI se rompe despues de aceptar cambios desde el buscador del modal de columnas.',
 ).toBeVisible({ timeout: 20_000 });

 const headers = await tableHeaderTexts(page);
 expect(
 headers.length,
 '[BUG] La tabla deja de mostrar headers despues de aplicar cambios desde el buscador del modal.',
 ).toBeGreaterThan(0);
 });
 });
});
