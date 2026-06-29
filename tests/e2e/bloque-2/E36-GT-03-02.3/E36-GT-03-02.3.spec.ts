import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-GT-03-02.3',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta GT',
  role: 'gestorGT',
  modalTitle: /Editar Unidad de Cuenta GT/i,
  fields: [
    { label: /Factor/i, value: '-10' },
  ],
  expectedResult: 'validationError',
  expectedMessages: [/requerido|obligatorio|formato|incorrecto|no valido|mayor/i],
});