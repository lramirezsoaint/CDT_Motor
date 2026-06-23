import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-GT-02.01.3',
  section: 'Parametrización',
  view: 'Centros',
  role: 'admin',
  expectedResult: 'processError',
  warningMessage: /Está seguro.*desea eliminar.*registro/i,
  expectedMessage: /Actualmente hay un proceso en ejecución.*no es posible editar o eliminar el registro|Espere a que finalice el proceso/i,
});