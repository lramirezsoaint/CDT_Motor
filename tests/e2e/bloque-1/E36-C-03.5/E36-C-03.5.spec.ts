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
  tipoGasto: number;
  uoaAntes: number;
  uoaDespues: number;
  porcentaje: number;
};

type ParcheRowSnapshot = {
  tipoGasto: string;
  uoaAntes: string;
  uoaDespues: string;
  porcentaje: string;
  raw: string;
};

const ignoredLabelsPattern =
  /^tipo de gasto$|^atribuible$|^ga\/gm$|^codigo concepto$|^concepto n1$|^concepto n2$|^digito de cuenta$|^cuenta$|^ramo$|^producto$|^subcanal$|^uoa antes$|^uoa despues$|^uoa despu[eé]s$|^porcentaje %$|^estado$|^actualizar$|^cancelar$/i;

function normalizeText(value: string) {
  return normalizeNegativeText(value);
}

async function openConfiguracionParchesView(page: Page) {
  await goToComunesView(page, 'Configuración de Parches', 'comunes/configuracion-parches').catch(async () => {
    await expect(page).toHaveURL(/comunes\/configuracion-parches/i, { timeout: 20_000 });
  });

  await expect(
    page.locator('table').first(),
    '[BUG] La tabla de Configuración de Parches no se renderiza al ingresar a la vista.',
  ).toBeVisible({ timeout: 20_000 });
}

