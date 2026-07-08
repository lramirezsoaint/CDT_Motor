# Auditoria pre-ejecucion Bloque 5

- Fecha: 2026-07-08
- Fuente de verdad: `docs/catalogs/catalogo_casos_prueba_bloque5.md`
- Alcance auditado: `tests/e2e/bloque-5`
- Validacion ejecutada: `npx playwright test tests/e2e/bloque-5 --list`
- Resultado de `--list`: OK

## Resumen ejecutivo

- Casos esperados en catalogo: 166
- Carpetas de caso encontradas: 166
- Specs encontrados: 166
- Tests detectados por Playwright: 166
- Casos listos sin hallazgos previos: 101
- Casos con accion previa recomendada: 65
- Casos sin carpeta/spec: 0
- Carpetas extra fuera de catalogo: 0
- Specs sin `@fixtures/base.fixture`: 0
- Specs con import directo de `@playwright/test`: 0
- Referencias `PendingCatalogCase/PendingCatalogRoleCase`: 0
- Archivos con `test.skip/test.fixme/describe.skip`: 38
- Archivos con `TODO` o `pendiente`: 14

## Conteo por estado

| Estado | Cantidad |
|---|---:|
| INCOMPLETO | 2 |
| OK | 101 |
| SKIP | 63 |

## Hallazgos globales

- Los fixtures de carga existen bajo `fixtures/files/bloque-5/Real/<escenario>/`; no se detectan fixtures faltantes para los casos de carga mapeados.
- No se encontraron referencias a `PendingCatalogCase` ni `PendingCatalogRoleCase` en Bloque 5.
- Ningun spec importa directamente `@playwright/test`; los specs usan `@fixtures/base.fixture`.
- Hay imports de tipo desde `@playwright/test` en helpers compartidos para `Page`/`Locator`; no son specs, pero quedan documentados para revision de convencion.
- Playwright detecta todos los IDs del catalogo, aunque varios factories registran el test en el helper `_shared` en la salida de `--list`.

## Imports directos a @playwright/test encontrados

- `tests/e2e/bloque-5/_shared/am-context.ts`
- `tests/e2e/bloque-5/_shared/am-crud.ts`
- `tests/e2e/bloque-5/_shared/am-data-upload.ts`
- `tests/e2e/bloque-5/_shared/am-distribution-actions.ts`
- `tests/e2e/bloque-5/_shared/am-distribution-flows.ts`
- `tests/e2e/bloque-5/_shared/am-download-case.ts`
- `tests/e2e/bloque-5/_shared/am-file-lifecycle.ts`
- `tests/e2e/bloque-5/_shared/am-permissions.ts`
- `tests/e2e/bloque-5/_shared/am-process-flow.ts`
- `tests/e2e/bloque-5/_shared/am-process.ts`
- `tests/e2e/bloque-5/_shared/am-query.ts`
- `tests/e2e/bloque-5/_shared/am-rejected-upload.ts`
- `tests/e2e/bloque-5/_shared/am-upload.ts`
- `tests/e2e/bloque-5/_shared/am-valid-upload.ts`

## Tabla de auditoria por caso

