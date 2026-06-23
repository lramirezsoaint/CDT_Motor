import { UploadCase } from '../_shared/gt-upload';

  // TODO: No existe fixture incompleto especifico de Presupuesto para Ramo; se reutiliza el fixture incompleto equivalente de GT Real.

UploadCase({
  caseId: 'E8-PRE-GT-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Ramo|Cargar Ramos/i,
  fileFolder: 'Presupuesto/validationError',
  fileName: 'PRESUPUESTO Ramos GT.xlsx',
  expectedResult: 'validationError',
});
