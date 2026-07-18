import { DeleteRecordCase } from '../_shared/gf-delete-record';

DeleteRecordCase({
 caseId: 'E37-GF-01.03.3',
 section: 'Asignaciones',
 view: 'Distribución UoA Generales Multiramo',
 role: 'admin',
 expectedResult: 'success',
 warningMessage: /[¿?]?Est[aá] seguro que desea eliminar este registro/i,
 expectedMessage: /Registro eliminado con exito|registro.*eliminado.*exito/i,
});




