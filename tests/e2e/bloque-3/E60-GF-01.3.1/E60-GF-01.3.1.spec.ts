import { test } from '../_shared/bloque3.fixture';

test.describe('@bloque3 @E60-GF-01.3.1 ', () => {
 test('@bloque3 @E60-GF-01.3.1 @columnas debe seleccionar columnas en Especiales NIIF', async ({
 bloque3GastosFinancierosPage,
 page,
 }) => {
 let selectedColumn = '';

 await test.step('Acceder a Asignaciones > Especiales NIIF', async () => {
 await bloque3GastosFinancierosPage.openSidebarView('Asignaciones', 'Especiales NIIF');
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