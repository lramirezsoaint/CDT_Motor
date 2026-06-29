import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-GT-03-03.3',
  section: 'Parametrización',
  view: 'Especiales NIIF',
  role: 'gestorGT',
  modalTitle: /Editar Especiales NIIF/i,
  fields: [
    { label: /Porcentaje/i, value: 'DOS' },
  ],
  expectedResult: 'validationError',
  expectedMessages: [/requerido|obligatorio|formato|incorrecto|no valido|numero/i],
});