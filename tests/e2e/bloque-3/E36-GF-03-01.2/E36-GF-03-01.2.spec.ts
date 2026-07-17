import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E36-GF-03-01.2',
 section: 'Parametrización',
 view: 'Centros',
 operation: 'edit',
 expectedResult: 'validationError',
 modalTitle: /Editar Centros?/i,
});
