import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-01.02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta AM',
  role: 'gestorAM',
  modalTitle: /Agregar Unidad de Cuenta AM/i,
  fields: [
    { label: /Prioridad/i, value: '1', kind: 'select' },
    { label: /C[o\u00f3]digo Concepto/i, value: '07.04.00', kind: 'select' },
    { label: /Moneda/i, value: 'PEN', kind: 'select' },
    { label: /D[i\u00ed]gito de Cuenta/i, value: '40' },
    { label: /C[o\u00f3]digo Ramo/i, value: '01', kind: 'select' },
    { label: /Grupo Producto/i, value: 'AFP003', kind: 'select' },
    { label: /Subcanal/i, value: 'AFPS2', kind: 'select' },
    { label: /Unidad de Cuenta/i, value: 'IFRS_GRP_2021_UNIQUE SISCO2_PEN_PAA_Ceded_Prof', kind: 'select' },
    { label: /Factor/i, value: '1' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['IFRS_GRP_2021_UNIQUE SISCO2_PEN_PAA_Ceded_Prof', '1'],
  skipReason: 'TODO [CATALOGO]: requiere combinacion unica de concepto/producto/subcanal/unidad de cuenta y preparacion de catalogos maestros.',});

