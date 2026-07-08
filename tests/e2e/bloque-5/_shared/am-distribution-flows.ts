import fs from 'fs';
import * as XLSX from 'xlsx';
import { expect } from '@fixtures/base.fixture';
import { Bloque5AsientosManualesPage } from '@pages/bloque5/Bloque5AsientosManualesPage';
import { acceptInformationModal, AM_DISTRIBUTION_PERIOD, waitForAmLoading } from './am-context';
import { adminCredentials, gestorAmCredentials, loginAndAssertDistribuciones } from './am-permissions';
import type { Locator, Page } from '@playwright/test';

export type DistributionCredentialsRole = 'admin' | 'gestorAM';

export type CreatedDistributionData = {
  name: string;
  tipo: string;
  periodo: string;
  version: string;
  tasaCambio: string;
  seccion: string;
};

export const validDistributionData = {
  tipo: 'Real NIIF',
  periodo: AM_DISTRIBUTION_PERIOD,
  version: '1',
  tasaCambio: '13.98',
  seccion: 'Flujo del mes',
};

export const duplicateDistributionData: CreatedDistributionData = {
  name: '202506_Real NIIF_Flujo del mes',
  ...validDistributionData,
};

export async function loginForDistribution(page: Page, role: DistributionCredentialsRole): Promise<void> {
  const credentials = role === 'admin' ? adminCredentials : gestorAmCredentials;
  const roleName = role === 'admin' ? 'Administrador de Gastos' : 'Gestor de Asientos Manuales';
  await loginAndAssertDistribuciones(page, credentials, roleName);

  const amPage = new Bloque5AsientosManualesPage(page);
  await amPage.openHome();
  await acceptInformationModal(page);
  await waitForAmLoading(page);
}

export async function openCreateDistributionModal(page: Page): Promise<Locator> {
  await page.getByRole('button', { name: /Nueva Distribuci[oó]n/i }).click();

  const dialog = page
    .getByRole('dialog', { name: /Crear distribuci[oó]n/i })
    .or(page.locator('[role="dialog"]').filter({ hasText: /Crear distribuci[oó]n/i }))
    .first();

  await expect(dialog, 'Debe levantarse el modal Crear distribucion.').toBeVisible({ timeout: 15_000 });
  await expect(createButton(dialog), 'El boton Crear debe iniciar deshabilitado.').toBeDisabled();
  return dialog;
}

export async function fillDistributionForm(page: Page, dialog: Locator, data: CreatedDistributionData): Promise<void> {
  await fillTextField(dialog, /Nombre/i, data.name);
  await selectOption(page, dialog, /Tipo/i, data.tipo);
  await selectOption(page, dialog, /Periodo/i, data.periodo);
  await fillTextField(dialog, /Versi[oó]n/i, data.version);
  await fillTextField(dialog, /Tasa de cambio/i, data.tasaCambio);
  await selectOption(page, dialog, /Secciones?|Secci[oó]n/i, data.seccion);
}

export async function createDistribution(page: Page, data: CreatedDistributionData): Promise<void> {
  const dialog = await openCreateDistributionModal(page);
  await fillDistributionForm(page, dialog, data);
  const button = createButton(dialog);
  await expect(button, 'El boton Crear debe habilitarse con los campos validos del catalogo.').toBeEnabled({
    timeout: 15_000,
  });
  await button.click();
}

export async function expectCreateSuccess(page: Page, name: string): Promise<void> {
  await expect(
    page.getByText(/Hecho.*registro se agreg[oó] sin problemas|registro se agreg[oó] sin problemas/i).first(),
    'Debe mostrarse mensaje de exito al crear distribucion.',
  ).toBeVisible({ timeout: 30_000 });
  await expect(page.getByText(name, { exact: false }).first(), 'La distribucion creada debe verse en frontend.').toBeVisible({
    timeout: 30_000,
  });
}

export async function expectCreateError(page: Page, expectedMessage: RegExp): Promise<void> {
  await expect(page.getByText(expectedMessage).first(), 'Debe mostrarse el mensaje de error definido en catalogo.').toBeVisible({
    timeout: 30_000,
  });
}

export function uniqueDistributionName(prefix = 'AM Playwright'): string {
  return `${prefix} ${Date.now()}`;
}

export async function findFirstDistributionRow(page: Page, context: string): Promise<Locator> {
  const rows = distributionRows(page);
  await expect(rows.first(), `[DATA] Debe existir una distribucion visible para ${context}.`).toBeVisible({
    timeout: 30_000,
  });
  return rows.first();
}

