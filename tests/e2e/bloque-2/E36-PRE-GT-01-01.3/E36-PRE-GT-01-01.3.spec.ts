import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-PRE-GT-01-01.3',
  section: 'Parametrización',
  view: 'Centros',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Editar Centro/i,
  fields: [
    { label: /Código Linea|Linea/i, value: 'PVI', kind: 'select' },
    { label: /Código Producto|Producto/i, value: 'VGRP', kind: 'select' },
    { label: /Código Plan|Plan/i, value: 'VGRP001', kind: 'select' },
    { label: /Código Canal|Canal/i, value: 'CCO', kind: 'select' },
    { label: /Código Centro|Centro/i, value: 'CCO006', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['PVI', 'VGRP001', 'CCO006'],
});