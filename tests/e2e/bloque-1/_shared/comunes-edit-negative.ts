import { expect } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { currentFieldValue } from './comunes-edit';

export const requiredMessagePattern = /requerid|obligatori|ingrese|complete/i;
export const invalidFormatPattern = /inval|inv[aá]lid|especial|permitid|formato|ingrese/i;

export function normalizeNegativeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();
}

export async function fieldContainer(dialog: Locator, field: Locator) {
  const fieldId = await field.getAttribute('id').catch(() => null);
  if (fieldId) {
    const label = dialog.locator(`label[for="${fieldId}"]`).first();
    if (await label.isVisible().catch(() => false)) {
      const container = label.locator('xpath=ancestor::*[self::div or self::section][1]').first();
      if (await container.isVisible().catch(() => false)) return container;
    }
  }

  return field.locator('xpath=ancestor::*[self::div or self::section][1]').first();
}

export async function visibleFieldMessages(container: Locator, field: Locator, ignoredLabelsPattern: RegExp) {
  const candidates = [
    container.locator('[role="alert"], [role="status"], p, span, div'),
    field.locator('xpath=following::*[self::p or self::span or self::div][position()<=3]'),
  ];

  const messages = new Set<string>();

  for (const candidate of candidates) {
    const texts = await candidate.allTextContents().catch(() => []);
    for (const text of texts) {
      const normalized = text.replace(/\s+/g, ' ').trim();
      if (!normalized) continue;
      if (normalized.length < 4) continue;
      if (ignoredLabelsPattern.test(normalized)) continue;
      messages.add(normalized);
    }
  }

  return Array.from(messages);
}

export async function expectFieldInvalid(params: {
  dialog: Locator;
  field: Locator;
  messagePattern: RegExp;
  ignoredLabelsPattern: RegExp;
  missingMessage: string;
  wrongMessage: string;
}) {
  const { dialog, field, messagePattern, ignoredLabelsPattern, missingMessage, wrongMessage } = params;
  const container = await fieldContainer(dialog, field);
  const invalidSignals = await Promise.all([
    field.getAttribute('aria-invalid').catch(() => null),
    field.evaluate((element) => element.getAttribute('data-invalid')).catch(() => null),
    field.evaluate((element) => element.className).catch(() => ''),
    container.evaluate((element) => element.className).catch(() => ''),
  ]);

  const [ariaInvalid, dataInvalid, fieldClassName, containerClassName] = invalidSignals;
  const hasInvalidState =
    ariaInvalid === 'true' ||
    dataInvalid === 'true' ||
    /invalid|error|destructive|border-red|ring-red/i.test(`${fieldClassName} ${containerClassName}`);

  expect(hasInvalidState, '[BUG] Error no visible al usuario. El campo inválido no queda marcado visualmente.').toBe(true);

  const messages = await visibleFieldMessages(container, field, ignoredLabelsPattern);
  expect(messages.length, missingMessage).toBeGreaterThan(0);
  expect(messages.some((message) => messagePattern.test(normalizeNegativeText(message))), wrongMessage).toBe(true);

  return messages;
}

export async function clearFieldIfPossible(dialog: Locator, field: Locator) {
  const tagName = await field.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  const role = (await field.getAttribute('role').catch(() => '')) ?? '';
  const readOnly = await field.evaluate((element) => element.hasAttribute('readonly')).catch(() => false);

  if (!(await field.isEnabled().catch(() => false))) {
    return { cleared: false as const, reason: 'disabled' };
  }

  if ((tagName === 'input' || tagName === 'textarea') && !readOnly) {
    await field.fill('');
    await field.blur().catch(() => undefined);
    return { cleared: true as const, reason: 'editable-text' };
  }

  const container = await fieldContainer(dialog, field);
  const clearCandidates = container.locator('button').filter({ has: container.locator('svg') });
  const clearCount = await clearCandidates.count().catch(() => 0);

  for (let index = 0; index < clearCount; index += 1) {
    const candidate = clearCandidates.nth(index);
    if (!(await candidate.isVisible().catch(() => false))) continue;
    await candidate.click().catch(() => undefined);
    await field.blur().catch(() => undefined);
    if (normalizeNegativeText(await currentFieldValue(field)) === '') {
      return { cleared: true as const, reason: 'clear-button' };
    }
  }

  if (role === 'combobox' || tagName === 'button' || readOnly) {
    return { cleared: false as const, reason: 'not-clearable' };
  }

  return { cleared: false as const, reason: 'unsupported' };
}

export async function tryUpdate(dialog: Locator) {
  const updateButton = dialog.getByRole('button', { name: /actualizar/i }).first();
  await expect(updateButton, '[BUG] El modal no muestra el botón "Actualizar".').toBeVisible({ timeout: 10_000 });

  const enabled = await updateButton.isEnabled().catch(() => false);
  if (enabled) {
    await updateButton.click();
  }

  return { updateButton, enabled };
}

export async function closeDialog(dialog: Locator, page: Page) {
  await dialog.getByRole('button', { name: /cancelar/i }).click().catch(async () => {
    await page.keyboard.press('Escape').catch(() => undefined);
  });
}