async function getHeaderIndexes(page: Page): Promise<HeaderIndexes> {
  const headers = (await page.locator('table thead th, [role="columnheader"]').allTextContents()).map((v) => v.trim()).filter(Boolean);
  const findIndex = (matcher: RegExp) => headers.findIndex((header) => matcher.test(normalizeText(header)));
  const indexes = {
    tipoGasto: findIndex(/^tipo de gasto$|^tipo gasto$|^gasto$/i),
    uoaAntes: findIndex(/^uoa antes$/i),
    uoaDespues: findIndex(/^uoa despues$|^uoa después$/i),
    porcentaje: findIndex(/^porciento %$|^porcentaje$|^porciento$|^%$/i),
  };

  expect(indexes.tipoGasto, `[BUG] La tabla no muestra la columna Tipo de Gasto. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
  expect(indexes.uoaAntes, `[BUG] La tabla no muestra la columna UoA Antes. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
  expect(indexes.uoaDespues, `[BUG] La tabla no muestra la columna UoA Después. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
  expect(indexes.porcentaje, `[BUG] La tabla no muestra la columna Porcentaje. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
  return indexes;
}

async function firstEditableRow(page: Page) {
  const noRecordsMessage = page.getByText(/no existen registros para mostrar en la tabla|no hay resultados/i).first();
  if (await noRecordsMessage.isVisible().catch(() => false)) {
    throw new Error('[DATA] No hay registros disponibles en Configuración de Parches para validar edición inválida por campo.');
  }

  const rows = page.locator('table tbody tr');
  const count = await rows.count();
  for (let index = 0; index < count; index += 1) {
    const row = rows.nth(index);
    const editButton = row.locator('td:last-child button').first();
    if (await editButton.isVisible().catch(() => false)) return row;
  }
  throw new Error('[BUG] La tabla de Configuración de Parches no muestra ninguna fila editable con icono de lápiz.');
}

async function snapshot(row: Locator, indexes: HeaderIndexes): Promise<ParcheRowSnapshot> {
  const cells = (await row.locator('td').allTextContents()).map((value) => value.trim());
  return {
    tipoGasto: cells[indexes.tipoGasto] ?? '',
    uoaAntes: cells[indexes.uoaAntes] ?? '',
    uoaDespues: cells[indexes.uoaDespues] ?? '',
    porcentaje: cells[indexes.porcentaje] ?? '',
    raw: ((await row.innerText().catch(() => '')) ?? '').trim(),
  };
}

async function findRowBySnapshot(page: Page, indexes: HeaderIndexes, original: ParcheRowSnapshot) {
  const rows = page.locator('table tbody tr');
  const count = await rows.count();
  for (let index = 0; index < count; index += 1) {
    const row = rows.nth(index);
    const values = await snapshot(row, indexes);
    if (
      normalizeText(values.tipoGasto) === normalizeText(original.tipoGasto) &&
      normalizeText(values.uoaAntes) === normalizeText(original.uoaAntes) &&
      normalizeText(values.uoaDespues) === normalizeText(original.uoaDespues)
    ) {
      return row;
    }
  }
  return null;
}

async function assertNoTableMutation(page: Page, indexes: HeaderIndexes, original: ParcheRowSnapshot) {
  const rowAfterInvalid = await ((await findRowBySnapshot(page, indexes, original)) ?? firstEditableRow(page));
  const afterInvalid = await snapshot(rowAfterInvalid, indexes);
  expect(normalizeText(afterInvalid.raw), '[BUG] Se permite guardar con datos inválidos y la tabla cambia indebidamente.').toContain(
    normalizeText(original.raw),
  );
}

test.describe('@comunes @critical @E36-C-03.5', () => {
  test('@critical @comunes @E36-C-03.5 debe bloquear la edicion de Configuracion de Parches con errores especificos por campo', async ({
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
    const originalRow = await firstEditableRow(page);
    const original = await snapshot(originalRow, indexes);
    const requiredFieldResults: string[] = [];

    await test.step('QA: validar obligatoriedad de UoA Antes, UoA Después y Porcentaje cuando la UI lo permita', async () => {
      const requiredFields = [
        { labels: ['uoa antes'], tag: 'uoa-antes' },
        { labels: ['uoa después', 'uoa despues'], tag: 'uoa-despues' },
        { labels: ['porcentaje %', 'porcentaje'], tag: 'porcentaje' },
      ];

      for (const requiredField of requiredFields) {
        const row = (await findRowBySnapshot(page, indexes, original)) ?? (await firstEditableRow(page));
        const dialog = await openEditDialog(page, row, /parche|configuracion/i);
        const field = await findField(dialog, requiredField.labels);
        const clearResult = await clearFieldIfPossible(dialog, field);

        if (!clearResult.cleared) {
          test.info().annotations.push({
            type: `required-skip-${requiredField.tag}`,
            description: `El campo ${requiredField.tag} no pudo vaciarse desde la UI real. Motivo: ${clearResult.reason}.`,
          });
          requiredFieldResults.push(`${requiredField.tag}:${clearResult.reason}`);
          await closeDialog(dialog, page);
          continue;
        }

        const requiredMessages = await expectFieldInvalid({
          dialog,
          field,
          messagePattern: requiredMessagePattern,
          ignoredLabelsPattern,
          missingMessage: `[BUG] No se muestra mensaje de campo requerido para ${requiredField.tag}.`,
          wrongMessage: `[BUG] Mensaje no corresponde al campo ${requiredField.tag}.`,
        });

        const { updateButton, enabled } = await tryUpdate(dialog);
        await expect(dialog, '[BUG] Se permite guardar con datos inválidos.').toBeVisible();
        if (enabled) await expect(updateButton, '[BUG] Se permite guardar con datos inválidos.').not.toBeHidden();

        await assertNoTableMutation(page, indexes, original);
        requiredFieldResults.push(`${requiredField.tag}:validated`);
        test.info().annotations.push({
          type: `validation-required-${requiredField.tag}`,
          description: requiredMessages.join(' | '),
        });
        await closeDialog(dialog, page);
      }

      expect(
        requiredFieldResults.some((entry) => entry.endsWith(':validated')),
        '[BUG] Ninguno de los campos obligatorios de Configuración de Parches pudo validarse por obligatoriedad con la UI real disponible.',
      ).toBe(true);
    });

    await test.step('QA: validar formato inválido en Porcentaje', async () => {
      const row = (await findRowBySnapshot(page, indexes, original)) ?? (await firstEditableRow(page));
      const dialog = await openEditDialog(page, row, /parche|configuracion/i);
      const porcentajeField = await findField(dialog, ['porcentaje %', 'porcentaje']);

      await porcentajeField.fill('abc');
      await porcentajeField.blur().catch(() => undefined);

      const invalidMessages = await expectFieldInvalid({
        dialog,
        field: porcentajeField,
        messagePattern: invalidFormatPattern,
        ignoredLabelsPattern,
        missingMessage: '[BUG] Error no visible al usuario.',
        wrongMessage: '[BUG] No se valida formato incorrecto en Porcentaje.',
      });

      const { updateButton, enabled } = await tryUpdate(dialog);
      await expect(dialog, '[BUG] Se permite guardar con datos inválidos.').toBeVisible();
      if (enabled) await expect(updateButton, '[BUG] Se permite guardar con datos inválidos.').not.toBeHidden();

      await assertNoTableMutation(page, indexes, original);
      test.info().annotations.push({ type: 'validation-invalid-porcentaje', description: invalidMessages.join(' | ') });
      await closeDialog(dialog, page);
    });
  });
});
