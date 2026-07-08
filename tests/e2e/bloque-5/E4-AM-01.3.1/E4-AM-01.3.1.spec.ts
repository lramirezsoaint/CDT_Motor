import { test, expect } from '@fixtures/base.fixture';
import { VALID_AM_UPLOAD_CASES } from '../_shared/am-valid-upload-cases';
import { runValidAmUpload, validAmFixtureExists, validAmFixtureMissingReason } from '../_shared/am-valid-upload';

const uploadCase = VALID_AM_UPLOAD_CASES['E4-AM-01.3.1'];
test.use({ storageState: '.auth/gestorAM.json' });

test('@bloque5 @E4-AM-01.3.1 @am @upload_valido @gestor-asiento @regression reemplaza archivo Centros', async ({ page }) => {
  test.skip(!validAmFixtureExists(uploadCase), validAmFixtureMissingReason(uploadCase));
  await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => {
    await expect(page).toHaveURL(/\/distribuciones/i);
  });
  await test.step('Validar Subir un nuevo archivo y procesar Centros', async () => {
    await runValidAmUpload(page, uploadCase);
  });
});
