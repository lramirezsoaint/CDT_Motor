import { test, expect } from '@fixtures/base.fixture';
import testData from '@data/testData.json';

const ADMIN_USER = {
 email: testData.auth.userEmail,
 nameFragment: testData.auth.displayNameFragment,
};

test.describe('@bloque1 @E0-LOGIN-01 ', () => {
 test('@bloque1 @E0-LOGIN-01 @login debe validar login y visualizaci\u00f3n de usuario en sidebar', async ({ sidebar, page }) => {
 await test.step('Abrir una ruta autenticada', async () => {
 await page.goto('.', { waitUntil: 'domcontentloaded' });
 await expect(page).toHaveURL(/\/distribuciones/i);
 });

 await test.step('Validar datos en sidebar', async () => {
 await sidebar.assertUserInfo(ADMIN_USER.nameFragment, ADMIN_USER.email);
 const screenshot = await page.screenshot({ fullPage: true });
 test.info().attach('sidebar', { body: screenshot, contentType: 'image/png' });
 });

 await test.step('Validar acceso al sistema', async () => {
 await expect(page).toHaveURL(/\/distribuciones/i);
 await expect(page.getByPlaceholder(/buscar/i)).toBeVisible({ timeout: 30_000 });
 });
 });
});

test.describe('@bloque1 @E0-LOGIN-02 ', () => {
 test('@bloque1 @E0-LOGIN-02 @login debe validar permisos de administrador en m\u00f3dulo Comunes', async ({
 comunesPage,
 page,
 }) => {
 await test.step('Abrir una ruta autenticada', async () => {
 await page.goto('.', { waitUntil: 'domcontentloaded' });
 await expect(page).toHaveURL(/\/distribuciones/i);
 });

 await test.step('Navegar a Comunes > L\u00edneas', async () => {
 await comunesPage.openLineas();
 await expect(page).toHaveURL(/(comunes\/lineas|distribuciones)/i);
 });

 await test.step('Validar que puede visualizar archivos (grid visible)', async () => {
 await comunesPage.isGridVisible();
 const gridShot = await page.screenshot({ fullPage: false });
 test.info().attach('grid', { body: gridShot, contentType: 'image/png' });
 });

 await test.step('Validar que puede interactuar (botones habilitados)', async () => {
 await comunesPage.canEdit();
 });
 });
});
