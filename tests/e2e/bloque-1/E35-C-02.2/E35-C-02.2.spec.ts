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

type GrupoSnapshot = {
  codigo: string;
  nombre: string;
  codigoLinea: string;
  metodoValoracion: string;
  estado: string;
};

async function openGrupoView(page: Page) {
  await goToComunesView(page, 'Grupo Producto', 'comunes/grupo-producto');
  await expect(page.locator('table').first(), '[BUG] La tabla de Grupo Producto no se renderiza al ingresar a la vista.').toBeVisible({
    timeout: 20_000,
  });
}

async function firstGrupoSnapshot(page: Page): Promise<GrupoSnapshot> {
  const headers = await getTableHeaders(page);
  const codigoIndex = findHeaderIndex(headers, [/^codigo$/i]);
  const nombreIndex = findHeaderIndex(headers, [/^nombre$/i]);
  const lineaIndex = findHeaderIndex(headers, [/^codigo linea$/i, /^linea$/i]);
  const metodoIndex = findHeaderIndex(headers, [/^met\.? valoracion$/i, /^metodo de valoracion$/i, /^valoracion$/i]);
  const estadoIndex = findHeaderIndex(headers, [/^estado$/i]);

  const row = page.locator('table tbody tr').first();
  await expect(row, '[DATA] No hay registros en Grupo Producto para validar duplicidad.').toBeVisible({ timeout: 20_000 });
  const cells = (await row.locator('td').allTextContents()).map((value) => value.trim());

  return {
    codigo: cells[codigoIndex] ?? '',
    nombre: cells[nombreIndex] ?? '',
    codigoLinea: cells[lineaIndex] ?? '',
    metodoValoracion: metodoIndex >= 0 ? cells[metodoIndex] ?? '' : '',
    estado: estadoIndex >= 0 ? cells[estadoIndex] ?? '' : 'Activo',
  };
}

test.describe('@comunes @critical @E35-C-02.2', () => {
  test('@critical @comunes @E35-C-02.2 debe bloquear el alta duplicada de Grupo Producto', async ({ page }) => {
    test.setTimeout(300_000);

    await openGrupoView(page);
    const duplicate = await firstGrupoSnapshot(page);
    const baselineRowCount = await countTableRows(page);
    const dialog = await openPositiveAddDialog(page, 'Grupo Producto', 'comunes/grupo-producto', /agregar grupo producto|agregar producto/i);

    const codigoField = await findField(dialog, ['codigo']);
    const nombreField = await findField(dialog, ['nombre']);
    const codigoLineaField = await findField(dialog, ['codigo linea']);
    const metodoValoracionField = await findField(dialog, ['metodo de valoracion', 'valoracion']);
    const estadoField = await findField(dialog, ['estado']);

    await fillTextField(codigoField, duplicate.codigo);
    await fillTextField(nombreField, duplicate.nombre);
    await selectExactComboboxOption(page, codigoLineaField, duplicate.codigoLinea);
    if (duplicate.metodoValoracion) {
      await selectExactComboboxOption(page, metodoValoracionField, duplicate.metodoValoracion, {
        fallbackPattern: /paa|bba|vfa/i,
      });
    }

    const currentEstado = await currentFieldValue(estadoField);
    if (duplicate.estado && normalizeEditText(currentEstado) !== normalizeEditText(duplicate.estado)) {
      await selectExactComboboxOption(page, estadoField, duplicate.estado, { fallbackPattern: /activo|inactivo/i });
    }

    await clickFinalAdd(dialog);
    await expectDuplicateBlocked(page, dialog, 'Grupo Producto', baselineRowCount);
  });
});
