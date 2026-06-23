import { UploadAndTableCase } from '../_shared/gt-upload-table';

UploadAndTableCase({
  caseId: 'E9-PRE-GT-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Cuentas Contables/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Cuentas Contables GT.xlsx',
});
