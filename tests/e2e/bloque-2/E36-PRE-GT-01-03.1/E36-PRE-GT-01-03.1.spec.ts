import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-PRE-GT-01-03.1',
  section: 'Parametrización',
  view: 'Metodo Subcanal',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Editar Metodo Subcanal/i,
  fields: [
    { label: /Código Línea|Linea/i, value: 'AMED', kind: 'select' },
    { label: /Código Producto|Producto/i, value: 'AMED019', kind: 'select' },
    { label: /Código Canal|Canal/i, value: 'CCO', kind: 'select' },
    { label: /Código Concepto|Concepto/i, value: '10.22.08', kind: 'select' },
    { label: /Código Ramo|Ramo/i, value: '64', kind: 'select' },
    { label: /Código Método|Metodo/i, value: 'GT2SCCCO001', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['AMED', '10.22.08', 'GT2SCCCO001'],
});