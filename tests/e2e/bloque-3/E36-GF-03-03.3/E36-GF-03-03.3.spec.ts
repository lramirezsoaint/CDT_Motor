import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E36-GF-03-03.3',
 section: 'Asignaciones',
 view: 'Distribucion UoA Generales Multiramo',
 operation: 'edit',
 expectedResult: 'validationError',
 modalTitle: /Editar Distribuci[oó]n UoA/i,
});
