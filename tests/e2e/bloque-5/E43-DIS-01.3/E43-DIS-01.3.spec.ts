import { test } from '@fixtures/base.fixture';
import { assertActionHiddenForStatuses, loginForDistribution } from '../_shared/am-distribution-flows';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E43-DIS-01.3 @am @distribucion @admin @critical valida eliminar no visible para estados no permitidos', async ({
  page,
}) => {
  test.skip(true,'TODO [DATA]: Depende de la pestañ procesos.',);
});
