import { test } from '@fixtures/base.fixture';
import { executeComunesDownloadIntegrity } from '../_shared/comunes-download-integrity';

test.describe('@bloque1 @E11-C-01.7 ', () => {
 test('@bloque1 @E11-C-01.7 @download_catalogo debe conservar estructura y datos en el archivo descargado de Configuración de Parches', async ({ page }) => {
 await executeComunesDownloadIntegrity(page, {
 caseId: 'E11-C-01.7',
 menu: 'Configuración de Parches',
 route: 'comunes/configuracion-parches',
 expectedKeyword: /parche|configuracion/i,
 });
 });
});
