import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-02.03.3',
 section: 'Asignaciones',
 view: 'Distribucion UoA Generales Multiramo',
 operation: 'delete',
 expectedResult: 'processError',
 role: 'admin',
 modalTitle: /Agregar Distribuci[oó]n UoA/i,
});
