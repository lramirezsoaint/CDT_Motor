import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E36-GF-01-01.1',
 section: 'Parametrización',
 view: 'Cuentas Contables',
 operation: 'edit',
 expectedResult: 'success',
 modalTitle: /Editar Cuenta(?:s)? Contable(?:s)?/i,
});
