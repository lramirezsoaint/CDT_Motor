import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
 caseId: 'E37-GT-01.01.3',
 section: 'Parametrización',
 view: 'Centros',
 role: 'admin',
 expectedResult: 'success',
warningMessage: /Está seguro que desea eliminar este registro.*/i,
 expectedMessage: /Registro eliminado con éxito|registro.*eliminado.*xito/i,
});