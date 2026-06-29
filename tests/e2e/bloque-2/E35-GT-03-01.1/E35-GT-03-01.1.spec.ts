import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-03-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  role: 'gestorGT',
  modalTitle: /Agregar Ramo/i,
  fields: [
    { label: /Código Ramo/i, value: '' },
    { label: /Descripción Ramo/i, value: '' },
    { label: /Rubro/i, value: '' },
  ],  expectedResult: 'validationError',
  expectedMessages: [/Código Ramo.*requer/i, /Descripción Ramo.*requer/i],
});