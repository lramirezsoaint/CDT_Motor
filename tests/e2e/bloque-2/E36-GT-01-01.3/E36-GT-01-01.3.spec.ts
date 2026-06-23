import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-GT-01-01.3',
  section: 'Parametrización',
  view: 'Centros',
  role: 'gestor-gasto',
  modalTitle: /Editar Centros|Editar Centro/i,
  fields: [
    { label: /Negocio/i, value: 'PVI', kind: 'select' },
    { label: /Código Ramo/i, value: '96', kind: 'select' },
    { label: /Código Producto/i, value: 'VGRP001', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['PVI', '96'],
});