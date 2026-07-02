import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { selectGtDistribution } from '../_shared/gt-distribution';
test('@bloque2 @E0-LOGIN-GESTOR-GASTO-03.1 @login E0-LOGIN-ADMIN-03', async ({ page }) => {

 try {
 const loginPage = new LoginPage(page);
 await loginPage.login(
 env.gestorGTUsername,
 env.gestorGTPassword
 );
 } catch (error) { }
 await selectGtDistribution(page);

 await expect(page)
 .toHaveURL(/\/distribuciones/i);

 // ParametrizaciÃ³n > Cuentas Contables
 await page.getByText('Parametrización').click();

 await page.getByRole('link', {
 name: /Ramo/i
 }).click();

 // ParametrizaciÃ³n > Centros
 await page.getByRole('link', {
 name: /cuentas contables/i
 }).click();

 // ParametrizaciÃ³n > Maestro Producto
 await page.getByRole('link', {
 name: /Centros/i
 }).click();
});


