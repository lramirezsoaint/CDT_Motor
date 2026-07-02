import { test } from '@fixtures/base.fixture';
import { executeComunesDownload } from '../_shared/comunes-download';

test.describe('@bloque1 @E10-C-01.7 ', () => {
 test('@bloque1 @E10-C-01.7 @download_catalogo debe descargar correctamente el archivo de Configuración de Parches', async ({ page }) => {
 await executeComunesDownload(page, {
 caseId: 'E10-C-01.7',
 menu: 'Configuración de Parches',
 route: 'comunes/configuracion-parches',
 expectedKeyword: /parche|configuracion/i,
 });
 });
});
