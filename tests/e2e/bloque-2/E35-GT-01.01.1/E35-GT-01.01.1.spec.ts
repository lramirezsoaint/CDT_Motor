import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-01.01.1',
  section: 'Parametrización',
  view: 'Ramo',
  role: 'gestor-gasto',
  modalTitle: /Agregar Ramo/i,
  fields: [
    { label: /Código Ramo/i, value: '13' },
    { label: /Descripción Ramo/i, value: 'INCENDIO' },
    { label: /Rubro/i, value: 'Lineas ALIADAS INCENDIO' },
  ],  expectedResult: 'success',
  expectedTableValues: ['13', 'INCENDIO'],
});