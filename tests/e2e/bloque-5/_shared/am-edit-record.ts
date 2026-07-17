import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { Bloque5AsientosManualesPage } from '@pages/bloque5/Bloque5AsientosManualesPage';
import { ensureAmContext } from './am-context';

type FieldKind = 'input' | 'select' | 'delete';
type EditResult = 'success' | 'validationError';

type EditField = {
  label: RegExp;
  value?: string;
  kind?: FieldKind;
};

type EditRecordCaseConfig = {
  caseId: string;
  section: string;
  view: string|RegExp;
  role: 'gestorAM';
  modalTitle: RegExp;
  fields: EditField[];
  expectedResult: EditResult;
  expectedMessages?: RegExp[];
  expectedTableValues?: string[];
  skipReason?: string;
};

export function EditRecordCase(config: EditRecordCaseConfig) {
  test(`${tagsFor(config)} edita registro y valida resultado ${config.expectedResult}`, async ({ page }) => {
    test.setTimeout(240_000);
    test.skip(Boolean(config.skipReason), config.skipReason);

    await test.step('Abrir vista del flujo de Asientos Manuales', async () => {
      await ensureAmContext(page, 'mutation');
    });

    await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
      await openAmView(page, config);
      await expect(page.getByRole('heading', { name: new RegExp(escapeRegExp(config.view), 'i') })).toBeVisible({
        timeout: 30_000,
      });
    });

    await test.step('Abrir modal Editar desde la primera fila', async () => {
      const row = page.locator('table tbody tr').first();
      await expect(row, 'Debe existir un registro para editar segun precondicion del catalogo.').toBeVisible({
        timeout: 30_000,
      });
      const editAction = row
        .getByRole('button', { name: /editar|edit|lapiz|l[aá]piz/i })
        .or(row.locator('[data-testid*="edit"], [aria-label*="edit" i], button').last())
        .first();
      await editAction.click();
    });

    const modal = page.getByRole('dialog').filter({ hasText: /Editar/i }).last();
    const updateButton = modal.getByRole('button', { name: /actualizar|guardar/i }).last();

    await test.step('Validar modal Editar', async () => {
      await expect(modal, 'Debe mostrarse el modal Editar definido por el catalogo.').toBeVisible();
      await expect(modal.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado del modal.').toBeVisible();
    });

    if (config.expectedResult === 'validationError') {
      await test.step('Activar validaciones de obligatoriedad/formato', async () => {
        for (const field of config.fields) {
          const control = fieldLocator(modal, field);
          const visible = await control.isVisible({ timeout: 2_000 }).catch(() => false);
          if (!visible) continue;
          if (field.kind === 'delete' || field.value !== undefined) {
            await fillField(page, modal, field);
          } else {
            await control.focus().catch(() => undefined);
            await control.blur().catch(() => undefined);
          }
        }
      });

      await test.step('Validar errores de edicion', async () => {
        for (const message of config.expectedMessages ?? [/requerido|obligatorio|formato|incorrecto|no v[aá]lido/i]) {
          await expect(modal.getByText(message).or(page.getByText(message)).first()).toBeVisible();
        }
      });
      return;
    }

    await test.step('Completar campos editables', async () => {
      for (const field of config.fields) {
        if (!field.value) {
          test.info().annotations.push({ type: 'TODO', description: `Dato editable no definido en catalogo para ${field.label}` });
          continue;
        }
        await fillField(page, modal, field);
      }
    });

    await test.step('Actualizar registro', async () => {
      await expect(updateButton, 'El boton Actualizar debe estar habilitado tras editar campos.').toBeEnabled();
      await updateButton.click();
    });

    await test.step('Validar edicion exitosa', async () => {
      await expect(page.getByText(/cambios guardados correctamente|hecho|actualizado/i).first()).toBeVisible({
        timeout: 30_000,
      });
      for (const value of config.expectedTableValues ?? []) {
        await expect(page.getByText(value, { exact: false }).first()).toBeVisible();
      }
    });
  });
}

async function openAmView(page: Page, config: Pick<EditRecordCaseConfig, 'section' | 'view'>) {
  const amPage = new Bloque5AsientosManualesPage(page);
  await amPage.openSidebarView(sectionName(config.section), config.view);
}

function fieldLocator(modal: Locator, field: EditField) {
  return modal
    .getByLabel(field.label)
    .or(modal.getByPlaceholder(field.label))
    .or(modal.getByRole('textbox', { name: field.label }))
    .or(modal.getByRole('combobox', { name: field.label }))
    .or(modal.locator('label').filter({ hasText: field.label }).locator('..').locator('input,textarea,[role="combobox"]'))
    .first();
}

async function fillField(page: Page, modal: Locator, field: EditField) {
  const control = fieldLocator(modal, field);
  await expect(control, `Debe existir el campo ${field.label}`).toBeVisible();

  if (field.kind === 'select') {
    await control.click();
    const value = field.value ?? '';
    const option = page
      .getByRole('option', { name: new RegExp(`^${escapeRegExp(value)}$`, 'i') })
      .or(page.locator('[data-radix-popper-content-wrapper]').getByText(new RegExp(`^${escapeRegExp(value)}$`, 'i')))
      .or(page.locator('[role="listbox"]').getByText(new RegExp(`^${escapeRegExp(value)}$`, 'i')))
      .first();

    await expect(option, `Debe existir la opcion ${value}`).toBeVisible({ timeout: 10_000 });
    await option.click();
    return;
  }

  if (field.kind === 'delete') {
    await clearField(control);
    return;
  }

  await control.fill(field.value ?? '');
}

async function clearField(control: Locator) {
  const nestedEditable = control.locator('input,textarea').first();
  const hasNestedEditable = await nestedEditable.isVisible({ timeout: 1_000 }).catch(() => false);
  const target = hasNestedEditable ? nestedEditable : control;

  await expect(target, 'Debe existir el campo editable para poder borrar su valor.').toBeVisible();

  try {
    await target.fill('');
  } catch (error) {
    await target.click();
    await target.press('Control+A');
    await target.press('Delete');
  }

  await expect(target, 'El campo definido debe quedar vacio para disparar la validacion.').toHaveValue('');
  await target.blur().catch(() => undefined);
}

function tagsFor(config: Pick<EditRecordCaseConfig, 'caseId'>) {
  return `@bloque5 @${config.caseId} @am @editar @gestor-asiento @regression`;
}

function sectionName(value: string) {
  return /^parametrizaci/i.test(value) ? 'Parametrizaci\u00f3n' : value;
}

function escapeRegExp(value: string | RegExp): string {
  if (value instanceof RegExp) {
    return value.source;
  }

  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
