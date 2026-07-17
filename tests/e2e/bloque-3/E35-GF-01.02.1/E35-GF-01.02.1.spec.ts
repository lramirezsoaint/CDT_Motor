import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E35-GF-01.02.1',
 section: 'Aprovisionamiento',
 view: 'maestro de negocio.*embebidos',
 operation: 'add',
 expectedResult: 'success',
 modalTitle: /Agregar Maestro de Negocio.*Embebidos/i,
});
