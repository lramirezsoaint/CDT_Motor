import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E61-PRE-GT-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Cuentas Contables/i,
  fileFolder: 'E61-GT-01.2',
  fileName: 'REAL Cuentas Contables GT.xlsx',
  expectedResult: 'maxSize',
});
