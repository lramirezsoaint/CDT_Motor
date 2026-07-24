import { DeleteRecordCase } from '../_shared/gf-delete-record';

DeleteRecordCase({
 caseId: 'E37-GF-02.01.1',
 section: 'Parametrización',
 view: 'Cuentas Contables',
 role: 'admin',
 expectedResult: 'processError',
 targetRow: /46\.2\.5\.02\.02\.01/,
 warningMessage: /[¿?]?Est[aá] seguro que desea eliminar este registro/i,
 expectedMessage: /Actualmente hay un proceso en ejecuci[oó]n|no es posible editar o eliminar|proceso en ejecuci[oó]n/i,
});




