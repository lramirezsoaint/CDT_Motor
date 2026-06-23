import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-01.02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de cuenta GT',
  role: 'gestor-gasto',
  modalTitle: /Agregar Unidad de Cuenta GT|Agregar Unidad de cuenta GT/i,
  fields: [
    { label: /Prioridad/i, value: '1', kind: 'select' },
    { label: /Código Concepto/i, value: '07.04.00', kind: 'select' },
    { label: /Moneda/i, value: 'PEN', kind: 'select' },
    { label: /Dígito de Cuenta/i, value: '44', kind: 'select' },
    { label: /Código Ramo/i, value: '01', kind: 'select' },
    { label: /Producto/i, value: 'AFP12', kind: 'select' },
    { label: /Subcanal/i, value: 'MI BANCO', kind: 'select' },
    { label: /Unidad de Cuenta/i, value: 'IFRS_GRP_2021_UNIQUE SISCO2_PEN_PAA_Ceded_Prof', kind: 'select' },
    { label: /Factor/i, value: '1' },
  ],  expectedResult: 'success',
  expectedTableValues: ['07.04.00', 'PEN'],
});