import { test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E5-C-02.2.json';
import { executeNegativeUpload } from '../_shared/comunes-upload-negative';

test.describe('@bloque1 @E5-C-02.2 ', () => {
 test('@bloque1 @E5-C-02.2 @upload_invalido debe rechazar en Grupo Producto un archivo de otra funcionalidad', async ({
 page,
 }) => {
 await executeNegativeUpload(page, {
 caseId: 'E5-C-02.2',
 menu: 'Grupo Producto',
 route: 'comunes/grupo-producto',
 modalPattern: /cargar (grupo producto|productos)/i,
 fixtureDir: 'fixtures/files/bloque-1/E5-C-02.2',
 relativePath: scenarioData.archivo,
 expectedMessage: /archivo.*no coincide|no coincide.*permitidos|permitidos/i,
 entityName: 'Grupo Producto',
 confirmReplaceWarning: true,
 });
 });
});
