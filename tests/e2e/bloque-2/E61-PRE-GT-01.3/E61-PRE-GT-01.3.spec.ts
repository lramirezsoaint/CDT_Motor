import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E61-PRE-GT-01.3',
  section: 'Parametrización',
  view: 'Centros',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Centros/i,
  fileFolder: 'E61-GT-01.3',
  fileName: 'REAL Centros GT.xlsx',
  expectedResult: 'maxSize',
});
