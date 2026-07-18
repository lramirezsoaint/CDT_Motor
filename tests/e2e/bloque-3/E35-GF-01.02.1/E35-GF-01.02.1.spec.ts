import { AddRecordCase } from '../_shared/gf-add-record';

AddRecordCase({
 caseId: 'E35-GF-01.02.1',
 section: 'Aprovisionamiento',
 view: 'Maestro de Negocio y Embebidos',
 modalTitle: /Agregar Maestro (?:de )?(?:Negocio|Negocios).*Embebidos|Agregar Maestro de Embebidos/i,
 expectedResult: 'success',
});



