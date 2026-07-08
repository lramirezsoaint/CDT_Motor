import { test } from '@fixtures/base.fixture';
import { VALID_AM_UPLOAD_CASES } from '../_shared/am-valid-upload-cases';
import { runValidAmUpload, validAmFixtureExists, validAmFixtureMissingReason } from '../_shared/am-valid-upload';

const uploadCase = VALID_AM_UPLOAD_CASES['E4-AM-02.1.1'];
test.use({ storageState: '.auth/gestorAM.json' });

test('@bloque5 @E4-AM-02.1.1 @am @upload_valido @gestor-asiento @regression reemplaza archivo Exactus sin Procesar', async ({
  page,
}) => {
  test.skip(Boolean(uploadCase.catalogIssue), uploadCase.catalogIssue);
  test.skip(!validAmFixtureExists(uploadCase), validAmFixtureMissingReason(uploadCase));
  await test.step('Validar Subir un nuevo archivo y procesar Exactus sin Procesar', async () => {
    await runValidAmUpload(page, uploadCase);
  });
});
