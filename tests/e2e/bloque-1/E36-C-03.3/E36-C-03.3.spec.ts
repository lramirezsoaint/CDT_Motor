import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { goToComunesView } from '../_shared/comunes-upload';
import { findField, openEditDialog } from '../_shared/comunes-edit';
import {
  clearFieldIfPossible,
  closeDialog,
  expectFieldInvalid,
  invalidFormatPattern,
  normalizeNegativeText,
  requiredMessagePattern,
  tryUpdate,
} from '../_shared/comunes-edit-negative';

type HeaderIndexes = {
  codigo: number;
  nombre: number;
  estado: number;
};

type CanalRowSnapshot = {
  codigo: string;
  nombre: string;
  estado: string;
  raw: string;
};

const ignoredLabelsPattern = /^codigo$|^nombre$|^estado$|^actualizar$|^cancelar$/i;

function normalizeText(value: string) {
  return normalizeNegativeText(value);
}

async function openCanalesView(page: Page) {
  await goToComunesView(page, 'Canales', 'comunes/canales').catch(async () => {
    await expect(page).toHaveURL(/comunes\/canales/i, { timeout: 20_000 });
  });

  await expect(page.locator('table').first(), '[BUG] La tabla de Canales no se renderiza al ingresar a la vista.').toBeVisible({
    timeout: 20_000,
  });
}

async function getHeaderIndexes(page: Page): Promise<HeaderIndexes> {
  const headers = (await page.locator('table thead th, [role="columnheader"]').allTextContents()).map((v) => v.trim()).filter(Boolean);
  const findIndex = (matcher: RegExp) => headers.findIndex((header) => matcher.test(normalizeText(header)));
  const indexes = {
    codigo: findIndex(/^codigo$/i),
    nombre: findIndex(/^nombre$/i),
    estado: findIndex(/^estado$/i),
  };

  expect(indexes.codigo, `[BUG] La tabla no muestra la columna Código. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
  expect(indexes.nombre, `[BUG] La tabla no muestra la columna Nombre. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
  expect(indexes.estado, `[BUG] La tabla no muestra la columna Estado. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
  return indexes;
}

async function firstEditableRow(page: Page) {
  const noRecordsMessage = page.getByText(/no existen registros para mostrar en la tabla|no hay resultados/i).first();
  if (await noRecordsMessage.isVisible().catch(() => false)) {
    throw new Error('[DATA] No hay registros disponibles en Canales para validar edición inválida por campo.');
  }

  const rows = page.locator('table tbody tr');
  const count = await rows.count();
  for (let index = 0; index < count; index += 1) {
    const row = rows.nth(index);
    const editButton = row.locator('td:last-child button').first();
    if (await editButton.isVisible().catch(() => false)) return row;
  }

  throw new Error('[BUG] La tabla de Canales no muestra ninguna fila editable con icono de lápiz.');
}

async function snapshot(row: Locator, indexes: HeaderIndexes): Promise<CanalRowSnapshot> {
  const cells = (await row.locator('td').allTextContents()).map((value) => value.trim());
  return {
    codigo: cells[indexes.codigo] ?? '',
    nombre: cells[indexes.nombre] ?? '',
    estado: cells[indexes.estado] ?? '',
    raw: ((await row.innerText().catch(() => '')) ?? '').trim(),
  };
}

async function findRowBySnapshot(page: Page, indexes: HeaderIndexes, original: CanalRowSnapshot) {
  const rows = page.locator('table tbody tr');
  const count = await rows.count();
  for (let index = 0; index < count; index += 1) {
    const row = rows.nth(index);
    const values = await snapshot(row, indexes);
    if (
      normalizeText(values.codigo) === normalizeText(original.codigo) &&
      normalizeText(values.nombre) === normalizeText(original.nombre)
    ) {
      return row;
    }
  }
  return null;
}

async function assertNoTableMutation(page: Page, indexes: HeaderIndexes, original: CanalRowSnapshot) {
  const rowAfterInvalid = await ((await findRowBySnapshot(page, indexes, original)) ?? firstEditableRow(page));
  const afterInvalid = await snapshot(rowAfterInvalid, indexes);
  expect(normalizeText(afterInvalid.raw), '[BUG] Se permite guardar con datos inválidos y la tabla cambia indebidamente.').toContain(
    normalizeText(original.raw),
  );
}

test.describe('@comunes @critical @E36-C-03.3', () => {
  test('@critical @comunes @E36-C-03.3 debe bloquear la edicion de Canales con errores especificos por campo', async ({
    page,
  }) => {
    test.setTimeout(300_000);

    page.context().on('page', async (openedPage) => {
      if (openedPage === page) return;
      await openedPage.close().catch(() => undefined);
    });

    await test.step('QA: ingresar a Distribución y abrir Comunes > Canales', async () => {
      await openCanalesView(page);
    });

    const indexes = await getHeaderIndexes(page);
    const originalRow = await firstEditableRow(page);
    const original = await snapshot(originalRow, indexes);

    await test.step('QA: validar campo obligatorio vacio en Nombre', async () => {
      const row = (await findRowBySnapshot(page, indexes, original)) ?? (await firstEditableRow(page));
      const dialog = await openEditDialog(page, row, /canal/i);
      const nombreField = await findField(dialog, ['nombre']);

      const clearResult = await clearFieldIfPossible(dialog, nombreField);
      expect(clearResult.cleared, '[BUG] El campo Nombre del modal no pudo vaciarse para validar obligatoriedad.').toBe(true);

      const requiredMessages = await expectFieldInvalid({
        dialog,
        field: nombreField,
        messagePattern: requiredMessagePattern,
        ignoredLabelsPattern,
        missingMessage: '[BUG] No se muestra mensaje de campo requerido en Nombre.',
        wrongMessage: '[BUG] Mensaje no corresponde al campo Nombre.',
      });

      const { updateButton, enabled } = await tryUpdate(dialog);
      await expect(dialog, '[BUG] Se permite guardar con datos inválidos.').toBeVisible();
      if (enabled) await expect(updateButton, '[BUG] Se permite guardar con datos inválidos.').not.toBeHidden();

      await assertNoTableMutation(page, indexes, original);
      test.info().annotations.push({ type: 'validation-required-nombre', description: requiredMessages.join(' | ') });
      await closeDialog(dialog, page);
    });

    await test.step('QA: validar caracteres especiales no permitidos en Nombre', async () => {
      const row = (await findRowBySnapshot(page, indexes, original)) ?? (await firstEditableRow(page));
      const dialog = await openEditDialog(page, row, /canal/i);
      const nombreField = await findField(dialog, ['nombre']);

      await nombreField.fill('$#@!*?+');
      await nombreField.blur().catch(() => undefined);

      const invalidMessages = await expectFieldInvalid({
        dialog,
        field: nombreField,
        messagePattern: invalidFormatPattern,
        ignoredLabelsPattern,
        missingMessage: '[BUG] Error no visible al usuario.',
        wrongMessage: '[BUG] No se valida formato incorrecto en Nombre.',
      });

      const { updateButton, enabled } = await tryUpdate(dialog);
      await expect(dialog, '[BUG] Se permite guardar con datos inválidos.').toBeVisible();
      if (enabled) await expect(updateButton, '[BUG] Se permite guardar con datos inválidos.').not.toBeHidden();

      await assertNoTableMutation(page, indexes, original);
      test.info().annotations.push({ type: 'validation-invalid-nombre', description: invalidMessages.join(' | ') });
      await closeDialog(dialog, page);
    });
  });
});
