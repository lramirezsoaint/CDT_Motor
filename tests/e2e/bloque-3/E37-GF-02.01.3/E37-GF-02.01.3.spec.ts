import { DeleteRecordCase } from '../_shared/gf-delete-record';

DeleteRecordCase({
 caseId: 'E37-GF-02.01.3',
 section: 'Parametrización',
 view: 'Maestro Reservas Producto',
 role: 'admin',
 expectedResult: 'processError',
 warningMessage: /[¿?]?Est[aá] seguro que desea eliminar este registro/i,
 expectedMessage: /Actualmente hay un proceso en ejecucion|no es posible editar o eliminar|proceso en ejecucion/i,
});




