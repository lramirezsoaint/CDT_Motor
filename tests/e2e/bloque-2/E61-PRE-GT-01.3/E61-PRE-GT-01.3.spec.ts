import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E61-PRE-GT-01.3',
  section: 'Parametrización',
  view: 'Centros',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Centros/i,
  fileFolder: 'Presupuesto/maxSize',
  fileName: 'PRESUPUESTO Centros GT.xlsx',
  expectedResult: 'maxSize',
});
