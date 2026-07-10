import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-04-02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta AM',
  role: 'gestorAM',
  modalTitle: /Agregar Unidad de Cuenta AM/i,
  fields: [],
  expectedResult: 'duplicateError',
  skipReason: 'TODO [CATALOGO]: depende de datos creados por otro caso sin identificador aislado ni estrategia de preparacion.',});

