import { ProcessAccountBalanceCase } from '../_shared/gt-process';

ProcessAccountBalanceCase({
  caseId: 'E52-GT-ER-01',
  mode: 'Resumido',
  priority: 'critical',
  requiresPolicy: true,
  closedProcess: false,
  expectedColumns: [/cuenta contable/i, /monto exact/i, /monto fases/i],
});