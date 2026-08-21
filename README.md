- # CDT_Motor — Framework Playwright para Motor de Distribución

  Framework de automatización E2E para testing de **Motor de Distribución** (Pacífico). Organizado por bloques funcionales con soporte multi-rol (Administrador, Gestor de Gastos Técnicos, Gestor de Gastos Financieros, Gestor de Asientos Manuales).

  ---

  ## Requisitos previos


  - Node.js 20+
  - npm
  - Chromium (se instala con `npx playwright install chromium`)

---

  ## Instalación

  1. Clonar el repositorio.
  2. Copiar `.env.example` a `.env` y completar las credenciales:

  3. Ejecutar:

     ```bash
     npm ci
     npx playwright install chromium
     ```

---

  ## Autenticación y roles

  El framework soporta 4 proyectos con autenticación separada. Los roles se definen en `src/config/roles.json` y se validan/cargan desde `src/config/roles.ts`.

| Proyecto                  | Rol                          | Storage State              |
| ------------------------- | ---------------------------- | -------------------------- |
| `chromium`              | Administrador                | `.auth/admin.json`       |
| `chromium-gestorGF`     | Gestor de Gastos Financieros | `.auth/gestorGF.json`    |
| `chromium-gestorGT`     | Gestor de Gastos Técnicos   | `.auth/gestorGT.json`    |
| `chromium-gestorAM`     | Gestor de Asientos Manuales | `.auth/gestorAM.json`    |

### Alcance de proyectos

Playwright genera los proyectos dinámicamente desde `roles.json`/`roles.ts` en `playwright.config.ts`. Esto evita que VS Code ejecute un caso GF con credenciales de Administrador.

| Proyecto            | Ejecuta principalmente |
| ------------------- | ---------------------- |
| `chromium`          | `bloque-1/` |
| `chromium-gestorGF` | `bloque-3/` y `procesos/` |
| `chromium-gestorGT` | `bloque-2/`            |
| `chromium-gestorAM` | `bloque-5/`            |

Cada rol define `id`, `envPrefix`, `projectName`, `testMatch` y `testIgnore`. La separación real de bloques vive en `src/config/roles.json`.

Si falta `.auth/<rol>.json`, Playwright falla al ejecutar pruebas con un mensaje claro indicando el rol y la ruta esperada. El comando `npx playwright test --list` no requiere archivos de autenticación.

Si un storage state existe pero está vacío o expirado, no se debe usar como sesión válida. Para regenerarlo en PowerShell:

```powershell
$env:AUTH_ROLE='gestorGF'; node scripts/auth/create-auth.js
$env:AUTH_ROLE='gestorGT'; node scripts/auth/create-auth.js
$env:AUTH_ROLE='gestorAM'; node scripts/auth/create-auth.js
$env:AUTH_ROLE='admin'; node scripts/auth/create-auth.js
```

### Agregar un nuevo rol

Para agregar un nuevo rol al framework:

1. Agregar entrada completa en `src/config/roles.json`:
   ```json
   {
     "id": "nuevoRol",
     "envPrefix": "MOTOR_NUEVOROL",
     "projectName": "chromium-nuevoRol",
     "testMatch": ["**/bloque-n/**/*.spec.ts"],
     "testIgnore": ["**/bloque-1/**/*.spec.ts"]
   }
   ```
2. Agregar credenciales en `.env`:
   ```
   MOTOR_NUEVOROL_USERNAME=
   MOTOR_NUEVOROL_PASSWORD=
   ```
3. Ejecutar `AUTH_ROLE=nuevoRol node scripts/auth/create-auth.js`

`playwright.config.ts` y `scripts/auth/create-auth.js` leen la configuración de roles de forma dinámica. `src/config/roles.ts` valida que cada rol tenga los campos requeridos y que no haya ids o proyectos duplicados.

---

  ## Comandos disponibles

  ### Ejecución de tests

