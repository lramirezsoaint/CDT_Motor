import { test, expect } from '../_shared/bloque3.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test('@critical @bloque3 @auth @gf @login @E0-LOGIN-GESTOR-GASTO-03 E0-LOGIN-GESTOR-GASTO-03', async ({
  bloque3GastosFinancierosPage,
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(env.gestorGFUsername, env.gestorGFPassword);

  await expect(page, 'Debe quedar autenticado en la pantalla de Distribuciones').toHaveURL(/\/distribuciones/i, {
    timeout: 40_000,
  });

  await bloque3GastosFinancierosPage.openSidebarView('Parametrizaci\u00f3n', 'Cuentas Contables');
  await expect(page, 'Debe abrir la vista Cuentas Contables').toHaveURL(/\/parametrizacion\/cuentas-contables/i);

  await bloque3GastosFinancierosPage.openSidebarView('Parametrizaci\u00f3n', 'Centros');
  await expect(page, 'Debe abrir la vista Centros').toHaveURL(/\/parametrizacion\/centros/i);

  await expect(
    page.getByRole('link', { name: /Maestro Producto/i }),
    'El rol GF debe ver Maestro Producto',
  ).toHaveCount(1);
});
