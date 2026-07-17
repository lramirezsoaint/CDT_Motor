import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-01.01.2',
 section: 'Parametrización',
 view: 'Centros',
 operation: 'delete',
 expectedResult: 'success',
 role: 'admin',
 modalTitle: /Agregar Centros?/i,
});
