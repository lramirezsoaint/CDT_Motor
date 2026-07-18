import { ProcessAccountBalanceCase } from '../_shared/gt-process';
import { test } from '@fixtures/base.fixture';

test.skip(true, 'El caso queda omitido por dependencia en la pestaña Procesos');


ProcessAccountBalanceCase({
 caseId: 'E52-GT-EC-01',
 mode: 'Completo',
 priority: 'critical',
 requiresPolicy: true,
 closedProcess: false,
 expectedColumns: [/cuenta contable/i, /monto exact/i, /monto fases/i],
});