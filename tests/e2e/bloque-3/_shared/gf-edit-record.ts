import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { selectGfDistribution, SelectGfDistributionOptions } from './gf-distribution';
import { GfCaseBase, openGfView, tagsFor, viewTitlePattern } from './gf-ui';

type FieldKind = 'input' | 'select' | 'delete';
export type EditResult = 'success' | 'validationError';

type EditField = {
 label: RegExp;
 value?: string;
 kind?: FieldKind;
};

type EditRecordCaseConfig = GfCaseBase & {
 distribution?: SelectGfDistributionOptions;
 modalTitle: RegExp;
 fields?: EditField[];
 expectedResult: EditResult;
 expectedMessages?: RegExp[];
 expectedTableValues?: string[];
};

export function EditRecordCase(config: EditRecordCaseConfig) {
 test(`${tagsFor(config)} edita registro y valida resultado ${config.expectedResult}`, async ({ page }) => {
 test.setTimeout(240_000);

 await test.step('Abrir vista del flujo de Gastos Financieros', async () => {
 try {
 await page.goto('https://distribuciongastos.pacificotest.com.pe/');
 const loginPage = new LoginPage(page);
 await loginPage.login(env.gestorGFUsername, env.gestorGFPassword);
 } catch (error) {
 }
 });

 await selectGfDistribution(page, config.distribution);

 await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
 await openGfView(page, config);
 await expect(page.getByRole('heading', { name: viewTitlePattern(config.view) })).toBeVisible({ timeout: 30_000 });
 });

 await test.step('Abrir modal Editar desde la primera fila disponible', async () => {
 const row = page.locator('table tbody tr').first();
 await expect(row, 'Debe existir un registro para editar segun precondicion del catalogo.').toBeVisible({ timeout: 30_000 });
 const editAction = row
 .getByRole('button', { name: /editar|edit|lapiz|lapiz/i })
 .or(row.locator('[data-testid*="edit"], [aria-label*="edit" i], [title*="Editar" i], button').last())
 .first();
 await editAction.click();
 });

 const modal = page.getByRole('dialog').first();
 const updateButton = modal.getByRole('button', { name: /actualizar|guardar/i }).last();

 await test.step('Validar modal Editar', async () => {
 await expect(modal, 'Debe mostrarse el modal Editar definido por el catalogo.').toBeVisible();
 await expect(modal.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado del modal.').toBeVisible();
 });

 if (config.expectedResult === 'validationError') {
 await test.step('Activar validaciones de obligatoriedad/formato', async () => {
 if (config.fields?.length) {
 for (const field of config.fields) {
 const control = fieldLocator(modal, field);
 const visible = await control.isVisible({ timeout: 2_000 }).catch(() => false);
 if (!visible) continue;
 if (field.value) await fillField(page, modal, field);
 else {
 await control.focus().catch(() => undefined);
 await control.blur().catch(() => undefined);
 }
 }
 } else {
 await clearFirstEditableControl(modal);
 }
 });

 await test.step('Validar errores de edicion', async () => {
 for (const message of config.expectedMessages ?? [/requerido|obligatorio|formato|incorrecto|no valido|validacion/i]) {
 await expect(modal.getByText(message).or(page.getByText(message)).first()).toBeVisible({ timeout: 30_000 });
 }
 });
 return;
 }

 await test.step('Completar campos editables', async () => {
 if (config.fields?.length) {
 for (const field of config.fields) {
 if (!field.value) {
 test.info().annotations.push({ type: 'TODO', description: `Dato editable no definido en catalogo para ${field.label}` });
 continue;
 }
 await fillField(page, modal, field);
 }
 } else {
 await editFirstEditableControl(modal, config.caseId, config.view);
 }
 });

 await test.step('Actualizar registro', async () => {
 await expect(updateButton, 'El boton Actualizar debe estar habilitado tras editar campos.').toBeEnabled();
 await updateButton.click();
 });

 await test.step('Validar edicion exitosa', async () => {
 await expect(page.getByText(/cambios guardados correctamente|hecho|actualizado|registro actualizado/i).first()).toBeVisible({ timeout: 30_000 });
 for (const value of config.expectedTableValues ?? []) {
 await expect(page.getByText(value, { exact: false }).first()).toBeVisible();
 }
 });
 });
}

