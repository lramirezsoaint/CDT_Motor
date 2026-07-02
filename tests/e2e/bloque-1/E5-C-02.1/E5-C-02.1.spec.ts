import { test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E5-C-02.1.json';
import { executeNegativeUpload } from '../_shared/comunes-upload-negative';

test.describe('@bloque1 @E5-C-02.1 ', () => {
 test('@bloque1 @E5-C-02.1 @upload_invalido debe rechazar en Lineas un archivo de otra funcionalidad', async ({
 page,
 }) => {
 await executeNegativeUpload(page, {
 caseId: 'E5-C-02.1',
 menu: 'Líneas',
 route: 'comunes/lineas',
 modalPattern: /cargar l[ií]neas/i,
 fixtureDir: 'fixtures/files/bloque-1/E5-C-02.1',
 relativePath: scenarioData.archivo,
 expectedMessage: /archivo.*no coincide|no coincide.*permitidos|permitidos/i,
 entityName: 'Lineas',
 confirmReplaceWarning: true,
 });
 });
});
