import { test } from '@fixtures/base.fixture';
import { executeComunesDownload } from '../_shared/comunes-download';

test.describe('@comunes @critical @E10-C-01.6', () => {
  test('@critical @comunes @E10-C-01.6 debe descargar correctamente el archivo de Unidades de Cuenta - BBA/VFA', async ({ page }) => {
    await executeComunesDownload(page, {
      caseId: 'E10-C-01.6',
      menu: 'Unidades de Cuenta - BBA/VFA',
      route: 'comunes/unidades-cuenta-bba-vfa',
      expectedKeyword: /cuenta|bba|vfa/i,
    });
  });
});
