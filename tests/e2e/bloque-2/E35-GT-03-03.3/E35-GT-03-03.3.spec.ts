import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-03-03.3',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  role: 'gestor-gasto',
  modalTitle: /Agregar Especiales NIIF/i,
  fields: [
   
  ],  expectedResult: 'validationError',
  expectedMessages: [/Porcentaje.*obligatorio|Porcentaje.*requer/i, /Tpo Distribución.*requer|Tipo Distribución.*requer/i],
});