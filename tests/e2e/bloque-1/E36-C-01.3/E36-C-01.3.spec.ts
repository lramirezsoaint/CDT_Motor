import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { goToComunesView } from '../_shared/comunes-upload';

type HeaderIndexes = {
  codigo: number;
  nombre: number;
  estado: number;
  modificado: number;
};

type CanalRowSnapshot = {
  codigo: string;
  nombre: string;
  estado: string;
  modificado: string;
};

type PendingChanges = Partial<Pick<CanalRowSnapshot, 'codigo' | 'nombre' | 'estado'>>;

const successMessagePattern = /cambios guardados correctamente/i;
const associatedDataMessage = 'El registro que desea modificar cuenta con datos asociados. Favor de validar.';

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();
}

function compactKey(value: string) {
  return normalizeText(value).replace(/\s+/g, '');
}

function randomLetters(length: number) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
}

function randomDigits(length: number) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10).toString()).join('');
}

function buildCodigo(previousValue: string) {
  let candidate = '';

  do {
    candidate = `${randomLetters(4)}${randomDigits(4)}`;
  } while (normalizeText(candidate) === normalizeText(previousValue));

  return candidate;
}

function buildNombre(previousValue: string) {
  const suffix = `${randomLetters(2)}${randomDigits(2)}`;
  const seed = previousValue.trim() || 'Canal QA';
  return `${seed} ${suffix}`.slice(0, 80);
}

async function openCanalesView(page: Page) {
  await goToComunesView(page, 'Canales', 'comunes/canales');

  const table = page.locator('table').first();
  await expect(table, '[BUG] La tabla de Canales no se renderiza al ingresar a la vista.').toBeVisible({
    timeout: 20_000,
  });
}

async function tableHeaders(page: Page) {
  return (await page.locator('table thead th, [role="columnheader"]').allTextContents())
    .map((value) => value.trim())
    .filter(Boolean);
}

function findHeaderIndex(headers: string[], patterns: RegExp[]) {
  return headers.findIndex((header) => patterns.some((pattern) => pattern.test(normalizeText(header))));
}

async function getHeaderIndexes(page: Page): Promise<HeaderIndexes> {
  const headers = await tableHeaders(page);

  const indexes = {
    codigo: findHeaderIndex(headers, [/^codigo$/i]),
    nombre: findHeaderIndex(headers, [/^nombre$/i]),
    estado: findHeaderIndex(headers, [/^estado$/i]),
    modificado: findHeaderIndex(headers, [/^modificado$/i]),
  };

  expect(indexes.codigo, `[BUG] La tabla no muestra la columna Código. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
  expect(indexes.nombre, `[BUG] La tabla no muestra la columna Nombre. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);
  expect(indexes.estado, `[BUG] La tabla no muestra la columna Estado. Headers: ${headers.join(', ')}.`).toBeGreaterThanOrEqual(0);

  return indexes;
}

async function rowCells(row: Locator) {
  return (await row.locator('td').allTextContents()).map((value) => value.trim());
}

async function firstRow(page: Page) {
  const row = page.locator('table tbody tr').first();
  await expect(row, '[BUG] La tabla de Canales no tiene una primera fila disponible para editar.').toBeVisible({
    timeout: 20_000,
  });
  return row;
}

async function snapshot(row: Locator, indexes: HeaderIndexes): Promise<CanalRowSnapshot> {
  const cells = await rowCells(row);

  return {
    codigo: cells[indexes.codigo] ?? '',
    nombre: cells[indexes.nombre] ?? '',
    estado: cells[indexes.estado] ?? '',
    modificado: indexes.modificado >= 0 ? cells[indexes.modificado] ?? '' : '',
  };
}

async function rowByUpdatedValues(
  page: Page,
  indexes: HeaderIndexes,
  expected: Pick<CanalRowSnapshot, 'codigo' | 'nombre' | 'estado'>,
) {
  const rows = page.locator('table tbody tr');
  const count = await rows.count();

  for (let index = 0; index < count; index += 1) {
    const row = rows.nth(index);
    const values = await snapshot(row, indexes);
    if (
      normalizeText(values.codigo) === normalizeText(expected.codigo) &&
      normalizeText(values.nombre) === normalizeText(expected.nombre) &&
      normalizeText(values.estado) === normalizeText(expected.estado)
    ) {
      return row;
    }
  }

  return null;
}

async function openEditDialog(page: Page, row: Locator) {
  const editButton = row.locator('td:last-child button').first();
  await expect(editButton, '[BUG] No se abre el modal de edición porque la fila no muestra el icono de lápiz.').toBeVisible({
    timeout: 10_000,
  });
  await editButton.click();

  const dialog = page
    .getByRole('dialog')
    .filter({ has: page.getByText(/canal/i) })
    .last();
  const fallbackDialog = page.getByRole('dialog').last();
  const targetDialog = (await dialog.isVisible().catch(() => false)) ? dialog : fallbackDialog;

  await expect(targetDialog, '[BUG] No se abre el modal de edición.').toBeVisible({ timeout: 10_000 });
  await expect(targetDialog, '[BUG] El modal abierto no corresponde al flujo de Canales.').toContainText(/canal/i, {
    timeout: 10_000,
  });

  return targetDialog;
}

