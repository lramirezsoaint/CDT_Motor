import { UploadCaseE4 } from '../_shared/gt-upload';

UploadCaseE4({
  caseId: 'E35-PRE-GT-04-01.3',
  section: 'Parametrización',
  view: 'Centros',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Centros|Recargar Centros/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Centros GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*informaci[oó]n previamente cargada ser[aá] reemplazada|Desea continuar con la carga/i,
});