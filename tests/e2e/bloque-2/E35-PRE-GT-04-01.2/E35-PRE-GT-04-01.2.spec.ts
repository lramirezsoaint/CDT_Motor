import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E35-PRE-GT-04-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Cuentas Contables|Recargar Cuentas Contables/i,
  fileFolder: 'GT/Presupuesto',
  fileName: 'PRESUPUESTO Cuentas Contables GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*informaci[oó]n previamente cargada ser[aá] reemplazada|Desea continuar con la carga/i,
});