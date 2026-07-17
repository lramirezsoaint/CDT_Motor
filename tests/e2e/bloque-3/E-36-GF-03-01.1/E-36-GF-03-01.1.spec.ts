import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E-36-GF-03-01.1',
 section: 'Parametrización',
 view: 'Cuentas Contables',
 operation: 'edit',
 expectedResult: 'validationError',
 modalTitle: /Editar Cuenta(?:s)? Contable(?:s)?/i,
});
