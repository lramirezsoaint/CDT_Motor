import { EditRecordCase } from '../_shared/gt-edit-record';

// TODO: El catalogo contiene mas de una definicion para el ID E36-GT-01-02.2; se implementa la primera coincidencia: Driver Subcanal.
EditRecordCase({
  caseId: 'E36-GT-01-02.2',
  section: 'Parametrización',
  view: 'Driver Subcanal',
  role: 'gestor-gasto',
  modalTitle: /Editar Driver Subcanal/i,
  fields: [
    { label: /Código Método|Metodo/i, value: 'GT2SCCCO001', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['GT2SCCCO001'],
});