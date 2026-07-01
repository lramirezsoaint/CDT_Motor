import { expect } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { currentFieldValue, normalizeEditText } from './comunes-edit';
import { openComunesAddDialog } from './comunes-add-negative';

export const addSuccessMessagePattern = /hecho|registro se agreg[oó]|sin problemas|guardad/i;
export const duplicateMessagePattern = /ya existe|intentas agregar|verifica la informaci[oó]n|edita el registro existente/i;

export function enforceSinglePage(page: Page) {
  const context = page.context();

  const closeExtraPage = async (openedPage: Page) => {
    if (openedPage === page) return;
    await openedPage.close().catch(() => undefined);
  };

  for (const openedPage of context.pages()) {
    void closeExtraPage(openedPage);
  }

  context.on('page', (openedPage) => {
    void closeExtraPage(openedPage);
  });
}

export async function openPositiveAddDialog(page: Page, menu: string, route: string, modalPattern: RegExp) {
  enforceSinglePage(page);
  return await openComunesAddDialog(page, menu, route, modalPattern);
}

export async function addButtonFrom(dialog: Locator) {
  const candidates = [
    dialog.getByRole('button', { name: /^agregar$/i }).last(),
    dialog.getByRole('button', { name: /crear/i }).last(),
    dialog.locator('button').filter({ hasText: /^agregar$/i }).last(),
  ];

  for (const candidate of candidates) {
    if ((await candidate.count().catch(() => 0)) === 0) continue;
    await candidate.scrollIntoViewIfNeeded().catch(() => undefined);
    if (await candidate.isVisible().catch(() => false)) {
      return candidate;
    }
  }

  throw new Error('[BUG] El modal no muestra el botón final de alta.');
}

export async function clickFinalAdd(dialog: Locator) {
  const addButton = await addButtonFrom(dialog);
  await expect(addButton, '[BUG] El botón final "Agregar" no está habilitado para completar el alta.').toBeEnabled({
    timeout: 10_000,
  });
  await addButton.click();
  return addButton;
}

export async function captureVisibleMessages(page: Page, dialog?: Locator) {
  const collectors = [
    page.locator('[role="alert"], [role="status"], [data-sonner-toast], .Toastify__toast, .MuiAlert-root'),
    dialog?.locator('[role="alert"], [role="status"], p, span, div'),
  ].filter(Boolean) as Locator[];

  const messages = new Set<string>();
  for (const locator of collectors) {
    const texts = await locator.allTextContents().catch(() => []);
    for (const text of texts) {
      const normalized = text.replace(/\s+/g, ' ').trim();
      if (!normalized) continue;
      if (normalized.length < 4) continue;
      messages.add(normalized);
    }
  }

  return Array.from(messages);
}

export async function expectAddSuccess(page: Page, dialog: Locator, menu: string) {
  await expect
    .poll(async () => {
      const messages = await captureVisibleMessages(page, dialog);
      return messages.find((message) => addSuccessMessagePattern.test(normalizeEditText(message))) ?? '';
    }, {
      message: `[BUG] No aparece mensaje de éxito después de agregar en ${menu}.`,
      timeout: 12_000,
    })
    .not.toBe('');

  await expect(dialog, `[BUG] El modal de alta de ${menu} permanece abierto después de guardar.`).toBeHidden({
    timeout: 15_000,
  });
}

