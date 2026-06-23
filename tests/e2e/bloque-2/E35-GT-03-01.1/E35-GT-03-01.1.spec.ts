import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-03-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  role: 'gestor-gasto',
  modalTitle: /Agregar Ramo/i,
  fields: [
    { label: /Código Ramo/i, value: '12' },
    { label: /Descripción Ramo/i, value: 'INCENDIO' },
    { label: /Rubro/i, value: 'Lineas ALIADAS INCENDIO' },
  ],  expectedResult: 'validationError',
  expectedMessages: [/Código Ramo.*requer/i, /Descripción Ramo.*requer/i],
});