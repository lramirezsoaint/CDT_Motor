import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { ensureGfContext } from '../_shared/gf-context';
test('@bloque3 @E41-DIS-01 @distribucion VISUALIZAR-PROGRESO-DISTRIBUCION', async ({ page }) => {

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

 // 2. Presiona icono ojo del primer registro
 await page
 .getByRole('row')
 .nth(1)
 .getByRole('button')
 .first()
 .click();

 // 3. Se levanta modal con información de progreso
 const modal = page.getByRole('dialog');

 await expect(modal).toBeVisible();

 await expect(
 modal.getByText(/proceso/i)
 ).toBeVisible();

 await expect(
 modal.getByText(/Resumido/i)
 ).toBeVisible();

 await expect(
 modal.getByText(/Completo/i)
 ).toBeVisible();

});
