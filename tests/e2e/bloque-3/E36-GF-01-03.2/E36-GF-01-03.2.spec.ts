import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E36-GF-01-03.2',
 section: 'Asignaciones',
 view: 'Driver Reservas a UoA',
 operation: 'edit',
 expectedResult: 'success',
 modalTitle: /Editar Driver.*UoA/i,
});
