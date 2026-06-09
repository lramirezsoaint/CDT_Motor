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
  return `Q${randomLetters(3)}`;
}

function buildNombre() {
  return `LINEA QA ${randomLetters(4)}`;
}

test.describe('@comunes @critical @E35-C-01.1', () => {
  test('@critical @comunes @E35-C-01.1 debe agregar una nueva Línea desde el modal de alta', async ({ page }) => {
    test.setTimeout(300_000);

    const dialog = await openPositiveAddDialog(page, 'Líneas', 'comunes/lineas', /agregar l[ií]nea/i);

    const codigoField = await findField(dialog, ['codigo']);
    const nombreField = await findField(dialog, ['nombre']);
    const negocioField = await findField(dialog, ['negocio']);
    const estadoField = await findField(dialog, ['estado']);

    const codigo = buildCodigo();
    const nombre = buildNombre();

    await fillTextField(codigoField, codigo);
    await fillTextField(nombreField, nombre);

    const negocio = await selectComboboxOption(page, negocioField, {
      preferredPattern: /generales|vida/i,
    });
    const estado = (await currentFieldValue(estadoField)) || (await selectComboboxOption(page, estadoField, { preferredPattern: /activo/i }));

    await clickFinalAdd(dialog);
    await expectAddSuccess(page, dialog, 'Líneas');

    await expect
      .poll(async () => await findRowContaining(page, [codigo, nombre, negocio, estado]), {
        message: '[BUG] La tabla de Líneas no refleja el nuevo registro agregado.',
        timeout: 20_000,
      })
      .toBeTruthy();

    const matchedRow = await findRowContaining(page, [codigo, nombre, negocio, estado]);
    expect(matchedRow, '[BUG] No se encontró la fila creada en la tabla de Líneas.').toBeTruthy();

    const headers = await getTableHeaders(page);
    const modificadoIndex = findHeaderIndex(headers, [/^modificado$/i]);
    if (modificadoIndex >= 0) {
      const cells = (await matchedRow!.locator('td').allTextContents()).map((value) => value.trim());
      expect(
        normalizeEditText(cells[modificadoIndex] ?? ''),
        '[BUG] La fila creada en Líneas no registra fecha y hora de modificación.',
      ).not.toBe('');
    }
  });
});
