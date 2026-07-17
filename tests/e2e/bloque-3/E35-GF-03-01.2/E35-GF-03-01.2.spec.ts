import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E35-GF-03-01.2',
 section: 'Parametrización',
 view: 'Centros',
 operation: 'add',
 expectedResult: 'validationError',
 modalTitle: /Agregar Centros?/i,
});
