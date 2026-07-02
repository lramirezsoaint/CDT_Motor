import { EditRecordCase } from '../_shared/gt-edit-record';

// TODO: El catalogo contiene mas de una definicion para el ID E36-GT-01-02.2; se implementa la primera coincidencia: Driver Subcanal.
EditRecordCase({
 caseId: 'E36-GT-01-02.2',
 section: 'Aprovisionamiento',
 view: 'Maestro de Negocio.* embebidos',
 role: 'gestorGT',
 modalTitle: /Editar Maestro de Negocio y Embebidos/i,
 fields: [
 { label: /Embebido/i, value: 'No Embebido', kind: 'select' },
 ],
 expectedResult: 'success',
 expectedTableValues: ['No Embebido'],
});