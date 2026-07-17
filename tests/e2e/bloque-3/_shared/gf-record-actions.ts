import { expect, test } from './bloque3.fixture';
import type { Locator, Page } from '@playwright/test';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';
import { ensureGfSession, openGfView } from './gf-upload';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import fs from 'fs';
import path from 'path';

type GfRecordOperation = 'add' | 'edit' | 'delete';
type GfRecordResult = 'success' | 'duplicateError' | 'validationError' | 'processError';

export type GfRecordCaseConfig = {
 caseId: string;
 section: string;
 view: string;
 operation: GfRecordOperation;
 expectedResult: GfRecordResult;
 modalTitle?: RegExp;
 role?: 'gestorGF' | 'admin';
 tags?: string[];
};

export function GfRecordCase(config: GfRecordCaseConfig): void {
 if (config.role === 'admin') {
 test.use({
 storageState: fs.existsSync(path.resolve('.auth/admin.json'))
 ? '.auth/admin.json'
 : { cookies: [], origins: [] },
 });
 }

 test(`${tagsFor(config)} ${testTitle(config)}`, async ({ page }) => {
 test.setTimeout(300_000);

 await test.step('Abrir contexto de Gastos Financieros', async () => {
 if (config.role === 'admin') {
 const loginPage = new LoginPage(page);
 await loginPage.login(env.username, env.password);
 }
 await ensureGfSession(page);
 });

 await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
 await openGfView(page, config);
 });

 if (config.operation === 'add') {
 await runAddCase(page, config);
 return;
 }

 if (config.operation === 'edit') {
 await runEditCase(page, config);
 return;
 }

 await runDeleteCase(page, config);
 });
}

