import { expect, Page } from '@playwright/test';
import type { Locator } from '@playwright/test';
import { goToComunesView } from './comunes-upload';
import { currentFieldValue, findField, fillTextField } from './comunes-edit';
import {
  clearFieldIfPossible,
  closeDialog,
  expectFieldInvalid,
  invalidFormatPattern,
  normalizeNegativeText,
  requiredMessagePattern,
} from './comunes-edit-negative';

export type RequiredFieldConfig = {
  labels: string[];
  tag: string;
};

export type InvalidFieldConfig = {
  labels: string[];
  tag: string;
  invalidValue: string;
};

export type SelectorPresenceConfig = {
  labels: string[];
  tag: string;
};

export type AddNegativeScenarioConfig = {
  caseId: string;
  menu: string;
  route: string;
  modalPattern: RegExp;
  ignoredLabelsPattern: RegExp;
  requiredFields: RequiredFieldConfig[];
  invalidTextFields: InvalidFieldConfig[];
  selectorFields?: SelectorPresenceConfig[];
};

function normalizeText(value: string) {
  return normalizeNegativeText(value);
}

export async function openComunesAddDialog(page: Page, menu: string, route: string, modalPattern: RegExp) {
  await goToComunesView(page, menu, route).catch(async () => {
    await expect(page).toHaveURL(new RegExp(route.replace('/', '\\/'), 'i'), { timeout: 20_000 });
  });

  const table = page.locator('table').first();
  await expect(table, `[BUG] La tabla de ${menu} no se renderiza al ingresar a la vista.`).toBeVisible({ timeout: 20_000 });

  const addButton = page.getByRole('button', { name: /agregar/i }).first();
  await expect(addButton, `[BUG] La vista de ${menu} no muestra el botón "Agregar".`).toBeVisible({ timeout: 10_000 });
  await addButton.click();

  const dialog = page.getByRole('dialog').last();
  await expect(dialog, `[BUG] No se abre el modal de alta en ${menu}.`).toBeVisible({ timeout: 10_000 });
  await expect(dialog, `[BUG] El modal abierto no corresponde al flujo esperado en ${menu}.`).toContainText(modalPattern, {
    timeout: 10_000,
  });

  return dialog;
}

async function addButtonFrom(dialog: Locator) {
  const addButton = dialog.getByRole('button', { name: /^agregar$/i }).first().or(dialog.getByRole('button', { name: /crear/i }).first());
  await expect(addButton, '[BUG] El modal no muestra el botón final de alta.').toBeVisible({ timeout: 10_000 });
  return addButton;
}

async function tryAdd(dialog: Locator) {
  const addButton = await addButtonFrom(dialog);
  const enabled = await addButton.isEnabled().catch(() => false);
  if (enabled) {
    await addButton.click();
  }
  return { addButton, enabled };
}

async function triggerEmptyValidation(dialog: Locator, field: Locator) {
  const value = await currentFieldValue(field);
  const normalizedValue = normalizeText(value);

  if (normalizedValue !== '') {
    return await clearFieldIfPossible(dialog, field);
  }

  await field.click().catch(() => undefined);
  await field.blur().catch(() => undefined);
  return { cleared: true as const, reason: 'already-empty' };
}

