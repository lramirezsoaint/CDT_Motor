import { env } from '@config/env';
import { test } from '../_shared/bloque3.fixture';
import { LoginPage } from '@pages/auth/LoginPage';

test.describe('@bloque3 @E65-GF-EC ', () => {
 test.skip(true, '[QA_PENDING] Procesos GF no implementados segun reunion 2026-05-21');

 test('@bloque3 @E65-GF-EC @procesos debe validar Detener ejecucion en modo completo', async ({
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

 await test.step('Validar que se visualicen las fases', async () => {
 await procesosGastosFinancierosPage.assertExecutionStagesVisible();
 });

 await test.step('Configurar modo completo y seleccionar FASE 3', async () => {
 await procesosGastosFinancierosPage.configure({
 periodo: '',
 version: '',
 modo: 'Completo',
 regiones: [],
 });
 await procesosGastosFinancierosPage.selectFase3();
 });

 await test.step('Iniciar ejecucion y validar que exista boton Detener', async () => {
 await procesosGastosFinancierosPage.startExecutionAndStop();
 });
 });
});
