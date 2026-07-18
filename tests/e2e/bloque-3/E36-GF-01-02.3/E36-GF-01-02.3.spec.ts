import { EditRecordCase } from '../_shared/gf-edit-record';

EditRecordCase({
 caseId: 'E36-GF-01-02.3',
 section: 'Aprovisionamiento',
 view: 'Maestro de Negocio y Embebidos',
 modalTitle: /Editar Maestro (?:de )?(?:Negocio|Negocios).*Embebidos|Editar Maestro de Embebidos/i,
 expectedResult: 'success',
});



