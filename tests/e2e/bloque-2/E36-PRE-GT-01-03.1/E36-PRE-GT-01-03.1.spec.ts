import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-PRE-GT-01-03.1',
  section: 'Asignaciones',
  view: 'Metodo Subcanal',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Editar Metodo Subcanal/i,
  fields: [
    { label: /Código Línea|Linea/i, value: 'AMED', kind: 'select' },
    { label: /Código Producto|Producto/i, value: 'AMED019', kind: 'select' },
    { label: /Código Canal|Canal/i, value: 'CCO', kind: 'select' },
    { label: /Código Concepto|Concepto/i, value: '10.01.16', kind: 'select' },
    { label: /Código Ramo|Ramo/i, value: '01', kind: 'select' },
    { label: /Código método|Metodo/i, value: 'GT164000AMED', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['AMED', '10.01.16', 'GT164000AMED'],
});