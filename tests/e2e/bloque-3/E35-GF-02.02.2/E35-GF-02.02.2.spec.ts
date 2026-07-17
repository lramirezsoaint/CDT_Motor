import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E35-GF-02.02.2',
 section: 'Aprovisionamiento',
 view: 'AMED',
 operation: 'add',
 expectedResult: 'duplicateError',
 modalTitle: /Agregar AMED/i,
});
