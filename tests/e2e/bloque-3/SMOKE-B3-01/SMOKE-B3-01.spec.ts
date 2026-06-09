import { env } from '@config/env';
import { test } from '../_shared/bloque3.fixture';
import { LoginPage } from '@pages/auth/LoginPage';

test.describe('@bloque3 @gf @smoke @SMOKE-B3-01', () => {
  test('@smoke @bloque3 @gf @SMOKE-B3-01 debe iniciar autenticado y cargar la pantalla inicial de Gastos Financieros', async ({
    bloque3GastosFinancierosPage,
    page,
  }) => {
    try {
            const loginPage = new LoginPage(page);
            await loginPage.login(
                env.username,
                env.password
            );
        } catch (error) { }
    await test.step('Acceder autenticado al modulo de Gastos Financieros', async () => {
      await bloque3GastosFinancierosPage.openHome();
    });

    await test.step('Validar pantalla principal y accion de negocio visible', async () => {
      await bloque3GastosFinancierosPage.assertBusinessHomeReady();
    });
  });
});
