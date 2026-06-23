import { ProcessGtCase } from '../_shared/gt-process';

ProcessGtCase({
  caseId: 'E47-GG-EC-01.01',
  phase: /Fase Inicial/i,
  action: 'run',
  mode: 'Completo',
  priority: 'critical',
  requiresPolicy: false,
  expectedMessage: /100%|ejecuto satisfactoriamente|ejecutado satisfactoriamente|complet/i,
});