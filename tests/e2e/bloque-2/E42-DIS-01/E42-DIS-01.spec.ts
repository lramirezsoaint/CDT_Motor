import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { selectGtDistribution } from '../_shared/gt-distribution';

test.use({ storageState: '.auth/gestorGT.json' });
test('@bloque2 @gt @gestorGT @E42-DIS-01 VISUALIZAR-PROGRESO-DISTRIBUCION', async ({ page }) => {

  try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorGTUsername,
      env.gestorGTPassword
      );
    } catch (error) { }
    await selectGtDistribution(page);
  // 1. Accede a Distribuciones
  await expect(page)
    .toHaveURL(/\/distribuciones/i);

  // 2. Presiona icono copy del primer registro
  


});