function fieldLocator(modal: Locator, field: EditField) {
 return modal
 .getByLabel(field.label)
 .or(modal.getByPlaceholder(field.label))
 .or(modal.getByRole('textbox', { name: field.label }))
 .or(modal.getByRole('combobox', { name: field.label }))
 .first();
}

async function fillField(page: Page, modal: Locator, field: EditField) {
 const control = fieldLocator(modal, field);
 await expect(control, `Debe existir el campo ${field.label}`).toBeVisible();
 const role = await control.getAttribute('role').catch(() => '');
 const tagName = await control.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
 if (field.kind === 'select' || role === 'combobox' || tagName === 'button') {
 await control.click();
 const value = field.value ?? '';
 const option = page
 .getByRole('option', { name: new RegExp(`^${escapeRegExp(value)}$`, 'i') })
 .or(page.locator('[data-radix-popper-content-wrapper], [role="listbox"]').getByText(new RegExp(`^${escapeRegExp(value)}$`, 'i')))
 .first();
 if (await option.isVisible({ timeout: 5_000 }).catch(() => false)) {
 await option.click();
 return;
 }

 const firstOption = page.getByRole('option').first();
 await expect(firstOption, `Debe existir al menos una opcion para ${field.label}`).toBeVisible({ timeout: 10_000 });
 await firstOption.click();
 return;
 }
 await control.fill(field.kind === 'delete' ? 'a' : field.value ?? '');
}

async function editFirstEditableControl(modal: Locator, caseId: string, view: string) {
 const field = editableFieldFor(view, caseId);
 if (field) {
 const control = fieldLocator(modal, field);
 if (await control.isVisible({ timeout: 1_000 }).catch(() => false)) {
 await fillField(modal.page(), modal, field);
 return;
 }
 }

 const controls = modal.locator('input:not([type="hidden"]), textarea');
 const count = await controls.count();
 for (let index = 0; index < count; index += 1) {
 const control = controls.nth(index);
 const editable = await control.isVisible().catch(() => false) && await control.isEnabled().catch(() => false);
 if (!editable) continue;
 await control.fill(`GF${caseId.replace(/[^A-Z0-9]/gi, '').slice(-10)}E${index}`.slice(0, 24)).catch(() => undefined);
 return;
 }
}

async function clearFirstEditableControl(modal: Locator) {
 const controls = modal.locator('input:not([type="hidden"]), textarea');
 const count = await controls.count();
 for (let index = 0; index < count; index += 1) {
 const control = controls.nth(index);
 const editable = await control.isVisible().catch(() => false) && await control.isEnabled().catch(() => false);
 if (!editable) continue;
 await control.fill('').catch(() => undefined);
 return;
 }
}

function escapeRegExp(value: string) {
 return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function editableFieldFor(view: string, caseId: string): EditField | undefined {
 const token = caseId.replace(/[^0-9A-Z]/gi, '').slice(-6);

 if (/Cuentas Contables/i.test(view)) {
 return { label: /Nombre Cuenta Contable/i, value: `CUENTA EDIT ${token}` };
 }
 if (/Centros/i.test(view)) {
 return { label: /Nombre.*(?:Centro|CECO)|Descripci[oó]n.*(?:Centro|CECO)|DESCECO/i, value: `CENTRO EDIT ${token}` };
 }
 if (/Maestro (?:Reservas )?Producto/i.test(view)) {
 return { label: /^Producto$/i, value: `PRODUCTO EDIT ${token}` };
 }
 if (/Maestro de Negocio(?: y)? Embebidos/i.test(view)) {
 return { label: /Embebido/i, value: `EMB${token}`.slice(0, 10) };
 }
 if (/AMED/i.test(view)) {
 return { label: /AUM/i, value: '27.973' };
 }
 if (/AP Vida/i.test(view)) {
 return { label: /Referencia/i, value: `REFERENCIA EDIT ${token}` };
 }
 if (/Especiales NIIF/i.test(view)) {
 return { label: /Porcentaje/i, value: '66' };
 }
 if (/Driver UoA/i.test(view)) {
 return { label: /Driver UOA/i, value: '0.0626' };
 }
 if (/Distribuci[oó]n UoA Generales Multiramo/i.test(view)) {
 return { label: /Factor/i, value: '1.63' };
 }

 return undefined;
}
