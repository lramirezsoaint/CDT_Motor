import { EditRecordCase } from '../_shared/am-edit-record';

EditRecordCase({
  caseId: 'E36-AM-01-02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta AM',
  role: 'gestorAM',
  modalTitle: /Editar Unidad de Cuenta AM/i,
  fields: [
    { label: /Nombre|Partida|Centro|Factor/i, value: 'AUTOMATION' },
  ],
  expectedResult: 'success',
  skipReason: 'TODO [DATA]: el catalogo requiere un registro objetivo creado/preparado y no define un identificador estable para editar.',});

