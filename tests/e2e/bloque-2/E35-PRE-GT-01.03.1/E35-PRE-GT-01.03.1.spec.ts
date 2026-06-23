import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-PRE-GT-01.03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Agregar Método Subcanal/i,
  fields: [
    { label: /Código Línea/i, value: 'AMED', kind: 'select' },
    { label: /Código Producto/i, value: 'AMED019', kind: 'select' },
    { label: /Código Canal/i, value: 'CCO', kind: 'select' },
    { label: /Código Concepto|Concepto/i, value: '10.22.08', kind: 'select' },
    { label: /Código Ramo/i, value: '64', kind: 'select' },
    { label: /Código Método/i, value: 'GT2SCCCO001', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['AMED', '10.22.08'],
});