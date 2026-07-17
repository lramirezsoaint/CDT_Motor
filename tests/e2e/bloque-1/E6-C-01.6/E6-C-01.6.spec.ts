import { test } from '@fixtures/base.fixture';
import { executePcfWithoutPeriodData } from '../_shared/comunes-pcf';

test.describe('@bloque1 @E6-C-01.6 ', () => {
 test('@bloque1 @E6-C-01.6 @upload_invalido debe rechazar Traer PCF cuando no existe carga de informacion del periodo', async ({ page }) => {
 await executePcfWithoutPeriodData(page);
 });
});
