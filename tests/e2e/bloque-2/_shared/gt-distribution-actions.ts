import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';

type Role = 'admin' | 'gestorGT';
type DistributionDeleteResult = 'success' | 'unavailable';

type DistributionBase = {
 caseId: string;
 role: Role;
 priority?: 'critical' | 'smoke';
};

type CreateDistributionConfig = DistributionBase & {
 tipo: string;
 periodo: string;
 version: string;
 tasaCambio: string;
 seccion: string;
 acumulado?: string;
 meses?: string;
};

type DistributionStateCaseConfig = DistributionBase & {
 states: RegExp[];
};

type DeleteDistributionConfig = DistributionBase & {
 state: RegExp;
 expectedResult: DistributionDeleteResult;
 warningMessage?: RegExp;
 expectedMessage?: RegExp;
};

export function CreateDistributionCase(config: CreateDistributionConfig) {
 test(`${tagsFor(config, '@distribucion')} crea distribucion ${config.tipo}`, async ({ page }) => {
 test.setTimeout(240_000);
 await loginAs(page, config.role);
 await expect(page).toHaveURL(/\/distribuciones/i);

 await page.getByRole('button', { name: /nueva distribucion|nueva distribución/i }).click();
 const modal = page.getByRole('dialog').first();
 await expect(modal).toBeVisible();
 await expect(modal.getByText(/crear distribucion|crear distribución/i)).toBeVisible();

 const crearButton = modal.getByRole('button', { name: /^crear$/i });
 await expect(crearButton).toBeDisabled();

 const nombre = `${config.periodo}_${config.tipo}_${config.seccion}_${Date.now()}`;
 await fillIfVisible(modal, /nombre/i, nombre);
 await selectIfVisible(page, modal, /tipo/i, config.tipo);
 await selectIfVisible(page, modal, /periodo/i, config.periodo);
 await fillIfVisible(modal, /version|versón/i, config.version);
 await fillIfVisible(modal, /tasa de cambio/i, config.tasaCambio);
 await selectIfVisible(page, modal, /seccion|sección/i, config.seccion);

 if (config.acumulado) await selectIfVisible(page, modal, /acumulado/i, config.acumulado);
 if (config.meses) await selectIfVisible(page, modal, /meses/i, config.meses);

 await expect(crearButton, 'El boton Crear debe habilitarse al completar los datos definidos en catalogo.').toBeEnabled();
 await crearButton.click();
 await expect(page.getByText(/hecho.*registro se agreg|registro se agreg.*sin problemas/i).first()).toBeVisible({ timeout: 30_000 });
 await expect(page.getByText(nombre, { exact: false }).first()).toBeVisible({ timeout: 30_000 });
 });
}

export function DistributionCopyUnavailableCase(config: DistributionStateCaseConfig) {
 test(`${tagsFor(config, '@distribucion')} no muestra accion copiar por estado`, async ({ page }) => {
 test.setTimeout(180_000);
 await loginAs(page, config.role);
 await expect(page).toHaveURL(/\/distribuciones/i);

 for (const state of config.states) {
 const row = distributionRowByState(page, state);
 await expect(row, `Debe existir una distribucion en estado ${state}.`).toBeVisible({ timeout: 30_000 });
 await expect(copyAction(row), 'No debe mostrarse la accion Copiar para estados distintos a Completada.').toHaveCount(0);
 }
 });
}

export function DeleteDistributionCase(config: DeleteDistributionConfig) {
 test(`${tagsFor(config, '@eliminar')} valida eliminacion de distribucion`, async ({ page }) => {
 test.setTimeout(180_000);
 await loginAs(page, config.role);
 await expect(page).toHaveURL(/\/distribuciones/i);

 const row = distributionRowByState(page, config.state);
 await expect(row, `Debe existir una distribucion en estado ${config.state}.`).toBeVisible({ timeout: 30_000 });

 if (config.expectedResult === 'unavailable') {
 await expect(deleteAction(row), 'No debe mostrarse la accion Eliminar en estados no permitidos.').toHaveCount(0);
 return;
 }

 const rowText = firstLine(await row.innerText());
 await openDeleteDistribution(page, row);

 const modal = page.getByRole('dialog').first();
 await expect(modal).toBeVisible();
 if (config.warningMessage) {
 await expect(modal.getByText(config.warningMessage).or(page.getByText(config.warningMessage)).first()).toBeVisible();
 }

 await modal.getByRole('button', { name: /aceptar|confirmar|eliminar/i }).last().click();
 await expect(page.getByText(config.expectedMessage ?? /registro eliminado con exito|registro eliminado/i).first()).toBeVisible({ timeout: 30_000 });
 if (rowText) await expect(page.getByText(rowText, { exact: false }).first()).toBeHidden({ timeout: 30_000 });
 });
}

