import { test } from '../_shared/bloque3.fixture';
import { assertRowActionHidden, findDistributionRowByStatus } from '../_shared/gf-distribution-actions';

test('@bloque3 @E42-DIS-01.1 @distribucion no muestra Copiar en distribuciones no completadas', async ({
  page,
  distribucionPage,
}) => {
  const targetStates = [
    { label: 'en estado Creada', pattern: /cread[ao]/i },
    { label: 'en estado Detenida', pattern: /detenid[ao]/i },
    { label: 'con errores', pattern: /con errores|error/i },
    { label: 'en estado Corriendo', pattern: /corriendo|en ejecuci[oó]n/i },
  ];

  await test.step('Abrir Distribuciones GF', async () => {
    await distribucionPage.openDistribuciones();
  });

  for (const state of targetStates) {
    await test.step(`Validar accion Copiar oculta para distribucion ${state.label}`, async () => {
      const row = await findDistributionRowByStatus(page, state.pattern, state.label);
      await assertRowActionHidden(page, row, /copiar|copy/i, `distribucion ${state.label}`);
    });
  }
});
