import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-02.02.3',
 section: 'Aprovisionamiento',
 view: 'Drivers CC Vida',
 operation: 'delete',
 expectedResult: 'processError',
 role: 'admin',
 modalTitle: /Agregar Driver.*CC.*Vida/i,
});