export async function selectComboboxOption(
  page: Page,
  field: Locator,
  options?: {
    preferredPattern?: RegExp;
    excludeNormalized?: string[];
  },
) {
  await expect(field).toBeVisible({ timeout: 10_000 });
  await expect(field).toBeEnabled({ timeout: 10_000 });
  await field.click();

  const optionLocator = page.locator('[role="option"], [role="listbox"] li');
  await expect(optionLocator.first(), '[BUG] El selector no despliega opciones visibles para completar el alta.').toBeVisible({
    timeout: 10_000,
  });

  const currentValue = normalizeEditText(await currentFieldValue(field));
  const exclude = new Set((options?.excludeNormalized ?? []).map((value) => normalizeEditText(value)));

  const optionTexts = await optionLocator.evaluateAll((nodes) =>
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

  const actualOptions = optionTexts.filter((text) => !/seleccione|opci[oó]n|select/i.test(normalizeEditText(text)));
  const preferred = options?.preferredPattern
    ? actualOptions.find((text) => options.preferredPattern!.test(normalizeEditText(text)))
    : undefined;
  const nextOption =
    preferred ??
    actualOptions.find((text) => {
      const normalized = normalizeEditText(text);
      return normalized !== currentValue && !exclude.has(normalized);
    }) ??
    actualOptions.find((text) => !exclude.has(normalizeEditText(text)));

  expect(nextOption, '[BUG] El selector no ofrece una opción válida para completar el alta.').toBeTruthy();

  await page.getByRole('option', { name: new RegExp(`^\\s*${nextOption}\\s*$`, 'i') }).first().click();
  await expect
    .poll(async () => normalizeEditText(await currentFieldValue(field)), {
      message: `[BUG] El selector no conserva la opción "${nextOption}" después de seleccionarla.`,
      timeout: 10_000,
    })
    .toContain(normalizeEditText(nextOption!));

  return nextOption!;
}

export async function selectExactComboboxOption(
  page: Page,
  field: Locator,
  expectedText: string,
  options?: {
    fallbackPattern?: RegExp;
  },
) {
  await expect(field).toBeVisible({ timeout: 10_000 });
  await expect(field).toBeEnabled({ timeout: 10_000 });
  await field.click();

  const optionLocator = page.locator('[role="option"], [role="listbox"] li');
  await expect(optionLocator.first(), '[BUG] El selector no despliega opciones visibles para completar el alta.').toBeVisible({
    timeout: 10_000,
  });

  const optionTexts = await optionLocator.evaluateAll((nodes) =>
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

  const normalizedExpected = normalizeEditText(expectedText);
  const exactMatch =
    optionTexts.find((text) => normalizeEditText(text) === normalizedExpected) ??
    optionTexts.find((text) => normalizeEditText(text).includes(normalizedExpected) || normalizedExpected.includes(normalizeEditText(text)));
  const fallbackMatch = options?.fallbackPattern
    ? optionTexts.find((text) => options.fallbackPattern!.test(normalizeEditText(text)))
    : undefined;
  const nextOption = exactMatch ?? fallbackMatch;

  expect(nextOption, `[BUG] El selector no ofrece la opción esperada "${expectedText}".`).toBeTruthy();

  await page.getByRole('option', { name: new RegExp(`^\\s*${nextOption}\\s*$`, 'i') }).first().click();
  await expect
    .poll(async () => normalizeEditText(await currentFieldValue(field)), {
      message: `[BUG] El selector no conserva la opción "${nextOption}" después de seleccionarla.`,
      timeout: 10_000,
    })
    .toContain(normalizeEditText(nextOption!));

  return nextOption!;
}

export async function findRowContaining(page: Page, expectedTexts: string[]) {
  const rows = page.locator('table tbody tr');
  const count = await rows.count();
  const expected = expectedTexts.map((text) => normalizeEditText(text)).filter(Boolean);

  for (let index = 0; index < count; index += 1) {
    const row = rows.nth(index);
    const rowText = normalizeEditText((await row.innerText().catch(() => '')).trim());
    if (expected.every((text) => rowText.includes(text))) {
      return row;
    }
  }

  return null;
}

export async function getTableHeaders(page: Page) {
  return (await page.locator('table thead th, [role="columnheader"]').allTextContents())
    .map((value) => value.trim())
    .filter(Boolean);
}

export function findHeaderIndex(headers: string[], patterns: RegExp[]) {
  return headers.findIndex((header) => patterns.some((pattern) => pattern.test(normalizeEditText(header))));
}

export async function countTableRows(page: Page) {
  return await page.locator('table tbody tr').count();
}

export async function expectDuplicateBlocked(page: Page, dialog: Locator, menu: string, baselineRowCount: number) {
  await expect
    .poll(async () => {
      const messages = await captureVisibleMessages(page, dialog);
      return messages.find((message) => duplicateMessagePattern.test(normalizeEditText(message))) ?? '';
    }, {
      message: `[BUG] No aparece mensaje de duplicidad al intentar agregar un registro repetido en ${menu}.`,
      timeout: 12_000,
    })
    .not.toBe('');

  await expect
    .poll(async () => await countTableRows(page), {
      message: `[BUG] El registro duplicado en ${menu} altera la cantidad de filas visibles en la tabla.`,
      timeout: 10_000,
    })
    .toBe(baselineRowCount);
}
