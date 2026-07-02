import { ProcessGtCase } from '../_shared/gt-process';

ProcessGtCase({
 caseId: 'E47-GG-EC-02.03',
 phase: /Fase 2/i,
 action: 'run',
 mode: 'Completo',
 priority: 'critical',
 requiresPolicy: false,
 expectedMessage: /100%|ejecuto satisfactoriamente|ejecutado satisfactoriamente|complet/i,
});