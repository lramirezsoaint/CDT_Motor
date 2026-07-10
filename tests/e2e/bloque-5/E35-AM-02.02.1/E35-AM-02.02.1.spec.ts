import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-02.02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta AM',
  role: 'gestorAM',
  modalTitle: /Agregar Unidad de Cuenta AM/i,
  fields: [],
  expectedResult: 'duplicateError',
  expectedMessages: [/registro que intentas agregar ya existe|registro duplicado/i],
  skipReason: 'TODO [CATALOGO]: requiere copiar valores de un registro existente o del CP E35-AM-01.02.1 sin identificador estable.',});

