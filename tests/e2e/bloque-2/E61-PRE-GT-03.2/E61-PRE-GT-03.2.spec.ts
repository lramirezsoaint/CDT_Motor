import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E61-PRE-GT-03.2',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Especiales NIIF/i,
  fileFolder: 'E61-GT-03.3',
  fileName: 'REAL Especiales NIIF GT.xlsx',
  expectedResult: 'maxSize',
});
