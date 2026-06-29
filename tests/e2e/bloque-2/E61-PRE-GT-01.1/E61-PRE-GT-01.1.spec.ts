import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E61-PRE-GT-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Ramos/i,
  fileFolder: 'Presupuesto/maxSize',
  fileName: 'PRESUPUESTO Ramos GT.xlsx',
  expectedResult: 'maxSize',
});
