import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test('@bloque3 @E0-LOGIN-GESTOR-GASTO-03 @login E0-LOGIN-GESTOR-GASTO-03', async ({
 page,
}) => {
 const loginPage = new LoginPage(page);
 await loginPage.login(
 env.gestorGFUsername,
 env.gestorGFPassword
 );
 
 await expect(page)
 .toHaveURL(/\/distribuciones/i);

 // ParametrizaciÃ³n > Cuentas Contables
 await page.getByText('Parametrización').click();

 // ParametrizaciÃ³n > Centros
 await page.getByRole('link', {
 name: /cuentas contables/i
 }).click();

 // ParametrizaciÃ³n > Maestro Producto
 await page.getByRole('link', {
 name: /Centros/i
 }).click();

 await page.getByRole('link', {
 name: /Maestro Producto/i
 }).click();
});