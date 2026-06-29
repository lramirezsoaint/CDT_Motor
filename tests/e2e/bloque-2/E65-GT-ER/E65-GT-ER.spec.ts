import { ProcessStopOrRestartCase } from '../_shared/gt-process-actions';

ProcessStopOrRestartCase({
  caseId: 'E65-GT-ER',
  mode: 'Resumido',
  role: 'gestorGT',
  action: 'detener',
  expectedMessage: /proceso de distribuci.n se ha detenido/i,
});
