import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E35-GF-02.01.3',
 section: 'Parametrización',
 view: 'Maestro Reservas Producto',
 operation: 'add',
 expectedResult: 'duplicateError',
 modalTitle: /Agregar Maestro Reservas Producto/i,
});
