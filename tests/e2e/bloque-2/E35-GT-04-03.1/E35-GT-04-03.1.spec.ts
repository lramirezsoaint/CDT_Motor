import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E35-GT-04-03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal',
  role: 'gestor-gasto',
  modalTitle: /Cargar Método Subcanal|Recargar Método Subcanal/i,
  fileFolder: 'GT/Real',
  fileName: 'REAL Metodo Subcanal GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*información previamente cargada será reemplazada|Desea continuar con la carga/i,
});