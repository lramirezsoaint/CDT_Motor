import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-01.02.6',
 section: 'Aprovisionamiento',
 view: 'maestro de negocio.*embebidos',
 operation: 'delete',
 expectedResult: 'success',
 role: 'admin',
 modalTitle: /Agregar Maestro de Negocio.*Embebidos/i,
});
