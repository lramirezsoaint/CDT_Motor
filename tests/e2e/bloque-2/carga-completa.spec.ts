import { test, expect } from './_shared/bloque2.fixture';

test.describe('@bloque2 @smoke', () => {
  test('@smoke @bloque2 debe validar que la pantalla principal de Distribuciones carga correctamente', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(/\/distribuciones/i, { timeout: 40_000 });
    await expect(page.getByRole('heading', { name: /Distribuciones/i })).toBeVisible({ timeout: 20_000 });
  });
});
