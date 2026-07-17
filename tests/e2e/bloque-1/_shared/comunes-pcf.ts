import { expect, test } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import { goToComunesView } from './comunes-upload';

const predecessorPattern = /archivo anterior aun no ha sido cargado|anterior.*no.*cargado/i;
const noPeriodDataPattern = /no existe la carga de informacion de este periodo|validar con el responsable/i;
const successPattern = /carga exitosa|informacion se realiz[oó] correctamente|archivo.*tra[ií]do satisfactoriamente/i;

async function triggerPcf(page: Page) {
 await goToComunesView(page, 'Unidades de Cuenta - BBA/VFA', 'comunes/unidades-cuenta-bba-vfa');
 const traerButton = page.getByRole('button', { name: /traer pcf/i }).first();
 await expect(traerButton, '[BUG] No se encontro el boton "Traer PCF".').toBeVisible({ timeout: 10_000 });
 await expect(traerButton, '[BUG] El boton "Traer PCF" no esta habilitado.').toBeEnabled({ timeout: 10_000 });
 await traerButton.click();

 const confirmModal = page.locator('[role="dialog"]').filter({ hasText: /tener en cuenta/i }).first();
 await expect(confirmModal, '[BUG] No se mostro el modal de comprobacion de Traer PCF.').toBeVisible({ timeout: 10_000 });
 await expect(confirmModal).toContainText(/periodo actual/i, { timeout: 10_000 });
 await confirmModal.getByRole('button', { name: /si,? estoy seguro/i }).click();
}

async function expectVisibleMessage(page: Page, pattern: RegExp, context: string) {
 await expect(
 page.getByText(pattern).first(),
 `[BUG] No se mostro el mensaje esperado para ${context}.`,
 ).toBeVisible({ timeout: 120_000 });
}

export async function executePcfPredecessorBlocked(page: Page) {
 await test.step('QA: ejecutar Traer PCF sin antecesores cargados', async () => {
 await triggerPcf(page);
 });
 await test.step('QA: validar bloqueo por archivo antecesor', async () => {
 await expectVisibleMessage(page, predecessorPattern, 'Traer PCF sin antecesores');
 });
}

export async function executePcfWithoutPeriodData(page: Page) {
 await test.step('QA: ejecutar Traer PCF sin informacion del periodo', async () => {
 await triggerPcf(page);
 });
 await test.step('QA: validar bloqueo por informacion del periodo', async () => {
 await expectVisibleMessage(page, noPeriodDataPattern, 'Traer PCF sin informacion del periodo');
 });
}

export async function executePcfAndValidateVisibleTable(page: Page) {
 await test.step('QA: ejecutar Traer PCF para Unidades de Cuenta - BBA/VFA', async () => {
 await triggerPcf(page);
 });
 await test.step('QA: validar exito y tabla visible', async () => {
 await expectVisibleMessage(page, successPattern, 'Traer PCF exitoso');
 await expect(page.locator('table').first(), '[BUG] La tabla de Unidades de Cuenta - BBA/VFA no se muestra tras Traer PCF.').toBeVisible({
 timeout: 120_000,
 });
 await expect
 .poll(async () => await page.locator('table thead th, [role="columnheader"]').count(), {
 message: '[BUG] La tabla de Unidades de Cuenta - BBA/VFA no muestra columnas.',
 timeout: 20_000,
 })
 .toBeGreaterThan(0);
 });
}
