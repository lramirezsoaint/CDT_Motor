import { test } from '@fixtures/base.fixture';
import { executeComunesDownload } from '../_shared/comunes-download';

test.describe('@comunes @critical @E10-C-01.4', () => {
  test('@critical @comunes @E10-C-01.4 debe descargar correctamente el archivo de Subcanales', async ({ page }) => {
    await executeComunesDownload(page, {
      caseId: 'E10-C-01.4',
      menu: 'Subcanales',
      route: 'comunes/subcanales',
      expectedKeyword: /subcanal|canal/i,
    });
  });
});
