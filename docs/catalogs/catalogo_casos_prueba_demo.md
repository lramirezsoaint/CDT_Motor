# Catalogo de casos de prueba

---

## Escenario: E0-LOGIN-ADMIN-01
**Descripcion:** Validar que el sistema permite autenticarse con el rol de Administrador

### Caso de prueba: E0-LOGIN-ADMIN-01
- Implementado: No

**Titulo:** Validar que el rol Administrador tiene acceso al sistema

**Descripcion:** Validar que un usuario con el rol de Administrador pueda autenticarse al sistema.

**Precondiciones:**
1. Usuario creado en el sistema con rol Administrador de Gastos
2. El usuario debe ingresar con un rol Administrador de Gastos para ejecutar cualquier acción.

**Datos:**
- Rol: Adiminstrador de gasto
- Correo: psilvestre@pacificotest.com.pe
- Contraseña: MDG rocks!

**Pasos:**
1. El usuario accede a la página de inicio de sesión (https://distribuciongastos.pacificotest.com.pe/)
2. Ingresa el correo y contraseña y da click en el botón "inicio de sesión"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-En la parte inferior de sidebar, se muestra el nombre y rol

---

## Escenario: E41-DIS-01
**Descripcion:** Validar que el sistema permite visualizar una distribución desde el menú de acciones

### Caso de prueba: E41-DIS-01
- Implementado: No

**Titulo:** Validar que se pueda visualizar el estado de la ejecución de la distribución desde el menú de acciones

**Descripcion:** Validar que se pueda visualizar el estado de una distribución

**Precondiciones:**
1. El usuario debe ingresar con un rol Gestor de Asientos Manuales.
2. La distribución debe estar creada y visible en la tabla de distribución.

**Datos:**
- Campos de formulario
- Nombre(que valores acepta)
- período
- Tipo
- Tasa de cambio
- Secciones

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona el icono "ojo" para visualizar el registro seleccionado
3. Se levanta el modal y se muestra la información de progreso de la distribución seleccionada.

**Resultado esperado:**
Se muestra los datos creados correctamente
Se levanta un modal con la información de porciento de avance de la corrida por Fase y proceso

---

## Escenario: E61-AM-01
**Descripcion:** Validar que no se cargue un archivo de más de 30 Mb en la Parametrización de Asientos Manuales

### Caso de prueba: E61-AM-01.1
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Cuentas Contables definido en la parametrización de Asientos Manuales

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso para el período

**Precondiciones:**
1. El archivo Cuentas Contables debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Asientos Manuales.

**Datos:**
- Archivo ''REAL Cuentas Contables AM'' preparado para la prueba en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Cargar.
5. seleccionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

## Escenario: E10-AM-01
**Descripcion:** Validar la correcta ejecución de flujo de descarga en Parametrización de Asientos Manuales

### Caso de prueba: E10-AM-01.1
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Cuentas Contables definidos en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Cuentas Contables definido en el proceso de Parametrización de Asientos Manuales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E35-AM-01
**Descripcion:** Validar que el sistema pueda agregar un nuevo registro en el flujo de Asientos Manuales

### Caso de prueba: E35-AM-01.01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Cuentas Contables definido en la Parametrización de flujo de Asientos Manuales

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Cuenta Contable" de Cuenta Contable

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. La distribución está en estado creada.
3. Los valores de código Cuenta Contable debe ser único
4. La cuenta contable Los 2 primeros dígitos deben ser 40, 43 y 50, el 3er dígito 1 o 2; el 4to dígito entre 0 y 9 o una letra; y los bloques siguientes entre 01 y 99 o la combinación de letras, por ejemplo OO
5. Los campos obligatorios son Cuenta Contable, Nombre Cuenta Contable, Tipo de gasto, Código concepto, Concepto N1, Concepto N2, Concepto N3 y Concepto NIIF17.

**Datos:**
- Campos de formulario
- Cuenta Contable: 40.1.2.01.00.00
- Nombre Cuenta Contable: REPARACION Y MANTENIMIENTO
- Tipo de gasto: IF,0,1
- Niif17 Atribuible:ATRIBUIBLE
- Niif17 Tipo: GA, GM
- Niif17 Clase: FI, VA
- Código concepto: 30.05.04
- Concepto N1: Ingresos Financieros Netos
- Concepto N2: Arrendamiento
- Concepto N3: Otros costos relacionados a Arrendamiento
- Concepto NIIF17: Ingresos Financieros Netos

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Cuentas Contables".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-Se muestra el mensaje de éxito ¡Hecho! El registro se agregó sin problemas