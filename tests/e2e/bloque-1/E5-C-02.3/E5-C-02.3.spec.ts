import { test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E5-C-02.3.json';
import { executeNegativeUpload } from '../_shared/comunes-upload-negative';

test.describe('@comunes @critical @E5-C-02.3', () => {
  test('@critical @comunes @E5-C-02.3 debe rechazar en Canales un archivo de otra funcionalidad', async ({
    page,
  }) => {
    await executeNegativeUpload(page, {
      caseId: 'E5-C-02.3',
      menu: 'Canales',
      route: 'comunes/canales',
      modalPattern: /cargar canales/i,
      fixtureDir: 'fixtures/files/bloque-1/E5-C-02.3',
      relativePath: scenarioData.archivo,
      expectedMessage: /archivo.*no coincide|no coincide.*permitidos|permitidos/i,
      entityName: 'Canales',
      confirmReplaceWarning: true,
    });
  });
});
