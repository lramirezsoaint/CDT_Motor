# Catalogo de casos de prueba

---

### Caso de prueba: Escenario 1
- Implementado: No

**Titulo:** Validar que el rol de Gestor de Gastos Financieros tiene acceso al sistema

**Descripcion:** Validad que un usuario con el rol de Gestor de Gastos Financieros pueda autenticarse al sistema.

**Precondiciones:**
1. Usuario creado en el sistema con rol de Gestor de Gastos Financieros
2. El usuario debe ingresar con un rol de Gestor de Gastos Financieros para ejecutar cualquier acción.

**Datos:**
- Rol: Adiminstrador de gasto
- Correo: JuanAntonH@pacificotest.com.pe
- Contraseña: Magu407262123

**Pasos:**
1. El usuario accede a la página de inicio de sesion (https://distribuciongastos.pacificotest.com.pe/)
2. Ingresa el correo y contraseña y da click en el botón "inicio de sesion"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-En la parte inferior del sidebar, se muestra el nombre y rol, al hacer click se muestra el correo y la accion de cerrar sesion

---

### Caso de prueba: Escenario 2
- Implementado: No

**Titulo:** Validar que el sistema permita cambiar de una distribución

**Descripcion:** Validar que se realice el cambio de la distribución.

**Precondiciones:**
1. El usuario debe ingresar con un rol de Gestor de Gastos Financieros para ejecutar cualquier acción.

**Datos:**
- Periodo distribucion:
- Distribucion destino:

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario llena el campo periodo con el periodo de distribucion. 
3. Se cambia la pantalla con las distribuciones dentro del periodo.
4. El usuario busca la "Distribución destino" y hace click en "Distribución destino". 
5. Se levanta el modal y se muestra el texto "La información que se mostrará corresponde a la distribución seleccionada y periodo asociado a ella"
6. El usuario, el usuario da clic en "Aceptar"

**Resultado esperado:**
Se muestra los datos selecionado correctamente
1-Se actualiza el dropdown principal con la seleccion
2-La distribucion selecionada queda marca en celeste
3-Los datos ingresados a esa distribucion me muestra correctamente
4-En la seccion de procesos muestra el estado de la distribucion selecionada

---

### Caso de prueba: Escenario 3
- Implementado: No

**Titulo:** Validar que se pueda visualizar el estado de la ejecucion de la distribución desde el menú de acciones

**Descripcion:** Validar que se pueda visualizar el estado de una distribución

**Precondiciones:**
1. La distribución debe estar creada y visible en la tabla de distribución.

**Datos:**
- Campos del formulario
- Nombre(que valores acepta)
- Periodo
- Tipo
- Tasa de cambio
- Secciones

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona el icono "ojo" para visualizar el registro seleccionado
3. Se levanta el modal y se muestra la información de progreso de la distribución selecionada.

**Resultado esperado:**
Se muestra los datos creados correctamente
Se levanta un modal con la información del porciento de avance de la corrida por Fase y proceso
Si el estado es ''Creada'', todas sus fases mostrarán ''Sin ejecutar 0%''.

---

### Caso de prueba: Escenario 4
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo Cuentas Contables definido en el proceso Parametrizacion

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. debe estar cargado el archivo Cuentas Contables.

**Datos:**
- Archivo Líneas ''REAL Cuentas Contables GF'' definido en el proceso de Gastos

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Parametrizacion" > "Cuentas Contables".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Cuentas Contables", con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesar archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.