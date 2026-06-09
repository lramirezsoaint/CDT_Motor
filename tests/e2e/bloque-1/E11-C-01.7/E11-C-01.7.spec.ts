import { test } from '@fixtures/base.fixture';
import { executeComunesDownloadIntegrity } from '../_shared/comunes-download-integrity';

test.describe('@comunes @critical @E11-C-01.7', () => {
  test('@critical @comunes @E11-C-01.7 debe conservar estructura y datos en el archivo descargado de Configuración de Parches', async ({ page }) => {
    await executeComunesDownloadIntegrity(page, {
      caseId: 'E11-C-01.7',
      menu: 'Configuración de Parches',
      route: 'comunes/configuracion-parches',
      expectedKeyword: /parche|configuracion/i,
    });
  });
});
