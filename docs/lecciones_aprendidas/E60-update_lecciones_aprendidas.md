# E60 Update - Lecciones Aprendidas

## Objetivo

Documentar la actualización de `E60-C-01.5` y `E60-C-02.5` después del cambio funcional donde las columnas por defecto dejaron de depender de una acción manual del usuario y pasaron a mostrarse automáticamente.

## Problemas encontrados

### 1. Los tests antiguos validaban una interacción que ya no representa al negocio

Los casos originales seguían intentando:

- hacer click sobre checkboxes
- validar desmarcado manual
- confirmar persistencia luego de una acción del usuario

Ese comportamiento ya no representa el producto actual.

### 2. El modal y la tabla pueden diferir por errores tipográficos del frontend

En `Unidades de Cuenta - BBA/VFA` se observó una diferencia visual entre:

- `Subanal` / `Código Subanal` en el modal
- `Subcanal` / `Código Subcanal` en la tabla

Eso no debía generar un falso negativo del test.

### 3. Algunas corridas fallaron por navegación transitoria del entorno

Durante la validación aparecieron fallos de ambiente como:

- ausencia temporal del botón `Comunes`
- navegación a `chrome-error://chromewebdata/`

La relanzada confirmó que no era un problema del cambio funcional de los casos.

## Decisiones tomadas

### 1. Cambiar la lógica de los casos de “interacción manual” a “estado automático inicial”

Los dos tests quedaron enfocados en:

- validar que la tabla ya carga con columnas por defecto visibles
- abrir el modal solo para contrastar consistencia
- no hacer clicks de selección o deselección
- verificar estabilidad sin interacción del usuario

### 2. Reutilizar helpers compartidos para evitar lógica duplicada

Se consolidó la comparación entre headers de tabla y labels del modal usando helpers compartidos en:

- `tests/e2e/bloque-1/_shared/comunes-columns.ts`

Esto evitó repetir lógica entre `E60-C-01.5` y `E60-C-02.5`.

### 3. Normalizar variaciones reales de labels

Se incorporó una normalización adicional para absorber la variación `Subanal` -> `Subcanal`, manteniendo el test alineado a negocio real y no al typo de la UI.

## Patrones reutilizables

### 1. Si el sistema automatiza un comportamiento, el test debe validar estado inicial y no simulación manual

Regla práctica:

- antes: `click -> assert`
- ahora: `load -> assert`

### 2. El modal debe usarse como referencia de consistencia, no como excusa para reintroducir lógica obsoleta

Abrir el modal sigue siendo útil para validar:

- columnas por defecto identificadas
- columnas seleccionadas
- consistencia con la tabla

Pero ya no para forzar cambios manuales inexistentes.

### 3. Las diferencias textuales menores entre UI y tabla deben normalizarse cuando no alteran el negocio

Errores ortográficos del label no deben convertirse en fallos falsos si la columna funcional es la misma.

## Recomendaciones

- En futuros cambios de columnas, revisar primero si el negocio exige interacción manual o comportamiento automático.
- Evitar reusar pruebas viejas de toggle cuando el producto ya no expone esa interacción al usuario.
- Mantener el reporte ejecutivo basado en `results.json` para diferenciar mejor fallos de producto, data y ambiente.
