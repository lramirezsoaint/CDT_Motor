import { expect, test } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';

const duplicateDistributionData = {
 name: '202506_Real NIIF_Flujo del mes',
 tipo: 'Real NIIF',
 periodo: '202506',
 version: '1',
 tasaCambio: '13.98',
 seccion: 'Flujo del mes',
};

async function selectOption(page: Page, label: RegExp, value: string) {
 const dialog = page.getByRole('dialog').filter({ hasText: /crear distribuci[oó]n/i }).first();
 const trigger = dialog.getByRole('combobox', { name: label }).or(dialog.getByLabel(label)).or(dialog.getByRole('button', { name: label })).first();
 await expect(trigger, `Debe existir el selector ${label.source}.`).toBeVisible({ timeout: 10_000 });
 await trigger.click();
 await page.getByRole('option', { name: new RegExp(value, 'i') }).or(page.getByRole('menuitem', { name: new RegExp(value, 'i') })).first().click();
}

test.describe('@bloque1 @E40-DIS-02 ', () => {
 test('@bloque1 @E40-DIS-02 @distribucion @critical debe bloquear la creacion de distribucion que no cumple reglas de negocio', async ({ page }) => {
 await page.goto('/distribuciones/', { waitUntil: 'domcontentloaded' });
 await page.getByRole('button', { name: /nueva distribuci[oó]n/i }).click();
 const dialog = page.getByRole('dialog').filter({ hasText: /crear distribuci[oó]n/i }).first();
 await expect(dialog, 'Debe levantarse el modal Crear distribucion.').toBeVisible({ timeout: 15_000 });
 await expect(dialog.getByRole('button', { name: /^crear$/i })).toBeDisabled();

 await dialog.getByRole('textbox', { name: /nombre/i }).or(dialog.getByLabel(/nombre/i)).first().fill(duplicateDistributionData.name);
 await selectOption(page, /tipo/i, duplicateDistributionData.tipo);
 await selectOption(page, /periodo/i, duplicateDistributionData.periodo);
 await dialog.getByRole('textbox', { name: /versi[oó]n/i }).or(dialog.getByLabel(/versi[oó]n/i)).first().fill(duplicateDistributionData.version);
 await dialog.getByRole('textbox', { name: /tasa de cambio/i }).or(dialog.getByLabel(/tasa de cambio/i)).first().fill(duplicateDistributionData.tasaCambio);
 await selectOption(page, /secciones?|secci[oó]n/i, duplicateDistributionData.seccion);

 const createButton = dialog.getByRole('button', { name: /^crear$/i });
 await expect(createButton).toBeEnabled({ timeout: 15_000 });
 await createButton.click();
 await expect(page.getByText(/algo no coincide entre los datos ingresados.*campos est[aá]n relacionados correctamente/i).first()).toBeVisible({
 timeout: 30_000,
 });
 });
});
