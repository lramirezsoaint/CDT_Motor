import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E36-GF-03-03.2',
 section: 'Asignaciones',
 view: 'Driver Reservas a UoA',
 operation: 'edit',
 expectedResult: 'validationError',
 modalTitle: /Editar Driver.*UoA/i,
});
