import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-PRE-GT-03-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Agregar Ramo/i,
  fields: [
    { label: /Código Ramo/i, value: '*?/(&' },
    { label: /Descripción Ramo/i, value: '1231+=' },
    { label: /Rubro/i, value: '123132' },
  ],
  expectedResult: 'validationError',
  expectedMessages: [/requerido|obligatorio|formato|incorrecto|no válido/i],
});