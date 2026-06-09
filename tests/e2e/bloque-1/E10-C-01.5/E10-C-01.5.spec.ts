import { test } from '@fixtures/base.fixture';
import { executeComunesDownload } from '../_shared/comunes-download';

test.describe('@comunes @critical @E10-C-01.5', () => {
  test('@critical @comunes @E10-C-01.5 debe descargar correctamente el archivo de Maestro UoA', async ({ page }) => {
    await executeComunesDownload(page, {
      caseId: 'E10-C-01.5',
      menu: 'Maestro UoA',
      route: 'comunes/maestro-uoa',
      expectedKeyword: /uoa|maestro/i,
    });
  });
});
