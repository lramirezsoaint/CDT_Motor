import { ProcessStopOrRestartCase } from '../_shared/gt-process-actions';

ProcessStopOrRestartCase({
  caseId: 'E65-GT-EC',
  mode: 'Completo',
  role: 'gestor-gasto',
  action: 'detener',
  expectedMessage: /proceso de distribuci.n se ha detenido/i,
});
