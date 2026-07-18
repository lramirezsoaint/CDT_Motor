import { ProcessAccountBalanceCase } from '../_shared/gt-process';
import { test } from '@fixtures/base.fixture';

test.skip(true, 'El caso queda omitido por dependencia en la pestaña Procesos');


ProcessAccountBalanceCase({
 caseId: 'E52-GT-ER-02',
 mode: 'Resumido',
 priority: 'critical',
 requiresPolicy: true,
 closedProcess: true,
 expectedColumns: [/cuenta contable/i, /monto exact/i, /monto fases/i, /monto resumen/i],
});