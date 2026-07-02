import { test } from '@fixtures/base.fixture';

test.describe('@bloque1 @E40-DIS-03 ', () => {
 test('@bloque1 @E40-DIS-03 @distribucion debe bloquear la creacion con campos requeridos y formatos invalidos', async ({
 distribucionPage,
 }) => {
 await test.step('Validar obligatoriedad de campos del formulario', async () => {
 await distribucionPage.validateCreateDistributionRequiredFields();
 });

 await test.step('Validar formato de Version y Tasa de cambio', async () => {
 await distribucionPage.validateCreateDistributionFormatFields();
 });
 });
});
