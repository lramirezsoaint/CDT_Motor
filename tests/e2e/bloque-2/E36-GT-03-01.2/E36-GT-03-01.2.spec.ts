import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-GT-03-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  role: 'gestor-gasto',
  modalTitle: /Editar Cuenta Contable/i,
  fields: [
    { label: /Nombre Cuenta Contable|Nombre/i },
  ],
  expectedResult: 'validationError',
  expectedMessages: [/requerido|obligatorio|formato|incorrecto|no valido/i],
});