import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E4-PRE-GT-02.4.1',
  section: 'Aprovisionamiento',
  view: 'Maestro de Negocio.*Embebidos',
  modalTitle: /Cargar Maestro de Negocio y Embebidos|Cargar Maestro de Negocios y Embebidos/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Maestro Negocio y Embebidos GT.xlsx',
  expectedResult: 'success',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
});
