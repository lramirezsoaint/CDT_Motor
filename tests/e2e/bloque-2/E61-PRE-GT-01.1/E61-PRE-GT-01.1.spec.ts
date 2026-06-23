import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E61-PRE-GT-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Ramos/i,
  fileFolder: 'E61-GT-01.1',
  fileName: 'REAL Ramos GT.xlsx',
  expectedResult: 'maxSize',
});
