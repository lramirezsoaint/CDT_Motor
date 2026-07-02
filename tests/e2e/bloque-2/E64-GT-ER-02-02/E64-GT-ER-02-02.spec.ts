import { ProcessExecuteAllCase } from '../_shared/gt-process-actions';

ProcessExecuteAllCase({
 caseId: 'E64-GT-ER-02-02',
 mode: 'Resumido',
 role: 'gestorGT',
 includePhase3: false,
 applyPatch: true,
 expectedLabels: [/fase inicial/i, /fase 1/i, /fase 2/i, /parche/i, /cierre/i],
});
