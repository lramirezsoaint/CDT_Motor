import { expect, Locator, Page } from '@fixtures/base.fixture';

export async function expectAbsent(locator: Locator, message?: string): Promise<void> {
  await expect(locator, message).toHaveCount(0);
}

export async function expectNoDeleteAction(page: Page): Promise<void> {
  await expect(page.locator('svg.lucide-trash-2, svg.lucide-trash, [aria-label*="eliminar" i]')).toHaveCount(0);
}

export async function expectTableHasRows(page: Page): Promise<void> {
  await expect(page.locator('table tbody tr').first(), 'Debe existir al menos una fila en la tabla.').toBeVisible({
    timeout: 15_000,
  });
}
