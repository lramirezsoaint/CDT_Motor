import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-02.02.1',
 section: 'Aprovisionamiento',
 view: 'Driver Producto',
 operation: 'delete',
 expectedResult: 'processError',
 role: 'admin',
 modalTitle: /Agregar Driver Producto/i,
});
