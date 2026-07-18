import { ExactusProcessedFlowCase } from '../_shared/gt-exactus';
import { test } from '@fixtures/base.fixture';

test.skip(true, 'El caso queda omitido por dependencia en la pestaña Procesos');


ExactusProcessedFlowCase({
 caseId: 'E69-GT-EC-01',
 role: 'gestorGT',
 priority: 'critical',
});
