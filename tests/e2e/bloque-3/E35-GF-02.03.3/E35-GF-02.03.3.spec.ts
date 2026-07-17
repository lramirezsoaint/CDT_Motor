import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E35-GF-02.03.3',
 section: 'Asignaciones',
 view: 'Distribucion UoA Generales Multiramo',
 operation: 'add',
 expectedResult: 'duplicateError',
 modalTitle: /Agregar Distribuci[oó]n UoA/i,
});
