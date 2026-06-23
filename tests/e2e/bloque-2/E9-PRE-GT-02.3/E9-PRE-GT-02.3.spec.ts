import { UploadAndTableCase } from '../_shared/gt-upload-table';

UploadAndTableCase({
  caseId: 'E9-PRE-GT-02.3',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta|Unidad de cuenta',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Unidad de Cuenta/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'REAL Unidad de Cuenta GT.xlsx',
  todo: 'El catalogo solicita PRESUPUESTO Unidad de Cuenta GT, pero en fixtures/GT/Presupuesto solo existe REAL Unidad de Cuenta GT.xlsx.',
});
