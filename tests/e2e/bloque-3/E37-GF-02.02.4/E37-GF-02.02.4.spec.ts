import { GfRecordCase } from '../_shared/gf-record-actions';

GfRecordCase({
 caseId: 'E37-GF-02.02.4',
 section: 'Aprovisionamiento',
 view: 'AMED',
 operation: 'delete',
 expectedResult: 'processError',
 role: 'admin',
 modalTitle: /Agregar AMED/i,
});
