# Seguimiento De Casos De Prueba

Este archivo sirve para dar seguimiento a la implementación real en Playwright sin modificar la trazabilidad del catálogo original extraído desde Excel.

## Convenciones

- `case_id`: conservar exactamente el ID del catálogo
- `catalog_implemented_flag`: valor tal como aparece en `catalogo_casos_prueba.md`
- `implementation_status`: estado real en el código
- `automation_readiness`: si el caso es automatizable con la información actual
- `human_validation_status`: resultado del checkpoint humano
- `blocking_reason`: motivo del bloqueo si aplica
- `notes`: observaciones útiles

## Estados permitidos

### `implementation_status`

- `not_started`
- `already_in_code`
- `implemented`
- `blocked`
- `skipped`

### `automation_readiness`

- `automatable_now`
- `conditionally_automatable`
- `not_automatable_yet`

### `human_validation_status`

- `pending`
- `approved`
- `rejected`

## Seguimiento

| case_id | scenario_id | catalog_implemented_flag | implementation_status | automation_readiness | human_validation_status | blocking_reason | notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| E0-LOGIN-ADMIN-01 | E0-login-01 | No | already_in_code | automatable_now | pending |  | El catálogo indica No, pero el repositorio ya tiene cobertura relacionada en `tests/e2e/auth`. |
| E0-LOGIN-ADMIN-02 | E0-login-01 | No | not_started | automatable_now | pending |  | Caso con intención funcional clara; requiere validar alcance exacto contra módulo Comunes. |
| E0-login-02 | E0-login-01 | No | not_started | not_automatable_yet | pending | Faltan título, descripción, datos y resultado esperado. | No debe implementarse hasta completar el caso fuente. |
| E0-login-03 | E0-login-01 | No | not_started | not_automatable_yet | pending | Faltan título, descripción, datos y resultado esperado. | No debe implementarse hasta completar el caso fuente. |
| E0-login-04 | E0-login-01 | No | not_started | not_automatable_yet | pending | Faltan título, descripción, datos y resultado esperado. | No debe implementarse hasta completar el caso fuente. |
| E0-login-05 | E0-login-01 | No | not_started | not_automatable_yet | pending | Faltan título, descripción, datos y resultado esperado. | No debe implementarse hasta completar el caso fuente. |
| E0-login-06 | E0-login-01 | No | not_started | not_automatable_yet | pending | Faltan título, descripción, datos y resultado esperado. | No debe implementarse hasta completar el caso fuente. |
