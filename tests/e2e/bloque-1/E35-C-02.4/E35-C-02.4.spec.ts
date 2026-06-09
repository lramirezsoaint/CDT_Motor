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

type SubcanalSnapshot = {
  codigo: string;
  nombre: string;
  codigoCanal: string;
  estado: string;
};

async function openSubcanalesView(page: Page) {
  await goToComunesView(page, 'Subcanales', 'comunes/subcanales');
  await expect(page.locator('table').first(), '[BUG] La tabla de Subcanales no se renderiza al ingresar a la vista.').toBeVisible({
    timeout: 20_000,
  });
}

async function firstSubcanalSnapshot(page: Page): Promise<SubcanalSnapshot> {
  const headers = await getTableHeaders(page);
  const codigoIndex = findHeaderIndex(headers, [/^codigo$/i, /^codigo subcanal$/i]);
  const nombreIndex = findHeaderIndex(headers, [/^subcanal$/i, /^nombre$/i, /^nombre subcanal$/i]);
  const canalIndex = findHeaderIndex(headers, [/^canal$/i, /^codigo canal$/i]);
  const estadoIndex = findHeaderIndex(headers, [/^estado$/i]);

  const row = page.locator('table tbody tr').first();
  await expect(row, '[DATA] No hay registros en Subcanales para validar duplicidad.').toBeVisible({ timeout: 20_000 });
  const cells = (await row.locator('td').allTextContents()).map((value) => value.trim());

  return {
    codigo: cells[codigoIndex] ?? '',
    nombre: cells[nombreIndex] ?? '',
    codigoCanal: cells[canalIndex] ?? '',
    estado: estadoIndex >= 0 ? cells[estadoIndex] ?? '' : 'Activo',
  };
}

test.describe('@comunes @critical @E35-C-02.4', () => {
  test('@critical @comunes @E35-C-02.4 debe bloquear el alta duplicada de Subcanales', async ({ page }) => {
    test.setTimeout(300_000);

    await openSubcanalesView(page);
    const duplicate = await firstSubcanalSnapshot(page);
    const baselineRowCount = await countTableRows(page);
    const dialog = await openPositiveAddDialog(page, 'Subcanales', 'comunes/subcanales', /agregar subcanal/i);

    const codigoField = await findField(dialog, ['codigo subcanal', 'codigo']);
    const nombreField = await findField(dialog, ['nombre subcanal', 'nombre']);
    const codigoCanalField = await findField(dialog, ['codigo canal', 'canal']);
    const estadoField = await findField(dialog, ['estado']);

    await fillTextField(codigoField, duplicate.codigo);
    await fillTextField(nombreField, duplicate.nombre);
    await selectExactComboboxOption(page, codigoCanalField, duplicate.codigoCanal);

    const currentEstado = await currentFieldValue(estadoField);
    if (duplicate.estado && normalizeEditText(currentEstado) !== normalizeEditText(duplicate.estado)) {
      await selectExactComboboxOption(page, estadoField, duplicate.estado, { fallbackPattern: /activo|inactivo/i });
    }

    await clickFinalAdd(dialog);
    await expectDuplicateBlocked(page, dialog, 'Subcanales', baselineRowCount);
  });
});
