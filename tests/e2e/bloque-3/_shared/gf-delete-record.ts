import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { selectGfDistributionAdd, SelectGfDistributionOptions } from './gf-distribution';
import { GfCaseBase, openGfView, tagsFor, viewTitlePattern } from './gf-ui';

type DeleteResult = 'success' | 'processError';

type DeleteRecordCaseConfig = GfCaseBase & {
 distribution?: SelectGfDistributionOptions;
 expectedResult: DeleteResult;
 warningMessage: RegExp;
 expectedMessage: RegExp;
 targetRow?: RegExp;
};

export function DeleteRecordCase(config: DeleteRecordCaseConfig) {
 if (config.role === 'admin') {
 test.use({ storageState: '.auth/admin.json' });
 }

 test(`${tagsFor(config)} elimina registro y valida resultado ${config.expectedResult}`, async ({ page }) => {
 test.setTimeout(180_000);

 await test.step('Abrir vista del flujo de Gastos Financieros', async () => {
 try {
 await page.goto('https://distribuciongastos.pacificotest.com.pe/');
 const loginPage = new LoginPage(page);
 const username = config.role === 'admin' ? env.username : env.gestorGFUsername;
 const password = config.role === 'admin' ? env.password : env.gestorGFPassword;
 await loginPage.login(username, password);
 } catch (error) {
 }
 });

 await selectGfDistributionAdd(page, config.distribution);

 await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
 await openGfView(page, config);
 await expect(page.getByRole('heading', { name: viewTitlePattern(config.view) })).toBeVisible({ timeout: 30_000 });
 });

 const row = targetRowLocator(page, config);
 await expect(row, 'Debe existir al menos un registro en la tabla para eliminar.').toBeVisible({ timeout: 30_000 });
 const rowKey = await firstMeaningfulCellText(row);
 test.info().annotations.push({
 type: 'TODO',
 description: 'El catalogo no especifica identificador del registro; se usa el primer registro visible de la tabla.',
 });

 await test.step('Ejecutar accion Eliminar desde la tabla', async () => {
 await openDeleteAction(page, row);
 });

 const modal = page.getByRole('alertdialog').or(page.getByRole('dialog')).or(page.locator('[role="dialog"]')).first();
 await expect(modal, 'Debe mostrarse modal/alerta de confirmacion de eliminacion.').toBeVisible({ timeout: 15_000 });
 await expect(modal.getByText(config.warningMessage).or(page.getByText(config.warningMessage)).first()).toBeVisible();

 await test.step('Confirmar eliminacion', async () => {
 await modal.getByRole('button', { name: /^Eliminar$/i }).click();
 });

 if (config.expectedResult === 'success') {
 await test.step('Validar eliminacion exitosa', async () => {
 const successMessage = page.getByText(config.expectedMessage).first();
 if (await successMessage.isVisible({ timeout: 5_000 }).catch(() => false)) {
 await expect(successMessage).toBeVisible();
 return;
 }

 if (rowKey) {
 await expect(page.getByText(rowKey, { exact: false }).first()).toBeHidden({ timeout: 30_000 });
 }
 });
 return;
 }

 await test.step('Validar que el registro no se elimina', async () => {
 await expect(page.getByText(config.expectedMessage).or(modal.getByText(config.expectedMessage)).first()).toBeVisible({ timeout: 30_000 });
 if (rowKey) {
 await expect(page.getByText(rowKey, { exact: false }).first()).toBeVisible();
 }
 });
 });
}

async function openDeleteAction(page: Page, row: Locator) {
 const directDelete = row
 .getByRole('button', { name: /eliminar|borrar|delete/i })
 .or(row.locator('[data-testid*="delete"], [data-testid*="trash"], [aria-label*="Eliminar"], [title*="Eliminar"]'))
 .first();

 if (await directDelete.isVisible({ timeout: 2_000 }).catch(() => false)) {
 await directDelete.click();
 return;
 }

 const actionButton = row
 .getByRole('button', { name: /acciones|mas|more|opciones/i })
 .or(row.locator('[data-testid*="action"], [aria-label*="Acciones"], [title*="Acciones"]'))
 .or(row.getByRole('button').last())
 .first();

 await expect(actionButton, 'Debe existir el menu de acciones del registro.').toBeVisible();
 await actionButton.click();

 const deleteOption = page
 .getByRole('menuitem', { name: /eliminar|borrar|delete/i })
 .or(page.getByRole('button', { name: /eliminar|borrar|delete/i }))
 .or(page.getByText(/eliminar|borrar|delete/i))
 .first();

 await expect(deleteOption, 'Debe existir la opcion Eliminar en el menu de acciones.').toBeVisible();
 await deleteOption.click();
}

function targetRowLocator(page: Page, config: DeleteRecordCaseConfig) {
 const rows = page.locator('table tbody tr');
 return config.targetRow ? rows.filter({ hasText: config.targetRow }).first() : rows.first();
}

async function firstMeaningfulCellText(row: Locator) {
 const cells = row.locator('td');
 const count = await cells.count();
 for (let index = 0; index < count; index += 1) {
 const text = (await cells.nth(index).innerText().catch(() => '')).trim();
 if (text && !/acciones|editar|eliminar/i.test(text)) {
 return text.split(/\r?\n/)[0].trim();
 }
 }
 return '';
}
