import { test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E6-C-01.3.json';
import { executeNegativeUpload } from '../_shared/comunes-upload-negative';

test.describe('@bloque1 @E6-C-01.3 ', () => {
 test('@bloque1 @E6-C-01.3 @upload_invalido debe rechazar archivo de Canales con estructura valida y sin datos', async ({
 page,
 }) => {
 await executeNegativeUpload(page, {
 caseId: 'E6-C-01.3',
 menu: 'Canales',
 route: 'comunes/canales',
 modalPattern: /cargar canales/i,
 fixtureDir: 'fixtures/files/bloque-1/E6-C-01.3',
 relativePath: scenarioData.archivo,
 uploadName: scenarioData.uploadName,
 expectedMessage: /no contiene informacion|no contiene informaci[oó]n|verifique el contenido/i,
 entityName: 'Canales',
 shouldProcess: true,
 });
 });
});
