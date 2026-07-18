import { OpenDistributionCase } from '../_shared/gt-distribution-actions';
import { test } from '@fixtures/base.fixture';

test.skip(true, 'El caso queda omitido por dependencia en la pestaña Procesos');


OpenDistributionCase({
 caseId: 'E44-DIS',
 role: 'gestorGT',
});