import { expect, Page, test } from '@fixtures/base.fixture';
import { currentFieldValue, fillTextField, findField, normalizeEditText } from '../_shared/comunes-edit';
import { goToComunesView } from '../_shared/comunes-upload';
import {
 clickFinalAdd,
 countTableRows,
 expectDuplicateBlocked,
 findHeaderIndex,
 getTableHeaders,
 openPositiveAddDialog,
 selectExactComboboxOption,
} from '../_shared/comunes-add-positive';

type LineaSnapshot = {
 codigo: string;
 nombre: string;
 negocio: string;
 estado: string;
};

async function openLineasView(page: Page) {
 await goToComunesView(page, 'Líneas', 'comunes/lineas');
 await expect(page.locator('table').first(), '[BUG] La tabla de Líneas no se renderiza al ingresar a la vista.').toBeVisible({
 timeout: 20_000,
 });
}

async function firstLineaSnapshot(page: Page): Promise<LineaSnapshot> {
 const headers = await getTableHeaders(page);
 const codigoIndex = findHeaderIndex(headers, [/^codigo$/i]);
 const nombreIndex = findHeaderIndex(headers, [/^nombre$/i]);
 const negocioIndex = findHeaderIndex(headers, [/^negocio$/i]);
 const estadoIndex = findHeaderIndex(headers, [/^estado$/i]);

 expect(codigoIndex, '[BUG] La tabla de Líneas no muestra la columna Código.').toBeGreaterThanOrEqual(0);
 expect(nombreIndex, '[BUG] La tabla de Líneas no muestra la columna Nombre.').toBeGreaterThanOrEqual(0);
 expect(negocioIndex, '[BUG] La tabla de Líneas no muestra la columna Negocio.').toBeGreaterThanOrEqual(0);

 const row = page.locator('table tbody tr').first();
 await expect(row, '[DATA] No hay registros en Líneas para validar duplicidad.').toBeVisible({ timeout: 20_000 });
 const cells = (await row.locator('td').allTextContents()).map((value) => value.trim());

 return {
 codigo: cells[codigoIndex] ?? '',
 nombre: cells[nombreIndex] ?? '',
 negocio: cells[negocioIndex] ?? '',
 estado: estadoIndex >= 0 ? cells[estadoIndex] ?? '' : 'Activo',
 };
}

test.describe('@bloque1 @E35-C-02.1 ', () => {
 test('@bloque1 @E35-C-02.1 @registrar debe bloquear el alta duplicada de Líneas', async ({ page }) => {
 test.setTimeout(300_000);

 await openLineasView(page);
 const duplicate = await firstLineaSnapshot(page);
 const baselineRowCount = await countTableRows(page);
 const dialog = await openPositiveAddDialog(page, 'Líneas', 'comunes/lineas', /agregar l[ií]nea/i);

 const codigoField = await findField(dialog, ['codigo']);
 const nombreField = await findField(dialog, ['nombre']);
 const negocioField = await findField(dialog, ['negocio']);
 const estadoField = await findField(dialog, ['estado']);

 await fillTextField(codigoField, duplicate.codigo);
 await fillTextField(nombreField, duplicate.nombre);
 await selectExactComboboxOption(page, negocioField, duplicate.negocio, { fallbackPattern: /generales|vida/i });

 const currentEstado = await currentFieldValue(estadoField);
 if (duplicate.estado && normalizeEditText(currentEstado) !== normalizeEditText(duplicate.estado)) {
 await selectExactComboboxOption(page, estadoField, duplicate.estado, { fallbackPattern: /activo|inactivo/i });
 }

 await clickFinalAdd(dialog);
 await expectDuplicateBlocked(page, dialog, 'Líneas', baselineRowCount);
 });
});
