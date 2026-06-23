import { ProcessGtCase } from '../_shared/gt-process';

ProcessGtCase({
  caseId: 'E47-GG-ER-01.3',
  phase: /Fase 2/i,
  action: 'run',
  mode: 'Resumido',
  priority: 'critical',
  requiresPolicy: true,
  expectedMessage: /100%|ejecuto satisfactoriamente|ejecutado satisfactoriamente|complet/i,
});