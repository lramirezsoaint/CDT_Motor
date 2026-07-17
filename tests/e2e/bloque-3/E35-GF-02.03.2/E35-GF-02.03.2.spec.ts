import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E35-GF-02.03.2',
 section: 'Asignaciones',
 view: 'Driver Reservas a UoA',
 operation: 'add',
 expectedResult: 'duplicateError',
 modalTitle: /Agregar Driver.*UoA/i,
});
