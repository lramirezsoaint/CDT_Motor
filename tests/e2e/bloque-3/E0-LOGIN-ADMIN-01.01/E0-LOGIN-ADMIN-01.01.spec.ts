import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { ensureGfContext } from '../_shared/gf-context';
test('@bloque3 @E0-LOGIN-ADMIN-01.01 @login E0-LOGIN-ADMIN-01.01', async ({ page }) => {
 try {
 const loginPage = new LoginPage(page);
 await loginPage.login(
 env.username,
 env.password
 );
 } catch (error) { }

 await expect(page)
 .toHaveURL(/\/distribuciones/i);
 await ensureGfContext(page);

});
