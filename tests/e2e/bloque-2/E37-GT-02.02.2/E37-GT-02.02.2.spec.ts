import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-GT-02.02.2',
  section: 'Aprovisionamiento',
  view: 'Drive Subcanal|Driver Subcanal',
  role: 'admin',
  expectedResult: 'processError',
  warningMessage: /Está seguro.*desea eliminar.*registro/i,
  expectedMessage: /Actualmente hay un proceso en ejecución.*no es posible editar o eliminar el registro|Espere a que finalice el proceso/i,
});