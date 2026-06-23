import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E70-PRE-GT-03.2',
  section: 'Asignaciones|Asignaci',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Especiales NIIF/i,
  fileFolder: 'Presupuesto/validationError',
  fileName: 'PRESUPUESTO Especiales NIIF GT.xlsx',
  expectedResult: 'validationDownload',
});
