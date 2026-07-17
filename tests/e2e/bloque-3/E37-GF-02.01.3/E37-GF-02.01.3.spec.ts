import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-02.01.3',
 section: 'Parametrización',
 view: 'Maestro Reservas Producto',
 operation: 'delete',
 expectedResult: 'processError',
 role: 'admin',
 modalTitle: /Agregar Maestro Reservas Producto/i,
});
