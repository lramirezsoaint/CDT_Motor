import { ProcessAccountBalanceCase } from '../_shared/gt-process';

ProcessAccountBalanceCase({
 caseId: 'E52-PRE-GT-ER-02',
 flow: 'presupuesto',
 mode: 'Resumido',
 priority: 'critical',
 requiresPolicy: true,
 closedProcess: true,
 expectedColumns: [/cuenta contable/i, /monto exact/i, /monto fases/i, /monto resumen/i],
});