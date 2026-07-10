import { EditRecordCase } from '../_shared/am-edit-record';

EditRecordCase({
  caseId: 'E36-AM-01-01.1',
  section: 'Parametrizaci\u00f3n',
  view: 'Cuentas Contables',
  role: 'gestorAM',
  modalTitle: /Editar Cuenta(?:s)? Contable(?:s)?/i,
  fields: [
    { label: /Nombre|Partida|Centro|Factor/i, value: 'AUTOMATION' },
  ],
  expectedResult: 'success',
  skipReason: 'TODO [DATA]: el catalogo requiere un registro objetivo creado/preparado y no define un identificador estable para editar.',});

