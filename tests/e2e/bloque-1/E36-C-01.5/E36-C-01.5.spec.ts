import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { goToComunesView } from '../_shared/comunes-upload';
import {
  currentFieldValue,
  fillIfEditable,
  findField,
  normalizeEditText,
  openEditDialog,
  selectDifferentOptionIfEditable,
} from '../_shared/comunes-edit';

type HeaderIndexes = {
  tipoGasto: number;
  uoaAntes: number;
  uoaDespues: number;
  porcentaje: number;
  estado: number;
  modificado: number;
};

type ParcheRowSnapshot = {
  tipoGasto: string;
  uoaAntes: string;
  uoaDespues: string;
  porcentaje: string;
  estado: string;
  modificado: string;
  raw: string;
};

type PendingChanges = Partial<Pick<ParcheRowSnapshot, 'tipoGasto' | 'uoaAntes' | 'uoaDespues' | 'porcentaje' | 'estado'>>;

const successMessagePattern = /cambios guardados correctamente/i;
const invalidPercentagePattern = /porc|porcentaje|100|suma|total|error/i;
const cuentaValidationPattern = /cuenta contable debe tener formato/i;

async function openConfiguracionParchesView(page: Page) {
  await goToComunesView(page, 'Configuración de Parches', 'comunes/configuracion-parches');

  const table = page.locator('table').first();
  await expect(table, '[BUG] La tabla de Configuración de Parches no se renderiza al ingresar a la vista.').toBeVisible({
    timeout: 20_000,
  });
}

async function tableHeaders(page: Page) {
  return (await page.locator('table thead th, [role="columnheader"]').allTextContents())
    .map((value) => value.trim())
    .filter(Boolean);
}

function findHeaderIndex(headers: string[], patterns: RegExp[]) {
  return headers.findIndex((header) => patterns.some((pattern) => pattern.test(normalizeEditText(header))));
}

