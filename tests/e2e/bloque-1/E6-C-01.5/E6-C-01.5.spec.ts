import { test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E6-C-01.5.json';
import { executeNegativeUpload } from '../_shared/comunes-upload-negative';

test.describe('@bloque1 @E6-C-01.5 ', () => {
 test('@bloque1 @E6-C-01.5 @upload_invalido debe rechazar archivo de Maestro UoA con estructura valida y sin datos', async ({
 page,
 }) => {
 await executeNegativeUpload(page, {
 caseId: 'E6-C-01.5',
 menu: 'Maestro UoA',
 route: 'comunes/maestro-uoa',
 modalPattern: /cargar maestro uo?a/i,
 fixtureDir: 'fixtures/files/bloque-1/E6-C-01.5',
 relativePath: scenarioData.archivo,
 uploadName: scenarioData.uploadName,
 expectedMessage: /no contiene informacion|no contiene informaci[oó]n|verifique el contenido/i,
 entityName: 'Maestro UoA',
 shouldProcess: true,
 });
 });
});
