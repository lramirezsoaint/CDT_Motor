import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { selectGtDistribution } from '../_shared/gt-distribution';

test('@bloque2 @E0-LOGIN-GESTOR-GASTO-02 @login E0-LOGIN-ADMIN-02', async ({ page }) => {

 try {
 const loginPage = new LoginPage(page);
 await loginPage.login(
 env.username,
 env.password
 );
 } catch (error) { }
 await selectGtDistribution(page);

 // VALIDAR DASHBOARD
 await expect(page)
 .toHaveURL(/\/distribuciones/i);

 // ABRIR COMUNES
 await page.getByText('Comunes').click();

 await page.getByText('Lí­neas').click();
 await page.getByText('Grupo Producto').click();
 await page.getByRole('link', {
 name: 'Canales',
 exact: true
}).click();

 await page.getByText('Subcanales').click();
 await page.getByText('Maestro UoA').click();
 await page.getByText(/Unidades de Cuenta/i).click();
 await page.getByText('Configuración de Parches').click();
});



