import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-03-02.2',
  section: 'Aprovisionamiento',
  view: 'maestro de negocio.*embebidos',
  role: 'gestorGT',
  modalTitle: /Agregar Maestro de Negocio y Embebidos/i,
  fields: [
      { label: /Producto/i, value: 'INDEMNIZATORIO INDIVIDUAL', kind: 'select' },
      
  ],  expectedResult: 'validationError',
  expectedMessages: [/Negocio.*requer/i, /Línea.*requer/i, /Producto.*requer/i],
});