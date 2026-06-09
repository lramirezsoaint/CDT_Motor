import { test } from '@fixtures/base.fixture';
import { executeComunesDownloadIntegrity } from '../_shared/comunes-download-integrity';

test.describe('@comunes @critical @E11-C-01.1', () => {
  test('@critical @comunes @E11-C-01.1 debe conservar estructura y datos en el archivo descargado de Líneas', async ({ page }) => {
    await executeComunesDownloadIntegrity(page, {
      caseId: 'E11-C-01.1',
      menu: 'Líneas',
      route: 'comunes/lineas',
      expectedKeyword: /linea/i,
    });
  });
});
