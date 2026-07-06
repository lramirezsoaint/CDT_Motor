import { defineGfUploadErrorCase } from '../_shared/gf-upload-case';

defineGfUploadErrorCase({
 caseId: 'E58-GF-01.1',
 section: 'Parametrización',
 view: 'Maestro Producto',
 entityName: 'Maestro Producto',
 fileName: 'REAL Maestro Reservas Producto GF.xlsx',
 modalTitle: /cargar maestro reserva[s]? producto/i,
 errorMessage: /faltan algunos datos obligatorios.*formato incorrecto.*catálogo relacionado/i,
});
