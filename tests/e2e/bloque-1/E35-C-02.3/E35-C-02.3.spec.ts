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

type CanalSnapshot = {
  codigo: string;
  nombre: string;
  estado: string;
};

async function openCanalesView(page: Page) {
  await goToComunesView(page, 'Canales', 'comunes/canales');
  await expect(page.locator('table').first(), '[BUG] La tabla de Canales no se renderiza al ingresar a la vista.').toBeVisible({
    timeout: 20_000,
  });
}

async function firstCanalSnapshot(page: Page): Promise<CanalSnapshot> {
  const headers = await getTableHeaders(page);
  const codigoIndex = findHeaderIndex(headers, [/^codigo$/i]);
  const nombreIndex = findHeaderIndex(headers, [/^nombre$/i]);
  const estadoIndex = findHeaderIndex(headers, [/^estado$/i]);

  const row = page.locator('table tbody tr').first();
  await expect(row, '[DATA] No hay registros en Canales para validar duplicidad.').toBeVisible({ timeout: 20_000 });
  const cells = (await row.locator('td').allTextContents()).map((value) => value.trim());

  return {
    codigo: cells[codigoIndex] ?? '',
    nombre: cells[nombreIndex] ?? '',
    estado: estadoIndex >= 0 ? cells[estadoIndex] ?? '' : 'Activo',
  };
}

test.describe('@comunes @critical @E35-C-02.3', () => {
  test('@critical @comunes @E35-C-02.3 debe bloquear el alta duplicada de Canales', async ({ page }) => {
    test.setTimeout(300_000);

    await openCanalesView(page);
    const duplicate = await firstCanalSnapshot(page);
    const baselineRowCount = await countTableRows(page);
    const dialog = await openPositiveAddDialog(page, 'Canales', 'comunes/canales', /agregar canal/i);

    const codigoField = await findField(dialog, ['codigo']);
    const nombreField = await findField(dialog, ['nombre']);
    const estadoField = await findField(dialog, ['estado']);

    await fillTextField(codigoField, duplicate.codigo);
    await fillTextField(nombreField, duplicate.nombre);

    const currentEstado = await currentFieldValue(estadoField);
    if (duplicate.estado && normalizeEditText(currentEstado) !== normalizeEditText(duplicate.estado)) {
      await selectExactComboboxOption(page, estadoField, duplicate.estado, { fallbackPattern: /activo|inactivo/i });
    }

    await clickFinalAdd(dialog);
    await expectDuplicateBlocked(page, dialog, 'Canales', baselineRowCount);
  });
});
