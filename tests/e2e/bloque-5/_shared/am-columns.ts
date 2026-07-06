import { test } from './bloque5.fixture';
import { Bloque5AsientosManualesPage } from '@pages/bloque5/Bloque5AsientosManualesPage';
import { ensureAmContext } from './am-context';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';

export type AmColumnsCase = {
  caseId: string;
  section: string;
  view: string;
  flowTag?: FlowTag;
};

export function defineAmColumnsSelectionTest(config: AmColumnsCase) {
  test.describe(`@bloque5 @${config.caseId}`, () => {
    test(`${buildTags({ bloque: '@bloque5', caseId: config.caseId, flowTag: config.flowTag ?? '@columnas' })} debe seleccionar columnas en ${config.view}`, async ({
      bloque5AsientosManualesPage,
      page,
    }) => {
      test.setTimeout(180_000);
      await ensureAmContext(page);
      let selectedColumn = '';

      await test.step(`Acceder a ${config.section} > ${config.view}`, async () => {
        await bloque5AsientosManualesPage.openSidebarView(config.section, config.view);
      });

      await test.step('Validar columnas por defecto y seleccionar una columna opcional', async () => {
        const menu = await bloque5AsientosManualesPage.openColumnsMenu();
        await bloque5AsientosManualesPage.assertDefaultColumnsMarked(menu);
        selectedColumn = await bloque5AsientosManualesPage.selectFirstOptionalColumnAndApply(menu);
      });

      await test.step('Validar que la columna seleccionada aparece en tabla', async () => {
        await bloque5AsientosManualesPage.assertHeaderContains(selectedColumn);
      });
    });
  });
}