export async function findDistributionRowByStatus(page: Page, status: RegExp, context: string): Promise<Locator> {
  const rows = distributionRows(page);
  await expect(rows.first(), `[DATA] Debe haber distribuciones para buscar estado ${context}.`).toBeVisible({
    timeout: 30_000,
  });

  const count = await rows.count();
  for (let index = 0; index < count; index += 1) {
    const row = rows.nth(index);
    const text = await row.innerText().catch(() => '');
    if (status.test(text)) {
      return row;
    }
  }

  throw new Error(`[DATA] No existe una distribucion en estado ${context}.`);
}

export async function openViewDistributionModal(page: Page, row: Locator): Promise<Locator> {
  const directView = row
    .getByRole('button', { name: /ver|visualizar|detalle/i })
    .or(row.locator('[aria-label*="ver" i], [title*="ver" i], [data-testid*="view" i], [data-testid*="ver" i]'))
    .first();

  if (await directView.isVisible({ timeout: 2_000 }).catch(() => false)) {
    await directView.click();
  } else {
    await row.getByRole('button').first().click();
  }

  const modal = page.getByRole('dialog').or(page.locator('[role="dialog"], form')).first();
  await expect(modal, 'Debe abrirse el modal de progreso de la distribucion.').toBeVisible({ timeout: 15_000 });
  return modal;
}

export async function assertProgressModalMatchesCatalog(modal: Locator, rowText: string): Promise<void> {
  await expect(modal, 'El modal debe mostrar informacion de fase o proceso.').toContainText(/Fase|Proceso|Progreso|avance/i);
  await expect(modal, 'El modal debe mostrar informacion porcentual o de estado.').toContainText(/%|Sin ejecutar|Complet/i);

  if (/Creada/i.test(rowText)) {
    await expect(modal, 'Si el estado es Creada, las fases deben mostrarse sin ejecutar.').toContainText(/Sin ejecutar/i);
  }
}

export async function assertActionHiddenForStatuses(
  page: Page,
  statuses: { label: string; pattern: RegExp }[],
  action: 'copy' | 'delete',
): Promise<void> {
  for (const status of statuses) {
    const row = await findDistributionRowByStatus(page, status.pattern, status.label);
    await assertRowActionHidden(page, row, action, status.label);
  }
}

export async function assertRowActionHidden(page: Page, row: Locator, action: 'copy' | 'delete', context: string): Promise<void> {
  const directAction = actionLocator(row, action).first();
  await expect(directAction, `No debe mostrarse ${action} directo para ${context}.`).toBeHidden({ timeout: 5_000 });

  const buttons = row.getByRole('button');
  const buttonCount = await buttons.count().catch(() => 0);
  if (buttonCount === 0) return;

  await buttons.last().click();
  const menu = page.locator('[role="menu"], [data-radix-popper-content-wrapper]').last();
  if (!(await menu.isVisible({ timeout: 5_000 }).catch(() => false))) return;

  const menuAction = menu
    .getByRole('menuitem', { name: actionPattern(action) })
    .or(menu.getByRole('button', { name: actionPattern(action) }))
    .or(menu.getByText(actionPattern(action)))
    .first();
  await expect(menuAction, `No debe mostrarse ${action} en menu para ${context}.`).toBeHidden({ timeout: 5_000 });
  await page.keyboard.press('Escape');
}

