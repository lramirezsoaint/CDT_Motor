import { test } from '@fixtures/base.fixture';

test.describe('@bloque1 @E40-DIS-01 ', () => {
 test('@bloque1 @E40-DIS-01 @distribucion debe mostrar acci\u00f3n Nueva Distribuci\u00f3n disponible', async ({
 distribucionPage,
 }) => {
 await test.step('Validar la presencia de acci\u00f3n', async () => {
 await distribucionPage.expectNuevaDistribucionDisponible();
 });
 });
});
