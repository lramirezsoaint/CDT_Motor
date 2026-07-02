import { UploadCase58 } from '../_shared/gt-upload';

UploadCase58({
 caseId: 'E59-PRE-GT-02.2',
 section: 'Aprovisionamiento',
 view: 'Driver Subcanal',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Cargar Driver Subcanal|Recargar Driver Subcanal/i,
 fileFolder: 'Presupuesto/success',
 fileName: 'Driver Subcanal GT.xlsx',
 expectedResult: 'success',
 expectedWarning: /Desea continuar con la carga|continuar con la carga/i,
});