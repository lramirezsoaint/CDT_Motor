import { AddRecordCase } from '../_shared/gf-add-record';

AddRecordCase({
 caseId: 'E35-GF-02.01.1',
 section: 'Parametrización',
 view: 'Cuentas Contables',
 modalTitle: /Agregar Cuenta(?:s)? Contable(?:s)?/i,
 expectedResult: 'duplicateError',
});



