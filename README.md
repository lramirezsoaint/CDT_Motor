- # CDT_Motor — Framework Playwright para Motor de Distribución

  Framework de automatización E2E para testing de **Motor de Distribución** (Pacífico). Organizado por bloques funcionales con soporte multi-rol (Administrador, Gestor de Gastos Técnicos, Gestor de Gastos Financieros).

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

  El framework soporta 3 proyectos con autenticación separada:

| Proyecto                  | Rol                          | Storage State              |
| ------------------------- | ---------------------------- | -------------------------- |
| `chromium`              | Administrador                | `.auth/admin.json`       |
| `chromium-gestorGF`     | Gestor de Gastos Financieros | `.auth/gestorGF.json`    |
| `chromium-gestorGT`     | Gestor de Gastos Técnicos   | `.auth/gestorGT.json`    |

### Alcance de proyectos

Playwright filtra los specs por proyecto desde `playwright.config.ts`. Esto evita que VS Code ejecute un caso GF con credenciales de Administrador.

| Proyecto            | Ejecuta principalmente                          |
| ------------------- | ----------------------------------------------- |
| `chromium`          | `auth/`, `bloque-1/` y casos `E0-LOGIN-ADMIN-*` |
| `chromium-gestorGF` | `bloque-3/` y procesos de Gastos Financieros    |
| `chromium-gestorGT` | `bloque-2/`                                     |

Si un storage state existe pero esta vacío, no se usa como sesión valida. Para regenerarlo en PowerShell:

```powershell
$env:AUTH_ROLE='gestorGF'; node scripts/auth/create-auth.js
$env:AUTH_ROLE='gestorGT'; node scripts/auth/create-auth.js
$env:AUTH_ROLE='admin'; node scripts/auth/create-auth.js
```

### Agregar un nuevo rol

Para agregar un nuevo rol al framework:

1. Agregar entrada en `src/config/roles.json`:
   ```json
   { "id": "nuevoRol", "envPrefix": "MOTOR_NUEVOROL" }
   ```
2. Agregar configuración completa en `src/config/roles.ts` (array `ROLES`)
3. Agregar credenciales en `.env`:
   ```
   MOTOR_NUEVOROL_USERNAME=
   MOTOR_NUEVOROL_PASSWORD=
   ```
4. Ejecutar `AUTH_ROLE=nuevoRol node scripts/auth/create-auth.js`

Los archivos `playwright.config.ts`, `env.ts` y `create-auth.js` se actualizan automáticamente.

