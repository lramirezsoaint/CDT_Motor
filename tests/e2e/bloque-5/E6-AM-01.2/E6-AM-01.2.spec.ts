import { test, expect } from '@fixtures/base.fixture';
import { REJECTED_AM_UPLOAD_CASES } from '../_shared/am-rejected-upload-cases';
import { rejectedAmFixtureExists, rejectedAmFixtureMissingReason, runRejectedAmUpload } from '../_shared/am-rejected-upload';

const uploadCase = REJECTED_AM_UPLOAD_CASES['E6-AM-01.2'];
test.use({ storageState: '.auth/gestorAM.json' });

test('@bloque5 @E6-AM-01.2 @am @upload_vacio @gestor-asiento @critical rechaza Partidas sin datos', async ({ page }) => {
  test.skip(!rejectedAmFixtureExists(uploadCase), rejectedAmFixtureMissingReason(uploadCase));
  await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => {
    await expect(page).toHaveURL(/\/distribuciones/i);
  });
  await test.step('Cargar Partidas con estructura y sin datos', async () => {
    await runRejectedAmUpload(page, uploadCase);
  });
});
