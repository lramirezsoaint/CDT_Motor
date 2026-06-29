import { ProcessStopOrRestartCase } from '../_shared/gt-process-actions';

ProcessStopOrRestartCase({
  caseId: 'E66-GT-ER',
  mode: 'Resumido',
  role: 'gestorGT',
  action: 'reiniciar',
  expectedMessage: /reanuda|reinicia|fase/i,
});
