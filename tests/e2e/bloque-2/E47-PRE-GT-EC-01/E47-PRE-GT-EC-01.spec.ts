import { ProcessGtCase } from '../_shared/gt-process';

ProcessGtCase({
 caseId: 'E47-PRE-GT-EC-01',
 flow: 'presupuesto',
 phase: /Fase Inicial/i,
 action: 'run',
 mode: 'Completo',
 priority: 'critical',
 requiresPolicy: true,
 expectedMessage: /100%|ejecuto satisfactoriamente|ejecutado satisfactoriamente|complet/i,
});