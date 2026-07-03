import { test } from '../_shared/bloque3.fixture';

test.describe('@bloque3 @E60-GF-02.2.2 ', () => {
 test('@bloque3 @E60-GF-02.2.2 @columnas debe validar buscador de columnas en Driver Producto', async ({
 bloque3GastosFinancierosPage,
 page,
 }) => {
 await test.step('Acceder a Aprovisionamiento > Driver Producto', async () => {
 await bloque3GastosFinancierosPage.openSidebarView('Aprovisionamiento', 'Driver Producto');
 });
 await test.step('Abrir menu de columnas y buscar', async () => {
 const menu = await bloque3GastosFinancierosPage.openColumnsMenu();
 const searchInput = menu.getByPlaceholder(/buscar/i).or(menu.locator('input[type="search"]')).first();
 await searchInput.fill('Código');
 const count = await menu.getByRole('menuitemcheckbox').count();
 test.expect(count, 'Debe haber columnas filtradas.').toBeGreaterThan(0);
 await page.keyboard.press('Escape');
 });
 });
});