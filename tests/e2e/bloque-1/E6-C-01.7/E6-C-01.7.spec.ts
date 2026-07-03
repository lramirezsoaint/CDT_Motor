import { test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E6-C-01.7.json';
import { executeNegativeUpload } from '../_shared/comunes-upload-negative';

test.describe('@bloque1 @E6-C-01.7 ', () => {
 test('@bloque1 @E6-C-01.7 @upload_invalido debe rechazar archivo de Configuracion de Parches con estructura valida y sin datos', async ({
 page,
 }) => {
 await executeNegativeUpload(page, {
 caseId: 'E6-C-01.7',
 menu: 'Configuracion de Parches',
 route: 'comunes/configuracion-parches',
 modalPattern: /cargar (configuraci[oó]n de )?parches/i,
 fixtureDir: 'fixtures/files/bloque-1/E6-C-01.7',
 relativePath: scenarioData.archivo,
 uploadName: scenarioData.uploadName,
 expectedMessage: /no contiene informacion|no contiene informaci[oó]n|verifique el contenido/i,
 entityName: 'Configuracion de Parches',
 shouldProcess: true,
 });
 });
});
