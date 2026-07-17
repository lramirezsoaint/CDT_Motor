import { test, expect } from '@fixtures/base.fixture';
import { REJECTED_AM_UPLOAD_CASES } from '../_shared/am-rejected-upload-cases';
import { rejectedAmFixtureExists, rejectedAmFixtureMissingReason, runRejectedAmUpload } from '../_shared/am-rejected-upload';
import { ensureAmContext } from '../_shared/am-context';

const uploadCase = REJECTED_AM_UPLOAD_CASES['E6-AM-02.2'];
test('@bloque5 @E6-AM-02.2 @am @upload_vacio @gestor-asiento @critical rechaza Unidad de Cuenta AM sin datos', async ({ page }) => {
  test.skip(!rejectedAmFixtureExists(uploadCase), rejectedAmFixtureMissingReason(uploadCase));
  await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => {
    await ensureAmContext(page, 'upload');
    await expect(page).toHaveURL(/\/distribuciones/i);
  });
  await test.step('Cargar Unidad de Cuenta AM con estructura y sin datos', async () => {
    await runRejectedAmUpload(page, uploadCase);
  });
});
