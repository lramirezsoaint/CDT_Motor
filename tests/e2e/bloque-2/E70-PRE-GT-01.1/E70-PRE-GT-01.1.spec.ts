import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E70-PRE-GT-01.1',
  section: 'Parametrizaci',
  view: 'Ramo',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Ramo|Cargar Ramos/i,
  fileFolder: 'Presupuesto/validationError',
  fileName: 'PRESUPUESTO Ramos GT.xlsx',
  expectedResult: 'validationDownload',
});
