import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E35-GF-02.02.3',
 section: 'Aprovisionamiento',
 view: 'AP Vida',
 operation: 'add',
 expectedResult: 'duplicateError',
 modalTitle: /Agregar AP Vida/i,
});
