import { defineGfUploadErrorCase } from '../_shared/gf-upload-case';

defineGfUploadErrorCase({
 caseId: 'E58-GF-01.1',
 section: 'Parametrización',
 view: 'Maestro Reservas Producto',
 entityName: 'Maestro Reservas Producto',
 fileName: 'REAL Maestro Reservas Producto GF.xlsx',
 modalTitle: /cargar maestro reserva[s]? producto/i,
 errorMessage: /no se puede cargar.*archivo anterior.*no ha sido cargado/i,
});
