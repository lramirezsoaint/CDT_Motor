import { test } from '@fixtures/base.fixture';
import { executePositiveDelete } from '../_shared/comunes-delete';

test.describe('@bloque1 @E37-C-01.5 ', () => {
 test('@bloque1 @E37-C-01.5 @eliminar debe eliminar un registro de Maestro UoA y retirarlo de tabla', async ({ page }) => {
 await executePositiveDelete(page, {
 menu: 'Maestro UoA',
 route: 'comunes/maestro-uoa',
 });
 });
});
