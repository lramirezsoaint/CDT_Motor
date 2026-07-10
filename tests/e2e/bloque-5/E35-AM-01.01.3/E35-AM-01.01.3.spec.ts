import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-01.01.3',
  section: 'Parametrización',
  view: 'Centros',
  role: 'gestorAM',
  modalTitle: /Agregar Centro(?:s)?/i,
  fields: [
    { label: /^Centro de Costo/i, value: '60.01.01' },
    { label: /^Nombre Centro de Costo$/i, value: 'CUM - GERENCIA DE CUMPLIMIENTO Y ETICA' },
    { label: /^Tipo$/i, value: 'ASIENTOS', kind: 'select' },
    { label: /^Nivel$/i, value: '2' },
    { label: /^Tipo de Gasto$/i, value: 'DIRECTO', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['60.01.01', 'CUM - GERENCIA DE CUMPLIMIENTO Y ETICA'],
});

