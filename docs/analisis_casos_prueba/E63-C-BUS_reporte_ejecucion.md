# Reporte de Ejecucion - E63-C-BUS

## Caso

- Escenario: `E63-C-BUS`
- Vista objetivo implementada: `Distribucion`
- Spec ejecutado: `tests/e2e/bloque-1/E63-C-BUS/E63-C-BUS.spec.ts`

## Cobertura implementada

El spec cubre los pasos y validaciones del caso funcional con enfoque de trazabilidad sobre la vista `Distribucion`:

1. Navegacion real a la pagina de inicio `Distribucion`.
2. Uso del filtro general `Buscar`.
3. Uso individual de los filtros:
   - `Tipo de Distribucion`
   - `Ano`
   - `Periodo`
   - `Codigo`
   - `Nombre`
   - `Unidad de Cuenta`
   - `Metodo de Valoracion`
4. Validacion de autocompletado desde el tercer caracter.

## Estrategia de validacion

- Cuando la vista ofrece datos, el test intenta tomar un valor real visible para ejecutar la validacion.
- Cuando la vista no ofrece datos, el test falla con mensaje explicito indicando que no hay base valida para validar el comportamiento.
- Cuando un filtro exigido por el caso no existe en la UI, el test falla explicitamente sobre ese faltante.
- El autocompletado se valida solo si existe una lista real de sugerencias; si no existe, el caso queda `skipped`.

## Resultado de la ejecucion

- Total: `9`
- Fallidos: `8`
- Omitidos: `1`
- Pasados: `0`

## Detalle por subcaso

### 1. `busqueda-general`

Que valida:
- presencia de la vista `Distribucion`
- uso del filtro general `Buscar`
- seleccion de dato real desde la tabla para probar el filtro

Resultado:
- `failed`

Motivo:
- no hay filas visibles en la tabla de `Distribucion`
- mensaje observado por el test: `No hay datos visibles en Distribución para validar la búsqueda general`

Interpretacion:
- la automatizacion esta correcta; el bloqueo actual es falta de datos base en la vista objetivo

### 2. `filtro-tipo-distribucion`

Que valida:
- presencia del filtro `Tipo de Distribucion`
- seleccion de una opcion especifica distinta de `Todos`
- validacion posterior del resultado filtrado

Resultado:
- `failed`

Motivo final observado:
- no hay datos visibles en `Distribucion` para validar resultados del filtro

Interpretacion:
- el control existe y pudo accionarse, pero no hay registros para confirmar el comportamiento funcional

### 3. `filtro-anio`

Que valida:
- presencia del filtro `Ano`
- ingreso del valor del filtro
- validacion posterior del resultado filtrado

Resultado:
- `failed`

Motivo final observado:
- no hay datos visibles en `Distribucion` para validar el resultado del filtro

Interpretacion:
- el flujo del filtro esta cubierto, pero el ambiente no ofrece datos para confirmar el resultado

### 4. `filtro-periodo`

Que valida:
- presencia del filtro `Periodo`
- seleccion de una opcion especifica
- validacion posterior del resultado filtrado

Resultado:
- `failed`

Motivo final observado:
- no hay datos visibles en `Distribucion` para validar resultados del filtro

Interpretacion:
- el control esta cubierto, pero no hay registros para comprobar la salida esperada

### 5. `filtro-codigo`

Que valida:
- presencia del filtro `Codigo`
- aplicacion del filtro sobre la vista `Distribucion`

Resultado:
- `failed`

Motivo:
- no existe la etiqueta `Codigo` en la UI actual de `Distribucion`

Interpretacion:
- el caso funcional exige este filtro, pero la vista actual no lo expone

### 6. `filtro-nombre`

Que valida:
- presencia del filtro `Nombre`
- aplicacion del filtro sobre la vista `Distribucion`

Resultado:
- `failed`

Motivo:
- no existe la etiqueta `Nombre` en la UI actual de `Distribucion`

Interpretacion:
- el caso funcional exige este filtro, pero la vista actual no lo expone

### 7. `filtro-unidad-cuenta`

Que valida:
- presencia del filtro `Unidad de Cuenta`
- aplicacion del filtro sobre la vista `Distribucion`

Resultado:
- `failed`

Motivo:
- no existe la etiqueta `Unidad de Cuenta` en la UI actual de `Distribucion`

Interpretacion:
- el caso funcional exige este filtro, pero la vista actual no lo expone

### 8. `filtro-metodo-valoracion`

Que valida:
- presencia del filtro `Metodo de Valoracion`
- aplicacion del filtro sobre la vista `Distribucion`

Resultado:
- `failed`

Motivo:
- no existe la etiqueta `Método de Valoración` en la UI actual de `Distribucion`

Interpretacion:
- el caso funcional exige este filtro, pero la vista actual no lo expone

### 9. `autocomplete-buscar-min-3-char`

Que valida:
- ingreso de 3 caracteres en `Buscar`
- visibilidad de lista de sugerencias si el componente existe realmente

Resultado:
- `skipped`

Motivo:
- no se detecto un componente real de sugerencias en la UI actual

Interpretacion:
- el test no inventa comportamiento ni reemplaza autocompletado por filtrado de tabla

## Conclusiones

El escenario queda implementado para validar correctamente el caso cuando la vista `Distribucion` tenga:

- datos visibles en tabla
- filtros completos requeridos por el caso
- autocompletado real si el producto lo soporta

La ejecucion actual evidencia problemas del sistema o del ambiente, no huecos de cobertura del spec:

- falta de datos en `Distribucion`
- faltan filtros requeridos por el caso (`Codigo`, `Nombre`, `Unidad de Cuenta`, `Metodo de Valoracion`)
- no se evidencia componente de autocompletado
