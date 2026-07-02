import { SearchCase } from '../_shared/gt-search';

SearchCase({
 caseId: 'E63-GT-BUS',
 role: 'gestorGT',
 views: [
 { section: 'Parametrización', view: 'Ramo' },
 { section: 'Parametrización', view: 'Cuentas Contables' },
 { section: 'Parametrización', view: 'Centros' },
 ],
 todo: 'El catalogo define busqueda en todas las vistas, pero no especifica criterios, columnas ni datos esperados por vista; se toma el primer valor visible de la tabla y se cubren vistas base de Parametrizacion GT.',
});