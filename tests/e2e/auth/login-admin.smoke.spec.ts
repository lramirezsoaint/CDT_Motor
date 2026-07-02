import { test, expect } from '@fixtures/base.fixture';

test.describe('@bloque1 @E0-LOGIN-ADMIN-01 ', () => {
 test('@bloque1 @E0-LOGIN-ADMIN-01 @login debe permitir autenticarse con rol administrador', async ({ page }) => {
 await page.goto('.', { waitUntil: 'domcontentloaded' });
 await expect(page).toHaveURL(/\/distribuciones\/?(?:\?|#|$)/i, { timeout: 40_000 });
 await expect(page.getByText(/distribuci\u00f3n/i).first()).toBeVisible();
 });
});
