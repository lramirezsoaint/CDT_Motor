import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E36-GF-01-02.3',
 section: 'Aprovisionamiento',
 view: 'maestro de negocio.*embebidos',
 operation: 'edit',
 expectedResult: 'success',
 modalTitle: /Editar Maestro.*Embebidos/i,
});
