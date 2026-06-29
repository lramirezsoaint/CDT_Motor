import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-03-03.2',
  section: 'Asignaciones',
  view: 'Método Producto',
  role: 'gestorGT',
  modalTitle: /Agregar Método Producto/i,
  fields: [
    
  ],  expectedResult: 'validationError',
  expectedMessages: [/Concepto.*requer/i, /Código Ramo.*requer/i, /Código Método.*requer/i],
});