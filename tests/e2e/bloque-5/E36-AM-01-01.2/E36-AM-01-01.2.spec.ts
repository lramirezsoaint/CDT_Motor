import { EditRecordCase } from '../_shared/am-edit-record';

EditRecordCase({
  caseId: 'E36-AM-01-01.2',
  section: 'Parametrizaci\u00f3n',
  view: 'Partidas',
  role: 'gestorAM',
  modalTitle: /Editar Partida(?:s)?/i,
  fields: [
    { label: /Nombre|Partida|Centro|Factor/i, value: 'AUTOMATION' },
  ],
  expectedResult: 'success',
  skipReason: 'TODO [DATA]: el catalogo requiere un registro objetivo creado/preparado y no define un identificador estable para editar.',});

