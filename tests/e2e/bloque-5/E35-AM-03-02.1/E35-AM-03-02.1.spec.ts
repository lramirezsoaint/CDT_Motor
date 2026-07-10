import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-03-02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta AM',
  role: 'gestorAM',
  modalTitle: /Agregar Unidad de Cuenta AM/i,
  fields: [
    { label: /Prioridad/i },
    { label: /Unidad de Cuenta/i },
    { label: /Factor/i },
  ],
  expectedResult: 'validationError',});

