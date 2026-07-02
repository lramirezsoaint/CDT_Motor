import { ProcessAmountPermanenceCase } from '../_shared/gt-process';

ProcessAmountPermanenceCase({
 caseId: 'E51-GT-EC',
 mode: 'Completo',
 priority: 'critical',
 requiresPolicy: true,
 expectedLabels: [/Fase Inicial/i, /Fase 1/i, /Fase 2/i, /Cerrar proceso|Cierre/i],
});