import { EditRecordCase } from '../_shared/am-edit-record';

EditRecordCase({
  caseId: 'E36-AM-03-01.3',
  section: 'Parametrizaci\u00f3n',
  view: 'Centros',
  role: 'gestorAM',
  modalTitle: /Editar Centro(?:s)?/i,
  fields: [
    { label: /Nombre Centro de Costo/i, kind: 'delete' },
  ],
  expectedResult: 'validationError',
  });
