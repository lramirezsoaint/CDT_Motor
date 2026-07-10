import { EditRecordCase } from '../_shared/am-edit-record';

EditRecordCase({
  caseId: 'E36-AM-01-01.1',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  role: 'gestorAM',
  modalTitle: /Editar Cuenta(?:s)? Contable(?:s)?/i,
  fields: [
    { label: /Nombre Cuenta Contable/i, value: 'AUTOMATION CAMBIO' },
  ],
  expectedResult: 'success',
});
