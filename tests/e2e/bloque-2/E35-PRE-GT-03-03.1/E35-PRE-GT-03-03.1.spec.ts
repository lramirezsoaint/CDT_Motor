import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-PRE-GT-03-03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Agregar Método Subcanal/i,
  fields: [
   
  ],
  expectedResult: 'validationError',
  expectedMessages: [/requerido|obligatorio|formato|incorrecto|no válido/i],
});