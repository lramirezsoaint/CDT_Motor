import { expect, Locator, test } from '@fixtures/base.fixture';
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

const cuentaValidationPattern = /cuenta contable debe tener formato/i;

function buildValidCuenta() {
  return '56.1.4.AB.UZ.05';
}

function expectedAtribuibleTableValue(value: string) {
  const normalized = normalizeEditText(value);
  if (normalized.includes('no')) return 'no';
  if (normalized.includes('atri')) return 'si';
  return normalized;
}

async function stabilizeCuentaIfNeeded(dialog: Locator) {
  const cuentaField = await findField(dialog, ['cuenta']).catch(() => null);
  if (!cuentaField) return null;

  const dialogText = await dialog.innerText().catch(() => '');
  if (!cuentaValidationPattern.test(normalizeEditText(dialogText))) {
    return null;
  }

  const digitoField = await findField(dialog, ['digito de cuenta', 'dígito de cuenta']).catch(() => null);
  const cuenta = buildValidCuenta();
  await fillTextField(cuentaField, cuenta);
  if (digitoField && (await digitoField.isEnabled().catch(() => false))) {
    await fillTextField(digitoField, '56');
  }
  return cuenta;
}

test.describe('@comunes @critical @E35-C-01.5', () => {
  test('@critical @comunes @E35-C-01.5 debe agregar una nueva Configuración de Parches desde el modal de alta', async ({
    page,
  }) => {
    test.setTimeout(360_000);

    const dialog = await openPositiveAddDialog(page, 'Configuración de Parches', 'comunes/configuracion-parches', /agregar parche/i);

    const atribuableField = await findField(dialog, ['atribuible']).catch(() => null);
    const tipoGastoField = await findField(dialog, ['tipo de gasto']);
    const gaGmField = await findField(dialog, ['ga/gm']).catch(() => null);
    const uoaAntesField = await findField(dialog, ['uoa antes']);
    const uoaDespuesField = await findField(dialog, ['uoa después', 'uoa despues']);
    const porcentajeField = await findField(dialog, ['porcentaje %', 'porcentaje']);
    const estadoField = await findField(dialog, ['estado']).catch(() => null);

    const atribuable = atribuableField ? await selectComboboxOption(page, atribuableField, { preferredPattern: /atri/i }) : '';
    const tipoGasto = await selectComboboxOption(page, tipoGastoField);
    const gaGm = gaGmField ? await selectComboboxOption(page, gaGmField) : '';
    const uoaAntes = await selectComboboxOption(page, uoaAntesField);
    const uoaDespues = await selectComboboxOption(page, uoaDespuesField, {
      excludeNormalized: [uoaAntes],
    });
    const estado =
      (estadoField ? await currentFieldValue(estadoField) : '') ||
      (estadoField ? await selectComboboxOption(page, estadoField, { preferredPattern: /activo/i }) : '');

    await fillTextField(porcentajeField, '100');

    const cuentaCorregida = await stabilizeCuentaIfNeeded(dialog);
    if (cuentaCorregida) {
      test.info().annotations.push({
        type: 'cuenta-regularizada',
        description: `Se llenó Cuenta con ${cuentaCorregida} para cumplir la validación del modal de alta.`,
      });
    }

    await clickFinalAdd(dialog);
    await expectAddSuccess(page, dialog, 'Configuración de Parches');

    await expect
      .poll(async () => await findRowContaining(page, [tipoGasto, uoaAntes, uoaDespues, '100']), {
        message: '[BUG] La tabla de Configuración de Parches no refleja el nuevo registro agregado.',
        timeout: 20_000,
      })
      .toBeTruthy();

    const matchedRow = await findRowContaining(page, [tipoGasto, uoaAntes, uoaDespues, '100']);
    expect(matchedRow, '[BUG] No se encontró la fila creada en la tabla de Configuración de Parches.').toBeTruthy();

    const rowText = normalizeEditText((await matchedRow!.innerText()).trim());
    if (atribuable) {
      expect(rowText, '[BUG] La tabla de Configuración de Parches no refleja el valor de Atribuible.').toContain(
        expectedAtribuibleTableValue(atribuable),
      );
    }
    if (gaGm) {
      expect(rowText, '[BUG] La tabla de Configuración de Parches no refleja el valor de GA/GM.').toContain(
        normalizeEditText(gaGm),
      );
    }
    if (estado) {
      expect(rowText, '[BUG] La tabla de Configuración de Parches no refleja el estado del nuevo registro.').toContain(
        normalizeEditText(estado),
      );
    }

    const headers = await getTableHeaders(page);
    const modificadoIndex = findHeaderIndex(headers, [/^modificado$/i]);
    if (modificadoIndex >= 0) {
      const cells = (await matchedRow!.locator('td').allTextContents()).map((value) => value.trim());
      expect(
        normalizeEditText(cells[modificadoIndex] ?? ''),
        '[BUG] La fila creada en Configuración de Parches no registra fecha y hora de modificación.',
      ).not.toBe('');
    }
  });
});
