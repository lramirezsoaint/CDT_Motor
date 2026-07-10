import { test } from '@fixtures/base.fixture';
import { assertActionHiddenForStatuses, loginForDistribution } from '../_shared/am-distribution-flows';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E42-DIS-01.1 @am @distribucion @gestor-asiento @regression valida copia no visible para estados no completados', async ({
  page,
}) => {
  test.skip(true,'TODO [DATA]: Depende de la pestañ procesos.',);
});
