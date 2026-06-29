import { UploadAndTableCase } from '../_shared/gt-upload-table';

UploadAndTableCase({
  caseId: 'E9-PRE-GT-03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal|Metodo Subcanal',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Método Subcanal|Cargar Metodo Subcanal/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Metodo Subcanal GT.xlsx',
});
