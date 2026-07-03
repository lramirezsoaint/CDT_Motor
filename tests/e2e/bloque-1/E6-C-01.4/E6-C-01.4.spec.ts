import { test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E6-C-01.4.json';
import { executeNegativeUpload } from '../_shared/comunes-upload-negative';

test.describe('@bloque1 @E6-C-01.4 ', () => {
 test('@bloque1 @E6-C-01.4 @upload_invalido debe rechazar archivo de Subcanales con estructura valida y sin datos', async ({
 page,
 }) => {
 await executeNegativeUpload(page, {
 caseId: 'E6-C-01.4',
 menu: 'Subcanales',
 route: 'comunes/subcanales',
 modalPattern: /cargar subcanales/i,
 fixtureDir: 'fixtures/files/bloque-1/E6-C-01.4',
 relativePath: scenarioData.archivo,
 uploadName: scenarioData.uploadName,
 expectedMessage: /no contiene informacion|no contiene informaci[oó]n|verifique el contenido/i,
 entityName: 'Subcanales',
 shouldProcess: true,
 });
 });
});
