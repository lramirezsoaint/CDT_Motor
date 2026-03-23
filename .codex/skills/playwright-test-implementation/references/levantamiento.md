# Levantamiento Del Codebase

## Alcance revisado

Se revisaron los archivos activos de automatización Playwright del repositorio `MotordeDistribucion`:

- `playwright.config.ts`
- `tests/fixtures/base.fixture.ts`
- `tests/e2e/**/*.spec.ts`
- `pages/**/*.ts`
- `setup/auth.setup.ts`
- `src/config/env.ts`
- `src/utils/*.ts`
- `README.md`

## Estado general

La base actual es pequeña pero usable. Tiene una dirección correcta para crecer:

- separación entre specs, fixtures y Page Objects
- aliases de TypeScript consistentes
- `globalSetup` con `storageState` para evitar relogin por prueba
- tags funcionales (`@smoke`, `@critical`, `@auth`, `@comunes`, `@distribucion`)
- utilitarios simples para descargas y lectura de Excel

También hay deuda técnica clara que impacta estabilidad y mantenibilidad:

- mezcla de autenticación dentro de Page Objects funcionales
- uso fuerte de XPath absolutos
- navegación defensiva con varios fallbacks poco deterministas
- dependencia frecuente de `networkidle`
- inconsistencias entre el README y la estructura real del repo

## Buenas prácticas ya presentes

### 1. Estructura base razonable

Los specs viven bajo `tests/e2e/` por módulo funcional y los Page Objects están separados por dominio. Eso facilita ubicar la automatización por feature.

### 2. Fixtures reutilizables

`tests/fixtures/base.fixture.ts` centraliza la construcción de `LoginPage`, `ComunesPage`, `DistribucionPage` y `Sidebar`. Para el tamaño actual del repo, esto está bien.

### 3. Reutilización de autenticación

`setup/auth.setup.ts` genera `storageState` y evita repetir login completo en cada prueba. Esto es correcto como base de suite.

### 4. Uso parcial de locators semánticos

En varias áreas ya se usa `getByRole`, `getByText`, `getByPlaceholder` y combinaciones con `.or(...)`. La intención es buena y debe preservarse.

### 5. Casos relativamente enfocados

Los specs implementados validan un resultado de negocio puntual por prueba. No intentan cubrir demasiado en una sola ejecución.

### 6. Datos y utilitarios separados

Hay datos en JSON y helpers específicos como `saveDownload` y `getHeaderRow`, lo cual evita duplicación en los specs.

## Problemas y riesgos detectados

### 1. Page Objects mezclan responsabilidades

`ComunesPage.openLineas()` ejecuta login y navegación al módulo. `DistribucionPage.ensureEnDistribuciones()` vuelve a implementar login manual. Esto rompe la idea de una sola responsabilidad y complica estabilizar la auth.

Consecuencia:

- si cambia el login, hay que tocar varios lugares
- la navegación funcional depende de credenciales y estados no propios del módulo
- se vuelve difícil distinguir fallas de autenticación vs fallas funcionales

### 2. Uso excesivo de `networkidle`

Aparece en setup, fixture y Page Objects. En aplicaciones modernas con requests de fondo, `networkidle` puede introducir esperas innecesarias o fallas intermitentes.

Casos visibles:

- `tests/fixtures/base.fixture.ts`
- `pages/auth/LoginPage.ts`
- `pages/comunes/ComunesPage.ts`
- `pages/distribucion/DistribucionPage.ts`
- `pages/shared/Sidebar.ts`

Mejor práctica:

- esperar URL esperada
- esperar visibilidad o habilitación del elemento objetivo
- esperar desaparición de loading real cuando exista

### 3. XPath absolutos como dependencia principal de fallback

El repo tiene un archivo central de selectores legacy, lo cual es mejor que dispersarlos, pero varios flujos siguen dependiendo de rutas XPath absolutas al DOM completo.

Riesgo:

- cualquier cambio menor del layout rompe el selector
- el selector no comunica intención funcional
- eleva mucho el costo de mantenimiento

Esto es especialmente delicado en:

- navegación de sidebar
- búsqueda en grid
- modal de crear distribución

### 4. Uso incorrecto de `||` con locators

En Playwright, un `Locator` es un objeto truthy. Expresiones como estas no implementan fallback real:

- `this.page.getByRole(...).first() || this.page.locator(...)`

El segundo locator nunca se usa. En este repo ocurre en:

- `pages/comunes/ComunesPage.ts` para `exportButton`
- `pages/comunes/ComunesPage.ts` para `addButton`

La alternativa correcta es:

- `locatorA.or(locatorB)` cuando aplique
- o visibilidad explícita y selección condicional

### 5. Fallbacks que cambian el objetivo funcional del test

`ComunesPage.openLineas()` intenta abrir `/comunes/lineas`, pero si no ve el buscador vuelve al home de Distribuciones y luego valida visibilidad del buscador combinado.

Eso puede volver verde una prueba que en realidad no quedó en el módulo correcto.

Regla recomendada:

