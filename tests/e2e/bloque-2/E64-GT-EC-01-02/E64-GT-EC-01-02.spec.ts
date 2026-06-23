import { ProcessExecuteAllCase } from '../_shared/gt-process-actions';

ProcessExecuteAllCase({
  caseId: 'E64-GT-EC-01-02',
  mode: 'Completo',
  role: 'gestor-gasto',
  includePhase3: true,
  applyPatch: true,
  expectedLabels: [/fase inicial/i, /fase 1/i, /fase 2/i, /fase 3/i, /parche/i, /cierre/i],
});
