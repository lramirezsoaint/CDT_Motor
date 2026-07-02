import { expect } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import { Bloque3GastosFinancierosPage } from '@pages/bloque3/Bloque3GastosFinancierosPage';

export interface DistribucionCreada {
 nombre: string;
 periodo: string;
 tipo: string;
 seccion: string;
}

export async function crearYSeleccionarDistribucion(
 page: Page,
 distribucionPage: Bloque3GastosFinancierosPage,
 nombreBase: string = 'QA_TEST',
): Promise<DistribucionCreada> {
 const safeBase = nombreBase.replace(/[^a-zA-Z0-9 _\-()]/g, '_');
 const timestamp = Date.now();
 const nombreUnico = `${safeBase}_${timestamp}`;

 // First, try to re-use an existing distribution with the same base name
 await distribucionPage.openHome();
 const searchInput = page.getByPlaceholder('Buscar').first();
 await expect(searchInput, 'Debe existir el campo Buscar.').toBeVisible({ timeout: 10_000 });
 await searchInput.fill(safeBase);
 await page.waitForTimeout(2_000);

 const existingRow = page.locator('table tbody tr').filter({ hasText: safeBase }).first();
 const hasExisting = await existingRow.isVisible({ timeout: 10_000 }).catch(() => false);

 if (hasExisting) {
 const cells = existingRow.locator('td');
 const nombre = await cells.nth(0).innerText();
 const tipo = await cells.nth(1).innerText().catch(() => 'Real NIIF');
 const periodo = await cells.nth(2).innerText().catch(() => '202606');
 const nameCell = existingRow.locator('td').first();
 await nameCell.click();

 await searchInput.fill('');
 await page.waitForTimeout(500);

 const confirmationDialog = page.locator('[role="dialog"]').filter({
 hasText: /informaci[oó]n que se mostrar[aá].*distribuci[oó]n seleccionada|distribuci[oó]n seleccionada/i,
 }).first();

 if (await confirmationDialog.isVisible({ timeout: 5_000 }).catch(() => false)) {
 await confirmationDialog.getByRole('button', { name: /aceptar|confirmar|continuar/i }).first().click();
 }

 return { nombre, periodo, tipo, seccion: 'Flujo del mes' };
 }

 // No existing distribution found, create a new one
 await searchInput.fill('');

 const typeCandidates = ['Real Local', 'Real NIIF'];
 const month = String((Date.now() % 12) + 1).padStart(2, '0');
 const tipo = typeCandidates[Date.now() % typeCandidates.length];
 const periodo = `2026${month}`;
 const version = String((Date.now() % 15) + 1);
 const seccion = 'Flujo del mes';

 await distribucionPage.clickNuevaDistribucion();
 await distribucionPage.fillNombre(nombreUnico);
 await distribucionPage.selectTipo(tipo);
 await distribucionPage.selectPeriodo(periodo);
 await distribucionPage.selectVersion(version);
 await distribucionPage.selectTasaDeCambio('1.00');
 await distribucionPage.selectSecciones([seccion]);
 await distribucionPage.clickCrear();

 await searchInput.fill(nombreUnico);
 await page.waitForTimeout(1_000);
 const nombreRow = page.locator('table tbody tr').filter({ hasText: nombreUnico }).first();
 await expect(nombreRow, `La distribucion ${nombreUnico} debe aparecer en la tabla.`).toBeVisible({ timeout: 20_000 });

 const nameCell = nombreRow.locator('td').first();
 await nameCell.click();
 await searchInput.fill('');

 return {
 nombre: nombreUnico,
 periodo,
 tipo,
 seccion,
 };
}
