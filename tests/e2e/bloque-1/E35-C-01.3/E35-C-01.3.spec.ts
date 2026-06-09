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

function buildCodigo() {
  return `Q${randomLetters(2)}`;
}

function buildNombre() {
  return `CANAL QA ${randomLetters(4)}`;
}

test.describe('@comunes @critical @E35-C-01.3', () => {
  test('@critical @comunes @E35-C-01.3 debe agregar un nuevo Canal desde el modal de alta', async ({ page }) => {
    test.setTimeout(300_000);

    const dialog = await openPositiveAddDialog(page, 'Canales', 'comunes/canales', /agregar canal/i);

    const codigoField = await findField(dialog, ['codigo']);
    const nombreField = await findField(dialog, ['nombre']);
    const estadoField = await findField(dialog, ['estado']);

    const codigo = buildCodigo();
    const nombre = buildNombre();
    const estado = (await currentFieldValue(estadoField)) || (await selectComboboxOption(page, estadoField, { preferredPattern: /activo/i }));

    await fillTextField(codigoField, codigo);
    await fillTextField(nombreField, nombre);

    await clickFinalAdd(dialog);
    await expectAddSuccess(page, dialog, 'Canales');

    await expect
      .poll(async () => await findRowContaining(page, [codigo, nombre, estado]), {
        message: '[BUG] La tabla de Canales no refleja el nuevo registro agregado.',
        timeout: 20_000,
      })
      .toBeTruthy();

    const matchedRow = await findRowContaining(page, [codigo, nombre, estado]);
    expect(matchedRow, '[BUG] No se encontró la fila creada en la tabla de Canales.').toBeTruthy();

    const headers = await getTableHeaders(page);
    const modificadoIndex = findHeaderIndex(headers, [/^modificado$/i]);
    if (modificadoIndex >= 0) {
      const cells = (await matchedRow!.locator('td').allTextContents()).map((value) => value.trim());
      expect(
        normalizeEditText(cells[modificadoIndex] ?? ''),
        '[BUG] La fila creada en Canales no registra fecha y hora de modificación.',
      ).not.toBe('');
    }
  });
});
