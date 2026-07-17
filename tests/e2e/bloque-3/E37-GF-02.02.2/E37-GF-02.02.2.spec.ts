import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-02.02.2',
 section: 'Aprovisionamiento',
 view: 'Driver Subcanal',
 operation: 'delete',
 expectedResult: 'processError',
 role: 'admin',
 modalTitle: /Agregar Driver Subcanal/i,
});
