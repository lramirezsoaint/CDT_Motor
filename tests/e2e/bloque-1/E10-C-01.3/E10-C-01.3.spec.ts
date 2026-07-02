import { test } from '@fixtures/base.fixture';
import { executeComunesDownload } from '../_shared/comunes-download';

test.describe('@bloque1 @E10-C-01.3 ', () => {
 test('@bloque1 @E10-C-01.3 @download_catalogo debe descargar correctamente el archivo de Canales', async ({ page }) => {
 await executeComunesDownload(page, {
 caseId: 'E10-C-01.3',
 menu: 'Canales',
 route: 'comunes/canales',
 expectedKeyword: /canal/i,
 });
 });
});
