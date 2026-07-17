import { expect, Locator, Page } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { GF_DISTRIBUTION_PERIOD, acceptInformationModal, waitForGfLoading } from './gf-context';

export type GfDistributionRole = 'admin' | 'gestorGF';

export type GfDistributionData = {
 name: string;
 tipo: string;
 periodo: string;
 version: string;
 tasaCambio: string;
 seccion: string;
};

export const validGfDistributionData = {
 tipo: 'Real NIIF',
 periodo: GF_DISTRIBUTION_PERIOD,
 version: '1',
 tasaCambio: '13.98',
 seccion: 'Flujo del mes',
};

export async function loginForGfDistribution(page: Page, role: GfDistributionRole): Promise<void> {
 const loginPage = new LoginPage(page);
 if (role === 'admin') {
 await loginPage.login(env.username, env.password);
 } else {
 await loginPage.login(env.gestorGFUsername, env.gestorGFPassword);
 }

 if (!/\/distribuciones/i.test(page.url())) {
 await page.goto('/distribuciones/', { waitUntil: 'commit' });
 }

 await expect(page, 'Debe abrir Distribuciones para operar distribuciones GF.').toHaveURL(/\/distribuciones/i, {
 timeout: 40_000,
 });
 await waitForGfLoading(page);
 await acceptInformationModal(page);
}

export function uniqueGfDistributionName(prefix = 'GF eliminar creada'): string {
 return `${prefix} ${Date.now()}`;
}

export async function createGfDistribution(page: Page, data: GfDistributionData): Promise<void> {
 await page.getByRole('button', { name: /Nueva Distribuci[oó]n/i }).click();

 const dialog = page
 .getByRole('dialog', { name: /Crear distribuci[oó]n/i })
 .or(page.locator('[role="dialog"]').filter({ hasText: /Crear distribuci[oó]n/i }))
 .first();

 await expect(dialog, 'Debe levantarse el modal Crear distribucion.').toBeVisible({ timeout: 15_000 });
 await fillTextField(dialog, /Nombre/i, data.name);
 await selectOption(page, dialog, /Tipo/i, data.tipo);
 await selectOption(page, dialog, /Periodo/i, data.periodo);
 await fillTextField(dialog, /Versi[oó]n/i, data.version);
 await fillTextField(dialog, /Tasa de cambio/i, data.tasaCambio);
 await selectOption(page, dialog, /Secciones?|Secci[oó]n/i, data.seccion);

 const createButton = dialog.getByRole('button', { name: /^Crear$/i }).first();
 await expect(createButton, 'El boton Crear debe habilitarse con datos validos.').toBeEnabled({ timeout: 15_000 });
 await createButton.click();
}

export async function expectGfCreateSuccess(page: Page, name: string): Promise<void> {
 await expect(
 page.getByText(/Hecho.*registro se agreg[oó] sin problemas|registro se agreg[oó] sin problemas/i).first(),
 'Debe mostrarse mensaje de exito al crear distribucion.',
 ).toBeVisible({ timeout: 30_000 });
 await expect(page.getByText(name, { exact: false }).first(), 'La distribucion creada debe verse en la tabla.').toBeVisible({
 timeout: 30_000,
 });
}

export async function openGfDeleteConfirmation(page: Page, row: Locator): Promise<Locator> {
 const deleteButton = row.locator(actionLocatorSelector(/eliminar|delete/i)).first();
 if (await deleteButton.isVisible({ timeout: 2_000 }).catch(() => false)) {
 await deleteButton.click();
 } else {
 await row.getByRole('button').last().click();
 const deleteOption = page
 .getByRole('menuitem', { name: /eliminar|delete/i })
 .or(page.getByRole('button', { name: /eliminar|delete/i }))
 .or(page.getByText(/eliminar/i))
 .first();
 await expect(deleteOption, 'Debe existir accion eliminar en el menu.').toBeVisible({ timeout: 10_000 });
 await deleteOption.click();
 }

 const modal = page
 .getByRole('dialog')
 .filter({ hasText: /Se eliminar[aá]n todos los datos asociados|Desea continuar|eliminar/i })
 .first();
 await expect(modal, 'Debe levantarse el modal de advertencia de eliminacion.').toBeVisible({ timeout: 15_000 });
 return modal;
}

