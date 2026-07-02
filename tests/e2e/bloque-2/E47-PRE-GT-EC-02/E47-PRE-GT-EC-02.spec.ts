import { ProcessGtCase } from '../_shared/gt-process';

ProcessGtCase({
 caseId: 'E47-PRE-GT-EC-02',
 flow: 'presupuesto',
 phase: /Fase 1/i,
 action: 'run',
 mode: 'Completo',
 priority: 'critical',
 requiresPolicy: true,
 expectedMessage: /100%|ejecuto satisfactoriamente|ejecutado satisfactoriamente|complet/i,
});