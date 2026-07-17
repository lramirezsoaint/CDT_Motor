import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E35-GF-03-02.3',
 section: 'Aprovisionamiento',
 view: 'maestro de negocio.*embebidos',
 operation: 'add',
 expectedResult: 'validationError',
 modalTitle: /Agregar Maestro de Negocio.*Embebidos/i,
});
