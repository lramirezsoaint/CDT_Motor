import { expect, Locator, Page } from '@playwright/test';

export async function findDistributionRowByStatus(page: Page, status: RegExp, context: string): Promise<Locator> {
  const rows = page.locator('table tbody tr');
  await expect(rows.first(), 'La tabla debe tener filas cargadas.').toBeVisible({ timeout: 20_000 });
  const rowCount = await rows.count().catch(() => 0);

  for (let index = 0; index < rowCount; index += 1) {
    const row = rows.nth(index);
    const rowText = await row.innerText().catch(() => '');
    if (status.test(rowText)) {
      await expect(row, `Debe existir una distribucion ${context}.`).toBeVisible({ timeout: 10_000 });
      return row;
    }
  }

  throw new Error(`[DATA] No existe una distribucion ${context}.`);
}

export async function assertRowActionHidden(page: Page, row: Locator, actionName: RegExp, context: string): Promise<void> {
  const directAction = row
    .getByRole('button', { name: actionName })
    .or(row.locator(actionLocatorSelector(actionName)))
    .first();

  await expect(directAction, `No debe mostrarse accion ${actionName.source} directa en ${context}.`).toBeHidden({
    timeout: 5_000,
  });

  const buttons = row.getByRole('button');
  const buttonCount = await buttons.count().catch(() => 0);
  if (buttonCount === 0) return;

  await buttons.last().click();
  const menu = page.locator('[role="menu"], [data-radix-popper-content-wrapper], [role="listbox"]').last();
  const menuVisible = await menu.isVisible({ timeout: 5_000 }).catch(() => false);
  if (!menuVisible) return;

  const menuAction = menu
    .getByRole('menuitem', { name: actionName })
    .or(menu.getByRole('button', { name: actionName }))
    .or(menu.getByText(actionName))
    .first();

  await expect(menuAction, `No debe mostrarse accion ${actionName.source} en menu para ${context}.`).toBeHidden({
    timeout: 5_000,
  });
  await page.keyboard.press('Escape');
}

function actionLocatorSelector(actionName: RegExp): string {
  if (/copiar|copy/i.test(actionName.source)) {
    return '[aria-label*="copiar" i], [aria-label*="copy" i], [title*="copiar" i], [title*="copy" i], [data-testid*="copiar" i], [data-testid*="copy" i]';
  }

  return '[aria-label*="eliminar" i], [aria-label*="delete" i], [title*="eliminar" i], [title*="delete" i], [data-testid*="eliminar" i], [data-testid*="delete" i], [data-testid*="trash" i]';
}
