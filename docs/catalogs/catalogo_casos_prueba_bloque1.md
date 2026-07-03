# Catalogo de casos de prueba

---

## Escenario: E0-LOGIN-ADMIN
**Descripcion:** Validar el correcto inicio de sesion segun el rol al que pertenece

### Caso de prueba: E0-LOGIN-ADMIN-01
- Implementado: No

**Titulo:** Validar que el rol adminsitrador tiene acceso al sistema

**Descripcion:** Validad que un usuario con el rol de Administrador pueda autenticarse al sistema.

**Precondiciones:**
1. "Usuario creado en el sistema con rol Administrador de Gastos
2. El usuario debe ingresar con un rol Administrador de Gastos para ejecutar cualquier acción.

**Datos:**
- Rol: Adiminstrador de gasto
- Correo: inetum.Fernando.Alva@pacifico.com.pe
- Contraseña: Bry.18AC!

**Pasos:**
1. El usuario accede a la página de inicio de sesion (https://distribuciongastos.pacificotest.com.pe/)
2. Ingresa el correo y contraseña y da click en el botón "inicio de sesion"

**Resultado esperado:**
El usuario accede correctamente al sistema
Se muestra el nombre y correo correctamente, en la parte inferior del sidebar
### Caso de prueba: E0-LOGIN-ADMIN-02
- Implementado: No

**Titulo:** Validar que el rol adminsitrador puede visualizar y modificar los archivos comunes

**Descripcion:** Validar que solo el rol Administrador de Gastos puede hacer uso total de las funcionalidades de la sección comunes

**Precondiciones:**
1. El usuario debe ingresar con un rol gestor de gastos y luego Administrador de Gastos

**Datos:**
- Archivos comunes Línea, Canales, Subcanal, Grupo Producto, Maestro UoA y Configuración de Parches únicamente a usuarios con el rol "Administrador de Gastos"

**Pasos:**
1. El usuario accede a la página de inicio de sesion
2. ingresa el correo y contraseña y da click en el botón "inicio de sesión"

**Resultado esperado:**
El sistema solo permite visualizar y modificar archivos comunes al rol "Administrador de Gastos"

---

## Escenario: E40-DIS-01
**Descripcion:** Validar que el sistema pueda crear una nueva distribucion

### Caso de prueba: E40-DIS-01
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de crear una nueva distribucion

**Descripcion:** Validar que se pueda crear una nueva distribucion desde el modal "Nueva Distribución"

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos.
2. por defecto debe ser Gastos Técnicos
3. Esta distribución no haya sido creada anteriormente.
4. El nombre se va formando con la información de los campos: Periodo, Tipo y Sección.
5. Los campos Tipo, Periodo y Secciones son select.

**Datos:**
- Campos del formulario
- Nombre: Periodo_Tipo_Sección
- Tipo: Real
- Periodo: catálogo con los periodos del año en curso, Ej: 202501, 202502.
- Versión: número entero con un decimal, Ej: 1.0, 1.1, 2.0
- Tasa de cambio: número entero de hasta 4 cifras con dos decimales, Ej:13.98, 1.09, 0.65, 1234.98
- Secciones: Flujo del mes, Ajuste del mes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona "Nueva Distribución".
3. Se levanta el modal con titulo "Crear distribución", el botón crear está deshabilitado
4. El usuario completa los campos y se habilita el botón crear.
5. El usuario preciona el botón crear
6. Se muestra un mesaje de exito.

**Resultado esperado:**
El sistema crea una nueva distribución correctamente y muestra un mensaje de exito ¡Hecho! El registro se agregó sin problemas

---

## Escenario: E40-DIS-02
**Descripcion:** Validar las reglas de negocio al crear una nueva distribucion

### Caso de prueba: E40-DIS-02 subida
- Implementado: No

**Titulo:** Validar que no se pueda crear una nueva distribucion porque no cumplen con las reglas definidas de negocio

**Descripcion:** Validar no se pueda crear una nueva distribucion porque no cumplen con las reglas definidas de negocio desde el modal "Nueva Distribución"

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos de Gastos.
2. por defecto debe ser Gastos Técnicos
3. Esta distribución ya ha sido creada anteriormente.
4. Solo se puede crear una distribución, no se puede editar.
5. El nombre se va formando con la información de los campos: Periodo, Tipo y Sección.
6. Los campos Tipo, Periodo y Secciones son select.

**Datos:**
- Todos los campos del formulario se han completado con los datos identicos a una distribución creada anteriormente
- Nombre
- Tipo
- Periodo
- Versión
- Tasa de cambio
- Secciones

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona "Nueva Distribución".
3. Se levanta el modal con titulo "Crear distribución", el botón crear está deshabilitado
4. El usuario completa los campos y se habilita el botón crear.
5. El usuario preciona el botón crear
6. Se muestra un mesaje de error.

**Resultado esperado:**
El sistema no crea una nueva distribucion y muestra un mensaje de error Algo no coincide entre los datos ingresados. Por favor, revise que los campos estén relacionados correctamente e intente de nuevo.

---

## Escenario: E40-DIS-03
**Descripcion:** Validar el formato de los campos del formulario al crear una nueva distribución

### Caso de prueba: E40-DIS-03
- Implementado: No

**Titulo:** Validar que no se pueda crear una nueva distribucion por error de formato de los campos

**Descripcion:** Validar no se pueda crear una nueva distribucion por error de formato de los campos

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos.
2. por defecto debe ser Gastos Técnicos
3. Esta distribución no haya sido creada anteriormente.
4. El sistema solo permite visualizar y modificar archivos comunes al rol "Administrador de Gastos"

**Datos:**
- No se cumpla con la estructura de cada campos del formulario
- Nombre: Periodo_Tipo_Sección
- Tipo: Real
- Periodo: catálogo con los periodos del año en curso, Ej: 202501, 202502.
- Versión: número entero del 1 al 15
- Tasa de cambio: número entero de hasta 4 cifras con dos decimales, Ej:13.98, 1.09, 0.65, 1234.98
- Secciones: Flujo del mes, Ajuste del mes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona "Nueva Distribución".
3. Se levanta el modal con titulo "Crear distribución", el botón crear está deshabilitado
4. El usuario completa los campos y se habilita el botón crear.
5. El usuario preciona el botón crear
6. Se muestra un mesaje de error.

**Resultado esperado:**
El sistema no crea una nueva distribucion y muestra los siguientes mensajes mensajes
Obligatoriedad
-El nombre es requerido
-Versión es requerida
-Tasa de cambio requerido
Formato
-Perido: Para Presupuesto, el período debe terminar en '00' (ej: 202500)
-Versión: El valor ingresado no es válido. Por favor, ingrese un número entre 1 y 15.
-Tasa de cambio:Formato no admitido (hasta 4 cifras delante y 2 detrás, punto obligatorio) Ej. 1234.00

---

## Escenario: E41-DIS-01
**Descripcion:** Validar que el sistema permita visualizar una distribucion desde el menu de acciones

### Caso de prueba: E41-DIS-01
- Implementado: No

**Titulo:** Validar que se pueda visualizar una nueva distribución desde el menú de acciones

**Descripcion:** Validar que se pueda visualizar una nueva distribución

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos.
2. La distribución debe estar creada y visible en la tabla de distribución.

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
Si el estado es ''Creada'', todas sus fases mostrarán ''Sin ejecutar''.

---

## Escenario: E42-DIS-01
**Descripcion:** Validar que el sistema permita copiar una distribucion desde el menu de acciones

_Sin casos de prueba asociados._

---

## Escenario: E43-DIS-01
**Descripcion:** Validar que el sistema permita eliminar una distribucion desde el menu de acciones

### Caso de prueba: E43-DIS-01
- Implementado: No

**Titulo:** Validar que se pueda eliminar una distribución desde el menú de acciones

**Descripcion:** Validar que se pueda eliminar una distribución seleccionada.

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos.
2. La distribución debe estar creada anteriormente y su Estados: Creada
3. se debe mostrar un mensaje de advertencia indicando que se eliminarán todos los datos asociados a la distribución. Se eliminarán todos los datos asociados a la distribución. ¿Desea continuar?

**Datos:**
- Data con la que fue creada la distribución

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona el icono "basurero" para eliminar el registro selecionado.
3. Se levanta un modal con la advertencia ¿Está seguro que desea eliminar este registro? Se eliminará la distribución ''Nombre''. Esta acción no se puede deshacer.
4. El usuario presiona el botón eliminar.
5. Se levanta un segundo modal de Advertencia, como segundo factor de confirmación ¿Esta seguro que desea eliminar este registro? Una vez eliminada, esta distribución no podrá recuperarse. ¿Confirme que desea eliminarla?
6. El usuario presiona el botón Confirmar.
7. Se muestra el mensaje ¡Registro eliminado con éxito!

**Resultado esperado:**
Se elimina el registro selecionado
1- Se muestra un mensaje de exito ¡Registro eliminado con éxito!
2- se elimina el registro de la tabla distribución mostrada en el front.

---

## Escenario: E44-DIS
**Descripcion:** Validar que el sistema permita visualizar una distribución desde el listado de distribuciones

### Caso de prueba: E44-DIS
- Implementado: No

**Titulo:** Validar que se pueda visualizar una distribucion distribución selecionandola del listado de la tabla principal

**Descripcion:** Validar que al selecionar una distribucion se muestren los datos correctamente en pantalla

**Precondiciones:**
1. El usuario debe ingresar con un rol de Gestor de Gastos Financieros
2. Se debe haber creado la distribución origen

**Datos:**
- Data con la que fue creada la distribución en cualquiera de sus estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario hace click en el nombre de distribucion desde la tabla principal de distribuciones
3. Se levanta el modal y se muestra el texto "La información que se mostrará corresponde a la distribución seleccionada y periodo asociado a ella"
4. El usuario, el usuario da clic en "Aceptar"

**Resultado esperado:**
Se muestra los datos selecionado correctamente
1-Se actualiza el dropdown principal con la seleccion
2-La distribucion selecionada queda marca en celeste
3-Los datos ingresados a esa distribucion me muestra correctamente
4-En la seccion de procesos muestra el estado de la distribucion selecionada

---

## Escenario: E58-C-01
**Descripcion:** Validar que no se cargue el archivo sin que su antecesor ya se encuentre cargado en el flujo de comunes

### Caso de prueba: E58-C-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Grupo Producto sin que su antecesor ya se encuentre cargado en el flujo de comunes

**Descripcion:** Validar la carga de un archivo sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Administrador de Gastos.
2. No debe estar cargado el archivo de Líneas

**Datos:**
- Archivo Grupo Producto ''REAL Grupo Producto'' definidos en el proceso de comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Grupo Productos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Grupo Prodcuto a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado
### Caso de prueba: E58-C-01.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Canales sin que su antecesor ya se encuentre cargado en el flujo de comunes

**Descripcion:** Validar la carga de un archivo sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Administrador de Gastos.
2. No debe estar cargado el archivo de Grupo Producto

**Datos:**
- Archivo Canales ''REAL Canales'' definidos en el proceso de comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Canales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Canales a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado
### Caso de prueba: E58-C-01.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Subcanales sin que su antecesor ya se encuentre cargado en el flujo de comunes

**Descripcion:** Validar la carga de un archivo sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Administrador de Gastos.
2. No debe estar cargado el archivo de Canales

**Datos:**
- Archivo Subcanales ''REAL Subcanales'' definidos en el proceso de comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Subcanales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Subcanales a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado
### Caso de prueba: E58-C-01.4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Maestro UoA sin que su antecesor ya se encuentre cargado en el flujo de comunes

**Descripcion:** Validar la carga de un archivo sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Administrador de Gastos.
2. No debe estar cargado el archivo de Subcanales

**Datos:**
- Archivo Maestro UoA ''REAL Maestro UoA'' definidos en el proceso de comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro UoA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Maestro UoA a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado
### Caso de prueba: E58-C-01.5
- Implementado: No

**Titulo:** Traer el archivo Unidades de Cuenta - BBA/VFA sin que su antecesor ya se encuentre cargado en el flujo de comunes

**Descripcion:** Validar que al traer el PCF, hayan sido cargados los archivos de Línea, Grupo Producto, Canales y Subcanales.

**Precondiciones:**
1. El usuario regsitrado tenga el rol de Administrador de Gastos.
2. No deben estar cargado el archivo de Líneas, Grupo Producto, Canales y Subcanales.

**Datos:**
- Archivo de Líneas, Grupo Producto, Canales y Subcanales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Unidades de Cuenta - BBA/VFA ".
3. El usuario presiona el botón "Traer PCF".
4. Se levanta el modal con un mensaje de confirmación Tener en cuenta que para que la carga de información sea efectiva debe existir información del periodo actual. '
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no trae la data de las Unidades de Cuenta - BBA/VFA y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado

---

## Escenario: E59-C-01
**Descripcion:** Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en el flujo de comunes

### Caso de prueba: E59-C-01.1
- Implementado: No

**Titulo:** Carga de el archivo Líneas que ya contenga información definido en el proceso Comunes

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo del periodo se haya cargado

**Datos:**
- Archivo Lineas ''REAL Lineas'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Líneas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Lineas a cargar.
6. Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-C-01.2
- Implementado: No

**Titulo:** Carga de el archivo Grupo Producto que ya contenga información definido en el proceso Comunes

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo del periodo se haya cargado

**Datos:**
- Archivo Grupo Producto ''REAL Grupo Producto'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Grupo Producto a cargar.
6. Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-C-01.3
- Implementado: No

**Titulo:** Carga de el archivo Canales que ya contenga información definido en el proceso Comunes

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo del periodo se haya cargado

**Datos:**
- Archivo Canales ''REAL Canales'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Canales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Canales a cargar.
6. Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-C-01.4
- Implementado: No

**Titulo:** Carga de el archivo Subcanales que ya contenga información definido en el proceso Comunes

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo del periodo se haya cargado

**Datos:**
- Archivo Subcanales ''REAL Subcanales'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Subcanales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Subcanales a cargar.
6. Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-C-01.5
- Implementado: No

**Titulo:** Carga de el archivo Maestro UoA que ya contenga información definido en el proceso Comunes

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo del periodo se haya cargado

**Datos:**
- Archivo Maestro UoA ''REAL Maestro UoA'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Maestro UoA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Maestro UoA a cargar.
6. Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-C-01.6
- Implementado: No

**Titulo:** Carga de el archivo Configuración de Parches que ya contenga información definido en el proceso Comunes

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo del periodo se haya cargado

**Datos:**
- Archivo Configuración de Parches ''REAL Configuración de Parches'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Parches", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Configuración de Parches a cargar.
6. 6 Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E4-C-01
**Descripcion:** Validación de la carga de los archivos en formato permitido en el flujo de Comunes

### Caso de prueba: E4-C-01.1
- Implementado: No

**Titulo:** Carga del archivo Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. el usuario registrado tenga el rol de Administrador de Gastos
3. Se debe haber creado una distribucion para el periodo correspondiente

**Datos:**
- Archivo Líneas ''REAL Lineas'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Líneas", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
6. El usuario presiona "Aceptar".
7. Se muestra un mensaje de exito: ¡Listo! El archivo se cargó correctamente.

**Resultado esperado:**
El archivo Líneas ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-C-01.1.1
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Administrador de Gastos
3. Se debe haber creado una distribucion para el periodo correspondiente

**Datos:**
- Archivo Líneas ''REAL Lineas'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Grupo Producto", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesr archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
8. El usuario presiona " procesar archivo".
9. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Líneas ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-C-01.2
- Implementado: Si

**Titulo:** Carga del archivo Grupo Producto definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Grupo Producto ''REAL Grupo Producto'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Productos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
6. El usuario presiona "Aceptar".
7. Se muestra un mensaje de exito: ¡Listo! El archivo se cargó correctamente.

**Resultado esperado:**
El archivo Producto ha sido cargado satisfactoriamente.Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-C-01.2.1
- Implementado: Si

**Titulo:** Fucionalidad boton subir nuevo archivo Grupo Producto definido en el proceso Comunes

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Administrador de Gastos
3. Se debe haber creado una distribucion para el periodo correspondiente

**Datos:**
- Archivo Líneas ''REAL Grupo Producto'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Grupo Producto", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesr archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
8. El usuario presiona " procesar archivo".
9. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Grupo Producto ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-C-01.3
- Implementado: Si

**Titulo:** Carga del archivo Canales definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Canales ''REAL Canales'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Canales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
6. El usuario presiona "Aceptar".
7. Se muestra un mensaje de exito: ¡Listo! El archivo se cargó correctamente.

**Resultado esperado:**
El archivo Canales ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-C-01.3.1
- Implementado: Si

**Titulo:** Fucionalidad boton subir nuevo archivo Canales definido en el proceso Comunes

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Administrador de Gastos
3. Se debe haber creado una distribucion para el periodo correspondiente

**Datos:**
- Archivo Líneas ''REAL Canales'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Grupo Producto", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesr archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
8. El usuario presiona " procesar archivo".
9. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Canales ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-C-01.4
- Implementado: Si

**Titulo:** Carga del archivo Subcanales definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Subcanales ''REAL Subcanales'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Subcanales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".
7. Se muestra un mensaje de exito: ¡Listo! El archivo se cargó correctamente.

**Resultado esperado:**
El archivo Subcanales ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-C-01.4.1
- Implementado: Si

**Titulo:** Fucionalidad boton subir nuevo archivo archivo Subcanales definido en el proceso Comunes

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Administrador de Gastos
3. Se debe haber creado una distribucion para el periodo correspondiente

**Datos:**
- Archivo Líneas ''REAL Subcanales'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales ".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Grupo Producto", con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesar archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Subcanales ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-C-01.5
- Implementado: Si

**Titulo:** Carga del archivo Maestro UoA definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado
4. debe existir una distribución seleccionada y el maestro de unidad de cuenta corresponda al periodo de la distribución seleccionada.

**Datos:**
- 1- Archivo Maestro UoA ''REAL Maestro UoA'' definido en el proceso de Comunes
- 2- El periodo al que corresponde el archivo

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Maestro UoA", el botón aceptar está deshabilitado, el usuario selecciona el periodo y da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".
7. Se muestra un mensaje de exito: ¡Listo! El archivo se cargó correctamente.

**Resultado esperado:**
El archivo Maestro UoA ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-C-01.5.1
- Implementado: Si

**Titulo:** Fucionalidad boton subir nuevo archivo Maestro UoA definido en el proceso Comunes

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado
4. debe existir una distribución seleccionada y el maestro de unidad de cuenta corresponda al periodo de la distribución seleccionada.

**Datos:**
- Archivo Líneas ''REAL Maestro UoA'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Maestro UoA", el botón aceptar está deshabilitado, el usuario selecciona el periodo y da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
6. Presiona el botón Subir un nuevo archivo y Regresa al modal del paso 4.
7. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
8. El usuario presiona "Aceptar".
9. Se muestra un mensaje de exito: ¡Listo! El archivo se cargó correctamente.

**Resultado esperado:**
El archivo Maestro UoA ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-C-01.6
- Implementado: Si

**Titulo:** Traer archivo Unidades de Cuenta - BBA/VFA definido en el proceso Comunes

**Descripcion:** Traer del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. La información del archivo Unidades de Cuenta - BBA/VFA para el perido esté alamacenada en BD.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. las lineas, productos, canales y subcanales deben ser cargados previamente en el catálogo.
4. la unidad de cuenta esté previamente cargadas dentro del Maestro UoA
5. Al ingresar por primera vez a la vista en el periodo, aparece el mensaje "Tener en cuenta que para que la carga de información sea efectiva debe existir información del periodo actual."

**Datos:**
- 1- Data Unidades de Cuenta - BBA/VFA definida para el periodo en el proceso de Comunes
- 2- El periodo al que corresponde el archivo

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Unidades de Cuenta - BBA/VFA".
3. El usuario presiona el botón ''Traer PCF'' y se muestra el modal para Seleccionar el periodo.
4. Se levanta el modal con la pregunta de comprobación ''Tener en cuenta que para que la carga de información sea efectiva debe existir información del periodo actual.'', el usuario presiona el botón ''Si, estoy seguro''.

**Resultado esperado:**
El archivo Unidades de Cuenta - BBA/VFA ha sido traído satisfactoriamente.
1- muestra un mensaje de exito
¡Listo! La carga de información se realizó correctamente.
### Caso de prueba: E4-C-01.7
- Implementado: Si

**Titulo:** Carga del archivo Configuración de Parches definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. es un archivo libre, no depende de otro archivo para cargarse.

**Datos:**
- Archivo Configuración de Parches ''REAL Configuración de Parches'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Configuración de Parches", el botón aceptar está deshabilitado, el usuario selecciona el periodo y da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".
7. Se muestra un mensaje de exito: ¡Listo! El archivo se cargó correctamente.

**Resultado esperado:**
El archivo confguracion de parches ha sido cargado satisfactoriamente.
1- muestra un mensaje de exito
¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-C-01.7.1
- Implementado: Si

**Titulo:** Carga de otro archivo Configuración de Parches definido en el proceso Comunes

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
2. usuario registrado tenga el rol de Administrador de Gastos.
3. es un archivo libre, no depende de otro archivo para cargarse

**Datos:**
- Archivo Líneas ''REAL Configuración de Parches'' definido en el proceso de Comunes

**Pasos:**
1. "1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Configuración de Parches", el botón aceptar está deshabilitado, el usuario selecciona el periodo y da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
6. Presiona el botón Subir un nuevo archivo y Regresa al modal del paso 4.
7. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
8. El usuario presiona "Aceptar".
9. Se muestra un mensaje de exito: ¡Listo! El archivo se cargó correctamente.

**Resultado esperado:**
El archivo Configuración de Parches ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E5-C-01
**Descripcion:** Validar que no se cargue un archivo que no corresponde con la opción/funcionalidad del proceso de comunes

### Caso de prueba: E5-C-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Líneas diferente al definidos en el proceso Comunes

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Líneas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Línea pero con el mismo nombre a cargar.
5. El botón Procesar Archivo queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra el mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-C-01.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Grupo Producto diferente al definidos en el proceso Comunes

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto ".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Productos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" yselecciona el archivo distinto pero con el mismo nombre a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra el mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-C-01.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Canales diferente al definidos en el proceso Comunes

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Canales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Canales pero con el mismo nombre a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra el mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-C-01.4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Subcanales diferente al definidos en el proceso Comunes

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales ".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Subcanales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Subcanales pero con el mismo nombre a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra el mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-C-01.5
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Maestro UoA diferente al definidos en el proceso Comunes

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro UoA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Maestro UoA pero con el mismo nombre a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra el mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-C-01.6
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Configuración de Parches diferente al definidos en el proceso Comunes

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Parches", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Configuración de Parches pero con el mismo nombre a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-C-02.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Líneas diferente al definidos en el proceso Comunes

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Líneas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Línea

**Resultado esperado:**
El sistema no habilita el boton procesar archivo y muestra un mensaje "El Archivo [nombre archivo no coincide con los permitidos [nombre archivo]"
### Caso de prueba: E5-C-02.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Grupo Producto diferente al definidos en el proceso Comunes

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "grupo producto".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Grupo producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a grupo producto

**Resultado esperado:**
El sistema no habilita el boton procesar archivo y muestra un mensaje "El Archivo [nombre archivo no coincide con los permitidos [nombre archivo]"
### Caso de prueba: E5-C-02.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Canales diferente al definidos en el proceso Comunes

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "canales".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Canales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a canales

**Resultado esperado:**
El sistema no habilita el boton procesar archivo y muestra un mensaje "El Archivo [nombre archivo no coincide con los permitidos [nombre archivo]"
### Caso de prueba: E5-C-02.4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad subCanales diferente al definidos en el proceso Comunes

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "subcanales".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar subCanales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a subcanales

**Resultado esperado:**
El sistema no habilita el boton procesar archivo y muestra un mensaje "El Archivo [nombre archivo no coincide con los permitidos [nombre archivo]"
### Caso de prueba: E5-C-02.5
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Maestro UoA diferente al definidos en el proceso Comunes

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro UoA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Maestro UoA

**Resultado esperado:**
El sistema no habilita el boton procesar archivo y muestra un mensaje "El Archivo [nombre archivo no coincide con los permitidos [nombre archivo]"
### Caso de prueba: E5-C-02.6
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Configuración de Parches diferente al definidos en el proceso Comunes

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia del archivo correspondiente.
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Configuración de Parches", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Configuración de Parches

**Resultado esperado:**
El sistema no habilita el boton procesar archivo y muestra un mensaje "El Archivo [nombre archivo no coincide con los permitidos [nombre archivo]"

---

## Escenario: E6-C-01
**Descripcion:** Validar que no se cargue un archivo sin datos en el flujo de Comunes

### Caso de prueba: E6-C-01.1
- Implementado: No

**Titulo:** Carga del archivo Líneas con la estructura definida y sin datos en el proceso de Comunes

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura definida de Línea y sin datos.
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea ''REAL Lineas'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Líneas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Línea sin datos a cargar.
5. El botón Procesar Archivo queda habilitado y hacemos click en él.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-C-01.2
- Implementado: No

**Titulo:** Carga del archivo Grupo Productos con la estructura definida y sin datos en el proceso de Comunes

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura definida de Productos y sin datos.
2. el usuario registrado tenga el rol de Administrador de Gastos
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Productos ''REAL Grupo Producto'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Productos ".
3. El usuario presiona " el botón Cargar".
4. Se levanta el modal con titulo "Cargar Productos ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Grupo Producto sin datos a cargar.
5. El botón aceptar queda deshabilitado.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-C-01.3
- Implementado: No

**Titulo:** Carga del archivo Canales con la estructura definida y sin datos en el proceso de Comunes

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura definida de Canales y sin datos.
2. el usuario registrado tenga el rol de Administrador de Gastos
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Canales ''REAL Canales'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales ".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Canales ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Canales sin datos a cargar.
5. El botón aceptar queda deshabilitado.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-C-01.4
- Implementado: Si

**Titulo:** Carga del archivo Subcanales con la estructura definida y sin datos en el proceso de Comunes

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura definida de Subcanales y sin datos.
2. el usuario registrado tenga el rol de Administrador de Gastos
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Subcanales ''REAL Subcanales'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Subcanales ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Subcanales sin datos a cargar.
5. El botón Procesar Archivo se activa.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-C-01.5
- Implementado: Si

**Titulo:** Carga del archivo Maestro UoA con la estructura definida y sin datos en el proceso de Comunes

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura definida de Maestro UOA y sin datos.
2. el usuario registrado tenga el rol de Administrador de Gastos
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Maestro UOA ''REAL Maestro UoA'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UOA".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro UOA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Maestro UOA sin datos a cargar.
5. El botón aceptar queda deshabilitado.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-C-01.6
- Implementado: No

**Titulo:** Traer archivo Unidades de Cuenta - BBA/VFA definido en el proceso Comunes y sin datos en el proceso de Comunes

**Descripcion:** Validar que no se traigan los datos de maestro de poliza

**Precondiciones:**
1. El usuario registrado tenga el rol de Administrador de Gastos
2. los archivos: Líneas,Grupo Producto, Canales y Subcanesles se hayan cargado
3. la información de este maestro no debe estar cargada

**Datos:**
- Data Unidades de Cuenta - BBA/VFA definida para el periodo en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Unidades de Cuenta - BBA/VFA".
3. El usuario presiona el botón ''Traer PCF'',
4. Se levanta el modal con la pregunta de comprobación ''Tener en cuenta que para que la carga de información sea efectiva debe existir información del periodo actual.'', el usuario presiona el botón ''Si, estoy seguro''.
5. Se muesta un mensaje de error al no encontrar la data para cargar.

**Resultado esperado:**
El sistema no carga la data.
1- muestra un mensaje de error. No existe la carga de información de este periodo. Favor de validar con el responsable.
### Caso de prueba: E6-C-01.7
- Implementado: Si

**Titulo:** Carga del archivo Configuración de Parches con la estructura definida y sin datos en el proceso de Comunes

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura definida de Configuración de Parches y sin datos.
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Configuración de Parches ''REAL Configuración de Parches'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Parches", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Configuración de Parches sin datos a cargar.
5. El botón aceptar se habilita y al hacer click en el él, el sistema hace las validaciones correspondientes.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E8-C-01
**Descripcion:** Validar que no se cargue un archivo con los datos incompletos en el flujo de comunes

### Caso de prueba: E8-C-01.1
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Líneas definido en el proceso de Comunes

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el periodo

**Precondiciones:**
1. Archivo preparado a partir del archivo para Línea definido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- 1- Archivo Línea definidos en el proceso de Comunes
- 2- campos obligatorios: Código, Nombre, Negocio, Estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Líneas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Faltan algunos datos obligatorios. Por favor, revisa que todos los campos requeridos estén completos
### Caso de prueba: E8-C-01.2
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Grupo Producto definido en el proceso de Comunes

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el periodo

**Precondiciones:**
1. Archivo preparado a partir del archivo para Grupo Productos definido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos
3. que el archivo anterior se haya cargado

**Datos:**
- 1- Archivo Grupo Producto definidos en el proceso de Comunes
- 2- campos obligatorios: Código, Nombre, Nombre línea, Método de valoración, Estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Productos", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Faltan algunos datos obligatorios. Por favor, revisa que todos los campos requeridos estén completos
### Caso de prueba: E8-C-01.3
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Canales definido en el proceso de Comunes

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el periodo

**Precondiciones:**
1. Archivo preparado a partir del archivo para Canales definido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos
3. que el archivo anterior se haya cargado

**Datos:**
- 1- Archivo Canales definidos en el proceso de Comunes
- 2- campos obligatorios: Código, Nombre, Estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Canales", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Faltan algunos datos obligatorios. Por favor, revisa que todos los campos requeridos estén completos
### Caso de prueba: E8-C-01.4
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Subcanales definido en el proceso de Comunes

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el periodo

**Precondiciones:**
1. Archivo preparado a partir del archivo para Subcanales definido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos
3. que el archivo anterior se haya cargado

**Datos:**
- 1- Archivo Subcanales definidos en el proceso de Comunes
- 2- campos obligatorios: Código Subcanal, Nombre Subcanal, Código canal, Nombre canal, Estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Subcanales", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Faltan algunos datos obligatorios. Por favor, revisa que todos los campos requeridos estén completos
### Caso de prueba: E8-C-01.5
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Maestro UOA definido en el proceso de Comunes

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el periodo

**Precondiciones:**
1. Archivo preparado a partir del archivo para Maestro UOA definido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos
3. que el archivo anterior se haya cargado

**Datos:**
- 1- Archivo Maestro UoA definidos en el proceso de Comunes
- 2- campos obligatorios: Atribuible, Unidad de Cuenta, Método de Valoración, Moneda, Año, Mes, Producto UoA, Bruto Cedido

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Maestro UoA", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Faltan algunos datos obligatorios. Por favor, revisa que todos los campos requeridos estén completos
### Caso de prueba: E8-C-01.6
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Configuración de Parches definido en el proceso de Comunes

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el periodo

**Precondiciones:**
1. Archivo preparado a partir del archivo para Configuración de Parches definido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- 1- Archivo Configuración de Parches definidos en el proceso de Comunes
- 2- campos obligatorios: Atribuible, Tipo de Gasto, Código Concepto, Dígito de Cuenta, Cuenta, Ramo, Producto, Subcanal, UoA Antes, UoA Después, Porciento %

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Parches", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Faltan algunos datos obligatorios. Por favor, revisa que todos los campos requeridos estén completos

---

## Escenario: E61-C-01
**Descripcion:** Validar que no se cargue un archivo de más de 30 Mb en el flujo de Comunes

### Caso de prueba: E61-C-01.1
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso para el periodo

**Precondiciones:**
1. El usuario registrado tenga el rol de Administrador de Gastos
2. el archivo Líneas debe exceder el tamaño máximo permitido

**Datos:**
- Archivo preparado a partir de Línea ''REAL Linea'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Líneas", el botón ''Aceptar'' está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.2
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Grupo Producto definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Grupo Producto debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Administrador de Gastos
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Grupo Producto ''REAL Grupo Producto'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Productos", el botón ''Aceptar'' está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.3
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Canales definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Canales debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Administrador de Gastos
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Canales ''REAL Canales'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Canales", el botón ''Aceptar'' está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.4
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Subcanales definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Subcanales debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Administrador de Gastos
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Subcanales ''REAL Subcanales'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Subcanales", el botón ''Aceptar'' está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.5
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Maestro UoA definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Maestro UoA debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Administrador de Gastos
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Maestro UoA ''REAL Maestro UoA'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Maestro UoA", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.6
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Configuración de Parches definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Configuración de Parches debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Configuración de Parches ''REAL Configuración de Parches'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Configuración de Parches", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

## Escenario: E9-C-01
**Descripcion:** Validar que se muestre en el FronEnd los datos de los archivos cargados en el flujo de comunes

### Caso de prueba: E9-C-01.1
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los datos de archivo Líneas del proceso de Comunes

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Línea cargado para el periodo

**Precondiciones:**
1. La carga exitosa del archivo Línea ''REAL Lineas'' para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea ''REAL Lineas'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Líneas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-C-01.2
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos de archivo Grupo Producto del proceso de Comunes

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Grupo Producto cargado para el periodo

**Precondiciones:**
1. La carga exitosa del archivo Grupo Producto ''REAL Grupo Producto'' para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Grupo Producto '' REAL Grupo Producto'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Productos", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-C-01.3
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos de archivo Canales del proceso de Comunes

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Canales cargado para el periodo

**Precondiciones:**
1. La carga exitosa del archivo Canales ''REAL Canales'' para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Canales ''REAL Canales''definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Canales", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-C-01.4
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los datos de archivo Subcanales del proceso de Comunes

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Subcanales cargado para el periodo

**Precondiciones:**
1. La carga exitosa del archivo Subcanales ''REAL Subcanales''para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Subcanales ''REAL Subcanales'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Subcanales", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-C-01.5
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos de archivo Maestro UoA del proceso de Comunes

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Maestro UoA cargado para el periodo

**Precondiciones:**
1. La carga exitosa del archivo Maestro UoA ''REAL Maestro UoA'' para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Maestro UoA ''REAL Maestro UoA'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Maestro UoA", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-C-01.6
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los datos de archivo Unidades de Cuenta - BBA/VFA del proceso de Comunes

**Descripcion:** Validar que se muestren en el FronEnd los datos de las Unidades de Cuenta - BBA/VFA traídas para el periodo

**Precondiciones:**
1. La carga exitosa de las Unidades de Cuenta - BBA/VFA al motor para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Unidades de Cuenta - BBA/VFA definidos para el periodo en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Unidades de Cuenta - BBA/VFA".
3. El usuario presiona el botón ¨Traer PCF¨,
4. Se levanta el modal con la pregunta de comprobación ''Tener en cuenta que para que la carga de información sea efectiva debe existir información del periodo actual.'', el usuario presiona el botón ''Si, estoy seguro''.

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
### Caso de prueba: E9-C-01.7
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los datos de archivo Configuración de Parches del proceso de Comunes

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Configuración de Parches cargado para el periodo

**Precondiciones:**
1. La carga exitosa del archivo Configuración de Parches ''REAL Configuración de Parches'' para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Configuración de Parches ''REAL Configuración de Parches'' definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Parches", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: E10-C-01
**Descripcion:** Validar la correcta ejecución del flujo de descargas de los archivos cargados en el flujo de comunes

### Caso de prueba: E10-C-01.1
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Líneas del proceso de Comunes

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Líneas definidos en el proceso de Comunes cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente en formato XSLX y se debe tener acceso al archivo.
### Caso de prueba: E10-C-01.2
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Grupo Producto del proceso de Comunes

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Grupo Producto definidos en el proceso de Comunes cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. El usuario presiona el botón "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente en formato XSLX y se debe tener acceso al archivo.
### Caso de prueba: E10-C-01.3
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Canales del proceso de Comunes

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Canales definidos en el proceso de Comunes cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente en formato XSLX y se debe tener acceso al archivo.
### Caso de prueba: E10-C-01.4
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Subcanales del proceso de Comunes

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Subcanales definidos en el proceso de Comunes cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente en formato XSLX y se debe tener acceso al archivo.
### Caso de prueba: E10-C-01.5
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Maestro UoA del proceso de Comunes

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Maestro UoA definidos en el proceso de Comunes cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente en formato XSLX y se debe tener acceso al archivo.
### Caso de prueba: E10-C-01.6
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Unidades de Cuenta - BBA/VFA del proceso de Comunes

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Unidades de Cuenta - BBA/VFA definidos en el proceso de Comunes cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Unidades de Cuenta - BBA/VFA".
3. El usuario presiona el botón "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente en formato XSLX y se debe tener acceso al archivo.
### Caso de prueba: E10-C-01.7
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Configuración de Parches del proceso de Comunes

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Configuración de Parches definidos en el proceso de Comunes cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente en formato XSLX y se debe tener acceso al archivo.

---

## Escenario: E11-C-01
**Descripcion:** Validar que el archivo descargado muestre los datos correctamente y no tenga perdida de información en el flujo de comunes

### Caso de prueba: E11-C-01.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Líneas del proceso de Comunes

**Descripcion:** Validar alteraciones en los datos del archivo Líneas descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Líneas definidos en el proceso de Comunes descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-C-01.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Grupo Producto del proceso de Comunes

**Descripcion:** Validar alteraciones en los datos del archivo Productos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Productos definidos en el proceso de Comunes descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-C-01.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Canales del proceso de Comunes

**Descripcion:** Validar alteraciones en los datos del archivo Canales descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Canales definidos en el proceso de Comunes descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-C-01.4
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Subcanales del proceso de Comunes

**Descripcion:** Validar alteraciones en los datos del archivo Subcanales descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Subcanales definidos en el proceso de Comunes descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-C-01.5
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Maestro UoA del proceso de Comunes

**Descripcion:** Validar alteraciones en los datos del archivo Maestro UoA descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Maestro UoA definidos en el proceso de Comunes descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-C-01.6
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Unidades de Cuenta - BBA/VFA del proceso de Comunes

**Descripcion:** Validar alteraciones en los datos del archivo Unidades de Cuenta - BBA/VFA descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Unidades de Cuenta - BBA/VFA definidos en el proceso de Comunes descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Unidades de Cuenta - BBA/VFA".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-C-01.7
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Configuración de Parches del proceso de Comunes

**Descripcion:** Validar alteraciones en los datos del archivo Configuración de Parches descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Configuración de Parches definidos en el proceso de Comunes descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E35-C-01
**Descripcion:** Validar que el sistema pueda agregar un nuevo registro en el flujo de comunes

### Caso de prueba: E35-C-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de comunes de Líneas

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Línea" de líneas

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. La distribución está en estado creada.
3. Los campos son obligatorios
4. Los valores de código y nombre son únicos.

**Datos:**
- Campos del formulario
- Codigo: LPER,LCOM,VEHI,SOAT,AMED, AFP,SEPE,VCRD,RVIT,VGRP,VIND
- Nombre: LINEAS PERSONALES, LINEAS COMERCIALES, AUTOS, SOAT, ASISTENCIA MEDICA, AFP, SEPELIO, VIDA CREDITO, RENTAS, VIDA GRUPO, VIDA INDIVIDUAL secuencia homologa a la secuencia del campo código
- Negocio: GENERALES (LPER,LCOM,VEHI,SOAT,AMED) y VIDA (AFP,SEPE,VCRD,RVIT, VGRP,VIND).
- Estado: Activo, Inactivo (por defecto activo)

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Línea".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora
### Caso de prueba: E35-C-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de comunes de Grupo Producto

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Producto" de Grupo Producto

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. La distribución está en estado creada.
3. Los campos son obligatorios
4. Los valores de código y nombre son únicos.
5. La Linea a la que estará asociado debe estar creada.
6. Cada producto está asociado a una y solo una Línea

**Datos:**
- Campos del formulario
- codigo: comienza con el código de la línea a la que estará asociado y con un número consecutivo a los producto creados anteriormente
- Nombre: Frase corta similar al objeto social de este producto
- codigo Línea: Se seleciona de los valores cargados en lineas: LPER,LCOM,VEHI,SOAT,AMED, AFP, SEPE, VCRD, RVIT, VGRP, VIND
- Nombre Línea: Se selecciona en correspondencia al código, LINEAS PERSONALES, LINEAS COMERCIALES, AUTOS, SOAT, ASISTENCIA MEDICA, AFP, SEPELIO, VIDA CREDITO, RENTAS, VIDA GRUPO, VIDA INDIVIDUAL secuencia homologa a la secuencia del campo código.
- Método de Valoración: PAA (Corto Plazo), BBA, VFA y BBA /VFA (Largo Plazo)
- Estado: Activo, Inactivo (por defecto activo)

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Producto".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora
### Caso de prueba: E35-C-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de comunes de Canales

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Canal" de Canales

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. La distribución está en estado creada.
3. Lo campos son obligatorios.
4. Los valores de código y nombre son únicos

**Datos:**
- Campos del formulario
- codigo: AFP, ALZ, CAL, CCO, COR, DFV, DOT, FDC, GNC, SCT, WSM
- Nombre: AFP, ALIANZAS, CANALES ALTERNATIVOS, CORPORATIVO, CORREDORES, CANALES DIRECTOS, INSTITUCIONAL, FFVV DIVISION COMERCIA, BANCASEGUROS CREDICORP, SCTR MIX, WORKSITE MARKETING
- Estado: Activo, Inactivo (por defecto activo)

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Canal".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora
### Caso de prueba: E35-C-01.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de comunes de Subcanales

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Subcanal'' de Subcanales

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. La distribución está en estado creada.
3. Lo campos son obligatorios.
4. Los valores de código y nombre son únicos
5. El canal al que estará asociado debe estar creado.
6. Cada subcanal está asociado a un y solo un canal.

**Datos:**
- Campos del formulario
- codigo Subcanal: comienza con el código del canal al que estará asociado y con un número consecutivo a los subcanales creados anteriormente.
- Nombre Subcanal: Frase corta similar al objeto social de este Subcanal
- codigo canal: AFP, ALZ, CAL, CCO, COR, DFV, DOT, FDC, GNC, SCT, WSM
- Nombre canal: AFP, ALIANZAS, CANALES ALTERNATIVOS, CORPORATIVO, CORREDORES, CANALES DIRECTOS, INSTITUCIONAL, FFVV DIVISION COMERCIA, BANCASEGUROS CREDICORP, SCTR MIX, WORKSITE MARKETING
- Estado: Activo, Inactivo (por defecto activo)

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Subcanal".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora
### Caso de prueba: E35-C-01.5
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de comunes de Configuración de Parches

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Parche" de Configuración de Parches

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. La distribución está en estado creada.
3. Lo campos: tipo de Gasto, UoA Antes , UoA Después y Porciento % son obligatorios.
4. la UoA que se quiere ingresar debe existir dentro del Maestro UoA.
5. la suma de los porcentajes debe ser 100% por cada combinación que se parche.

**Datos:**
- Campos del formulario
- -Atribuible: Si (Atri) y No (No Atri)
- Tipo de Gasto: Según el Tipo de gasto GG,GF,GT y AM
- Código Concepto: Ej: 30.05.01, solo números y punto
- Dígito de Cuenta: Ej: 46, solo números,
- Cuenta: Ej: 46.12.16.00.01, solo números y punto
- Ramo: Ej: INCENDIO
- Producto: Ej: AVIACIÓN, string
- Subcanal: Ej: CCO001, cadena letras y números
- UoA Antes: Ej: IFRS_GRP_2021_UNIQUE ASISTENCIA MEDICA_PEN_PAA_Gross_Prof cadena letras, guión bajo y números
- UoA Después: Ej: FRS_GRP_2021_UNIQUE ASISTENCIA MEDICA_PEN_PAA_Gross_Prof ,cadena letras, guión bajo y números
- Porciento %: Ej: 12, solo números

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Parche".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora

---

## Escenario: E35-C-02
**Descripcion:** Validar las reglas de negocio al agregar un registro en el flujo de comunes

### Caso de prueba: E35-C-02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Líneas

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Línea" de líneas

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. La distribución está en estado creada.
3. Los campos son obligatorios.
4. Los valores de código y nombre son únicos.
5. El código y nombre están relacionados.

**Datos:**
- Campos del formulario
- Juego de Dato 1:
- Los valores para cada campo serán identicos a los mostrado en el registro seleccionado de la tabla Ramos mostrada en el front
- Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-C-01.1

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Línea".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-C-02.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Grupo Producto

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Producto" de Grupo Producto

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. La distribución está en estado creada.
3. Los campos son obligatorios.
4. Los valores de código y nombre son únicos.
5. El código y nombre están relacionados.
6. Cada producto está asociado a una y solo una Línea

**Datos:**
- Campos del formulario
- Juego de Dato 1:
- Los valores para cada campo serán identicos a los mostrado en el registro seleccionado de la tabla Ramos mostrada en el front
- Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-C-01.2

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Producto".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-C-02.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Canales

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Canal" de Canales

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. La distribución está en estado creada.
3. Los campos son obligatorios.
4. Los valores de código y nombre son únicos.
5. El código y nombre están relacionados.

**Datos:**
- Campos del formulario
- Juego de Dato 1:
- Los valores para cada campo serán identicos a los mostrado en el registro seleccionado de la tabla Ramos mostrada en el front
- Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-C-01.3

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Canal".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-C-02.4
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Subcanales

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Subcanal" de Subcanales

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. La distribución está en estado creada.
3. Los campos son obligatorios.
4. Los valores de código y nombre son únicos.
5. El código y nombre están relacionados.
6. Cada subcanal está asociado a un y solo un Canal.

**Datos:**
- Campos del formulario
- Juego de Dato 1:
- Los valores para cada campo serán identicos a los mostrado en el registro seleccionado de la tabla Ramos mostrada en el front
- Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-C-01.4

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Subcanal".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente.
### Caso de prueba: E35-C-02.5
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Configuración de Parches

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Parche" de Configuración de Parches

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. La distribución está en estado creada.
3. Lo campos: tipo de Gasto, UoA Antes , UoA Después y Porciento % son obligatorios.
4. la UoA que se quiere ingresar debe existir dentro del Maestro UoA. En caso contrario, se debe mostrar un mensaje de error ''La unidad de cuenta no existe dentro del maestro. Favor de revisar'' y es bloqueante para continuar con el flujo.
5. al aplicar un parche, el sistema debe validar que la suma de los porcentajes debe ser 100% por cada combinación que se parche.

**Datos:**
- Campos del formulario
- Juego de Dato 1:
- Los valores para cada campo serán identicos a los mostrado en el registro seleccionado de la tabla Ramos mostrada en el front
- Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-C-01.5

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Parche".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente.

---

## Escenario: E35-C-03
**Descripcion:** Validar el formato y campos obligatorios del formulario en un nuevo registro en el flujo de comunes

### Caso de prueba: E35-C-03.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el flujo de comunes de Líneas

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Línea" de lineas

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. La distribución está en estado creada.
3. Los campos son obligatorios.
4. Los códigos y nombres se escriben en mayúscula.

**Datos:**
- Codigo: no debe pernitir caracteres especiales. este campo es obligatorio. Debe ser en mayuscula Campo obligator Campo obligatorioio
- Nombre: no debe pernitir caracteres especiales. este campo es obligatorio Debe permitr mayusculas y minusculas
- Negocio: Campo obligatorio de tipo selector
- Estado: Campo obligatorio de tipo selector

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Línea".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
1-Codigo: Ingrese 3–4 letras mayúsculas, opcionalmente seguidas de 4 números. Código es requerido
2-Nombre: Nombre es requerido Formato inválido. Debe iniciar con letra y puede contener letras, números y espacios.Negocio es requerido
3-Negocio: Selector
4-Estado: Selector
### Caso de prueba: E35-C-03.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el flujo de comunes de Grupo Producto

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Producto" de Grupo Producto

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. La distribución está en estado creada.
3. Los campos son obligatorios.
4. Los códigos y nombres se escriben en mayúscula.

**Datos:**
- Codigo: no debe pernitir caracteres especiales. este campo es obligatorio. Debe ser en mayuscula
- Nombre: no debe pernitir caracteres especiales. este campo es obligatorio Debe permitr mayusculas y minusculas
- Codigo: Línea: no debe pernitir caracteres especiales. este campo es obligatorio
- Nombre Línea: debe mostrarse de acuerdo al código de linea seleccionado
- Método de Valoración: Solo debe mostrar y permitir seleccionar uno de los valores: PAA (Corto Plazo), BBA, VFA y BBA /VFA (Largo Plazo)
- Estado: debe mostrar y permitir seleccionar: Activo e Inactivo (por defecto muestra activo)

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Producto".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
1-Codigo: Formato inválido. Ingrese entre 4 y 10 caracteres alfanuméricos en mayúsculas (Ej.: ABCD1234) Código es requerido
2-Nombre: Formato inválido. Debe iniciar con letra y puede contener letras, números y espacios. Nombre es requerido
3-Codigo Linea: Tipo selector
4-Nombre Línea: No se permite el ingreso manual ni valores diferentes a los retornados
5- Metodo de valoración : Tipo selector
6. Estado: Tipo selector
### Caso de prueba: E35-C-03.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el flujo de comunes de Canales

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Canal" de Canales

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. La distribución está en estado creada.
3. Los campos son obligatorios.
4. Los códigos y nombres se escriben en mayúscula.

**Datos:**
- Codigo: no debe pernitir caracteres especiales. este campo es obligatorio. Debe ser en mayuscula
- Nombre: no debe pernitir caracteres especiales. este campo es obligatorio Debe permitr mayusculas y minusculas
- Estado: debe mostrar y permitir seleccionar: Activo e Inactivo (por defecto muestra activo)

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Canal''.
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
1-Codigo: Formato inválido. Ingrese 3 letras mayúsculas, o use SIN CANAL o 000,Código es requerido
2-Nombre: Formato inválido. Debe iniciar con letra y puede contener letras, números y espacios. Nombre es requerido
3- Estado: Tipo Selector
### Caso de prueba: E35-C-03.4
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el flujo de comunes de Subcanales

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Subcanal" de Subcanales

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. La distribución está en estado creada.
3. Los campos son obligatorios.
4. Los códigos y nombres se escriben en mayúscula.

**Datos:**
- Codigo: no debe pernitir caracteres especiales. este campo es obligatorio. Debe ser en mayuscula
- Nombre: no debe pernitir caracteres especiales. este campo es obligatorio Debe permitr mayusculas y minusculas
- codigo canal: no debe pernitir caracteres especiales. este campo es obligatorio.
- Nombre canal: debe mostrarse de acuerdo al código de linea seleccionado
- Estado: debe mostrar y permitir seleccionar: Activo e Inactivo (por defecto muestra activo)

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Subcanal".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
1-Codigo: Ingrese 6 caracteres alfanuméricos en mayúsculas (Ej.: ABC123) Código es requerido
2-Nombre: Formato inválido. Debe iniciar con letra y puede contener letras, números y espacios. Nombre es requerido
3-Codigo Canal: Tipo selector
4-Nombre Canal: No se permite el ingreso manual ni valores diferentes a los retornados
5-Estado: Tipo Selector
### Caso de prueba: E35-C-03.5
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el flujo de comunes de Configuración de Parches

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Parche" de Configuración de Parches

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. los campos: Atribuible y Tipo de Gasto son select
3. la UoA que se quiere ingresar debe existir dentro del Maestro UoA.

**Datos:**
- Atribuible: debe mostrar Si (Atri) y No (No Atri) , no es obligatorio
- Tipo de Gasto: debe mostrar GG,GF,GT y AM , es obligatorio
- Código Concepto: solo números y punto, no es obligatorio
- Dígito de Cuenta: solo números, no es obligatorio
- Cuenta: solo números y punto, no es obligatorio
- Ramo: cadena letras, no es obligatorio
- Producto: string, no es obligatorio
- Subcanal: cadena letras y números, no es obligatorio
- UoA Antes:cadena letras, guión bajo y números, es obligatorio
- UoA Después: cadena letras, guión bajo y números, es obligatorio
- Porciento %: solo números, es obligatorio

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Parche".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
1- Tipo Gasto: Tipo selector
2- Atribuibe: Tipo Selector
3- GA/GM: Tipo Selector
4- Codigo concepto:El código de concepto debe tener el formato XX.XX.XX, donde cada X es un dígito. Ejemplo válido: 12.34.56
5- Digito Cuenta: El dígito de cuenta debe ser un número de dos dígitos entre 10 y 99, o estar vacío.
6-Cuenta:La cuenta debe tener el formato XX.XX.XX.XX.XX, donde cada X es un dígito. Ejemplo válido: 12.34.56.78.90
7. UOA Antes: UOA Antes es obligatorio
8-UOA Adespues: UOA despues es obligatorio
4-Procentaje:El porcentaje debe tener entre 1 y 3 dígitos en la parte entera, un punto decimal y entre 1 y 6 dígitos en la parte decimal. Ejemplo válido: 22.563

---

## Escenario: E35-C-04
**Descripcion:** Validar que el sistema pueda agregar un nuevo registro pero al subir el archivo del periodo este se sobreescriba en el flujo de comunes

### Caso de prueba: E35-C-04.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al cargar el archivo periodo en el flujo de comunes de Líneas

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Línea definido para el periodo

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. Si hay data cargada, enviar mensaje.

**Datos:**
- Archivo Líneas ''REAL Linea'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas ".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Línea".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar Líneas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-C-04.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de comunes de Grupo Producto

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Grupo Producto definido para el periodo

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. Si hay data cargada, enviar mensaje.

**Datos:**
- Archivo Grupo Productos ''REAL Grupo Productos'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto ".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Producto".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar Líneas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-C-04.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de comunes de Canales

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Canales definido para el periodo

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. Si hay data cargada, enviar mensaje.

**Datos:**
- Archivo Canales ''REAL Canales'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales ".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Canal".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar Canales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-C-04.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de comunes de Subcanales

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Subcanales definido para el periodo

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. Si hay data cargada, enviar mensaje.

**Datos:**
- Archivo Subcanales ''REAL Subcanales'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales ".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Subanal".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar Subcanales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-C-04.5
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de comunes de Configuración de Parches

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Configuración de Parches definido para el periodo

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. Si hay data cargada, enviar mensaje.
3. la UoA que se quiere ingresar debe existir dentro del Maestro UoA. En caso contrario, se debe mostrar un mensaje de error ''La unidad de cuenta no existe dentro del maestro. Favor de revisar'' y es bloqueante para continuar con el flujo.
4. al aplicar un parche, el sistema debe validar que la suma de los porcentajes debe ser 100% por cada combinación que se parche.

**Datos:**
- Archivo Configuración de Parches ''REAL Configuración de Parches'' definido en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Parche".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar Parches", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

## Escenario: E36-C-01
**Descripcion:** Validar que el sistema pueda editar un registro en el flujo de comunes

### Caso de prueba: E36-C-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Líneas en el flujo de comunes

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Línea" de Líneas

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. el código y nombre son únicos
4. de tener productos asignados muestra el mensaje: El registro que desea modificar cuenta con datos asociados. Favor de validar.

**Datos:**
- Campos del formulario
- codigo: campo editable
- Nombre: campo editable
- Negocio: campo editable
- Estado: campo editable

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Línea".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente, debe mostrar las siguientes validaciones
1-Ingrese 3–4 letras mayúsculas, opcionalmente seguidas de 4 números, o use SIN LINEA.
2-EL nombre debe
### Caso de prueba: E36-C-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Grupo Producto en el flujo de comunes

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Producto" de Grupo Producto

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. el codigo y el nombre son único
4. el codigo y el nombre de la Linea se corresponden.

**Datos:**
- Campos del formulario que se pueden editar:
- codigo: campo editable
- Nombre: campo editable
- codigo Línea: campo editable
- Nombre Línea: no editable, se autocompleta en función del codigo línea seleccionado
- Método de Valoración: campo editable
- Estado: campo editable

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Producto".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-se actualiza correctamente cada dato en la tabla
3-se actualiza la fecha y la hora
### Caso de prueba: E36-C-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Canales en el flujo de comunes

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Canal" de Canales

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. el codigo y nombre son únicos
4. de tener subcanales asignados muestra el mensaje: El registro que desea modificar cuenta con datos asociados. Favor de validar.

**Datos:**
- Campos del formulario que se pueden editar:
- codigo: campo editable
- Nombre: campo editable
- Estado: campo editable

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Canal".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-se actualiza correctamente cada dato en la tabla
3-se actualiza la fecha y la hora
### Caso de prueba: E36-C-01.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Subcanales en el flujo de comunes

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Subcanal" de Subcanales

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. el codigo y el nombre son único
4. el codigo y el nombre del Canal se corresponden.

**Datos:**
- Campos del formulario que se pueden editar:
- codigo Subcanal: campo editable
- Nombre Subcanal: campo editable
- codigo canal: campo editable
- Nombre canal: no editable, se autocompleta en función del codigo canal seleccionado
- Estado: campo editable

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Subcanal".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-se actualiza correctamente cada dato en la tabla
3-se actualiza la fecha y la hora
### Caso de prueba: E36-C-01.5
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Configuración de Parches en el flujo de comunes

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Parche" de Configuración de Parches

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. la UoA que se quiere ingresar debe existir dentro del Maestro UoA.
4. al aplicar un parche, el sistema debe validar que la suma de los porcentajes debe ser 100% por cada combinación que se parche.

**Datos:**
- Campos del formulario que se pueden editar:
- Atribuible: editable, no obligatorio. Valores: Atribuible, No atribuible
- Tipo de Gasto: editable, es obligatorio. Valores: Los Tipos de Gasto
- GA/GM: editable, no obligatorio. Valores: GA y GM
- Código Concepto: editable, no obligatorio. Valores: cargados de acuerdo al tipo de gasto
- Concepto N1: editable, no obligatorio. Valores: relacionados con el codigo concepto
- Concepto N2: editable, no obligatorio. Valores: relacionados con el Concepto N1
- Dígito de Cuenta: editable, no obligatorio. Valores: el digito de la cuenta es de 2 caracteres y
- corresponde a los primeros 2 caracteres de la cuenta ingresada.
- Cuenta: editable, no obligatorio. Valores: Solo números y puntos, su estructuraes de 15 posiciones
- , Ej: XX.X.X.XX.XX.XX.
- Ramo: editable, no obligatorio. Valor: cargado de la información anteriormente en Ramos.
- Producto: editable, no bligatorio. Valor: cargado de la información de Grupo Producto. Se muestra la descripción del producto.
- Subcanal: editable, no obligatorio. Valor: cargado de la información de Subcanal. Se muestra el código del subcanal.
- UoA Antes:editable, es obligatorio. Valor: el UOA se encuentre dentro del Maestro de UoA.
- UoA Después: editable, es obligatorio: Valor: el UOA se encuentre dentro del Maestro de UoA.
- Porciento %: editable, es obligatorio: Valor: enteros o con 2 decimales.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Parche".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-se actualiza correctamente cada dato en la tabla
3-se actualiza la fecha y la hora

---

## Escenario: E36-C-03
**Descripcion:** Validar el formato y campos obligatorios del formulario al editar un registro en el flujo de comunes

### Caso de prueba: E36-C-03.1
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro de Líneas por error de formato de los campos en el flujo de comunes

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Línea" de Líneas

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. todos los campos son obligatorios

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Nombre:.obligatorio.Editable [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Línea".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
### Caso de prueba: E36-C-03.2
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Grupo Producto por error de formato de los campos en el flujo de comunes

**Descripcion:** Validar que no se puede editar un registro desde el modal "Editar Producto" de Grupo Producto

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. todos los campos son obligatorios

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Campos del formulario que se pueden editar:
- codigo: no debe pernitir caracteres especiales. este campo es obligatorio.
- Nombre: no debe pernitir caracteres especiales. este campo es obligatorio.
- codigo Línea: debe mostrar las Líneas creadas y pernitir seleccionar, este campo es obligatorio.
- Nombre Línea: debe autocompletar según la linea seleccionada, este campo es obligatorio
- Método de Valoración: debe mostrar PAA, BBA, VFA y BBA /VFA y pernitir seleccionar uno de estos campos, este campo es obligatorio.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Producto".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
### Caso de prueba: E36-C-03.3
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Canales por error de formato de los campos en el flujo de comunes

**Descripcion:** Validar que no se puede editar un registro desde el modal "Editar Canal" de Canales

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. todos los campos son obligatorios

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Nombre: obligatorio.Editable [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Canal".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
### Caso de prueba: E36-C-03.4
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Subcanales por error de formato de los campos en el flujo de comunes

**Descripcion:** Validar que no se puede editar un registro desde el modal "Editar Subcanal" de Subcanales

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. todos los campos son obligatorios

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Nombre Subcanal: no debe pernitir caracteres especiales. este campo es obligatorio.
- codigo canal: debe mostrar los Canales creados y pernitir seleccionar, este campo es obligatorio.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Subcanal".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
### Caso de prueba: E36-C-03.5
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Configuración de Parches por error de formato de los campos en el flujo de comunes

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Parche" de Configuración de Parches

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. los campos: Atribuible y Tipo de Gasto son select

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- -Atribuible: editable, no obligatorio. Valores: Atribuible, No atribuible
- GA/GM: editable, debe mostrar GA y GM y permitir seleccionar, no es obligatorio
- Código Concepto: editable, ya viene cargado, no es obligatorio
- Concepto N1: editable, relacionado con código concepto, no es obligatorio
- Concepto N2: editable, relacionado con N1, no es obligatorio
- Dígito de Cuenta: editable, solo números, no es obligatorio
- Cuenta: editable, solo números y punto, no es obligatorio
- Ramo: editable, cadena letras, no es obligatorio
- Producto: editable, string, no es obligatorio
- Subcanal: editable, cadena letras y números, no es obligatorio
- UoA Antes:editable, cadena letras, guión bajo y números, es obligatorio
- UoA Después: editable, cadena letras, guión bajo y números, es obligatorio
- Porciento %: editable, solo números, es obligatorio

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Parche".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''

---

## Escenario: E37-C-01
**Descripcion:** Validar que el sistema pueda eliminar un registro en el flujo de comunes

### Caso de prueba: E37-C-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de inactivar un registro de Líneas en el flujo de comunes

**Descripcion:** Validar que se puede inactivar un registro desde el menú de acciones en el flujo de comunes de Lineas

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. los registros de Línea no se eliminan, estos se inactivan
4. si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para inactivar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Línea".
5. El usuario cambia el estado a inactivo
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El registro ha sido actualizado correctamente.
1- se muestra el mensaje de exito ¡cambios guardados correctamente!
2. El estado en la tabla cambia a Inactivo
### Caso de prueba: E37-C-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de inactivar un registro de Grupo Producto en el flujo de comunes

**Descripcion:** Validar que se puede inactivar un registro desde el menú de acciones en el flujo de comunes de Grupo Producto

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. los registros de Grupo Producto no se eliminan, estos se inactivan
4. si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para inactivar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Grupo Producto".
5. El usuario cambia el estado a inactivo
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El registro ha sido actualizado correctamente.
1- se muestra el mensaje de exito ¡cambios guardados correctamente!
2. El estado en la tabla cambia a Inactivo
### Caso de prueba: E37-C-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de inactivar un registro de Canales en el flujo de comunes

**Descripcion:** Validar que se puede inactivar un registro desde el menú de acciones en el flujo de comunes de Canales

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. los registros de Canales no se eliminan, estos se inactivan
4. si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para inactivar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Canal".
5. El usuario cambia el estado a inactivo
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El registro ha sido actualizado correctamente.
1- se muestra el mensaje de exito ¡cambios guardados correctamente!
2. El estado en la tabla cambia a Inactivo
### Caso de prueba: E37-C-01.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de inactivar un registro de Subcanales en el flujo de comunes

**Descripcion:** Validar que se puede inactivar un registro desde el menú de acciones en el flujo de comunes de Subcanales

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. los registros de Subcanales no se eliminan, estos se inactivan
4. si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para inactivar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Subcanal".
5. El usuario cambia el estado a inactivo
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El registro ha sido actualizado correctamente.
1- se muestra el mensaje de exito ¡cambios guardados correctamente!
2. El estado en la tabla cambia a Inactivo
### Caso de prueba: E37-C-01.5
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Maestro UoA en el flujo de comunes

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de comunes de Maestro UoA

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Eliminar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- se muestra el mensaje de exito ¡Registro eliminado con éxito!
2- no se muestra en la tabla del front.
### Caso de prueba: E37-C-01.6
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliinar un registro de Configuración de Parche en el flujo de comunes

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de comunes de Configuración de Parche

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parche".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Eliminar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- se muestra el mensaje de exito ¡Registro eliminado con éxito!
2- no se muestra en la tabla del front.

---

## Escenario: E37-C-02
**Descripcion:** Validar las reglas de negocio al eliminar un registro en el flujo de comunes

### Caso de prueba: E37-C-02.1
- Implementado: No

**Titulo:** Validar que no se pueda inactivar un registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Líneas

**Descripcion:** Validar que no se puede inactivar un registro desde el menú de acciones en el flujo de comunes de Lineas

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. si tiene productos asociados debe modificar antes esta relación. En caso contrario, se debe mostrar el mensaje de error. No se puede eliminar el registro ya que tiene datos asociados. Favor de validar.

**Datos:**
- Registro seleccionado para inactivar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Línea".
5. El usuario cambia el estado a inactivo
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El registro no ha cambiado a inactivo
1- Se muestra el mensaje de error: No es posible inactivar el registro porque existen dependencias activas asociadas.
### Caso de prueba: E37-C-02.2
- Implementado: No

**Titulo:** Validar que no se pueda inactivar un registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Grupo Producto

**Descripcion:** Validar que no se puede inactivar un registro desde el menú de acciones en el flujo de comunes de Grupo Producto

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. el registro está siendo usado

**Datos:**
- Registro seleccionado para inactivar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Grupo Producto".
5. El usuario cambia el estado a inactivo
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El registro no ha cambiado a inactivo
1- Se muestra el mensaje de error: No es posible inactivar el registro porque existen dependencias activas asociadas.
### Caso de prueba: E37-C-02.3
- Implementado: No

**Titulo:** Validar que no se pueda inactivar un registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Canales

**Descripcion:** Validar que no se puede inactivar un registro desde el menú de acciones en el flujo de comunes de Canales

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. si tiene subcanales asociados debe modificar antes esta relación. En caso contrario, se debe mostrar el mensaje de error. No se puede eliminar el registro ya que tiene datos asociados. Favor de validar.

**Datos:**
- Registro seleccionado para inactivar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Canales".
5. El usuario cambia el estado a inactivo
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El registro no ha cambiado a inactivo
1- Se muestra el mensaje de error: No es posible inactivar el registro porque existen dependencias activas asociadas.
### Caso de prueba: E37-C-02.4
- Implementado: No

**Titulo:** Validar que no se pueda inactivar un registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Subcanales

**Descripcion:** Validar que no se puede inactivar un registro desde el menú de acciones en el flujo de comunes de Subcanales

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. el registro está siendo usado

**Datos:**
- Registro seleccionado para inactivar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Subcanales".
5. El usuario cambia el estado a inactivo
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El registro no ha cambiado a inactivo
1- Se muestra el mensaje de error: No es posible inactivar el registro porque existen dependencias activas asociadas.
### Caso de prueba: E37-C-02.5
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Maestro UoA

**Descripcion:** Validar que no se puede inactivar/eliminar un registro desde el menú de acciones en el flujo de comunes de Maestro UoA

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. el registro está siendo usado en la corrida de un proceso.

**Datos:**
- Registro seleccionado para inactivar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Eliminar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
Mensaje del bloque 2
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-C-02.6
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Configuración de Parches

**Descripcion:** Validar que no se puede inactivar/eliminar un registro desde el menú de acciones en el flujo de comunes de Configuración de Parches

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. el registro está siendo usado

**Datos:**
- Registro seleccionado para inactivar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal del mensaje de error indicado.
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: E56-PAG
**Descripcion:** Validar el funcionamiento integral del paginador en el flujo de comunes

### Caso de prueba: E56-C-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de los elementos del paginador en el flujo de comunes

**Descripcion:** Validar que los elementos del paginador funcionen correctamente en el flujo de comunes

**Precondiciones:**
1. Si la vista selecionada de comunes tiene data cargada.
2. Al acceder inicialmente, esté sombreada la página 1 y bloquaedos los botones ''página anterior'' y ''primera página''
3. Tenga selecionada una opción por defecto (5) en el selector de filas por vista.
4. Si no hay data cargada, todos los elementos del paginador deben estar bloqueado.

**Datos:**
- Data para el flujo de comunes definida

**Pasos:**
1. 

**Resultado esperado:**
El sistema pagina correctamente
1- El selector de filas por vista dar la opción de selecionar.
2- Las filas mostradas en el front corresponden con la opción mostrada de 5, 10 o 20.
3- Se muestre la cantidad de páginas con respecto a la cantidad de elementos a mostrar.
4- al encontrarse en la primera página, los botones de ''página anterior'' y ''primera página'' deben estár bloqueados.
5- al encontrarse en la última página los botones de ''siguiente página'' y ''última página'' deben estár bloqueados.

---

## Escenario: E60-C-01
**Descripcion:** Validar el funcionamiento del boton ver mas columnas en el flujo de comunes

### Caso de prueba: E60-C-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón ver más columnas en el flujo de comunes de Maestro UoA

**Descripcion:** Validad el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. Estén configurados los nombre de las columnas del archivo Maestro UoA definido para el motor.
3. las columnas por defecto siempre se mostrarán
4. El campo del buscador debe permitir escribir el nombre de la columna que desea buscar

**Datos:**
- Nombre de las columnas que se muestran en el desplegable del archivo Maestro UoA del flujo de comunes: aniomes, ifrsGroup, profDesc, measureShortDesc, ifrsCurrency, entryYear, entryMonth, collectionName, grossCeded, uoaCeded, uoaPeriodo, Estatus.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón "Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-C-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento del buscador del componente columnas en el flujo de comunes de Maestro UoA

**Descripcion:** Validad el correcto funcionamiento del buscador al buscar el nombre de una columnas del archivo Maestro UoA de comunes

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. Estén configurados los nombre de las columnas del archivo Maestro UoA definido para el motor.
3. las columnas por defecto siempre se mostrarán
4. El campo del buscador debe permitir escribir el nombre de la columna que desea buscar

**Datos:**
- Nombre de las columnas que se muestran en el desplegable del archivo Maestro UoA del flujo de comunes: aniomes, ifrsGroup, profDesc, measureShortDesc, ifrsCurrency, entryYear, entryMonth, collectionName, grossCeded, uoaCeded, uoaPeriodo, Estatus.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón "Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario escribe el nombre de la columna que desea buscar en el filtro busqueda.
6. El usuario marca o desmarca el chek de la columna buscada.
7. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-C-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' del componente columnas en el flujo de comunes de Maestro UoA

**Descripcion:** Validad el correcto funcionamiento de la opción 'Mostrar todas'' del componente columnas del archivo Maestro UoA de comunes

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. Estén configurados los nombre de las columnas del archivo Maestro UoA definido para el motor.
3. las columnas por defecto siempre se mostrarán
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Nombre de las columnas que se muestran en el desplegable del archivo Maestro UoA del flujo de comunes: aniomes, ifrsGroup, profDesc, measureShortDesc, ifrsCurrency, entryYear, entryMonth, collectionName, grossCeded, uoaCeded, uoaPeriodo, Estatus.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón "Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario hace clic en la opción ''Mostrar todas''.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla del Front.
### Caso de prueba: E60-C-01.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' del componente columnas en el flujo de comunes de Maestro UoA

**Descripcion:** Validad el correcto funcionamiento de la opción ''Ocultar todas'' del componente columnas del archivo Maestro UoA de comunes

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. Estén configurados los nombre de las columnas del archivo Maestro UoA definido para el motor.
3. las columnas por defecto siempre se mostrarán
4. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Nombre de las columnas que se muestran en el desplegable del archivo Maestro UoA del flujo de comunes: aniomes, ifrsGroup, profDesc, measureShortDesc, ifrsCurrency, entryYear, entryMonth, collectionName, grossCeded, uoaCeded, uoaPeriodo, Estatus.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón "Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario hace clic en la opción ''Ocultar todas''.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla del Front solo las columnas del archivo definidas Por defecto.
### Caso de prueba: E60-C-01.5
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la selección de columnas por defecto del componente columnas en el flujo de comunes de Maestro UoA

**Descripcion:** Validad el correcto funcionamiento de la selección de columnas por defecto del componente columnas del archivo Maestro UoA de comunes

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. Estén configurados los nombre de las columnas del archivo Maestro UoA definido para el motor.
3. las columnas por defecto siempre se mostrarán
4. las columna definidas Por defecto, NO se pueden desmarcar manualmente

**Datos:**
- Nombre de las columnas que se muestran en el desplegable del archivo Maestro UoA del flujo de comunes: aniomes, ifrsGroup, profDesc, measureShortDesc, ifrsCurrency, entryYear, entryMonth, collectionName, grossCeded, uoaCeded, uoaPeriodo, Estatus.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón "Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario NO puede desmarcar manualmente las columnas Por defecto
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran la tabla del Front sin las columnas del archivo definidas Por defecto que han sido desmarcadas manualmente.
### Caso de prueba: E60-C-02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón ver más columnas en el flujo de comunes de Unidades de Cuenta - BBA/VFA

**Descripcion:** Validad el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. Estén configurados los nombre de las columnas del archivo Unidades de Cuenta - BBA/VFA definido para el motor.
3. las columnas por defecto siempre se mostrarán

**Datos:**
- Nombre de las columnas que se mostraran en el desplegable: obId, Periodo, SistemaOrigen, IdPoliza, CodigoProductoPacifico, NumeroPoliza, DescripcionUoA_LRC_LIC, DescripcionUoA_REA, CodigoMoneda, DescripcionMoneda, CodigoOnerosidad, DescripcionOnerosidad, AniadaAnio, AniadaMes, CodigoPortafolio, DescripcionPortafolio, CentroCosto, LineaNegocio, ProductoPPTO, CanalDistribucion, SubCanal, CodigoMetodologia, DescripcionMetodologia, CodigoLineaSBS, IndPolizaRehabilitada del archivo Unidades de Cuenta - BBA/VFA del flujo de comunes.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Unidades de Cuenta - BBA/VFA".
3. El usuario presiona el botón "Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-C-02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento del buscador del componente columnas en el flujo de comunes de Unidades de Cuenta - BBA/VFA

**Descripcion:** Validad el correcto funcionamiento del buscador al buscar el nombre de una columnas del archivo Unidades de Cuenta - BBA/VFA de comunes

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. Estén configurados los nombre de las columnas del archivo Unidades de Cuenta - BBA/VFA definido para el motor.
3. las columnas por defecto siempre se mostrarán
4. El campo del buscador debe permitir escribir el nombre de la columna que desea buscar

**Datos:**
- Nombre de las columnas que se mostraran en el desplegable: obId, Periodo, SistemaOrigen, IdPoliza, CodigoProductoPacifico, NumeroPoliza, DescripcionUoA_LRC_LIC, DescripcionUoA_REA, CodigoMoneda, DescripcionMoneda, CodigoOnerosidad, DescripcionOnerosidad, AniadaAnio, AniadaMes, CodigoPortafolio, DescripcionPortafolio, CentroCosto, LineaNegocio, ProductoPPTO, CanalDistribucion, SubCanal, CodigoMetodologia, DescripcionMetodologia, CodigoLineaSBS, IndPolizaRehabilitada del archivo Unidades de Cuenta - BBA/VFA del flujo de comunes.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Unidades de Cuenta - BBA/VFA".
3. El usuario presiona el botón "Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario escribe el nombre de la columna que desea buscar en el filtro busqueda.
6. El usuario marca o desmarca el chek de la columna buscada.
7. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-C-02.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' del componente columnas en el flujo de comunes de Unidades de Cuenta - BBA/VFA

**Descripcion:** Validad el correcto funcionamiento de la opción 'Mostrar todas'' del componente columnas del archivo Unidades de Cuenta - BBA/VFA de comunes

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. Estén configurados los nombre de las columnas del archivo Unidades de Cuenta - BBA/VFA definido para el motor.
3. las columnas por defecto siempre se mostrarán
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Nombre de las columnas que se mostraran en el desplegable: obId, Periodo, SistemaOrigen, IdPoliza, CodigoProductoPacifico, NumeroPoliza, DescripcionUoA_LRC_LIC, DescripcionUoA_REA, CodigoMoneda, DescripcionMoneda, CodigoOnerosidad, DescripcionOnerosidad, AniadaAnio, AniadaMes, CodigoPortafolio, DescripcionPortafolio, CentroCosto, LineaNegocio, ProductoPPTO, CanalDistribucion, SubCanal, CodigoMetodologia, DescripcionMetodologia, CodigoLineaSBS, IndPolizaRehabilitada del archivo Unidades de Cuenta - BBA/VFA del flujo de comunes.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Unidades de Cuenta - BBA/VFA".
3. El usuario presiona el botón "Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario hace clic en la opción ''Mostrar todas''.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla del Front.
### Caso de prueba: E60-C-02.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' del componente columnas en el flujo de comunes de Unidades de Cuenta - BBA/VFA

**Descripcion:** Validad el correcto funcionamiento de la opción ''Ocultar todas'' del componente columnas del archivo Unidades de Cuenta - BBA/VFA de comunes

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. Estén configurados los nombre de las columnas del archivo Unidades de Cuenta - BBA/VFA definido para el motor.
3. las columnas por defecto siempre se mostrarán
4. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Nombre de las columnas que se mostraran en el desplegable: obId, Periodo, SistemaOrigen, IdPoliza, CodigoProductoPacifico, NumeroPoliza, DescripcionUoA_LRC_LIC, DescripcionUoA_REA, CodigoMoneda, DescripcionMoneda, CodigoOnerosidad, DescripcionOnerosidad, AniadaAnio, AniadaMes, CodigoPortafolio, DescripcionPortafolio, CentroCosto, LineaNegocio, ProductoPPTO, CanalDistribucion, SubCanal, CodigoMetodologia, DescripcionMetodologia, CodigoLineaSBS, IndPolizaRehabilitada del archivo Unidades de Cuenta - BBA/VFA del flujo de comunes.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Unidades de Cuenta - BBA/VFA".
3. El usuario presiona el botón "Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario hace clic en la opción ''Ocultar todas''.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla del Front solo las columnas del archivo definidas Por defecto.

---

## Escenario: E62-ERROR
**Descripcion:** Validar el correcto tratamiento de errores propios del sistema

### Caso de prueba: E62-ERROR-02
- Implementado: No

**Titulo:** Validar el tratamiento de errores al descargar un archivo de comunes

**Descripcion:** Validar que se muestre el mensaje de error correcto ante una falla al descargar un archivo de parametrización o información

**Precondiciones:**
1. el usuario registrado tenga el rol de Administrador de Gastos
2. Se active el botón descarga

**Datos:**
- Archivo definidos en el proceso de Comunes cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas, grupo producto, canales, subcanales, maestro-uoa, unidades-cuenta-bba-vfa y configuracion-parches".
3. El usuario presiona el botón "Descargar".

**Resultado esperado:**
El archivo no ha sido descargado
1- Se muestra el mensaje de error: ''Ocurrió un error en el sistema durante la descarga del archivo. Intente más tarde. Si el problema persiste, contacte al equipo de soporte''
### Caso de prueba: E62-ERROR-03
- Implementado: No

**Titulo:** Validar el tratamiento de errores al agregar un Registro

**Descripcion:** Validar que se muestre el mensaje de error correcto ante una falla al agregar un Registro

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. los campos deben ser completados con datos validados.
3. el botón agregar funciona correctamente.

**Datos:**
- Archivo de comunes compartido dentro de los archivos imput para el Sprint 1.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Agregar/Editar Subcanales".
5. El usuario edita los campos
6. El usuario presiona el botón "Agregar".

**Resultado esperado:**
El registro no ha sido agregado.
1- Se muestra el mensaje de error: ''Ocurrió un error en el sistema durante la creación del Registro. Intente más tarde. Si el problema persiste, contacte al equipo de soporte''
### Caso de prueba: E62-ERROR-04
- Implementado: No

**Titulo:** Validar el tratamiento de errores al realizar una consulta.

**Descripcion:** Validar que se muestre el mensaje de error correcto ante una falla al realizar una consulta.

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. Todos los filtos deben estar activos.

**Datos:**
- Datos de los registros almacenados y elementos para uso de prueba (Números, Letras, carácteres especiales o combinaciones)

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario accede a los filtros de busqueda especificos (Código, Nombre, Unidad de Cuenta, Método de Valoración) , General (Buscar), etc

**Resultado esperado:**
La consulta no ha sido realizada
1- Se muestra el mensaje de error: ''Ocurrió un error en el sistema al realizar la consulta. Intente más tarde. Si el problema persiste, contacte al equipo de soporte''

---

## Escenario: E63-C-BUS
**Descripcion:** Validar el funcionamiento integral del buscador en el flujo de comunes

### Caso de prueba: E63-C-BUS
- Implementado: No

**Titulo:** Validar el correcto funcionamiento del buscador en la vista de distribución o en las vistas de la sección Comunes

**Descripcion:** Validar que el buscador filtra, encuentra y maneja los datos correctamente según los diferentes criterios de entrada.

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. Todos los filtos deben estar activos.

**Datos:**
- Datos de los registros almacenados y elementos para uso de prueba (Números, Letras, carácteres especiales o combinaciones)

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario accede a los filtros de busqueda especificos (Código, Nombre, Unidad de Cuenta, Método de Valoración) y General (Buscar)

**Resultado esperado:**
El sistema devuelve los resultados esperados y debe comportarse como se describe.
1- El resultado corresponde con a la columna correcta.
2- La busqueda en el filtro general devuelve todos los elementos encontrados a partir de los criterios de entrada.
3- A partir del tercer caracter brinda la opción de completamiento.
