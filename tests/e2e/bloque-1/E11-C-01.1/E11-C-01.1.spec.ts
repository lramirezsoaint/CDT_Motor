import { test } from '@fixtures/base.fixture';
import { executeComunesDownloadIntegrity } from '../_shared/comunes-download-integrity';

test.describe('@bloque1 @E11-C-01.1 ', () => {
 test('@bloque1 @E11-C-01.1 @download_catalogo debe conservar estructura y datos en el archivo descargado de Líneas', async ({ page }) => {
 await executeComunesDownloadIntegrity(page, {
 caseId: 'E11-C-01.1',
 menu: 'Líneas',
 route: 'comunes/lineas',
 expectedKeyword: /linea/i,
 });
 });
});
