import { UploadCaseE4 } from '../_shared/gt-upload';

UploadCaseE4({
  caseId: 'E35-PRE-GT-04-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Cuentas Contables|Recargar Cuentas Contables/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Cuentas Contables GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*informaci[oó]n previamente cargada ser[aá] reemplazada|Desea continuar con la carga/i,
});