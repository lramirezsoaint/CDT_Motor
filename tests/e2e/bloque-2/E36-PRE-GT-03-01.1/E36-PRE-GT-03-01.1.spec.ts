import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-PRE-GT-03-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Editar Ramo/i,
  fields: [
    { label: /Descripción Ramo|Descripción/i },
    { label: /Rubro/i },
  ],
  expectedResult: 'validationError',
  expectedMessages: [/requerido|obligatorio|formato|incorrecto|no valido/i],
});