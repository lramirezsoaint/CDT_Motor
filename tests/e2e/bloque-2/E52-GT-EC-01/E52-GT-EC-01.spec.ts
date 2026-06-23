import { ProcessAccountBalanceCase } from '../_shared/gt-process';

ProcessAccountBalanceCase({
  caseId: 'E52-GT-EC-01',
  mode: 'Completo',
  priority: 'critical',
  requiresPolicy: true,
  closedProcess: false,
  expectedColumns: [/cuenta contable/i, /monto exact/i, /monto fases/i],
});