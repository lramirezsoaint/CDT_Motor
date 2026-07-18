import { ProcessStopOrRestartCase } from '../_shared/gt-process-actions';
import { test } from '@fixtures/base.fixture';

test.skip(true, 'El caso queda omitido por dependencia en la pestaña Procesos');


ProcessStopOrRestartCase({
 caseId: 'E65-GT-EC',
 mode: 'Completo',
 role: 'gestorGT',
 action: 'detener',
 expectedMessage: /proceso de distribuci.n se ha detenido/i,
});
