import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-01.03.1',
 section: 'Asignaciones',
 view: 'Especiales NIIF',
 operation: 'delete',
 expectedResult: 'success',
 role: 'admin',
 modalTitle: /Agregar Especiales NIIF/i,
});