async function currentFieldValue(field: Locator) {
  const tagName = await field.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  if (tagName === 'input' || tagName === 'textarea') {
    return (await field.inputValue().catch(() => '')).trim();
  }

  return ((await field.textContent().catch(() => '')) ?? '').trim();
}

async function findField(dialog: Locator, label: string) {
  const pattern = new RegExp(label, 'i');
  const compactLabel = compactKey(label);
  const labelAnchors = [
    dialog.locator('label').filter({ hasText: pattern }).first(),
    dialog.locator('div, span, p').filter({ hasText: pattern }).first(),
  ];

  const candidates = [
    dialog.getByLabel(pattern).first(),
    dialog.getByRole('textbox', { name: pattern }).first(),
    dialog.getByRole('combobox', { name: pattern }).first(),
    dialog
      .locator(
        `input[id*="${label}" i], input[name*="${label}" i], [data-testid*="${label}" i], button[id*="${label}" i], button[name*="${label}" i], ` +
          `input[id*="${compactLabel}" i], input[name*="${compactLabel}" i], [data-testid*="${compactLabel}" i], button[id*="${compactLabel}" i], button[name*="${compactLabel}" i]`,
      )
      .first(),
  ];

  for (const anchor of labelAnchors) {
    if ((await anchor.count().catch(() => 0)) === 0) continue;

    candidates.push(anchor.locator('xpath=following::input[1]'));
    candidates.push(anchor.locator('xpath=following::*[@role="combobox"][1]'));
    candidates.push(anchor.locator('xpath=following::button[1]'));
    candidates.push(anchor.locator('xpath=ancestor::div[1]//*[self::input or self::button or @role="combobox"][1]'));
    candidates.push(anchor.locator('xpath=ancestor::div[2]//*[self::input or self::button or @role="combobox"][1]'));
  }

  for (const candidate of candidates) {
    if ((await candidate.count().catch(() => 0)) === 0) continue;
    if (await candidate.isVisible().catch(() => false)) return candidate;
  }

  throw new Error(`[BUG] No se encontró el control del campo ${label} en el modal de edición.`);
}

async function fillTextField(field: Locator, nextValue: string) {
  await expect(field).toBeVisible({ timeout: 10_000 });
  await expect(field).toBeEnabled({ timeout: 10_000 });
  await field.fill('');
  await field.fill(nextValue);
  await expect(field).toHaveValue(nextValue);
}

async function fillIfEditable(field: Locator, nextValue: string) {
  if (!(await field.isEnabled().catch(() => false))) {
    return null;
  }

  await fillTextField(field, nextValue);
  return await currentFieldValue(field);
}

async function selectDifferentOption(page: Page, field: Locator, currentValue: string) {
  await expect(field).toBeVisible({ timeout: 10_000 });
  await expect(field).toBeEnabled({ timeout: 10_000 });
  await field.click();

  const options = page.locator('[role="option"], [role="listbox"] li');
  await expect(options.first(), '[BUG] El selector no despliega opciones visibles para completar la edición.').toBeVisible({
    timeout: 10_000,
  });

  const optionTexts = await options.evaluateAll((nodes) =>
    nodes
      .map((node) => {
        const element = node as HTMLElement;
        const style = window.getComputedStyle(element);
        return {
          hidden: style.display === 'none' || style.visibility === 'hidden',
          text: (element.innerText || element.textContent || '').trim(),
          disabled: node.getAttribute('aria-disabled') === 'true',
        };
      })
      .filter((entry) => !entry.hidden && entry.text && !entry.disabled)
      .map((entry) => entry.text),
  );

  const nextOption = optionTexts.find((option) => normalizeText(option) !== normalizeText(currentValue));
  expect(nextOption, `[BUG] El selector no ofrece una opción distinta a "${currentValue}" para validar la edición.`).toBeTruthy();

  await page.getByRole('option', { name: new RegExp(`^\\s*${nextOption}\\s*$`, 'i') }).first().click();
  await expect.poll(async () => normalizeText(await currentFieldValue(field))).toContain(normalizeText(nextOption!));

  return nextOption!;
}

async function selectDifferentOptionIfEditable(page: Page, field: Locator, currentValue: string) {
  if (!(await field.isEnabled().catch(() => false))) {
    return null;
  }

  return await selectDifferentOption(page, field, currentValue);
}

async function save(dialog: Locator) {
  const updateButton = dialog.getByRole('button', { name: /actualizar/i }).first();
  await expect(updateButton, '[BUG] El modal de edición no muestra el botón "Actualizar".').toBeEnabled({
    timeout: 10_000,
  });
  await updateButton.click();
}

