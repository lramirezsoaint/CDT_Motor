import { env } from '@config/env';
import { test } from './bloque3.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { ensureGfContext } from './gf-context';

export type GfColumnsCase = {
 caseId: string;
 section: string;
 view: string;
};

export function defineGfColumnsSelectionTest(config: GfColumnsCase) {
 test.describe(`@bloque3 @${config.caseId}`, () => {
 test(`@bloque3 @${config.caseId} @columnas debe seleccionar columnas en ${config.view}`, async ({
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
 await ensureGfContext(page);
 let selectedColumn = '';

 await test.step(`Acceder a ${config.section} > ${config.view}`, async () => {
 await bloque3GastosFinancierosPage.openSidebarView(config.section, config.view);
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
}