---

  ## Comandos disponibles

  ### Ejecución de tests

  | Comando                              | Descripción                                     |
  | ------------------------------------ | ------------------------------------------------ |
  | `npm test`                         | Suite completa con historial y reporte ejecutivo |
  | `npm run test:raw`                 | Playwright directo sin hooks de historial        |
  | `npm run test:smoke`               | Tests etiquetados con`@smoke`                  |
  | `npm run test:critical`            | Tests etiquetados con`@critical`               |
  | `npm run test:headed`              | Ejecuta con navegador visible                    |
  | `npm run test:ui`                  | Abre la UI de Playwright                         |
  | `npm run test:list`                | Lista todos los tests disponibles                |
  | `npm run test:block1:sequential`   | Bloque 1 secuencial (workers=1)                  |
  | `npm run test:bloque2`             | Solo Bloque 2 (Gastos Técnicos)                 |
  | `npm run test:bloque3:gestorGF` | Bloque 3 con rol Gestor GF                         |
  | `npm run test:bloque2:gestorGT` | Bloque 2 con rol Gestor GT                         |

  ### Ejecutar un spec especifico

  ```bash
  npx playwright test tests/e2e/bloque-3/E9-GF-03.3/E9-GF-03.3.spec.ts
  ```
  ### Reportes

  | Comando                      | Descripción                                |
  | ---------------------------- | ------------------------------------------- |
  | `npm run report`           | Abre reporte HTML de Playwright             |
  | `npm run report:executive` | Genera reporte ejecutivo HTML con dashboard |
  | `npm run cases:bd1`        | Exporta matriz CSV de casos Bloque 1        |

  ## Estructura del proyecto

  ```
  CDT_Motor/
  |-- playwright.config.ts           # Config de Playwright, proyectos y storage state por rol
  |-- package.json                   # Scripts de test y reportes
  |-- README.md
  |-- AGENTS.md
  |-- docs/
  |   |-- catalogs/                  # Catalogos MD/JSON de CP
  |   `-- tracking/                  # Seguimiento de implementacion
  |-- fixtures/
  |   |-- data/                      # Datos globales y por bloque
  |   `-- file/                      # Archivos usados en carga
  |-- pages/                         # Page Objects
  |   |-- auth/
  |   |-- comunes/
  |   |-- distribucion/
  |   |-- bloque3/
  |   `-- procesos/
  |-- src/
  |   |-- config/                    # env.ts, roles.ts, roles.json
  |   |-- utils/
  |   `-- components/
  |-- tests/
  |   |-- fixtures/base.fixture.ts    # Fixture global con diagnostico
  |   `-- e2e/
  |       |-- _globalshared/           # comportamiento tecnico comun
  |       |-- auth/
  |       |-- bloque-1/
  |       |   |-- _shared/               # helpers historicos BD1
  |       |   `-- ...
  |       |-- bloque-2/
  |       |   |-- _bloqueshared/         # negocio GT
  |       |   `-- ...
  |       `-- bloque-3/
  |           |-- _bloqueshared/         # negocio GF
  |           `-- ...
  |-- scripts/
  |   |-- auth/create-auth.js
  |   |-- runners/
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

  ### Obligatorios — todo spec debe tener al menos uno de cada categoría

  | Categoría | Tags                                                 | Descripción                    |
  | ---------- | ---------------------------------------------------- | ------------------------------- |
  | Bloque     | `@bloque1` / `@bloque2` / `@bloque3`           | Bloque funcional del test       |
  | Módulo    | `@comunes` / `@distribucion` / `@gf` / `@gt` | Módulo de la app que se testea |
  | Prioridad  | `@smoke` / `@critical` / `@regression`         | Cuándo debe correr             |

  **Ejemplo de spec con tags correctos:**

  ```typescript
  test('E4-GF-01.1 - Carga archivo con formato inválido',
    { tag: ['@bloque3', '@gf', '@critical', '@upload'] },
    async ({ page }) => {
      // ...
    }
  )
  ```
  ### Opcionales — se agregan según la feature que cubre el test

  | Tag             | Uso                       |
  | --------------- | ------------------------- |
  | `@upload`     | Carga de archivos         |
  | `@download`   | Descarga de archivos      |
  | `@columnas`   | Selector de columnas      |
  | `@procesos`   | Ejecución de procesos GF |
  | `@login`      | Tests de autenticación   |
  | `@busqueda`   | Tests de búsqueda        |
  | `@paginacion` | Tests de paginación      |

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
  npx ts-node scripts/reports/generate-executive-report.ts

  # Variante PDF del reporte ejecutivo
  npx ts-node scripts/reports/generate-executive-pdf-report.ts

  # Reporte de decisión para QA sign-off
  npx ts-node scripts/reports/generate-decision-report-from-playwright.ts

  # Merge de múltiples archivos JSON de resultados (PowerShell)
  ./scripts/reports/combine-results.ps1
  ```
---

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
  - Antes de crear helpers nuevos, verificar si ya existen en `tests/e2e/_globalshared/` o en `tests/e2e/<bloque>/_bloqueshared/`

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
  | `@config/*`     | `src/config/*`     | Acceder a`env.ts`                    |
  | `@fixtures/*`   | `tests/fixtures/*` | Importar`base.fixture`               |
  | `@components/*` | `pages/shared/*`   | Importar`Sidebar`, selectores legacy |
  | `@data/*`       | `fixtures/data/*`  | Importar datos de prueba JSON          |

  > **Nota sobre `@components`:** El alias apunta a `pages/shared/` por razones históricas. Los componentes compartidos viven ahí junto a los selectores legacy.
  >

---

  ## CI/CD

  GitHub Actions ejecuta smoke tests en push/PR a `main`:

  - Node.js 20
  - Instalación de Chromium
  - `npm run test:smoke`

  Ver `.github/workflows/playwright.yml`.

---

  ## Documentación adicional

  | Documento                      | Ubicación                                                | Contenido                            |
  | ------------------------------ | --------------------------------------------------------- | ------------------------------------ |
  | Catálogos de casos de prueba  | `docs/catalogs/`                                        | MD/JSON por bloque (1, 2, 3)         |
  | Seguimiento de implementación | `docs/tracking/seguimiento_casos_prueba.md`             | Estado real de cada spec             |
  | Guía para AI agents           | `AGENTS.md`                                             | Comandos, convenciones, auth, flujos |
  | Skill de implementación       | `.codex/skills/playwright-test-implementation/SKILL.md` | Workflow y patrones para AI agents   |
