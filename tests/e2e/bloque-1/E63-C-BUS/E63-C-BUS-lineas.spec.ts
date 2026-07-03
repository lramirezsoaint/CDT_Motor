import { test } from '@fixtures/base.fixture';
import testData from '@data/testData.json';

test.describe('@bloque1 @E63-C-BUS ', () => {
 test('@bloque1 @E63-C-BUS @busqueda debe buscar registros en Comunes > Lineas', async ({ comunesPage }) => {
 await test.step('Abrir m\u00f3dulo L\u00edneas', async () => {
 await comunesPage.openLineas();
 });

 await test.step('Buscar texto objetivo', async () => {
 await comunesPage.buscar(testData.comunes.searchTerm);
 });

 await test.step('Validar resultados', async () => {
 await comunesPage.expectResultsContain(testData.comunes.searchTerm);
 });
 });
});
