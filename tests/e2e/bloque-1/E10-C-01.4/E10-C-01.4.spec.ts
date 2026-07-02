import { test } from '@fixtures/base.fixture';
import { executeComunesDownload } from '../_shared/comunes-download';

test.describe('@bloque1 @E10-C-01.4 ', () => {
 test('@bloque1 @E10-C-01.4 @download_catalogo debe descargar correctamente el archivo de Subcanales', async ({ page }) => {
 await executeComunesDownload(page, {
 caseId: 'E10-C-01.4',
 menu: 'Subcanales',
 route: 'comunes/subcanales',
 expectedKeyword: /subcanal|canal/i,
 });
 });
});
