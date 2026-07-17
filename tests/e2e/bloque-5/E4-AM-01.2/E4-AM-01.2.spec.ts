import { test, expect } from '@fixtures/base.fixture';
import { VALID_AM_UPLOAD_CASES } from '../_shared/am-valid-upload-cases';
import { runValidAmUpload, validAmFixtureExists, validAmFixtureMissingReason } from '../_shared/am-valid-upload';

const uploadCase = VALID_AM_UPLOAD_CASES['E4-AM-01.2'];
test('@bloque5 @E4-AM-01.2 @am @upload_valido @gestor-asiento @critical carga Partidas', async ({ page }) => {
  test.skip(!validAmFixtureExists(uploadCase), validAmFixtureMissingReason(uploadCase));
  await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => {
    await expect(page).toHaveURL(/\/distribuciones/i);
  });
  await test.step('Cargar archivo REAL Partidas AM', async () => {
    await runValidAmUpload(page, uploadCase);
  });
});
