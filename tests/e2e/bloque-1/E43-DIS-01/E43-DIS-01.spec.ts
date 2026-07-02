import { expect, test } from '@fixtures/base.fixture';

const deleteTargetName = process.env.E2E_DISTRIBUCION_DELETE_TARGET?.trim();

test.describe('@bloque1 @E43-DIS-01 ', () => {
 test('@bloque1 @E43-DIS-01 @eliminar debe exigir confirmaciones antes de eliminar una distribucion creada', async ({
 distribucionPage,
 page,
 }) => {
 if (!deleteTargetName) {
 test.skip(
 true,
 'E43-DIS-01 es destructivo: define E2E_DISTRIBUCION_DELETE_TARGET con una distribucion QA eliminable para ejecutarlo.',
 );
 return;
 }

 await test.step('Abrir la accion eliminar de una distribucion QA autorizada', async () => {
 await distribucionPage.openDeleteConfirmationForTarget(deleteTargetName);
 });

 await test.step('Validar que el sistema solicita confirmacion explicita', async () => {
 const dialog = page.locator('[role="dialog"]').filter({ hasText: /eliminar|no se puede deshacer|desea continuar/i }).first();
 await expect(dialog, 'Debe mostrarse la advertencia de eliminacion antes de borrar.').toBeVisible();
 await expect(dialog, 'La advertencia debe mencionar la distribucion objetivo.').toContainText(deleteTargetName);
 });
 });
});
