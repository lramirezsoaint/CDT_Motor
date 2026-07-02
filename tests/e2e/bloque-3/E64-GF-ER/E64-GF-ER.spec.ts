import { env } from '@config/env';
import { test } from '../_shared/bloque3.fixture';
import { LoginPage } from '@pages/auth/LoginPage';

test.describe('@bloque3 @E64-GF-ER ', () => {
 test.skip(true, '[QA_PENDING] Procesos GF no implementados segun reunion 2026-05-21');

 test('@bloque3 @E64-GF-ER @procesos debe validar Ejecutar Todo en modo resumido', async ({
 procesosGastosFinancierosPage,
 page,
 }) => {
 try {
 const loginPage = new LoginPage(page);
 await loginPage.login(
 env.gestorGFUsername,
 env.gestorGFPassword
 );
 } catch (error) { }
 await test.step('Abrir Procesos de Gastos Financieros', async () => {
 await procesosGastosFinancierosPage.open();
 });

 await test.step('Validar que se visualicen las fases de ejecucion', async () => {
 await procesosGastosFinancierosPage.assertExecutionStagesVisible();
 });

 await test.step('Configurar modo resumido y seleccionar FASE 3', async () => {
 await procesosGastosFinancierosPage.configure({
 periodo: '',
 version: '',
 modo: 'Resumido',
 regiones: [],
 });
 await procesosGastosFinancierosPage.selectFase3();
 });

 await test.step('Ejecutar Todo sin aplicar parche', async () => {
 await procesosGastosFinancierosPage.executeAllWithoutPatch();
 });

 await test.step('Validar progreso de fases completadas', async () => {
 await procesosGastosFinancierosPage.assertExpectedProgressAfterSkippingPatch();
 });
 });
});