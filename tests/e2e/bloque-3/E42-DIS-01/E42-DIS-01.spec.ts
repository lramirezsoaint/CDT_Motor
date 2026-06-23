import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { ensureGfContext } from '../_shared/gf-context';

test('VISUALIZAR-PROGRESO-DISTRIBUCION', async ({ page }) => {

  try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorUsername,
        env.gestorPassword
      );
    } catch (error) { }
  // 1. Accede a Distribuciones
  await expect(page)
    .toHaveURL(/\/distribuciones/i);
  await ensureGfContext(page);

  // 2. Presiona icono copy del primer registro
  


});
