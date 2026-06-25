import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-GT-01-03.2',
  section: 'Asignaciones',
  view: 'Método Producto',
  role: 'gestor-gasto',
  modalTitle: /Editar Método Producto/i,
  fields: [
    { label: /Código Concepto|Concepto/i, value: '01.05.00', kind: 'select' },
    { label: /Código Ramo|Ramo/i, value: '01', kind: 'select' },
    { label: /Código Línea|Código Linea/i, value: 'AMED', kind: 'select' },
    { label: /Código Canal|Canal/i, value: 'CCO', kind: 'select' },
    { label: /Código Método|Código método/i, value: 'GT164000AMED', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['01.05.00', 'AMED', 'GT164000AMED'],
});