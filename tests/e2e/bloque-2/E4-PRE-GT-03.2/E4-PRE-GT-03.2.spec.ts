import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E4-PRE-GT-03.2',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  modalTitle: /Cargar Especiales NIIF/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Especiales NIIF GT.xlsx',
  expectedResult: 'success',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
});
