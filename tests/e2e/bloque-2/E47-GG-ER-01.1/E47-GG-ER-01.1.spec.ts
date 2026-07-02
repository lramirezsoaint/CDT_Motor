import { ProcessGtCase } from '../_shared/gt-process';

ProcessGtCase({
 caseId: 'E47-GG-ER-01.1',
 phase: /Fase Inicial/i,
 action: 'run',
 mode: 'Resumido',
 priority: 'critical',
 requiresPolicy: false,
 expectedMessage: /100%|ejecuto satisfactoriamente|ejecutado satisfactoriamente|complet/i,
});