import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-02.03.2',
  section: 'Asignaciones',
  view: 'Método Producto',
  role: 'gestor-gasto',
  modalTitle: /Agregar Método Producto/i,
  fields: [
    { label: /Código Concepto/i, value: '01.05.00', kind: 'select' },
    { label: /Código Ramo/i, value: '01', kind: 'select' },
    { label: /Código línea/i, value: 'AFP', kind: 'select' },
    { label: /Código Canal/i, value: 'AFP', kind: 'select' },
    { label: /Código Método/i, value: 'GT164000AMED', kind: 'select' },
  ],  expectedResult: 'duplicateError',
  expectedMessages: [/Registro duplicado|registro que intentas agregar ya existe/i],
});