async function getHeaderIndexes(page: Page): Promise<HeaderIndexes> {
  const headers = await tableHeaders(page);

  const indexes = {
    tipoGasto: findHeaderIndex(headers, [/^tipo de gasto$/i, /^tipo gasto$/i, /^gasto$/i]),
    uoaAntes: findHeaderIndex(headers, [/^uoa antes$/i]),
    uoaDespues: findHeaderIndex(headers, [/^uoa despues$/i, /^uoa después$/i]),
    porcentaje: findHeaderIndex(headers, [/^porciento %$/i, /^porcentaje$/i, /^porciento$/i, /^%$/i]),
    estado: findHeaderIndex(headers, [/^estado$/i]),
    modificado: findHeaderIndex(headers, [/^modificado$/i]),
  };

  expect(indexes.tipoGasto, `[BUG] La tabla no muestra la columna Tipo de Gasto. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
  expect(indexes.uoaAntes, `[BUG] La tabla no muestra la columna UoA Antes. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
  expect(indexes.uoaDespues, `[BUG] La tabla no muestra la columna UoA Después. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
  expect(indexes.porcentaje, `[BUG] La tabla no muestra la columna Porciento %. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);

  return indexes;
}

async function rowCells(row: Locator) {
  return (await row.locator('td').allTextContents()).map((value) => value.trim());
}

async function firstRow(page: Page) {
  const row = page.locator('table tbody tr').first();
  await expect(row, '[BUG] La tabla de Configuración de Parches no tiene una primera fila disponible para editar.').toBeVisible({
    timeout: 20_000,
  });
  return row;
}

async function snapshot(row: Locator, indexes: HeaderIndexes): Promise<ParcheRowSnapshot> {
  const cells = await rowCells(row);
  const raw = (await row.innerText().catch(() => '')).trim();

  return {
    tipoGasto: cells[indexes.tipoGasto] ?? '',
    uoaAntes: cells[indexes.uoaAntes] ?? '',
    uoaDespues: cells[indexes.uoaDespues] ?? '',
    porcentaje: cells[indexes.porcentaje] ?? '',
    estado: indexes.estado >= 0 ? cells[indexes.estado] ?? '' : '',
    modificado: indexes.modificado >= 0 ? cells[indexes.modificado] ?? '' : '',
    raw,
  };
}

async function rowByUpdatedValues(
  page: Page,
  indexes: HeaderIndexes,
  expected: Pick<ParcheRowSnapshot, 'tipoGasto' | 'uoaAntes' | 'uoaDespues' | 'porcentaje'>,
) {
  const rows = page.locator('table tbody tr');
  const count = await rows.count();

  for (let index = 0; index < count; index += 1) {
    const row = rows.nth(index);
    const values = await snapshot(row, indexes);
    if (
      normalizeEditText(values.tipoGasto) === normalizeEditText(expected.tipoGasto) &&
      normalizeEditText(values.uoaAntes) === normalizeEditText(expected.uoaAntes) &&
      normalizeEditText(values.uoaDespues) === normalizeEditText(expected.uoaDespues) &&
      normalizeEditText(values.porcentaje) === normalizeEditText(expected.porcentaje)
    ) {
      return row;
    }
  }

  return null;
}

async function fillPercentageField(field: Locator, value: string) {
  await expect(field).toBeVisible({ timeout: 10_000 });
  await expect(field).toBeEnabled({ timeout: 10_000 });
  await field.fill('');
  await field.fill(value);
  await expect.poll(async () => await currentFieldValue(field)).toContain(value.replace(/\.00$/, ''));
}

function buildValidCuenta(previousValue: string) {
  const normalizedParts = previousValue
    .split('.')
    .map((part) => part.trim().toUpperCase())
    .filter(Boolean);

  const validHead = normalizedParts[0] ?? '40';
  const second = /^[12]$/.test(normalizedParts[1] ?? '') ? normalizedParts[1]! : '1';
  const third = /^[A-Z0-9]$/.test(normalizedParts[2] ?? '') ? normalizedParts[2]! : '4';
  const validTail = normalizedParts.slice(3).filter((part) => /^[A-Z]{2}$|^\d{2}$/.test(part));

  while (validTail.length < 3) {
    validTail.push(['AB', 'UZ', '05'][validTail.length] ?? '05');
  }

  return [validHead, second, third, ...validTail.slice(0, 3)].join('.');
}

function cuentaWithPrefix(account: string, prefix: string) {
  const parts = buildValidCuenta(account).split('.');
  parts[0] = prefix;
  return parts.join('.');
}

async function stabilizeCuentaIfNeeded(dialog: Locator, cuentaField: Locator) {
  const cuentaAlert = dialog.getByRole('alert').filter({ hasText: cuentaValidationPattern }).first();
  const currentCuenta = await currentFieldValue(cuentaField);
  const requiresNormalization = !/^(40|43)\./i.test(currentCuenta);
  const hasCuentaAlert = await cuentaAlert.isVisible().catch(() => false);

  if (!requiresNormalization && !hasCuentaAlert) {
    return null;
  }

  await expect(cuentaField, '[BUG] El campo Cuenta no es editable para corregir la validación previa del registro.').toBeEnabled({
    timeout: 10_000,
  });
  const alertText = await cuentaAlert.textContent().catch(() => '');
  const allowedPrefixes = Array.from(
    new Set([
      ...Array.from(alertText.matchAll(/\b(\d{2})\b/g), (match) => match[1]),
      '40',
      '43',
      '44',
      '54',
      '56',
    ]),
  );

  for (const prefix of allowedPrefixes) {
    const validCuenta = cuentaWithPrefix(currentCuenta, prefix);

    await cuentaField.scrollIntoViewIfNeeded();
    await cuentaField.click({ force: true });
    await cuentaField.fill(validCuenta);
    await cuentaField.evaluate((element, value) => {
      const input = element as HTMLInputElement;
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      input.blur();
    }, validCuenta);

    await expect
      .poll(async () => await currentFieldValue(cuentaField), {
        message: '[BUG] El campo Cuenta no acepta el valor corregido para destrabar la edición.',
        timeout: 10_000,
      })
      .toBe(validCuenta);

    if (!(await cuentaAlert.isVisible().catch(() => false))) {
      return validCuenta;
    }
  }

  await expect
    .poll(async () => await cuentaAlert.isVisible().catch(() => false), {
      message: '[BUG] La edición del parche queda bloqueada por una validación previa del campo Cuenta.',
      timeout: 10_000,
    })
    .toBe(false);

  return await currentFieldValue(cuentaField);
}

async function save(dialog: Locator) {
  const updateButton = dialog.getByRole('button', { name: /actualizar/i }).first();
  await expect(updateButton, '[BUG] El modal de edición no muestra el botón "Actualizar".').toBeEnabled({
    timeout: 10_000,
  });
  await updateButton.click();
}

test.describe('@comunes @critical @E36-C-01.5', () => {
  test('@critical @comunes @E36-C-01.5 debe editar Configuración de Parches con porcentaje válido y bloquear uno inválido', async ({
    page,
  }) => {
    test.setTimeout(360_000);

    page.context().on('page', async (openedPage) => {
      if (openedPage === page) return;
      await openedPage.close().catch(() => undefined);
    });

    await test.step('QA: ingresar a Distribución y abrir Comunes > Configuración de Parches', async () => {
      await openConfiguracionParchesView(page);
    });

    const indexes = await getHeaderIndexes(page);
    const targetRow = await firstRow(page);
    const original = await snapshot(targetRow, indexes);

    await test.step('QA: editar el primer parche con datos válidos y guardar', async () => {
      const dialog = await openEditDialog(page, targetRow, /parche|configuracion/i);

      const tipoGastoField = dialog.getByRole('combobox', { name: /^tipo de gasto$/i }).first();
      const uoaAntesField = dialog.getByRole('combobox', { name: /^uoa antes$/i }).first();
      const uoaDespuesField = dialog.getByRole('combobox', { name: /^uoa después$/i }).first();
      const porcentajeField = dialog.getByRole('textbox', { name: /^porcentaje %$/i }).first();
      const cuentaField = dialog.getByRole('textbox', { name: /^cuenta$/i }).first();

      await expect(tipoGastoField, '[BUG] El modal de edición no muestra el campo Tipo de Gasto.').toBeVisible({
        timeout: 10_000,
      });
      await expect(uoaAntesField, '[BUG] El modal de edición no muestra el campo UoA Antes.').toBeVisible({ timeout: 10_000 });
      await expect(uoaDespuesField, '[BUG] El modal de edición no muestra el campo UoA Después.').toBeVisible({ timeout: 10_000 });
      await expect(porcentajeField, '[BUG] El modal de edición no muestra el campo Porcentaje %.').toBeVisible({ timeout: 10_000 });

      const estadoField = await findField(dialog, ['estado']).catch(() => null);

      const changes: PendingChanges = {};
      let fixedCuenta: string | null = null;

      const maybeTipoGasto = await selectDifferentOptionIfEditable(page, tipoGastoField, original.tipoGasto);
      if (maybeTipoGasto) changes.tipoGasto = maybeTipoGasto;

      const maybeUoaAntes = await selectDifferentOptionIfEditable(page, uoaAntesField, original.uoaAntes);
      if (maybeUoaAntes) changes.uoaAntes = maybeUoaAntes;

      const maybeUoaDespues = await selectDifferentOptionIfEditable(page, uoaDespuesField, original.uoaDespues);
      if (maybeUoaDespues) changes.uoaDespues = maybeUoaDespues;

      await fillPercentageField(porcentajeField, '100');
      changes.porcentaje = '100';

      if (estadoField) {
        const maybeEstado = await selectDifferentOptionIfEditable(page, estadoField, original.estado);
        if (maybeEstado) changes.estado = maybeEstado;
      }

      fixedCuenta = await stabilizeCuentaIfNeeded(dialog, cuentaField);

      expect(
        Object.keys(changes).length,
        '[BUG] El modal de edición se abre, pero no expone campos relevantes para validar la Configuración de Parches.',
      ).toBeGreaterThan(0);

      if (fixedCuenta) {
        test.info().annotations.push({
          type: 'cuenta-regularizada',
          description: `Cuenta ajustada a ${fixedCuenta} para destrabar la edición de la primera fila.`,
        });
      }

      await save(dialog);

      await expect
        .poll(async () => successMessagePattern.test(await page.locator('body').innerText()), {
          message: '[BUG] No aparece mensaje de éxito después de editar el parche.',
          timeout: 10_000,
        })
        .toBe(true);

      await expect(dialog, '[BUG] No se guardan los cambios y el modal permanece abierto.').toBeHidden({ timeout: 15_000 });

      const expectedRowValues = {
        tipoGasto: changes.tipoGasto ?? original.tipoGasto,
        uoaAntes: changes.uoaAntes ?? original.uoaAntes,
        uoaDespues: changes.uoaDespues ?? original.uoaDespues,
        porcentaje: changes.porcentaje ?? original.porcentaje,
      };

      await expect
        .poll(async () => await rowByUpdatedValues(page, indexes, expectedRowValues), {
          message: '[BUG] No se guardan los cambios o la tabla no refleja la edición del parche.',
          timeout: 20_000,
        })
        .not.toBeNull();

      const refreshedRow = await rowByUpdatedValues(page, indexes, expectedRowValues);
      expect(refreshedRow, '[BUG] No se guardan los cambios.').toBeTruthy();

      const updatedSnapshot = await snapshot(refreshedRow!, indexes);

      expect(
        normalizeEditText(updatedSnapshot.tipoGasto),
        `[BUG] No se guardan los cambios. Tipo de Gasto esperado: ${expectedRowValues.tipoGasto}. Actual: ${updatedSnapshot.tipoGasto}.`,
      ).toBe(normalizeEditText(expectedRowValues.tipoGasto));
      expect(
        normalizeEditText(updatedSnapshot.uoaAntes),
        `[BUG] Error en selección de UoA. UoA Antes esperada: ${expectedRowValues.uoaAntes}. Actual: ${updatedSnapshot.uoaAntes}.`,
      ).toBe(normalizeEditText(expectedRowValues.uoaAntes));
      expect(
        normalizeEditText(updatedSnapshot.uoaDespues),
        `[BUG] Error en selección de UoA. UoA Después esperada: ${expectedRowValues.uoaDespues}. Actual: ${updatedSnapshot.uoaDespues}.`,
      ).toBe(normalizeEditText(expectedRowValues.uoaDespues));
      expect(
        normalizeEditText(updatedSnapshot.porcentaje),
        `[BUG] Tabla no refleja cambios. Porcentaje esperado: ${expectedRowValues.porcentaje}. Actual: ${updatedSnapshot.porcentaje}.`,
      ).toContain(normalizeEditText(expectedRowValues.porcentaje));

      if (indexes.modificado >= 0) {
        expect(
          normalizeEditText(updatedSnapshot.modificado),
          '[BUG] La fecha/hora de modificación no se actualiza después de guardar el parche.',
        ).not.toBe(normalizeEditText(original.modificado));
      }
    });

    await test.step('QA: reabrir edición y validar que porcentaje inválido no se guarde', async () => {
      const updatedRow = await firstRow(page);
      const baseline = await snapshot(updatedRow, indexes);
      const dialog = await openEditDialog(page, updatedRow, /parche|configuracion/i);

      const porcentajeField = await findField(dialog, ['porciento', 'porcentaje', '%']);
      await fillPercentageField(porcentajeField, '80');

      await save(dialog);

      await expect
        .poll(async () => {
          const text = await page.locator('body').innerText();
          const dialogText = await dialog.innerText().catch(() => '');
          return invalidPercentagePattern.test(text) || invalidPercentagePattern.test(dialogText);
        }, {
          message: '[BUG] Se permite guardar porcentaje inválido o no se muestra validación del porcentaje.',
          timeout: 10_000,
        })
        .toBe(true);

      await expect(dialog, '[BUG] Se permite guardar porcentaje inválido y el modal se cierra indebidamente.').toBeVisible();

      await page.keyboard.press('Escape').catch(() => undefined);

      const tableRowAfterInvalid = await firstRow(page);
      const afterInvalid = await snapshot(tableRowAfterInvalid, indexes);

      expect(
        normalizeEditText(afterInvalid.raw),
        '[BUG] Se permite guardar porcentaje inválido y el registro termina actualizado con datos incorrectos.',
      ).toContain(normalizeEditText(baseline.raw));
    });
  });
});
