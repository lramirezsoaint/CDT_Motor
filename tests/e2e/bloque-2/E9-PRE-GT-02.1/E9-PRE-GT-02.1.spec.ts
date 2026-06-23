import { UploadAndTableCase } from '../_shared/gt-upload-table';

UploadAndTableCase({
  caseId: 'E9-PRE-GT-02.1',
  section: 'Aprovisionamiento',
  view: 'Presupuesto',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Detalle de Gasto/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO GT.xlsx',
});
