import { ProcessAmountPermanenceCase } from '../_shared/gt-process';
import { test } from '@fixtures/base.fixture';

test.skip(true, 'El caso queda omitido por dependencia en la pestaña Procesos');


ProcessAmountPermanenceCase({
 caseId: 'E51-PRE-GT-ER',
 flow: 'presupuesto',
 mode: 'Resumido',
 priority: 'critical',
 requiresPolicy: true,
 expectedLabels: [/Fase Inicial/i, /Fase 1/i, /Fase 2/i, /Cerrar proceso|Cierre/i],
});