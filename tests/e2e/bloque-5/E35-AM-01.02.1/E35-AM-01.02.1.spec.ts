import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-01.02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta AM',
  role: 'gestorAM',
  modalTitle: /Agregar Unidad de Cuenta AM/i,
  fields: [
    { label: /Prioridad/i, value: '1', kind: 'select' },
    { label: /Código Concepto/i, value: '01.01.00', kind: 'select' },
    { label: /Moneda/i, value: 'PEN', kind: 'select' },
    { label: /Dígito de Cuenta/i, value: '44' },
    { label: /Código Ramo/i, value: '01', kind: 'select' },
    { label: /Grupo Producto/i, value: 'AFP ANTIGUO', kind: 'select' },
    { label: /Subcanal/i, value: 'AFP ANTIGUO', kind: 'select' },
    { label: /Unidad de Cuenta/i, value: 'IFRS_GRP_2021_UNIQUE SISCO2_PEN_PAA_Ceded_Prof', kind: 'select' },
    { label: /Factor/i, value: '1' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['IFRS_GRP_2021_UNIQUE SISCO2_PEN_PAA_Ceded_Prof', '1'],
});

