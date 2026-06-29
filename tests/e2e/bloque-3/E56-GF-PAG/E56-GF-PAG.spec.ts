import { env } from '@config/env';
import { test } from '../_shared/bloque3.fixture';
import { LoginPage } from '@pages/auth/LoginPage';

test.describe('@bloque3 @gf @critical @E56-GF-PAG', () => {
  test('@critical @bloque3 @gf @E56-GF-PAG debe validar paginador en Distribuciones de Gastos Financieros', async ({
    bloque3GastosFinancierosPage,
    page,
  }) => {
    try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorGFUsername,
        env.gestorGFPassword
      );
    } catch (error) { }
    await test.step('Acceder a la vista inicial de Gastos Financieros', async () => {
      await bloque3GastosFinancierosPage.openHome();
      await bloque3GastosFinancierosPage.requireSearchableDistributionValue();
    });

    await test.step('Validar estado inicial del paginador', async () => {
      await bloque3GastosFinancierosPage.assertPaginatorInitialState();
    });

    await test.step('Validar selector de filas por pagina', async () => {
      for (const size of [5, 10, 20]) {
        await bloque3GastosFinancierosPage.selectRowsPerPage(size);
        await bloque3GastosFinancierosPage.assertVisibleRowsDoNotExceed(size);
      }
    });

    await test.step('Validar navegacion del paginador cuando existan multiples paginas', async () => {
      await bloque3GastosFinancierosPage.selectRowsPerPage(5);
      await bloque3GastosFinancierosPage.assertPaginatorNavigationWhenMultiplePages();
    });
  });
});
