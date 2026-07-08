import { expect } from '@playwright/test';
import { test } from './bloque5.fixture';
import { Bloque5AsientosManualesPage } from '@pages/bloque5/Bloque5AsientosManualesPage';
import { ensureAmContext } from './am-context';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';

type ExecutionMode = 'completo' | 'resumido';

export interface AmProcessCase {
  caseId: string;
  executionMode: ExecutionMode;
  flowTag?: FlowTag;
}

function getPhaseLabel(step: number): string {
  if (step === 0) return 'Preparación';
  if (step === 1) return 'Fase 1: Validación de datos cargados';
  if (step === 2) return 'Fase 2: Procesamiento de datos';
  if (step === 3) return 'Fase 3: Generación de resultados';
  return `Fase ${step}`;
}

function getPhaseStatusRegex(): RegExp {
  return /completado|éxito|finalizado|OK/i;
}

function getPhaseErrorRegex(): RegExp {
  return /error|fallo|fallido|denegado|rechazado/i;
}

export function defineAmProcessExecutionCase(config: AmProcessCase): void {
  test.describe(`@bloque5 @${config.caseId}`, () => {
    test(`${buildTags({ bloque: '@bloque5', caseId: config.caseId, flowTag: config.flowTag ?? '@procesos' })} ejecuta procesos en modo ${config.executionMode} en Asientos Manuales`, async ({
      page,
    }) => {
      test.setTimeout(600_000);
      const amPage = new Bloque5AsientosManualesPage(page);

      await expect(page, 'Debe quedar autenticado en Distribuciones.').toHaveURL(/\/distribuciones/i, {
        timeout: 40_000,
      });
      await ensureAmContext(page, 'read');

      await test.step('Navegar a Procesos', async () => {
        await amPage.openSidebarView('Procesos', 'Procesos');
      });

      await test.step('Seleccionar modo de ejecucion', async () => {
        const modoBtn = page
          .getByRole('button', { name: new RegExp(config.executionMode, 'i') })
          .or(page.getByText(new RegExp(config.executionMode, 'i')))
          .first();
        await expect(modoBtn, `Debe existir el modo ${config.executionMode}.`).toBeVisible({ timeout: 15_000 });
        await modoBtn.click();
      });

      await test.step('Ejecutar todo el proceso', async () => {
        const ejecutarBtn = page
          .getByRole('button', { name: /Ejecutar Todo/i })
          .or(page.getByText(/Ejecutar Todo/i))
          .first();
        await expect(ejecutarBtn, 'Debe existir el boton Ejecutar Todo.').toBeVisible({ timeout: 15_000 });
        await expect(ejecutarBtn, 'El boton Ejecutar Todo debe estar habilitado.').toBeEnabled();
        await ejecutarBtn.click();
      });

      await test.step('Validar fases del proceso', async () => {
        for (let step = 0; step <= 3; step += 1) {
          const phaseLabel = getPhaseLabel(step);
          const phaseStatus = page
            .getByText(new RegExp(phaseLabel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'))
            .first();
          const isVisible = await phaseStatus.isVisible({ timeout: 10_000 }).catch(() => false);
          if (!isVisible) continue;

          const isError = await page
            .getByText(getPhaseErrorRegex())
            .first()
            .isVisible({ timeout: 5_000 })
            .catch(() => false);

          expect(isError, `La fase ${phaseLabel} no debe tener errores en modo ${config.executionMode}.`).toBe(false);
        }
      });

      await test.step('Validar finalizacion del proceso', async () => {
        const successIndicator = page
          .getByText(/Proceso completado|Todos los procesos completados|Finalizado/i)
          .first();
        const errorIndicator = page
          .getByText(/Error en el proceso|Fallo en el proceso/i)
          .first();

        const hasSuccess = await successIndicator.isVisible({ timeout: 300_000 }).catch(() => false);
        const hasError = await errorIndicator.isVisible({ timeout: 5_000 }).catch(() => false);

        expect(hasError, 'No debe haber errores en la finalizacion del proceso.').toBe(false);
        expect(hasSuccess, 'El proceso debe finalizar exitosamente.').toBe(true);
      });
    });
  });
}
