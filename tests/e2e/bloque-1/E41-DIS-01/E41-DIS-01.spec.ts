import { test } from '@fixtures/base.fixture';

test.describe('@bloque1 @E41-DIS-01 ', () => {
 test('@bloque1 @E41-DIS-01 @distribucion debe visualizar el progreso de una distribucion desde acciones', async ({
 distribucionPage,
 }) => {
 let rowValues: Awaited<ReturnType<typeof distribucionPage.getRowValues>> | undefined;

 await test.step('Acceder a Distribuciones y tomar una distribucion visible', async () => {
 const row = await distribucionPage.requireFirstDistributionRow('visualizar desde acciones');
 rowValues = await distribucionPage.getRowValues(row);
 });

 await test.step('Abrir la accion Ver de la distribucion', async () => {
 const row = await distribucionPage.requireFirstDistributionRow('abrir detalle desde acciones');
 await distribucionPage.openViewModalFromRow(row);
 });

 await test.step('Validar datos y estado de progreso en el modal', async () => {
 if (!rowValues) throw new Error('[DATA] No se capturaron datos de distribucion para validar el modal.');
 await distribucionPage.expectViewModalContains(rowValues);
 });
 });
});
