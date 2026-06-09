import { expect } from '@fixtures/base.fixture';
import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: E42-DIS-01
 * Descripción: Validar la disponibilidad de la acción “Copiar” desde el menú de acciones según el estado de la distribución
 * Casos:
 * - E42-DIS-01: Validar que el sistema permite copiar una distribución desde el menú de acciones cuando el estado sea “Completada"
 * - E42-DIS-01.1: Validar que el sistema no muestre la opción “Copiar” en el menú de acciones cuando el estado sea diferente a “Completada”
 */

test.describe('@bloque2 @E42-DIS-01', () => {
  test.skip(process.env.PW_PROJECT !== 'chromium', 'Solo se ejecuta en el proyecto Chromium con auth de Administrador');

  test('@bloque2 @E42-DIS-01 debe validar disponibilidad de copiar según estado', async ({ distribucionPage, page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await distribucionPage.openDistribuciones();

    const completedRow = await distribucionPage.findRowByStatus(/completada/i);
    await distribucionPage.openRowActionsMenu(completedRow);
    await distribucionPage.expectActionVisible(/copiar/i);
    await distribucionPage.closeActionsMenu();

    const nonCompletedRow = await distribucionPage.findRowWithoutStatus(/completada/i);
    await distribucionPage.openRowActionsMenu(nonCompletedRow);
    await distribucionPage.expectActionHidden(/copiar/i);
    await distribucionPage.closeActionsMenu();
  });
});
