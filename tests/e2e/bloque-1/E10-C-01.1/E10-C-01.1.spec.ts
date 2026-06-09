import { test } from '@fixtures/base.fixture';
import { executeComunesDownload } from '../_shared/comunes-download';

test.describe('@comunes @critical @E10-C-01.1', () => {
  test('@critical @comunes @E10-C-01.1 debe descargar correctamente el archivo de Líneas', async ({ page }) => {
    await executeComunesDownload(page, {
      caseId: 'E10-C-01.1',
      menu: 'Líneas',
      route: 'comunes/lineas',
      expectedKeyword: /linea/i,
    });
  });
});
