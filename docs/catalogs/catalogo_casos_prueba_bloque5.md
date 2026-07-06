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
2-En la parte inferior de sidebar, se muestra el nombre y rol, al hacer click se muestra el correo y la acción de cerrar sesión.

---

## Escenario: E0-LOGIN-ADMIN-02
**Descripcion:** Validar que el sistema no restringe la modificación de archivos con el rol de Administrador

### Caso de prueba: E0-LOGIN-ADMIN-02
- Implementado: No

**Titulo:** Validar que el rol administrador puede visualizar y modificar los archivos comunes

**Descripcion:** Validar el rol Administrador de Gastos puede hacer uso total de las funcionalidades de la sección comunes

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos

**Datos:**
- Sección Comunes: Línea, Canales, Subcanal, Grupo Producto, Maestro UoA y Configuración de Parches únicamente accesible para usuarios con el rol "Administrador de Gastos"

**Pasos:**
1. El usuario accede a la página de inicio de sesion --> https://distribuciongastos.pacificotest.com.pe/
2. Ingresa el correo y contraseña y da click en el botón "inicio de sesión"
3. El usuario selecciona del menú lateral "Comunes" > "Líneas"
4. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
5. El usuario selecciona del menú lateral "Comunes" > "Canales".
6. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
7. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
8. El usuario selecciona del menú lateral "Comunes" > "Unidades de Cuenta - BBA/BFA".
9. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".

**Resultado esperado:**
1-El usuario accede correctamente al sistema y puede visualizar todas las secciones.
2-El usuario puede crear, editar, inactivar/eliminar registros en el flujo de comunes con su rol "Administrador de Gastos"

---

## Escenario: E0-LOGIN-GESTOR-ASIENTO-01
**Descripcion:** Validar que sistema permite autenticarse con el rol de Gestor de Asientos Manuales

### Caso de prueba: E0-LOGIN-GESTOR-ASIENTO-01
- Implementado: No

**Titulo:** Validar que el rol de Gestor de Asientos Manuales tiene acceso al sistema

**Descripcion:** Validar que un usuario con el rol de Gestor de Asientos Manuales pueda autenticarse al sistema.

**Precondiciones:**
1. Usuario creado en el sistema con rol Gestor de Asientos Manuales
2. El usuario está activo.
3. El usuario con el rol de Gestor de Asientos Manuales Solo podrá ejecutar acciones propias de Asientos Manuales

**Datos:**
- Rol: Gestor de Asientos Manuales
- Correo: inetum.Fernando.Alva@pacificotest.com.pe
- Contraseña: Duba753604123

