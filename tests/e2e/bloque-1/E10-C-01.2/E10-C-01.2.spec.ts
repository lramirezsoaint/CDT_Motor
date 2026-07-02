import { test } from '@fixtures/base.fixture';
import { executeComunesDownload } from '../_shared/comunes-download';

test.describe('@bloque1 @E10-C-01.2 ', () => {
 test('@bloque1 @E10-C-01.2 @download_catalogo debe descargar correctamente el archivo de Grupo Producto', async ({ page }) => {
 await executeComunesDownload(page, {
 caseId: 'E10-C-01.2',
 menu: 'Grupo Producto',
 route: 'comunes/grupo-producto',
 expectedKeyword: /grupo|producto/i,
 });
 });
});
