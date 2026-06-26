import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E61-PREGT-03.1',
  section: 'Asignaciones',
  view: 'M.todo Subcanal|Metodo Subcanal',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Metodo Subcanal|Cargar M.todo Subcanal/i,
  fileFolder: 'Presupuesto/maxSize',
  fileName: 'PRESUPUESTO Metodo Subcanal GT.xlsx',
  expectedResult: 'maxSize',
});
