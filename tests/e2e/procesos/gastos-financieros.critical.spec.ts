import { test } from '@fixtures/base.fixture';

test.describe('@bloque3 @E64-GF-ER-01-01 ', () => {
 test.skip(true, '[QA_PENDING] Procesos GF no implementados según reunión 2026-05-21');

 test('@bloque3 @E64-GF-ER-01-01 @procesos debe ejecutar el flujo de Gastos Financieros hasta fase 3 en modo resumido sin aplicar parches', async ({
 procesosGastosFinancierosPage,
 }) => {
 await test.step('Preparar el módulo de Gastos Financieros en Procesos', async () => {
 await procesosGastosFinancierosPage.open();
 await procesosGastosFinancierosPage.assertExecutionStagesVisible();
 });

 await test.step('Configurar periodo, versión, modo resumido y regiones del caso', async () => {
 await procesosGastosFinancierosPage.configure({
 periodo: '202506',
 version: '1',
 modo: 'Resumido',
 regiones: ['Exactus', 'AMED', 'AP Vida'],
 });
 });

 await test.step('Seleccionar la fase 3 objetivo del caso', async () => {
 await procesosGastosFinancierosPage.selectFase3();
 await procesosGastosFinancierosPage.assertPhase3BusinessContext();
 });

 await test.step('Ejecutar todo y rechazar la aplicación de parches', async () => {
 await procesosGastosFinancierosPage.executeAllWithoutPatch();
 await procesosGastosFinancierosPage.assertExecutionStagesVisible();
 await procesosGastosFinancierosPage.assertExpectedProgressAfterSkippingPatch();
 });
 });
});
