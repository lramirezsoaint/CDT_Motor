import { ProcessExecuteAllCase } from '../_shared/gt-process-actions';
import { test } from '@fixtures/base.fixture';

test.skip(true, 'El caso queda omitido por dependencia en la pestaña Procesos');


ProcessExecuteAllCase({
 caseId: 'E64-GT-ER-02-01',
 mode: 'Resumido',
 role: 'gestorGT',
 includePhase3: false,
 applyPatch: false,
 expectedLabels: [/fase inicial/i, /fase 1/i, /fase 2/i, /cierre/i],
});
