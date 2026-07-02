import { test } from '@fixtures/base.fixture';
import { executeComunesDownload } from '../_shared/comunes-download';

test.describe('@bloque1 @E10-C-01.1 ', () => {
 test('@bloque1 @E10-C-01.1 @download_catalogo debe descargar correctamente el archivo de Líneas', async ({ page }) => {
 await executeComunesDownload(page, {
 caseId: 'E10-C-01.1',
 menu: 'Líneas',
 route: 'comunes/lineas',
 expectedKeyword: /linea/i,
 });
 });
});
