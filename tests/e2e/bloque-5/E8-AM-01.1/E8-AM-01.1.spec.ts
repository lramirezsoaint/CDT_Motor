import { test, expect } from '@fixtures/base.fixture';
import { AM_DATA_UPLOAD_CASES } from '../_shared/am-data-upload-cases';
import { amDataFixtureExists, amDataFixtureMissingReason, runAmDataUpload } from '../_shared/am-data-upload';
const uploadCase = AM_DATA_UPLOAD_CASES['E8-AM-01.1'];
test('@bloque5 @E8-AM-01.1 @am @upload_incompleto @gestor-asiento @critical rechaza datos incompletos en Cuentas Contables', async ({ page }) => {
  test.skip(!amDataFixtureExists(uploadCase), amDataFixtureMissingReason(uploadCase));
  await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => { await expect(page).toHaveURL(/\/distribuciones/i); });
  await test.step('Cargar Cuentas Contables con datos obligatorios incompletos', async () => { await runAmDataUpload(page, uploadCase); });
});
