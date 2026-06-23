import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E35-PRE-GT-04-03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar M.todo Subcanal|Recargar M.todo Subcanal/i,
  fileFolder: 'GT/Presupuesto',
  fileName: 'PRESUPUESTO Metodo Subcanal GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*informaci[oó]n previamente cargada ser[aá] reemplazada|Desea continuar con la carga/i,
});