| Comando                              | Descripción                                     |
| ------------------------------------ | ------------------------------------------------ |
| `npm test`                         | Suite completa con historial y reporte ejecutivo |
| `npm run test:raw`                 | Playwright directo sin hooks de historial        |
| `npm run test:login`               | Tests etiquetados con `@login`                  |
| `npm run test:distribucion`        | Tests etiquetados con `@distribucion`           |
| `npm run test:upload:valido`       | Tests etiquetados con `@upload_valido`          |
| `npm run test:upload:invalido`     | Tests etiquetados con `@upload_invalido`        |
| `npm run test:procesos`            | Tests etiquetados con `@procesos`               |
| `npm run test:headed`              | Ejecuta con navegador visible                    |
| `npm run test:ui`                  | Abre la UI de Playwright                         |
| `npm run test:list`                | Lista todos los tests disponibles                |
| `npm run test:bloque1`             | Bloque 1 con rol Administrador                   |
| `npm run test:block1:sequential`   | Bloque 1 secuencial                              |
| `npm run test:all:history`         | Suite completa con historial                     |
| `npm run test:bloque2`             | Solo Bloque 2 (Gastos Técnicos)                  |
| `npm run test:bloque2:gestorGT`    | Bloque 2 con rol Gestor GT                       |
| `npm run test:bloque3`             | Solo Bloque 3 (Gastos Financieros)               |
| `npm run test:bloque3:gestorGF`    | Bloque 3 con rol Gestor GF                       |
| `npm run test:by-dependency -- --tag=@tag` | Ejecuta tests respetando dependencias funcionales |

  ### Ejecutar por dependencia funcional

  Ejecuta tests en orden basado en las dependencias funcionales definidas en `src/config/test-dependencies.json`.

  ```bash
  # Ejecutar @editar en proyecto admin
  npm run test:by-dependency -- --tag=@editar --project=chromium

  # Ejecutar @upload_valido en proyecto gestorGF
  npm run test:by-dependency -- --tag=@upload_valido --project=chromium-gestorGF

  # Ejecutar @eliminar en todos los proyectos
  npm run test:by-dependency -- --tag=@eliminar

  # Ejecutar @procesos en proyecto gestorGF
  npm run test:by-dependency -- --tag=@procesos --project=chromium-gestorGF
  ```

  **Proyectos válidos:** `chromium`, `chromium-gestorGT`, `chromium-gestorGF`

  ### Ejecutar un spec especifico

  ```bash
  npx playwright test tests/e2e/bloque-3/E9-GF-03.3/E9-GF-03.3.spec.ts
  ```
  ### Reportes

  | Comando                      | Descripción                                |
  | ---------------------------- | ------------------------------------------- |
  | `npm run report`           | Abre reporte HTML de Playwright             |
  | `npm run report:executive` | Genera reporte ejecutivo                    |
  | `npm run cases:bd1`        | Exporta matriz CSV de casos Bloque 1        |

  ## Estructura del proyecto

  ```
  CDT_Motor/
  |-- playwright.config.ts           # Config de Playwright, proyectos y storage state por rol
  |-- package.json                   # Scripts de test y reportes
  |-- README.md
  |-- AGENTS.md
  |-- docs/
  |   |-- catalogs/                  # Catalogos MD de CP
  |   `-- tracking/                  # Seguimiento de implementacion
  |-- fixtures/
  |   |-- data/                      # Datos globales y por bloque
  |   `-- files/                     # Archivos usados en carga
  |-- pages/                         # Page Objects
  |   |-- auth/
  |   |-- comunes/
  |   |-- distribucion/
  |   |-- bloque3/
  |   |-- procesos/
  |   `-- shared/
  |-- src/
  |   |-- config/                    # env.ts, roles.ts, roles.json, test-dependencies.json
  |   |-- data/
  |   |-- utils/
  |   `-- components/
  |-- tests/
  |   |-- fixtures/base.fixture.ts    # Fixture global con diagnostico
  |   `-- e2e/
  |       |-- _globalshared/           # comportamiento tecnico comun
  |       |-- auth/
  |       |-- procesos/
  |       |-- bloque-1/
  |       |   |-- _shared/               # helpers historicos BD1
  |       |   `-- ...
  |       |-- bloque-2/
  |       |   |-- _shared/               # negocio GT
  |       |   `-- ...
  |       `-- bloque-3/
  |           |-- _shared/               # negocio GF
  |           `-- ...
  |       `-- bloque-5/
  |           |-- _shared/               # negocio AM
  |           `-- ...
  |-- scripts/
  |   |-- auth/create-auth.js
  |   |-- runners/
  |   |   |-- run-all-with-history.ts
  |   |   |-- run-block1-implemented-sequential.ts
  |   |   |-- run-by-dependency.ts
  |   |   `-- run-failed-with-history.ts
  |   |-- reports/
  |   `-- generators/
  ```
---

  ## Arquitectura de la aplicación 

  ### Mapa de Page Objects por bloque

  | Page Object                                         | BD1 | BD2 | BD3 |
  | --------------------------------------------------- | --- | --- | --- |
  | `pages/auth/LoginPage.ts`                         | ✅  | ✅  | ✅  |
  | `pages/comunes/ComunesPage.ts`                    | ✅  | —  | —  |
  | `pages/distribucion/DistribucionPage.ts`          | ✅  | —  | ✅  |
  | `pages/shared/Sidebar.ts`                         | ✅  | —  | —  |
  | `pages/bloque3/Bloque3GastosFinancierosPage.ts`   | —  | —  | ✅  |
  | `pages/procesos/ProcesosGastosFinancierosPage.ts` | —  | —  | ✅  |

---

  ## Convenciones de tags

  La convencion oficial usa tags para identificar el caso y el flujo funcional principal.  

  Formato recomendado:

  ```text
  @bloqueX @ID-del-caso @flujo_funcional
  ```

  Ejemplo:

  ```typescript
  test('@bloque3 @E4-GF-01.1 @upload_valido debe cargar archivo valido de Cuentas Contables', async ({ page }) => {
    // ...
  });
  ```

  Para specs generados por helpers, el tag oficial lo construye `buildTags` desde la configuracion del caso. El spec puede no contener el titulo inline completo, pero debe declarar el `caseId` y, para nuevos casos, el `flowTag`:

  ```typescript
  UploadCase({
    caseId: 'E4-GF-01.1',
    flowTag: '@upload_valido',
    // ...
  });
  ```

  La fuente comun para construir tags es `tests/e2e/_globalshared/tags/tags.ts`. Evitar concatenar tags manualmente en nuevos helpers.

  ### Tags de identificacion obligatorios

  Todo spec debe tener siempre estos dos tags:

  | Tag | Uso |
  | --- | --- |
  | `@bloque1` / `@bloque2` / `@bloque3` | Bloque al que pertenece el test |
  | `@<ID-del-test>` | Identificador unico del caso, igual al ID del catalogo/tracking. Ejemplo: `@E4-GF-01.1` |

  ### Tags de flujo funcional obligatorios

  Cada test debe tener exactamente un tag de flujo principal, elegido segun la feature que cubre el caso.

| Orden funcional | Tag | Dependencia funcional | Uso |
| ----- | --- | ---------- | --- |
| 1 | `@login` | - | Autenticacion, con el acceso correspondiente al modulo/rol que se testea |
| 2 | `@distribucion` | 1 | Creacion o seleccion de distribucion |
| 3 | `@upload_valido` / `@upload_invalido` | 1, 2 | Carga de archivos |
| 4 | `@registrar` | 1, 2 | Registro manual de datos |
| 5 | `@editar` | 1, 2, 3 | Edicion de registros |
| 6 | `@eliminar` | 1, 2, 3 | Eliminacion o inactivacion |
| 7 | `@busqueda` | 1, 2 | Busqueda |
| 8 | `@columnas` | 1, 2 | Selector de columnas |
| 9 | `@paginacion` | 1, 2 | Paginacion |
| 10 | `@procesos` | 1, 2 | Ejecucion de procesos |
| 11 | `@download_catalogo` | 1, 2 | Descarga de catalogos o parametrizacion |
| 12 | `@download_reporte` | 1, 2, 10 | Descarga de reportes de resultados despues de ejecutar procesos |

  ### Auditoria de tags

  La auditoria oficial valida la salida real de Playwright, no solo el contenido textual de cada `.spec.ts`. Esto permite soportar specs generados por helpers sin perder trazabilidad.

  ```bash
  npm run audit:tags
  ```

  Criterios:

  - cada test listado debe tener `@bloque1`, `@bloque2` o `@bloque3`;
  - cada test listado debe tener un ID `@E...`;
  - cada test listado debe tener exactamente un tag de flujo funcional.

---
  ## Generadores

  Los scripts en `scripts/generators/` convierten las planillas Excel de QA en catálogos y scaffolding de specs.

  ```bash
  # Generar catálogo Markdown + JSON de Bloque 2 desde Excel
  node scripts/generators/generate-bloque2-catalog.js

  # Generar directorios y specs vacíos con estructura correcta para BD2
  node scripts/generators/generate-bloque2-specs.js

  # Exportar la matriz de casos de BD1 como CSV
  node scripts/generators/export-bd1-case-matrix.cjs

  # Convertir cualquier planilla Excel a Markdown (CLI)
  python scripts/generators/excel_a_markdown_casos.py <ruta/al/archivo.xlsx>
  ```
  Los Excel fuente están en `source-material/excel/`. Los catálogos generados se guardan en `docs/catalogs/` y son la fuente de verdad para el seguimiento.

---

  ## Reportes ejecutivos

  ```bash
  # Reporte HTML con dashboard de estado
  node --experimental-strip-types scripts/reports/generate-executive-report.ts

  # Variante PDF del reporte ejecutivo
  node --experimental-strip-types scripts/reports/generate-executive-pdf-report.ts

  # Reporte de decisión para QA sign-off
  node --experimental-strip-types scripts/reports/generate-decision-report-from-playwright.ts

  # Merge de múltiples archivos JSON de resultados (PowerShell)
  ./scripts/reports/combine-results.ps1
  ```
---

## Gestion automatica de incidentes

El framework puede diagnosticar fallos de Playwright y preparar o enviar incidentes a un proveedor externo. El flujo funcional es:

```text
Playwright failure
-> classifier
-> policy
-> incident provider
-> dedup
-> create/duplicate
-> evidence
-> incident-provider-summary
```

Providers soportados:

| Provider | Uso |
| --- | --- |
| `azure` | Azure DevOps |
| `jira` | Jira Cloud |
| `trello` | Trello |
| `none` | Deshabilita provider externo |

### Variables generales

| Variable | Default seguro | Descripcion |
| --- | --- | --- |
| `INCIDENT_PROVIDER` | `azure` en la configuracion actual | Provider activo: `none`, `azure`, `jira` o `trello`. Usar `none` para desarrollo local sin integracion externa. |
| `AUTO_CREATE_INCIDENTS` | `false` | Habilita la creacion automatica solo cuando todos los gates se cumplen. |
| `INCIDENT_MODE` | `preview` | `preview` genera diagnostico sin crear; `create` permite crear si tambien pasan los gates. |
| `INCIDENT_ATTACH_EVIDENCE` | `false` | Habilita adjuntar screenshot y trace cuando existan. |
| `INCIDENT_ATTACH_VIDEO` | `false` | Habilita adjuntar video. Requiere `INCIDENT_ATTACH_EVIDENCE=true`. |
| `INCIDENT_MAX_VIDEO_MB` | `50` | Tamano maximo de video antes de omitir el upload. |
| `INCIDENT_REQUEST_TIMEOUT_MS` | `15000` | Timeout maximo para requests HTTP de providers. |
| `DEBUG_INCIDENTS` | `false` | Activa logs tecnicos sanitizados de clasificacion, requests, dedup, attachments y lifecycle. No debe imprimir tokens, PATs ni headers `Authorization`. |

### Gates de seguridad

Un incidente automatico solo se crea cuando se cumple todo lo siguiente:

| Gate | Valor requerido |
| --- | --- |
| Decision | `BUG_AUTO` |
| Confidence | `HIGH` |
| `AUTO_CREATE_INCIDENTS` | `true` |
| `INCIDENT_MODE` | `create` |
| `INCIDENT_PROVIDER` | distinto de `none` |
| Provider validate-only | `false` |

Si cualquiera de estos gates no se cumple, no se crea incidente real. El resultado queda como preview, validacion, skip o duplicado segun corresponda.

### Azure DevOps

Variables:

| Variable | Descripcion |
| --- | --- |
| `AZURE_DEVOPS_ORGANIZATION` | Organizacion Azure DevOps destino. |
| `AZURE_DEVOPS_PROJECT` | Proyecto Azure DevOps destino. |
| `AZURE_DEVOPS_PAT` | Personal Access Token. Es secreto y nunca debe versionarse. |
| `AZURE_DEVOPS_VALIDATE_ONLY` | Ejecuta creacion Azure en modo validate-only cuando aplica. |
| `AZURE_DEVOPS_ATTACH_EVIDENCE` | Legacy/fallback para evidencias. `INCIDENT_ATTACH_EVIDENCE` tiene prioridad si esta definido. |
| `AZURE_DEVOPS_ATTACH_VIDEO` | Legacy/fallback para video. `INCIDENT_ATTACH_VIDEO` tiene prioridad si esta definido. |
| `AZURE_DEVOPS_MAX_VIDEO_MB` | Legacy/fallback para tamano maximo de video. `INCIDENT_MAX_VIDEO_MB` tiene prioridad si esta definido. |
| `AZURE_DEVOPS_REQUEST_TIMEOUT_MS` | Legacy/fallback para timeout HTTP. `INCIDENT_REQUEST_TIMEOUT_MS` tiene prioridad si esta definido. |
| `AZURE_DEVOPS_CLOSED_STATES` | Estados cerrados para dedup, separados por coma. Si queda vacio se usan defaults internos. |

### Jira

Variables:

| Variable | Descripcion |
| --- | --- |
| `JIRA_BASE_URL` | URL raiz de Jira Cloud. Ejemplo: `https://empresa.atlassian.net`. |
| `JIRA_PROJECT_KEY` | Key del proyecto Jira. Ejemplo: `SCRUM`. |
| `JIRA_EMAIL` | Correo de la cuenta usada para Basic Auth. |
| `JIRA_API_TOKEN` | API Token de Atlassian. No usar contrasena. Es secreto y nunca debe versionarse. |
| `JIRA_ISSUE_TYPE` | Tipo de issue a crear. Debe coincidir con un issue type disponible en el proyecto. Ejemplos: `Bug`, `Error`, `Task`. |
| `JIRA_VALIDATE_ONLY` | `true` permite validacion/dedup read-only sin creacion real. `false` permite crear solo si tambien pasan los gates generales. |

