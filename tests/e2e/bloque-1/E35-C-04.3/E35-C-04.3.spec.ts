import { test } from '@fixtures/base.fixture';
import { requireFixtureOrThrow } from '../_shared/comunes-upload-overwrite';

test.describe('@comunes @critical @E35-C-04.3', () => {
  test('@critical @comunes @E35-C-04.3 debe sobrescribir Canales manuales al cargar el archivo del periodo', async () => {
    requireFixtureOrThrow({
      caseId: 'E35-C-04.3',
      entityName: 'Canales',
      modalPattern: /cargar canales/i,
      fixtureDir: 'fixtures/files/bloque-1/E35-C-04.3',
      relativePath: 'REAL Canales.xlsx',
      expectedSampleTexts: [],
      overwrittenTexts: [],
    });
  });
});
