import { test, expect } from '@fixtures/base.fixture';
import {
  duplicateDistributionData,
  expectCreateError,
  fillDistributionForm,
  loginForDistribution,
  openCreateDistributionModal,
} from '../_shared/am-distribution-flows';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E40-DIS-02 @am @distribucion @gestor-asiento @critical valida error por reglas de negocio', async ({
  page,
}) => {
  await test.step('Acceder a la pagina de inicio Distribucion', async () => {
    await loginForDistribution(page, 'gestorAM');
  });

  await test.step('Completar modal con datos identicos a una distribucion existente', async () => {
    const dialog = await openCreateDistributionModal(page);
    await fillDistributionForm(page, dialog, duplicateDistributionData);
    await expect(dialog.getByRole('button', { name: /^Crear$/i }), 'El boton Crear debe habilitarse al completar campos.').toBeEnabled({
      timeout: 15_000,
    });
    await dialog.getByRole('button', { name: /^Crear$/i }).click();
  });

  await test.step('Validar mensaje de error de negocio', async () => {
    await expectCreateError(
      page,
      /Algo no coincide entre los datos ingresados.*campos est[aá]n relacionados correctamente/i,
    );
  });
});
