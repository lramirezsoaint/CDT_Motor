import { DownloadCase } from '../_shared/gt-download';

DownloadCase({
 caseId: 'E10-PRE-GT-02.4',
 section: 'Aprovisionamiento',
 view: 'Maestro de Negocio.*Embebidos',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: {
 tipo: /Presupuesto/i,
 },
});