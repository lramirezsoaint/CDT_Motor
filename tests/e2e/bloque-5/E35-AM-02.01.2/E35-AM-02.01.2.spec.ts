import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-02.01.2',
  section: 'Parametrizaci\u00f3n',
  view: 'Partidas',
  role: 'gestorAM',
  modalTitle: /Agregar Partida(?:s)?/i,
  fields: [],
  expectedResult: 'duplicateError',
  expectedMessages: [/registro que intentas agregar ya existe|registro duplicado/i],
  skipReason: 'TODO [CATALOGO]: requiere copiar valores de un registro existente o del CP E35-AM-01.01.2 sin identificador estable.',});

