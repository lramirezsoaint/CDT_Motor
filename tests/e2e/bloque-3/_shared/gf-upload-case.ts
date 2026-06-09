import { test } from './bloque3.fixture';
import {
  attachGfUploadFile,
  confirmGfUpload,
  confirmGfUploadWithError,
  confirmGfUploadOverwrite,
  GfUploadCase,
  GfErrorUploadCase,
  GfOverwriteUploadCase,
  openGfUploadDialog,
} from './gf-upload';
import { crearYSeleccionarDistribucion } from './distribucion-precondicion';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';

export function defineGfUploadCase(uploadCase: GfUploadCase): void {
  test.describe(`@bloque3 @gf @carga @${uploadCase.caseId}`, () => {
    test(`@critical @bloque3 @gf @carga @${uploadCase.caseId} debe cargar archivo ${uploadCase.entityName}`, async ({
      bloque3GastosFinancierosPage,
      page,
    }) => {
      try {
        const loginPage = new LoginPage(page);
        await loginPage.login(
          env.gestorUsername,
          env.gestorPassword
        );
      } catch (error) { }

      test.skip(true, 'Cubierto por carga-completa.spec.ts - flujo secuencial bajo distribucion unica');
    });
  });
}

export function defineGfUploadErrorCase(uploadCase: GfErrorUploadCase): void {
  test.describe(`@bloque3 @gf @carga @${uploadCase.caseId}`, () => {
    test(`@critical @bloque3 @gf @carga @${uploadCase.caseId} debe rechazar carga de ${uploadCase.entityName} sin antecesor`, async ({
      bloque3GastosFinancierosPage,
      page,
    }) => {
            test.skip(true, 'No alineado con flujo de negocio secuencial - omitido segun reunion 2026-05-21');
    });
  });
}

export function defineGfUploadOverwriteCase(uploadCase: GfOverwriteUploadCase): void {
  test.describe(`@bloque3 @gf @carga @${uploadCase.caseId}`, () => {
    test(`@critical @bloque3 @gf @carga @${uploadCase.caseId} debe sobreescribir ${uploadCase.entityName} sin duplicar`, async ({
      bloque3GastosFinancierosPage,
      page,
    }) => {
      test.skip(true, 'No alineado con flujo de negocio secuencial - omitido segun reunion 2026-05-21');
    });
  });
}
