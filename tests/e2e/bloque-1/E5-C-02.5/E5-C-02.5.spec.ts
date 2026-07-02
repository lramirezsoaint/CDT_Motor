import { test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E5-C-02.5.json';
import { executeNegativeUpload } from '../_shared/comunes-upload-negative';

test.describe('@bloque1 @E5-C-02.5 ', () => {
 test('@bloque1 @E5-C-02.5 @upload_invalido debe rechazar en Maestro UoA un archivo de otra funcionalidad', async ({
 page,
 }) => {
 await executeNegativeUpload(page, {
 caseId: 'E5-C-02.5',
 menu: 'Maestro UoA',
 route: 'comunes/maestro-uoa',
 modalPattern: /cargar maestro uo?a/i,
 fixtureDir: 'fixtures/files/bloque-1/E5-C-02.5',
 relativePath: scenarioData.archivo,
 expectedMessage: /archivo.*no coincide|no coincide.*permitidos|permitidos/i,
 entityName: 'Maestro UoA',
 confirmReplaceWarning: true,
 });
 });
});
