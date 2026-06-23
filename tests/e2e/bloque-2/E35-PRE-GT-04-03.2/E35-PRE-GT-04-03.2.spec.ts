import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E35-PRE-GT-04-03.2',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Especiales NIIF|Recargar Especiales NIIF/i,
  fileFolder: 'GT/Presupuesto',
  fileName: 'PRESUPUESTO Especiales NIIF GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*informaci[oó]n previamente cargada ser[aá] reemplazada|Desea continuar con la carga/i,
});