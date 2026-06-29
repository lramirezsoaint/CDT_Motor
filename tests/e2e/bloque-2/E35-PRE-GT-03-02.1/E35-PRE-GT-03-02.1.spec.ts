import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-PRE-GT-03-02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Agregar Unidad de Cuenta GT|Agregar Unidad de cuenta GT/i,
  fields: [
    { label: /Prioridad/i, value: '9' },
    { label: /Factor/i, value: '-10' },
  ],
  expectedResult: 'validationError',
  expectedMessages: [/requerido|obligatorio|formato|incorrecto|no válido/i],
});