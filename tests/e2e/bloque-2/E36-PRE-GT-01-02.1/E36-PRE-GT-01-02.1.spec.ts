import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-PRE-GT-01-02.1',
  section: 'Parametrización',
  view: 'Unidad de Cuenta GT',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Editar Unidad de Cuenta GT/i,
  fields: [
    { label: /Prioridad/i, value: '1' },
    { label: /Código Concepto|Concepto/i, value: '07.04.00', kind: 'select' },
    { label: /Moneda/i, value: 'PEN', kind: 'select' },
    { label: /Digito/i, value: '44' },
    { label: /Código Ramo|Ramo/i, value: '01', kind: 'select' },
    { label: /Código Producto|Producto/i, value: 'AFP003', kind: 'select' },
    { label: /Subcanal/i, value: 'AFPS2', kind: 'select' },
    { label: /Unidad/i, value: 'IFRS_', kind: 'select' },
    { label: /Factor/i, value: '1' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['07.04.00', 'PEN', '1'],
});