import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-01.03.2',
  section: 'Asignaciones',
  view: 'Método Producto',
  role: 'gestor-gasto',
  modalTitle: /Agregar Método Producto/i,
  fields: [
    { label: /Concepto/i },
    { label: /Código Ramo/i },
    { label: /Código línea/i },
    { label: /Nombre Línea/i },
    { label: /Código Canal/i },
    { label: /Código Método/i },
  ],  expectedResult: 'success',
  expectedTableValues: [],
});