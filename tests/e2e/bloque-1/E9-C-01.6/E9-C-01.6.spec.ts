import { test } from '@fixtures/base.fixture';
import { executePcfAndValidateVisibleTable } from '../_shared/comunes-pcf';

test.describe('@bloque1 @E9-C-01.6 ', () => {
 test('@bloque1 @E9-C-01.6 @upload_valido debe traer PCF y mostrar la tabla de Unidades de Cuenta - BBA/VFA', async ({ page }) => {
 test.setTimeout(240_000);
 await executePcfAndValidateVisibleTable(page);
 });
});
