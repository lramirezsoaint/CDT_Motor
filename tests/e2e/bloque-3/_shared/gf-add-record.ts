import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { SelectGfDistributionOptions, selectGfDistributionAdd } from './gf-distribution';
import { GfCaseBase, openGfView, tagsFor, viewTitlePattern, visibleButton } from './gf-ui';

export type AddResult = 'success' | 'duplicateError' | 'validationError';
type FieldKind = 'input' | 'select';

type AddField = {
 label: RegExp;
 value?: string;
 kind?: FieldKind;
 testId?: string;
};

type AddRecordCaseConfig = GfCaseBase & {
 distribution?: SelectGfDistributionOptions;
 modalTitle: RegExp;
 fields?: AddField[];
 expectedResult: AddResult;
 expectedMessages?: RegExp[];
 expectedTableValues?: string[];
};

export function AddRecordCase(config: AddRecordCaseConfig) {
 test(`${tagsFor(config)} agrega registro y valida resultado ${config.expectedResult}`, async ({ page }) => {
 test.setTimeout(240_000);

 await test.step('Abrir vista del flujo de Gastos Financieros', async () => {
 try {
 await page.goto('https://distribuciongastos.pacificotest.com.pe/');
 const loginPage = new LoginPage(page);
 await loginPage.login(env.gestorGFUsername, env.gestorGFPassword);
 } catch (error) {
 }
 });

 await selectGfDistributionAdd(page, config.distribution);

 await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
 await openGfView(page, config);
 await expect(page.getByRole('heading', { name: viewTitlePattern(config.view) })).toBeVisible({ timeout: 30_000 });
 });

 await test.step('Abrir modal Agregar', async () => {
 await visibleButton(page, /^agregar$/i).click();
 });

 const modal = page.getByRole('dialog').first();
 const addButton = modal.getByRole('button', { name: /^agregar$/i }).last();
 const dataKey = `${config.caseId}-${Date.now()}`;

 await test.step('Validar modal Agregar', async () => {
 await expect(modal, 'Debe mostrarse el modal Agregar definido por el catalogo.').toBeVisible();
 await expect(modal.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado del modal.').toBeVisible();
 });

 if (config.expectedResult === 'validationError') {
 await test.step('Activar validaciones de obligatoriedad/formato', async () => {
 const fields = config.fields?.length ? config.fields : defaultFieldsFor(config.view, dataKey, config.expectedResult);
 for (const field of fields) {
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
 const fields = config.fields?.length ? config.fields : defaultFieldsFor(config.view, dataKey, config.expectedResult);
 if (fields.length) {
 for (const field of fields) {
 if (!field.value) {
 test.info().annotations.push({ type: 'TODO', description: `Dato no definido en catalogo para ${field.label}` });
 continue;
 }
 await fillField(page, modal, field);
 }
 } else {
 await fillVisibleFormControls(page, modal, dataKey, config.view, config.expectedResult);
 }
 });

 await test.step('Enviar formulario', async () => {
 await expect(addButton, 'El boton Agregar debe habilitarse tras completar los campos requeridos.').toBeEnabled();
 await addButton.click();
 });

 if (config.expectedResult === 'success') {
 await test.step('Validar alta exitosa', async () => {
 const successMessage = page.getByText(/hecho|registro se agreg|agregado correctamente/i).first();
 if (await successMessage.isVisible({ timeout: 5_000 }).catch(() => false)) {
 await expect(successMessage).toBeVisible();
 } else {
 const primaryValue = config.expectedTableValues?.[0] ?? defaultFieldsFor(config.view, dataKey, config.expectedResult)[0]?.value;
 if (primaryValue) {
 await expect(page.getByText(primaryValue, { exact: false }).first()).toBeVisible({ timeout: 30_000 });
 }
 }
 for (const value of config.expectedTableValues ?? []) {
 await expect(page.getByText(value, { exact: false }).first()).toBeVisible();
 }
 });
 return;
 }

 await test.step('Validar error de registro duplicado', async () => {
 for (const message of config.expectedMessages ?? [/registro duplicado|registro que intentas agregar ya existe|ya existe/i]) {
 await expect(page.getByText(message).or(modal.getByText(message)).first()).toBeVisible({ timeout: 30_000 });
 }
 });
 });
}

function fieldLocator(modal: Locator, field: AddField) {
 const locator = modal
 .getByLabel(field.label)
 .or(modal.getByPlaceholder(field.label))
 .or(modal.getByRole('textbox', { name: field.label }))
 .or(modal.getByRole('combobox', { name: field.label }))
 .or(modal.locator('label').filter({ hasText: field.label }).locator('..').locator('input,textarea,[role="combobox"]'));

 return field.testId ? modal.getByTestId(field.testId).or(locator).first() : locator.first();
}

async function fillField(page: Page, modal: Locator, field: AddField) {
 const control = fieldLocator(modal, field);
 await expect(control, `Debe existir el campo ${field.label}`).toBeVisible();
 await control.scrollIntoViewIfNeeded().catch(() => undefined);
 if (field.kind === 'select') {
 await control.click();
 const value = field.value ?? '';
 const option = page
 .getByRole('option', { name: new RegExp(`^${escapeRegExp(value)}$`, 'i') })
 .or(page.locator('[data-radix-popper-content-wrapper]').getByText(new RegExp(`^${escapeRegExp(value)}$`, 'i')))
 .or(page.locator('[role="listbox"]').getByText(new RegExp(`^${escapeRegExp(value)}$`, 'i')))
 .first();

 if (await option.isVisible({ timeout: 10_000 }).catch(() => false)) {
 await option.click();
 return;
 }
 }

 const role = await control.getAttribute('role').catch(() => '');
 const tagName = await control.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
 if (tagName === 'button') {
 await selectButtonCombobox(page, control, field.value ?? '', `Debe existir al menos una opcion para ${field.label}`);
 return;
 }
 if (field.kind === 'select' || role === 'combobox' || tagName === 'button') {
 await selectOption(page, control, field.value ?? '', `Debe existir al menos una opcion para ${field.label}`);
 return;
 }
 await control.fill(field.value ?? '');
}

async function selectButtonCombobox(page: Page, trigger: Locator, value: string, message: string) {
 const optionTexts = await trigger.locator('xpath=../following-sibling::select[1]/option').allTextContents().catch(() => []);
 const optionIndex = optionTexts.findIndex((text) => text.trim().toLowerCase() === value.trim().toLowerCase());

 if (optionIndex < 0) {
 await selectOption(page, trigger, value, message);
 return;
 }

 await trigger.scrollIntoViewIfNeeded().catch(() => undefined);
 await trigger.click();
 await page.keyboard.press('Home').catch(() => undefined);
 for (let index = 0; index < optionIndex; index += 1) {
 await page.keyboard.press('ArrowDown');
 }
 await page.keyboard.press('Enter');
}

async function fillVisibleFormControls(page: Page, modal: Locator, caseId: string, view: string, expectedResult: AddResult) {
 const fields = defaultFieldsFor(view, caseId, expectedResult);
 for (const field of fields) {
 const control = fieldLocator(modal, field);
 if (/Especiales NIIF/i.test(view)) {
 await expect(control, `Debe mostrarse el campo requerido ${field.label}.`).toBeVisible({ timeout: 15_000 });
 await expect(control, `Debe habilitarse el campo requerido ${field.label}.`).toBeEnabled({ timeout: 15_000 });
 await fillField(page, modal, field);
 continue;
 }

 const visible = await control.isVisible({ timeout: 1_000 }).catch(() => false);
 const enabled = visible && await control.isEnabled().catch(() => false);
 if (enabled) {
 await fillField(page, modal, field);
 }
 }

 if (/Especiales NIIF/i.test(view)) {
 return;
 }

 const unique = caseId.replace(/[^A-Z0-9]/gi, '').slice(-10);
 const inputs = modal.locator('input:not([type="hidden"]), textarea');
 const inputCount = await inputs.count();
 for (let index = 0; index < inputCount; index += 1) {
 const input = inputs.nth(index);
 const editable = await input.isVisible().catch(() => false) && await input.isEnabled().catch(() => false);
 if (!editable) continue;
 const current = await input.inputValue().catch(() => '');
 if (current) continue;
 await input.fill(`GF${unique}${index}`.slice(0, 24)).catch(() => undefined);
 }

 const combos = modal.getByRole('combobox');
 const comboCount = await combos.count();
 for (let index = 0; index < comboCount; index += 1) {
 const combo = combos.nth(index);
 const visible = await combo.isVisible().catch(() => false) && await combo.isEnabled().catch(() => false);
 if (!visible) continue;
 const currentText = (await combo.innerText().catch(() => '')).trim();
 if (currentText && !/seleccione|opci[oó]n|buscar/i.test(currentText)) continue;
 await combo.scrollIntoViewIfNeeded().catch(() => undefined);
 await combo.click().catch(() => undefined);
 const option = page.getByRole('option').first();
 if (await option.isVisible({ timeout: 2_000 }).catch(() => false)) {
 await option.click().catch(() => undefined);
 }
 }
}

async function selectOption(page: Page, trigger: Locator, value: string, message: string) {
 await trigger.scrollIntoViewIfNeeded().catch(() => undefined);
 await trigger.click();
 const exactPattern = new RegExp(`^${escapeRegExp(value)}$`, 'i');
 const options = await optionsForTrigger(page, trigger);
 const exactOption = page
 .locator('[data-radix-popper-content-wrapper]')
 .getByText(exactPattern)
 .or(options.getByText(exactPattern))
 .first();

 if (value && await exactOption.isVisible({ timeout: 5_000 }).catch(() => false)) {
 await exactOption.click({ force: true });
 await page.keyboard.press('Escape').catch(() => undefined);
 return;
 }

 const firstOption = options
 .filter({ hasNotText: /^$/ })
 .first()
 .or(page.locator('[data-radix-popper-content-wrapper]').getByText(/\S/).first());
 await expect(firstOption, message).toBeVisible({ timeout: 10_000 });
 await firstOption.click({ force: true });
 await page.keyboard.press('Escape').catch(() => undefined);
}

async function optionsForTrigger(page: Page, trigger: Locator) {
 const controls = await trigger.getAttribute('aria-controls').catch(() => null);
 const id = await trigger.getAttribute('id').catch(() => null);
 const listboxId = controls ?? (id ? `${id}-listbox` : null);

 if (listboxId) {
 const options = page.locator(`[id="${cssAttributeValue(listboxId)}"]`).getByRole('option');
 if (await options.first().isVisible({ timeout: 1_000 }).catch(() => false)) {
 return options;
 }
 }

 return openPopover(page).getByRole('option');
}

function openPopover(page: Page) {
 return page.locator('[data-radix-popper-content-wrapper] [data-state="open"], [role="listbox"]').last();
}

function cssAttributeValue(value: string) {
 return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function escapeRegExp(value: string) {
 return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function defaultFieldsFor(view: string, caseId: string, expectedResult: AddResult): AddField[] {
 const token = caseId.replace(/[^0-9A-Z]/gi, '').slice(-6);
 const twoDigits = String(Math.abs(hashCode(caseId)) % 90 + 10);
 const duplicate = expectedResult === 'duplicateError';

 if (/Cuentas Contables/i.test(view)) {
 return [
 { label: /C[oó]digo Contable/i, value: duplicate ? '46.2.5.02.02.01' : `46.2.5.02.02.${twoDigits}` },
 { label: /Nombre Cuenta Contable/i, value: duplicate ? 'PERDIDA EN LA VENTA DE INMUEBLES - VIDA' : `CUENTA GF ${token}` },
 { label: /C[oó]digo Ramo/i, value: '2' },
 { label: /C[oó]digo Concepto/i, value: '30.02.02' },
 { label: /Concepto N1/i, value: 'Ingresos Financieros Netos' },
 { label: /Concepto N2/i, value: 'Utilidad venta inmuebles, muebles y equipo' },
 { label: /Concepto N3/i, value: 'Utilidad/ Perdida venta de Inmuebles' },
 { label: /Concepto NIIF17/i, value: 'Gastos Generales/Técnicos', kind: 'select' },
 { label: /Tipo de cuenta/i, value: 'IF', kind: 'select' },
 { label: /M[eé]todo de Distribuci[oó]n VIDA/i, value: 'Premium', kind: 'select' },
 { label: /M[eé]todo de Distribuci[oó]n Generales/i, value: 'COSTARRENPPS', kind: 'select' },
 { label: /NIIF17 CBR/i, value: 'GA', kind: 'select' },
 ];
 }

 if (/Centros/i.test(view)) {
 return [
 { label: /^Negocio$/i, value: 'PVI' },
 { label: /Centro de Costo|C[oó]digo.*(?:Centro|CECO)|CODCECO/i, value: duplicate ? '07.99.31' : `47.00.${twoDigits}` },
 { label: /Nombre.*(?:Centro|CECO)|Descripci[oó]n.*(?:Centro|CECO)|DESCECO/i, value: duplicate ? 'RENTAS ASESORES RV' : `CENTRO GF ${token}` },
 { label: /C[oó]digo L[ií]nea|CODLINEA/i, value: 'RVIT' },
 { label: /^L[ií]nea$/i, value: 'RENTAS' },
 { label: /C[oó]digo Producto|CODPRODUCTO/i, value: 'RVIT001' },
 { label: /^Producto$/i, value: 'RENTAS VITALICIAS' },
 { label: /C[oó]digo Canal|CODCANAL/i, value: 'DFV' },
 { label: /^Canal$/i, value: 'CANALES DIRECTOS' },
 { label: /C[oó]digo Subcanal|CODSUBCANAL/i, value: 'DFV006' },
 { label: /^Subcanal$/i, value: 'FFVV RENTAS' },
 { label: /^Tipo$/i, value: 'DIRECTOS' },
 { label: /Estado|STSCECO/i, value: 'ACTIVO' },
 { label: /Tipo Emisi[oó]n/i, value: 'TRADICIONAL' },
 { label: /Tipo Negocio/i, value: 'PERSONA' },
 { label: /Tipo Producto/i, value: 'MODULAR' },
 ];
 }

 if (/Maestro (?:Reservas )?Producto/i.test(view)) {
 return [
 { label: /Grupo/i, value: 'PREMIUM BBA | VFA | PU' },
 { label: /C[oó]digo Producto|CODPRODUCTO/i, value: duplicate ? 'AFP001' : `GF${token}`.slice(0, 8) },
 { label: /^Producto$/i, value: duplicate ? 'AFP ANTIGUO' : `PRODUCTO GF ${token}` },
 ];
 }

 if (/Maestro de Negocio(?: y)? Embebidos/i.test(view)) {
 return [
 { label: /^Negocio$/i, value: 'GENERALES' },
 { label: /^L[ií]nea$/i, value: 'ASISTENCIA MEDICA' },
 { label: /^Producto$/i, value: 'AMED001' },
 { label: /^Canal$/i, value: 'ALIANZAS' },
 { label: /^Subcanal$/i, value: 'ALZ002' },
 { label: /Embebido/i, value: 'EMBEBIDO' },
 { label: /Tipo Negocio/i, value: 'PERSONA' },
 ];
 }

 if (/AMED/i.test(view)) {
 return [
 { label: /C[oó]digo Contable|CODCTACTB/i, value: '44.1.7.02.09.09' },
 { label: /AUM/i, value: '27.972' },
 { label: /ING.*FINANCIERO|Ingreso Financiero/i, value: '63,7' },
 { label: /Tasa/i, value: '2,64%' },
 ];
 }

 if (/AP Vida/i.test(view)) {
 return [
 { label: /Cuenta Contable/i, value: '56.2.9.02.02.01' },
 { label: /Descripci[oó]n/i, value: 'Utilidad/ Perdida venta de Inmuebles' },
 { label: /Asiento/i, value: duplicate ? 'MG500001' : `MG${twoDigits}0001` },
 { label: /Referencia/i, value: 'INGRESOS FINANCIEROS AP GENERALES' },
 { label: /Fecha/i, value: '01/05/2025' },
 { label: /^Mes$/i, value: '5' },
 { label: /A[nñ]o|Ano/i, value: '2025' },
 { label: /Monto(?: Local)?/i, value: '0' },
 { label: /C[oó]digo.*(?:Centro|CECO)|CODCECO/i, value: '06.99.99' },
 { label: /Nombre.*(?:Centro|CECO)|Descripci[oó]n.*(?:Centro|CECO)|DESCECO/i, value: 'AP AGENCIAS TODAS' },
 { label: /Compa[nñ][ií]a|Compania/i, value: 'CREDICOR' },
 ];
 }

 if (/Especiales NIIF/i.test(view)) {
 return [
 { label: /C[oó]digo L[ií]nea|CODLINEA/i, value: 'AFP', testId: 'codigoLinea' },
 { label: /C[oó]digo Producto|CODPRODUCTO/i, value: 'AFP001', testId: 'codigoProducto' },
 { label: /C[oó]digo Canal|CODCANAL/i, value: 'AFP', testId: 'codigoCanal' },
 { label: /C[oó]digo Subcanal|CODSUBCANAL/i, value: 'AFP001', testId: 'codigoSubcanal' },
 { label: /M[eé]todo(?: de)? Valoraci[oó]n/i, value: 'PAA', testId: 'metodoValoracion' },
 { label: /Porcentaje/i, value: '22.583', testId: 'porcentaje' },
 { label: /Tipo Distribuci[oó]n/i, value: 'POLIZAS', testId: 'tipoDistribucion' },
 { label: /NIIF\s*17\s*Atribuible/i, value: 'Atribuible', testId: 'niif17Atribuible' },
 { label: /NIIF\s*17\s*Tipo/i, value: 'GA', testId: 'niif17Tipo' },
 { label: /Concepto N1/i, value: 'Egresos Tecnicos netos', testId: 'conceptoN1' },
 { label: /Concepto N2/i, value: 'Rescates', testId: 'conceptoN2' },
 { label: /C[oó]digo Concepto/i, value: '01.05.00', testId: 'codigoConcepto' },
 { label: /D[ií]gito de cuenta/i, value: '46', testId: 'digCuenta' },
 { label: /CECO/i, value: '07.99.43', testId: 'ceco' },
 ];
 }

 if (/Driver UoA/i.test(view)) {
 return [
 { label: /C[oó]digo Concepto/i, value: '30.02.02', kind: 'select' },
 { label: /^Unidad de Cuenta$/i, value: 'IFRS_GRP_2021_ACCIDENTES PERSONALES LP_PEN_GM_Gross_Oner', kind: 'select' },
 { label: /Grupo\s*-\s*Producto NIIF Distribuido/i, value: 'PREMIUM BBA | VFA | PU', kind: 'select' },
 { label: /Driver UOA/i, value: '0.0625' },
 ];
 }

 if (/UoA Generales Multiramo/i.test(view)) {
 return [
 { label: /C[oó]digo Producto|CODPRODUCTO/i, value: 'LCOM011', kind: 'select' },
 { label: /Unidad de Cuenta|^UOA$/i, value: 'IFRS_GRP_2021_UNIQUE INCENDIO_PEN_PAA_Gross_Prof', kind: 'select' },
 { label: /Factor/i, value: '1.62' },
 ];
 }

 return [];
}

function hashCode(value: string) {
 return value.split('').reduce((total, char) => total + char.charCodeAt(0), 0);
}
