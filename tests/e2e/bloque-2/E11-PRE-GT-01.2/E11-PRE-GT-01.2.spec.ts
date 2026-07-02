import { DownloadCase } from '../_shared/gt-download';

// TODO(catalogo): no se especifican cabeceras exactas, datos esperados ni conteo concreto para comparar permanencia.
DownloadCase({
 caseId: 'E11-PRE-GT-01.2',
 section: 'Parametrización',
 view: 'Cuentas Contables',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: {
 tipo: /Presupuesto/i,
 },
});