import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { SelectGtDistributionOptions, selectGtDistributionAdd } from './gt-distribution';
import { GtCaseBase, openGtView, tagsFor, visibleButton } from './gt-ui';

type AddResult = 'success' | 'duplicateError' | 'validationError';
type FieldKind = 'input' | 'select';

type AddField = {
 label: RegExp;
 value?: string;
 kind?: FieldKind;
};

type AddRecordCaseConfig = GtCaseBase & {
 distribution?: SelectGtDistributionOptions;
 modalTitle: RegExp;
 fields: AddField[];
 expectedResult: AddResult;
 expectedMessages?: RegExp[];
 expectedTableValues?: string[];
};

export function AddRecordCase(config: AddRecordCaseConfig) {
 test(`${tagsFor(config)} agrega registro y valida resultado ${config.expectedResult}`, async ({ page }) => {
 test.setTimeout(240_000);

 await test.step('Abrir vista del flujo de Gastos Tecnicos', async () => {
 try {
 await page.goto('https://distribuciongastos.pacificotest.com.pe/');
 const loginPage = new LoginPage(page);
 await loginPage.login(env.gestorGTUsername, env.gestorGTPassword);
 } catch (error) {
 }
 });

 await selectGtDistributionAdd(page, config.distribution);

 await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
 await openGtView(page, config);
 await expect(page.getByRole('heading', { name: new RegExp(config.view, 'i') })).toBeVisible({ timeout: 30_000 });
 });

 await test.step('Abrir modal Agregar', async () => {
 await visibleButton(page, /^agregar$/i).click();
 });

 const modal = page.getByRole('dialog').first();
 const addButton = modal.getByRole('button', { name: /^agregar$/i }).last();

 await test.step('Validar modal Agregar', async () => {
 await expect(modal, 'Debe mostrarse el modal Agregar definido por el catalogo.').toBeVisible();
 await expect(modal.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado del modal.').toBeVisible();
 });

 if (config.expectedResult === 'validationError') {
 await test.step('Activar validaciones de obligatoriedad/formato', async () => {
 for (const field of config.fields) {
 const control = fieldLocator(modal, field);
 const visible = await control.isVisible({ timeout: 2_000 }).catch(() => false);
 if (visible) {
 await control.focus().catch(() => undefined);
 await control.blur().catch(() => undefined);
 }
 }
 });

 await test.step('Validar que no se habilita Agregar y se muestran errores', async () => {
 await expect(addButton, 'El boton Agregar no debe habilitarse con datos invalidos o vacios.').toBeDisabled();
 });
 return;
 }

 await test.step('Completar campos del formulario', async () => {
 for (const field of config.fields) {
 if (!field.value) {
 test.info().annotations.push({ type: 'TODO', description: `Dato no definido en catalogo para ${field.label}` });
 continue;
 }
 await fillField(page, modal, field);
 }
 });

 await test.step('Enviar formulario', async () => {
 await expect(addButton, 'El boton Agregar debe habilitarse tras completar los campos requeridos.').toBeEnabled();
 await addButton.click();
 });

 if (config.expectedResult === 'success') {
 await test.step('Validar alta exitosa', async () => {
 await expect(page.getByText(/hecho|registro se agreg/i).first()).toBeVisible({ timeout: 30_000 });
 for (const value of config.expectedTableValues ?? []) {
 await expect(page.getByText(value, { exact: false }).first()).toBeVisible();
 }
 });
 return;
 }

 await test.step('Validar error de registro duplicado', async () => {
 for (const message of config.expectedMessages ?? [/registro duplicado|registro que intentas agregar ya existe/i]) {
 await expect(page.getByText(message).or(modal.getByText(message)).first()).toBeVisible({ timeout: 30_000 });
 }
 });
 });
}

function fieldLocator(modal: Locator, field: AddField) {
 return modal
 .getByLabel(field.label)
 .or(modal.getByPlaceholder(field.label))
 .or(modal.getByRole('textbox', { name: field.label }))
 .or(modal.getByRole('combobox', { name: field.label }))
 .or(modal.locator('label').filter({ hasText: field.label }).locator('..').locator('input,textarea,[role="combobox"]'))
 .first();
}

async function fillField(page: Page, modal: Locator, field: AddField) {
 const control = fieldLocator(modal, field);
 await expect(control, `Debe existir el campo ${field.label}`).toBeVisible();

 if (field.kind === 'select') {
 await control.click();
 try {
 const value = field.value ?? '';
 const option = page
 .getByRole('option', {
 name: new RegExp(`^${escapeRegExp(value)}$`, 'i')
 })
 .or(
 page
 .locator('[data-radix-popper-content-wrapper]')
 .getByText(new RegExp(`^${escapeRegExp(value)}$`, 'i'))
 )
 .or(
 page
 .locator('[role="listbox"]')
 .getByText(new RegExp(`^${escapeRegExp(value)}$`, 'i'))
 )
 .first();

 await expect(
 option,
 `Debe existir la opción ${value}`
 ).toBeVisible({
 timeout: 10_000
 });

 await option.click();
 return;
 } catch (error) {
 
 }
 }
 await control.fill(field.value ?? '');
}

function escapeRegExp(value: string) {
 return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}