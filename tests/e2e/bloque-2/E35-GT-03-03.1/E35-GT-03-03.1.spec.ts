import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-03-03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal',
  role: 'gestor-gasto',
  modalTitle: /Agregar Método Subcanal/i,
  fields: [
    
  ],  expectedResult: 'validationError',
  expectedMessages: [/Código línea.*requer/i, /Código producto.*requer/i, /Concepto.*requer/i],
});