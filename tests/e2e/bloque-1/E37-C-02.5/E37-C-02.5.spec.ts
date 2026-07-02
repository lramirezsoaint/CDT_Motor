import { test } from '@fixtures/base.fixture';
import { executeNegativeDeleteBlocked } from '../_shared/comunes-status-action';

test.describe('@bloque1 @E37-C-02.5 ', () => {
 test('@bloque1 @E37-C-02.5 @procesos debe bloquear la eliminación de Maestro UoA cuando existe un proceso en ejecución', async ({
 page,
 }) => {
 await executeNegativeDeleteBlocked(page, {
 menu: 'Maestro UoA',
 route: 'comunes/maestro-uoa',
 });
 });
});
