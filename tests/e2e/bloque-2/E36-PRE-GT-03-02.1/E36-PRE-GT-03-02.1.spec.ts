import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-PRE-GT-03-02.1',
  section: 'Parametrización',
  view: 'Unidad de Cuenta GT',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Editar Unidad de Cuenta GT/i,
  fields: [
    { label: /Factor/i, value: '-10' },
  ],
  expectedResult: 'validationError',
  expectedMessages: [/requerido|obligatorio|formato|incorrecto|no valido|mayor/i],
});