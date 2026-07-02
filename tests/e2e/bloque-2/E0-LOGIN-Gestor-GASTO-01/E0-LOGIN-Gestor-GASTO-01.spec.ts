import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { selectGtDistribution } from '../_shared/gt-distribution';

test('@bloque2 @E0-LOGIN-GESTOR-GASTO-01 @login E0-LOGIN-GESTOR-GASTO-01', async ({ page }) => {

 try {
 const loginPage = new LoginPage(page);
 await loginPage.login(
 env.gestorGTUsername,
 env.gestorGTPassword
 );
 } catch (error) { }
 await selectGtDistribution(page);

 // VALIDAR LOGIN
 await expect(page)
 .toHaveURL(/\/distribuciones/i);

 // VALIDAR DASHBOARD
 await expect(
 page.getByRole('heading', {
 name: /distribuciones/i
 })
 ).toBeVisible();

});


