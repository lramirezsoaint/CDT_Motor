import { ProcessGtCase } from '../_shared/gt-process';

ProcessGtCase({
  caseId: 'E47-GG-EC-02.04',
  phase: /Cerrar proceso/i,
  action: 'close',
  mode: 'Completo',
  priority: 'critical',
  requiresPolicy: true,
  expectedMessage: /100%|ejecuto satisfactoriamente|ejecutado satisfactoriamente|complet/i,
});