import { ProcessGtCase } from '../_shared/gt-process';
import { test } from '@fixtures/base.fixture';

test.skip(true, 'El caso queda omitido por dependencia en la pestaña Procesos');


ProcessGtCase({
 caseId: 'E47-GG-EC-01.05',
 phase: /Cerrar proceso/i,
 action: 'close',
 mode: 'Completo',
 priority: 'critical',
 requiresPolicy: true,
 expectedMessage: /100%|ejecuto satisfactoriamente|ejecutado satisfactoriamente|complet/i,
});