async function runAddCase(page: Page, config: GfRecordCaseConfig): Promise<void> {
 await visibleButton(page, /^agregar$/i).click();

 const modal = page.getByRole('dialog').filter({ hasText: /Agregar/i }).last();
 await expect(modal, 'Debe abrirse el modal Agregar del catalogo.').toBeVisible({ timeout: 20_000 });
 if (config.modalTitle) {
 await expect(modal.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado del modal Agregar.').toBeVisible();
 }

 const addButton = modal.getByRole('button', { name: /^agregar$/i }).last();

 if (config.expectedResult === 'validationError') {
 await triggerValidation(modal);
 await expect(
 addButton.or(modal.getByRole('button', { name: /guardar|aceptar/i }).last()),
 'El formulario debe bloquear el alta con datos vacios o invalidos.',
 ).toBeDisabled({ timeout: 10_000 }).catch(async () => {
 await expect(modal.getByText(/requerido|obligatorio|formato|inv[aá]lido|incorrecto/i).first()).toBeVisible({
 timeout: 10_000,
 });
 });
 return;
 }

 await fillVisibleFormControls(page, modal, config);
 await expect(addButton, 'El boton Agregar debe habilitarse tras completar el formulario.').toBeEnabled({
 timeout: 20_000,
 });
 await addButton.click();

 if (config.expectedResult === 'duplicateError') {
 await expect(
 page.getByText(/registro que intentas agregar ya existe|registro duplicado|ya existe en el sistema/i).first(),
 'Debe mostrarse el error de duplicidad definido por catalogo.',
 ).toBeVisible({ timeout: 30_000 });
 return;
 }

 await expect(page.getByText(/hecho|registro se agreg[oó] sin problemas|agregado correctamente/i).first()).toBeVisible({
 timeout: 30_000,
 });
}

async function runEditCase(page: Page, config: GfRecordCaseConfig): Promise<void> {
 const row = page.locator('table tbody tr').first();
 await expect(row, 'Debe existir al menos un registro para editar.').toBeVisible({ timeout: 30_000 });
 await openRowAction(page, row, /editar|edit|l[aá]piz/i, 'editar');

 const modal = page.getByRole('dialog').filter({ hasText: /Editar|Actualizar/i }).last();
 await expect(modal, 'Debe abrirse el modal Editar del catalogo.').toBeVisible({ timeout: 20_000 });
 if (config.modalTitle) {
 await expect(modal.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado del modal Editar.').toBeVisible();
 }

 if (config.expectedResult === 'validationError') {
 await clearFirstEditableControl(modal);
 await expect(modal.getByText(/requerido|obligatorio|formato|inv[aá]lido|incorrecto/i).first()).toBeVisible({
 timeout: 10_000,
 }).catch(async () => {
 await expect(modal.getByRole('button', { name: /actualizar|guardar/i }).last()).toBeDisabled({ timeout: 10_000 });
 });
 return;
 }

 await fillVisibleFormControls(page, modal, config);
 await modal.getByRole('button', { name: /actualizar|guardar/i }).last().click();
 await expect(page.getByText(/cambios guardados correctamente|actualizado|hecho/i).first()).toBeVisible({
 timeout: 30_000,
 });
}

async function runDeleteCase(page: Page, config: GfRecordCaseConfig): Promise<void> {
 const row = page.locator('table tbody tr').first();
 await expect(row, 'Debe existir al menos un registro para eliminar.').toBeVisible({ timeout: 30_000 });
 await openRowAction(page, row, /eliminar|borrar|delete/i, 'eliminar');

 const modal = page.getByRole('alertdialog').or(page.getByRole('dialog')).first();
 await expect(modal, 'Debe mostrarse el modal de confirmacion de eliminacion.').toBeVisible({ timeout: 15_000 });
 await expect(
 modal.getByText(/seguro.*eliminar|desea eliminar|eliminar este registro/i).or(page.getByText(/seguro.*eliminar|desea eliminar|eliminar este registro/i)).first(),
 'Debe mostrarse la advertencia de eliminacion del catalogo.',
 ).toBeVisible({ timeout: 10_000 });

 await modal.getByRole('button', { name: /aceptar|confirmar|eliminar/i }).last().click();

 if (config.expectedResult === 'processError') {
 await expect(
 page.getByText(/proceso en ejecuci[oó]n|no es posible editar o eliminar|no ha sido eliminado/i).first(),
 'Debe mostrarse la restriccion de negocio al eliminar.',
 ).toBeVisible({ timeout: 30_000 });
 return;
 }

 await expect(page.getByText(/registro eliminado con [eé]xito|eliminado correctamente/i).first()).toBeVisible({
 timeout: 30_000,
 });
}

async function openRowAction(page: Page, row: Locator, action: RegExp, context: string): Promise<void> {
 const directAction = row
 .getByRole('button', { name: action })
 .or(row.locator(actionSelector(action)))
 .first();

 if (await directAction.isVisible({ timeout: 2_000 }).catch(() => false)) {
 await directAction.click();
 return;
 }

 const actionButton = row
 .getByRole('button', { name: /acciones|opciones|more|m[aá]s/i })
 .or(row.locator('[data-testid*="action" i], [aria-label*="acciones" i], [title*="acciones" i]'))
 .or(row.getByRole('button').last())
 .first();

 await expect(actionButton, `Debe existir accion de fila para ${context}.`).toBeVisible({ timeout: 10_000 });
 await actionButton.click();

 const menuAction = page
 .getByRole('menuitem', { name: action })
 .or(page.getByRole('button', { name: action }))
 .or(page.getByText(action))
 .first();

 await expect(menuAction, `Debe existir opcion ${context} en el menu de acciones.`).toBeVisible({ timeout: 10_000 });
 await menuAction.click();
}

async function fillVisibleFormControls(page: Page, modal: Locator, config: GfRecordCaseConfig): Promise<void> {
 const controls = modal.locator('input:not([type="hidden"]):not([type="file"]), textarea');
 const count = await controls.count().catch(() => 0);

 for (let index = 0; index < count; index += 1) {
 const control = controls.nth(index);
 if (!(await isEditable(control))) continue;
 await fillControl(control, valueForControl(await controlLabel(control), config, index));
 }

 const triggers = modal
 .getByRole('combobox')
 .or(modal.locator('button[aria-haspopup="listbox"], button[aria-haspopup="menu"]'));
 const triggerCount = await triggers.count().catch(() => 0);
 for (let index = 0; index < triggerCount; index += 1) {
 const trigger = triggers.nth(index);
 if (!(await isEditable(trigger))) continue;
 await selectFirstAvailableOption(page, trigger);
 }
}

async function triggerValidation(modal: Locator): Promise<void> {
 const controls = modal.locator('input:not([type="hidden"]):not([type="file"]), textarea');
 const count = await controls.count().catch(() => 0);
 for (let index = 0; index < Math.min(count, 5); index += 1) {
 const control = controls.nth(index);
 if (await isEditable(control)) {
 await control.focus().catch(() => undefined);
 await control.blur().catch(() => undefined);
 }
 }
}

async function clearFirstEditableControl(modal: Locator): Promise<void> {
 const controls = modal.locator('input:not([type="hidden"]):not([type="file"]), textarea');
 const count = await controls.count().catch(() => 0);
 for (let index = 0; index < count; index += 1) {
 const control = controls.nth(index);
 if (!(await isEditable(control))) continue;
 await fillControl(control, '');
 await control.blur().catch(() => undefined);
 return;
 }
 await triggerValidation(modal);
}

async function isEditable(locator: Locator): Promise<boolean> {
 return (await locator.isVisible({ timeout: 500 }).catch(() => false))
 && (await locator.isEnabled({ timeout: 500 }).catch(() => false));
}

async function fillControl(control: Locator, value: string): Promise<void> {
 await control.fill(value).catch(async () => {
 await control.click();
 await control.press('Control+A');
 await control.pressSequentially(value);
 });
}

async function selectFirstAvailableOption(page: Page, trigger: Locator): Promise<void> {
 await trigger.click();
 const option = page
 .getByRole('option')
 .or(page.getByRole('menuitem'))
 .or(page.locator('[role="listbox"], [role="menu"], [data-radix-popper-content-wrapper]').locator('[data-value], [role="option"], [role="menuitem"]'))
 .filter({ hasNotText: /^$/ })
 .first();

 if (await option.isVisible({ timeout: 5_000 }).catch(() => false)) {
 await option.click();
 return;
 }

 await page.keyboard.press('Escape').catch(() => undefined);
}

async function controlLabel(control: Locator): Promise<string> {
 const label = await control.getAttribute('aria-label').catch(() => null);
 if (label) return label;
 const placeholder = await control.getAttribute('placeholder').catch(() => null);
 if (placeholder) return placeholder;
 return control.evaluate((node) => {
 const id = (node as HTMLInputElement).id;
 if (id) {
 const found = document.querySelector(`label[for="${id}"]`);
 if (found?.textContent) return found.textContent;
 }
 return node.parentElement?.textContent ?? '';
 }).catch(() => '');
}

function valueForControl(label: string, config: GfRecordCaseConfig, index: number): string {
 const normalized = label.toLowerCase();
 if (/fecha|date/.test(normalized)) return '01/01/2025';
 if (/a[nñ]o|year/.test(normalized)) return '2025';
 if (/mes|month/.test(normalized)) return '1';
 if (/monto|aum|ingreso|tasa|porcentaje|factor|driver/.test(normalized)) return '1';
 if (/cuenta/.test(normalized)) return '57.2.9.09.00.05';
 if (/concepto|ceco|centro/.test(normalized)) return '30.05.04';
 if (/producto/.test(normalized)) return 'RVIT001';
 if (/canal/.test(normalized)) return 'DFV';
 if (/subcanal/.test(normalized)) return 'DFV006';
 if (/linea|l[ií]nea/.test(normalized)) return 'RVIT';
 return `AUTO ${config.caseId} ${index}`;
}

function visibleButton(page: Page, name: RegExp): Locator {
 return page.getByRole('button', { name }).or(page.locator('button').filter({ hasText: name })).first();
}

function actionSelector(action: RegExp): string {
 if (/editar|edit|l[aá]piz/i.test(action.source)) {
 return '[data-testid*="edit" i], [aria-label*="edit" i], [title*="edit" i], [aria-label*="editar" i], [title*="editar" i]';
 }

 return '[data-testid*="delete" i], [data-testid*="trash" i], [aria-label*="delete" i], [title*="delete" i], [aria-label*="eliminar" i], [title*="eliminar" i]';
}

function tagsFor(config: GfRecordCaseConfig): string {
 const operationTag: FlowTag = config.operation === 'add' ? '@registrar' : config.operation === 'edit' ? '@editar' : '@eliminar';
 return [
 buildTags({
 bloque: '@bloque3',
 caseId: config.caseId,
 flowTag: operationTag,
 }),
 '@gf',
 config.role === 'admin' ? '@admin' : '@gestor-gf',
 '@regression',
 ...(config.tags ?? []),
 ].join(' ');
}

function testTitle(config: GfRecordCaseConfig): string {
 const verb = config.operation === 'add' ? 'gestiona alta' : config.operation === 'edit' ? 'gestiona edicion' : 'gestiona eliminacion';
 return `${verb} de ${config.view} y valida ${config.expectedResult}`;
}
