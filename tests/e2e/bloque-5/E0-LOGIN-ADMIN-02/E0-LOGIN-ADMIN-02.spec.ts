import { test, expect } from '@fixtures/base.fixture';
import {
  adminCredentials,
  loginAndAssertDistribuciones,
} from '../_shared/am-permissions';

const comunesViews = [
  { name: 'Lineas', pattern: /L[ií]neas/i },
  { name: 'Grupo Producto', pattern: /Grupo Producto/i },
  { name: 'Canales', pattern: /^Canales$/i },
  { name: 'Subcanales', pattern: /Subcanales/i },
  { name: 'Maestro UoA', pattern: /Maestro UoA/i },
  { name: 'Unidades de Cuenta - BBA/BFA', pattern: /Unidades de Cuenta/i },
  { name: 'Configuracion de Parches', pattern: /Configuraci[oó]n de Parches/i },
];

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E0-LOGIN-ADMIN-02 @am @login @admin @critical valida acceso administrador a Comunes', async ({
  comunesPage,
  page,
}) => {
  await test.step('Acceder e iniciar sesion con rol Administrador', async () => {
    await loginAndAssertDistribuciones(page, adminCredentials, 'Administrador de Gastos');
  });

  // VALIDAR DASHBOARD
  await expect(page)
  .toHaveURL(/\/distribuciones/i);
 
  // ABRIR COMUNES
  await page.getByText('Comunes').click();
  await page.getByText('Lí­neas').click();
  await page.getByText('Grupo Producto').click();
  await page.getByRole('link', {
  name: 'Canales',
  exact: true
 }).click();
  await page.getByText('Subcanales').click();
  await page.getByText('Maestro UoA').click();
  await page.getByText(/Unidades de Cuenta/i).click();
  await page.getByText('Configuración de Parches').click();
 });
