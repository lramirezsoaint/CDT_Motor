import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
 caseId: 'E35-PRE-GT-03-02.2',
 section: 'Aprovisionamiento',
 view: 'Maestro de Negocio.*Embebidos',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Agregar Maestro de Negocio.*Embebidos/i,
 fields: [
 { label: /Negocio/i },
 { label: /Línea/i },
 { label: /Producto/i },
 ],
 expectedResult: 'validationError',
 expectedMessages: [/requerido|obligatorio|formato|incorrecto|no válido/i],
});