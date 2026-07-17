import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E35-GF-02.01.2',
 section: 'Parametrización',
 view: 'Centros',
 operation: 'add',
 expectedResult: 'duplicateError',
 modalTitle: /Agregar Centros?/i,
});
