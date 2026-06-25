import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-03-02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de cuenta GT',
  role: 'gestor-gasto',
  modalTitle: /Agregar Unidad de Cuenta GT|Agregar Unidad de cuenta GT/i,
  fields: [
    { label: /Factor/i, value: '' },
  ],  expectedResult: 'validationError',
  expectedMessages: [/Código Subcanal.*requer/i, /Unidad de Cuenta.*requer/i, /Factor.*requer/i],
});