import { test } from './bloque3.fixture';
import {
 ensureGfSession,
 GfErrorUploadCase,
 GfOverwriteUploadCase,
 GfUploadCase,
 runGfUploadFlow,
} from './gf-upload';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';

function tagsFor(caseId: string, flowTag: FlowTag) {
 return buildTags({ bloque: '@bloque3', caseId, flowTag });
}

export function defineGfUploadCase(uploadCase: GfUploadCase): void {
 test.describe(`@bloque3 @${uploadCase.caseId}`, () => {
 test(`${tagsFor(uploadCase.caseId, uploadCase.flowTag ?? '@upload_valido')} debe cargar archivo ${uploadCase.entityName}`, async ({ page }) => {
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
 test.describe(`@bloque3 @${uploadCase.caseId}`, () => {
 test(`${tagsFor(uploadCase.caseId, uploadCase.flowTag ?? '@upload_invalido')} debe rechazar carga de ${uploadCase.entityName}`, async ({ page }) => {
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
 test.describe(`@bloque3 @${uploadCase.caseId}`, () => {
 test(`${tagsFor(uploadCase.caseId, uploadCase.flowTag ?? '@upload_valido')} debe sobreescribir ${uploadCase.entityName} sin duplicar`, async ({ page }) => {
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
