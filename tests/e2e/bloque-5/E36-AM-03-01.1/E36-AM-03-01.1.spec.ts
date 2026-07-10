import { EditRecordCase } from '../_shared/am-edit-record';

EditRecordCase({
  caseId: 'E36-AM-03-01.1',
  section: 'Parametrizaci\u00f3n',
  view: 'Cuentas Contables',
  role: 'gestorAM',
  modalTitle: /Editar Cuenta(?:s)? Contable(?:s)?/i,
  fields: [
    { label: /^Nombre Cuenta Contable$/i, kind: 'delete' },
  ],
  expectedResult: 'validationError',
  });
