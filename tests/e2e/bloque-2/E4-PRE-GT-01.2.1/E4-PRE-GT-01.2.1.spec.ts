import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E4-PRE-GT-01.2.1',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  modalTitle: /Cargar Cuentas Contables/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Cuentas Contables GT.xlsx',
  expectedResult: 'success',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  priority: 'critical',
  distribution: { tipo: /Presupuesto/i },
});
