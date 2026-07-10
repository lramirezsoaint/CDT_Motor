import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-03-01.2',
  section: 'Parametrizaci\u00f3n',
  view: /Partidas?/i,
  role: 'gestorAM',
  modalTitle: /Agregar Partida(?:s)?/i,
  fields: [
    { label: /C[o\u00f3]digo Partida/i },
    { label: /^Partida$/i },
    { label: /Grupo Gasto/i },
    { label: /Tipo Gasto/i },
  ],
  expectedResult: 'validationError',});

