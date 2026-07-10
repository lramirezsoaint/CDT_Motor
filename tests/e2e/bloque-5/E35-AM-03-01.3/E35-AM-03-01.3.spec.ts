import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-03-01.3',
  section: 'Parametrizaci\u00f3n',
  view: 'Centros',
  role: 'gestorAM',
  modalTitle: /Agregar Centro(?:s)?/i,
  fields: [
    { label: /C[o\u00f3]digo Centro/i },
    { label: /^Centro$/i },
    { label: /^Tipo$/i },
  ],
  expectedResult: 'validationError',});

