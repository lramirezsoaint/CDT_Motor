import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E35-GF-03.01.1',
 section: 'Parametrización',
 view: 'Cuentas Contables',
 operation: 'add',
 expectedResult: 'validationError',
 modalTitle: /Agregar Cuenta(?:s)? Contable(?:s)?/i,
});
