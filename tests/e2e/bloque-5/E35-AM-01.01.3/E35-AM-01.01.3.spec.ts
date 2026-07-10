import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-01.01.3',
  section: 'Parametrizaci\u00f3n',
  view: 'Centros',
  role: 'gestorAM',
  modalTitle: /Agregar Centro(?:s)?/i,
  fields: [
    { label: /C[o\u00f3]digo Centro/i, value: '60.01.01' },
    { label: /^Centro$/i, value: 'CUM - GERENCIA DE CUMPLIMIENTO Y ETICA' },
    { label: /^Tipo$/i, value: 'STAFF', kind: 'select' },
    { label: /Nivel/i, value: '2' },
    { label: /Tipo Gasto/i, value: 'DIRECTO', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['60.01.01', 'CUM - GERENCIA DE CUMPLIMIENTO Y ETICA'],
  skipReason: 'TODO [CATALOGO]: requiere codigo centro unico y estrategia de limpieza/preparacion antes de automatizar alta real.',});

