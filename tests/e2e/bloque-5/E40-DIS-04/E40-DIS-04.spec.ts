import { test, expect } from '@fixtures/base.fixture';
import {
  expectCreateSuccess,
  fillDistributionForm,
  loginForDistribution,
  openCreateDistributionModal,
  uniqueDistributionName,
  validDistributionData,
} from '../_shared/am-distribution-flows';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E40-DIS-04 @am @distribucion @gestor-asiento @critical valida edicion de nombre al crear distribucion', async ({
  page,
}) => {
  const editedName = uniqueDistributionName('AM nombre editado');

  await test.step('Acceder a la pagina de inicio Distribucion', async () => {
    await loginForDistribution(page, 'gestorAM');
  });

  await test.step('Ingresar nombre editado y seleccionar tipo Real NIIF', async () => {
    const dialog = await openCreateDistributionModal(page);
    await fillDistributionForm(page, dialog, {
      name: editedName,
      ...validDistributionData,
    });

    const suggestion = page.getByText(/Sugerencia:.*Real NIIF/i).first();
    await expect(suggestion, 'Debe mostrarse sugerencia Real NIIF debajo del campo nombre.').toBeVisible({
      timeout: 15_000,
    });

    const apply = page.getByRole('button', { name: /Aplicar/i }).first();
    if (await apply.isVisible({ timeout: 2_000 }).catch(() => false)) {
      await apply.click();
    }

    await expect(dialog.getByRole('button', { name: /^Crear$/i }), 'Crear debe habilitarse con todos los campos validos.').toBeEnabled({
      timeout: 15_000,
    });
    await dialog.getByRole('button', { name: /^Crear$/i }).click();
  });

  await test.step('Validar mensaje de exito con el nombre editado', async () => {
    await expectCreateSuccess(page, editedName);
  });
});
