import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-02.03.1',
 section: 'Asignaciones',
 view: 'Especiales NIIF',
 operation: 'delete',
 expectedResult: 'processError',
 role: 'admin',
 modalTitle: /Agregar Especiales NIIF/i,
});
