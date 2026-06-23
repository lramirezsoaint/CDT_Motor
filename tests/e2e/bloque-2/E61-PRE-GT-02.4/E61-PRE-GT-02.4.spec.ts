import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E61-PRE-GT-02.4',
  section: 'Aprovisionamiento',
  view: 'maestro de negocio.*embebidos',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Maestro de Negocios y Embebidos/i,
  fileFolder: 'E61-GT-02.5',
  fileName: 'REAL Maestro Embebidos GT.xlsx',
  expectedResult: 'maxSize',
});