export function OpenDistributionCase(config: DistributionBase) {
 test(`${tagsFor(config, '@distribucion')} visualiza distribucion seleccionada`, async ({ page }) => {
 test.setTimeout(180_000);
 await loginAs(page, config.role);
 await expect(page).toHaveURL(/\/distribuciones/i);

 const row = page.locator('table tbody tr').first();
 await expect(row, 'Debe existir una distribucion creada segun precondicion del catalogo.').toBeVisible({ timeout: 30_000 });
 const distributionName = firstLine(await row.locator('td').first().innerText().catch(() => ''));
 await row.locator('td').first().click();

 const modal = page.getByRole('dialog').first();
 await expect(modal.getByText(/informacion que se mostrara corresponde|informaci.n que se mostrar./i).or(page.getByText(/informacion que se mostrara corresponde|informaci.n que se mostrar./i)).first()).toBeVisible({ timeout: 30_000 });
 await modal.getByRole('button', { name: /^aceptar$/i }).click();

 if (distributionName) await expect(page.getByText(distributionName, { exact: false }).first()).toBeVisible({ timeout: 30_000 });
 await page.getByText(/Procesos/i).click();
 await expect(page.getByText(/estado/i).first()).toBeVisible({ timeout: 30_000 });
 });
}

async function loginAs(page: Page, role: Role) {
 const loginPage = new LoginPage(page);
 const username = role === 'admin' ? env.username : env.gestorGTUsername;
 const password = role === 'admin' ? env.password : env.gestorGTPassword;
 try {
 await loginPage.login(username, password);
 } catch (error) {
 }
}

function tagsFor(config: DistributionBase, flowTag: FlowTag) {
 return buildTags({ bloque: '@bloque2', caseId: config.caseId, flowTag });
}

function distributionRowByState(page: Page, state: RegExp) {
 return page.locator('table tbody tr').filter({ hasText: state }).first();
}

function copyAction(row: Locator) {
 return row.locator('[aria-label*="copiar" i], [title*="copiar" i], [data-testid*="copy" i], [data-testid*="copiar" i]');
}

function deleteAction(row: Locator) {
 return row.locator('[aria-label*="eliminar" i], [title*="eliminar" i], [data-testid*="delete" i], [data-testid*="trash" i], [data-testid*="eliminar" i]');
}

async function openDeleteDistribution(page: Page, row: Locator) {
 const direct = deleteAction(row).first();
 if (await direct.isVisible({ timeout: 2_000 }).catch(() => false)) {
 await direct.click();
 return;
 }

 await row.getByRole('button').last().click();
 const option = page.getByRole('menuitem', { name: /eliminar/i }).or(page.getByRole('button', { name: /eliminar/i })).or(page.getByText(/eliminar/i)).first();
 await expect(option).toBeVisible();
 await option.click();
}

async function fillIfVisible(modal: Locator, label: RegExp, value: string) {
 const control = modal.getByLabel(label).or(modal.getByPlaceholder(label)).or(modal.getByRole('textbox', { name: label })).first();
 await expect(control, `Debe existir el campo ${label}.`).toBeVisible();
 await control.fill(value);
}

async function selectIfVisible(page: Page, modal: Locator, label: RegExp, value: string) {
 const control = modal.getByLabel(label).or(modal.getByRole('combobox', { name: label })).or(modal.locator('label').filter({ hasText: label }).locator('..').locator('[role="combobox"],input')).first();
 await expect(control, `Debe existir el selector ${label}.`).toBeVisible();
 await control.click();
 const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
 const option = page.getByRole('option', { name: new RegExp(escaped, 'i') }).or(page.getByText(value, { exact: true })).first();
 await expect(option, `Debe existir la opcion ${value}.`).toBeVisible();
 await option.click();
}

function firstLine(value: string) {
 return value.trim().split(/\r?\n/)[0]?.trim() ?? '';
}
