import { UploadCaseE4 } from '../_shared/gt-upload';

UploadCaseE4({
  caseId: 'E35-GT-04-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  role: 'gestor-gasto',
  modalTitle: /Cargar Cuentas Contables|Recargar Cuentas Contables/i,
  fileFolder: 'Real/success',
  fileName: 'REAL Cuentas Contables GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*información previamente cargada será reemplazada|Desea continuar con la carga/i,
});