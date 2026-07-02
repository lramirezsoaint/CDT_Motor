import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { ensureGfContext } from '../_shared/gf-context';
test('@bloque3 @E42-DIS-01 @distribucion VISUALIZAR-PROGRESO-DISTRIBUCION', async ({ page }) => {

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

 // 2. Presiona icono copy del primer registro
 


});
