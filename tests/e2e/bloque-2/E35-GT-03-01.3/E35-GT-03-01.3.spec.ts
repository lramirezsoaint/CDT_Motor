import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-03-01.3',
  section: 'Parametrización',
  view: 'Centros',
  role: 'gestorGT',
  modalTitle: /Agregar Centros|Agregar Centro/i,
  fields: [
    { label: /Negocio/i, value: 'PPS', kind: 'select' },
    { label: /Centro de Costo/i, value: '' },
    { label: /Nombre Centro de Costo/i, value: '' },
    
  ],  expectedResult: 'validationError',
  expectedMessages: [/Negocio.*requer/i, /Centro de costo.*requer/i, /Código Línea.*requer/i],
});