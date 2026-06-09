import { test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E6-C-01.2.json';
import { executeNegativeUpload } from '../_shared/comunes-upload-negative';

test.describe('@comunes @critical @E6-C-01.2', () => {
  test('@critical @comunes @E6-C-01.2 debe rechazar archivo de Grupo Producto con estructura valida y sin datos', async ({
    page,
  }) => {
    await executeNegativeUpload(page, {
      caseId: 'E6-C-01.2',
      menu: 'Grupo Producto',
      route: 'comunes/grupo-producto',
      modalPattern: /cargar (grupo producto|productos)/i,
      fixtureDir: 'fixtures/files/bloque-1/E6-C-01.2',
      relativePath: scenarioData.archivo,
      uploadName: scenarioData.uploadName,
      expectedMessage: /no contiene informacion|no contiene informaci[oó]n|verifique el contenido/i,
      entityName: 'Grupo Producto',
      shouldProcess: true,
    });
  });
});
