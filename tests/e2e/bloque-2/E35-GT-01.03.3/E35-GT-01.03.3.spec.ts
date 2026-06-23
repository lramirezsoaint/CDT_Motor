import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-01.03.3',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  role: 'gestor-gasto',
  modalTitle: /Agregar Especiales NIIF/i,
  fields: [
    { label: /Porcentaje/i, value: '22.563' },
    { label: /Tipo Distribución/i, value: 'NIIF', kind: 'select' },
  ],  expectedResult: 'success',
  expectedTableValues: ['22.563'],
});