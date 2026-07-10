import { EditRecordCase } from '../_shared/am-edit-record';

EditRecordCase({
  caseId: 'E36-AM-01-01.3',
  section: 'Parametrizaci\u00f3n',
  view: 'Centros',
  role: 'gestorAM',
  modalTitle: /Editar Centro(?:s)?/i,
  fields: [
    { label: /Nombre|Partida|Centro|Factor/i, value: 'AUTOMATION' },
  ],
  expectedResult: 'success',
  skipReason: 'TODO [DATA]: el catalogo requiere un registro objetivo creado/preparado y no define un identificador estable para editar.',});

