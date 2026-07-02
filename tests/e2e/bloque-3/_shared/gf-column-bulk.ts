import { env } from '@config/env';
import { test } from './bloque3.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { ensureGfContext } from './gf-context';

type GfColumnBulkAction = 'mostrar-todas' | 'ocultar-todas';

export interface GfColumnBulkCase {
 caseId: string;
 section: string;
 view: string;
 tab?: string;
 action: GfColumnBulkAction;
}

export function defineGfColumnBulkTest(config: GfColumnBulkCase): void {
 const actionText = config.action === 'mostrar-todas' ? 'mostrar todas las columnas' : 'ocultar columnas opcionales';

 test.describe(`@bloque3 @${config.caseId}`, () => {
 test(`@bloque3 @${config.caseId} @columnas debe validar ${actionText} en ${config.view}`, async ({
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
 await test.step(`Acceder a ${config.section} > ${config.view}`, async () => {
 await bloque3GastosFinancierosPage.openSidebarView(config.section, config.view);
 });

 if (config.tab) {
 await test.step(`Activar vista ${config.tab}`, async () => {
 const tab = page
 .getByRole('button', { name: new RegExp(config.tab ?? '', 'i') })
 .or(page.getByRole('tab', { name: new RegExp(config.tab ?? '', 'i') }))
 .or(page.getByText(new RegExp(config.tab ?? '', 'i')))
 .first();

 await tab.click();
 await page.getByText(/Cargando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => undefined);
 });
 }

 await test.step('Abrir componente Columnas', async () => {
 const menu = await bloque3GastosFinancierosPage.openColumnsMenu();

 if (config.action === 'mostrar-todas') {
 const selectedCount = await bloque3GastosFinancierosPage.showAllColumnsAndApply(menu);
 test.expect(selectedCount, 'Mostrar todas debe operar sobre columnas reales del archivo.').toBeGreaterThan(0);
 return;
 }

 const result = await bloque3GastosFinancierosPage.hideOptionalColumnsAndApply(menu);
 test.expect(result.defaultCount, 'Ocultar todas debe conservar columnas por defecto.').toBeGreaterThan(0);
 test.expect(result.optionalCount, 'Ocultar todas debe afectar columnas opcionales reales.').toBeGreaterThan(0);
 });
 });
 });
}
