import { expect, test } from '@fixtures/base.fixture';
import { goToComunesView } from '../_shared/comunes-upload';

test.describe('@bloque1 @E4-C-01.6 ', () => {
 test('@bloque1 @E4-C-01.6 @upload_valido debe traer el archivo de Unidades de Cuenta BBA/VFA y completar el flujo del modal', async ({
 page,
 }) => {
 test.setTimeout(240_000);

 await test.step('QA: ingresar a Distribucion y abrir Comunes > Unidades de Cuenta BBA/VFA', async () => {
 await goToComunesView(page, 'Unidades de Cuenta - BBA/VFA', 'comunes/unidades-cuenta-bba-vfa');
 });

 await test.step('QA: presionar "Traer PCF" y validar modal de confirmacion', async () => {
 const traerButton = page.getByRole('button', { name: /traer pcf/i }).first();

 if ((await traerButton.count()) === 0) {
 test.info().annotations.push({
 type: 'ambiente',
 description: 'No se encontro el boton "Traer PCF" en la vista de Unidades de Cuenta BBA/VFA.',
 });
 return;
 }

 await expect(
 traerButton,
 '[BUG] El boton "Traer PCF" no esta habilitado.',
 ).toBeEnabled({ timeout: 10_000 });

 await traerButton.click();
 });

 await test.step('QA: confirmar la carga en el modal de comprobacion', async () => {
 const confirmModal = page.locator('[role="dialog"]').filter({ hasText: /tener en cuenta/i }).first();

 if ((await confirmModal.count()) === 0) {
 test.info().annotations.push({
 type: 'ambiente',
 description: 'No se mostro el modal de comprobacion "Tener en cuenta que para que la carga de informacion sea efectiva".',
 });
 return;
 }

 await expect(
 confirmModal,
 '[BUG] El modal de comprobacion no muestra el texto esperado sobre informacion del periodo actual.',
 ).toContainText(/tener en cuenta.*carga de informacion.*efectiva.*exista informacion del periodo actual/i, {
 timeout: 10_000,
 });

 const confirmButton = confirmModal.getByRole('button', { name: /si,? estoy seguro/i });
 await expect(
 confirmButton,
 '[BUG] El boton "Si, estoy seguro" no esta habilitado en el modal de comprobacion.',
 ).toBeEnabled({ timeout: 10_000 });

 await confirmButton.click();
 });

 await test.step('QA: validar mensaje de exito o procesamiento', async () => {
 await expect(
 page.getByText(/carga exitosa|listo.*informacion se realiz[oó] correctamente|archivo.*tra[ií]do satisfactoriamente/i),
 '[BUG] No se mostro mensaje de exito tras traer las Unidades de Cuenta BBA/VFA.',
 ).toBeVisible({ timeout: 120_000 });
 });
 });
});
