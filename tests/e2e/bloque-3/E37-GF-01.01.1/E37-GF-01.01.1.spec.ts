import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-01.01.1',
 section: 'Parametrización',
 view: 'Cuentas Contables',
 operation: 'delete',
 expectedResult: 'success',
 role: 'admin',
 modalTitle: /Agregar Cuenta(?:s)? Contable(?:s)?/i,
});
