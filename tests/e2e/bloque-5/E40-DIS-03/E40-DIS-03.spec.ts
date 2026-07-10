import { test, expect } from '@fixtures/base.fixture';
import {
  fillDistributionForm,
  loginForDistribution,
  openCreateDistributionModal,
  uniqueDistributionName,
  validDistributionData,
} from '../_shared/am-distribution-flows';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E40-DIS-03 @am @distribucion @gestor-asiento @critical valida error por formato invalido', async ({
  page,
}) => {
  await test.step('Acceder a la pagina de inicio Distribucion', async () => {
    await loginForDistribution(page, 'gestorAM');
  });

  await test.step('Completar modal con formato invalido en version y tasa de cambio', async () => {
    const dialog = await openCreateDistributionModal(page);
    await fillDistributionForm(page, dialog, {
      name: uniqueDistributionName('AM formato invalido'),
      ...validDistributionData,
      version: '99',
      tasaCambio: '12345.678',
    });
    const createButton = dialog.getByRole('button', { name: /^Crear$/i });
    if (await createButton.isEnabled().catch(() => false)) {
      await createButton.click();
    }
  });

  await test.step('Validar mensaje de formato no valido', async () => {
    await expect(page.getByText(/El valor ingresado no es v[aá]lido|Formato no admitido/i).first()).toBeVisible({
      timeout: 30_000,
    });
  });
});
