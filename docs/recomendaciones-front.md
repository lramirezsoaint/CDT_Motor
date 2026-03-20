# Recomendaciones para Front End

## 1. Exponer `data-testid`
Ejemplos:
- `data-testid="btn-nueva-distribucion"`
- `data-testid="cmb-tipo"`
- `data-testid="txt-version"`
- `data-testid="tbl-distribuciones"`

## 2. Acordar nombres consistentes por módulo
- `dist-` para distribución
- `com-` para comunes
- `modal-` para modales

## 3. Evitar cambios de texto visibles como único selector
Cuando cambie la redacción de botones o labels, el selector semántico basado solo en texto se rompe.

## 4. Compartir antes los componentes de Bloques 3/2/4/5
Aunque la salida completa sea a fin de mes, entregar antes componentes críticos ayuda a preparar automatización.
