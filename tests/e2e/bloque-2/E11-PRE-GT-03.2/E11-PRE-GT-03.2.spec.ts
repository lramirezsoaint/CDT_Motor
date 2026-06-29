import { DownloadCase } from '../_shared/gt-download';

// TODO(catalogo): no se especifican cabeceras exactas, datos esperados ni conteo concreto para comparar permanencia.
DownloadCase({
  caseId: 'E11-PRE-GT-03.2',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: {
    tipo: /Presupuesto/i,
  },
});