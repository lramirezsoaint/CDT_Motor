import { test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E5-C-02.6.json';
import { executeNegativeUpload } from '../_shared/comunes-upload-negative';

test.describe('@bloque1 @E5-C-02.6 ', () => {
 test('@bloque1 @E5-C-02.6 @upload_invalido debe rechazar en Configuracion de Parches un archivo de otra funcionalidad', async ({
 page,
 }) => {
 await executeNegativeUpload(page, {
 caseId: 'E5-C-02.6',
 menu: 'Configuración de Parches',
 route: 'comunes/configuracion-parches',
 modalPattern: /cargar (configuraci[oó]n de parches|parches)/i,
 fixtureDir: 'fixtures/files/bloque-1/E5-C-02.6',
 relativePath: scenarioData.archivo,
 expectedMessage: /archivo.*no coincide|no coincide.*permitidos|permitidos/i,
 entityName: 'Configuracion de Parches',
 confirmReplaceWarning: true,
 });
 });
});
