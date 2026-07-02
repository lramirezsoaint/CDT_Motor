import { test } from '@fixtures/base.fixture';
import { executeComunesDownloadIntegrity } from '../_shared/comunes-download-integrity';

test.describe('@bloque1 @E11-C-01.6 ', () => {
 test('@bloque1 @E11-C-01.6 @download_catalogo debe conservar estructura y datos en el archivo descargado de Unidades de Cuenta - BBA/VFA', async ({ page }) => {
 await executeComunesDownloadIntegrity(page, {
 caseId: 'E11-C-01.6',
 menu: 'Unidades de Cuenta - BBA/VFA',
 route: 'comunes/unidades-cuenta-bba-vfa',
 expectedKeyword: /cuenta|bba|vfa/i,
 });
 });
});
