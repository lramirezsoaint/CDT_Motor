import { ProcessAccountBalanceCase } from '../_shared/gt-process';

ProcessAccountBalanceCase({
  caseId: 'E52-GT-EC-02',
  mode: 'Completo',
  priority: 'critical',
  requiresPolicy: true,
  closedProcess: true,
  expectedColumns: [/cuenta contable/i, /monto exact/i, /monto fases/i, /monto resumen/i],
});