import { test } from '@fixtures/base.fixture';
import { executeComunesDownloadIntegrity } from '../_shared/comunes-download-integrity';

test.describe('@bloque1 @E11-C-01.3 ', () => {
 test('@bloque1 @E11-C-01.3 @download_catalogo debe conservar estructura y datos en el archivo descargado de Canales', async ({ page }) => {
 await executeComunesDownloadIntegrity(page, {
 caseId: 'E11-C-01.3',
 menu: 'Canales',
 route: 'comunes/canales',
 expectedKeyword: /canal/i,
 });
 });
});
