import { test } from './bloque3.fixture';
import {
 ensureGfSession,
 GfErrorUploadCase,
 GfOverwriteUploadCase,
 GfUploadCase,
 runGfUploadFlow,
} from './gf-upload';

function tagsFor(caseId: string, flowTag: '@upload_valido' | '@upload_invalido') {
 return `@bloque3 @${caseId} ${flowTag}`;
}

export function defineGfUploadCase(uploadCase: GfUploadCase): void {
 test.use({ storageState: '.auth/gestorGF.json' });

 test.describe(`@bloque3 @${uploadCase.caseId}`, () => {
 test(`${tagsFor(uploadCase.caseId, '@upload_valido')} debe cargar archivo ${uploadCase.entityName}`, async ({ page }) => {
 test.setTimeout(360_000);

 await test.step('Abrir sesion de Gestor GF', async () => {
 await ensureGfSession(page);
 });

 await test.step(`Cargar ${uploadCase.entityName}`, async () => {
 await runGfUploadFlow(page, uploadCase, {
 expectedResult: 'success',
 });
 });
 });
 });
}

export function defineGfUploadErrorCase(uploadCase: GfErrorUploadCase): void {
 test.use({ storageState: '.auth/gestorGF.json' });

 test.describe(`@bloque3 @${uploadCase.caseId}`, () => {
 test(`${tagsFor(uploadCase.caseId, '@upload_invalido')} debe rechazar carga de ${uploadCase.entityName}`, async ({ page }) => {
 test.setTimeout(360_000);

 await test.step('Abrir sesion de Gestor GF', async () => {
 await ensureGfSession(page);
 });

 await test.step(`Validar rechazo de ${uploadCase.entityName}`, async () => {
 await runGfUploadFlow(page, uploadCase, {
 expectedResult: uploadCase.expectedResult ?? 'validationError',
 errorMessage: uploadCase.errorMessage,
 });
 });
 });
 });
}

export function defineGfUploadOverwriteCase(uploadCase: GfOverwriteUploadCase): void {
 test.use({ storageState: '.auth/gestorGF.json' });

 test.describe(`@bloque3 @${uploadCase.caseId}`, () => {
 test(`${tagsFor(uploadCase.caseId, '@upload_valido')} debe sobreescribir ${uploadCase.entityName} sin duplicar`, async ({ page }) => {
 test.setTimeout(360_000);

 await test.step('Abrir sesion de Gestor GF', async () => {
 await ensureGfSession(page);
 });

 await test.step(`Sobreescribir ${uploadCase.entityName}`, async () => {
 await runGfUploadFlow(page, uploadCase, {
 expectedResult: 'success',
 });
 });
 });
 });
}
