import { test } from '@fixtures/base.fixture';
import { executePositiveDelete } from '../_shared/comunes-delete';

test.describe('@bloque1 @E37-C-01.6 ', () => {
 test('@bloque1 @E37-C-01.6 @eliminar debe eliminar un registro de Configuracion de Parches y retirarlo de tabla', async ({ page }) => {
 await executePositiveDelete(page, {
 menu: 'Configuración de Parches',
 route: 'comunes/configuracion-parches',
 });
 });
});
