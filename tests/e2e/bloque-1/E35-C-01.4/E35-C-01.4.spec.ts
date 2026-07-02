import { expect, test } from '@fixtures/base.fixture';
import { currentFieldValue, fillTextField, findField, normalizeEditText } from '../_shared/comunes-edit';
import {
 clickFinalAdd,
 expectAddSuccess,
 findHeaderIndex,
 findRowContaining,
 getTableHeaders,
 openPositiveAddDialog,
 selectComboboxOption,
} from '../_shared/comunes-add-positive';

function randomLetters(length: number) {
 const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
}

function randomDigits(length: number) {
 return Array.from({ length }, () => Math.floor(Math.random() * 10).toString()).join('');
}

function buildNombre() {
 return `SUBCANAL QA ${randomLetters(4)}`;
}

test.describe('@bloque1 @E35-C-01.4 ', () => {
 test('@bloque1 @E35-C-01.4 @registrar debe agregar un nuevo Subcanal desde el modal de alta', async ({ page }) => {
 test.setTimeout(300_000);

 const dialog = await openPositiveAddDialog(page, 'Subcanales', 'comunes/subcanales', /agregar subcanal/i);

 const codigoField = await findField(dialog, ['codigo subcanal', 'codigo']);
 const nombreField = await findField(dialog, ['nombre subcanal', 'nombre']);
 const codigoCanalField = await findField(dialog, ['codigo canal', 'canal']);
 const nombreCanalField = await findField(dialog, ['nombre canal']);
 const estadoField = await findField(dialog, ['estado']);

 const codigoCanal = await selectComboboxOption(page, codigoCanalField);
 await expect(nombreCanalField, '[BUG] Nombre Canal debe ser autocompletado y no editable manualmente.').toBeDisabled();

 await expect
 .poll(async () => await currentFieldValue(nombreCanalField), {
 message: '[BUG] Nombre Canal no se autocompleta al seleccionar Código Canal en Subcanales.',
 timeout: 10_000,
 })
 .not.toBe('');

 const nombreCanal = await currentFieldValue(nombreCanalField);
 const codigo = `${codigoCanal.replace(/\s+/g, '').slice(0, 3).toUpperCase()}${randomDigits(3)}`;
 const nombre = buildNombre();
 const estado = (await currentFieldValue(estadoField)) || (await selectComboboxOption(page, estadoField, { preferredPattern: /activo/i }));

 await fillTextField(codigoField, codigo);
 await fillTextField(nombreField, nombre);

 await clickFinalAdd(dialog);
 await expectAddSuccess(page, dialog, 'Subcanales');

 await expect
 .poll(async () => await findRowContaining(page, [codigo, nombre, codigoCanal, nombreCanal, estado]), {
 message: '[BUG] La tabla de Subcanales no refleja el nuevo registro agregado.',
 timeout: 20_000,
 })
 .toBeTruthy();

 const matchedRow = await findRowContaining(page, [codigo, nombre, codigoCanal, estado]);
 expect(matchedRow, '[BUG] No se encontró la fila creada en la tabla de Subcanales.').toBeTruthy();

 const headers = await getTableHeaders(page);
 const modificadoIndex = findHeaderIndex(headers, [/^modificado$/i]);
 if (modificadoIndex >= 0) {
 const cells = (await matchedRow!.locator('td').allTextContents()).map((value) => value.trim());
 expect(
 normalizeEditText(cells[modificadoIndex] ?? ''),
 '[BUG] La fila creada en Subcanales no registra fecha y hora de modificación.',
 ).not.toBe('');
 }
 });
});
