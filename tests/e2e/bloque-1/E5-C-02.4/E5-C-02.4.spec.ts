import { test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E5-C-02.4.json';
import { executeNegativeUpload } from '../_shared/comunes-upload-negative';

test.describe('@comunes @critical @E5-C-02.4', () => {
  test('@critical @comunes @E5-C-02.4 debe rechazar en Subcanales un archivo de otra funcionalidad', async ({
    page,
  }) => {
    await executeNegativeUpload(page, {
      caseId: 'E5-C-02.4',
      menu: 'Subcanales',
      route: 'comunes/subcanales',
      modalPattern: /cargar subcanales/i,
      fixtureDir: 'fixtures/files/bloque-1/E5-C-02.4',
      relativePath: scenarioData.archivo,
      expectedMessage: /archivo.*no coincide|no coincide.*permitidos|permitidos/i,
      entityName: 'Subcanales',
      confirmReplaceWarning: true,
    });
  });
});
