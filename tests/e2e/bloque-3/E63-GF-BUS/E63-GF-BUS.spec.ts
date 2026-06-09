import { env } from '@config/env';
import { test } from '../_shared/bloque3.fixture';
import { LoginPage } from '@pages/auth/LoginPage';

test.describe('@bloque3 @gf @critical @E63-GF-BUS', () => {
  test('@critical @bloque3 @gf @E63-GF-BUS debe filtrar resultados con el buscador general de Gastos Financieros', async ({
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
    let searchValue = '';

    await test.step('Acceder a Distribuciones en el modulo Gastos Financieros', async () => {
      await bloque3GastosFinancierosPage.openHome();
      await bloque3GastosFinancierosPage.assertBusinessHomeReady();
    });

    await test.step('Tomar un dato real visible para ejecutar la busqueda', async () => {
      searchValue = await bloque3GastosFinancierosPage.requireSearchableDistributionValue();
    });

    await test.step('Validar respuesta del buscador desde el tercer caracter', async () => {
      await bloque3GastosFinancierosPage.assertSearchRespondsAfterThreeCharacters(searchValue);
    });

    await test.step('Buscar el dato real capturado', async () => {
      await bloque3GastosFinancierosPage.searchByGeneralInput(searchValue);
    });

    await test.step('Validar que la tabla devuelve resultados correspondientes', async () => {
      await bloque3GastosFinancierosPage.assertGeneralSearchResults(searchValue);
    });
  });
});
