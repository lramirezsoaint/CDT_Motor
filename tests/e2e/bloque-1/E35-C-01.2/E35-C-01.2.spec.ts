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
  return `PRODUCTO QA ${randomLetters(4)}`;
}

test.describe('@comunes @critical @E35-C-01.2', () => {
  test('@critical @comunes @E35-C-01.2 debe agregar un nuevo Grupo Producto desde el modal de alta', async ({ page }) => {
    test.setTimeout(300_000);

    const dialog = await openPositiveAddDialog(page, 'Grupo Producto', 'comunes/grupo-producto', /agregar grupo producto|agregar producto/i);

    const codigoField = await findField(dialog, ['codigo']);
    const nombreField = await findField(dialog, ['nombre']);
    const codigoLineaField = await findField(dialog, ['codigo linea']);
    const nombreLineaField = await findField(dialog, ['nombre linea']);
    const metodoValoracionField = await findField(dialog, ['metodo de valoracion', 'valoracion']);
    const estadoField = await findField(dialog, ['estado']);

    const codigoLinea = await selectComboboxOption(page, codigoLineaField);
    await expect(nombreLineaField, '[BUG] Nombre Línea debe ser autocompletado y no editable manualmente.').toBeDisabled();

    await expect
      .poll(async () => await currentFieldValue(nombreLineaField), {
        message: '[BUG] Nombre Línea no se autocompleta al seleccionar Código Línea en Grupo Producto.',
        timeout: 10_000,
      })
      .not.toBe('');
    const nombreLinea = await currentFieldValue(nombreLineaField);

    const codigo = `${codigoLinea.replace(/\s+/g, '').slice(0, 4).toUpperCase()}${randomDigits(3)}`;
    const nombre = buildNombre();
    const metodoValoracion = await selectComboboxOption(page, metodoValoracionField);
    const estado = (await currentFieldValue(estadoField)) || (await selectComboboxOption(page, estadoField, { preferredPattern: /activo/i }));

    await fillTextField(codigoField, codigo);
    await fillTextField(nombreField, nombre);

    await clickFinalAdd(dialog);
    await expectAddSuccess(page, dialog, 'Grupo Producto');

    await expect
      .poll(async () => await findRowContaining(page, [codigo, nombre, codigoLinea, nombreLinea as unknown as string, estado]), {
        message: '[BUG] La tabla de Grupo Producto no refleja el nuevo registro agregado.',
        timeout: 20_000,
      })
      .toBeTruthy();

    const matchedRow = await findRowContaining(page, [codigo, nombre, codigoLinea, estado]);
    expect(matchedRow, '[BUG] No se encontró la fila creada en la tabla de Grupo Producto.').toBeTruthy();

    const rowText = normalizeEditText((await matchedRow!.innerText()).trim());
    expect(rowText, '[BUG] La tabla de Grupo Producto no refleja el Método de Valoración seleccionado.').toContain(
      normalizeEditText(metodoValoracion),
    );

    const headers = await getTableHeaders(page);
    const modificadoIndex = findHeaderIndex(headers, [/^modificado$/i]);
    if (modificadoIndex >= 0) {
      const cells = (await matchedRow!.locator('td').allTextContents()).map((value) => value.trim());
      expect(
        normalizeEditText(cells[modificadoIndex] ?? ''),
        '[BUG] La fila creada en Grupo Producto no registra fecha y hora de modificación.',
      ).not.toBe('');
    }
  });
});
