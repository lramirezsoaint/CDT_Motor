import { test, expect } from '@fixtures/base.fixture';
import { REJECTED_AM_UPLOAD_CASES } from '../_shared/am-rejected-upload-cases';
import { rejectedAmFixtureExists, rejectedAmFixtureMissingReason, runRejectedAmUpload } from '../_shared/am-rejected-upload';
import { ensureAmContext } from '../_shared/am-context';

const uploadCase = REJECTED_AM_UPLOAD_CASES['E5-AM-01.3'];
test('@bloque5 @E5-AM-01.3 @am @upload_invalido @gestor-asiento @critical rechaza cabeceras incorrectas en Centros', async ({ page }) => {
  test.skip(!rejectedAmFixtureExists(uploadCase), rejectedAmFixtureMissingReason(uploadCase));
  await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => {
    await ensureAmContext(page, 'upload');
    await expect(page).toHaveURL(/\/distribuciones/i);
  });
  await test.step('Cargar archivo diferente en Parametrizacion > Centros', async () => {
    await runRejectedAmUpload(page, uploadCase);
  });
});
