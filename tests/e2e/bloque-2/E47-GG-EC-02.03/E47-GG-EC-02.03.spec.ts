import { ProcessGtCase } from '../_shared/gt-process';
import { test } from '@fixtures/base.fixture';

test.skip(true, 'El caso queda omitido por dependencia en la pestaña Procesos');


ProcessGtCase({
 caseId: 'E47-GG-EC-02.03',
 phase: /Fase 2/i,
 action: 'run',
 mode: 'Completo',
 priority: 'critical',
 requiresPolicy: false,
 expectedMessage: /100%|ejecuto satisfactoriamente|ejecutado satisfactoriamente|complet/i,
});