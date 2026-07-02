import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { ensureGfContext } from '../_shared/gf-context';
test('@bloque3 @E40-DIS-01 @distribucion CREAR-DISTRIBUCION-EXITOSA', async ({ page }) => {
 test.setTimeout(360000);
 try {
 const loginPage = new LoginPage(page);
 await loginPage.login(
 env.gestorGFUsername,
 env.gestorGFPassword
 );
 } catch (error) { }

 // 1. Accede a Distribuciones
 await expect(page)
 .toHaveURL(/\/distribuciones/i);
 await ensureGfContext(page);

 // 2. Nueva Distribución
 await page.getByRole('button', {
 name: /nueva distribución/i
 }).click();

 // 3. Modal Crear distribución
 const modal = page.getByRole('dialog');

 await expect(modal).toBeVisible();

 await expect(
 modal.getByText(/crear distribución/i)
 ).toBeVisible();

 const crearButton = modal.getByRole('button', {
 name: /^crear$/i
 });

 await expect(crearButton).toBeDisabled();

 // 4. Completar formulario
 const periodo = '202501';
 const tipo = 'Real Local';
 const seccion = 'Flujo del mes';
 const nombre = `${periodo}_${tipo}_${seccion}_${Date.now()}`;

 await modal.getByLabel(/nombre/i)
 .fill(nombre);

 await modal.getByLabel(/tipo/i).click();

 await page.getByRole('option', {
 name: tipo
 }).click();

 await modal.getByLabel(/periodo/i).click();

 await page
 .getByTestId(`periodo-option-${periodo}`)
 .click();

 await modal.getByLabel(/versión/i)
 .fill('1');

 await modal.getByLabel(/tasa de cambio/i)
 .fill('13.98');

 await page.getByTestId('seccion').click();

 await page
 .locator('[data-radix-popper-content-wrapper]')
 .getByText(seccion, { exact: true })
 .click();

 await expect(crearButton)
 .toBeEnabled();

 // 5. Crear distribución
 await crearButton.click();

 // 6. Mensaje de éxito
 await expect(
 page.getByText(
 /¡hecho! el registro se agregó sin problemas/i
 )
 ).toBeVisible({
 timeout: 30000
 });

});
