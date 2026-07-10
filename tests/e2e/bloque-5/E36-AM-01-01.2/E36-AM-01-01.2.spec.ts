import { EditRecordCase } from '../_shared/am-edit-record';

EditRecordCase({
  caseId: 'E36-AM-01-01.2',
  section: 'Parametrizaci\u00f3n',
  view: /Partidas?/i,
  role: 'gestorAM',
  modalTitle: /Editar Partida(?:s)?/i,
  fields: [
    { label: /^Partida$/i, value: 'AUTOMATION CAMBIO' },
  ],
  expectedResult: 'success',
});

