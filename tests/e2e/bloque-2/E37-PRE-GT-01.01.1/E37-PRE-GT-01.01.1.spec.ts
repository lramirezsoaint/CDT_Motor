import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
 caseId: 'E37-PRE-GT-01.01.1',
 section: 'Parametrización',
 view: 'Ramo',
 flow: 'presupuesto',
 role: 'admin',
 distribution: { tipo: /Presupuesto/i },
 expectedResult: 'success',
warningMessage: /Está seguro que desea eliminar este registro.*/i,
 expectedMessage: /Registro eliminado con éxito|registro.*eliminado.*xito/i,
});