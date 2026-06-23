import { UploadAndTableCase } from '../_shared/gt-upload-table';

UploadAndTableCase({
  caseId: 'E9-PRE-GT-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Ramo|Cargar Ramos/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Ramos GT.xlsx',
});
