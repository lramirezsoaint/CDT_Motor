import { test } from '@fixtures/base.fixture';
import { executeComunesDownloadIntegrity } from '../_shared/comunes-download-integrity';

test.describe('@bloque1 @E11-C-01.2 ', () => {
 test('@bloque1 @E11-C-01.2 @download_catalogo debe conservar estructura y datos en el archivo descargado de Grupo Producto', async ({ page }) => {
 await executeComunesDownloadIntegrity(page, {
 caseId: 'E11-C-01.2',
 menu: 'Grupo Producto',
 route: 'comunes/grupo-producto',
 expectedKeyword: /grupo|producto/i,
 });
 });
});
