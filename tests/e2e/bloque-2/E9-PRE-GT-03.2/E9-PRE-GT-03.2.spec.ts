import { UploadAndTableCase } from '../_shared/gt-upload-table';

UploadAndTableCase({
  caseId: 'E9-PRE-GT-03.2',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Especiales NIIF/i,
 fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Especiales NIIF GT.xlsx',
});
