import { test, expect } from '@fixtures/base.fixture';
import { AM_DATA_UPLOAD_CASES } from '../_shared/am-data-upload-cases';
import { amDataFixtureExists, amDataFixtureMissingReason, runAmDataUpload } from '../_shared/am-data-upload';
const uploadCase = AM_DATA_UPLOAD_CASES['E9-AM-02.1'];
test.use({ storageState: '.auth/gestorAM.json' });
test('@bloque5 @E9-AM-02.1 @am @tabla @gestor-asiento @regression muestra Exactus cargado', async ({ page }) => {
  test.skip(!amDataFixtureExists(uploadCase), amDataFixtureMissingReason(uploadCase));
  await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => { await expect(page).toHaveURL(/\/distribuciones/i); });
  await test.step('Cargar Exactus y comparar la tabla con el archivo', async () => { await runAmDataUpload(page, uploadCase); });
});
