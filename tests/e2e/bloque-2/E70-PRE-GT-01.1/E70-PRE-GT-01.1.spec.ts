import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E70-PRE-GT-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Ramo|Cargar Ramos/i,
  fileFolder: 'Presupuesto/validationError',
  fileName: 'PRESUPUESTO Ramos GT.xlsx',
  expectedResult: 'validationDownload',
});
