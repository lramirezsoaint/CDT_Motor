import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { selectGtDistribution } from '../_shared/gt-distribution';

test.use({ storageState: '.auth/gestorGasto.json' });
test('@bloque2 @gt @gestor-gasto @E42-DIS-01 VISUALIZAR-PROGRESO-DISTRIBUCION', async ({ page }) => {

  try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorGastoUsername,
      env.gestorGastoPassword
      );
    } catch (error) { }
    await selectGtDistribution(page);
  // 1. Accede a Distribuciones
  await expect(page)
    .toHaveURL(/\/distribuciones/i);

  // 2. Presiona icono copy del primer registro
  


});


