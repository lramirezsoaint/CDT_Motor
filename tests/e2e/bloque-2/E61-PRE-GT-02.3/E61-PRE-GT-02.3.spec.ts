import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E61-PRE-GT-02.3',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta|Unidad de cuenta GT',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Unidad de Cuenta GT/i,
  fileFolder: 'E61-GT-02.4',
  fileName: 'REAL Unidad de Cuenta GT.xlsx',
  expectedResult: 'maxSize',
});