Harnesses manuales de Jira:

| Variable | Uso |
| --- | --- |
| `JIRA_RUN_REAL_VALIDATION` | Habilita validacion manual de conexion. |
| `JIRA_RUN_REAL_DEDUP_TEST` | Habilita prueba manual read-only de dedup. |
| `JIRA_RUN_REAL_CREATE` | Habilita creacion manual controlada. No dejar en `true`. |
| `JIRA_RUN_REAL_ATTACHMENT_TEST` | Habilita prueba manual controlada de attachments. |
| `JIRA_TEST_ISSUE_KEY` | Issue destino para pruebas manuales de attachments. |

Estos flags son temporales, no deben quedar en `true` permanentemente y no forman parte del flujo normal de Playwright.

### Trello

Variables:

| Variable | Descripcion |
| --- | --- |
| `TRELLO_BASE_URL` | URL base de la API. Default: `https://api.trello.com/1`. |
| `TRELLO_API_KEY` | API Key de la app/Power-Up de Trello. Tratar como secreto si la politica del equipo lo requiere. |
| `TRELLO_TOKEN` | Token autorizado del usuario. Es secreto. |
| `TRELLO_BOARD_ID` | ID o shortLink del board destino. |
| `TRELLO_LIST_ID` | ID de la lista donde se crearan las cards. |
| `TRELLO_VALIDATE_ONLY` | `true` permite validacion/dedup sin creacion real. `false` permite crear solo si tambien pasan los gates generales. |
| `TRELLO_MAX_ATTACHMENT_MB` | Limite maximo por attachment. Default conservador para Trello Free: `10` MB. |

