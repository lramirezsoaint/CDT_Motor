import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-03-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  role: 'gestorGT',
  modalTitle: /Agregar Cuentas Contables|Agregar Cuenta Contable/i,
   fields: [
    { label: /Cuenta Contable/i, value: '' },
    { label: /Nombre Cuenta Contable/i, value: '' },
    { label: /Código Ramo/i, value: '01', kind: 'select' },
    { label: /Niif17 Atribuible/i, value: 'ATRIBUIBLE', kind: 'select' },
    { label: /Niif17 Tipo/i, value: 'GM (GAstos de Mantenimiento)', kind: 'select' },
    { label: /Concepto/i, value: ''},
    { label: /Concepto N1/i, value: '' },
    { label: /Concepto N2/i, value: '' },
    { label: /Concepto N3/i, value: '' },
    { label: /Tipo de cuenta/i, value: 'MT', kind: 'select' },
    { label: /Tipo Niif17 CBR/i, value: 'GS', kind: 'select' },
  ],  expectedResult: 'validationError',
  expectedMessages: [/Código.*requer/i, /Nombre.*requer/i, /Concepto.*requer/i],
});