| ID del caso | archivo spec | estado | problema encontrado | accion recomendada | prioridad |
|---|---|---|---|---|---|
| E0-LOGIN-ADMIN-01 | `tests/e2e/bloque-5/E0-LOGIN-ADMIN-01/E0-LOGIN-ADMIN-01.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E0-LOGIN-ADMIN-02 | `tests/e2e/bloque-5/E0-LOGIN-ADMIN-02/E0-LOGIN-ADMIN-02.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E0-LOGIN-GESTOR-ASIENTO-01 | `tests/e2e/bloque-5/E0-LOGIN-GESTOR-ASIENTO-01/E0-LOGIN-GESTOR-ASIENTO-01.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E0-LOGIN-GESTOR-GASTO-02 | `tests/e2e/bloque-5/E0-LOGIN-GESTOR-GASTO-02/E0-LOGIN-GESTOR-GASTO-02.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E0-LOGIN-GESTOR-GASTO-03.1 | `tests/e2e/bloque-5/E0-LOGIN-GESTOR-GASTO-03.1/E0-LOGIN-GESTOR-GASTO-03.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E0-LOGIN-GESTOR-GASTO-03.2 | `tests/e2e/bloque-5/E0-LOGIN-GESTOR-GASTO-03.2/E0-LOGIN-GESTOR-GASTO-03.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E10-AM-01.1 | `tests/e2e/bloque-5/E10-AM-01.1/E10-AM-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E10-AM-01.2 | `tests/e2e/bloque-5/E10-AM-01.2/E10-AM-01.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E10-AM-01.3 | `tests/e2e/bloque-5/E10-AM-01.3/E10-AM-01.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E10-AM-02.1 | `tests/e2e/bloque-5/E10-AM-02.1/E10-AM-02.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E10-AM-02.2 | `tests/e2e/bloque-5/E10-AM-02.2/E10-AM-02.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E11-AM-01.1 | `tests/e2e/bloque-5/E11-AM-01.1/E11-AM-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E11-AM-01.2 | `tests/e2e/bloque-5/E11-AM-01.2/E11-AM-01.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E11-AM-01.3 | `tests/e2e/bloque-5/E11-AM-01.3/E11-AM-01.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E11-AM-02.1 | `tests/e2e/bloque-5/E11-AM-02.1/E11-AM-02.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E11-AM-02.2 | `tests/e2e/bloque-5/E11-AM-02.2/E11-AM-02.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E35-AM-01.01.1 | `tests/e2e/bloque-5/E35-AM-01.01.1/E35-AM-01.01.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E35-AM-01.01.2 | `tests/e2e/bloque-5/E35-AM-01.01.2/E35-AM-01.01.2.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E35-AM-01.01.3 | `tests/e2e/bloque-5/E35-AM-01.01.3/E35-AM-01.01.3.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E35-AM-01.02.1 | `tests/e2e/bloque-5/E35-AM-01.02.1/E35-AM-01.02.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E35-AM-02.01.1 | `tests/e2e/bloque-5/E35-AM-02.01.1/E35-AM-02.01.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E35-AM-02.01.2 | `tests/e2e/bloque-5/E35-AM-02.01.2/E35-AM-02.01.2.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E35-AM-02.01.3 | `tests/e2e/bloque-5/E35-AM-02.01.3/E35-AM-02.01.3.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E35-AM-02.02.1 | `tests/e2e/bloque-5/E35-AM-02.02.1/E35-AM-02.02.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E35-AM-03-01.1 | `tests/e2e/bloque-5/E35-AM-03-01.1/E35-AM-03-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E35-AM-03-01.2 | `tests/e2e/bloque-5/E35-AM-03-01.2/E35-AM-03-01.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E35-AM-03-01.3 | `tests/e2e/bloque-5/E35-AM-03-01.3/E35-AM-03-01.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E35-AM-03-02.1 | `tests/e2e/bloque-5/E35-AM-03-02.1/E35-AM-03-02.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E35-AM-04-01.1 | `tests/e2e/bloque-5/E35-AM-04-01.1/E35-AM-04-01.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E35-AM-04-01.2 | `tests/e2e/bloque-5/E35-AM-04-01.2/E35-AM-04-01.2.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E35-AM-04-01.3 | `tests/e2e/bloque-5/E35-AM-04-01.3/E35-AM-04-01.3.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E35-AM-04-02.1 | `tests/e2e/bloque-5/E35-AM-04-02.1/E35-AM-04-02.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E36-AM-01-01.1 | `tests/e2e/bloque-5/E36-AM-01-01.1/E36-AM-01-01.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E36-AM-01-01.2 | `tests/e2e/bloque-5/E36-AM-01-01.2/E36-AM-01-01.2.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E36-AM-01-01.3 | `tests/e2e/bloque-5/E36-AM-01-01.3/E36-AM-01-01.3.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E36-AM-01-02.1 | `tests/e2e/bloque-5/E36-AM-01-02.1/E36-AM-01-02.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E36-AM-03-01.1 | `tests/e2e/bloque-5/E36-AM-03-01.1/E36-AM-03-01.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E36-AM-03-01.2 | `tests/e2e/bloque-5/E36-AM-03-01.2/E36-AM-03-01.2.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E36-AM-03-01.3 | `tests/e2e/bloque-5/E36-AM-03-01.3/E36-AM-03-01.3.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E36-AM-03-02.1 | `tests/e2e/bloque-5/E36-AM-03-02.1/E36-AM-03-02.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E37-AM-01.01.1 | `tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E37-AM-01.01.2 | `tests/e2e/bloque-5/E37-AM-01.01.2/E37-AM-01.01.2.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E37-AM-01.01.3 | `tests/e2e/bloque-5/E37-AM-01.01.3/E37-AM-01.01.3.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E37-AM-01.02.1 | `tests/e2e/bloque-5/E37-AM-01.02.1/E37-AM-01.02.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E37-AM-02.01.1 | `tests/e2e/bloque-5/E37-AM-02.01.1/E37-AM-02.01.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E37-AM-02.01.2 | `tests/e2e/bloque-5/E37-AM-02.01.2/E37-AM-02.01.2.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E37-AM-02.01.3 | `tests/e2e/bloque-5/E37-AM-02.01.3/E37-AM-02.01.3.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E37-AM-02.02.1 | `tests/e2e/bloque-5/E37-AM-02.02.1/E37-AM-02.02.1.spec.ts` | SKIP | CRUD pendiente: el catalogo no define valores unicos, registro objetivo seguro o precondicion aislada. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E4-AM-01.1 | `tests/e2e/bloque-5/E4-AM-01.1/E4-AM-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E4-AM-01.1.1 | `tests/e2e/bloque-5/E4-AM-01.1.1/E4-AM-01.1.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E4-AM-01.2 | `tests/e2e/bloque-5/E4-AM-01.2/E4-AM-01.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E4-AM-01.2.1 | `tests/e2e/bloque-5/E4-AM-01.2.1/E4-AM-01.2.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E4-AM-01.3 | `tests/e2e/bloque-5/E4-AM-01.3/E4-AM-01.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E4-AM-01.3.1 | `tests/e2e/bloque-5/E4-AM-01.3.1/E4-AM-01.3.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E4-AM-02.1 | `tests/e2e/bloque-5/E4-AM-02.1/E4-AM-02.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E4-AM-02.1.1 | `tests/e2e/bloque-5/E4-AM-02.1.1/E4-AM-02.1.1.spec.ts` | INCOMPLETO | Contradiccion de catalogo: titulo/datos indican Exactus sin Procesar, pasos 2 y 4 indican Centros. | Aclarar catalogo antes de ejecutar o ajustar caso sin inferir comportamiento. | P3 |
| E4-AM-02.2 | `tests/e2e/bloque-5/E4-AM-02.2/E4-AM-02.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E4-AM-02.3 | `tests/e2e/bloque-5/E4-AM-02.3/E4-AM-02.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E4-AM-02.3.1 | `tests/e2e/bloque-5/E4-AM-02.3.1/E4-AM-02.3.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E40-DIS-01 | `tests/e2e/bloque-5/E40-DIS-01/E40-DIS-01.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E40-DIS-02 | `tests/e2e/bloque-5/E40-DIS-02/E40-DIS-02.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E40-DIS-03 | `tests/e2e/bloque-5/E40-DIS-03/E40-DIS-03.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E40-DIS-04 | `tests/e2e/bloque-5/E40-DIS-04/E40-DIS-04.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E41-DIS-01 | `tests/e2e/bloque-5/E41-DIS-01/E41-DIS-01.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E42-DIS-01 | `tests/e2e/bloque-5/E42-DIS-01/E42-DIS-01.spec.ts` | SKIP | El catalogo no define distribucion completada origen ni periodo/version destino. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E42-DIS-01.1 | `tests/e2e/bloque-5/E42-DIS-01.1/E42-DIS-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E43-DIS-01.1 | `tests/e2e/bloque-5/E43-DIS-01.1/E43-DIS-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E43-DIS-01.2 | `tests/e2e/bloque-5/E43-DIS-01.2/E43-DIS-01.2.spec.ts` | SKIP | El catalogo no define una distribucion especifica en estado Con Errores segura para eliminar. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E43-DIS-01.3 | `tests/e2e/bloque-5/E43-DIS-01.3/E43-DIS-01.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E44-DIS | `tests/e2e/bloque-5/E44-DIS/E44-DIS.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E47-GF-EC-01.01 | `tests/e2e/bloque-5/E47-GF-EC-01.01/E47-GF-EC-01.01.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-EC-01.02 | `tests/e2e/bloque-5/E47-GF-EC-01.02/E47-GF-EC-01.02.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-EC-01.03 | `tests/e2e/bloque-5/E47-GF-EC-01.03/E47-GF-EC-01.03.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-EC-01.04 | `tests/e2e/bloque-5/E47-GF-EC-01.04/E47-GF-EC-01.04.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-EC-02.01 | `tests/e2e/bloque-5/E47-GF-EC-02.01/E47-GF-EC-02.01.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-EC-02.02 | `tests/e2e/bloque-5/E47-GF-EC-02.02/E47-GF-EC-02.02.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-EC-02.03 | `tests/e2e/bloque-5/E47-GF-EC-02.03/E47-GF-EC-02.03.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-EC-02.04 | `tests/e2e/bloque-5/E47-GF-EC-02.04/E47-GF-EC-02.04.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-ER-01.1 | `tests/e2e/bloque-5/E47-GF-ER-01.1/E47-GF-ER-01.1.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-ER-01.2 | `tests/e2e/bloque-5/E47-GF-ER-01.2/E47-GF-ER-01.2.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-ER-01.3 | `tests/e2e/bloque-5/E47-GF-ER-01.3/E47-GF-ER-01.3.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-ER-01.4 | `tests/e2e/bloque-5/E47-GF-ER-01.4/E47-GF-ER-01.4.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-ER-02.01 | `tests/e2e/bloque-5/E47-GF-ER-02.01/E47-GF-ER-02.01.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-ER-02.02 | `tests/e2e/bloque-5/E47-GF-ER-02.02/E47-GF-ER-02.02.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-ER-02.03 | `tests/e2e/bloque-5/E47-GF-ER-02.03/E47-GF-ER-02.03.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E47-GF-ER-02.04 | `tests/e2e/bloque-5/E47-GF-ER-02.04/E47-GF-ER-02.04.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E5-AM-01.1 | `tests/e2e/bloque-5/E5-AM-01.1/E5-AM-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E5-AM-01.2 | `tests/e2e/bloque-5/E5-AM-01.2/E5-AM-01.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E5-AM-01.3 | `tests/e2e/bloque-5/E5-AM-01.3/E5-AM-01.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E5-AM-02.1 | `tests/e2e/bloque-5/E5-AM-02.1/E5-AM-02.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E5-AM-02.2 | `tests/e2e/bloque-5/E5-AM-02.2/E5-AM-02.2.spec.ts` | INCOMPLETO | Contradiccion de catalogo: descripcion indica cabeceras diferentes, resultado esperado exige archivo sin informacion. | Aclarar catalogo antes de ejecutar o ajustar caso sin inferir comportamiento. | P3 |
| E51-GF-EC | `tests/e2e/bloque-5/E51-GF-EC/E51-GF-EC.spec.ts` | SKIP | No se identifica distribucion, periodo, version, poliza ni estado reproducible. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E51-GF-ER | `tests/e2e/bloque-5/E51-GF-ER/E51-GF-ER.spec.ts` | SKIP | No se identifica distribucion, periodo, version, poliza ni estado reproducible. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E52-GF-EC-01 | `tests/e2e/bloque-5/E52-GF-EC-01/E52-GF-EC-01.spec.ts` | SKIP | No se identifica distribucion, periodo, version, poliza ni estado reproducible. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E52-GF-EC-02 | `tests/e2e/bloque-5/E52-GF-EC-02/E52-GF-EC-02.spec.ts` | SKIP | No se identifica distribucion, periodo, version, poliza ni estado reproducible. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E52-GF-ER-01 | `tests/e2e/bloque-5/E52-GF-ER-01/E52-GF-ER-01.spec.ts` | SKIP | No se identifica distribucion, periodo, version, poliza ni estado reproducible. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E52-GF-ER-02 | `tests/e2e/bloque-5/E52-GF-ER-02/E52-GF-ER-02.spec.ts` | SKIP | No se identifica distribucion, periodo, version, poliza ni estado reproducible. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E56-AM-PAG | `tests/e2e/bloque-5/E56-AM-PAG/E56-AM-PAG.spec.ts` | SKIP | El catalogo no define vista concreta ni conjunto de datos para validar paginador. | Completar datos/precondiciones en catalogo o fixture controlado antes de habilitar. | P2 |
| E58-AM-02.1 | `tests/e2e/bloque-5/E58-AM-02.1/E58-AM-02.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E58-AM-02.2 | `tests/e2e/bloque-5/E58-AM-02.2/E58-AM-02.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E59-AM-01.1 | `tests/e2e/bloque-5/E59-AM-01.1/E59-AM-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E59-AM-01.2 | `tests/e2e/bloque-5/E59-AM-01.2/E59-AM-01.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E59-AM-01.3 | `tests/e2e/bloque-5/E59-AM-01.3/E59-AM-01.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E59-AM-02.1 | `tests/e2e/bloque-5/E59-AM-02.1/E59-AM-02.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E59-AM-02.2 | `tests/e2e/bloque-5/E59-AM-02.2/E59-AM-02.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E6-AM-01.1 | `tests/e2e/bloque-5/E6-AM-01.1/E6-AM-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E6-AM-01.2 | `tests/e2e/bloque-5/E6-AM-01.2/E6-AM-01.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E6-AM-01.3 | `tests/e2e/bloque-5/E6-AM-01.3/E6-AM-01.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E6-AM-02.1 | `tests/e2e/bloque-5/E6-AM-02.1/E6-AM-02.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E6-AM-02.2 | `tests/e2e/bloque-5/E6-AM-02.2/E6-AM-02.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-01.1.1 | `tests/e2e/bloque-5/E60-AM-01.1.1/E60-AM-01.1.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-01.1.2 | `tests/e2e/bloque-5/E60-AM-01.1.2/E60-AM-01.1.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-01.2.1 | `tests/e2e/bloque-5/E60-AM-01.2.1/E60-AM-01.2.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-01.2.2 | `tests/e2e/bloque-5/E60-AM-01.2.2/E60-AM-01.2.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-02.1.1 | `tests/e2e/bloque-5/E60-AM-02.1.1/E60-AM-02.1.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-02.1.2 | `tests/e2e/bloque-5/E60-AM-02.1.2/E60-AM-02.1.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-02.2.1 | `tests/e2e/bloque-5/E60-AM-02.2.1/E60-AM-02.2.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-02.2.2 | `tests/e2e/bloque-5/E60-AM-02.2.2/E60-AM-02.2.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-03.1.1 | `tests/e2e/bloque-5/E60-AM-03.1.1/E60-AM-03.1.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-03.1.2 | `tests/e2e/bloque-5/E60-AM-03.1.2/E60-AM-03.1.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-03.2.1 | `tests/e2e/bloque-5/E60-AM-03.2.1/E60-AM-03.2.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-03.2.2 | `tests/e2e/bloque-5/E60-AM-03.2.2/E60-AM-03.2.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-04.1.1 | `tests/e2e/bloque-5/E60-AM-04.1.1/E60-AM-04.1.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-04.1.2 | `tests/e2e/bloque-5/E60-AM-04.1.2/E60-AM-04.1.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-04.2.1 | `tests/e2e/bloque-5/E60-AM-04.2.1/E60-AM-04.2.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E60-AM-04.2.2 | `tests/e2e/bloque-5/E60-AM-04.2.2/E60-AM-04.2.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E61-AM-01.1 | `tests/e2e/bloque-5/E61-AM-01.1/E61-AM-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E61-AM-01.2 | `tests/e2e/bloque-5/E61-AM-01.2/E61-AM-01.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E61-AM-01.3 | `tests/e2e/bloque-5/E61-AM-01.3/E61-AM-01.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E61-AM-02.1 | `tests/e2e/bloque-5/E61-AM-02.1/E61-AM-02.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E61-AM-02.2 | `tests/e2e/bloque-5/E61-AM-02.2/E61-AM-02.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E61-AM-02.3 | `tests/e2e/bloque-5/E61-AM-02.3/E61-AM-02.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E63-AM-BUS | `tests/e2e/bloque-5/E63-AM-BUS/E63-AM-BUS.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E64-GF-EC-01-01 | `tests/e2e/bloque-5/E64-GF-EC-01-01/E64-GF-EC-01-01.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E64-GF-EC-01-02 | `tests/e2e/bloque-5/E64-GF-EC-01-02/E64-GF-EC-01-02.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E64-GF-ER-01-01 | `tests/e2e/bloque-5/E64-GF-ER-01-01/E64-GF-ER-01-01.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E64-GF-ER-01-02 | `tests/e2e/bloque-5/E64-GF-ER-01-02/E64-GF-ER-01-02.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E65-GF-EC | `tests/e2e/bloque-5/E65-GF-EC/E65-GF-EC.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E65-GF-ER | `tests/e2e/bloque-5/E65-GF-ER/E65-GF-ER.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E66-GF-EC | `tests/e2e/bloque-5/E66-GF-EC/E66-GF-EC.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E66-GF-ER | `tests/e2e/bloque-5/E66-GF-ER/E66-GF-ER.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E67-DIS | `tests/e2e/bloque-5/E67-DIS/E67-DIS.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E68-AM-01 | `tests/e2e/bloque-5/E68-AM-01/E68-AM-01.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E69-GF-01 | `tests/e2e/bloque-5/E69-GF-01/E69-GF-01.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E69-GF-EC-01 | `tests/e2e/bloque-5/E69-GF-EC-01/E69-GF-EC-01.spec.ts` | SKIP | El caso esta protegido por variable de entorno/readiness para evitar ejecutar procesos destructivos sin datos seguros. | Preparar distribucion segura y habilitar variable de entorno correspondiente solo para ejecucion controlada. | P2 |
| E70-AM-01.1 | `tests/e2e/bloque-5/E70-AM-01.1/E70-AM-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E70-AM-01.2 | `tests/e2e/bloque-5/E70-AM-01.2/E70-AM-01.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E70-AM-01.3 | `tests/e2e/bloque-5/E70-AM-01.3/E70-AM-01.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E70-AM-02.1 | `tests/e2e/bloque-5/E70-AM-02.1/E70-AM-02.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E70-AM-02.2 | `tests/e2e/bloque-5/E70-AM-02.2/E70-AM-02.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E71-AM-01.1 | `tests/e2e/bloque-5/E71-AM-01.1/E71-AM-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E71-AM-01.2 | `tests/e2e/bloque-5/E71-AM-01.2/E71-AM-01.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E71-AM-01.3 | `tests/e2e/bloque-5/E71-AM-01.3/E71-AM-01.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E71-AM-02.1 | `tests/e2e/bloque-5/E71-AM-02.1/E71-AM-02.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E71-AM-02.2 | `tests/e2e/bloque-5/E71-AM-02.2/E71-AM-02.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E71-AM-02.3 | `tests/e2e/bloque-5/E71-AM-02.3/E71-AM-02.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E8-AM-01.1 | `tests/e2e/bloque-5/E8-AM-01.1/E8-AM-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E8-AM-01.2 | `tests/e2e/bloque-5/E8-AM-01.2/E8-AM-01.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E8-AM-01.3 | `tests/e2e/bloque-5/E8-AM-01.3/E8-AM-01.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E8-AM-02.1 | `tests/e2e/bloque-5/E8-AM-02.1/E8-AM-02.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E8-AM-02.2 | `tests/e2e/bloque-5/E8-AM-02.2/E8-AM-02.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E9-AM-01.1 | `tests/e2e/bloque-5/E9-AM-01.1/E9-AM-01.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E9-AM-01.2 | `tests/e2e/bloque-5/E9-AM-01.2/E9-AM-01.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E9-AM-01.3 | `tests/e2e/bloque-5/E9-AM-01.3/E9-AM-01.3.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E9-AM-02.1 | `tests/e2e/bloque-5/E9-AM-02.1/E9-AM-02.1.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |
| E9-AM-02.2 | `tests/e2e/bloque-5/E9-AM-02.2/E9-AM-02.2.spec.ts` | OK | Sin hallazgos previos. | Listo para ejecucion controlada. | P4 |

## Plan de correccion recomendado

1. **Imports rotos / deteccion**: no hay imports rotos ni casos no detectados segun `--list`. Mantener esta validacion como primer gate en cada cambio.
2. **Fixtures faltantes**: no se detectan faltantes para los casos de carga mapeados; mantener la matriz `Real/<escenario>` sincronizada si se agregan casos.
3. **Skips/pending**: revisar casos con `test.skip` por precondiciones, datos no deterministas o procesos protegidos por readiness.
4. **Datos incompletos**: aclarar contradicciones de catalogo en E4-AM-02.1.1 y E5-AM-02.2; completar registros objetivo/valores unicos para CRUD.
5. **Validaciones faltantes**: despues de resolver datos/precondiciones, ejecutar lotes por flujo y endurecer validaciones solo donde el catalogo lo respalde.

## Evidencia de --list

```text
Total detectado: 166 casos del catalogo. Salida completa disponible re-ejecutando npx playwright test tests/e2e/bloque-5 --list.
```