Harnesses manuales de Trello:

| Variable | Uso |
| --- | --- |
| `TRELLO_RUN_REAL_AUTH_TEST` | Habilita validacion manual de autenticacion. |
| `TRELLO_RUN_REAL_VALIDATION` | Habilita validacion manual de board/lista. |
| `TRELLO_RUN_REAL_DEDUP_TEST` | Habilita prueba manual read-only de dedup. |
| `TRELLO_RUN_REAL_CREATE` | Habilita creacion manual controlada. No dejar en `true`. |
| `TRELLO_RUN_REAL_ATTACHMENT_TEST` | Habilita prueba manual controlada de attachments. |
| `TRELLO_RUN_LISTS` | Lista boards/listas para configurar IDs. |
| `TRELLO_TEST_CARD_ID` | Card destino para pruebas manuales de attachments. |

Estos flags son temporales, no deben quedar en `true` permanentemente y no forman parte del flujo normal de Playwright.

### Ejemplos de configuracion

Azure DevOps sin secretos:

```env
INCIDENT_PROVIDER=azure
AUTO_CREATE_INCIDENTS=false
INCIDENT_MODE=preview

AZURE_DEVOPS_ORGANIZATION=
AZURE_DEVOPS_PROJECT=
AZURE_DEVOPS_PAT=
```

