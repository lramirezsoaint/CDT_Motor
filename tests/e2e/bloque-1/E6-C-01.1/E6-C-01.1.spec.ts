import { test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E6-C-01.1.json';
import { executeNegativeUpload } from '../_shared/comunes-upload-negative';

test.describe('@bloque1 @E6-C-01.1 ', () => {
 test('@bloque1 @E6-C-01.1 @upload_invalido debe rechazar archivo de Lineas con estructura valida y sin datos', async ({
 page,
 }) => {
 await executeNegativeUpload(page, {
 caseId: 'E6-C-01.1',
 menu: 'Líneas',
 route: 'comunes/lineas',
 modalPattern: /cargar l[ií]neas/i,
 fixtureDir: 'fixtures/files/bloque-1/E6-C-01.1',
 relativePath: scenarioData.archivo,
 uploadName: scenarioData.uploadName,
 expectedMessage: /no contiene informacion|no contiene informaci[oó]n|verifique el contenido/i,
 entityName: 'Lineas',
 shouldProcess: true,
 });
 });
});
