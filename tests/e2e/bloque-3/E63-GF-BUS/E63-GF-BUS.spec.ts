import { test } from '../_shared/bloque3.fixture';

test.describe('@bloque3 @E63-GF-BUS ', () => {
 test('@bloque3 @E63-GF-BUS @busqueda debe filtrar resultados con el buscador general de Gastos Financieros', async ({
 bloque3GastosFinancierosPage,
 page,
 }) => {
 let searchValue = '';

 await test.step('Acceder a Distribuciones en el modulo Gastos Financieros', async () => {
 await bloque3GastosFinancierosPage.openHome();
 await bloque3GastosFinancierosPage.assertBusinessHomeReady();
 });

 await test.step('Tomar un dato real visible para ejecutar la busqueda', async () => {
 searchValue = await bloque3GastosFinancierosPage.requireSearchableDistributionValue();
 });

 await test.step('Validar respuesta del buscador desde el tercer caracter', async () => {
 await bloque3GastosFinancierosPage.assertSearchRespondsAfterThreeCharacters(searchValue);
 });

 await test.step('Buscar el dato real capturado', async () => {
 await bloque3GastosFinancierosPage.searchByGeneralInput(searchValue);
 });

 await test.step('Validar que la tabla devuelve resultados correspondientes', async () => {
 await bloque3GastosFinancierosPage.assertGeneralSearchResults(searchValue);
 });
 });
});
