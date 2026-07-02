import { ReloadDownloadedCase } from '../_shared/gt-reload';

ReloadDownloadedCase({
 caseId: 'E71-PRE-GT-02.3',
 section: 'Aprovisionamiento',
 view: 'Unidad de Cuenta|Unidad de cuenta GT',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Cargar Unidad de Cuenta GT/i,
});
