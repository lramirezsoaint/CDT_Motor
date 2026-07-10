import { EditRecordCase } from '../_shared/am-edit-record';

EditRecordCase({
  caseId: 'E36-AM-03-02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta AM',
  role: 'gestorAM',
  modalTitle: /Editar Unidad de Cuenta AM/i,
  fields: [
    { label: /Nombre/i, kind: 'delete' },
  ],
  expectedResult: 'validationError',
 });
