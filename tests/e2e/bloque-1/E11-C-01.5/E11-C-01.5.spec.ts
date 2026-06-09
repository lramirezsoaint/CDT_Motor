import { test } from '@fixtures/base.fixture';
import { executeComunesDownloadIntegrity } from '../_shared/comunes-download-integrity';

test.describe('@comunes @critical @E11-C-01.5', () => {
  test('@critical @comunes @E11-C-01.5 debe conservar estructura y datos en el archivo descargado de Maestro UoA', async ({ page }) => {
    await executeComunesDownloadIntegrity(page, {
      caseId: 'E11-C-01.5',
      menu: 'Maestro UoA',
      route: 'comunes/maestro-uoa',
      expectedKeyword: /uoa|maestro/i,
    });
  });
});
