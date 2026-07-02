import { UploadAndTableCase } from '../_shared/gt-upload-table';

UploadAndTableCase({
 caseId: 'E9-PRE-GT-01.3',
 section: 'Parametrización',
 view: 'Centros',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Cargar Centros/i,
 fileFolder: 'Presupuesto/success',
 fileName: 'PRESUPUESTO Centros GT.xlsx',
});
