import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E4-PRE-GT-01.3',
  section: 'Parametrización',
  view: 'Centros',
  modalTitle: /Cargar Centros/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Centros GT.xlsx',
  expectedResult: 'success',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
});
