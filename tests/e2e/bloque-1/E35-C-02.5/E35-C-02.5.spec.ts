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

type ParcheSnapshot = {
  atribuable: string;
  tipoGasto: string;
  gaGm: string;
  codigoConcepto: string;
  conceptoN1: string;
  conceptoN2: string;
  digitoCuenta: string;
  cuenta: string;
  ramo: string;
  producto: string;
  subcanal: string;
  uoaAntes: string;
  uoaDespues: string;
  porcentaje: string;
};

function tableValueToAtribuible(value: string) {
  const normalized = normalizeEditText(value);
  if (normalized === 'si' || normalized === 'sí') return /atri/i;
  if (normalized.includes('no')) return /no atri/i;
  return new RegExp(normalized, 'i');
}

async function openParchesView(page: Page) {
  await goToComunesView(page, 'Configuración de Parches', 'comunes/configuracion-parches');
  await expect(page.locator('table').first(), '[BUG] La tabla de Configuración de Parches no se renderiza al ingresar a la vista.').toBeVisible({
    timeout: 20_000,
  });
}

async function firstParcheSnapshot(page: Page): Promise<ParcheSnapshot> {
  const headers = await getTableHeaders(page);
  const indexes = {
    tipoGasto: findHeaderIndex(headers, [/^tipo de gasto$/i]),
    atribuable: findHeaderIndex(headers, [/^atribuible$/i]),
    gaGm: findHeaderIndex(headers, [/^ga\/gm$/i]),
    codigoConcepto: findHeaderIndex(headers, [/^cod\.? concepto$/i]),
    conceptoN1: findHeaderIndex(headers, [/^concepto n1$/i]),
    conceptoN2: findHeaderIndex(headers, [/^concepto n2$/i]),
    digitoCuenta: findHeaderIndex(headers, [/^dig\.? cuenta$/i]),
    cuenta: findHeaderIndex(headers, [/^cuenta$/i]),
    ramo: findHeaderIndex(headers, [/^ramo$/i]),
    producto: findHeaderIndex(headers, [/^producto$/i]),
    subcanal: findHeaderIndex(headers, [/^subcanal$/i]),
    uoaAntes: findHeaderIndex(headers, [/^uoa antes$/i]),
    uoaDespues: findHeaderIndex(headers, [/^uoa despu[eé]s$/i]),
    porcentaje: findHeaderIndex(headers, [/^%$/i, /^porcentaje$/i, /^porciento$/i]),
  };

  const row = page.locator('table tbody tr').first();
  await expect(row, '[DATA] No hay registros en Configuración de Parches para validar duplicidad.').toBeVisible({ timeout: 20_000 });
  const best = (await row.locator('td').allTextContents()).map((value) => value.trim());

  return {
    atribuable: best[indexes.atribuable] ?? '',
    tipoGasto: best[indexes.tipoGasto] ?? '',
    gaGm: best[indexes.gaGm] ?? '',
    codigoConcepto: best[indexes.codigoConcepto] ?? '',
    conceptoN1: best[indexes.conceptoN1] ?? '',
    conceptoN2: best[indexes.conceptoN2] ?? '',
    digitoCuenta: best[indexes.digitoCuenta] ?? '',
    cuenta: best[indexes.cuenta] ?? '',
    ramo: best[indexes.ramo] ?? '',
    producto: best[indexes.producto] ?? '',
    subcanal: best[indexes.subcanal] ?? '',
    uoaAntes: best[indexes.uoaAntes] ?? '',
    uoaDespues: best[indexes.uoaDespues] ?? '',
    porcentaje: best[indexes.porcentaje] ?? '',
  };
}

test.describe('@comunes @critical @E35-C-02.5', () => {
  test('@critical @comunes @E35-C-02.5 debe bloquear el alta duplicada de Configuración de Parches', async ({ page }) => {
    test.setTimeout(360_000);

    await openParchesView(page);
    const duplicate = await firstParcheSnapshot(page);
    const baselineRowCount = await countTableRows(page);
    const dialog = await openPositiveAddDialog(page, 'Configuración de Parches', 'comunes/configuracion-parches', /agregar parche/i);

    const atribuableField = await findField(dialog, ['atribuible']).catch(() => null);
    const tipoGastoField = await findField(dialog, ['tipo de gasto']);
    const gaGmField = await findField(dialog, ['ga/gm']).catch(() => null);
    const uoaAntesField = await findField(dialog, ['uoa antes']);
    const uoaDespuesField = await findField(dialog, ['uoa después', 'uoa despues']);
    const porcentajeField = await findField(dialog, ['porcentaje %', 'porcentaje']);

    if (atribuableField && duplicate.atribuable) {
      await selectExactComboboxOption(page, atribuableField, duplicate.atribuable, {
        fallbackPattern: tableValueToAtribuible(duplicate.atribuable),
      });
    }
    await selectExactComboboxOption(page, tipoGastoField, duplicate.tipoGasto);
    if (gaGmField && duplicate.gaGm) {
      await selectExactComboboxOption(page, gaGmField, duplicate.gaGm);
    }
    await selectExactComboboxOption(page, uoaAntesField, duplicate.uoaAntes);
    await selectExactComboboxOption(page, uoaDespuesField, duplicate.uoaDespues);
    await fillTextField(porcentajeField, duplicate.porcentaje);

    await clickFinalAdd(dialog);
    await expectDuplicateBlocked(page, dialog, 'Configuración de Parches', baselineRowCount);
  });
});
