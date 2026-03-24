# Seguimiento De Casos De Prueba

Este archivo sirve para dar seguimiento a la implementación real en Playwright sin modificar la trazabilidad del catálogo original extraído desde Excel.

## Convenciones

- `case_id`: conservar exactamente el ID del catálogo
- `catalog_implemented_flag`: valor tal como aparece en `catalogo_casos_prueba.md`
- `implementation_status`: estado real en el código
- `automation_readiness`: si el caso es automatizable con la información actual
- `human_validation_status`: resultado del checkpoint humano
- `blocking_reason`: motivo del bloqueo si aplica
- `visible_scenario_association`: si el caso está asociado o no a un escenario visible del catálogo generado
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

| case_id | scenario_id | catalog_implemented_flag | implementation_status | automation_readiness | human_validation_status | visible_scenario_association | blocking_reason | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E0-LOGIN-ADMIN-01 | E0-login-01 | No | already_in_code | automatable_now | approved | assigned |  | Existe cobertura exacta en `tests/e2e/auth/login-admin.smoke.spec.ts` y el smoke fue ejecutado con resultado satisfactorio. |
| E0-LOGIN-ADMIN-02 | E0-login-01 | No | not_started | automatable_now | pending | assigned |  | Existe cobertura funcional parecida en `E0-LOGIN-02`, pero no hay match exacto por ID con este caso del catálogo. |
| E0-login-02 | E0-login-01 | No | not_started | not_automatable_yet | pending | assigned | Faltan título, descripción, datos y resultado esperado. | No debe implementarse hasta completar el caso fuente. |
| E0-login-03 | E0-login-01 | No | not_started | not_automatable_yet | pending | assigned | Faltan título, descripción, datos y resultado esperado. | No debe implementarse hasta completar el caso fuente. |
| E0-login-04 | E0-login-01 | No | not_started | not_automatable_yet | pending | assigned | Faltan título, descripción, datos y resultado esperado. | No debe implementarse hasta completar el caso fuente. |
| E0-login-05 | E0-login-01 | No | not_started | not_automatable_yet | pending | assigned | Faltan título, descripción, datos y resultado esperado. | No debe implementarse hasta completar el caso fuente. |
| E0-login-06 | E0-login-01 | No | not_started | not_automatable_yet | pending | assigned | Faltan título, descripción, datos y resultado esperado. | No debe implementarse hasta completar el caso fuente. |
| E11-C-01.1 | E11-C-01 | No | already_in_code | automatable_now | approved | assigned |  | Existe cobertura exacta en `tests/e2e/comunes/exportar-lineas.critical.spec.ts`. La ejecución más reciente quedó con evidencia en `playwright-report/` y `test-results/.last-run.json` con estado `passed`. |
| E35-C-01.1 | E35-C-01 | No | already_in_code | automatable_now | approved | assigned |  | Existe cobertura exacta en `tests/e2e/comunes/busqueda-lineas.critical.spec.ts`. La ejecución más reciente quedó con evidencia en `playwright-report/` y `test-results/.last-run.json` con estado `passed`. |
| E40-DIS-01 | E40-DIS-01 | No | already_in_code | automatable_now | approved | assigned |  | Existe cobertura exacta en `tests/e2e/distribucion/crear-distribucion.critical.spec.ts`. La ejecución más reciente quedó con evidencia en `playwright-report/` y `test-results/.last-run.json` con estado `passed`. |
| E42-DIS-01 |  | To Do | not_started | automatable_now | pending | unassigned |  | Quedó sin escenario visible asociado en el catálogo generado porque su fila de escenario está oculta, pero el caso puede seguir tratándose como implementable si sus campos son suficientes. |