Jira sin secretos:

```env
INCIDENT_PROVIDER=jira
AUTO_CREATE_INCIDENTS=false
INCIDENT_MODE=preview

JIRA_BASE_URL=https://empresa.atlassian.net
JIRA_PROJECT_KEY=SCRUM
JIRA_EMAIL=
JIRA_API_TOKEN=
JIRA_ISSUE_TYPE=Error
JIRA_VALIDATE_ONLY=true
```

Trello sin secretos:

```env
INCIDENT_PROVIDER=trello
AUTO_CREATE_INCIDENTS=false
INCIDENT_MODE=preview

TRELLO_API_KEY=
TRELLO_TOKEN=
TRELLO_BOARD_ID=
TRELLO_LIST_ID=
TRELLO_VALIDATE_ONLY=true
TRELLO_MAX_ATTACHMENT_MB=10
```

### Modos recomendados

Desarrollo / local seguro:

```env
INCIDENT_PROVIDER=none
AUTO_CREATE_INCIDENTS=false
INCIDENT_MODE=preview
```

Preview con provider:

```env
INCIDENT_PROVIDER=jira
AUTO_CREATE_INCIDENTS=false
INCIDENT_MODE=preview
```

Ejecucion real controlada:

```env
INCIDENT_PROVIDER=jira
AUTO_CREATE_INCIDENTS=true
INCIDENT_MODE=create
JIRA_VALIDATE_ONLY=false
```

