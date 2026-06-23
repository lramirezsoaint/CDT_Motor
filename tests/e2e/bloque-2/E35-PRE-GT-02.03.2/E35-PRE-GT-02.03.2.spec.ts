import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-PRE-GT-02.03.2',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Agregar Especiales NIIF/i,
  fields: [
    { label: /Código Línea/i, value: 'LA', kind: 'select' },
    { label: /Código Producto/i, value: 'LPER019', kind: 'select' },
    { label: /Código Canal/i, value: 'DFV', kind: 'select' },
    { label: /Código Subcanal/i, value: 'DFV008', kind: 'select' },
    { label: /Porcentaje/i, value: '100' },
  ],
  expectedResult: 'duplicateError',
  expectedMessages: [/Registro duplicado|registro que intentas agregar ya existe/i],
});