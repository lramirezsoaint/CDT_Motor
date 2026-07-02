import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
 caseId: 'E35-GT-01.02.2',
 section: 'Aprovisionamiento',
 view: 'maestro de negocio.*embebidos',
 role: 'gestorGT',
 modalTitle: /Agregar Maestro de Negocio y Embebidos/i,
 fields: [
 { label: /Negocio/i, value: 'GENERALES', kind: 'select' },
 { label: /Línea/i, value: 'ASISTENCIA MEDICA', kind: 'select' },
 { label: /Producto/i, value: 'INDEMNIZATORIO INDIVIDUAL', kind: 'select' },
 { label: /Canal/i, value: 'ALIANZAS', kind: 'select' },
 { label: /Subcanal/i, value: 'FALABELLA', kind: 'select' },
 { label: /Embebido/i, value: 'Embebido', kind: 'select' },
 { label: /Tipo Negocio/i, value: 'PERSONA', kind: 'select' },
 ], expectedResult: 'success',
 expectedTableValues: ['GENERALES', 'ASISTENCIA MEDICA'],
});