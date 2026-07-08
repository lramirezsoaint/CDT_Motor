import { test, expect } from '@fixtures/base.fixture';
import { AM_DATA_UPLOAD_CASES } from '../_shared/am-data-upload-cases';
import { amDataFixtureExists, amDataFixtureMissingReason, runAmDataUpload } from '../_shared/am-data-upload';
const uploadCase = AM_DATA_UPLOAD_CASES['E8-AM-02.2'];
test.use({ storageState: '.auth/gestorAM.json' });
test('@bloque5 @E8-AM-02.2 @am @upload_incompleto @gestor-asiento @critical rechaza datos incompletos en Unidad de Cuenta AM', async ({ page }) => {
  test.skip(!amDataFixtureExists(uploadCase), amDataFixtureMissingReason(uploadCase));
  await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => { await expect(page).toHaveURL(/\/distribuciones/i); });
  await test.step('Cargar Unidad de Cuenta AM con datos obligatorios incompletos', async () => { await runAmDataUpload(page, uploadCase); });
});