- si el caso es de Comunes, la prueba debe fallar si Comunes no está disponible
- el fallback a otro módulo solo debería existir si el caso explícitamente acepta ese comportamiento

### 6. Expectativas debilitadas para “disponibilidad”

`DistribucionPage.expectNuevaDistribucionDisponible()` considera suficiente que se vea el título principal si el botón no aparece tras reintentar.

Eso reduce la fuerza de la aserción. “Pantalla cargada” no equivale a “acción disponible”.

### 7. Esperas estáticas

`Sidebar.openComunes()` usa `waitForTimeout(200)`. Aunque es corto, sigue siendo una espera fija que conviene reemplazar por una señal observable.

### 8. Convivencia de patrones viejos y nuevos sin criterios claros

Hay intentos de migrar a mejores locators, pero no siempre está definido cuándo:

- dejar un selector legacy encapsulado
- crear un método reusable en Page Object
- resolver el caso en el spec

La skill debe fijar ese criterio.

### 9. README desalineado con la realidad actual

El `README.md` habla de una estructura objetivo con carpetas como `tests/e2e/smoke/` y `critical/`, pero la estructura real actual está organizada por módulo (`auth`, `comunes`, `distribucion`).

La skill no debe asumir que el README refleja completamente el estado presente del repo.

## Observaciones por componente

### `tests/fixtures/base.fixture.ts`

Fortalezas:

- expone un punto único para fixtures compartidos

Mejoras:

- `beforeEach` hace `page.goto('/', { waitUntil: 'networkidle' })` para todos los casos, incluso cuando el test luego navega a otro flujo
- conviene que la skill no añada más navegación global salvo necesidad comprobada

### `pages/auth/LoginPage.ts`

Fortalezas:

- encapsula el login principal
- maneja el prompt “stay signed in” como opcional

Mejoras:

- usa `networkidle` al final del login
- mezcla detección de login page con heurísticas basadas en texto variable
- la skill debe reutilizar este Page Object y evitar replicar login fuera de aquí

### `pages/comunes/ComunesPage.ts`

Fortalezas:

- concentra interacción de módulo
- usa `locator.or(...)` en parte del flujo

Mejoras:

- hace login dentro del Page Object
- tiene fallback funcional riesgoso al home de Distribuciones
- contiene `||` sobre locators
- depende de XPath absoluto para búsqueda fallback

### `pages/distribucion/DistribucionPage.ts`

Fortalezas:

- encapsula el flujo principal de Distribuciones
- tiene interfaz tipada para creación

Mejoras:

- reimplementa login en `ensureEnDistribuciones()`
- usa muchas rutas XPath absolutas dentro del modal
- una aserción de disponibilidad puede pasar sin que la acción exista realmente

### `pages/shared/Sidebar.ts`

Fortalezas:

- centraliza navegación lateral
- combina locators semánticos con legado encapsulado

Mejoras:

- usa `waitForTimeout(200)`
- todavía depende de varios XPath de layout completo

## Reglas útiles para futuras implementaciones

### 1. Reusar primero lo ya estable

Antes de crear un nuevo flujo, revisar el spec más cercano del mismo módulo y el Page Object existente.

### 2. No reimplementar login

Si un caso necesita autenticación, la skill debe preferir:

- `storageState`
- `LoginPage`
- fixtures existentes

No debe meter autenticación en Page Objects funcionales nuevos.

### 3. No degradar el resultado esperado

Si el caso dice que debe existir un botón, modal o acción, la aserción debe validar exactamente eso. No sustituirlo por “la página cargó”.

### 4. Preferir espera por estado observable

La skill debe favorecer:

- `expect(locator).toBeVisible()`
- `expect(locator).toBeEnabled()`
- `expect(page).toHaveURL(...)`
- desaparición de loading real

Y evitar:

- `waitForTimeout()`
- `networkidle` como sincronización por defecto

### 5. Tratar los selectores legacy como deuda controlada

Se pueden usar si no hay alternativa razonable, pero:

- deben quedar encapsulados
- deben documentarse como fallback
- no deben multiplicarse innecesariamente

### 6. Mantener los casos angostos

Cada test debe comprobar un resultado de negocio principal. Si el caso requiere muchos pasos, la skill debe usar `test.step()` para separar intención, no para meter múltiples objetivos distintos.

## Ajustes que la skill debe incorporar

La skill debería:

- leer este levantamiento antes de proponer cambios en este repo
- prohibir rutas absolutas externas al skill
- tratar `README.md` como contexto secundario, no como verdad única
- forzar la reutilización de `LoginPage` y fixtures antes de crear auth nueva
- advertir explícitamente contra `||` con locators
- evitar fallbacks que cambien el módulo o relajen la aserción de negocio
- distinguir entre “patrones observados” y “patrones recomendados”

## Conclusión

El codebase no está mal planteado; de hecho tiene una base recuperable y mejor que una colección de scripts aislados. El problema principal no es de arquitectura global, sino de consistencia: coexistencia de buenas prácticas parciales con atajos frágiles. La skill debe ayudar a empujar el repo hacia el patrón bueno, sin asumir que ese patrón ya domina toda la implementación actual.
