import { ProcessGtCase } from '../_shared/gt-process';

ProcessGtCase({
 caseId: 'E47-PRE-GT-ER-03',
 flow: 'presupuesto',
 phase: /Fase 2/i,
 action: 'run',
 mode: 'Resumido',
 priority: 'critical',
 requiresPolicy: true,
 expectedMessage: /100%|ejecuto satisfactoriamente|ejecutado satisfactoriamente|complet/i,
});