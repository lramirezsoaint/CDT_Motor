import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-01.03.3',
 section: 'Asignaciones',
 view: 'Distribucion UoA Generales Multiramo',
 operation: 'delete',
 expectedResult: 'success',
 role: 'admin',
 modalTitle: /Agregar Distribuci[oó]n UoA/i,
});