test.describe('@comunes @critical @E36-C-01.3', () => {
  test('@critical @comunes @E36-C-01.3 debe editar un Canal y manejar datos asociados sin romper el flujo', async ({
    page,
  }) => {
    test.setTimeout(300_000);

    page.context().on('page', async (openedPage) => {
      if (openedPage === page) {
        return;
      }

      await openedPage.close().catch(() => undefined);
    });

    await test.step('QA: ingresar a Distribución y abrir Comunes > Canales', async () => {
      await openCanalesView(page);
    });

    const indexes = await getHeaderIndexes(page);
    const targetRow = await firstRow(page);
    const original = await snapshot(targetRow, indexes);

    expect(original.codigo, '[BUG] La primera fila de Canales no muestra un código base para editar.').not.toBe('');
    expect(original.nombre, '[BUG] La primera fila de Canales no muestra un nombre base para editar.').not.toBe('');

    await test.step('QA: abrir modal, editar campos habilitados y validar resultado visible', async () => {
      const dialog = await openEditDialog(page, targetRow);

      const codigoField = await findField(dialog, 'codigo');
      const nombreField = await findField(dialog, 'nombre');
      const estadoField = await findField(dialog, 'estado');

      const changes: PendingChanges = {};

      const maybeCodigo = await fillIfEditable(codigoField, buildCodigo(original.codigo));
      if (maybeCodigo) {
        changes.codigo = maybeCodigo;
      }

      const maybeNombre = await fillIfEditable(nombreField, buildNombre(original.nombre));
      if (maybeNombre) {
        changes.nombre = maybeNombre;
      }

      const maybeEstado = await selectDifferentOptionIfEditable(page, estadoField, original.estado);
      if (maybeEstado) {
        changes.estado = maybeEstado;
      }

      expect(
        Object.keys(changes).length,
        '[BUG] El modal de edición se abre, pero no expone campos editables para validar la actualización del canal.',
      ).toBeGreaterThan(0);

      await save(dialog);

      await expect
        .poll(async () => {
          const text = await page.locator('body').innerText();
          return successMessagePattern.test(text) || normalizeText(text).includes(normalizeText(associatedDataMessage));
        }, {
          message: '[BUG] No aparece mensaje de éxito ni mensaje de datos asociados después de editar el canal.',
          timeout: 10_000,
        })
        .toBe(true);

      const visibleBodyText = await page.locator('body').innerText();
      const successVisible = successMessagePattern.test(visibleBodyText);
      const associatedVisible = normalizeText(visibleBodyText).includes(normalizeText(associatedDataMessage));

      expect(successVisible || associatedVisible, '[BUG] No aparece mensaje de éxito ni mensaje de datos asociados después de editar el canal.').toBe(true);

      if (successVisible) {
        expect(visibleBodyText, '[BUG] No aparece mensaje de éxito.').toMatch(successMessagePattern);
      }

      if (associatedVisible) {
        expect(normalizeText(visibleBodyText), '[BUG] Error al editar registro con datos asociados.').toContain(
          normalizeText(associatedDataMessage),
        );
      }

      await expect(dialog, '[BUG] No se guardan los cambios y el modal permanece abierto.').toBeHidden({ timeout: 15_000 });

      const expectedRowValues = {
        codigo: changes.codigo ?? original.codigo,
        nombre: changes.nombre ?? original.nombre,
        estado: changes.estado ?? original.estado,
      };

      await expect
        .poll(async () => await rowByUpdatedValues(page, indexes, expectedRowValues), {
          message: '[BUG] Tabla no refleja cambios después de actualizar el canal.',
          timeout: 20_000,
        })
        .not.toBeNull();

      const refreshedRow = await rowByUpdatedValues(page, indexes, expectedRowValues);
      expect(refreshedRow, '[BUG] No se guardan los cambios.').toBeTruthy();

      const updatedSnapshot = await snapshot(refreshedRow!, indexes);

      if (changes.codigo) {
        expect(
          normalizeText(updatedSnapshot.codigo),
          `[BUG] Tabla no refleja cambios. Código esperado: ${changes.codigo}. Actual: ${updatedSnapshot.codigo}.`,
        ).toBe(normalizeText(changes.codigo));
      }

      if (changes.nombre) {
        expect(
          normalizeText(updatedSnapshot.nombre),
          `[BUG] Tabla no refleja cambios. Nombre esperado: ${changes.nombre}. Actual: ${updatedSnapshot.nombre}.`,
        ).toBe(normalizeText(changes.nombre));
      }

      if (changes.estado) {
        expect(
          normalizeText(updatedSnapshot.estado),
          `[BUG] Tabla no refleja cambios. Estado esperado: ${changes.estado}. Actual: ${updatedSnapshot.estado}.`,
        ).toBe(normalizeText(changes.estado));
      }

      if (indexes.modificado >= 0) {
        expect(
          normalizeText(updatedSnapshot.modificado),
          '[BUG] La fecha/hora de modificación no se actualiza después de guardar el canal.',
        ).not.toBe(normalizeText(original.modificado));
      }

      test.info().annotations.push({
        type: 'resultado-edicion',
        description: successVisible ? 'Cambios guardados correctamente' : associatedDataMessage,
      });
    });
  });
});
