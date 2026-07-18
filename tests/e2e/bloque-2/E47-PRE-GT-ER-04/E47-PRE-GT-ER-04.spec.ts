import { ProcessGtCase } from '../_shared/gt-process';
import { test } from '@fixtures/base.fixture';

test.skip(true, 'El caso queda omitido por dependencia en la pestaña Procesos');


// TODO: El catalogo indica 'revisar' en pasos; se valida cierre segun titulo y resultado esperado sin inventar pasos adicionales.
ProcessGtCase({
 caseId: 'E47-PRE-GT-ER-04',
 flow: 'presupuesto',
 phase: /Cerrar proceso/i,
 action: 'close',
 mode: 'Resumido',
 priority: 'critical',
 requiresPolicy: true,
 expectedMessage: /100%|ejecuto satisfactoriamente|ejecutado satisfactoriamente|complet/i,
});