import { DownloadCase } from '../_shared/gt-download';

// TODO(catalogo): no se especifican cabeceras exactas, datos esperados ni conteo concreto para comparar permanencia.
DownloadCase({
  caseId: 'E11-PRE-GT-02.2',
  section: 'Aprovisionamiento',
  view: 'Driver Subcanal',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: {
    tipo: /Presupuesto/i,
  },
});