import { ProcessStopOrRestartCase } from '../_shared/gt-process-actions';

ProcessStopOrRestartCase({
  caseId: 'E66-GT-ER',
  mode: 'Resumido',
  role: 'gestor-gasto',
  action: 'reiniciar',
  expectedMessage: /reanuda|reinicia|fase/i,
});
