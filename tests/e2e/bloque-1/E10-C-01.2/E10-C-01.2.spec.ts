import { test } from '@fixtures/base.fixture';
import { executeComunesDownload } from '../_shared/comunes-download';

test.describe('@comunes @critical @E10-C-01.2', () => {
  test('@critical @comunes @E10-C-01.2 debe descargar correctamente el archivo de Grupo Producto', async ({ page }) => {
    await executeComunesDownload(page, {
      caseId: 'E10-C-01.2',
      menu: 'Grupo Producto',
      route: 'comunes/grupo-producto',
      expectedKeyword: /grupo|producto/i,
    });
  });
});
