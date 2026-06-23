import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-GT-01-03.2',
  section: 'Parametrización',
  view: 'Metodo Producto',
  role: 'gestor-gasto',
  modalTitle: /Editar Metodo Producto/i,
  fields: [
    { label: /Código Concepto|Concepto/i, value: '10.14.00', kind: 'select' },
    { label: /Código Ramo|Ramo/i, value: '64', kind: 'select' },
    { label: /Código Linea|Linea/i, value: 'AMED', kind: 'select' },
    { label: /Código Canal|Canal/i, value: 'CCO', kind: 'select' },
    { label: /Código Método|Metodo/i, value: 'GT2SCCCO001', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['10.14.00', 'AMED', 'GT2SCCCO001'],
});