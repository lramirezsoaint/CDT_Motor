import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-PRE-GT-03-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Agregar Cuentas Contables|Agregar Cuenta Contable/i,
  fields: [
    { label: /Cuenta Contable/i, value: 'LYTS_1213' },
    { label: /Nombre Cuenta Contable/i, value: '123CUENTA' },
    { label: /Código Concepto/i, value: 'LAS_213331*' },
  ],
  expectedResult: 'validationError',
  expectedMessages: [/requerido|obligatorio|formato|incorrecto|no válido/i],
});