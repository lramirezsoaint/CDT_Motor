import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-01.03.2',
 section: 'Asignaciones',
 view: 'Driver Reservas a UoA',
 operation: 'delete',
 expectedResult: 'success',
 role: 'admin',
 modalTitle: /Agregar Driver.*UoA/i,
});
