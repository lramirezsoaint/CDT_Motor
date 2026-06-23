import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-PRE-GT-01-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Editar Ramo/i,
  fields: [
    { label: /Codigo Ramo|Ramo/i, value: '44' },
    { label: /Descripcion Ramo|Descripcion/i, value: 'DESHONESTIDAD' },
    { label: /Rubro/i, value: 'DESHONESTIDAD FRENTE A LA EMPRESA' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['44', 'DESHONESTIDAD'],
});