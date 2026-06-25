import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E35-GT-04-02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de cuenta GT',
  role: 'gestor-gasto',
  modalTitle: /Cargar Unidad de Cuenta GT|Recargar Unidad de Cuenta GT/i,
  fileFolder: 'Real/success',
  fileName: 'REAL Unidad de Cuenta GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*información previamente cargada será reemplazada|Desea continuar con la carga/i,
});