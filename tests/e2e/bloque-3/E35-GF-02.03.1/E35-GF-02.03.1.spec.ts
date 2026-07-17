import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E35-GF-02.03.1',
 section: 'Asignaciones',
 view: 'Especiales NIIF',
 operation: 'add',
 expectedResult: 'duplicateError',
 modalTitle: /Agregar Especiales NIIF/i,
});
