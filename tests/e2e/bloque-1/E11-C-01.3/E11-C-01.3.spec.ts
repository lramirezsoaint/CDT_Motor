import { test } from '@fixtures/base.fixture';
import { executeComunesDownloadIntegrity } from '../_shared/comunes-download-integrity';

test.describe('@comunes @critical @E11-C-01.3', () => {
  test('@critical @comunes @E11-C-01.3 debe conservar estructura y datos en el archivo descargado de Canales', async ({ page }) => {
    await executeComunesDownloadIntegrity(page, {
      caseId: 'E11-C-01.3',
      menu: 'Canales',
      route: 'comunes/canales',
      expectedKeyword: /canal/i,
    });
  });
});
