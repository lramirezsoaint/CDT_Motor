import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-PRE-GT-02.03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Agregar Método Subcanal/i,
  fields: [
    { label: /Código línea/i, value: 'AFP', kind: 'select' },
    { label: /Código producto/i, value: 'AFP001', kind: 'select' },
    { label: /Código canal/i, value: 'AFP', kind: 'select' },
    { label: /Código Concepto/i, value: '01.05.00', kind: 'select' },
    { label: /Código Ramo/i, value: '01', kind: 'select' },
    { label: /Código método/i, value: '24SC72CORPD', kind: 'select' },
  ],
  expectedResult: 'duplicateError',
  expectedMessages: [/Registro duplicado|registro que intentas agregar ya existe/i],
});