Usar `create` solo de forma consciente, con credenciales correctas y validando que el provider no este en validate-only.

### Evidencias

El flujo puede adjuntar screenshot, trace y video cuando existen y cuando la configuracion lo permite. El video requiere `INCIDENT_ATTACH_EVIDENCE=true` e `INCIDENT_ATTACH_VIDEO=true`.

Estados posibles de evidencias:

| Estado | Significado |
| --- | --- |
| `LINKED` | Evidencia adjuntada o vinculada correctamente. |
| `ALREADY_LINKED` | Ya existia una evidencia equivalente y no se volvio a adjuntar. |
| `SKIPPED` | Omitida por configuracion o por condicion esperada. |
| `FILE_NOT_FOUND` | El archivo esperado no existe. |
| `EMPTY_FILE` | El archivo existe pero esta vacio. |
| `UPLOAD_ERROR` | Fallo el upload al provider. |
| `LINK_ERROR` | Fallo el vinculo entre evidencia e incidente. |
| `FILE_TOO_LARGE` | El archivo excede el limite permitido. |

Ejemplo de resumen:

```text
Screenshot:
YA EXISTIA - NO SE VOLVIO A ADJUNTAR

Trace:
NO ADJUNTADO - ARCHIVO MAYOR A 10 MB
```