export async function validateRequiredField(params: {
  page: Page;
  dialog: Locator;
  fieldConfig: RequiredFieldConfig;
  ignoredLabelsPattern: RegExp;
}) {
  const { page, dialog, fieldConfig, ignoredLabelsPattern } = params;
  const field = await findField(dialog, fieldConfig.labels);
  await expect(field, `[BUG] No se encontró el campo ${fieldConfig.tag} en el modal de alta.`).toBeVisible({ timeout: 10_000 });

  const clearResult = await triggerEmptyValidation(dialog, field);
  const currentValue = normalizeText(await currentFieldValue(field));

  const { enabled } = await tryAdd(dialog);
  await expect(dialog, '[BUG] Se permite guardar con datos inválidos.').toBeVisible();

  const messages = await (async () => {
    try {
      return await expectFieldInvalid({
        dialog,
        field,
        messagePattern: requiredMessagePattern,
        ignoredLabelsPattern,
        missingMessage: `[BUG] No se muestra mensaje de campo requerido para ${fieldConfig.tag}.`,
        wrongMessage: `[BUG] Mensaje no corresponde al campo ${fieldConfig.tag}.`,
      });
    } catch (error) {
      if (!enabled && currentValue === '') {
        testAnnotation(page, `required-${fieldConfig.tag}`, `El campo ${fieldConfig.tag} permaneció vacío y el botón final quedó deshabilitado.`);
        return [];
      }
      throw error;
    }
  })();

  return { clearResult, messages, enabled };
}

export async function validateInvalidTextField(params: {
  page: Page;
  dialog: Locator;
  fieldConfig: InvalidFieldConfig;
  ignoredLabelsPattern: RegExp;
}) {
  const { page, dialog, fieldConfig, ignoredLabelsPattern } = params;
  const field = await findField(dialog, fieldConfig.labels);
  await expect(field, `[BUG] No se encontró el campo ${fieldConfig.tag} en el modal de alta.`).toBeVisible({ timeout: 10_000 });
  await expect(field, `[BUG] El campo ${fieldConfig.tag} no está habilitado para validar formato.`).toBeEnabled({ timeout: 10_000 });

  await fillTextField(field, fieldConfig.invalidValue);
  await field.blur().catch(() => undefined);

  const messages = await expectFieldInvalid({
    dialog,
    field,
    messagePattern: invalidFormatPattern,
    ignoredLabelsPattern,
    missingMessage: `[BUG] Error no visible al usuario para ${fieldConfig.tag}.`,
    wrongMessage: `[BUG] No se valida formato incorrecto en ${fieldConfig.tag}.`,
  });

  const { enabled } = await tryAdd(dialog);
  await expect(dialog, '[BUG] Se permite guardar con datos inválidos.').toBeVisible();
  if (!enabled) {
    testAnnotation(page, `invalid-${fieldConfig.tag}`, `El botón final quedó deshabilitado tras ingresar valor inválido en ${fieldConfig.tag}.`);
  }

  return { messages, enabled };
}

export async function validateSelectorPresence(dialog: Locator, selectorConfig: SelectorPresenceConfig) {
  const field = await findField(dialog, selectorConfig.labels);
  await expect(field, `[BUG] No se encontró el selector ${selectorConfig.tag} en el modal de alta.`).toBeVisible({ timeout: 10_000 });
  return field;
}

function testAnnotation(page: Page, type: string, description: string) {
  const info = (page as unknown as { _testInfo?: { annotations: Array<{ type: string; description: string }> } })._testInfo;
  if (!info) return;
  info.annotations.push({ type, description });
}

export async function executeComunesAddNegativeScenario(page: Page, config: AddNegativeScenarioConfig) {
  const dialog = await openComunesAddDialog(page, config.menu, config.route, config.modalPattern);

  for (const selectorField of config.selectorFields ?? []) {
    await validateSelectorPresence(dialog, selectorField);
  }

  const requiredSummaries: string[] = [];
  for (const requiredField of config.requiredFields) {
    const result = await validateRequiredField({
      page,
      dialog,
      fieldConfig: requiredField,
      ignoredLabelsPattern: config.ignoredLabelsPattern,
    });
    requiredSummaries.push(`${requiredField.tag}:${result.clearResult.reason}`);
  }

  for (const invalidField of config.invalidTextFields) {
    await validateInvalidTextField({
      page,
      dialog,
      fieldConfig: invalidField,
      ignoredLabelsPattern: config.ignoredLabelsPattern,
    });
  }

  testAnnotation(page, `${config.caseId}-required-summary`, requiredSummaries.join(' | '));
  await closeDialog(dialog, page);
}
