import { test } from '@fixtures/base.fixture';
import { executeComunesDownloadIntegrity } from '../_shared/comunes-download-integrity';

test.describe('@bloque1 @E11-C-01.4 ', () => {
 test('@bloque1 @E11-C-01.4 @download_catalogo debe conservar estructura y datos en el archivo descargado de Subcanales', async ({ page }) => {
 await executeComunesDownloadIntegrity(page, {
 caseId: 'E11-C-01.4',
 menu: 'Subcanales',
 route: 'comunes/subcanales',
 expectedKeyword: /subcanal|canal/i,
 });
 });
});
