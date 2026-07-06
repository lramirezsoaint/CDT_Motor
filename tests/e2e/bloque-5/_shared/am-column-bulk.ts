import { test } from './bloque5.fixture';
import { Bloque5AsientosManualesPage } from '@pages/bloque5/Bloque5AsientosManualesPage';
import { ensureAmContext } from './am-context';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';

type AmColumnBulkAction = 'mostrar-todas' | 'ocultar-todas';

export interface AmColumnBulkCase {
  caseId: string;
  section: string;
  view: string;
  tab?: string;
  action: AmColumnBulkAction;
  flowTag?: FlowTag;
}

export function defineAmColumnBulkTest(config: AmColumnBulkCase): void {
  const actionText = config.action === 'mostrar-todas' ? 'mostrar todas las columnas' : 'ocultar columnas opcionales';

  test.describe(`@bloque5 @${config.caseId}`, () => {
    test(`${buildTags({ bloque: '@bloque5', caseId: config.caseId, flowTag: config.flowTag ?? '@columnas' })} debe validar ${actionText} en ${config.view}`, async ({
      bloque5AsientosManualesPage,
      page,
    }) => {
      test.setTimeout(180_000);
      await ensureAmContext(page);

      await test.step(`Acceder a ${config.section} > ${config.view}`, async () => {
        await bloque5AsientosManualesPage.openSidebarView(config.section, config.view);
      });

      if (config.tab) {
        await test.step(`Activar vista ${config.tab}`, async () => {
          const tab = page
            .getByRole('button', { name: new RegExp(config.tab ?? '', 'i') })
            .or(page.getByRole('tab', { name: new RegExp(config.tab ?? '', 'i') }))
            .or(page.getByText(new RegExp(config.tab ?? '', 'i')))
            .first();

          await tab.click();
          await page.getByText(/Cargando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => undefined);
        });
      }

      await test.step('Abrir componente Columnas', async () => {
        const menu = await bloque5AsientosManualesPage.openColumnsMenu();

        if (config.action === 'mostrar-todas') {
          const selectedCount = await bloque5AsientosManualesPage.showAllColumnsAndApply(menu);
          test.expect(selectedCount, 'Mostrar todas debe operar sobre columnas reales del archivo.').toBeGreaterThan(0);
          return;
        }

        const result = await bloque5AsientosManualesPage.hideOptionalColumnsAndApply(menu);
        test.expect(result.defaultCount, 'Ocultar todas debe conservar columnas por defecto.').toBeGreaterThan(0);
        test.expect(result.optionalCount, 'Ocultar todas debe afectar columnas opcionales reales.').toBeGreaterThan(0);
      });
    });
  });
}
