import { test, expect } from '@fixtures/base.fixture';
import { REJECTED_AM_UPLOAD_CASES } from '../_shared/am-rejected-upload-cases';
import { rejectedAmFixtureExists, rejectedAmFixtureMissingReason, runRejectedAmUpload } from '../_shared/am-rejected-upload';

const uploadCase = REJECTED_AM_UPLOAD_CASES['E5-AM-01.3'];
test.use({ storageState: '.auth/gestorAM.json' });

test('@bloque5 @E5-AM-01.3 @am @upload_invalido @gestor-asiento @critical rechaza cabeceras incorrectas en Centros', async ({ page }) => {
  test.skip(!rejectedAmFixtureExists(uploadCase), rejectedAmFixtureMissingReason(uploadCase));
  await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => {
    await expect(page).toHaveURL(/\/distribuciones/i);
  });
  await test.step('Cargar archivo diferente en Parametrizacion > Centros', async () => {
    await runRejectedAmUpload(page, uploadCase);
  });
});
