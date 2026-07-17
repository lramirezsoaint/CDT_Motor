import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-02.02.6',
 section: 'Aprovisionamiento',
 view: 'maestro de negocio.*embebidos',
 operation: 'delete',
 expectedResult: 'processError',
 role: 'admin',
 modalTitle: /Agregar Maestro de Negocio.*Embebidos/i,
});
