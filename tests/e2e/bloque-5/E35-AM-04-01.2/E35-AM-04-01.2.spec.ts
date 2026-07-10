import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-04-01.2',
  section: 'Parametrizaci\u00f3n',
  view: 'Partidas',
  role: 'gestorAM',
  modalTitle: /Agregar Partida(?:s)?/i,
  fields: [],
  expectedResult: 'duplicateError',
  skipReason: 'TODO [CATALOGO]: depende de datos creados por otro caso sin identificador aislado ni estrategia de preparacion.',});

