import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-GT-02.03.3',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  role: 'admin',
  expectedResult: 'processError',
  warningMessage: /Está seguro.*desea eliminar.*registro/i,
  expectedMessage: /Actualmente hay un proceso en ejecución.*no es posible editar o eliminar el registro|Espere a que finalice el proceso/i,
});