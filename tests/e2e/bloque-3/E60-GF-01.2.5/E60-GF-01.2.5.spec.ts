import { env } from '@config/env';
import { test } from '../_shared/bloque3.fixture';
import { LoginPage } from '@pages/auth/LoginPage';

test.describe('@bloque3 @gf @columnas @E60-GF-01.2.5', () => {
  test('@critical @bloque3 @gf @E60-GF-01.2.5 debe seleccionar columnas en Maestro de Negocio Embebidos', async ({
    bloque3GastosFinancierosPage,
    page,
  }) => {
    try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorUsername,
        env.gestorPassword
      );
    } catch (error) { }
    let selectedColumn = '';

    await test.step('Acceder a Aprovisionamiento > Maestro de Negocio Embebidos', async () => {
      await bloque3GastosFinancierosPage.openSidebarView('Aprovisionamiento', 'Maestro de Negocio Embebidos');
    });

    await test.step('Validar columnas por defecto y seleccionar una columna opcional', async () => {
      const menu = await bloque3GastosFinancierosPage.openColumnsMenu();
      await bloque3GastosFinancierosPage.assertDefaultColumnsMarked(menu);
      selectedColumn = await bloque3GastosFinancierosPage.selectFirstOptionalColumnAndApply(menu);
    });

    await test.step('Validar que la columna seleccionada aparece en tabla', async () => {
      await bloque3GastosFinancierosPage.assertHeaderContains(selectedColumn);
    });
  });
});