**Pasos:**
1. El usuario accede a la página de inicio de sesión (https://distribuciongastos.pacificotest.com.pe/)
2. Ingresa el correo y contraseña y da click en el botón "inicio de sesión"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El sidebar muestra el rol Gestor de Asientos Manuales y al hacer click se muestra el correo y la accion de cerrar sesion
3-Se visualiza por defecto en el selector superior "Asientos Manuales" y no puede selecionar otro tipo de gasto.

---

## Escenario: E0-LOGIN-GESTOR-ASIENTO-02
**Descripcion:** Validar que el sistema restringe la modificación de archivos comunes a un rol de Gestor de Asientos Manuales

_Sin casos de prueba asociados._

---

## Escenario: E0-LOGIN-GESTOR-ASIENTO-03
**Descripcion:** Validar que el sistema restringe la eliminación de archivos a un rol de Gestor de Asientos Manuales para el flujo de Asientos Manuales

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-02
- Implementado: No

**Titulo:** Validar que el rol de Gestor de Asientos Manuales no pueda visualizar ni modificar los archivos ni datos de flujo de comunes

**Descripcion:** Validar el rol Gestor de Asientos Manuales no pueda visualizar ni modificar informacion de flujo de comunes

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de Asientos Manuales

**Datos:**
- Sección Comunes donde están: Línea, Canales, Subcanal, Grupo Producto, Maestro UoA y Configuración de Parches únicamente accecible para usuarios con el rol "Administrador de Gastos"

**Pasos:**
1. El usuario accede a la página de inicio de sesion --> https://distribuciongastos.pacificotest.com.pe/
2. Ingresa el correo y contraseña, con el rol correspondiente, dar click en el botón "inicio de sesión"
3. El usuario selecciona del menú lateral "Comunes"

**Resultado esperado:**
1-El usuario accede correctamente al sistema.
2-El usuario no puede visualizar el flujo de comunes
### Caso de prueba: E0-LOGIN-GESTOR-GASTO-03.1
- Implementado: No

**Titulo:** Validar que el rol de Gestor de Asientos Manuales no pueda eliminar registros de flujo de parametrización

**Descripcion:** Validar el rol Gestor de Asientos Manuales no pueda eliminar informacion de flujo de parametrización

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de Asientos Manuales

**Datos:**
- Archivos Parametrización :Partidas, Centros y Cuentas Contables
- Únicamente a usuarios con el rol "Administrador de Asientos Manuales" puede eliminar

**Pasos:**
1. El usuario accede a la página de inicio de sesión --> https://distribuciongastos.pacificotest.com.pe/
2. Ingresa el correo y contraseña, con el rol correspondiente, dar click en el botón "inicio de sesión"
3. El usuario selecciona de menú lateral "Parametrización " > "Cuentas Contables".
4. El usuario selecciona de menú lateral "Parametrización " > "Partidas"
5. El usuario selecciona de menú lateral "Parametrización " > "Centros ".

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no se le visualiza el icono para eliminar en las acciones en el flujo de Parametrización
### Caso de prueba: E0-LOGIN-GESTOR-GASTO-03.2
- Implementado: No

**Titulo:** Validar que el rol de gestor de Asientos Manuales no pueda eliminar registros de flujo de Aprovisionamiento

**Descripcion:** Validar el rol gestor de Asientos Manuales no pueda eliminar informacion de flujo de Aprovisionamiento

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de Asientos Manuales

**Datos:**
- Archivos Aprovisionamiento:
- Exactus (procesado)
- Exactus (sin procesar)
- Unidad de Cuenta AM
- Únicamente a usuarios con el rol "Administrador de Asientos Manuales" puede eliminar

**Pasos:**
1. El usuario accede a la página de inicio de sesión --> https://distribuciongastos.pacificotest.com.pe/
2. Ingresa el correo y contraseña, con el rol correspondiente, dar click en el botón "inicio de sesión"
3. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus"
4. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no se le visualiza el icono para eliminar en las acciones en el flujo de Aprovisionamiento

---

## Escenario: E40-DIS-01
**Descripcion:** Validar que el sistema pueda crear una nueva distribución

### Caso de prueba: E40-DIS-01
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de crear una nueva distribución

**Descripcion:** Validar que se pueda crear una nueva distribución desde el modal "Nueva Distribución"

**Precondiciones:**
1. El usuario debe ingresar con un rol Gestor de Asientos Manuales.
2. Está distribución no haya sido creada anteriormente.
3. El nombre se va formando con la información de los campos: período, Tipo y Sección o definado por el usuario.
4. Los campos Tipo, período y Secciones son select.

**Datos:**
- Campos de formulario
- Nombre: período Tipo Sección
- Tipo: Real NIIF
- período: catálogo con los periodos de año en curso, Ej: 202501, 202502, etc.
- Versión: número entero del 1 al 15. Ej: 1, 10
- Tasa de cambio: número entero de hasta 4 cifras, con 4 decimales, Ej:13.98, 1.09, 0.65, 1234.9778
- Secciones: Flujo de mes, Local, Ajuste de mes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona "Nueva Distribución".
3. Se levanta el modal con título "Crear distribución", el botón crear está deshabilitado
4. El usuario completa los campos y se habilita el botón crear.
5. El usuario presiona el botón crear
6. Se muestra un mensaje de éxito.

**Resultado esperado:**
El sistema crea una nueva distribución correctamente y muestra un mensaje de exito ¡Hecho! El registro se agregó sin problemas

---

## Escenario: E40-DIS-02
**Descripcion:** Validar las reglas de negocio al crear una nueva distribución

### Caso de prueba: E40-DIS-02
- Implementado: No

**Titulo:** Validar que no se pueda crear una nueva distribución porque no cumplen con las reglas definidas de negocio

**Descripcion:** Validar no se pueda crear una nueva distribución porque no cumplen con las reglas definidas de negocio desde el modal "Nueva Distribución"

**Precondiciones:**
1. El usuario debe ingresar con un rol Gestor de Asientos Manuales.
2. Está distribución ya ha sido creada anteriormente.
3. Solo se puede crear una distribución, no se puede editar.
4. El nombre se va formando con la información de los campos: período, Tipo y Sección.
5. Los campos Tipo, período y Secciones son select.

**Datos:**
- Todos los campos de formulario se han completado con los datos idénticos a una distribución creada anteriormente
- Nombre
- Tipo
- período
- Versión
- Tasa de cambio
- Secciones

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona "Nueva Distribución".
3. Se levanta el modal con título "Crear distribución", el botón crear está deshabilitado
4. El usuario completa los campos y se habilita el botón crear.
5. El usuario presiona el botón crear
6. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no crea una nueva distribución y muestra un mensaje de error Algo no coincide entre los datos ingresados. Por favor, revise que los campos están relacionados correctamente e intente de nuevo.

---

## Escenario: E40-DIS-03
**Descripcion:** Validar el formato de los campos de formulario al crear una nueva distribución

### Caso de prueba: E40-DIS-03
- Implementado: No

**Titulo:** Validar que no se pueda crear una nueva distribución por error de formato de los campos

**Descripcion:** Validar no se pueda crear una nueva distribución por error de formato de los campos

**Precondiciones:**
1. El usuario debe ingresar con un rol Gestor de Asientos Manuales.
2. Está distribución no haya sido creada anteriormente.

**Datos:**
- Campos de formulario
- Nombre: período Tipo Sección
- Tipo: Real NIIF
- período: catálogo con los periodos de año en curso, Ej: 202501, 202502, etc.
- Versión: número entero del 1 al 15. Ej: 1, 10
- Tasa de cambio: número entero de hasta 4 cifras, con 4 decimales, Ej:13.98, 1.09, 0.65, 1234.9778
- Secciones: Flujo de mes, Ajuste de mes, Ajuste de corrección y Reserva

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona "Nueva Distribución".
3. Se levanta el modal con título "Crear distribución", el botón crear está deshabilitado
4. El usuario completa los campos y se habilita el botón crear.
5. El usuario presiona el botón crear
6. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no crea una nueva distribución y muestra un mensaje Algunos datos tienen un formato no válido o contienen caracteres extraños

---

## Escenario: E40-DIS-04
**Descripcion:** Validar que el sistema pueda editar el nombre al crear una distribución con un rol de Gestor de Asientos Manuales

### Caso de prueba: E40-DIS-04
- Implementado: No

**Titulo:** Validar la Edición de nombre durante la creación de una distribución con el rol de Gestor de Asientos Manuales.

**Descripcion:** Validar que un usuario con el rol de Gestor de Asientos Manuales pueda modificar correctamente el nombre de una distribución durante su proceso de creación, asegurando que el sistema permite la edición de campo y guarde los cambios de forma exitosa.

**Precondiciones:**
1. El usuario debe ingresar con un rol de Gestor de Asientos Manuales.
2. Está distribución no haya sido creada anteriormente.

**Datos:**
- Campos de formulario
- Nombre:
- Tipo: Real NIIF., REAL LOCAL y PRESUPUESTO
- período: catálogo con los periodos de año en curso, Ej: 202501, 202502, etc.
- Versión: número entero del 1 al 15. Ej: 1, 10
- Tasa de cambio: número entero de hasta 4 cifras, con 4 decimales, Ej:13.98, 1.09, 0.65, 1234.9778
- Secciones: Flujo de mes, Ajuste de mes, Ajuste de corrección y Reserva

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona "Nueva Distribución".
3. Se levanta el modal con título "Crear distribución", el botón crear está deshabilitado
4. El usuario ingresa un nombre en el campo Nombre
5. El usuario selecciona el tipo, [REAL NIIF]
6. El sistema muestra una sugerencia debajo de campo de nombre con el texto: "Sugerencia: [Real NIIF]"
7. El usuario tiene dos opciones:
8. Si hace clic en “Aplicar”, el sistema actualiza el nombre con la sugerencia.
9. Si no hace clic en “Aplicar”, el nombre ingresado se mantiene sin cambios.
10. El usuario completa los demás campos obligatorios de formulario.
11. El sistema habilita el botón “Crear” una vez que todos los campos requeridos son válidos.
12. El usuario hace clic en el botón “Crear”.

**Resultado esperado:**
El sistema crea una nueva distribución con el nombre editado correctamente y muestra un mensaje de éxito ¡Hecho! El registro se agregó sin problemas

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
Si el estado es ''Creada'', todas sus fases mostrarán ''Sin ejecutar''.

---

## Escenario: E42-DIS-01
**Descripcion:** Validar la disponibilidad de la acción “Copiar” desde el menú de acciones según el estado de la distribución

### Caso de prueba: E42-DIS-01
- Implementado: No

**Titulo:** Validar que el sistema permite copiar una distribución desde el menú de acciones cuando el estado sea “Completada

**Descripcion:** Validar que se realice una copia de una distribución ya creada anteriormente.

**Precondiciones:**
1. El usuario debe ingresar con un rol Gestor de Asientos Manuales.
2. Se debe haber creado la distribución origen
3. La distribución selecciona para realizar la copia está en estado Completada

**Datos:**
- Data de la distribución seleccionada como origen para realizar la copia.
- Estado: completada

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona el icono "copy" para copiar el registro de la distribución seleccionada.
3. Se levanta un modal con el texto "Se va a copiar toda la información de la distribución seleccionada." donde se puede seleccionar el período y Versión"
4. El usuario hace clik en aceptar

**Resultado esperado:**
Se muestra en el frontend el nuevo registro de distribución, en donde se copian todos los datos de la distribución seleccionada, con el estado "creada"
### Caso de prueba: E42-DIS-01.1
- Implementado: No

**Titulo:** Validar que el sistema no muestre la opción “Copiar” en el menú de acciones cuando el estado sea diferente a “Completada”

**Descripcion:** Validar que no se muestre el icono de copiar en una distribución con estado diferente a completado

**Precondiciones:**
1. El usuario debe ingresar con un rol Gestor de Asientos Manuales.
2. Se debe haber creado la distribución origen
3. La distribución selecciona para realizar la copia está con estado diferente a Completada

**Datos:**
- Estado: creada, detenido, con errores y corriendo

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario busca una distribución en estado --> creada
3. El usuario busca una distribución en estado --> detenido
4. El usuario busca una distribución en estado --> con errores
5. El usuario busca una distribución en estado --> corriendo

**Resultado esperado:**
No se muestra en ninguna de las distribuciones el icono para copiar

---

## Escenario: E43-DIS-01
**Descripcion:** Validar la disponibilidad de la acción “Eliminar” desde el menú de acciones según el estado de la distribución

### Caso de prueba: E43-DIS-01.1
- Implementado: No

**Titulo:** Validar que el sistema permita Eliminar una distribución desde el menú de acciones cuando el estado sea “Creada" y su rol sea Administrador de Gastos

**Descripcion:** Validar que se pueda eliminar la distribución seleccionada.

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos.
2. La distribución debe estar creada anteriormente y su estado debe ser Creada

**Datos:**
- Data con la que fue creada la distribución y en estado Creada

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona el icono "basurero" para eliminar el registro seleccionado.
3. Se levanta un modal con la advertencia Se eliminarán todos los datos asociados a la distribución. ¿Desea continuar?

**Resultado esperado:**
Se elimina el registro seleccionado
1- Se muestra un mensaje de éxito ¡Registro eliminado con éxito!
2- se elimina el registro de la tabla distribución mostrada en el front.
### Caso de prueba: E43-DIS-01.2
- Implementado: No

**Titulo:** Validar que el sistema permita Eliminar una distribución desde el menú de acciones cuando el estado sea “Con errores" y su rol sea Administrador de Gastos

**Descripcion:** Validar que se pueda eliminar la distribución seleccionada.

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos.
2. La distribución debe estar creada anteriormente y su Estado debe ser Con Errores

**Datos:**
- Data con la que fue creada la distribución y su estado Con Errores

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. Selecciona una distribución en estado: Con Errores.
3. El usuario presiona el icono "basurero" para eliminar el registro seleccionado.
4. Se levanta un modal con la advertencia Se eliminarán todos los datos asociados a la distribución. ¿Desea continuar?
5. El usuario acepta

**Resultado esperado:**
Se elimina el registro seleccionado
1- Se muestra un mensaje de éxito ¡Registro eliminado con éxito!
2- Se elimina el registro de la tabla distribución mostrada en el front.
### Caso de prueba: E43-DIS-01.3
- Implementado: No

**Titulo:** Validar que el sistema No permita Eliminar una distribución desde el menú de acciones cuando el estado sea: “Detenida", “Corriendo" o “Completada"

**Descripcion:** Validar que NO se pueda eliminar la distribución seleccionada.

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos.
2. La distribución debe estar en Estado: Detenida, Corriendo o Completada

**Datos:**
- Data con la que fue creada la distribución y en estado Detenida

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario busca una distribución en estado --> Detenida
3. El usuario busca una distribución en estado --> Corriendo
4. El usuario busca una distribución en estado --> Completada

**Resultado esperado:**
No se muestra en ninguna de las distribuciones el icono para eliminar. Lo que impide eliminar la distribución.

---

## Escenario: E44-DIS-01
**Descripcion:** Validar que el sistema permite visualizar una distribución desde el listado de distribuciones

### Caso de prueba: E44-DIS
- Implementado: No

**Titulo:** Validar que se pueda visualizar una distribución seleccionanda del listado de la tabla principal

**Descripcion:** Validar que al seleccionar una distribución se muestran los datos correctamente en pantalla

**Precondiciones:**
1. El usuario debe ingresar con un rol de Gestor de Asientos Manuales
2. Se debe haber creado la distribución origen

**Datos:**
- Data con la que fue creada la distribución en cualquiera de sus estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario hace click en el nombre de distribución desde la tabla principal de distribuciones
3. Se levanta el modal y se muestra el texto "La información que se mostrará corresponde a la distribución seleccionada y período asociado a ella"
4. El usuario, el da clic en "Aceptar"

**Resultado esperado:**
Se muestra los datos seleccionado correctamente
1-Se actualiza el dropdown principal con la selección
2-La distribución seleccionada queda marca en celeste
3-Los datos ingresados a esa distribución se muestra correctamente
4-En la sección de procesos muestra el estado de la distribución seleccionada.

---

## Escenario: E58-AM-02
**Descripcion:** Validar que no se cargue el archivo sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Asientos Manuales

### Caso de prueba: E58-AM-02.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Exactus sin Procesar sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar la carga de un archivo REAL Exactus sin Procesar AM sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol Gestor de Asientos Manuales
2. No deben estar cargados los archivos: Líneas y Canal de Comunes y Cuentas Contables de Parametrización de AM.

**Datos:**
- Archivo ''REAL Exactus sin Procesar AM'' definidos en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
### Caso de prueba: E58-AM-02.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Unidad de Cuenta AM sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar la carga de un archivo REAL Unidad de Cuenta AM sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol Gestor de Asientos Manuales
2. No deben estar cargados los archivos: Grupo producto, Canal y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Unidad de Cuenta AM'' definidos en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Unidad de Cuenta", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.

---

## Escenario: E59-AM-01
**Descripcion:** Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en Parametrización de Asientos Manuales

### Caso de prueba: E59-AM-01.1
- Implementado: No

**Titulo:** Carga del archivo para Parametrización en Cuentas Contables que ya contenga información definido en el proceso Asientos Manuales

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia de archivo correspondiente
2. Usuario registrado tenga el rol Gestor de Asientos Manuales
3. que exista data cargada.

**Datos:**
- Archivo ''REAL Cuentas Contables AM'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con título "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-AM-01.2
- Implementado: No

**Titulo:** Carga de el archivo para Parametrización en Partidas que ya contenga información definido en el proceso Asientos Manuales

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia de archivo correspondiente
2. Usuario registrado tenga el rol Gestor de Asientos Manuales
3. que exista data cargada.

**Datos:**
- Archivo ''REAL Partidas AM'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con título "Cargar Partidas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-AM-01.3
- Implementado: No

**Titulo:** Carga de el archivo para Parametrización en Centros que ya contenga información definido en el proceso Asientos Manuales

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia de archivo correspondiente
2. Usuario registrado tenga el rol Gestor de Asientos Manuales
3. que exista data cargada.
4. .

**Datos:**
- Archivo ''REAL Centros AM'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con título "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E59-AM-02
**Descripcion:** Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en Aprovisionamiento de Asientos Manuales

### Caso de prueba: E59-AM-02.1
- Implementado: No

**Titulo:** Carga de el archivo para Aprovisionamiento en Exactus sin Procesar que ya contenga información definido en el proceso Asientos Manuales

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia de archivo correspondiente
2. Usuario registrado tenga el rol Gestor de Asientos Manuales
3. que exista data cargada.

**Datos:**
- Archivo ''REAL Exactus sin Procesar AM'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con título "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-AM-02.2
- Implementado: No

**Titulo:** Carga de el archivo para Aprovisionamiento en Unidad de Cuenta AM que ya contenga información definido en el proceso Asientos Manuales

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia de archivo correspondiente
2. Usuario registrado tenga el rol Gestor de Asientos Manuales
3. que exista data cargada.

**Datos:**
- Archivo ''REAL Unidad de Cuenta AM'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con título "Cargar Unidad de Cuenta", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E4-AM-01
**Descripcion:** Validación de la carga de los archivos en formato permitido en Parametrización de Asientos Manuales

### Caso de prueba: E4-AM-01.1
- Implementado: No

**Titulo:** Carga de archivo Cuentas Contables definidos en el proceso de Parametrización de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia de archivo correspondiente para el período
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales
3. Se debe haber creado una distribución para el período correspondiente

**Datos:**
- Archivo ''REAL Cuentas Contables AM'' definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-AM-01.1.1
- Implementado: No

**Titulo:** Funcionalidad botón subir nuevo archivo archivo Cuentas Contables definido en el proceso de Parametrización de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia de archivo correspondiente para el período
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales
3. Se debe haber creado una distribución para el período correspondiente

**Datos:**
- Archivo ''REAL Cuentas Contables AM'' definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ¨Cargar¨,
4. Si hay data cargada, se levanta el modal con titulo "Cargar Cuentas Contables", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo''
8. El usuario presiona el botón ''Subir un nuevo archivo'' y regresa al punto 5.
9. El usuario presiona " procesar archivo".
10. se muestra el mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-AM-01.2
- Implementado: No

**Titulo:** Carga de archivo Partidas definidos en el proceso de Parametrización de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia de archivo correspondiente para el período
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales
3. Se debe haber creado una distribución para el período correspondiente

**Datos:**
- Archivo "REAL Partidas AM" definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Partidas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Partidas ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-AM-01.2.1
- Implementado: No

**Titulo:** Funcionalidad botón subir nuevo archivo archivo Partidas definido en el proceso de Parametrización de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia de archivo correspondiente para el período
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales
3. Se debe haber creado una distribución para el período correspondiente

**Datos:**
- Archivo "REAL Partidas AM" definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Partidas", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo''
8. El usuario presiona el botón ''Subir un nuevo archivo'' y regresa al punto 5.
9. El usuario presiona " procesar archivo".
10. se muestra el mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Partidas ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-AM-01.3
- Implementado: No

**Titulo:** Carga de archivo Centros definidos en el proceso de Parametrización de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia de archivo correspondiente para el período
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales
3. Se debe haber creado una distribución para el período correspondiente

**Datos:**
- Archivo ''REAL Centros AM'' definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Centros ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-AM-01.3.1
- Implementado: No

**Titulo:** Funcionalidad botón subir nuevo archivo archivo Centros definido en el proceso de Parametrización de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia de archivo correspondiente para el período
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales
3. Se debe haber creado una distribución para el período correspondiente

**Datos:**
- Archivo ''REAL Centros AM'' definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Centros", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo''
8. El usuario presiona el botón ''Subir un nuevo archivo'' y regresa al punto 5.
9. El usuario presiona " procesar archivo".
10. se muestra el mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Centros ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E4-AM-02
**Descripcion:** Validación de la carga de los archivos en formato permitido en Aprovisionamiento de Asientos Manuales

### Caso de prueba: E4-AM-02.1
- Implementado: No

**Titulo:** Carga de archivo Exactus sin Procesar definidos en el proceso de Aprovisionamiento de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia de archivo correspondiente.
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales
3. deben estar cargados los archivos: Cuentas Contables de Parametrización de AM y Líneas y Canal de Comunes.

**Datos:**
- Archivo ''REAL Exactus sin Procesar AM'' definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > " Exactus".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Exactus, el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar"" y selecciona el archivo a Cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Exactus ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-AM-02.1.1
- Implementado: No

**Titulo:** Funcionalidad botón subir nuevo archivo Exactus sin procesar definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia de archivo correspondiente.
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales
3. deben estar cargados los archivos: Cuentas Contables de Parametrización de AM y Líneas y Canal de Comunes.

**Datos:**
- Archivo ''REAL Exactus sin Procesar AM'' definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Centros".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Centros", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo''
8. El usuario presiona el botón ''Subir un nuevo archivo'' y regresa al punto 5.
9. El usuario presiona " procesar archivo".
10. se muestra el mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Exactus ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-AM-02.2
- Implementado: No

**Titulo:** Carga de archivo Exactus procesado definidos en el proceso de Aprovisionamiento de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia de archivo correspondiente.
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales

**Datos:**
- Archivo ''REAL Exactus procesado AM'' definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > " Exactus procesado".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Exactus procesado, el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar"" y selecciona el archivo a Cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Exactus ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-AM-02.3
- Implementado: No

**Titulo:** Carga de archivo Unidad de Cuenta AM definidos en el proceso de Aprovisionamiento de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia de archivo correspondiente.
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales
3. deben estar cargados los archivos: Grupo producto, canal y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Unidad de Cuenta AM '' definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento " > "Unidad de Cuenta AM.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Unidad de Cuenta AM'' , el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Unidad de Cuenta AM ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-AM-02.3.1
- Implementado: No

**Titulo:** Carga de archivo Unidad de Cuenta AM definidos en el proceso de Aprovisionamiento de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia de archivo correspondiente.
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales
3. deben estar cargados los archivos: Grupo producto, canal y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Unidad de Cuenta AM '' definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > " Unidad de Cuenta AM ".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Unidad de Cuenta AM '', con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Cargar.
6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo''
7. El usuario presiona el botón ''Subir un nuevo archivo'' y regresa al punto 5.
8. El usuario presiona " procesar archivo".
9. se muestra el mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Unidad de Cuenta AM ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E5-AM-01
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad de proceso de Parametrización de Asientos Manuales

### Caso de prueba: E5-AM-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Cuentas Contables diferente al definidos en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Cuentas Contables a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. Las cabeceras de archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-AM-01.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Partidas diferente al definidos en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Partidas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Partidas a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. Las cabeceras de archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-AM-01.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Centros diferente al definidos en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Centros a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. Las cabeceras de archivo no coinciden con las esperadas. Verifique la plantilla.

---

## Escenario: E5-AM-02
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad de proceso de Aprovisionamiento de Asientos Manuales

### Caso de prueba: E5-AM-02.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Exactus sin Procesar diferente al definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.
3. deben estar cargados los archivos: Cuentas Contables de Parametrización de AM y Líneas y Canal de Comunes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Exactus a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. Las cabeceras de archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-AM-02.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Unidad de Cuenta AM diferente al definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.
3. deben estar cargados los archivos: Grupo producto, canal y Subcanal de Comunes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Unidad de Cuenta AM", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Unidad de Cuenta AM a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E6-AM-01
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Parametrización de Asientos Manuales sin datos

### Caso de prueba: E6-AM-01.1
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Cuentas Contables de proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura de archivo y sin datos
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales

**Datos:**
- Archivo "REAL Cuentas Contables AM" definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Cuentas Contables sin datos a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-AM-01.2
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Partidas de proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura de archivo y sin datos
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales

**Datos:**
- Archivo "REAL Partidas AM" definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Partidas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Partidas sin datos a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-AM-01.3
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Centros de proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura de archivo y sin datos
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales

**Datos:**
- Archivo "REAL Centros AM" definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Centros sin datos a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E6-AM-02
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Aprovisionamiento de Asientos Manuales sin datos

### Caso de prueba: E6-AM-02.1
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Exactus sin Procesar de proceso de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura de archivo y sin datos
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales

**Datos:**
- Archivo "REAL Exactus AM" definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus ".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Exactus ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Exactus sin datos a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-AM-02.2
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Unidad de Cuenta AM de proceso de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura de archivo y sin datos
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales

**Datos:**
- Archivo "REAL Unidad de Cuenta AM" definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Unidad de Cuenta AM", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Unidad de Cuenta AM sin datos a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E8-AM-01
**Descripcion:** Validar la carga de un archivo con los datos incompletos en Parametrización de Asientos Manuales

### Caso de prueba: E8-AM-01.1
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Cuentas Contables definido en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el período

**Precondiciones:**
1. Archivo preparado a partir de archivo para Cuentas Contables definido para el período
2. Usuario registrado tenga el rol Gestor de Asientos Manuales

**Datos:**
- 1- Archivo Cuentas Contables definidos en el proceso de Asientos Manuales
- 2- Campos:
- Cuenta Contable: Obligatorio
- Nombre Cuenta Contable: Obligatorio
- Tipo de Gasto: Obligatorio
- NIIF 17 Atribuible: Opcional
- NIIF 17 Tipo: Opcional
- NIIF Clase: Opcional
- Coódigo Concepto: Obligatorio
- Concepto N1: Obligatorio
- Concepto N2: Obligatorio
- Concepto N3: Obligatorio
- Concepto NIIF17: Obligatorio

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos
### Caso de prueba: E8-AM-01.2
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Partidas definido en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el período

**Precondiciones:**
1. Archivo preparado a partir de archivo para Partidas definido para el período
2. Usuario registrado tenga el rol Gestor de Asientos Manuales

**Datos:**
- 1- Archivo Partidas definidos en el proceso de Asientos Manuales
- 2- Campos:
- Código Partida: Obligatorio
- Partida: Obligatorio
- Grupo Gasto: Obligatorio
- Tipo Gasto: Obligatorio

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar Partidas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos
### Caso de prueba: E8-AM-01.3
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Centros definido en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el período

**Precondiciones:**
1. Archivo preparado a partir de archivo para Centros definido para el período
2. Usuario registrado tenga el rol Gestor de Asientos Manuales

**Datos:**
- 1- Archivo Centros definidos en el proceso de Asientos Manuales
- 2- Campos:
- Código Centro: Obligatorio
- Centro: Obligatorio
- Tipo: Obligatorio
- NIvel:Opcional
- Centro Padre: Opcional
- Tipo Gasto: Opcional
- NIIF17 Atribuible: Opcional
- NIIF17 Tipo: Opcional
- NIIF17 Clase: Opcional
- Grupo CECO: Opcional
- Tipo CECO: Opcional

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Centros ".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

## Escenario: E8-AM-02
**Descripcion:** Validar la carga de un archivo con los datos incompletos en Aprovisionamiento de Asientos Manuales

### Caso de prueba: E8-AM-02.1
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Exactus sin Porcesar definido en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el período

**Precondiciones:**
1. Archivo preparado a partir de archivo para Centros definidos
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales

**Datos:**
- 1- Archivo Exactus definidos en el proceso de Gastos Técnico
- 2- Campos:
- Cuenta Contable: Obligatorio
- Nombre Cuenta Contable: Obligatorio
- Asiento: Obligatorio
- Tipo De Documento: Opcional
- Documento: Opcional
- Referencia: Opcional
- Débito Local: Opcional
- Débito Dólar: Opcional
- Crédito Local: Opcional
- Crédito Dólar: Opcional
- Centro Costo: Obligatorio
- Descripción Centro Costo: Obligatorio
- Tipo De Asiento: Obligatorio
- Fecha: Opcional
- NIT: Opcional
- Razón Social: Opcional
- Fuente: Opcional
- Notas: Opcional
- Flujo Efectivo: Opcional
- Patrimonio Neto: Opcional
- Partida: Opcional
- Broker: Opcional
- Canal Alt.: Opcional
- Cliente: Opcional
- Segmento: Opcional
- Poliza: Opcional
- Siniestro: Opcional
- Producto: Opcional
- Canal Distribución: Opcional
- Cuenta Origen: Opcional
- Tipo Asiento: Opcional
- Asiento Origen: Opcional
- Centro Costo Origen: Opcional
- Identificador NIIF: Opcional
- Tipo Documento Cliente: Opcional
- Nombre Broker: Opcional
- Nombre Canal Alt.: Opcional
- Nombre Producto: Opcional
- Grupo Comercial: Opcional
- Nombre Grupo Comercial: Opcional
- Segmento Mercado: Opcional
- Fecha Inicio Vigencia Poliza: Opcional
- Fecha Fin Vigencia Poliza: Opcional
- Tipo Transacción: Opcional

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales .
2. El usuario selecciona de menú lateral "Aprovisionamiento " > "Exactus".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos
### Caso de prueba: E8-AM-02.2
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Unidad de Cuenta AM definido en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el período

**Precondiciones:**
1. Archivo preparado a partir de archivo para Unidad de Cuenta AM definido
2. Usuario registrado tenga el rol de Gestor de Asientos Manuales

**Datos:**
- 1- Archivo Unidad de Cuenta AM definidos en el proceso de Gastos Técnico
- 2- Campos:
- Prioridad: Obligatorio
- Código Concepto: Opcional
- Moneda: Opcional
- Dígito de Cuenta: Opcional
- Código Ramo: Opcional
- Grupo Producto: Opcional
- Subcanal: Opcional
- Unidad de Cuenta: Obligatorio
- Factor: Obligatorio

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales .
2. El usuario selecciona de menú lateral "Aprovisionamiento " > " Unidad de Cuenta AM ".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar Unidad de Cuenta AM ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

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
### Caso de prueba: E61-AM-01.2
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Partidas definido en la parametrización de Asientos Manuales

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso para el período

**Precondiciones:**
1. El archivo Partidas debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Asientos Manuales.

**Datos:**
- Archivo ''REAL Partidas AM'' preparado para la prueba en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Partidas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Cargar.
5. seleccionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-AM-01.3
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Centros definido en en la parametrización de Asientos Manuales

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso para el período

**Precondiciones:**
1. El archivo Centros debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Administrador de Asientos Manualeso
3. Gestor de Asientos Manuales.

**Datos:**
- Archivo ''REAL Centros AM'' preparado para la prueba en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Centros ".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Cargar.
5. seleccionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

## Escenario: E61-AM-02
**Descripcion:** Validar que no se cargue un archivo de más de 30 Mb en Aprovisionamiento de Asientos Manuales

### Caso de prueba: E61-AM-02.1
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Exactus sin Procesar de Aprovisionamiento definido en el proceso de Asientos Manuales

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Exactus sin procesar debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Asientos Manuales.

**Datos:**
- Archivo ''REAL Exactus sin Procesar'' preparado para la prueba en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Cargar.
5. seleccionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-AM-02.2
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Exactus procesado de Aprovisionamiento definido en el proceso de Asientos Manuales

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Exactus procesado debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Asientos Manuales.

**Datos:**
- Archivo ''REAL Exactus procesado'' preparado para la prueba en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus .
3. El usuario presiona el botón ¨Exactus procesado¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar Exactus procesado", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Cargar.
6. seleccionar el archivo que exceda el peso permitido
7. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-AM-02.3
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Unidad de Cuenta AM de Aprovisionamiento definido en el proceso de Asientos Manuales

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Unidad de Cuenta AM procesado debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Asientos Manuales.

**Datos:**
- Archivo ''REAL Unidad de Cuenta AM'' preparado para la prueba en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Unidad de Cuenta AM", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Cargar.
5. seleccionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

## Escenario: E70-AM-01
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga de archivo en el proceso de Parametrización de flujo de Asientos Manuales

### Caso de prueba: E70-AM-01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Cuentas Contables de la Parametrización de Asientos Manuales porque no cumple con las reglas de negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio desde la carga de archivos de Cuentas Contables

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. El archivo REAL Cuentas Contables AM debe estar disponible
3. Reglas de negocio y formato para esté archivo:
4. Los valores de código Cuenta Contable debe ser único
5. La cuenta contable Los 2 primeros dígitos deben ser 40, 43 y 50, el 3er dígito 1 o 2; el 4to dígito entre 0 y 9 o una letra; y los bloques siguientes entre 01 y 99 o la combinación de letras, por ejemplo OO
6. Los campos obligatorios son Cuenta Contable, Nombre Cuenta Contable, Tipo de gasto, Código concepto, Concepto N1, Concepto N2, Concepto N3 y Concepto NIIF17.
7. Tipo de gasto: IF, 0, 1
8. Niif17 Atribuible: NO, SI
9. Niif17 Tipo: GA, GM
10. Niif17 Clase: FI, VA

**Datos:**
- Archivo ''REAL Cuentas Contables AM'' preparado para la prueba en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Cuentas Contables AM preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.
### Caso de prueba: E70-AM-01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Partidas de la Parametrización de Asientos Manuales porque no cumple con las reglas de negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio desde la carga de archivos de Partidas

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. El archivo REAL Partidas AM debe estar disponible
3. Reglas de negocio y formato para esté archivo:
4. Todos los Campos son Obligatorios
5. El campo Grupo Gasto: GT,GP,GM
6. El campo Tipo Gasto: DIRECTO, INDIRECTO

**Datos:**
- Archivo ''REAL Partidas AM'' preparado para la prueba en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Partidas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Partidas AM preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.
### Caso de prueba: E70-AM-01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Centros de la Parametrización de Asientos Manuales porque no cumple con las reglas de negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio desde la carga de archivos de Centros

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. El archivo REAL Centros AM debe estar disponible
3. Reglas de negocio y formato para esté archivo
4. El código centro debe ser unico
5. Los campos obligatorios son Código centro, Centro y Tipo.
6. Tipo: ASIENTOS, BOLSA, CANAL, FICTICIO, LINEA, PROYECTO, SALUD, SOPORTE, STAFF
7. Tipo gasto: 1 - DIRECTO, 0 - INDIRECTO
8. NIIF17 Atribuible Tipo: NO, SI
9. NIIF17 Tipo: GA, GM
10. NIIF17 Clase: FI, VA

**Datos:**
- Archivo ''REAL Centros AM'' preparado para la prueba en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Centros AM preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: E70-AM-02
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga de archivo en el proceso de Aprovisionamiento de Asientos Manuales

### Caso de prueba: E70-AM-02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Exactus sin Procesar de la Aprovisionamiento de Asientos Manuales porque no cumple con las reglas de negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio desde la carga de archivos de Exactus

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. El archivo REAL Exactus AM debe estar disponible
3. Reglas de negocio y formato para esté archivo

**Datos:**
- Archivo ''REAL Exactus sin Procesar AM'' preparado para la prueba en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Exactus AM preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.
### Caso de prueba: E70-AM-02.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Unidad de Cuenta AM de la Aprovisionamiento de Asientos Manuales porque no cumple con las reglas de negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio desde la carga de archivos de Unidad de Cuenta AM

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. El archivo REAL Unidad de Cuenta AM AM debe estar disponible
3. Reglas de negocio y formato para esté archivo
4. Los campos Prioridad, Unidad de Cuenta y factor son obligatorios
5. Los campos Código Concepto: Código Ramo, Grupo Producto , Subcanal y Unidad de Cuenta deben existir y estar previamente registrados en sus respectivos catálogos maestros.
6. El campo Prioridad debe contener un valor numérico entre 1 y 4.
7. El Código de Concepto exista en el catálogo de conceptos dentro de " Cuentas Contables"
8. Para un mismo registro con el mismo Código de Concepto, Producto y Subcanal, la Unidad de Cuenta debe ser única y la suma de sus factores debe ser igual a 1.
9. El valor de campo Dígito de la Cuenta debe ser 40, 43 o 50, que corresponden a las Cuentas Contables aplicables para Asientos Manuales. En caso contrario,debe mostrar un mensaje de error y no permitir el registro.
10. EL valor de Factor debe esatr entre 0 y 1

**Datos:**
- Archivo ''REAL Unidad de Cuenta AM'' preparado para la prueba en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Unidad de Cuenta AM", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Unidad de Cuenta AM AM preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: E9-AM-01
**Descripcion:** Validar que se muestran en el FrontEnd los datos de los archivos cargados en el proceso de Parametrización de Asientos Manuales

### Caso de prueba: E9-AM-01.1
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos del archivo Cuentas Contables definidos en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Cuentas Contables cargado

**Precondiciones:**
1. La carga exitosa de archivo ''REAL Cuentas Contables AM''

**Datos:**
- Archivo Cuentas Contables ''REAL Cuentas Contables AM'' definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-AM-01.2
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos del archivo Partidas definidos en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Partidas cargado

**Precondiciones:**
1. La carga exitosa de archivo ''REAL Partidas AM''

**Datos:**
- Archivo Partidas ''REAL Partidas AM'' definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Partidas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-AM-01.3
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos del archivo Centros definidos en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Centros cargado

**Precondiciones:**
1. La carga exitosa de archivo ''REAL Centros AM''

**Datos:**
- Archivo Centros ''REAL Centros AM'' definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: E9-AM-02
**Descripcion:** Validar que se muestran en el FrontEnd los datos de los archivos cargados en el proceso de Aprovisionamiento de Asientos Manuales

### Caso de prueba: E9-AM-02.1
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos del archivo Exactus sin Procesar definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Exactus cargado

**Precondiciones:**
1. La carga exitosa de archivo ''REAL Exactus sin Procesar AM''

**Datos:**
- Archivo Centros ''REAL Exactus sin Procesar AM'' definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus ".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Exactus ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-AM-02.2
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos del archivo Unidad de Cuenta AM definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Unidad de Cuenta AM cargado

**Precondiciones:**
1. La carga exitosa de archivo ''REAL Unidad de Cuenta AM''

**Datos:**
- Archivo Unidad de Cuenta AM ''REAL Unidad de Cuenta AM'' definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Unidad de Cuenta AM", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.

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
### Caso de prueba: E10-AM-01.2
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Partidas definidos en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Partidas definido en el proceso de Parametrización de Asientos Manuales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-AM-01.3
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Centros definidos en el proceso de Parametrización de Asientos Manuales

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Centros definido en el proceso de Parametrización de Asientos Manuales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Centros ".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E10-AM-02
**Descripcion:** Validar la correcta ejecución de flujo de descarga en Aprovisionamiento de Asientos Manuales

### Caso de prueba: E10-AM-02.1
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Exactus sin Procesar definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Exactus sin Procesar definido en el proceso de Aprovisionamiento de Asientos Manuales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-AM-02.2
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Unidad de Cuenta AM definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Unidad de Cuenta AM definido en el proceso de Aprovisionamiento de Asientos Manuales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E11-AM-01
**Descripcion:** Validar que el archivo descargado en el proceso de Parametrización de Asientos Manuales muestre los datos correctamente y no tenga perdida de información

### Caso de prueba: E11-AM-01.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Cuentas Contables de proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar alteraciones en los datos de archivo Cuentas Contables descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Cuentas Contables definido en el proceso de Parametrización de Asientos Manuales descargado de motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-AM-01.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Partidas de proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar alteraciones en los datos de archivo Partidas descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Partidas definido en el proceso de Parametrización de Asientos Manuales descargado de motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-AM-01.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Centros de proceso de Parametrización de Asientos Manuales

**Descripcion:** Validar alteraciones en los datos de archivo Centros descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Centros definido en el proceso de Parametrización de Asientos Manuales descargado de motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Centros ".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E11-AM-02
**Descripcion:** Validar que el archivo descargado en el proceso de Aprovisionamiento de Asientos Manuales muestre los datos correctamente y no tenga perdida de información

### Caso de prueba: E11-AM-02.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Exactus sin Procesar de proceso de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar alteraciones en los datos de archivo Centros descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Exactus definido en el proceso de Aprovisionamiento de Asientos Manuales descargado de motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-AM-02.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Unidad de Cuenta AM de proceso de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Unidad de Cuenta AM definido en el proceso de Aprovisionamiento de Asientos Manuales descargado de motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E71-AM-01
**Descripcion:** Validación de la carga de los archivos descargados en Parametrización de Asientos Manuales

### Caso de prueba: E71-AM-01.1
- Implementado: No

**Titulo:** Validar la carga de archivo de Cuentas Contables descargado en la parametrización de Asientos Manuales

**Descripcion:** Validar que el archivo descargado se pueda Cargar satisfactoriamente para está pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. El archivo Cuentas Contables debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Cuentas Contables AM'' descargado en el proceso de descarga de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con título "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-AM-01.2
- Implementado: No

**Titulo:** Validar la carga de archivo de Partidas descargado en la parametrización de Asientos Manuales

**Descripcion:** Validar que el archivo descargado se pueda Cargar satisfactoriamente para está pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. El archivo Partidas debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Partidas AM'' descargado en el proceso de descarga de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con título "Cargar Partidas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Partidas ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-AM-01.3
- Implementado: No

**Titulo:** Validar la carga de archivo de Centros descargado en la parametrización de Asientos Manuales

**Descripcion:** Validar que el archivo descargado se pueda Cargar satisfactoriamente para está pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. El archivo Centros debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Centros AM'' descargado en el proceso de descarga de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con título "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Centros ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E71-AM-02
**Descripcion:** Validación de la carga de los archivos descargados en Aprovisionamiento de Asientos Manuales

### Caso de prueba: E71-AM-02.1
- Implementado: No

**Titulo:** Validar la carga de archivo de Exactus sin Procesar descargado en la parametrización de Asientos Manuales

**Descripcion:** Validar que el archivo descargado se pueda Cargar satisfactoriamente para está pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. El archivo Exactus debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Exactus sin Procesar AM'' descargado en el proceso de descarga de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con título "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Exactus ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-AM-02.2
- Implementado: No

**Titulo:** Validar la carga de archivo de Exactus procesado descargado en la parametrización de Asientos Manuales

**Descripcion:** Validar que el archivo descargado se pueda Cargar satisfactoriamente para está pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. El archivo Exactus debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Exactus procesado AM'' descargado en el proceso de descarga de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con título "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Exactus ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-AM-02.3
- Implementado: No

**Titulo:** Validar la carga de archivo de Unidad de Cuenta AM descargado en la parametrización de Asientos Manuales

**Descripcion:** Validar que el archivo descargado se pueda Cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales
2. El archivo Unidad de Cuenta AM debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Unidad de Cuenta AM'' descargado en el proceso de descarga de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con título "Cargar Unidad de Cuenta AM", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Unidad de Cuenta AM ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.

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
- Niif17 Atribuible:SI, NO
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
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora
### Caso de prueba: E35-AM-01.01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Partidas definido en la Parametrización de flujo de Asientos Manuales

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Partidas" de Partidas

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. La distribución está en estado creada.
3. Todos los campos son obligatorios

**Datos:**
- Campos de formulario
- Código Partida: CN07
- Partida: Distribución ramos generales PGA
- Grupo Gasto: GT, GO, GM
- Tipo Gasto: DIRECTO, INDIRECTO

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Partidas".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-Se muestra el mensaje de éxito ¡Hecho! El registro se agregó sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora
### Caso de prueba: E35-AM-01.01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Centros definido en la Parametrización de flujo de Asientos Manuales

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Centros" de Centros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. La distribución está en estado creada.
3. El código centro debe ser unico
4. Los campos obligatorios son Código centro, Centro y Tipo.
5. Campo Nivel: Se acepta 1 o 2 digitos, entre 0 y 99.

**Datos:**
- Campos de formulario
- Código centro: 60.01.01
- Centro: CUM - GERENCIA DE CUMPLIMIENTO Y ETICA
- Tipo: ASIENTOS, BOLSA,CANAL,FICTICIO,LINEA,PROYECTO,SALUD,SOPORTE,STAFF
- Nivel: 2
- Centro padre
- Tipo gasto: DIRECTO, INDIRECTO
- NIIF17 Atribuible Tipo: NO, SI
- NIIF17 Tipo: GA. GM
- NIIF17 Clase: FI, VA
- Grupo CECO: CUMPLIMIENTO
- Tipo CECO: STAFF

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Centros".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-Se muestra el mensaje de éxito ¡Hecho! El registro se agregó sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora
### Caso de prueba: E35-AM-01.02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Unidad de Cuenta AM definido en el Aprovisionamiento de flujo de Asientos Manuales

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Unidad de Cuenta AM" de Unidad de Cuenta AM

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. La distribución está en estado creada.
3. El campo Prioridad es obligatorio
4. En el valor de factor debe usarse punto para indicar decimales.
5. El campo Prioridad es obligatorio y debe contener un valor numérico entre 1 y 4.
6. El Código de Concepto exista en el catálogo de conceptos dentro de " Cuentas Contables"
7. Para un mismo registro con el mismo Código de Concepto, Producto y Subcanal, la Unidad de Cuenta debe ser única y la suma de sus factores debe ser igual a 1.
8. El valor de campo Dígito de la Cuenta debe ser 40, 43 o 50, que corresponden a las Cuentas Contables aplicables para Asientos Manuales. En caso contrario,debe mostrar un mensaje de error y no permitir el registro.
9. EL valor de Factor debe estar entre 0 y 1

**Datos:**
- Campos de formulario
- Prioridad: Seleccionar la Prioridad correspondiente [1 o 4]
- Código Concepto: Se selecciona el Código concepto correspondiente Ej: 07.04.00
- Moneda: Se selecciona la moneda correspondiente [PEN,USD]
- Dígito de Cuenta: Seleccionar el Dígito de Cuenta correspondiente [40, 43 o 50]
- Código Ramo: Se selecciona el Código Ramo correspondiente Ej: [01,70]
- Grupo Producto: Se selecciona el Grupo Producto correspondiente Ej: [AFP003]
- Subcanal: Se selecciona el subcanal correspondiente Ej; [AFPS2]
- Unidad de Cuenta: Se selecciona la Unidad de Cuenta correspondiente Ej: IFRS_GRP_2021_UNIQUE SISCO2_PEN_PAA_Ceded_Prof
- Factor: [1,0.234,-10]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Unidad de Cuenta AM".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-Se muestra el mensaje de éxito ¡Hecho! El registro se agregó sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

## Escenario: E35-AM-02
**Descripcion:** Validar las reglas de negocio al agregar un registro en el flujo de Asientos Manuales

### Caso de prueba: E35-AM-02.01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Cuentas Contables de la Parametrización de Asientos Manuales porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Cuenta Contable" de Cuentas Contables

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. La distribución está en estado creada.
3. Existe al menos un registro, el cual será utilizado como referencia para ingresar datos idénticos en el formulario.

**Datos:**
- Campos de formulario
- Juego de Dato 1:
- Los valores para cada campo serán idénticos a los mostrado en el registro seleccionado de la tabla Cuenta Contable mostrada en el front
- Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-AM-01.01.1

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > " Cuentas Contables".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Cuentas Contables".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-AM-02.01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Partidas de la Parametrización de Asientos Manuales porque no cumple con las reglas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Partidas" de Partidas

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. La distribución está en estado creada.
3. Existe al menos un registro, el cual será utilizado como referencia para ingresar datos idénticos en el formulario.

**Datos:**
- Campos de formulario
- Juego de Dato 1:
- Los valores para cada campo serán idénticos a los mostrado en el registro seleccionado de la tabla Partidas mostrada en el front
- Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-AM-01.01.2

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Partidas".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-AM-02.01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Centros de la Parametrización de Asientos Manuales porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Centro" de Centros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. La distribución está en estado creada.
3. Existe al menos un registro, el cual será utilizado como referencia para ingresar datos idénticos en el formulario.

**Datos:**
- Campos de formulario
- Juego de Dato 1:
- Los valores para cada campo serán idénticos a los mostrado en el registro seleccionado de la tabla centros mostrada en el front
- Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-AM-01.01.3

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Centros".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-AM-02.02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Unidad de Cuenta AM de Aprovisionamiento de Asientos Manuales porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Unidad de Cuenta AM" de Unidad de Cuenta AM

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. La distribución está en estado creada.
3. Existe al menos un registro, el cual será utilizado como referencia para ingresar datos idénticos en el formulario.

**Datos:**
- Campos de formulario
- Juego de Dato 1:
- Los valores para cada campo serán idénticos a los mostrado en el registro seleccionado de la tabla Unidad de Cuenta AM mostrada en el front
- Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-AM-01.02.1

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Unidad de Cuenta AM".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente

---

## Escenario: E35-AM-03
**Descripcion:** Validar el formato y campos obligatorios de formulario en un nuevo registro en el flujo de Asientos Manuales

### Caso de prueba: E35-AM-03-01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el flujo de Asientos Manuales de Cuentas Contables

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Cuentas Contables" de Cuentas Contables

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. La distribución está en estado creada.

**Datos:**
- Obligatoriedad
- Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacíos.
- Obligatoriedad y Formato (Valores Incorrectos)

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > " Cuentas Contables".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Cuentas Contables".
5. No agrega Información y deja campos vacíos
6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:
-Código es requerido / Ingrese un valor numérico entre 6 y 14 dígitos, separado por puntos y con formato NN.N.N.NN.NN.NN (Ej.: 44.1.7.40.09.10).
-Nombre Cuenta Contable es requerido
-Tipo de gasto es requerido
-Concepto es requerido
-Concepto N1 es requerido
-Concepto N2 es requerido
-Concepto N3 es requerido
-ConceptoNIIF es requerido
-No se habilita el campo Agregar
### Caso de prueba: E35-AM-03-01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los Asientos Manuales en el flujo de Partidas

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Partidas" de Partidas

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. La distribución está en estado creada.

**Datos:**
- Obligatoriedad
- Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacíos.
- Obligatoriedad y Formato (Valores Incorrectos)
- Código Partida: COD1205U
- Partida: Distribución 50% ramo vida y 50% generales PGA
- Grupo Gasto: Select GT, GP, GM
- Tipo Gasto: Select INDIRECTO, DIRECTO

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Partidas".
5. No agrega Información y deja campos vacíos
6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:
-Código Partidas: ''El Código Partida es requerido''
-Nombre Partida: ''El Nombre Partida es requerido''
-Partida: ''La Partida es requerida''
-Grupo Gasto: ''Grupo Gasto es requerido''
-Tipo Gasto: ''Tipo Gasto es requerido''
-No se habilita el campo Agregar
### Caso de prueba: E35-AM-03-01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el flujo de Asientos Manuales de Centros

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Centros" de Centros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. La distribución está en estado creada.

**Datos:**
- Obligatoriedad
- Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacíos.
- Obligatoriedad y Formato (Valores Incorrectos)

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Centros".
5. No agrega Información y deja campos vacíos
6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:
-Código Centro: ''El Código Centro es requerido''
-Centro: ''El Centro es requerido''
-Tipo: ''Tipo es requerido''
-No se habilita el campo Agregar
### Caso de prueba: E35-AM-03-02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el flujo de Asientos Manuales de Unidad de Cuenta AM

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Unidad de Cuenta AM" de Unidad de Cuenta AM

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. La distribución está en estado creada.

**Datos:**
- Obligatoriedad
- Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacíos.
- Obligatoriedad y Formato (Valores Incorrectos)

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Unidad de Cuenta AM".
5. No agrega Información y deja campos vacíos
6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:
-Prioridad: ''Prioridad es requerido''
-Unidad de cuenta: ''Unidad de cuenta es requerido''
-Factor: ''Factor es requerido''
-No se habilita el campo Agregar

---

## Escenario: E35-AM-04
**Descripcion:** Validar que el sistema sobreescriba datos manuales mediante la carga de archivo en el flujo de Asientos Manuales

### Caso de prueba: E35-AM-04-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Cargar el archivo período en el flujo de Parametrización de Cuentas Contables

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Cuentas Contables definido

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. Si hay data cargada, enviar mensaje de advertencia.
3. Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Cuentas Contables AM'' definido en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > " Cuentas Contables".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Cuenta Contable".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información de registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con título "Cargar Cuenta Contable", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-AM-04-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Cargar el archivo período en el flujo de Parametrización de Partidas

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Partidas definido

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. Si hay data cargada, enviar mensaje de advertencia.
3. Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Partidas AM'' definido en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > " Partidas".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Partidas".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información de registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con título "Cargar Partidas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-AM-04-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de Parametrización de Centros

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Centros definido

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. Si hay data cargada, enviar mensaje de advertencia.
3. Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Centros AM'' definido en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > " Centros".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Centros".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información de registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con título "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-AM-04-02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Cargar el archivo período en el flujo de Aprovisionamiento de Unidad de Cuenta AM

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Unidad de Cuenta AM definido

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. Si hay data cargada, enviar mensaje de advertencia.
3. Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Unidad de Cuenta AM'' definido en el proceso de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Unidad de Cuenta AM".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información de registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con título "Cargar Unidad de Cuenta AM", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

## Escenario: E36-AM-01
**Descripcion:** ValidarValidar que el sistema pueda editar un nuevo registro en el flujo de Asientos Manuales

### Caso de prueba: E36-AM-01-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Cuentas Contables

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Cuentas Contables" de Cuentas Contables

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. El registro a editar debe visualizarse en el listado de Cuentas Contables del Front
3. El valor del campo Cuenta Contable:se mostrará pero no es editable.

**Datos:**
- Datos para los campos editables de formulario
- Cuenta Contable: 40.1.2.01.00.00
- Nombre Cuenta Contable: REPARACION Y MANTENIMIENTO
- Tipo de gasto: IF,0,1
- Niif17 Atribuible:SI, NO
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
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Cuentas Contables".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente!
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora
### Caso de prueba: E36-AM-01-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Partidas

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Partidas" de Partidas

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. El registro a editar debe visualizarse en el listado de Partidas del Front
3. El valor del campo Código Partida se mostrará pero no es editable.

**Datos:**
- Datos para los campos editables de formulario
- Código Partida: CN07
- Partida: Distribución ramos generales PGA
- Grupo Gasto: GT, GO, GM
- Tipo Gasto: DIRECTO, INDIRECTO

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Partidas".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente!
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora
### Caso de prueba: E36-AM-01-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Centros

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Centros" de Centros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. El registro a editar debe visualizarse en el listado de Centros del Front
3. El valor del campo Código Centro se mostrará pero no es editable.

**Datos:**
- Datos para los campos editables de formulario
- Código centro: 60.01.01
- Centro: CUM - GERENCIA DE CUMPLIMIENTO Y ETICA
- Tipo: ASIENTOS, BOLSA,CANAL,FICTICIO,LINEA
- Nivel: 2
- Centro padre
- Tipo gasto: DIRECTO, INDIRECTO
- NIIF17 Atribuible Tipo: NO, SI
- NIIF17 Tipo: GA. GM
- NIIF17 Clase: FI, VA
- Grupo CECO: CUMPLIMIENTO
- Tipo CECO: STAFF

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Centros".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente!
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora
### Caso de prueba: E36-AM-01-02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Unidad de Cuenta AM

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Unidad de Cuenta AM" de Unidad de Cuenta AM

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. El registro a editar debe visualizarse en el listado de Unidades de Cuenta AM.
3. Todos sus campos son editables.
4. El campo Prioridad es obligatorio y debe contener un valor numérico entre 1 y 4.
5. El Código de Concepto exista en el catálogo de conceptos dentro de " Cuentas Contables"
6. Para un mismo registro con el mismo Código de Concepto, Producto y Subcanal, la Unidad de Cuenta debe ser única y la suma de sus factores debe ser igual a 1.
7. El valor de campo Dígito de la Cuenta debe ser 40, 43 y 50, que corresponden a las Cuentas Contables aplicables para Asientos Manuales. En caso contrario,debe mostrar un mensaje de error y no permitir el registro.
8. Los campos Unidad de Cuenta, Partidas, Producto y Subcanal deben existir y estar previamente registrados en sus respectivos catálogos maestros.
9. El valor de Factor debe esatr entre 0 y 1

**Datos:**
- Datos para los campos editables de formulario
- Prioridad: Seleccionar la Prioridad correspondiente [1 o 4]
- Código Concepto: Se selecciona el Código concepto correspondiente Ej: 07.04.00
- Moneda: Se selecciona la moneda correspondiente [PEN,USD]
- Dígito de Cuenta: Seleccionar el Dígito de Cuenta correspondiente [40, 43 o 50]
- Código Ramo: Se selecciona el Código Ramo correspondiente Ej: [01,15]
- Grupo Producto: Se selecciona el Grupo Producto correspondiente Ej: [AFP003]
- Subcanal: Se selecciona el subcanal correspondiente Ej; [AFPS2]
- Unidad de Cuenta: Se selecciona la Unidad de Cuenta correspondiente Ej: IFRS_GRP_2021_UNIQUE SISCO2_PEN_PAA_Ceded_Prof
- Factor: [1,0.234,-10]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Unidad de Cuenta AM".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente!
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

## Escenario: E36-AM-03
**Descripcion:** Validar el formato y campos obligatorios de formulario al editar un registro en el flujo de Asientos Manuales

### Caso de prueba: E36-AM-03-01.1
- Implementado: No

**Titulo:** Validar que no se pueda editar un registro de Cuentas Contables por error de formato de los campos en el flujo de Asientos Manuales

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Cuentas Contables" de Cuentas Contables

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. Debe existir un registro correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Para verificar la validación de campos obligatorios, el usuario debe borrar la información de los campos y dejarlos vacíos.
- Nombre Cuenta Contable: Campo obligatorio, Editable, Texto. permite caracteres especiales como: - . _ / , ( )
- Nombre Cuentas Contables: permite caracteres especiales como guión, punto, guión bajo, diagonal, coma, paréntesis, comillas dobles, línea vertical, simbolo de porcentaje, pesos, dos puntos
- Tipo de gasto: Acepta valores 0, 1 o IF y guión medio
- Niif17 Atribuible: Acepta valores SI, NO y guión medio
- Niif17 Tipo: Acepta valores GA, GM y guión medio
- Niif17 Clase: Acepta valores FI, VA y guión medio
- Código concepto: longitud de 6 dígitos, no debe contener letras, formato jerárquico numérico con estructura NN.NN.NN. Cada bloque tiene un rango de entre 00 y 99
- Concepto N1: Acepta caracteres especiales como -, ., _, /; ,; (), '''', linea vertical, %, : y &
- Concepto N2: Acepta caracteres especiales como -, ., _, /; ,; (), '''', linea vertical, %, : y &
- Concepto N3: Acepta caracteres especiales como -, ., _, /; ,; (), '''', linea vertical, %, : y &
- Concepto NIIF17: Acepta caracteres especiales como -, ., _, /; ,; (), '''', linea vertical, %, : y &

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Cuentas Contables".
5. El usuario borra la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
-El nuevo registro no ha sido editado.
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
1-se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.
### Caso de prueba: E36-AM-03-01.2
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro por error en los campos de Partidas por error de formato de los campos en el flujo de Asientos Manuales

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Partidas" de Partidas

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. Debe existir un registro correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Para verificar la validación de campos obligatorios, el usuario debe borrar la información de los campos y dejarlos vacíos.
- Partida: Acepta caracteres especiales como -, ., _, /; ,; (), '''', linea vertical, %, :, &, ', > y +. Máximo 150 caracteres
- Grupo Gasto: Acepta valores GT, GO, GM
- Tipo Gasto: Acepta 1 posición: 0 o 1 (0:DIRECTO, 1:INDIRECTO)

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > "Partidas".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Partidas".
5. El usuario borra la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
-El nuevo registro no ha sido editado.
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
1-se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.
### Caso de prueba: E36-AM-03-01.3
- Implementado: No

**Titulo:** Validar que no se pueda editar un registro de Centros por error de formato de los campos en el flujo de Asientos Manuales

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Centros" de Centros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. Debe existir un registro correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Para verificar la validación de campos obligatorios, el usuario debe borrar la información de los campos y dejarlos vacíos.
- Centro: Permite caracteres especiales como -, ., _, /; ,; (), '''', linea vertical, %, : y & / límite de caracteres 150
- Tipo: Permite caracteres especiales como -, ., _, /; ,; (), '''', linea vertical, %, : y &
- Nivel: Se acepta 1 o 2 digitos, entre 0 y 99.
- Centro padre: debe cumplir un formato jerárquico numérico, compuesto por tres bloques de dos dígitos, separados por punto (NN.NN.NN) / Acepta solo guión medio o vacío
- Tipo gasto: Acepta 1 posición: 0 o 1 (0:DIRECTO, 1:INDIRECTO)
- NIIF17 Atribuible: Acepta los valores SI y NO / Acepta guión medio
- NIIF17 Tipo: Acepta los valores GA y GM / Acepta guión medio
- NIIF17 Clase: Acepta los valores FI, VA / Acepta guión medio
- Grupo CECO: Permite caracteres especiales como -, ., _, /; ,; (), '''', linea vertical, %, : y & / límite de caracteres 150
- Tipo CECO: Permite caracteres especiales como -, ., _, /; ,; (), '''', linea vertical, %, : y & / límite de caracteres 150

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz.
4. Se levanta el modal "Editar Centros".
5. El usuario borra la información y deja campos vacíos.
6. El usuario ingresa datos con formato incorrecto.
7. El usuario presiona el botón "Guardar".

**Resultado esperado:**
-El registro no ha sido editado.
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
1-Se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.
### Caso de prueba: E36-AM-03-02.1
- Implementado: No

**Titulo:** Validar que no se pueda editar un registro de Unidad de Cuenta AM por error de formato de los campos en el flujo de Asientos Manuales

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Unidad de Cuenta AM" de Unidad de Cuenta AM

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. Debe existir un registro correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, borra la información y luego dejarlos vacíos.
- Prioridad: Valor numérico entre 1 y 4.
- Código Concepto: Acepta valores vacíos / Acepta guión medio
- Moneda: Se aceptan los PEN o USD / Acepta valores vacíos / Acepta guión medio
- Dígito de Cuenta: Seleccionar entre los valores 40, 43 o 50 / Acepta valores vacíos / Acepta guión medio
- Código Ramo: Se acepta el valor especial 'SIN RAMO' / Valores vacíos y guión medio / Valores de 1 o 2 digito
- Grupo Producto: Debe existir en el catálogo maestro de Productos / valores vacíos y guión medio.
- Subcanal: Debe existir en el catálogo maestro de Subcanal / valores vacíos y guión medio.
- Unidad de Cuenta: Debe existir dentro del Maestro de Unidades de Cuenta (Maestro UoA)/ comenzar con una letra y puede contener letras, números y guiones bajos
- Factor: 10 caracteres nùmericos con decimales / hasta 4 decimales / valor 0 / enteros sin decimales / valores negativos / valores porcentuales o solo numeros / La suma de los factores debe ser 1 (ni más ni menos). Esto por cada combinación de codConcepto, Grupo producto y Subcanal

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Unidad de Cuenta AM".
5. El usuario borra la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
-El nuevo registro no ha sido editado.
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
1-se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.

---

## Escenario: E37-AM-01
**Descripcion:** Validar que solo el rol de administrador de Gastos pueda eliminar un registro en el flujo de Asientos Manuales

### Caso de prueba: E37-AM-01.01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Cuentas Contables en el flujo de Asientos Manuales

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Asientos Manuales de Cuentas Contables

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Asientos Manuales
3. no se debe eliminar el registro si ya se ha cerrado un proceso.
4. si el mismo está siendo usado.
5. No permite eliminar una cuenta si existen movimientos asociados a un Exactus, Unidad de Cuenta AM o Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > " Cuentas Contables".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de éxito ¡Registro eliminado correctamente.
3- no se muestra en la tabla de front.
### Caso de prueba: E37-AM-01.01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Partidas en el flujo de Asientos Manuales

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Asientos Manuales de Partidas

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Asientos Manuales
3. no se debe eliminar el registro si ya se ha cerrado un proceso.
4. si el mismo está siendo usado.
5. No se permite eliminar un Partidas si existen movimientos asociados a una Cuenta Contable AM

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > " Partidas".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de éxito ¡Registro eliminado correctamente.
3- no se muestra en la tabla de front.
### Caso de prueba: E37-AM-01.01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Centros en el flujo de Asientos Manuales

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Asientos Manuales de Centros

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Asientos Manuales
3. no se debe eliminar el registro si ya se ha cerrado un proceso.
4. si el mismo está siendo usado.
5. No permite eliminar una centro si existen movimientos asociados a un Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > " Centros".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de éxito ¡Registro eliminado correctamente.
3- no se muestra en la tabla de front.
### Caso de prueba: E37-AM-01.02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Unidad de Cuenta AM en el flujo de Asientos Manuales

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Asientos Manuales de Unidad de Cuenta AM

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Asientos Manuales
3. no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de éxito ¡Registro eliminado correctamente.
3- no se muestra en la tabla de front.

---

## Escenario: E37-AM-02
**Descripcion:** Validar restricciones al eliminar un registro en el Asientos Manuales

### Caso de prueba: E37-AM-02.01.1
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas definidas de negocio en el flujo de Asientos Manuales de Cuentas Contables

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el flujo de Asientos Manuales de Cuentas Contables

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Asientos Manuales
3. no se debe eliminar el registro si ya se ha cerrado un proceso.
4. si el mismo está siendo usado.
5. No permite eliminar una cuenta si existen movimientos asociados a un Exactus, Unidad de Cuenta AM o Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > " Cuentas Contables".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-AM-02.01.2
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas definidas de negocio en el flujo de Asientos Manuales de Partidas

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el flujo de Asientos Manuales de Partidas

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Asientos Manuales
3. no se debe eliminar el registro si ya se ha cerrado un proceso.
4. si el mismo está siendo usado.
5. No se permite eliminar una Partidas si existen movimientos asociados a una cuenta contable AM

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > " Partidas".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-AM-02.01.3
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas definidas de negocio en el flujo de Asientos Manuales de Centros

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el flujo de Asientos Manuales de Centros

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Asientos Manuales
3. no se debe eliminar el registro si ya se ha cerrado un proceso.
4. si el mismo está siendo usado.
5. No permite eliminar un centro si existen movimientos asociados a un Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Parametrización" > " Centros".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-AM-02.02.1
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas definidas de negocio en el flujo de Asientos Manuales de Unidad de Cuenta AM

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el flujo de Asientos Manuales de Unidad de Cuenta AM

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Asientos Manuales
3. no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta AM".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: E56-AM-PAG
**Descripcion:** Validar el funcionamiento integral de paginador en el flujo de Asientos Manuales

### Caso de prueba: E56-AM-PAG
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de los elementos de paginador en el flujo de Asientos Manuales

**Descripcion:** Validar que los elementos de paginador funcionen correctamente en el flujo de Asientos Manuales

**Precondiciones:**
1. Si la vista seleccionada de flujo de Asientos Manuales tiene data cargada.
2. Al acceder inicialmente, esté resaltada la página 1 y bloqueados los botones ''página anterior'' y ''primera página''
3. Tenga seleccionada una opción por defecto (5) en el selector de filas por vista.
4. Si no hay data cargada, todos los elementos de paginador deben estar bloqueado.

**Datos:**
- Data definida para Parametrización, Aprovisionamiento, y asignaciones de el flujo de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario accede a los botones de paginador de la vista en la que se encuentra.
3. Selecciona la opción de filas a mostrar por vista.
4. El usuario accede a los botones

**Resultado esperado:**
El sistema página correctamente
1- El selector de filas por vista da la opción de seleccionar.
2- Las filas mostradas en el front corresponden con la opción mostrada de 5, 10 o 20.
3- Se muestre la cantidad de páginas con respecto a la cantidad de elementos a mostrar.
4- al encontrarse en la primera página, los botones de ''página anterior'' y ''primera página'' deben estar bloqueados.
5- al encontrarse en la última página los botones de ''siguiente página'' y ''última página'' deben estar bloqueados.

---

## Escenario: E60-AM
**Descripcion:** Validar el funcionamiento de botón 'Ver'' más columnas en el flujo de Asientos Manuales

### Caso de prueba: E60-AM-01.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón Ver en la pantalla Cuentas Contables de flujo de Parametrización de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
3. las columnas por defecto siempre se mostrarán

**Datos:**
- Columna definidas Por defecto.
- Cuenta Contable
- Nombre Cuenta Contable
- Concepto N1
- Concepto N2
- Concepto N3
- Concepto NIIF
- Tipo de Gasto
- NIIF 17 Atribuible
- NIIF 17 Tipo
- Columna definidas opcionales.
- NIIF 17 Clase
- Código Concepto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-AM-01.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón Ver en la pantalla Centros de flujo de Parametrización de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Centros definido para el motor.
3. las columnas por defecto siempre se mostrarán

**Datos:**
- Columna definidas Por defecto.
- Código Centro
- Centro
- Tipo de Gasto
- NIIF 17 Atribuible
- NIIF 17 Tipo
- NIIF 17 Clase
- Grupo Ceco
- Columna definidas opcionales.
- Nivel
- Centro padre
- Tipo CECO

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-AM-01.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón Ver en la pantalla Exactus sin Procesar de flujo de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Exactus sin procesar definido para el motor.
3. las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- Cuenta Contable
- Nombre Cuenta Contable
- Asiento
- Débito Local
- Crédito Local
- Centro Costo
- Descripción Centro Costo
- NIT
- Razón Social
- Partida
- Columna definidas opcionales.
- Origen
- Tipo de Documento
- Documento
- Referencia
- Débito Dólar
- Crédito Dólar
- Tipo de Asiento
- Fecha
- Fuente
- Notas
- Flujo Efectivo
- Patrimonio Neto
- Broker
- Canal Alt.
- Cliente
- Segmento
- Póliza
- Siniestro
- Producto
- Canal Distribución
- Cuenta Origen
- Tipo Asiento
- Asiento Origen
- Centro Costo Origen
- Identificador NIIF
- Tipo Documento Cliente
- Nombre Broker
- Nombre Canal Alt
- Nombre Producto
- Grupo Comercial
- Nombre Grupo Comercial
- Segmento Mercado
- Fecha Inicio Vigencia Póliza
- Fecha Fin Vigencia Póliza
- Tipo Transacción

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-AM-01.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón Ver en la pantalla Exactus procesado de flujo de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Exactus procesado definido para el motor.
3. las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- Código asiento
- Código Cuenta Contable
- Monto
- Código Centro de Costos
- Código Línea
- Código Producto
- Código Canal
- Código Subcanal
- Tipo de asiento
- NIT
- Monto Dólares
- Columna definidas opcionales.
- Nombre Cuenta Contable
- Descripción Asiento
- Nombre Centro
- Tipo Documento Cliente
- Razón Social
- Fuente
- Nombre Línea
- Nombre Grupo Producto
- Nombre Canal
- Nombre Subcanal
- Segmento
- Póliza
- Moneda
- Asiento VIda
- Tipo Referencia Documento
- Documento Contabilzado
- Fecha Contable
- Tipo Movimiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales.
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario selecciona el botón "Exactus procesado" >
4. El usuario presiona el botón ''Ver"
5. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-AM-02.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Cuentas Contables de flujo de Parametrización de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento del buscador del componente de la Pantalla Cuentas Contables que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- Cuenta Contable
- Nombre Cuenta Contable
- Concepto N1
- Concepto N2
- Concepto N3
- Concepto NIIF
- Tipo de Gasto
- NIIF 17 Atribuible
- NIIF 17 Tipo
- Columna definidas opcionales.
- NIIF 17 Clase
- Código Concepto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-AM-02.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Centros de flujo de Parametrización de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Centros que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Centros definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- Código Centro
- Centro
- Tipo de Gasto
- NIIF 17 Atribuible
- NIIF 17 Tipo
- NIIF 17 Clase
- Grupo Ceco
- Columna definidas opcionales.
- Nivel
- Centro padre
- Tipo CECO

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Centros ".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-AM-02.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Exactus sin Procesar de flujo de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Exactus sin Procesar que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Exactus sin Procesar definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- Cuenta Contable
- Nombre Cuenta Contable
- Asiento
- Débito Local
- Crédito Local
- Centro Costo
- Descripción Centro Costo
- NIT
- Razón Social
- Partida
- Columna definidas opcionales.
- Origen
- Tipo de Documento
- Documento
- Referencia
- Débito Dólar
- Crédito Dólar
- Tipo de Asiento
- Fecha
- Fuente
- Notas
- Flujo Efectivo
- Patrimonio Neto
- Broker
- Canal Alt.
- Cliente
- Segmento
- Póliza
- Siniestro
- Producto
- Canal Distribución
- Cuenta Origen
- Tipo Asiento
- Asiento Origen
- Centro Costo Origen
- Identificador NIIF
- Tipo Documento Cliente
- Nombre Broker
- Nombre Canal Alt
- Nombre Producto
- Grupo Comercial
- Nombre Grupo Comercial
- Segmento Mercado
- Fecha Inicio Vigencia Póliza
- Fecha Fin Vigencia Póliza
- Tipo Transacción

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-AM-02.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Exactus Procesado de flujo de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Exactus procesado que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Exactus Procesado definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- Código asiento
- Código Cuenta Contable
- Monto
- Código Centro de Costos
- Código Línea
- Código Producto
- Código Canal
- Código Subcanal
- Tipo de asiento
- NIT
- Monto Dólares
- Columna definidas opcionales.
- Nombre Cuenta Contable
- Descripción Asiento
- Nombre Centro
- Tipo Documento Cliente
- Razón Social
- Fuente
- Nombre Línea
- Nombre Grupo Producto
- Nombre Canal
- Nombre Subcanal
- Segmento
- Póliza
- Moneda
- Asiento VIda
- Tipo Referencia Documento
- Documento Contabilzado
- Fecha Contable
- Tipo Movimiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ''Exactus procesado"
4. El usuario presiona el botón ''Ver"
5. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-AM-03.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente Columnas de Cuentas Contables de flujo de Parametrización de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente columnas de Cuentas Contables de flujo de Parametrización de Asientos Manuales

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- Cuenta Contable
- Nombre Cuenta Contable
- Concepto N1
- Concepto N2
- Concepto N3
- Concepto NIIF
- Tipo de Gasto
- NIIF 17 Atribuible
- NIIF 17 Tipo
- Columna definidas opcionales.
- NIIF 17 Clase
- Código Concepto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla de Front.
### Caso de prueba: E60-AM-03.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente Columnas de Centros de flujo de Parametrización de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente columnas de Centros de flujo de Parametrización de Asientos Manuales

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Centros definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- Código Centro
- Centro
- Tipo de Gasto
- NIIF 17 Atribuible
- NIIF 17 Tipo
- NIIF 17 Clase
- Grupo Ceco
- Columna definidas opcionales.
- Nivel
- Centro padre
- Tipo CECO

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla de Front.
### Caso de prueba: E60-AM-03.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente Columnas de Exactus sin Procesar de flujo de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente columnas de Exactus sin Procesar de flujo de Aprovisionamiento de Asientos Manuales

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Exactus sin Procesar definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- Cuenta Contable
- Nombre Cuenta Contable
- Asiento
- Débito Local
- Crédito Local
- Centro Costo
- Descripción Centro Costo
- NIT
- Razón Social
- Partida
- Columna definidas opcionales.
- Origen
- Tipo de Documento
- Documento
- Referencia
- Débito Dólar
- Crédito Dólar
- Tipo de Asiento
- Fecha
- Fuente
- Notas
- Flujo Efectivo
- Patrimonio Neto
- Broker
- Canal Alt.
- Cliente
- Segmento
- Póliza
- Siniestro
- Producto
- Canal Distribución
- Cuenta Origen
- Tipo Asiento
- Asiento Origen
- Centro Costo Origen
- Identificador NIIF
- Tipo Documento Cliente
- Nombre Broker
- Nombre Canal Alt
- Nombre Producto
- Grupo Comercial
- Nombre Grupo Comercial
- Segmento Mercado
- Fecha Inicio Vigencia Póliza
- Fecha Fin Vigencia Póliza
- Tipo Transacción

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla de Front.
### Caso de prueba: E60-AM-03.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente Columnas de Exactus procesado de flujo de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente columnas de Exactus procesado de flujo de Aprovisionamiento de Asientos Manuales

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Exactus procesado definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- Código asiento
- Código Cuenta Contable
- Monto
- Código Centro de Costos
- Código Línea
- Código Producto
- Código Canal
- Código Subcanal
- Tipo de asiento
- NIT
- Monto Dólares
- Columna definidas opcionales.
- Nombre Cuenta Contable
- Descripción Asiento
- Nombre Centro
- Tipo Documento Cliente
- Razón Social
- Fuente
- Nombre Línea
- Nombre Grupo Producto
- Nombre Canal
- Nombre Subcanal
- Segmento
- Póliza
- Moneda
- Asiento VIda
- Tipo Referencia Documento
- Documento Contabilzado
- Fecha Contable
- Tipo Movimiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ''Exactus procesado"
4. El usuario presiona el botón ''Ver"
5. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla de Front.
### Caso de prueba: E60-AM-04.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' de componente Columnas de Cuentas Contables de flujo de Parametrización de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de la opción ''Ocultar todas'' de componente Columnas de Cuentas Contables de flujo de Parametrización de Asientos Manuales

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- Cuenta Contable
- Nombre Cuenta Contable
- Concepto N1
- Concepto N2
- Concepto N3
- Concepto NIIF
- Tipo de Gasto
- NIIF 17 Atribuible
- NIIF 17 Tipo
- Columna definidas opcionales.
- NIIF 17 Clase
- Código Concepto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front solo las columnas del archivo definidas Por defecto.
### Caso de prueba: E60-AM-04.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' de componente Columnas de Centros de flujo de Parametrización de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de la opción ''Ocultar todas'' de componente Columnas de Centros de flujo de Parametrización de Asientos Manuales

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas de archivo Centros definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- Código Centro
- Centro
- Tipo de Gasto
- NIIF 17 Atribuible
- NIIF 17 Tipo
- NIIF 17 Clase
- Grupo Ceco
- Columna definidas opcionales.
- Nivel
- Centro padre
- Tipo CECO

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front solo las columnas del archivo definidas Por defecto.
### Caso de prueba: E60-AM-04.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' de componente Columnas de Exactus sin procesar de flujo de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de la opción ''Ocultar todas'' de componente Columnas de Exactus sin procesar de flujo de Aprovisionamiento de Asientos Manuales

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas del archivo Exactus sin procesar definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.
5. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- Cuenta Contable
- Nombre Cuenta Contable
- Asiento
- Débito Local
- Crédito Local
- Centro Costo
- Descripción Centro Costo
- NIT
- Razón Social
- Partida
- Columna definidas opcionales.
- Origen
- Tipo de Documento
- Documento
- Referencia
- Débito Dólar
- Crédito Dólar
- Tipo de Asiento
- Fecha
- Fuente
- Notas
- Flujo Efectivo
- Patrimonio Neto
- Broker
- Canal Alt.
- Cliente
- Segmento
- Póliza
- Siniestro
- Producto
- Canal Distribución
- Cuenta Origen
- Tipo Asiento
- Asiento Origen
- Centro Costo Origen
- Identificador NIIF
- Tipo Documento Cliente
- Nombre Broker
- Nombre Canal Alt
- Nombre Producto
- Grupo Comercial
- Nombre Grupo Comercial
- Segmento Mercado
- Fecha Inicio Vigencia Póliza
- Fecha Fin Vigencia Póliza
- Tipo Transacción

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front solo las columnas del archivo definidas Por defecto.
### Caso de prueba: E60-AM-04.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' de componente Columnas de Exactus procesado de flujo de Aprovisionamiento de Asientos Manuales

**Descripcion:** Validar el correcto funcionamiento de la opción ''Ocultar todas'' de componente Columnas de Exactus procesado de flujo de Aprovisionamiento de Asientos Manuales

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales
2. Están configurados los nombre de las columnas del archivo Exactus procesado definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.
5. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- Código asiento
- Código Cuenta Contable
- Monto
- Código Centro de Costos
- Código Línea
- Código Producto
- Código Canal
- Código Subcanal
- Tipo de asiento
- NIT
- Monto Dólares
- Columna definidas opcionales.
- Nombre Cuenta Contable
- Descripción Asiento
- Nombre Centro
- Tipo Documento Cliente
- Razón Social
- Fuente
- Nombre Línea
- Nombre Grupo Producto
- Nombre Canal
- Nombre Subcanal
- Segmento
- Póliza
- Moneda
- Asiento VIda
- Tipo Referencia Documento
- Documento Contabilzado
- Fecha Contable
- Tipo Movimiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus procesado".
3. El usuario presiona el botón ''Exactus procesado"
4. El usuario presiona el botón ''Ver"
5. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front solo las columnas del archivo definidas Por defecto.

---

## Escenario: E63-AM-BUS
**Descripcion:** Validar el funcionamiento integral de buscador en el sistema en el flujo de Asientos Manuales

### Caso de prueba: E63-AM-BUS
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador en el flujo de Asientos Manuales

**Descripcion:** Validar que el buscador filtra, encuentra y maneja los datos correctamente según los diferentes criterios de entrada en todas sus vistas

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Asientos Manuales.
2. Todos los filtos deben estar activos.

**Datos:**
- Datos de los registros almacenados y elementos para uso de prueba (Números, Letras, caracteres especiales o combinaciones)

**Pasos:**
1. El usuario Gestor de Asientos Manuales. accede a la página de inicio ''Distribución''.
2. El usuario accede a los filtros de búsqueda general (buscar)

**Resultado esperado:**
El sistema devuelve los resultados esperados y debe comportarse como se describe.
1- La búsqueda en el filtro general devuelve todos los elementos encontrados a partir de los criterios de entrada.
2- A partir de tercer caracter brinda la opción de completamiento.

---

## Escenario: E47-AM-EC
**Descripcion:** Validar el procesamiento de las Fases de Procesos de Asientos Manuales en el modo de ejecución Completo

_Sin casos de prueba asociados._

---

## Escenario: E47-AM-ER
**Descripcion:** Validar el procesamiento de las Fases de Procesos de Asientos Manuales en el modo de ejecución Resumido

### Caso de prueba: E47-GF-ER-01.1
- Implementado: No

**Titulo:** Procesamiento de la Fase inicial: Distribución preliminar (Oracle) de Asientos Manuales en el modo de ejecución Resumido

**Descripcion:** Validar el procesamiento de la Fase Inicial: Distribución preliminar (Oracle) de Asientos Manuales en el modo de ejecución Resumido

**Precondiciones:**
1. Debe estar cargado el archivo de Exactus

**Datos:**
- 

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, modo de ejecución y Descripción Región
4. El usuario presiona el botón ¨Play¨ de la fase inicial.

**Resultado esperado:**
La Fase Inicial de Asientos Manuales en el modo de ejecución Resumido se ejecutó satisfactoriamente
### Caso de prueba: E47-GF-ER-01.2
- Implementado: No

**Titulo:** Procesamiento de la Fase 1: Verificación de Canales y Subcanales de Asientos Manuales en el modo de ejecución Resumido

**Descripcion:** Validar el procesamiento de la Fase 1: Verificación de Canales y Subcanales de Asientos Manuales en el modo de ejecución Resumido

**Precondiciones:**
1. Que esten cargados los Archivos comunes
2. se debe haber cargado el exactus sin procesar

**Datos:**
- Data resultado de la fase Inicial en el modo de ejecución Resumido

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, modo de ejecución y Descripción Región
4. El usuario presiona el botón ¨Play¨ de la fase 1

**Resultado esperado:**
La Fase 1 de Asientos Manuales en el modo de ejecución Resumido se ejecutó satisfactoriamente
### Caso de prueba: E47-GF-ER-01.3
- Implementado: No

**Titulo:** Procesamiento de la Fase 2: Distribuir Objeto de costos a Unidades de cuenta de Asientos Manuales en el modo de ejecución Resumido

**Descripcion:** Validar el procesamiento de la Fase 2: Obtención de canales/subcanales de Asientos Manuales en el modo de ejecución Resumido

**Precondiciones:**
1. Que esten cargados los archivos de Drivers Subcanal y método subcanal
2. Ejecutada la Fase 1 de Asientos Manuales en el modo de ejecución Resumido

**Datos:**
- Data resultado de la fase 1 en el modo de ejecución Resumido

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, poliza y modo de ejecución.
4. El usuario presiona el botón ¨Play¨ de la fase 2.

**Resultado esperado:**
La Fase 2 de Asientos Manuales en el modo de ejecución Resumido se ejecutó satisfactoriamente
### Caso de prueba: E47-GF-ER-01.4
- Implementado: No

**Titulo:** Procesamiento de Cerrar proceso de Asientos Manuales en el modo de ejecución Resumido

**Descripcion:** Validar el procesamiento de Cerrar proceso de Asientos Manuales en el modo de ejecución Resumido

**Precondiciones:**
1. Ejecutadas las Fases 1 y 2 de Asientos Manuales en el modo de ejecución Resumido

**Datos:**
- Data resultado de la fase 2 en el modo de ejecución Resumido

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, poliza y modo de ejecución.
4. El usuario verifica la ejecución de todas las fases.
5. El usuario presiona el botón "Cerrar proceso" y acepta el la pregunta de verificación.

**Resultado esperado:**
El cierre de proceso de Asientos Manuales en el modo de ejecución Resumido es ejecutado satisfactoriamente
### Caso de prueba: E47-GF-ER-02.01
- Implementado: No

**Titulo:** Procesamiento de la Fase inicial: Distribución preliminar (Oracle) de Asientos Manuales en el modo de ejecución Resumido

**Descripcion:** Validar el procesamiento de la Fase Inicial: Distribución preliminar (Oracle) de Asientos Manuales en el modo de ejecución resumido

**Precondiciones:**
1. Debe estar cargado el archivo de Exactus

**Datos:**
- 

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, modo de ejecución y Descripción Región
4. El usuario presiona el botón ¨Play¨ de la fase inicial.

**Resultado esperado:**
La Fase Inicial de Asientos Manuales en el modo de ejecución Resumido se ejecutó satisfactoriamente
el porcetanje de ejecucion esta al 100%
### Caso de prueba: E47-GF-ER-02.02
- Implementado: No

**Titulo:** Procesamiento de la Fase 1: Verificación de Canales y Subcanales de Asientos Manuales en el modo de ejecución Resumido

**Descripcion:** Validar el procesamiento de la Fase 1: Verificación de Canales y Subcanales de Asientos Manuales en el modo de ejecución resumido

**Precondiciones:**
1. Que esten cargados los Archivos comunes
2. Que este concluida la fase inicial

**Datos:**
- Data resultado de la fase Inicial en el modo de ejecución Completo

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, modo de ejecución y Descripción Región
4. El usuario presiona el botón ¨Play¨ de la fase 1

**Resultado esperado:**
La Fase 1 de Asientos Manuales en el modo de ejecución Resumido se ejecutó satisfactoriamente
el porcetanje de ejecucion esta al 100%
### Caso de prueba: E47-GF-ER-02.03
- Implementado: No

**Titulo:** Procesamiento de la Fase 2: Distribuir Objeto de costos a Unidades de cuenta de Asientos Manuales en el modo de ejecución Resumido

**Descripcion:** Validar el procesamiento de la Fase 2: Obtención de canales/subcanales de Asientos Manuales en el modo de ejecución resumido

**Precondiciones:**
1. Que esten cargados los archivos de Drivers Subcanal y método subcanal
2. Ejecutada la Fase 1 de Asientos Manuales en el modo de ejecución resumido

**Datos:**
- Data resultado de la fase 1 en el modo de ejecución Completo

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, modo de ejecución y Descripción Región
4. El usuario presiona el botón ¨Play¨ de la fase 2.

**Resultado esperado:**
La Fase 2 de Asientos Manuales en el modo de ejecución Resumido se ejecutó satisfactoriamente
el porcetanje de ejecucion esta al 100%
### Caso de prueba: E47-GF-ER-02.04
- Implementado: No

**Titulo:** Procesamiento de Cerrar proceso de Asientos Manuales en el modo de ejecución Resumido

**Descripcion:** Validar el procesamiento de Cerrar proceso de Asientos Manuales en el modo de ejecución resumido

**Precondiciones:**
1. Ejecutadas las Fases inicial, 1 y 2, de Asientos Manuales en el modo de ejecución resumido.

**Datos:**
- Data resultado de la fase 2 en el modo de ejecución Completo

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, poliza y modo de ejecución.
4. El usuario verifica la ejecución de todas las fases.
5. El usuario presiona el botón "Cerrar proceso" y acepta el la pregunta de verificación.

**Resultado esperado:**
El cierre de proceso de Asientos Manuales en el modo de ejecución Resumido es ejecutado satisfactoriamente
### Caso de prueba: E47-GF-EC-01.01
- Implementado: No

**Titulo:** Procesamiento de la Fase inicial: Distribución preliminar (Oracle) de Asientos Manuales en el modo de ejecución Completo

**Descripcion:** Validar el procesamiento de la Fase Inicial: Distribución preliminar (Oracle) de Asientos Manuales en el modo de ejecución completo se debe haber cargado el exactus sin procesar

**Precondiciones:**
1. Debe estar cargado el archivo de Exactus sin procesar

**Datos:**
- 

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, modo de ejecución y Descripción Región
4. El usuario presiona el botón ¨Play¨ de la fase inicial.

**Resultado esperado:**
La Fase Inicial de Asientos Manuales en el modo de ejecución Completo se ejecutó satisfactoriamente
el porcetanje de ejecucion esta al 100%
### Caso de prueba: E47-GF-EC-01.02
- Implementado: No

**Titulo:** Procesamiento de la Fase 1: Verificación de Canales y Subcanales de Asientos Manuales en el modo de ejecución Completo

**Descripcion:** Validar el procesamiento de la Fase 1: Verificación de Canales y Subcanales de Asientos Manuales en el modo de ejecución completo

**Precondiciones:**
1. Que esten cargados los Archivos comunes
2. Que este concluida la fase inicial
3. se debe habilitar solamente después de que la fase anterior se haya completado

**Datos:**
- Data resultado de la fase Inicial en el modo de ejecución Completo

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, modo de ejecución y Descripción Región
4. El usuario presiona el botón ¨Play¨ de la fase 1

**Resultado esperado:**
La Fase 1 de Asientos Manuales en el modo de ejecución Completo se ejecutó satisfactoriamente
el porcetanje de ejecucion esta al 100%
### Caso de prueba: E47-GF-EC-01.03
- Implementado: No

**Titulo:** Procesamiento de la Fase 2: Distribuir Objeto de costos a Unidades de cuenta de Asientos Manuales en el modo de ejecución Completo

**Descripcion:** Validar el procesamiento de la Fase 2: Obtencion de Subcanales + Distribucion CECOs Vida de Asientos Manuales en el modo de ejecución completo

**Precondiciones:**
1. Que esten cargados los archivos de Drivers Subcanal y método subcanal
2. Ejecutada la Fase 1 de Asientos Manuales en el modo de ejecución Completo

**Datos:**
- Data resultado de la fase 1 en el modo de ejecución Completo

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, modo de ejecución y Descripción Región
4. El usuario presiona el botón ¨Play¨ de la fase 2.

**Resultado esperado:**
La Fase 2 de Asientos Manuales en el modo de ejecución Completo se ejecutó satisfactoriamente
el porcetanje de ejecucion esta al 100%
### Caso de prueba: E47-GF-EC-01.04
- Implementado: No

**Titulo:** Procesamiento de Cerrar proceso de Asientos Manuales en el modo de ejecución Completo

**Descripcion:** Validar el procesamiento de Cerrar proceso de Asientos Manuales en el modo de ejecución Completo

**Precondiciones:**
1. Ejecutadas las Fases 1 y 2 de Asientos Manuales en el modo de ejecución Completo

**Datos:**
- Data resultado de la fase 2 en el modo de ejecución Completo

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, poliza y modo de ejecución.
4. El usuario verifica la ejecución de todas las fases.
5. El usuario presiona el botón "Cerrar proceso" y acepta el la pregunta de verificación.

**Resultado esperado:**
El cierre de proceso de Asientos Manuales en el modo de ejecución Completo es ejecutado satisfactoriamente
### Caso de prueba: E47-GF-EC-02.01
- Implementado: No

**Titulo:** Procesamiento de la Fase inicial: Distribución preliminar (Oracle) de Asientos Manuales en el modo de ejecución Completo

**Descripcion:** Validar el procesamiento de la Fase Inicial: Distribución preliminar (Oracle) de Asientos Manuales en el modo de ejecución completo

**Precondiciones:**
1. Debe estar cargado el archivo de Exactus

**Datos:**
- 

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, modo de ejecución y Descripción Región
4. El usuario presiona el botón ¨Play¨ de la fase inicial.

**Resultado esperado:**
La Fase Inicial de Asientos Manuales en el modo de ejecución Completo se ejecutó satisfactoriamente
el porcetanje de ejecucion esta al 100%
### Caso de prueba: E47-GF-EC-02.02
- Implementado: No

**Titulo:** Procesamiento de la Fase 1: Verificación de Canales y Subcanales de Asientos Manuales en el modo de ejecución Completo

**Descripcion:** Validar el procesamiento de la Fase 1: Verificación de Canales y Subcanales de Asientos Manuales en el modo de ejecución completo

**Precondiciones:**
1. Que esten cargados los Archivos comunes
2. Que este concluida la fase inicial
3. se debe habilitar solamente después de que la fase anterior se haya completado

**Datos:**
- Data resultado de la fase Inicial en el modo de ejecución Completo

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, modo de ejecución y Descripción Región
4. El usuario presiona el botón ¨Play¨ de la fase 1

**Resultado esperado:**
La Fase 1 de Asientos Manuales en el modo de ejecución Completo se ejecutó satisfactoriamente
el porcetanje de ejecucion esta al 100%
### Caso de prueba: E47-GF-EC-02.03
- Implementado: No

**Titulo:** Procesamiento de la Fase 2: Distribuir Objeto de costos a Unidades de cuenta de Asientos Manuales en el modo de ejecución Completo

**Descripcion:** Validar el procesamiento de la Fase 2: Obtención de canales/subcanales de Asientos Manuales en el modo de ejecución completo

**Precondiciones:**
1. Que esten cargados los archivos de Drivers Subcanal y método subcanal
2. Ejecutada la Fase 1 de Asientos Manuales en el modo de ejecución Completo

**Datos:**
- Data resultado de la fase 1 en el modo de ejecución Completo

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, modo de ejecución y Descripción Región
4. El usuario presiona el botón ¨Play¨ de la fase 2.

**Resultado esperado:**
La Fase 2 de Asientos Manuales en el modo de ejecución Completo se ejecutó satisfactoriamente
el porcetanje de ejecucion esta al 100%
### Caso de prueba: E47-GF-EC-02.04
- Implementado: No

**Titulo:** Procesamiento de Cerrar proceso de Asientos Manuales en el modo de ejecución Completo

**Descripcion:** Validar el procesamiento de Cerrar proceso de Asientos Manuales en el modo de ejecución Completo

**Precondiciones:**
1. Ejecutadas las Fases inicial, 1 y 2, de Asientos Manuales en el modo de ejecución Completo

**Datos:**
- Data resultado de la fase 2 en el modo de ejecución Completo

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, poliza y modo de ejecución.
4. El usuario verifica la ejecución de todas las fases.
5. El usuario presiona el botón "Cerrar proceso" y acepta el la pregunta de verificación.

**Resultado esperado:**
El cierre de proceso de Asientos Manuales en el modo de ejecución Completo es ejecutado satisfactoriamente

---

## Escenario: E51-AM-EC
**Descripcion:** Permanencia de los montos durante el procesamiento por cada una de las Fases de Asientos Manuales en el proceso de ejecución Completo

_Sin casos de prueba asociados._

---

## Escenario: E51-AM-ER
**Descripcion:** Permanencia de los montos durante el procesamiento por cada una de las Fases de Asientos Manuales en el proceso de ejecución Resumido

### Caso de prueba: E51-GF-ER
- Implementado: No

**Titulo:** Permanencia del monto durante el proceso Resumido de Asientos Manuales

**Descripcion:** Validar la permanencia del monto durante la corrida de las fases y cierre del proceso Resumido de Asientos Manuales

**Precondiciones:**
1. Completado el proceso Resumido deAsientos Manuales.
2. El monto no debe variar al ejecutarse ninguna de las fases o el cierre.

**Datos:**
- Montos resultados de la ejecución de cada fase corrida y cierre de proceso de Asientos Manuales de modo Resumido

**Pasos:**
1. El usuario accede a la vista ''Proceso'' de Asientos Manuales.
2. El usuario verifica la ejecución de cada una de las fases y el cierre del modo Resumido.

**Resultado esperado:**
Verificar la permanencia del monto de cada fase ejecutada y cierre.
### Caso de prueba: E51-GF-EC
- Implementado: No

**Titulo:** Permanencia del monto durante el proceso Completo de Asientos Manuales

**Descripcion:** Validar la permanencia del monto durante la corrida de las fases y cierre del proceso Completo de Asientos Manuales

**Precondiciones:**
1. Completado el proceso Completo de Asientos Manuales.
2. El monto no debe variar al ejecutarse ninguna de las fases o el cierre.

**Datos:**
- Montos resultados de la ejecución de cada fase corrida y cierre de proceso de Asientos Manuales de modo Completo

**Pasos:**
1. El usuario accede a la vista ''Proceso'' de Asientos Manuales.
2. El usuario verifica la ejecución de cada una de las fases y el cierre del modo Completo.

**Resultado esperado:**
Verificar la permanencia del monto de cada fase ejecutada y cierre.

---

## Escenario: E52-AM-EC
**Descripcion:** Validar la generación de el archivo Cuadre de cuentas en el proceso de distribución en el flujo Asientos Manuales

_Sin casos de prueba asociados._

---

## Escenario: E52-AM-ER
**Descripcion:** Validar la generación de archivo Cuadre de cuentas en el proceso de distribución en el flujo Asientos Manuales en el modo de ejecución Resumido

### Caso de prueba: E52-GF-ER-01
- Implementado: No

**Titulo:** Archivo Cuadre de cuentas antes del cierre de proceso del Modo Resumido de GF

**Descripcion:** Obtener el archivo Cuadre de cuentas del Modo Resumido de GF

**Precondiciones:**
1. 1 - Botón Cuadre de cuenta activo
2. 2 - El proceso No debe estar cerrado

**Datos:**
- Data procesada durante las fases de procesos

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, poliza y modo de ejecución.
4. El usuario presiona el botón "Cuadre de cuentas" y acepta la pregunta de verificación.

**Resultado esperado:**
Obtener el archivo Cuadre de cuentas del Modo Resumido de GF, donde se muestren todas las fases y sus montos
cuenta contable
monto exactus
monto fases
### Caso de prueba: E52-GF-ER-02
- Implementado: No

**Titulo:** Archivo Cuadre de cuentas después del cierre de proceso del Modo Resumido de GF

**Descripcion:** Obtener el archivo Cuadre de cuentas del Modo Resumido de GF

**Precondiciones:**
1. 1 - Botón Cuadre de cuenta activo
2. 2 - El proceso debe estar cerrado

**Datos:**
- Data procesada al cerrar proceso

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, poliza y modo de ejecución.
4. El usuario presiona el botón "Cuadre de cuentas" y acepta la pregunta de verificación.

**Resultado esperado:**
Obtener el archivo Cuadre de cuentas del Modo Resumido de GF donde se muestren todas las fases y sus montos
cuenta contable
monto exactus
monto fases
monto resumen
### Caso de prueba: E52-GF-EC-01
- Implementado: No

**Titulo:** Archivo Cuadre de cuentas antes del cierre de proceso del Modo Completo de GF

**Descripcion:** Obtener el archivo Cuadre de cuentas del Modo Completo de GF

**Precondiciones:**
1. 1 - Botón Cuadre de cuenta activo
2. 2 - El proceso no debe estar cerrado

**Datos:**
- Data procesada durante las fases de procesos

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, poliza y modo de ejecución.
4. El usuario presiona el botón "Cuadre de cuentas" y acepta la pregunta de verificación.

**Resultado esperado:**
Obtener el archivo Cuadre de cuentas del Modo Completo de GF, donde se muestren todas las fases y sus montos
columnas:
cuenta contable
monto exactus
monto fases (dependiendo de la fase que se ejecute)
### Caso de prueba: E52-GF-EC-02
- Implementado: No

**Titulo:** Archivo Cuadre de cuentas después del cierre de proceso del Modo Completo de GF

**Descripcion:** Obtener el archivo Cuadre de cuentas del Modo Completo de GF

**Precondiciones:**
1. 1 - Botón Cuadre de cuenta activo y cerrado el proceso
2. 2 - El proceso debe estar cerrado

**Datos:**
- Data procesada al cerrar proceso

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos" y "Asientos Manuales".
3. El usuario configura el periodo, versión, poliza y modo de ejecución.
4. El usuario presiona el botón "Cuadre de cuentas" y acepta la pregunta de verificación.

**Resultado esperado:**
Obtener el archivo Cuadre de cuentas del Modo Completo de GF, donde se muestren todas las fases y sus montos
cuenta contable
monto exactus
monto fases

---

## Escenario: E64-AM-ER
**Descripcion:** Validar funcionalidad 'Ejecutar Todo' en el proceso de distribución en el flujo Asientos Manuales en el modo de ejecución resumido

### Caso de prueba: E64-GF-ER-01-01
- Implementado: No

**Titulo:** Ejecución del proceso hasta la Fase 2: Distribuir Objeto de costos a Unidades de cuenta mediante la opción “Ejecutar Todo” Modo resumido

**Descripcion:** Validar la opción “Ejecutar Todo” en modo Resumido del flujo de Asientos Manuales, el sistema procese correctamente hasta la fase 2 y sin aplicación de parches.

**Precondiciones:**
1. hasta la fase 2
2. Sin parches
3. Se debe seleiconar el periodo, modo de ejecucion y descripcion, para que se habilite el boton "Ejecutar todo"

**Datos:**
- Data procesada en el cierre de proceso de GF de modo resumido
- Periodo 202506
- modo de ejecución "Resumido"
- descripcion de region: Exactus, Amed y AP Vida (pór default)

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos"
3. El usuario configura el periodo, versión, modo de ejecución y descripcion de region
4. El usuario presiona el botón "Ejecutar Todo"
5. Se levanta un modal,
6. ¿Desea aplicar el parche a la información procesada?
7. Desea aplicar cambios en la información obtenida.
8. Selecione “No”

**Resultado esperado:**
Se ejecutan las fases inicial, fase 1, fase 2 y cierre
El proceso de parches no se ejecuta
### Caso de prueba: E64-GF-ER-01-02
- Implementado: No

**Titulo:** Ejecución del proceso hasta la Fase 2: Distribuir Objeto de costos a Unidades de cuenta mediante la opción “Ejecutar Todo” Modo resumido

**Descripcion:** Validar la opción “Ejecutar Todo” en modo Resumido del flujo de Asientos Manuales, el sistema procese correctamente hasta la fase 2 y con aplicación de parches.

**Precondiciones:**
1. hasta la fase 2
2. Con parches

**Datos:**
- Data procesada en el cierre de proceso de GF de modo resumido
- Periodo 202506
- modo de ejecución "Resumido"
- descripcion de region: Exactus, Amed y AP Vida (pór default)

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos"
3. El usuario configura el periodo, versión, modo de ejecución y descripcion de region
4. El usuario presiona el botón "Ejecutar Todo"
5. Se levanta un modal,
6. ¿Desea aplicar el parche a la información procesada?
7. Desea aplicar cambios en la información obtenida.
8. Selecione “No”

**Resultado esperado:**
Se ejecutan las fases inicial, fase 1, fase 2, parches y cierre
### Caso de prueba: E64-GF-EC-01-01
- Implementado: No

**Titulo:** Ejecución del proceso hasta la Fase 2: Distribuir Objeto de costos a Unidades de cuenta mediante la opción “Ejecutar Todo” Modo completo

**Descripcion:** Validar la opción “Ejecutar Todo” en modo completo del flujo de Asientos Manuales, el sistema procese correctamente hasta la fase 2 y sin aplicación de parches.

**Precondiciones:**
1. hasta la fase 2
2. Sin parches
3. Se debe seleiconar el periodo, modo de ejecucion y descripcion, para que se habilite el boton "Ejecutar todo

**Datos:**
- Data procesada en el cierre de proceso de GF de modo completo
- Periodo 202506
- modo de ejecución "Resumido"
- descripcion de region: Exactus, Amed y AP Vida (pór default)

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos"
3. El usuario configura el periodo, versión, modo de ejecución y descripcion de region
4. El usuario presiona el botón "Ejecutar Todo"
5. Se levanta un modal,
6. ¿Desea aplicar el parche a la información procesada?
7. Desea aplicar cambios en la información obtenida.
8. Selecione “No”

**Resultado esperado:**
Se ejecutan las fases inicial, fase 1, fase 2 y cierre
El proceso de parches no se ejecuta
### Caso de prueba: E64-GF-EC-01-02
- Implementado: No

**Titulo:** Ejecución del proceso hasta la fase 2 “Obtencion de Subcanales + Distribucion CECOs Vida” mediante la opción “Ejecutar Todo” Modo completo

**Descripcion:** Validar la opción “Ejecutar Todo” en modo completo del flujo de Asientos Manuales, el sistema procese correctamente hasta la fase 2 y con aplicación de parches.

**Precondiciones:**
1. hasta la fase 2
2. Con parches
3. Se debe seleiconar el periodo, modo de ejecucion y descripcion, para que se habilite el boton "Ejecutar todo

**Datos:**
- Data procesada en el cierre de proceso de GF de modo completo
- Periodo 202506
- modo de ejecución "Resumido"
- descripcion de region: Exactus, Amed y AP Vida (pór default)

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos"
3. El usuario configura el periodo, versión, modo de ejecución y descripcion de region
4. El usuario presiona el botón "Ejecutar Todo"
5. Se levanta un modal,
6. ¿Desea aplicar el parche a la información procesada?
7. Desea aplicar cambios en la información obtenida.
8. Selecione “No”

**Resultado esperado:**
Se ejecutan las fases inicial, fase 1, fase 2, parches y cierre

---

## Escenario: E64-AM-EC
**Descripcion:** Validar funcionalidad 'Ejecutar Todo' en el proceso de distribución en el flujo Asientos Manuales en el modo de ejecución completo

_Sin casos de prueba asociados._

---

## Escenario: E65-AM-ER
**Descripcion:** Validar funcionalidad 'Detener' la ejecución en curso en el proceso de distribución en el flujo Asientos Manuales en el modo de ejecución resumido

### Caso de prueba: E65-GF-ER
- Implementado: No

**Titulo:** Detención del proceso de distribución en modo resumido mediante la opción “Detener” – Flujo Asientos Manuales

**Descripcion:** Validar que, al ejecutar la opción “Detener” durante el procesamiento del flujo de Asientos Manuales en modo resumido, el sistema interrumpa correctamente la ejecución en curso, mostrando el mensaje correspondiente, deshabilitando las acciones asociadas y conservando el estado de avance al momento de la detención.

**Precondiciones:**
1. El proceso debe encontrarse en estado en ejecución (con porcentaje de avance visible)

**Datos:**
- -

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos"
3. El usuario presiona el botón "Detener"

**Resultado esperado:**
1-Al detener el proceso, se muestra un modal con el mensaje:
“El proceso de distribución se ha detenido”
2-El botón “Ejecutar todo” queda deshabilitado
3-El proceso se detiene manteniendo el porcentaje de avance actual, sin reiniciar ni continuar la ejecución
### Caso de prueba: E65-GF-EC
- Implementado: No

**Titulo:** Detención del proceso de distribución en modo completo mediante la opción “Detener” – Flujo Asientos Manuales

**Descripcion:** Validar que, al ejecutar la opción “Detener” durante el procesamiento del flujo de Asientos Manuales en modo completo, el sistema interrumpa correctamente la ejecución en curso, mostrando el mensaje correspondiente, deshabilitando las acciones asociadas y conservando el estado de avance al momento de la detención.

**Precondiciones:**
1. El proceso debe encontrarse en estado en ejecución (con porcentaje de avance visible)

**Datos:**
- -

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos"
3. El usuario presiona el botón "Detener"

**Resultado esperado:**
1-Al detener el proceso, se muestra un modal con el mensaje:
“El proceso de distribución se ha detenido”
2-El botón “Ejecutar todo” queda deshabilitado
3-El proceso se detiene manteniendo el porcentaje de avance actual, sin reiniciar ni continuar la ejecución

---

## Escenario: E65-AM-EC
**Descripcion:** Validar funcionalidad 'Detener' la ejecución en curso en el proceso de distribución en el flujo Asientos Manuales en el modo de ejecución completo

_Sin casos de prueba asociados._

---

## Escenario: E66-AM-ER
**Descripcion:** Validar funcionalidad 'Reiniciar' la ejecución detenida en el proceso de distribución en el flujo Asientos Manuales en el modo de ejecución resumida

### Caso de prueba: E66-GF-ER
- Implementado: No

**Titulo:** Reinicio del proceso de distribución en modo resumido mediante la opción “Reiniciar” – Flujo Asientos Manuales

**Descripcion:** Validar que, al ejecutar la opción “Reiniciar” sobre un proceso previamente detenido en el flujo de Asientos Manuales en modo resumido, el sistema retome correctamente la ejecución, reiniciando únicamente la fase en la cual se detuvo .

**Precondiciones:**
1. El proceso de distribución en el flujo de Asientos Manuales (modo resumido) debe haber sido detenido previamente

**Datos:**
- -

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos"
3. El usuario presiona el botón "Reiniciar"

**Resultado esperado:**
1-Al ejecutar la opción “Reiniciar”, el proceso se reanuda y la fase específica en la que se detuvo inicia desde cero
2-Las fases anteriores se mantienen con su estado previamente ejecutado (no se reprocesan)
3-El botón “Ejecutar todo” permanece deshabilitado durante la ejecución posterior al reinicio
### Caso de prueba: E66-GF-EC
- Implementado: No

**Titulo:** Reinicio del proceso de distribución en modo completo mediante la opción “Reiniciar” – Flujo Asientos Manuales

**Descripcion:** Validar que, al ejecutar la opción “Reiniciar” sobre un proceso previamente detenido en el flujo de Asientos Manuales en modo Completo, el sistema retome correctamente la ejecución, reiniciando únicamente la fase en la cual se detuvo .

**Precondiciones:**
1. El proceso de distribución en el flujo de Asientos Manuales (modo completo) debe haber sido detenido previamente

**Datos:**
- -

**Pasos:**
1. El usuario accede en la página de inicio, selecciona "Real" y "Asientos Manuales".
2. El usuario selecciona del menú lateral "Procesos"
3. El usuario presiona el botón "Reiniciar"

**Resultado esperado:**
1-Al ejecutar la opción “Reiniciar”, el proceso se reanuda y la fase específica en la que se detuvo inicia desde cero
2-Las fases anteriores se mantienen con su estado previamente ejecutado (no se reprocesan)
3-El botón “Ejecutar todo” permanece deshabilitado durante la ejecución posterior al reinicio

---

## Escenario: E66-AM-EC
**Descripcion:** Validar funcionalidad 'Reiniciar' la ejecución detenida en el proceso de distribución en el flujo Asientos Manuales en el modo de ejecución completo

_Sin casos de prueba asociados._

---

## Escenario: E67-DIS
**Descripcion:** Validar que el archivo descargado de Distribución muestre, las cabeceras, los datos correctamente y no tenga perdida de información

### Caso de prueba: E67-DIS
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Distribución

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo

**Datos:**
- Archivo Distribución

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario presiona el botón "Descargar".
3. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos

---

## Escenario: E68-AM
**Descripcion:** Validar la correcta ejecución de botón ''Borrar Versión'' de la pantalla Exactus de Asientos Manuales.

### Caso de prueba: E68-AM-01
- Implementado: No

**Titulo:** Validar la correcta ejecución de botón ''Borrar Versión'' de la pantalla Exactus de Asientos Manuales.

**Descripcion:** Validar la correcta ejecución de botón ''Borrar Versión'' de la pantalla Exactus de Asientos Manuales.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Asientos Manuales.
2. El botón Borrar Versión esté funcional.
3. Debe existir un archivo Exactus cargado anteriormente.

**Datos:**
- Archivo ''REAL Exactus sin Procesar AM'' definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Asientos Manuales
2. El usuario selecciona de menú lateral "Aprovisionamiento" > " Exactus".
3. El usuario presiona botón ''Borrar Versión''.
4. Se levanta un modal con la advertencia Se eliminarán todos los datos asociados al archivo Exactus cargados. ¿Desea continuar?

**Resultado esperado:**
La data de Exactus ha sido borrada satisfactoriamente. Se muestra el mensaje ¡Registro eliminado con éxito!
Se debe validar que en el front no se muestre data.

---

## Escenario: E69-AM-EC
**Descripcion:** Validar que se procesen las fases en la sección "Procesos" usando "Exactus Procesado" de Asientos Manuales en el modo de ejecución Completo

### Caso de prueba: E69-GF-EC-01
- Implementado: No

**Titulo:** Procesamiento de las Fases de Asientos Manuales con la carga manual del Exactus procesado en el modo de ejecución Completo

**Descripcion:** Validar el procesamiento del modo de ejecución Completo de Asientos Manuales cargando inicialmente el archivo Exactus procesado y comenzando desde la fase 1.

**Precondiciones:**
1. No se ha procesado la información en Oracle.
2. Se debe tener el archivo Exactus procesado correcto.
3. Deben estar cargados los archivos provienen del área de inversiones AME, AP VIDA y Drivers del método de distribución.
4. Se debe comenzar con la Fase 1.

**Datos:**
- Archivo REAL Exactus Procesado GF definido en Asientos Manuales

**Pasos:**
1. El usuario accede en la página de inicio, con el selector por defecto en Asientos Manuales y selecciona una distribución de tipo "Real".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > " Exactus".
3. El usuario selecciona el botón ''Exactus procesado''
4. El usuario presiona botón Cargar.
5. Se levanta el modal con titulo "Cargar Exactus Procesado'', el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar"" y selecciona el archivo a cargar.
6. El botón aceptar queda habilitado para dar aceptar.
7. El usuario selecciona del menú lateral "Procesos"
8. El usuario configura el Periodo, la Versión y el Modo de ejecución.
9. El usuario ejecuta la Fase 1, 2 y cierre de proceso.

**Resultado esperado:**
Se ejecuta el proceso de Asientos Manuales satisfactoriamente, sustituyendo la corrida de la fase inicial por la carga del exactus procesado manualmente.
### Caso de prueba: E69-GF-01
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Exactus procesado definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Exactus procesado definido en el proceso de Aprovisionamiento de Asientos Manuales cargado en el motor

**Pasos:**
1. El usuario accede en la página de inicio, con el selector por defecto en Asientos Manuales y selecciona una distribución de tipo "Real".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > " Exactus".
3. El usuario selecciona el botón ''Exactus procesado''
4. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E69-AM-01
**Descripcion:** Validar la correcta ejecución de flujo de descarga de archivo Exactus procesado de Asientos Manuales

_Sin casos de prueba asociados._
