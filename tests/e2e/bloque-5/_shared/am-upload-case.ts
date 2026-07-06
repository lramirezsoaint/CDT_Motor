import { test } from './bloque5.fixture';
import {
  ensureAmSession,
  AmErrorUploadCase,
  AmOverwriteUploadCase,
  AmUploadCase,
  runAmUploadFlow,
} from './am-upload';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';

function tagsFor(caseId: string, flowTag: FlowTag) {
  return buildTags({ bloque: '@bloque5', caseId, flowTag });
}

export function defineAmUploadCase(uploadCase: AmUploadCase): void {
  test.use({ storageState: '.auth/gestorAM.json' });

  test.describe(`@bloque5 @${uploadCase.caseId}`, () => {
    test(`${tagsFor(uploadCase.caseId, uploadCase.flowTag ?? '@upload_valido')} debe cargar archivo ${uploadCase.entityName}`, async ({ page }) => {
      test.setTimeout(360_000);

      await test.step('Abrir sesion de Gestor AM', async () => {
        await ensureAmSession(page);
      });

      await test.step(`Cargar ${uploadCase.entityName}`, async () => {
        await runAmUploadFlow(page, uploadCase, {
          expectedResult: 'success',
        });
      });
    });
  });
}

export function defineAmUploadErrorCase(uploadCase: AmErrorUploadCase): void {
  test.use({ storageState: '.auth/gestorAM.json' });

  test.describe(`@bloque5 @${uploadCase.caseId}`, () => {
    test(`${tagsFor(uploadCase.caseId, uploadCase.flowTag ?? '@upload_invalido')} debe rechazar carga de ${uploadCase.entityName}`, async ({ page }) => {
      test.setTimeout(360_000);

      await test.step('Abrir sesion de Gestor AM', async () => {
        await ensureAmSession(page);
      });

      await test.step(`Validar rechazo de ${uploadCase.entityName}`, async () => {
        await runAmUploadFlow(page, uploadCase, {
          expectedResult: uploadCase.expectedResult ?? 'validationError',
          errorMessage: uploadCase.errorMessage,
        });
      });
    });
  });
}

export function defineAmUploadOverwriteCase(uploadCase: AmOverwriteUploadCase): void {
  test.use({ storageState: '.auth/gestorAM.json' });

  test.describe(`@bloque5 @${uploadCase.caseId}`, () => {
    test(`${tagsFor(uploadCase.caseId, uploadCase.flowTag ?? '@upload_valido')} debe sobreescribir ${uploadCase.entityName} sin duplicar`, async ({ page }) => {
      test.setTimeout(360_000);

      await test.step('Abrir sesion de Gestor AM', async () => {
        await ensureAmSession(page);
      });

      await test.step(`Sobreescribir ${uploadCase.entityName}`, async () => {
        await runAmUploadFlow(page, uploadCase, {
          expectedResult: 'success',
        });
      });
    });
  });
}
