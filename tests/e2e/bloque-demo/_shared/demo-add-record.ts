import { test, expect } from './demo.fixture';
import type { Locator, Page } from '@playwright/test';
import { ensureAmContext } from '../../bloque-5/_shared/am-context';

type FieldKind = 'input' | 'select';

type DemoAddField = {
  label: RegExp;
  value: string;
  kind?: FieldKind;
};

type DemoAddRecordConfig = {
  caseId: string;
  section: string;
  view: string;
  modalTitle: RegExp;
  fields: DemoAddField[];
  expectedTableValues: string[];
};

export function defineDemoAddRecordCase(config: DemoAddRecordConfig): void {
  test(`@bloque-demo @${config.caseId} @am @registrar @gestor-asiento @regression agrega Cuenta Contable y valida persistencia`, async ({
    page,
    bloque5AsientosManualesPage,
  }) => {
    test.setTimeout(240_000);

    await test.step('Abrir vista del flujo de Asientos Manuales', async () => {
      await ensureAmContext(page, 'mutation');
    });

    await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
      await bloque5AsientosManualesPage.openSidebarView(sectionName(config.section), config.view);
      await expect(page.getByRole('heading', { name: new RegExp(escapeRegExp(config.view), 'i') })).toBeVisible({
        timeout: 30_000,
      });
    });

    await test.step('Abrir modal Agregar', async () => {
      await visibleButton(page, /^agregar$/i).click();
    });

    const modal = page.getByRole('dialog').filter({ hasText: /Agregar/i }).last();
    const addButton = modal.getByRole('button', { name: /^agregar$/i }).last();

    await test.step('Validar modal Agregar Cuenta Contable', async () => {
      await expect(modal, 'Debe mostrarse el modal Agregar definido por el catalogo.').toBeVisible();
      await expect(modal.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado del modal.').toBeVisible();
    });

    await test.step('Completar campos del formulario', async () => {
      for (const field of config.fields) {
        await fillField(page, modal, field);
      }
    });

    await test.step('Enviar formulario', async () => {
      await expect(addButton, 'El boton Agregar debe habilitarse tras completar los campos requeridos.').toBeEnabled();
      await addButton.click();
    });

    await test.step('Validar alta exitosa en tabla', async () => {
      await expect(page.getByText(/hecho|registro se agreg/i).first(), 'Debe mostrarse mensaje de exito.').toBeVisible({
        timeout: 30_000,
      });

      const table = page.locator('table, [role="table"]').first();
      await expect(table, 'Debe existir tabla de Cuentas Contables.').toBeVisible({ timeout: 20_000 });
      for (const value of config.expectedTableValues) {
        await expect(table, `La tabla debe mostrar ${value}.`).toContainText(value, { timeout: 30_000 });
      }
    });
  });
}

function visibleButton(page: Page, name: RegExp): Locator {
  return page.getByRole('button', { name }).or(page.locator('button').filter({ hasText: name })).first();
}

function fieldLocator(modal: Locator, field: DemoAddField): Locator {
  return modal
    .getByLabel(field.label)
    .or(modal.getByPlaceholder(field.label))
    .or(modal.getByRole('textbox', { name: field.label }))
    .or(modal.getByRole('combobox', { name: field.label }))
    .or(modal.locator('label').filter({ hasText: field.label }).locator('..').locator('input,textarea,[role="combobox"]'))
    .first();
}

async function fillField(page: Page, modal: Locator, field: DemoAddField): Promise<void> {
  const control = fieldLocator(modal, field);
  await expect(control, `Debe existir el campo ${field.label.source}.`).toBeVisible({ timeout: 10_000 });

  if (field.kind === 'select') {
    await control.click();
    const option = page
      .getByRole('option', { name: new RegExp(`^${escapeRegExp(field.value)}$`, 'i') })
      .or(page.locator('[data-radix-popper-content-wrapper]').getByText(new RegExp(`^${escapeRegExp(field.value)}$`, 'i')))
      .or(page.locator('[role="listbox"]').getByText(new RegExp(`^${escapeRegExp(field.value)}$`, 'i')))
      .first();

    await expect(option, `Debe existir la opcion ${field.value}.`).toBeVisible({ timeout: 10_000 });
    await option.click();
    return;
  }

  await control.fill(field.value);
}

function sectionName(value: string): string {
  return /^parametrizaci/i.test(value) ? 'Parametrizaci\u00f3n' : value;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
