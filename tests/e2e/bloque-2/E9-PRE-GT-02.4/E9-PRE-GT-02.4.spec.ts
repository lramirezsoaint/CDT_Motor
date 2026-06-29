import { UploadAndTableCase } from '../_shared/gt-upload-table';

UploadAndTableCase({
  caseId: 'E9-PRE-GT-02.4',
  section: 'Aprovisionamiento',
  view: 'maestro de negocio.*embebidos',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Maestro de Negocio y Embebidos|Cargar Maestro de Negocios y Embebidos/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Maestro Negocio y Embebidos GT.xlsx',
});
