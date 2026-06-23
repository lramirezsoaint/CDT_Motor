import { UploadCase } from '../_shared/gt-upload';

// TODO(catalogo): el archivo exacto "PRESUPUESTO Unidad de cuenta GT" no existe en fixtures; se usa el disponible en carpeta GT/Presupuesto.
UploadCase({
  caseId: 'E35-PRE-GT-04-02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Unidad de Cuenta GT|Recargar Unidad de Cuenta GT/i,
  fileFolder: 'GT/Presupuesto',
  fileName: 'REAL Unidad de Cuenta GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*informaci[oó]n previamente cargada ser[aá] reemplazada|Desea continuar con la carga/i,
});