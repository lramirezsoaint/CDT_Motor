import { env } from '@config/env';
import { test } from '../_shared/bloque3.fixture';
import { LoginPage } from '@pages/auth/LoginPage';

test.describe('@bloque3 @E60-GF-01.2.2 ', () => {
 test('@bloque3 @E60-GF-01.2.2 @columnas debe seleccionar columnas en Exactus procesado', async ({
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
 let selectedColumn = '';

 await test.step('Acceder a Aprovisionamiento > Exactus', async () => {
 await bloque3GastosFinancierosPage.openSidebarView('Aprovisionamiento', 'Exactus');
 });

 await test.step('Activar vista Exactus procesado', async () => {
 const processedButton = page
 .getByRole('button', { name: /Exactus procesado/i })
 .or(page.getByRole('tab', { name: /Exactus procesado/i }))
 .or(page.getByText(/Exactus procesado/i))
 .first();

 await processedButton.click();
 await page.getByText(/Cargando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => undefined);
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