export async function openDeleteConfirmation(page: Page, row: Locator): Promise<Locator> {
  const deleteButton = actionLocator(row, 'delete').first();
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

export async function confirmDelete(page: Page, modal: Locator, deletedName: string): Promise<void> {
  await modal.getByRole('button', { name: /aceptar|confirmar|eliminar/i }).last().click();
  await expect(page.getByText(/Registro eliminado con [eé]xito|eliminado con [eé]xito/i).first()).toBeVisible({
    timeout: 30_000,
  });
  await expect(page.getByText(deletedName, { exact: false }).first(), 'El registro eliminado ya no debe verse en tabla.').toBeHidden({
    timeout: 30_000,
  });
}

export async function selectDistributionAndAssert(page: Page, row: Locator): Promise<void> {
  const name = (await row.locator('td').first().innerText()).replace(/\s+/g, ' ').trim();
  await row.locator('td').first().click();

  const modal = page
    .getByRole('dialog')
    .filter({ hasText: /informaci[oó]n que se mostrar[aá].*distribuci[oó]n seleccionada|distribuci[oó]n seleccionada/i })
    .first();
  await expect(modal, 'Debe mostrarse el modal informativo de distribucion seleccionada.').toBeVisible({
    timeout: 15_000,
  });
  await modal.getByRole('button', { name: /Aceptar/i }).click();

  await expect(page.getByText(name, { exact: false }).first(), 'La seleccion debe actualizar el dropdown principal.').toBeVisible({
    timeout: 20_000,
  });
  await expect(row, 'La distribucion seleccionada debe quedar marcada en la tabla.').toBeVisible();

  await page.getByRole('button', { name: /Procesos/i }).or(page.getByText(/^Procesos$/i)).first().click();
  await expect(page.locator('body'), 'La seccion Procesos debe mostrar el estado de la distribucion seleccionada.').toContainText(
    /Estado|Proceso|Fase/i,
    { timeout: 20_000 },
  );
}

export async function downloadDistributionAndAssertIntegrity(page: Page): Promise<void> {
  const button = page
    .getByTestId(/download/i)
    .or(page.getByRole('button', { name: /Descargar/i }))
    .or(page.locator('[aria-label*="descargar" i], [title*="descargar" i], button[id*="download" i]'))
    .first();

  await expect(button, 'Debe existir el boton Descargar en Distribucion.').toBeVisible({ timeout: 20_000 });
  await expect(button, 'El boton Descargar debe estar habilitado.').toBeEnabled({ timeout: 20_000 });

  const [download] = await Promise.all([page.waitForEvent('download', { timeout: 60_000 }), button.click()]);
  const filename = download.suggestedFilename();
  expect(filename, 'El archivo descargado debe tener nombre valido.').toBeTruthy();
  expect(filename.toLowerCase(), `El archivo descargado debe ser Excel o CSV. Recibido: ${filename}`).toMatch(/\.(xlsx?|csv)$/i);
  expect(await download.failure(), 'La descarga no debe fallar.').toBeNull();

  const downloadPath = await download.path();
  const stats = fs.statSync(downloadPath);
  expect(stats.size, 'El archivo descargado debe tener contenido.').toBeGreaterThan(0);

  if (/\.xlsx?$/i.test(filename)) {
    const workbook = XLSX.readFile(downloadPath);
    const firstSheet = workbook.SheetNames[0];
    expect(firstSheet, 'El Excel debe conservar al menos una hoja.').toBeTruthy();
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet], { header: 1, blankrows: false }) as unknown[][];
    expect(rows.length, 'El archivo debe conservar cabeceras y datos.').toBeGreaterThan(1);
    expect(rows[0].filter(Boolean).length, 'La primera fila debe conservar columnas.').toBeGreaterThan(0);
  }
}

function distributionRows(page: Page): Locator {
  return page.locator('table tbody tr');
}

function createButton(dialog: Locator): Locator {
  return dialog.getByRole('button', { name: /^Crear$/i }).first();
}

async function fillTextField(dialog: Locator, label: RegExp, value: string): Promise<void> {
  const field = dialog
    .getByRole('textbox', { name: label })
    .or(dialog.getByLabel(label))
    .or(dialog.locator('input').filter({ hasText: label }))
    .first();
  await expect(field, `Debe existir el campo ${label.source}.`).toBeVisible({ timeout: 10_000 });
  await field.fill(value);
}

async function selectOption(page: Page, dialog: Locator, label: RegExp, value: string): Promise<void> {
  const trigger = dialog
    .getByRole('combobox', { name: label })
    .or(dialog.getByLabel(label))
    .or(dialog.getByRole('button', { name: label }))
    .first();
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

function actionLocator(row: Locator, action: 'copy' | 'delete'): Locator {
  if (action === 'copy') {
    return row.locator(
      '[aria-label*="copiar" i], [aria-label*="copy" i], [title*="copiar" i], [title*="copy" i], [data-testid*="copiar" i], [data-testid*="copy" i]',
    );
  }

  return row.locator(
    '[aria-label*="eliminar" i], [aria-label*="delete" i], [title*="eliminar" i], [title*="delete" i], [data-testid*="eliminar" i], [data-testid*="delete" i], [data-testid*="trash" i]',
  );
}

function actionPattern(action: 'copy' | 'delete'): RegExp {
  return action === 'copy' ? /copiar|copy/i : /eliminar|delete/i;
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
