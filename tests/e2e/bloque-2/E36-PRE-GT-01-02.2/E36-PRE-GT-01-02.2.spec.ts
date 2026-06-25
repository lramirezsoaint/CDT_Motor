import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-PRE-GT-01-02.2',
  section: 'Aprovisionamiento',
  view: 'Maestro Negocio/Embebidos',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Editar Maestro/i,
  fields: [
    { label: /Embebido/i, value: 'No Embebido', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['No Embebido'],
});