import { EditRecordCase } from '../_shared/gt-edit-record';

// TODO(catalogo): el ID E36-GT-01-02.1 aparece duplicado en el catalogo; se implementa la primera definicion: Driver Producto.
EditRecordCase({
  caseId: 'E36-GT-01-02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta GT',
  role: 'gestorGT',
  modalTitle: /Editar Unidad de Cuenta GT/i,
  fields: [
    { label: /Moneda/i, value: 'USD', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['USD'],
});