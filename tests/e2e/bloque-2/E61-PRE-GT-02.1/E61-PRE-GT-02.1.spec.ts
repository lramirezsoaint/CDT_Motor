import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E61-PRE-GT-02.1',
  section: 'Aprovisionamiento',
  view: 'Exactus|Presupuesto',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Exactus/i,
  fileFolder: 'E61-GT-02.1',
  fileName: 'REAL Exactus sin procesar GT.xlsx',
  expectedResult: 'maxSize',
});
