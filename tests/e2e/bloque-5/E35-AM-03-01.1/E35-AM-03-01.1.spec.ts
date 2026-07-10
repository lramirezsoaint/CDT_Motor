import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-03-01.1',
  section: 'Parametrizaci\u00f3n',
  view: 'Cuentas Contables',
  role: 'gestorAM',
  modalTitle: /Agregar Cuenta(?:s)? Contable(?:s)?/i,
  fields: [
    { label: /Cuenta Contable/i },
    { label: /Nombre Cuenta Contable/i },
    { label: /Tipo de Gasto/i },
    { label: /Concepto/i },
    { label: /Concepto N1/i },
    { label: /Concepto N2/i },
    { label: /Concepto N3/i },
    { label: /Concepto NIIF17|Concepto NIIF/i },
  ],
  expectedResult: 'validationError',});

