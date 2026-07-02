import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { selectGtDistribution } from '../_shared/gt-distribution';
import { selectGtDistributionDownload } from '../_shared/gt-distributionDownload';
test('@bloque2 @E44-DIS-01 @distribucion SELECCIONAR-DISTRIBUCION-DESDE-TABLA', async ({ page }) => {

 try {
 const loginPage = new LoginPage(page);
 await loginPage.login(
 env.gestorGTUsername,
 env.gestorGTPassword
 );
 } catch (error) { }
 await selectGtDistributionDownload(page);
 await selectGtDistribution(page);
 await expect(page)
 .toHaveURL(/\/distribuciones/i);

 // 4. Procesos muestra estado
 await page.getByText(
 'Procesos'
 ).click();

 await expect(
 page.getByText(
 /estado/i
 )
 ).toBeVisible();

});

