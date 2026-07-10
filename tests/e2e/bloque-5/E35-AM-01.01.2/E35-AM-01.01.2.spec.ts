import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-01.01.2',
  section: 'Parametrización',
  view: /Partidas?/i,
  role: 'gestorAM',
  modalTitle: /Agregar Partida(?:s)?/i,
  fields: [
  { label: /^Código Partida$/i, value: 'CN071' },
  { label: /^Partida$/i, value: 'DISTRIBUCIÓN DE RAMOS GENERALES PGA' },
  { label: /^Grupo Gasto$/i, value: 'GT - GASTO DE TECNOLOGÍA', kind: 'select' },
  { label: /^Tipo Gasto$/i, value: 'DIRECTO', kind: 'select' },
],
  expectedResult: 'success',
  expectedTableValues: ['CN071', 'DISTRIBUCIÓN DE RAMOS GENERALES PGA'],
 });

