import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-PRE-GT-03-03.2',
  section: 'Parametrización',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Editar Especiales NIIF/i,
  fields: [
    { label: /Porcentaje/i, value: 'DOS' },
  ],
  expectedResult: 'validationError',
  expectedMessages: [/requerido|obligatorio|formato|incorrecto|no valido|numero/i],
});