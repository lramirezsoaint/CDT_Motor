import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-01.01.2',
  section: 'Parametrizaci\u00f3n',
  view: 'Partidas',
  role: 'gestorAM',
  modalTitle: /Agregar Partida(?:s)?/i,
  fields: [
    { label: /C[o\u00f3]digo Partida/i, value: 'CN07' },
    { label: /^Partida$/i, value: 'Distribuci\u00f3n ramos generales PGA' },
    { label: /Grupo Gasto/i, value: 'GT', kind: 'select' },
    { label: /Tipo Gasto/i, value: 'DIRECTO', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['CN07', 'Distribuci\u00f3n ramos generales PGA'],
  skipReason: 'TODO [CATALOGO]: requiere codigo partida unico y estrategia de limpieza/preparacion antes de automatizar alta real.',});

