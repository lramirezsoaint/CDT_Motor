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
 for (const field of config.fields ?? []) {
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
 if (config.fields?.length) {
 for (const field of config.fields) {
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
 return modal
 .getByLabel(field.label)
 .or(modal.getByPlaceholder(field.label))
 .or(modal.getByRole('textbox', { name: field.label }))
 .or(modal.getByRole('combobox', { name: field.label }))
 .first();
}

async function fillField(page: Page, modal: Locator, field: AddField) {
 const control = fieldLocator(modal, field);
 await expect(control, `Debe existir el campo ${field.label}`).toBeVisible();
 await control.scrollIntoViewIfNeeded().catch(() => undefined);
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
 await control.fill(field.value ?? '');
}

async function fillVisibleFormControls(page: Page, modal: Locator, caseId: string, view: string, expectedResult: AddResult) {
 for (const field of defaultFieldsFor(view, caseId, expectedResult)) {
 const control = fieldLocator(modal, field);
 const visible = await control.isVisible({ timeout: 1_000 }).catch(() => false);
 const enabled = visible && await control.isEnabled().catch(() => false);
 if (enabled) {
 await fillField(page, modal, field);
 }
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
 { label: /^Producto$/i, value: 'INDEMNIZATORIO INDIVIDUAL' },
 { label: /^Canal$/i, value: 'ALIANZAS' },
 { label: /^Subcanal$/i, value: 'FALABELLA' },
 { label: /Embebido/i, value: 'EMBEBIDO' },
 { label: /Tipo Negocio/i, value: 'PERSONA' },
 ];
 }

 if (/AMED/i.test(view)) {
 return [
 { label: /C[oó]digo Contable|CODCTACTB/i, value: '46.2.5.02.02.01' },
 { label: /AUM/i, value: '27.972' },
 { label: /ING.*FINANCIERO|Ingreso/i, value: '63,7' },
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
 { label: /C[oó]digo L[ií]nea|CODLINEA/i, value: 'LPER' },
 { label: /^L[ií]nea$/i, value: 'LINEAS PERSONALES' },
 { label: /C[oó]digo Producto|CODPRODUCTO/i, value: 'LPER019' },
 { label: /^Producto$/i, value: 'AP VIDA' },
 { label: /C[oó]digo Canal|CODCANAL/i, value: 'DFV' },
 { label: /^Canal$/i, value: 'CANALES DIRECTOS' },
 { label: /C[oó]digo Subcanal|CODSUBCANAL/i, value: 'DFV008' },
 { label: /^Subcanal$/i, value: 'AGENCIAS EXCLUSIVAS' },
 { label: /M[eé]todo Valoraci[oó]n/i, value: '1' },
 { label: /Porcentaje/i, value: '65' },
 { label: /Dig.*Cuenta/i, value: '-' },
 { label: /Tipo Distribuci[oó]n/i, value: 'POLIZAS' },
 { label: /NIIF17 Atribuible/i, value: 'SI' },
 { label: /NIIF17 Tipo/i, value: 'GA' },
 { label: /Concepto N1/i, value: 'Egresos Tecnicos netos' },
 { label: /Concepto N2/i, value: 'Servicios' },
 { label: /C[oó]digo Concepto/i, value: '10.14.00' },
 { label: /CECO/i, value: '06.99.80' },
 ];
 }

 if (/Driver UoA/i.test(view)) {
 return [
 { label: /C[oó]digo Concepto/i, value: '07.01.00' },
 { label: /^Concepto$/i, value: 'Ajuste de Reservas' },
 { label: /^UOA$/i, value: 'IFRS_GRP_2021_PREMIUM BBA_PEN_GM_Gross_Prof' },
 { label: /Grupo Producto NIIF/i, value: 'PREMIUM BBA | VFA | PU' },
 { label: /Producto NIIF17/i, value: 'PREMIUM BBA' },
 { label: /Driver UOA/i, value: '0.0625' },
 ];
 }

 if (/Distribuci[oó]n UoA Generales Multiramo/i.test(view)) {
 return [
 { label: /C[oó]digo Producto|CODPRODUCTO/i, value: 'LCOM017' },
 { label: /Nombre/i, value: duplicate ? 'PYME CORREDOR' : `MULTIRAMO GF ${token}` },
 { label: /^UOA$/i, value: 'IFRS_GRP_2021_UNIQUE INCENDIO_PEN_PAA_Gross_Prof' },
 { label: /Factor/i, value: '1.62' },
 ];
 }

 return [];
}

function hashCode(value: string) {
 return value.split('').reduce((total, char) => total + char.charCodeAt(0), 0);
}
