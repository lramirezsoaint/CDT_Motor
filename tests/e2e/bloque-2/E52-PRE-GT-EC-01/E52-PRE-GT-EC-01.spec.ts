import { ProcessAccountBalanceCase } from '../_shared/gt-process';

ProcessAccountBalanceCase({
  caseId: 'E52-PRE-GT-EC-01',
  flow: 'presupuesto',
  mode: 'Completo',
  priority: 'critical',
  requiresPolicy: true,
  closedProcess: false,
  expectedColumns: [/cuenta contable/i, /monto exact/i, /monto fases/i],
});