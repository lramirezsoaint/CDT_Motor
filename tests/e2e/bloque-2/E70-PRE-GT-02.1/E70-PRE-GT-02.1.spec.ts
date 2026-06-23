import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E70-PRE-GT-02.1',
  section: 'Aprovisionamiento',
  view: 'Presupuesto|Exactus',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Presupuesto|Cargar Exactus/i,
  fileFolder: 'Presupuesto/validationError',
  fileName: 'PRESUPUESTO GT.xlsx',
  expectedResult: 'validationDownload',
});