### Dedup

La firma funcional comun evita crear duplicados por la misma causa:

```text
QA-AUTO-SIGNATURE:
caseId|probableCause|view
```

Ejemplo:

```text
E37-AM-01.01.1|OPTION_NOT_AVAILABLE|Cuentas Contables
```

El dedup no usa solo el titulo. Azure compara la firma en `Description`, Jira la compara en `Description`/ADF y Trello la compara en `desc`.

### Dedup de evidencias

Los attachments tambien evitan duplicados:

| Provider | Estrategia |
| --- | --- |
| Azure DevOps | Metadata/comment con `QA-AUTO-EVIDENCE`. |
| Jira | Filename determinista. |
| Trello | Filename determinista. |

### Reportes de incidentes

El reporter agrega attachments de Playwright para inspeccion:

| Attachment | Contenido |
| --- | --- |
| `incident-preview` | Detalle tecnico completo del incidente. |
| `incident-provider-summary` | Resumen del provider: `provider`, `status`, `incidentId`, URL, screenshot, trace y video. |

### Seguridad

No versionar:

| Secreto o dato sensible |
| --- |
| `.env` |
| `PAT` / `AZURE_DEVOPS_PAT` |
| `JIRA_API_TOKEN` |
| `TRELLO_TOKEN` |
| `TRELLO_API_KEY` si se considera sensible |
| Headers `Authorization` |

`.env.example` nunca debe contener secretos reales. El archivo `.env` esta incluido en `.gitignore`.

### Comandos de validacion manual

Los siguientes comandos estan pensados para validaciones manuales controladas. Dejar los flags en `false` despues de usarlos.

Jira read-only:

```powershell
$env:JIRA_RUN_REAL_VALIDATION='true'
npx tsx scripts/jira/validate-jira-connection.ts

$env:JIRA_RUN_REAL_DEDUP_TEST='true'
npx tsx scripts/jira/test-jira-dedup.ts
```

Trello read-only:

```powershell
$env:TRELLO_RUN_REAL_AUTH_TEST='true'
npx tsx scripts/trello/test-trello-auth.ts

$env:TRELLO_RUN_LISTS='true'
npx tsx scripts/trello/list-board-lists.ts

$env:TRELLO_RUN_REAL_VALIDATION='true'
npx tsx scripts/trello/validate-trello-connection.ts

$env:TRELLO_RUN_REAL_DEDUP_TEST='true'
npx tsx scripts/trello/test-trello-dedup.ts
```

  ### Diagnostico de fallos en el reporte HTML

  Todos los specs deben importar `test` desde `@fixtures/base.fixture`. Ese fixture agrega una capa global de diagnóstico cuando un test falla y hace que la sección **Error** del reporte HTML incluya un bloque funcional.

  Formato esperado:

  ```text
  DIAGNÓSTICO
  Caso: E4-GF-02.2.1
  Fase: [VAL] Confirmar resultado de proceso
  Causa probable: PROCESSING_TIMEOUT
  Mensaje: El proceso no llego al estado final esperado dentro del tiempo maximo.
  Rol esperado: Gestor GF
  URL final: https://...
  Proyecto esperado: chromium-gestorGF
  Proyecto usado: chromium
  ```

  Causas oficiales:

