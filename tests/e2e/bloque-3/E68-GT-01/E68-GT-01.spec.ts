import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E68-GT-01',
 section: 'Parametrización',
 view: 'Cuentas Contables',
 operation: 'add',
 expectedResult: 'validationError',
 modalTitle: /Agregar Cuenta(?:s)? Contable(?:s)?/i,
});