export async function confirmGfDistributionDelete(page: Page, modal: Locator, deletedName?: string): Promise<void> {
 await modal.getByRole('button', { name: /aceptar|confirmar|eliminar/i }).last().click();
 await expect(page.getByText(/Registro eliminado con [eé]xito|eliminado con [eé]xito/i).first()).toBeVisible({
 timeout: 30_000,
 });

 if (deletedName) {
 await expect(page.getByText(deletedName, { exact: false }).first(), 'La distribucion eliminada ya no debe verse.').toBeHidden({
 timeout: 30_000,
 });
 }
}

export async function findDistributionRowByStatus(page: Page, status: RegExp, context: string): Promise<Locator> {
  const rows = page.locator('table tbody tr');
  await expect(rows.first(), 'La tabla debe tener filas cargadas.').toBeVisible({ timeout: 20_000 });
  const rowCount = await rows.count().catch(() => 0);

  for (let index = 0; index < rowCount; index += 1) {
    const row = rows.nth(index);
    const rowText = await row.innerText().catch(() => '');
    if (status.test(rowText)) {
      await expect(row, `Debe existir una distribucion ${context}.`).toBeVisible({ timeout: 10_000 });
      return row;
    }
  }

  throw new Error(`[DATA] No existe una distribucion ${context}.`);
}

export async function assertRowActionHidden(page: Page, row: Locator, actionName: RegExp, context: string): Promise<void> {
  const directAction = row
    .getByRole('button', { name: actionName })
    .or(row.locator(actionLocatorSelector(actionName)))
    .first();

  await expect(directAction, `No debe mostrarse accion ${actionName.source} directa en ${context}.`).toBeHidden({
    timeout: 5_000,
  });

  const buttons = row.getByRole('button');
  const buttonCount = await buttons.count().catch(() => 0);
  if (buttonCount === 0) return;

  await buttons.last().click();
  const menu = page.locator('[role="menu"], [data-radix-popper-content-wrapper], [role="listbox"]').last();
  const menuVisible = await menu.isVisible({ timeout: 5_000 }).catch(() => false);
  if (!menuVisible) return;

  const menuAction = menu
    .getByRole('menuitem', { name: actionName })
    .or(menu.getByRole('button', { name: actionName }))
    .or(menu.getByText(actionName))
    .first();

  await expect(menuAction, `No debe mostrarse accion ${actionName.source} en menu para ${context}.`).toBeHidden({
    timeout: 5_000,
  });
  await page.keyboard.press('Escape');
}

function actionLocatorSelector(actionName: RegExp): string {
  if (/copiar|copy/i.test(actionName.source)) {
    return '[aria-label*="copiar" i], [aria-label*="copy" i], [title*="copiar" i], [title*="copy" i], [data-testid*="copiar" i], [data-testid*="copy" i]';
  }

  return '[aria-label*="eliminar" i], [aria-label*="delete" i], [title*="eliminar" i], [title*="delete" i], [data-testid*="eliminar" i], [data-testid*="delete" i], [data-testid*="trash" i]';
}

async function fillTextField(dialog: Locator, label: RegExp, value: string): Promise<void> {
 const field = dialog.getByRole('textbox', { name: label }).or(dialog.getByLabel(label)).or(dialog.locator('input')).first();
 await expect(field, `Debe existir el campo ${label.source}.`).toBeVisible({ timeout: 10_000 });
 await field.fill(value);
}

async function selectOption(page: Page, dialog: Locator, label: RegExp, value: string): Promise<void> {
 const trigger = dialog.getByRole('combobox', { name: label }).or(dialog.getByLabel(label)).or(dialog.getByRole('button', { name: label })).first();
 await expect(trigger, `Debe existir el selector ${label.source}.`).toBeVisible({ timeout: 10_000 });
 await trigger.click();

 const optionPattern = new RegExp(escapeRegex(value), 'i');
 const option = page
 .getByRole('option', { name: optionPattern })
 .or(page.getByRole('menuitem', { name: optionPattern }))
 .or(page.locator('[data-radix-popper-content-wrapper], [role="listbox"], [role="menu"]').getByText(optionPattern))
 .first();
 await expect(option, `Debe existir la opcion ${value}.`).toBeVisible({ timeout: 15_000 });
 await option.click();
}

function escapeRegex(value: string): string {
 return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
