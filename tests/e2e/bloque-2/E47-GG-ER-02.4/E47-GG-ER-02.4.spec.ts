import { ProcessGtCase } from '../_shared/gt-process';

ProcessGtCase({
 caseId: 'E47-GG-ER-02.4',
 phase: /Cerrar proceso/i,
 action: 'close',
 mode: 'Resumido',
 priority: 'critical',
 requiresPolicy: true,
 expectedMessage: /100%|ejecuto satisfactoriamente|ejecutado satisfactoriamente|complet/i,
});