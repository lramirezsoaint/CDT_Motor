# Lessons Learned Block 3

## Reglas obligatorias

- Reusar `@fixtures/base.fixture`; no crear autenticacion paralela.
- Reusar `storageState.json` y `LoginPage` cuando sea necesario regenerar sesion.
- Mantener cada spec independiente y enfocado en un resultado de negocio.
- Crear helpers solo cuando eviten duplicacion real entre casos GF.
- Usar IDs del catalogo exactamente como vienen en la fuente.

## Selectores a evitar

- XPath absoluto salvo fallback encapsulado.
- `locatorA || locatorB`; usar `.or(...)` o condicion explicita.
- Selectores por posicion cuando exista rol, texto visible o contenedor de negocio.
- Fallbacks que cambien el modulo bajo prueba.

## Waits

- Preferir `expect(locator).toBeVisible()`, `toBeEnabled()` y `toHaveURL()`.
- Evitar `waitForTimeout()`.
- Evitar `networkidle` como sincronizacion nueva.
- Esperar senales reales de UI: headings, botones, filas, dialogs o texto de fase.

## Autenticacion

- El setup de bloque 3 parte autenticado desde el storage state global.
- Para GF, validar que el selector superior quede en `Gastos Financieros`.
- Validar tambien el contexto de distribucion: debe quedar `Prueba QA` / `REAL` y con data esperada antes de crecer la suite.
- Si un caso requiere otro rol, usar variables de entorno o fixture existente; no hardcodear credenciales.
- No ejecutar casos de `Gestor de Gastos Financieros` con un `storageState` de Administrador: genera falsos fallos o falsos positivos por menus visibles que no corresponden al rol.
- Si solo existe sesion guardada de otro rol/contexto, no continuar la automatizacion hasta regenerar `storageState.json` desde el perfil/contexto correcto.
- El navegador limpio de Playwright puede entrar a un contexto funcional distinto al Chrome manual; si aparece `No hay distribuciones disponibles en el mes`, capturar desde el perfil Chrome correcto antes de tocar tests.

## Reutilizacion segura entre bloques

- No reutilizar validaciones de Bloque 1/Comunes para casos de Gestor GF salvo que el catalogo lo pida explicitamente.
- En Bloque 3, los permisos de gestor se validan contra el shell de Gastos Financieros: selector superior, rol visible, menus GF y ausencia de acciones prohibidas.
- `Comunes > Lineas` pertenece al flujo Administrador/Comunes; no debe usarse como precondicion para validar permisos de Gestor GF.
- Evitar asserts heredados como correos, nombres o textos de otro rol si el objetivo real es validar el modulo GF.
- No asumir que `data-testid="header-expense-type-trigger"` existe siempre; en la pantalla real el modulo puede estar expuesto solo por texto visible del header.
- El popover de columnas puede tardar o no montar al primer click; esperar el contenedor real y reintentar una vez sin `force`.

## Riesgos

- Algunos casos GF dependen de data previa visible en tablas o fases.
- Los flows destructivos requieren datos QA controlados.
- Hay escenarios del catalogo sin casos asociados; no automatizarlos hasta completar pasos y resultados.
- Los casos equivalentes a bloque 1 no deben duplicarse.
