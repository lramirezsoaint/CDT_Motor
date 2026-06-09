import { expect } from '@fixtures/base.fixture';
import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E43-DIS-01
 * Descripción: Validar la disponibilidad de la acción “Eliminar” desde el menú de acciones según el estado de la distribución
 * Casos:
 * - E43-DIS-01.1: Validar que el sistema permite Eliminar una distribución desde el menú de acciones cuando el estado sea “Creada" y su rol sea Administrador de Gastos
 * - E43-DIS-01.2: Validar que el sistema permite Eliminar una distribución desde el menú de acciones cuando el estado sea “Con errores" y su rol sea Administrador de Gastos
 * - E43-DIS-01.3: Validar que el sistema No permite Eliminar una distribución desde el menú de acciones cuando el estado sea: “Detenida", “Corriendo" o “Completada"
 */

test.describe('@bloque2 @E43-DIS-01', () => {
  test.skip(process.env.PW_PROJECT !== 'chromium', 'Solo se ejecuta en el proyecto Chromium con auth de Administrador');

  test('@bloque2 @E43-DIS-01 debe validar disponibilidad de eliminar según estado', async ({ distribucionPage, page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await distribucionPage.openDistribuciones();

    const creadaRow = await distribucionPage.findRowByStatus(/creada/i);
    await distribucionPage.openRowActionsMenu(creadaRow);
    await distribucionPage.expectActionVisible(/eliminar|delete/i);
    await distribucionPage.closeActionsMenu();

    const conErroresRow = await distribucionPage.findRowByStatus(/con errores|errores|error/i);
    await distribucionPage.openRowActionsMenu(conErroresRow);
    await distribucionPage.expectActionVisible(/eliminar|delete/i);
    await distribucionPage.closeActionsMenu();

    const blockedRow = await distribucionPage.findRowByStatus(/detenida|corriendo|completada/i);
    await distribucionPage.openRowActionsMenu(blockedRow);
    await distribucionPage.expectActionHidden(/eliminar|delete/i);
    await distribucionPage.closeActionsMenu();
  });
});
