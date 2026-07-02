import { ReloadDownloadedCase } from '../_shared/gt-reload';

ReloadDownloadedCase({
 caseId: 'E71-PRE-GT-02.4',
 section: 'Aprovisionamiento',
 view: 'maestro de negocio.*embebidos',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Cargar Maestro de Negocio y Embebidos|Cargar Maestro de Negocios y Embebidos/i,
});
