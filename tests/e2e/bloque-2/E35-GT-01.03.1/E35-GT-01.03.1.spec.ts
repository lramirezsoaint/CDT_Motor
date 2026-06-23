import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-01.03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal',
  role: 'gestor-gasto',
  modalTitle: /Agregar Método Subcanal/i,
  fields: [
    { label: /Código línea/i },
    { label: /Código producto/i },
    { label: /Nombre producto/i },
    { label: /Código canal/i },
    { label: /Concepto/i },
    { label: /Código Ramo/i },
    { label: /Código método/i },
  ],  expectedResult: 'success',
  expectedTableValues: [],
});