| Causa                | Uso                                                     |
| -------------------- | ------------------------------------------------------- |
| `AUTH_FAILURE`       | No autentico, cayo en Microsoft Login o fallo la sesion |
| `NAV_FAILURE`        | No encontro menu, seccion o vista                       |
| `PERMISSION_FAILURE` | Accion o vista no disponible para el rol usado          |
| `DATA_FAILURE`       | Fixture, archivo o dato faltante/invalido               |
| `PROCESSING_TIMEOUT` | Backend/proceso no termino en el estado esperado        |
| `ASSERTION_FAILURE`  | La UI no mostro el resultado esperado                   |
| `ENV_FAILURE`        | Entorno inestable, sesion expirada o estado no apto     |

---

  ## Mejores prácticas

  **Selectores — orden de preferencia:**

  1. `data-testid` (solicitar a Front si no existe)
  2. Roles semánticos: `getByRole('button', { name: '...' })`
  3. Texto visible: `getByText('...')`
  4. XPath como último recurso — centralizar en `pages/shared/legacy-selectors.ts`

  **Assertions:**

  - Usar siempre assertions web-first: `expect(locator).toBeVisible()`, `.toBeEnabled()`
  - No usar `page.waitForTimeout()` ni `networkidle` como estrategia por defecto
  - No usar `||` con locators — usar `.or()` de Playwright

  **Organización de código:**

  - No reimplementar login fuera de `LoginPage.ts`
  - No hardcodear credenciales en specs — usar `src/config/env.ts`
  - No mezclar lógica de descarga, assertions y navegación en el mismo archivo si puede reutilizarse en `src/utils/`
  - Antes de crear helpers nuevos, verificar si ya existen en `tests/e2e/_globalshared/` o en `tests/e2e/<bloque>/_shared/`

  **Importaciones:**

  ```typescript
  import { test, expect } from '@fixtures/base.fixture'  // ✅ correcto
  import { test, expect } from '@playwright/test'         // ⚠️ solo si el fixture no alcanza
  ```
---

  ## Aliases de TypeScript

  | Alias             | Ruta real            | Uso típico                            |
  | ----------------- | -------------------- | -------------------------------------- |
  | `@pages/*`      | `pages/*`          | Importar Page Objects                  |
  | `@config/*`     | `src/config/*`     | Acceder a `env.ts`                    |
  | `@fixtures/*`   | `tests/fixtures/*` | Importar `base.fixture`               |
  | `@components/*` | `pages/shared/*`   | Importar `Sidebar`, selectores legacy |
  | `@data/*`       | `fixtures/data/*`  | Importar datos de prueba JSON          |

  > **Nota sobre `@components`:** El alias apunta a `pages/shared/` por razones históricas. Los componentes compartidos viven ahí junto a los selectores legacy.
  >

---

  ## CI/CD

  GitHub Actions ejecuta smoke tests en push/PR a `main`:

  - Node.js 20
  - Instalación de Chromium
  - `npm run test:login`

  Ver `.github/workflows/playwright.yml`.

---

  ## Documentación adicional

  | Documento                      | Ubicación                                                | Contenido                            |
  | ------------------------------ | --------------------------------------------------------- | ------------------------------------ |
  | Catálogos de casos de prueba  | `docs/catalogs/`                                        | MD por bloque (1, 2, 3)              |
  | Seguimiento de implementación | `docs/tracking/seguimiento_casos_prueba.md`             | Estado real de cada spec             |
  | Guía para AI agents           | `AGENTS.md`                                             | Comandos, convenciones, auth, flujos |
  | Skill de implementación       | `.codex/skills/playwright-test-implementation/SKILL.md` | Workflow y patrones para AI agents   |

## Compatibilidad con IA

El framework fue diseñado para que asistentes como Codex puedan generar nuevos casos de prueba siguiendo los patrones existentes.

Las reglas de implementación se encuentran en:

- AGENTS.md
- SKILL.md

Antes de implementar nuevos casos, el agente debe reutilizar helpers existentes y respetar la arquitectura del framework.
