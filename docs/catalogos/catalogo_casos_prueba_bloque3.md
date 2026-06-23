# Catalogo de casos de prueba

---

## Escenario: E0-LOGIN-ADMIN-01
**Descripcion:** Validar que el sistema permita autenticarse con el rol de Administrador

### Caso de prueba: E0-LOGIN-ADMIN-01.01
- Implementado: No

**Titulo:** Validar que el rol Administrador tiene acceso al sistema

**Descripcion:** Validad que un usuario con el rol de Administrador pueda autenticarse al sistema.

**Precondiciones:**
1. Usuario creado en el sistema con rol Administrador de Gastos
2. El usuario debe ingresar con un rol Administrador de Gastos para ejecutar cualquier acción.

**Datos:**
- Rol: Adiminstrador de gasto
- Correo: inetum.Fernando.Alva@pacifico.com.pe
- Contraseña: Bry.18AC!

**Pasos:**
1. El usuario accede a la página de inicio de sesion (https://distribuciongastos.pacificotest.com.pe/)
2. Ingresa el correo y contraseña y da click en el botón "inicio de sesion"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-En la parte inferior del sidebar, se muestra el nombre y rol, al hacer click se muestra el correo y la accion de cerrar sesion

---

## Escenario: E0-LOGIN-ADMIN-02
**Descripcion:** Validar que el sistema restrinja la modificación de archivos con el rol de Administrador

### Caso de prueba: E0-LOGIN-ADMIN-02
- Implementado: Si

**Titulo:** Validar que el rol administrador puede visualizar y modificar los archivos comunes

**Descripcion:** Validar el rol Administrador de Gestor puede hacer uso total de las funcionalidades de la sección comunes

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos

**Datos:**
- Archivos comunes Línea, Canales, Subcanal, Grupo Producto, Maestro UoA y Configuración de Parches únicamente a usuarios con el rol "Administrador de Gastos"

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
1-El usuario accede correctamente al sistema y puede visualizar todas las secciones
2-El usuario puede crear, editar y eliminar registros en el flujo de comunes con su rol "Administrador de Gastos"

---

## Escenario: E0-LOGIN-GESTOR-GASTO-01
**Descripcion:** Validar que sistema permita autenticarse con el rol de gestor de gastos Financieros

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-01
- Implementado: Si

**Titulo:** Validar que el rol de gestor de gastos Financieros tiene acceso al sistema

**Descripcion:** Validad que un usuario con el rol de gestor de gastos Financieros pueda autenticarse al sistema.

**Precondiciones:**
1. Usuario creado en el sistema con el rol de Gestor de gastos Financieros
2. El usuario está activo.
3. usuario con el rol de Gestor de Gastos Financieros solo podrá ejecutar acciones propias de Gastos Financieros
4. ( para estas pruebas )Usuario con un solo rol asignado

**Datos:**
- Rol: Gestor de Gastos Financieros
- Correo: psilvestre@pacificotest.com.pe
- Contraseña: MDG rocks!

**Pasos:**
1. El usuario accede a la página de inicio de sesion (https://distribuciongastos.pacificotest.com.pe/)
2. Ingresa el correo y contraseña y da click en el botón "inicio de sesion"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El sidebar muestra el rol Gestor de Gastos Financieros y al hacer click se muestra el correo y la accion de cerrar sesion
3-Se visualiza por defecto en el selector superior "Gastos Financieros" y no puede selecionar otro tipo de gasto.

---

## Escenario: E0-LOGIN-GESTOR-GASTO-02
**Descripcion:** Validar que el sistema restrinja la modificación de archivos comunes a un rol de Gestor de gastos

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-02
- Implementado: Si

**Titulo:** Validar que el rol de gestor de gastos Financieros no pueda visualizar ni modificar los archivos ni datos del flujo de comunes

**Descripcion:** Validar el rol gestor de gastos Financieros no pueda visualizar ni modificar informacion del flujo de comunes

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de gastos Financieros

**Datos:**
- Archivos comunes Línea, Canales, Subcanal, Grupo Producto, Maestro UoA y Configuración de Parches únicamente a usuarios con el rol "Administrador de Gastos"

**Pasos:**
1. El usuario accede a la página de inicio de sesion --> https://distribuciongastos.pacificotest.com.pe/
2. Ingresa el correo y contraseña, con el rol correspondiente, dar click en el botón "inicio de sesión"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no puede visualizar el flujo de comunes

---

## Escenario: E0-LOGIN-GESTOR-GASTO-03
**Descripcion:** Validar que el sistema restrinja la eliminacion de archivos a un rol de Gestor de gastos para el flujo de gastos Financieros

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-03.1
- Implementado: No

**Titulo:** Validar que el rol de gestor de gastos Financieros no pueda eliminar registros del flujo de Parametrizacion

**Descripcion:** Validar el rol gestor de gastos Financieros no pueda eliminar informacion del flujo de Parametrizacion

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de gastos Financieros

**Datos:**
- Archivos Parametrizacion : Cuentas contables, centros y Maestro Producto
- únicamente a usuarios con el rol "Administrador de Gastos" puede eliminar

**Pasos:**
1. El usuario accede a la página de inicio de sesion --> https://distribuciongastos.pacificotest.com.pe/
2. Ingresa el correo y contraseña, con el rol correspondiente, dar click en el botón "inicio de sesión"
3. El usuario selecciona del menú lateral "Parametrizacion " > "Cuentas contables"
4. El usuario selecciona del menú lateral "Parametrizacion " > "Centros ".
5. El usuario selecciona del menú lateral "Parametrizacion " > "Maestro Producto".

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no se le visualiza el icono para eliminar en las acciones en el flujo de Parametrizacion
### Caso de prueba: E0-LOGIN-GESTOR-GASTO-03.2
- Implementado: No

**Titulo:** Validar que el rol de gestor de gastos Financieros no pueda eliminar registros del flujo de Aprovisionamiento

**Descripcion:** Validar el rol gestor de gastos Financieros no pueda eliminar informacion del flujo de Aprovisionamiento

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de gastos Financieros

**Datos:**
- Archivos Aprovisionamiento: AMED, AP Vida, Driver Producto, Driver Subcanal, Drivers CC Vida y Maestro de Negocio Embebidos
- únicamente a usuarios con el rol "Administrador de Gastos" puede eliminar

**Pasos:**
1. El usuario accede a la página de inicio de sesion --> https://distribuciongastos.pacificotest.com.pe/
2. Ingresa el correo y contraseña, con el rol correspondiente, dar click en el botón "inicio de sesión"
3. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED"
4. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP Vida".
5. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
6. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Subcanal".
7. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers CC Vida".
8. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio Embebidos".

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no se le visualiza el icono para eliminar en las acciones en el flujo de Aprovisionamiento
### Caso de prueba: E0-LOGIN-GESTOR-GASTO-03.3
- Implementado: No

**Titulo:** Validar que el rol de gestor de gastos Financieros no pueda eliminar registros del flujo de Asignaciones

**Descripcion:** Validar el rol gestor de gastos Financieros no pueda modificar informacion del flujo de Asignaciones

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de gastos Financieros

**Datos:**
- Archivos Asignaciones: Especiales NIIF, Driver Reservas a UoA y Distribución UoA Generaels Multiramo
- únicamente a usuarios con el rol "Administrador de Gastos" puede eliminar

**Pasos:**
1. El usuario accede a la página de inicio de sesion --> https://distribuciongastos.pacificotest.com.pe/
2. Ingresa el correo y contraseña, con el rol correspondiente, dar click en el botón "inicio de sesión"
3. El usuario selecciona del menú lateral "Aprovisionamiento" > "Especiales NIIF"
4. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Reservas a UoA"
5. El usuario selecciona del menú lateral "Aprovisionamiento" > "Distribución UoA Generaels Multiramo"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no se le visualiza el icono para eliminar en las acciones en el flujo de Aprovisionamiento

---

## Escenario: E40-DIS-01
**Descripcion:** Validar que el sistema pueda crear una nueva distribución con un rol de Gestor de Gastos

### Caso de prueba: E40-DIS-01
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de crear una nueva distribución

**Descripcion:** Validar que se pueda crear una nueva distribución desde el modal "Nueva Distribución"

**Precondiciones:**
1. El usuario debe ingresar con un rol de Gestor de Gastos Financieros
2. Esta distribución no haya sido creada anteriormente.
3. El nombre se va formando con la información de los campos: Periodo, Tipo y Sección.
4. Los campos Tipo, Periodo y Secciones son select.

**Datos:**
- Campos del formulario
- Nombre: Periodo_Tipo_Sección
- Tipo: Real
- Periodo: catálogo con los periodos del año en curso, Ej: 202501, 202502, etc.
- Versión: número entero con un decimal, Ej: 1.0, 1.1, 2.0
- Tasa de cambio: número entero de hasta 4 cifras con dos decimales, Ej:13.98, 1.09, 0.65, 1234.98
- Secciones: Flujo del mes, Ajuste del mes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona "Nueva Distribución".
3. Se levanta el modal con titulo "Crear distribución", el botón crear está deshabilitado
4. El usuario completa los campos y se habilita el botón crear.
5. El usuario presiona el botón crear
6. Se muestra un mesaje de exito.

**Resultado esperado:**
El sistema crea una nueva distribución correctamente y muestra un mensaje de exito ¡Hecho! El registro se agregó sin problemas

---

## Escenario: E40-PRE-DIS-01
**Descripcion:** Validar que el sistema pueda crear una nueva distribución con un rol de Gestor de Gastos para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E40-DIS-02
**Descripcion:** Validar las reglas de negocio al crear una nueva distribución

### Caso de prueba: E40-DIS-02
- Implementado: No

**Titulo:** Validar que no se pueda crear una nueva distribución porque no cumplen con las reglas definidas de negocio

**Descripcion:** Validar no se pueda crear una nueva distribución porque no cumplen con las reglas definidas de negocio desde el modal "Nueva Distribución"

**Precondiciones:**
1. El usuario debe ingresar con un rol de Gestor de Gastos Financieros
2. Esta distribución ya ha sido creada anteriormente.
3. Solo se puede crear una distribución, no se puede editar.
4. El nombre se va formando con la información de los campos: Periodo, Tipo y Sección.
5. Los campos Tipo, Periodo y Secciones son select.

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
El sistema no crea una nueva distribución y muestra un mensaje de error Algo no coincide entre los datos ingresados. Por favor, revise que los campos estén relacionados correctamente e intente de nuevo.

---

## Escenario: E40-DIS-03
**Descripcion:** Validar el formato de los campos del formulario al crear una nueva distribución

### Caso de prueba: E40-DIS-03
- Implementado: No

**Titulo:** Validar que no se pueda crear una nueva distribución por error de formato de los campos

**Descripcion:** Validar no se pueda crear una nueva distribución por error de formato de los campos

**Precondiciones:**
1. El usuario debe ingresar con un rol de Gestor de Gastos Financieros
2. Esta distribución no haya sido creada anteriormente.

**Datos:**
- Campos del formulario
- Nombre: Periodo_Tipo_Sección
- Tipo: Real
- Periodo: catálogo con los periodos del año en curso, Ej: 202501, 202502, etc.
- Versión: número entero con un decimal, Ej: 1.0, 1.1, 2.0
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
El sistema no crea una nueva distribución y muestra un mensaje Algunos datos tienen un formato no válido o contienen caracteres extraños

---

## Escenario: E40-DIS-04
**Descripcion:** Validar que el sistema pueda editar el nombre al crear una distribución con un rol de Gestor de Gastos

### Caso de prueba: E40-DIS-04
- Implementado: No

**Titulo:** Validar la Edición del nombre durante la creación de una distribución con el rol de Gestor de Gastos Financieros

**Descripcion:** Validar que un usuario con el rol de Gestor de Gastos pueda modificar correctamente el nombre de una distribución durante su proceso de creación, asegurando que el sistema permita la edición del campo y guarde los cambios de forma exitosa.

**Precondiciones:**
1. El usuario debe ingresar con un rol de Gestor de Gastos Financieros
2. Esta distribución no haya sido creada anteriormente.

**Datos:**
- Campos del formulario
- Nombre:
- Tipo: Real NIFF., REAL LOCAL y PRESUPUESTO
- Periodo: catálogo con los periodos del año en curso, Ej: 202501, 202502, etc.
- Versión: número entero con un decimal, Ej: 1.0, 1.1, 2.0
- Tasa de cambio: número entero de hasta 4 cifras con dos decimales, Ej:13.98, 1.09, 0.65, 1234.98
- Secciones: Flujo del mes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona "Nueva Distribución".
3. Se levanta el modal con titulo "Crear distribución", el botón crear está deshabilitado
4. El usuario ingresa un nombre en el campo Nombre
5. El usuario seleciona el tipo, [REAL NIFF]
6. El sistema muestra una sugerencia debajo del campo de nombre con el texto: "Sugerencia: [Real NIIF]"
7. El usuario tiene dos opciones:
8. Si hace clic en “Aplicar”, el sistema actualiza el nombre con la sugerencia.
9. Si no hace clic en “Aplicar”, el nombre ingresado se mantiene sin cambios.
10. El usuario completa los demás campos obligatorios del formulario.
11. El sistema habilita el botón “Crear” una vez que todos los campos requeridos son válidos.
12. El usuario hace clic en el botón “Crear”.

**Resultado esperado:**
El sistema crea una nueva distribución con el nombre editado correctamente y muestra un mensaje de exito ¡Hecho! El registro se agregó sin problemas

---

## Escenario: E41-DIS-01
**Descripcion:** Validar que el sistema permita visualizar el detalle de las fases de una distribución desde el menú de acciones

### Caso de prueba: E41-DIS-01
- Implementado: No

**Titulo:** Validar que se pueda visualizar el estado de la ejecucion de la distribución desde el menú de acciones

**Descripcion:** Validar que se pueda visualizar el estado de una distribución

**Precondiciones:**
1. El usuario debe ingresar con un rol de Gestor de Gastos Financieros
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
**Descripcion:** Validar la disponibilidad de la acción “Copiar” desde el menú de acciones según el estado de la distribución

### Caso de prueba: E42-DIS-01
- Implementado: No

**Titulo:** Validar que el sistema permita copiar una distribución desde el menú de acciones cuando el estado sea “Completada

**Descripcion:** Validar que se realice una copia de una distribución ya creada anteriormente.

**Precondiciones:**
1. El usuario debe ingresar con un rol de Gestor de Gastos Financieros
2. Se debe haber creado la distribución origen
3. La distribución selecciona para realizar la copia está en estado Completada

**Datos:**
- Data de la distribución seleccionada como origen para realizar la copia.
- Estado: completada

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona el icono "copy" para copiar el registro de la distribución seleccionada.
3. Se levanta un modal con el texto "Se va a copiar toda la información de la distribución seleccionada." donde se puede selecionar el periodo y Versión"
4. El usuario hace clik en aceptar

**Resultado esperado:**
Se muestra en el frontend el nuevo registro de distribución, en donde se copian todos los datos de la distribución seleccionada, con el estado "creada"
### Caso de prueba: E42-DIS-01.1
- Implementado: No

**Titulo:** Validar que el sistema no muestre la opción “Copiar” en el menú de acciones cuando el estado sea diferente a “Completada”

**Descripcion:** Validar que no se muestre el icono de copiar en una distribución con estado diferente a completado

**Precondiciones:**
1. El usuario debe ingresar con un rol de Gestor de Gastos Financieros
2. Se debe haber creado la distribución origen
3. La distribución selecciona para realizar la copia está con estado diferente a completado

**Datos:**
- Estado: creada, detenido, con errores y corriendo

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario busca una distribución en estado --> creada
3. El usuario busca una distribución en estado --> detenido
4. El usuario busca una distribución en estado --> con errores
5. El usuario busca una distribución en estado --> corriendo

**Resultado esperado:**
No se muestra en ninguna de las distribuciónes el icono para copiar.

---

## Escenario: E43-DIS
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
2. Selecciona una distribución en estado: Creada
3. El usuario presiona el icono "basurero" para eliminar el registro selecionado.
4. Se levanta un modal con la advertencia Se eliminarán todos los datos asociados a la distribución. ¿Desea continuar?
5. El usuario acepta

**Resultado esperado:**
Se elimina el registro selecionado
1- Se muestra un mensaje de exito ¡Registro eliminado con éxito!
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
3. El usuario presiona el icono "basurero" para eliminar el registro selecionado.
4. Se levanta un modal con la advertencia Se eliminarán todos los datos asociados a la distribución. ¿Desea continuar?
5. El usuario acepta

**Resultado esperado:**
Se elimina el registro selecionado
1- Se muestra un mensaje de exito ¡Registro eliminado con éxito!
2- Se elimina el registro de la tabla distribución mostrada en el front.
### Caso de prueba: E43-DIS-02.1
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
No se muestra en ninguna de las distribuciónes el icono para eliminar. Lo que impide eliminar la distribución.

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

## Escenario: E58-GF-01
**Descripcion:** Validar que no se cargue el archivo sin que su antecesor ya se encuentre cargado en Parametrización de Gastos Financieros

### Caso de prueba: E58-GF-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Maestro Reservas Producto sin que su antecesor ya se encuentre cargado en Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo REAL Maestro Reservas Producto sin procesar GF sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. No debe estar cargado el archivo en Grupo Producto y SubCanal de Comunes

**Datos:**
- Archivo ''REAL Maestro Reserva Producto GF'' definidos en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reserva Producto".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro Reserva Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado

---

## Escenario: E58-GF-02
**Descripcion:** Validar que no se cargue el archivo sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Gastos Financieros

### Caso de prueba: E58-GF-02.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Exactus sin procesar GF sin que su antecesor ya se encuentre cargado en el flujo de Gastos Financieros

**Descripcion:** Validar la carga de un archivo REAL Exactus sin procesar GF sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. No deben estar cargados los archivos: Cuentas Contables de Parametrización de GF y Lineas y Canal de Comunes.

**Datos:**
- Archivo ''REAL Exactus sin procesar GF'' definidos en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.

**Resultado esperado:**
Se muestra un mensaje de error:
El sistema no carga el archivo y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado
### Caso de prueba: E58-GF-02.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Driver Producto sin que su antecesor ya se encuentre cargado en el flujo de Gastos Financieros

**Descripcion:** Validar la carga de un archivo REAL Driver Producto GF sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. No debe estar cargado el archivo Grupo Producto de Comunes.

**Datos:**
- Archivo ''REAL Driver Producto GF'' definidos en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado
### Caso de prueba: E58-GF-02.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Driver Subcanal sin que su antecesor ya se encuentre cargado en el flujo de Gastos Financieros

**Descripcion:** Validar la carga de un archivo REAL Driver Subcanal GF sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. No debe estar cargado el archivo Subcanal.

**Datos:**
- Archivo ''REAL Driver Subcanal GF'' definidos en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado
### Caso de prueba: E58-GF-02.4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Unidad de Cuenta sin que su antecesor ya se encuentre cargado en el flujo de Gastos Financieros

**Descripcion:** Validar la carga de un archivo REAL Unidad de Cuenta GF sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. No deben estar cargados los archivos: Ramo y Cuentas Contables de la parametrización de GF y Grupo producto y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Unidad de Cuenta GF'' definidos en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Unidad de Cuenta".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Unidad de Cuenta", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado
### Caso de prueba: E58-GF-02.5
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Maestro de Negocio y Embebidos sin que su antecesor ya se encuentre cargado en el flujo de Gastos Financieros

**Descripcion:** Validar la carga de un archivo REAL Maestro de Embebidos GF sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. No deben estar cargados los archivos: Línea, Grupo producto, Canal y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Maestro de Embebidos GF'' definidos en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado

---

## Escenario: E58-GF-03
**Descripcion:** Validar que no se cargue el archivo sin que su antecesor ya se encuentre cargado en Asignaciones de Gastos Financieros

### Caso de prueba: E58-GF-03.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Método Subcanal sin que su antecesor ya se encuentre cargado en el flujo de Gastos Financieros

**Descripcion:** Validar la carga de un archivo REAL Metodo Subcanal GF sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. No debe estar cargado el archivo: Driver Subcanal.

**Datos:**
- Archivo ''REAL Metodo Subcanal GF'' definidos en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Método Subcanal".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Método Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado
### Caso de prueba: E58-GF-03.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Método Producto sin que su antecesor ya se encuentre cargado en el flujo de Gastos Financieros

**Descripcion:** Validar la carga de un archivo REAL Metodo Producto GF sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. No debe estar cargado el archivo: Driver Producto.

**Datos:**
- Archivo ''REAL Metodo Producto GF'' definidos en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Método Producto".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Método Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado
### Caso de prueba: E58-GF-03.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Especiales NIIF sin que su antecesor ya se encuentre cargado en el flujo de Gastos Financieros

**Descripcion:** Validar la carga de un archivo REAL Especiales NIIF GF sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. No deben estar cargados los archivos: Cuentas Contables y Centros de la parametrización de GF y Grupo producto y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Especiales NIIF GF'' definidos en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Método Subcanal".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Método Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. No se puede cargar este archivo porque el archivo anterior aún no ha sido cargado

---

## Escenario: E59-GF
**Descripcion:** Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en el flujo de Gastos Financieros

### Caso de prueba: E59-GF-01.1
- Implementado: No

**Titulo:** Carga de el archivo Cuentas Contables que ya contenga información definida en el proceso de parametrizacion en Gastos Financieros

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. que exista data cargada.

**Datos:**
- Archivo ''REAL Cuentas Contables GF'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-GF-01.2
- Implementado: No

**Titulo:** Carga de el archivo Centros que ya contenga información definida en el proceso de parametrizacion en Gastos Financieros

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. que exista data cargada.
4. .

**Datos:**
- Archivo ''REAL Centros GF' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-GF-01.3
- Implementado: No

**Titulo:** Carga de el archivo Maestro Reservas Producto que ya contenga información definida en el proceso de parametrizacion en Gastos Financieros

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. que exista data cargada.

**Datos:**
- Archivo ''REAL Maestro Reservas Producto GF'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reservas Producto ".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Maestro Reservas Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-GF-02.1
- Implementado: No

**Titulo:** Carga de el archivo Exactus sin procesar que ya contenga información definida en el proceso de Aprovisionamiento en Gastos Financieros

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. que exista data cargada.
4. deben estar cargados los archivos: Cuentas Contables de Parametrización de GF y Lineas y Canal de Comunes.

**Datos:**
- Archivo ''REAL Exactus sin procesar GF'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-GF-02.2
- Implementado: No

**Titulo:** Carga de el archivo Driver Producto que ya contenga información definida en el proceso de Aprovisionamiento en Gastos Financieros

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. que exista data cargada.
4. debe estar cargado el archivo Grupo Producto.

**Datos:**
- Archivo ''REAL Driver Producto GF'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-GF-02.3
- Implementado: No

**Titulo:** Carga de el archivo Driver Subcanal que ya contenga información definida en el proceso de Aprovisionamiento en Gastos Financieros

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. que exista data cargada.
4. debe estar cargado el archivo Subcanal.

**Datos:**
- Archivo ''REAL Driver Subcanal GF" que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Driver Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-GF-02.4
- Implementado: No

**Titulo:** Carga de el archivo Driver CC Vida que ya contenga información definida en el proceso de Aprovisionamiento en Gastos Financieros

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. que exista data cargada.
4. deben estar cargados los archivos: Ramo y Cuentas Contables de la parametrización de GF y Grupo producto y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Driver CC Vida GF'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver CC Vida".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Driver CC Vida", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-GF-02.5
- Implementado: No

**Titulo:** Carga de el archivo Maestro de Negocio Embebidos que ya contenga información definida en el proceso de Aprovisionamiento en Gastos Financieros

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. que exista data cargada.
4. deben estar cargados los archivos: Línea, Grupo producto, Canal y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Maestro de Embebidos GF'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio Embebidos".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Maestro de Negocio Embebidos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-GF-03.1
- Implementado: No

**Titulo:** Carga de el archivo Especiales NIIF que ya contenga información definida en el proceso de Asignaciones en Gastos Financieros

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. que exista data cargada.
4. debe estar cargado el archivo: Cuentas Contables, Grupo Producto, Subcanal, Centros

**Datos:**
- Archivo ''REAL Metodo Subcanal GF'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF ".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Especiales NIIF ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-GF-03.2
- Implementado: No

**Titulo:** Carga de el archivo Driver UoA - VIDA que ya contenga información definida en el proceso de Asignaciones en Gastos Financieros

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. que exista data cargada.

**Datos:**
- Archivo ''REAL Driver UoA - VIDA GF'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > " Driver UoA - VIDA ".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "Cargar Driver UoA - VIDA ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E59-GF-03.3
- Implementado: No

**Titulo:** Carga de el archivo Distribución UoA Generales Multiramoque ya contenga información definida en el proceso de Asignaciones en Gastos Financieros

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. que exista data cargada.
4. .

**Datos:**
- Archivo ''REAL Distribución UoA Generales Multiramo GF'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario selecciona del menú lateral "Asignaciones" > "REAL Distribución UoA Generales Multiramo".
3. El usuario presiona el botón "Cargar".
4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. Se levanta el modal con titulo "REAL Distribución UoA Generales Multiramo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E59-PRE-GF
**Descripcion:** Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en el flujo de Gastos Financieros para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E4-GF-01
**Descripcion:** Validación de la carga de los archivos en formato permitido en Parametrización de Gastos Financieros

### Caso de prueba: E4-GF-01
- Implementado: Si

**Titulo:** Carga del archivo Cuentas Contables definido en el proceso Gastos Financieros

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas

**Precondiciones:**
1. Existencia del archivo correspondiente
2. el usuario registrado tenga el rol de Gestor de gastos Financieros

**Datos:**
- Archivo Líneas ''REAL Cuentas Contables GF'' definido en el proceso de Gastos

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario selecciona del menú lateral "Parametrizacion " > "Cuentas Contables".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Real Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-01.1
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
### Caso de prueba: E4-GF-01.2
- Implementado: Si

**Titulo:** Carga del archivo Centros definido en el proceso Parametrización

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. debe estar cargado el archivo Cuentas Contables.

**Datos:**
- Archivo Grupo Producto ''REAL Centros GF'' definido en el proceso de Parametrizacion

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario selecciona del menú lateral "Parametrizacion" > "Centros".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Real Centros GF ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-01.2.1
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo Centros definido en el proceso Parametrizacion

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. debe estar cargado el archivo Centros .

**Datos:**
- Archivo Líneas ''REAL Centros GF'' definido en el proceso de Parametrizacion

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Parametrizacion" > "Centros ".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Centros ", con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesar archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Centros GF ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-01.3
- Implementado: Si

**Titulo:** Carga del archivo Maestro Reservas Producto definido en el proceso Parametrización

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros .
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Canales ''REAL Maestro Reservas Producto GF' definido en el proceso de Parametrizacion

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario selecciona del menú lateral "Parametrizacion" > "Maestro Reservas Producto".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Maestro Reservas Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Real Maestro Reservas Producto ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-01.3.1
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo Maestro Reservas Producto definido en el proceso Parametrizacion

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo Líneas ''REAL Maestro Reservas Producto GF'' definido en el proceso de Parametrizacion

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reservas Producto".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Maestro Reservas Producto", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesr archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
8. El usuario presiona " procesar archivo".
9. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Maestro Reservas Producto ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E4-GF-02
**Descripcion:** Validación de la carga de los archivos en formato permitido en Aprovisionamiento de Gastos Financieros

### Caso de prueba: E4-GF-02.1
- Implementado: No

**Titulo:** Carga del archivo Exactus sin procesar definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo Canales ''REAL Exactus sin procesar GF' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus ".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Exactus ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Real Exactus ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-02.2.1
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo Exactus sin procesar definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo procesado
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo Líneas ''REAL Exactus sin procesar GF'' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Centros".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Centros", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesr archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
8. El usuario presiona " procesar archivo".
9. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Exactus ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-02.3
- Implementado: Si

**Titulo:** Carga del archivo AMED definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo procesado
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo Canales ''REAL AMED GF' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Amed".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Amed", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Real Amed ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-02.3.1
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo AMED definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo Líneas ''REAL AMED GF'' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Amed".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Amed", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesar archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
8. El usuario presiona " procesar archivo".
9. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Amed ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-02.4
- Implementado: Si

**Titulo:** Carga del archivo AP Vida definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros .
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Canales ''REAL AP Vida GF' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP Vida".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar AP Vida", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Real AP Vida ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-02.4.1
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo AP Vida definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo Líneas ''REAL AP Vida'' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP Vida".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''AP Vida", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesr archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
8. El usuario presiona " procesar archivo".
9. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real AP Vida
ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-02.5
- Implementado: Si

**Titulo:** Carga del archivo Driver Producto definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Canales ''REAL Driver Producto
- GF' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Real Driver Producto ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-02.5.1
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo Driver Producto definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo Líneas ''REAL Driver Producto GF'' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Driver Producto", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesar archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
8. El usuario presiona " procesar archivo".
9. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Driver Producto ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-02.6
- Implementado: Si

**Titulo:** Carga del archivo Driver Subcanal definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Canales ''REAL Driver Subcanal GF' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Subcanal ".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Driver Subcanal ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Real Driver Subcanal ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-02.6.1
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo Driver Subcanal definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo Líneas ''REAL Driver Subcanal GF'' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Subcanal ".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Driver Subcanal ", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesr archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
8. El usuario presiona " procesar archivo".
9. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Driver Subcanal ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-02.7
- Implementado: Si

**Titulo:** Carga del archivo Drivers CC Vida definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros .
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Canales ''REAL Drivers CC Vida GF' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers CC Vida".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Drivers CC Vida", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Real Drivers CC Vida ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-02.7.1
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo Drivers CC Vida definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo Líneas ''REAL Drivers CC Vida GF'' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers CC Vida".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Drivers CC Vida", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesr archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
8. El usuario presiona " procesar archivo".
9. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Drivers CC Vida
ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-02.8
- Implementado: Si

**Titulo:** Carga del archivo Maestro de Negocio Embebidos definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo Canales ''REAL Maestro de Negocio Embebidos GF' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio Embebidos".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Maestro de Negocio Embebidos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Real Maestro de Negocio Embebidos ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-02.8.1
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo Maestro de Negocio Embebidos definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo Líneas ''REAL Maestro de Negocio Embebidos GF'' definido en el proceso de Aprovisionamiento

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio Embebidos".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar ''Maestro de Negocio Embebidos", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesr archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
7. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
8. El usuario presiona " procesar archivo".
9. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Maestro de Negocio Embebidos ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E4-GF-03
**Descripcion:** Validación de la carga de los archivos en formato permitido en Asignaciones de Gastos Financieros

### Caso de prueba: E4-GF-03.1
- Implementado: Si

**Titulo:** Carga del archivo Especiales NIIF definido en el proceso Asignaciones

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo ''REAL Especiales NIIF GF'' definidos en el proceso de Asignaciones de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones " > "Especiales NIIF''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Especiales NIIF'', el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Rea Especiales NIIF GF' ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-03.1.1
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo Especiales NIIF definido en el proceso Asignaciones

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo ''REAL Especiales NIIF GF'' definidos en el proceso de Asignaciones de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones " > " Especiales NIIF ".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Especiales NIIF'', con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesr archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Especiales NIIF GF' ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-03.2
- Implementado: Si

**Titulo:** Carga del archivo Driver Reservas a UoA definido en el proceso Asignaciones

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros .
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo ''REALDriver UoA - VIDA GF'' definidos en el proceso de Asignaciones de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones " > "Driver UoA - VIDA''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Especiales NIIF'', el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Real Driver UoA - VIDA ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-03.2.1
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo Driver UoA - VIDA definido en el proceso Asignaciones

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo ''REAL Driver UoA - VIDA GF'' definidos en el proceso de Asignaciones de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones " > "Driver UoA - VIDA".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Driver UoA - VIDA'', con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesar archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Driver UoA - VIDA ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-03.3
- Implementado: Si

**Titulo:** Carga del archivo Distribución UoA Generaels Multiramo definido en el proceso Asignaciones

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente
2. usuario registrado tenga el rol de Gestor de Gastos Financieros.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo ''REAL Distribución UoA Generaels Multiramo GF'' definidos en el proceso de Asignaciones de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones " > "Distribución UoA Generaels Multiramo''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Distribución UoA Generaels Multiramo'', el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Real Distribución UoA Generaels Multiramo ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E4-GF-03.3.1
- Implementado: No

**Titulo:** Fucionalidad boton subir nuevo archivo Distribución UoA Generaels Multiramo definido en el proceso Asignaciones

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. Que ya se haya cargado un archivo
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo ''REALDistribución UoA Generaels Multiramo GF'' definidos en el proceso de Asignaciones de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones " > "Distribución UoA Generaels Multiramo".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Distribución UoA Generaels Multiramo'', con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?", el botón Procesr archivo está deshablitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8. se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. Este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Distribución UoA Generaels Multiramo ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E4-PRE-GF-01
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Parametrización de Gastos Financieros para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E5-GF-01
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Parametriación de Gastos Financieros

### Caso de prueba: E5-GF-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Cuentas Contables diferente al definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Cuentas Contables a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-GF-01.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Centros diferente al definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Centros ".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Centros ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Centros a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-GF-01.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Maestro Reservas Producto diferente al definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reservas Producto".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro Reservas Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Maestro Reservas Producto a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.

---

## Escenario: E5-GF-02
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Aprovisionamiento de Gastos Financieros

### Caso de prueba: E5-GF-02.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Exactus sin procesar diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero con data de exactu procesado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "aprovisionamiento" > "Exactus ".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Exactus ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Exactus s a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-GF-02.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Driver Producto diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "aprovisionamiento" > "Driver Productos".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Driver Producto a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-GF-02.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Driver Subcanal diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "aprovisionamiento" > " Driver Subcanal".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Driver Subcanal a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-GF-02.4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Drivers CC Vida diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "aprovisionamiento" > " Drivers CC Vida".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Drivers CC Vida", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Drivers CC Vida a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-GF-02.5
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Maestro de Negocio Embebidos diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "aprovisionamiento" > "Maestro de Negocio Embebidos".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro de Negocio Embebidos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Maestro de Negocio Embebidos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-GF-02.6
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad AMED diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "aprovisionamiento" > "AMED ".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar AMED ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a AMED a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-GF-02.7
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad AP Vida diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "aprovisionamiento" > " AP Vida".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar AP Vida", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a AP Vida a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.

---

## Escenario: E5-GF-03
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Asignaciones de Gastos Financieros

### Caso de prueba: E5-GF-03.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Especiales NIIF diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Especiales NIIF a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-GF-03.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Driver Reservas a UoA diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Driver Reservas a UoA".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Driver Reservas a UoA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Driver Reservas a UoA a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.
### Caso de prueba: E5-GF-03.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Distribución UoA Generaels Multiramo diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Distribución UoA Generaels Multiramo".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Distribución UoA Generaels Multiramo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Distribución UoA Generaels Multiramo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. Las cabeceras del archivo no coinciden con las esperadas. Verifique la plantilla.

---

## Escenario: E6-GF-01
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Parametrización de Gastos Financieros sin datos

### Caso de prueba: E6-GF-01.1
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Cuentas Contables del proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura correcta y sin datos
2. usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo "REAL Cuentas Contables GF" definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Cuenta Contable", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Cuentas Contables sin datos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-GF-01.2
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Centros del proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura del archivo y sin datos
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. .

**Datos:**
- Archivo "REAL Centros GF" definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Centros sin datos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-GF-01.3
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Maestro Reservas Producto del proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura del archivo y sin datos
2. usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo "REAL Maestro Producto GF" definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reservas Producto".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Ramo sin datos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E6-GF-02
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Aprovisionamiento de Gastos Financieros sin datos

### Caso de prueba: E6-GF-02.1
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Exactus del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura del archivo y sin datos
2. usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivos "REAL Exactus sin procesar GF" definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus ".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Exactus ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Exactus sin procesar sin datos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-GF-02.2
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Driver Producto del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura del archivo y sin datos
2. usuario registrado tenga el rol de Gestor de Gastos Financieros .

**Datos:**
- Archivo "REAL Drivers Productos GF" definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Drivers Productos sin datos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-GF-02.3
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Drivers Subcanal del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura del archivo y sin datos
2. usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo "REAL Drivers Subcanal GF" definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers Subcanal".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Drivers Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Drivers Subcanal sin datos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-GF-02.4
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Driver CC Vida del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura del archivo y sin datos
2. usuario registrado tenga el rol de Gestor de Gastos Financieros
3. .

**Datos:**
- Archivo "REAL Driver CC Vida GF" definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver CC Vida".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Driver CC Vida", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Driver CC Vida sin datos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-GF-02.5
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Maestro de Negocio y Embebidos del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura del archivo y sin datos
2. usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo ''REAL Maestro de Negocio y Embebidos GF" definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo ''Real Maestro de Embebidos GF'' sin datos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-GF-02.6
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en AMED del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura del archivo y sin datos
2. usuario registrado tenga el rol de Gestor de Gastos Financieros .

**Datos:**
- Archivos "REAL AMED GF" definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar AMED", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo AMED sin datos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-GF-02.7
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en AP VIDA del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura del archivo y sin datos
2. usuario registrado tenga el rol de Gestor de Gastos Financieros .

**Datos:**
- Archivo "REAL AP VIDA GF" definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP VIDA".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar AP VIDA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo AP VIDA sin datos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E6-GF-03
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Asignaciones de Gastos Financieros sin datos

### Caso de prueba: E6-GF-03.1
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Especiales NIIF del proceso de Asignaciones de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura del archivo y sin datos
2. usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- Archivo Asignaciones ''REAL Especiales NIIF GF'' definidos en el proceso de Asignaciones de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Especiales NIIF sin datos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-GF-03.2
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Driver Reservas a UoA del proceso de Asignaciones de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura del archivo y sin datos
2. usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo Asignaciones ''REAL Driver Reservas a UoA GF'' definidos en el proceso de Asignaciones de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Driver Reservas a UoA".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro Producto UoA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Driver Reservas a UoA sin datos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E6-GF-03.3
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Distribución UoA Generales Multiramo del proceso de Asignaciones de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura del archivo y sin datos
2. usuario registrado tenga el rol de Gestor de Gastos Financieros.
3. .

**Datos:**
- Archivo Asignaciones ''REAL Distribución UoA Generales Multiramo GF'' definidos en el proceso de Asignaciones de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Distribución UoA Generales Multiramo".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Distribución UoA Generales Multiramo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Distribución UoA Generales Multiramo sin datos a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E8-GF-01
**Descripcion:** Validar la carga de un archivo con los datos incompletos en Parametrización de Gastos Financieros

### Caso de prueba: E8-GF-01.1
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Cuentas Contables definido en el proceso de Parametrizacion en Gastos Financieros

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. Archivo preparado a partir del archivo para Cuentas Contables definido
2. Usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- 1- Archivo Cuentas Contables definidos en el proceso de Gastos Financieros
- 2- campos obligatorios:
- Código cuenta contable
- Nombre Cuenta Contable
- Código concepto
- Concepto N1
- Concepto N2
- Concepto N3
- Concepto NIIF17
- Metodo De Distribución Vida
- Metodo De Distribución Generales

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos
### Caso de prueba: E8-GF-01.2
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Centros definido en el proceso de Parametrizacion en Gastos Financieros

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. Archivo preparado a partir del archivo para Centros definidos
2. Usuario registrado tenga el rol de Gestor de Gastos Financieros
3. deben estar cargados los archivos de Comunes: Línea, Grupo producto, Canal y Subcanal.

**Datos:**
- 1- Archivo Centros definidos en el proceso de Gastos Financieros
- 2- campos obligatorios:
- Negocio
- Centro de Costo
- Nombre Centro de costo

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Centros ".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos
### Caso de prueba: E8-GF-01.3
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Maestro Reserva Producto definido en el proceso de Parametrizacion en Gastos Financieros

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. Archivo preparado a partir del archivo para Centros definidos
2. Usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- 1- Archivo Maestro Reserva Producto definidos en el proceso de Gastos Financieros
- 2- campos obligatorios:
- Grupo
- Codigo Producto
- Producto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reserva Producto".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar Maestro Reserva Producto", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

## Escenario: E8-GF-02
**Descripcion:** Validar la carga de un archivo con los datos incompletos en Aprovisionamiento de Gastos Financieros

### Caso de prueba: E8-GF-02.1
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Exactus sin procesar definido en el proceso de Aprovisamiento en Gastos Financieros

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. Archivo preparado a partir del archivo para Centros definidos
2. Usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- 1- Archivo Exactus definidos en el proceso de Gastos Financieros
- 2- campos obligatorios:
- Cuenta Contable
- Nombre Cuenta Contable
- Asiento
- Débito Local
- Crédito Local
- Centro Costo
- Tipo de Asiento (tipo de asiento de contabilidad)
- Razón Social
- Partida

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisamiento " > "Exactus".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos
### Caso de prueba: E8-GF-02.2
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Driver Producto definido en el proceso de Aprovisamiento en Gastos Financieros

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. Archivo preparado a partir del archivo para Driver Producto definido
2. Usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- 1- Archivo Driver Producto definidos en el proceso de Gastos Financieros
- 2- campos obligatorios:
- Método de distribución
- Código Linea
- Nombre de Linea
- Código Canal
- Código Producto
- Factor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisamiento " > "Driver Producto".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos
### Caso de prueba: E8-GF-02.3
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Driver Subcanal definido en el proceso de Aprovisamiento en Gastos Financieros

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. Archivo preparado a partir del archivo para Driver Subcanal definido
2. Usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- 1- Archivo Driver Subcanal definidos en el proceso de Gastos Financieros
- 2- campos obligatorios:
- Método
- Código Linea
- Nombre Línea
- Código Canal
- Código Producto
- Código canal destino
- Código Subcanal
- Factor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisamiento " > " Driver Subcanal ".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar Driver Subcanal ", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos
### Caso de prueba: E8-GF-02.4
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Driver CC Vida definido en el proceso de Aprovisamiento en Gastos Financieros

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. Archivo preparado a partir del archivo para Driver CC Vida definido
2. Usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- 1- Archivo Driver CC Vida definidos en el proceso de Gastos Financieros
- 2- campos obligatorios:
- Código Centro Origen
- Código Centro Destino
- Factor
- Método de distribución
- Nombre Centro Destino
- Factor Anterior

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisamiento " > " Driver Subcanal ".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos
### Caso de prueba: E8-GF-02.5
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para AMED definido en el proceso de Aprovisamiento en Gastos Financieros

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. Archivo preparado a partir del archivo para AMED definido
2. Usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- 1- Archivo AMED definidos en el proceso de Gastos Financieros
- 2- campos obligatorios:
- Cuenta Contable
- AUM
- Ingreso Financiero
- Tasa

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisamiento " > "AMED".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar AMED", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos
### Caso de prueba: E8-GF-02.6
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para AP Vida definido en el proceso de Aprovisamiento en Gastos Financieros

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. Archivo preparado a partir del archivo para AP Vida definido
2. Usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- 1- Archivo AP Vida definidos en el proceso de Gastos Financieros
- 2- campos obligatorios:
- Cuenta Contable
- Nombre Cuenta Contable
- Monto
- Centro de Costos

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisamiento " > "AP Vida ".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar AP Vida", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos
### Caso de prueba: E8-GF-02.7
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Maestro de Embebidos y Negocio definido en el proceso de Aprovisamiento en Gastos Financieros

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. Archivo preparado a partir del archivo para Maestro de Embebidos y Negocio
2. definido
3. Usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- 1- Archivo Cuentas Contables definidos en el proceso de Gastos Financieros
- 2- campos obligatorios:
- Negocio
- Producto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisamiento " > " Maestro de Embebidos y Negocio".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar Maestro de Embebidos y Negocio
5. ", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

## Escenario: E8-GF-03
**Descripcion:** Validar la carga de un archivo con los datos incompletos en Asignacion de Gastos Financieros

### Caso de prueba: E8-GF-03.1
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Especiales NIIF definido en el proceso de Aprovisamiento en Gastos Financieros

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. Archivo preparado a partir del archivo para Especiales NIIF definido
2. Usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- 1- Archivo Especiales NIIF definidos en el proceso de Gastos Financieros
- 2- campos obligatorios:
- Codigo Linea
- Porcentaje
- Tipo Distribución

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisamiento " > " Maestro de Embebidos y Negocio".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar Especiales NIIF
5. ", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos
### Caso de prueba: E8-GF-03.2
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Driver UoA - VIDA definido en el proceso de Aprovisamiento en Gastos Financieros

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. Archivo preparado a partir del archivo para Driver UoA - VIDA definido
2. Usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- 1- Archivo Driver UoA - VIDA definidos en el proceso de Gastos Financieros
- 2- campos obligatorios:
- Código Concepto
- Concepto
- Unidad de Cuenta
- Grupo Producto NIIF Distribuido
- Producto NIIF17
- Driver UoA

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisamiento " > " Maestro de Embebidos y Negocio".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar Driver UoA - VIDA
5. ", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos
### Caso de prueba: E8-GF-03.3
- Implementado: No

**Titulo:** Validar la carga del archivo con los datos incompletos para Distribución UoA Generales Multiramo definido en el proceso de Aprovisamiento en Gastos Financieros

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. Archivo preparado a partir del archivo para Distribución UoA Generales Multiramo definido
2. Usuario registrado tenga el rol de Gestor de Gastos Financieros

**Datos:**
- 1- Archivo UoA Generales Multiramo definidos en el proceso de Gastos Financieros
- 2- campos obligatorios:
- Código Producto
- Nombre Producto
- Unidad de Cuenta
- Factor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisamiento " > " Maestro de Embebidos y Negocio".
3. El usuario presiona el botón ''Cargar'',
4. Se levanta el modal con titulo "Cargar UoA Generales Multiramo
5. ", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

## Escenario: E61-GF-01
**Descripcion:** Validar que no se cargue un archivo de más de 30 Mb en la Parametrización de Gastos Financieros

### Caso de prueba: E61-GF-01.1
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Cuentas Contables definido en la parametrización de Gastos Financieros

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Cuentas Contables debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo ''REAL Cuentas Contables GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-GF-01.2
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Centros definido en en la parametrización de Gastos Financieros

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Centros debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo ''REAL Centros GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Centros ".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-GF-01.3
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Maestro Reservas Producto definido en en la parametrización de Gastos Financieros

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Maestro Reservas Producto debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros..

**Datos:**
- Archivo ''REAL Maestro Reservas Producto GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reservas Producto".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Maestro Reservas Producto", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

## Escenario: E61-GF-02
**Descripcion:** Validar que no se cargue un archivo de más de 30 Mb en Aprovisionamiento de Gastos Financieros

### Caso de prueba: E61-GF-02.1
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Exactus sin procesar de Aprovisionamiento definido en el proceso de Gastos Financieros

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Exactus debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo ''REAL Exactus sin procesar GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-GF-02.2
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para AMED de Aprovisionamiento definido en el proceso de Gastos Financieros

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo AMED debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo ''REAL AMED GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar AMED", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-GF-02.3
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para AP VIDA de Aprovisionamiento definido en el proceso de Gastos Financieros

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo AP VIDA debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo ''REAL AP VIDA GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar AP VIDA", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-GF-02.4
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Driver Producto de Aprovisionamiento definido en el proceso de Gastos Financieros

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Driver Producto debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo ''REAL Driver Producto GF' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-GF-02.5
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Driver Subcanal de Aprovisionamiento definido en el proceso de Gastos Financieros

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Driver Subcanal debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo ''REAL Driver Subcanal GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-GF-02.6
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Driver CC Vida de Aprovisionamiento definido en el proceso de Gastos Financieros

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Driver CC Vida debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo ''REAL Driver CC Vida GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver CC Vida".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Driver CC Vida", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-GF-02.7
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Maestro de Negocio y Embebidos de Aprovisionamiento definido en el proceso de Gastos Financieros

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Maestro de Negocio y Embebidos debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo ''REAL Maestro Negocio y Embebidos GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Maestro de Embebidos", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

## Escenario: E61-GF-03
**Descripcion:** Validar que no se cargue un archivo de más de 30 Mb en Asignaciones de Gastos Financieros

### Caso de prueba: E61-GF-03.1
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Especiales NIIF de Asignaciones definido en el proceso de Gastos Financieros

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Especiales NIIF procesado debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo ''REAL Especiales NIIF GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-GF-03.2
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Driver Reservas a UoA de Asignaciones definido en el proceso de Gastos Financieros

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Métodos Producto procesado debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo ''REAL Driver Reservas a UoA GF'' definidos en el proceso de Asignaciones de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones" > "Driver Reservas a UoA".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Maestro Productos UoA", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-GF-03.3
- Implementado: No

**Titulo:** Validar la carga del archivo de más de 30 mb de peso para Distribución UoA Generales Multiramo de Asignaciones definido en el proceso de Gastos Financieros

**Descripcion:** Validar la carga del archivo de más de 30 mb de peso

**Precondiciones:**
1. El archivo Métodos Subcanal procesado debe exceder el tamaño máximo permitido
2. el usuario registrado tenga el rol de Gestor de Gastos Financieros.

**Datos:**
- Archivo ''REAL Distribución UoA Generales Multiramo GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones" > "Distribución UoA Generales Multiramo".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Distribución UoA Generales Multiramo", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

## Escenario: E70-GF-01
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga del archivo en el proceso de Parametrización del flujo de Gastos Financieros

### Caso de prueba: E70-GF-01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Cuentas Contables del la Parametrización del Gastos Técnicos porque no cumple con las reglas del negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas por negocio desde la carga de archivos de Cuentas Contables

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo REAL Cuentas Contables GF debe estar disponible
3. Reglas de negocio y formato para este archivo
4. Todos sus campos son requerido

**Datos:**
- Archivo ''REAL Cuentas Contables GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Cuenta Contable", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Cuentas Contables GF preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.
### Caso de prueba: E70-GF-01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Centros del la Parametrización del Gastos Técnicos porque no cumple con las reglas del negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas por negocio desde la carga de archivos de Centros

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo REAL Centros GF debe estar disponible
3. Reglas de negocio y formato para este archivo
4. Todos sus campos son requerido

**Datos:**
- Archivo ''REAL Centros GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Centros GF preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.
### Caso de prueba: E70-GF-01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Maestro Reservas Producto del la Parametrización del Gastos Técnicos porque no cumple con las reglas del negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas por negocio desde la carga de archivos de Maestro Reservas Producto

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo REAL Maestro Reservas Producto GF debe estar disponible
3. Reglas de negocio y formato para este archivo
4. Todos sus campos son requerido

**Datos:**
- Archivo ''REAL Maestro Reservas Producto GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reservas Producto".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Maestro Reserva Producto GF preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: E70-GF-02
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga del archivo en el proceso de Aprovisionamiento de Gastos Financieros

### Caso de prueba: E70-GF-02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Exactus sin procesar del la Aprovisionamiento del Gastos Técnicos porque no cumple con las reglas del negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas por negocio desde la carga de archivos de Exactus sin procesar

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo Exactus debe estar disponible

**Datos:**
- Archivo ''REAL Exactus sin procesar GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus ".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Exactus ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Exactus GF preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.
### Caso de prueba: E70-GF-02.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en AMED del la Aprovisionamiento del Gastos Técnicos porque no cumple con las reglas del negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas por negocio desde la carga de archivos de AMED

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo REAL AMED GF debe estar disponible
3. Reglas de negocio y formato para este archivo
4. Todos sus campos son requerido

**Datos:**
- Archivo ''REAL AMED GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar AMED", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL AMED GF preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.
### Caso de prueba: E70-GF-02.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en AP VIDA del la Aprovisionamiento del Gastos Técnicos porque no cumple con las reglas del negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas por negocio desde la carga de archivos de AP VIDA

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo REAL AP VIDA GF debe estar disponible.
3. Reglas de negocio y formato para este archivo
4. Todos sus campos son requerido

**Datos:**
- Archivo ''REAL AP VIDA GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP VIDA".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar AP VIDA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL AP VIDA GF preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.
### Caso de prueba: E70-GF-02.4
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Driver Producto del la Aprovisionamiento del Gastos Técnicos porque no cumple con las reglas del negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas por negocio desde la carga de archivos de Driver Producto

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo REAL Driver Producto GF debe estar disponible.
3. Reglas de negocio y formato para este archivo
4. Solo el campos Nombre producto no es requerido
5. Método de distribución.
6. Código Linea
7. Nombre de Linea.
8. Código Canal
9. Código Producto
10. Nombre producto
11. Factor. 10 caracteres nùmericos con decimales. Pueden ser hasta 4 decimales. Acepta valor 0, Acepta enteros sin decimales, Acepta valores negativos, Para todos los factores y montos, se debe utilizar punto para indicar decimales,

**Datos:**
- Archivo ''REAL Driver Producto GF' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Drivers Producto GF preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.
### Caso de prueba: E70-GF-02.5
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Driver Subcanal del la Aprovisionamiento del Gastos Técnicos porque no cumple con las reglas del negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas por negocio desde la carga de archivos de Driver Subcanal

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo REAL Driver Subcanal GF debe estar disponible.
3. Reglas de negocio y formato para este archivo
4. Solo los campos: Descripción del método, Producto, Subcanal y Estado no son requerido
5. Método. Mayúsculas, 15 caracteres. Combinación de números y letras
6. Descripción del método. Mayúsculas, 30 caracteres. permite caracteres especiales como guión, punto, guión bajo, diagonal, coma, paréntesis, comillas dobles, linea vertical, simbolo de porcentaje, dos puntos, signo &
7. Código Linea. Debe existir y estar activo en el catálogo de líneas.
8. Nombre Línea. Debe coincidir con el nombre de la linea
9. Producto. Debe coincidir con el nombre del producto
10. Código canal destino. Debe existir y estar activo en el catálogo de canal
11. Código Subcanal. Debe existir y estar activo en el catálogo de subcanal
12. Subcanal. Debe coincidir con el código del subcanal
13. Factor. 10 caracteres nùmericos con decimales. Pueden ser hasta 4 decimales. Acepta valor 0, Acepta enteros sin decimales, Acepta valores negativos, Para todos los factores y montos, se debe utilizar punto para indicar decimales,
14. Estado. Solo mayúsculas. Solo debe mostrar estos 2 valores (Activo/ inactivo)

**Datos:**
- Archivo ''REAL Driver Subcanal GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers Subcanal".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Drivers Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Drivers Subcanal GF preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.
### Caso de prueba: E70-GF-02.6
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Driver CC Vida del la Aprovisionamiento del Gastos Técnicos porque no cumple con las reglas del negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas por negocio desde la carga de archivos de Driver CC Vida

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo REAL Driver CC Vida GF debe estar disponible.
3. Reglas de negocio y formato para este archivo
4. Todos sus campos son requerido
5. Código Centro Origen. Debe existir en el catálogo de centros. Debe cumplir un formato jerárquico numérico, compuesto por tres bloques de dos dígitos, separados por punto (NN.NN.NN).
6. Código Centro Destino. Debe existir en el catálogo de centros. Debe cumplir un formato jerárquico numérico, compuesto por tres bloques de dos dígitos, separados por punto (NN.NN.NN).
7. Factor. 10 caracteres nùmericos con decimales. Pueden ser hasta 4 decimales. Acepta valor 0, Acepta enteros sin decimales, Acepta valores negativos, Para todos los factores y montos, se debe utilizar punto para indicar decimales,
8. Método de distribución. Máximo 30 caracteres, Solo mayúsculas. Si permite caracteres especiales como guión, punto, guión bajo, diagonal, coma, paréntesis, comillas dobles, linea vertical, simbolo de porcentaje, dos puntos, signo &

**Datos:**
- Archivo ''REAL Driver CC Vida GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver CC Vida".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Driver CC Vida", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Driver CC Vida GF preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.
### Caso de prueba: E70-GF-02.7
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Maestro de Negocio y Embebidos del la Aprovisionamiento del Gastos Técnicos porque no cumple con las reglas del negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas por negocio desde la carga de archivos de Maestro de Negocio y Embebidos

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo REAL Maestro de Negocio y Embebidos GF debe estar disponible.
3. Reglas de negocio y formato para este archivo
4. Negocio y Producto son campos requerido
5. Negocio. Solo debe mostrar estos 2 valores (vida / generales)
6. Línea. Debe existir en el catálogo de líneas, debe estar activa. Debe iniciar con letra y puede contener letras, números y espacios.
7. Producto. Debe existir en el catálogo de productos, debe estar activo. Debe iniciar con letra y puede contener letras, números y espacios.
8. Canal debe existir en el catálogo de canales, debe estar activo. Debe iniciar con letra y puede contener letras, números y espacios.
9. Subcanal debe existir en el catálogo de subcanales, debe estar activo. Debe iniciar con letra y puede contener letras, números y espacios.
10. Embebido. Solo debe mostrar estos 2 valores (embebido / no embebido)
11. Tipo Negocio. Solo se debe mostrar 2 valores (empresa / persona)

**Datos:**
- Archivo ''REAL Maestro Negocio y Embebidos GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo ''Real Maestro de Embebidos GF'' preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: E70-GF-03
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga del archivo en el proceso de Asignaciones de Gastos Financieros

### Caso de prueba: E70-GF-03.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Especiales NIIF del la Asignaciones del Gastos Técnicos porque no cumple con las reglas del negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas por negocio desde la carga de archivos de Especiales NIIF

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo REAL Especiales NIIF GF debe estar disponible.
3. Reglas de negocio y formato para este archivo
4. Código Línea, Porcentaje y Tipo de Distribución son obligatorios.
5. Código Linea. Debe existir y estar activo en el Catálogo de Líneas. Debe contaner de 3–4 letras mayúsculas, opcionalmente seguidas de 4 números. Debe comenzar por una letra. No debe pernitir caracteres especiales. Mayúscula
6. Nombre Línea. Debe iniciar con letra y puede contener letras, números y espacios.
7. Código Producto.Debe existir y estar activo en el Catálogo de Grupo Producto. Debe contener entre 4 y 10 caracteres alfanuméricos. No debe pernitir caracteres especiales. Mayúscula
8. Nombre Producto. Debe iniciar con letra y puede contener letras, números y espacios.
9. Código Canal. Debe existir y estar activo en el Catálogo de Canales. Debe contaner de 3–4 letras mayúsculas, opcionalmente seguidas de 4 números. Debe comenzar por una letra. No debe pernitir caracteres especiales. Mayúscula. Debe contener 3 letras mayúsculas, o use 000.
10. Nombre Canal. Debe iniciar con letra y puede contener letras, números y espacios.
11. CodSubcanal. Debe existir previamente en el Maestro de Subcanales y estar asociado al Canal correspondiente. Debe contener 6 caracteres alfanuméricos. Debe comenzar por una letra. No debe pernitir caracteres especiales. Mayúscula.
12. Nombre Subcanal. Debe existir previamente en el Maestro de Subcanales y estar asociado al Canal correspondiente. Debe iniciar con letra y puede contener letras, números y espacios.
13. Método Valoración. Mayúscula, Tipo Select
14. Porcentaje. El porcentaje debe tener entre 1 y 3 dígitos en la parte entera, un punto decimal y entre 1 y 6 dígitos en la parte decimal
15. Dígito de cuenta. Dos digitos numèricos unicamente, coinciden con los dos primero digitos de las cuentas definidas para GF:46, 47, 56 y 57
16. Tipo Distribución. Define si la base de reparto es el conteo de pólizas o unidades de cuenta de GT
17. NIIF 17 Atribuible. Tipo Selec. Solo admite dos valores (Atribuible o No Atribuible)
18. NIIF 17 Tipo. Tipo Selec. -Mayúscula. Valores permitidos: 'GM' (Gastos de Mantenimiento) o 'GA' (Gastos de Adquisición)
19. Concepto N1. Nivel 1 de la jerarquía de conceptos. Permite Mayusculas y MInusculas. Si permite caracteres especiales como guión, punto, guión bajo, diagonal, coma, paréntesis, comillas dobles, linea vertical, simbolo de porcentaje, dos puntos, signo &. Debe coincidir con la información cargada en Cuentas Contables.
20. Concepto N2. Nivel 2 de la jerarquía de conceptos. Permite Mayusculas y MInusculas. Si permite caracteres especiales como guión, punto, guión bajo, diagonal, coma, paréntesis, comillas dobles, linea vertical, simbolo de porcentaje, dos puntos, signo &. Debe coincidir con la información cargada en Cuentas Contables.
21. Código Concepto. Se permite longitud de 6 dígitos, no debe contener letras. Debe cumplir un formato jerárquico numérico con estructura NN.NN.NN. Cada bloque tiene un rango de entre 00 y 99. Debe coincidir con la información cargada en Cuentas Contables.
22. CECO. Debe conincidir con el maestro de Centros

**Datos:**
- Archivo ''REAL Especiales NIIF GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Especiales NIIF GF preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.
### Caso de prueba: E70-GF-03.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Driver Reservas a UoA del la Asignaciones del Gastos Técnicos porque no cumple con las reglas del negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas por negocio desde la carga de archivos de Driver Reservas a UoA

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo REAL Driver Reservas a UoA GF debe estar disponible.
3. Reglas de negocio y formato para este archivo
4. Todos sus campos son requerido
5. Concepto. Se permite longitud de 6 dígitos, no debe contener letras. Debe cumplir un formato jerárquico numérico con estructura NN.NN.NN. Cada bloque tiene un rango de entre 00 y 99. Debe existir en la información cargada en Cuentas Contables.
6. Unidad de Cuenta. La unidad debe existir en el maestro de unidades de cuenta (UoA). Si permite caracteres especiales como guión, punto, guión bajo, diagonal, coma, paréntesis, comillas dobles, linea vertical, simbolo de porcentaje, dos puntos, signo &
7. Grupo Producto NIIF Distribuido. Si permite caracteres especiales como guión, punto, guión bajo, diagonal, coma, paréntesis, comillas dobles, linea vertical, simbolo de porcentaje, dos puntos, signo &. Mayúsculas.
8. Producto NIIF17. Debe existir en el catálogo de Productos.
9. Driver UoA. 10 caracteres nùmericos con decimales. Pueden ser hasta 4 decimales. Acepta valor 0. Acepta enteros sin decimales. Acepta valores negativos. Acepta porcentuales o solo números. Para todos los factores y montos, se debe utilizar punto para indicar decimales.

**Datos:**
- Archivo ''REAL Driver Reservas a UoA GF'' definidos en el proceso de Asignaciones de Gastos Financieros
- -

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Driver Reservas a UoA".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro Producto UoAGF", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Driver Reservas a UoA GF preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.
### Caso de prueba: E70-GF-03.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Distribución UoA Generales Multiramo del la Asignaciones del Gastos Técnicos porque no cumple con las reglas del negocio y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas por negocio desde la carga de archivos de Distribución UoA Generales Multiramo

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo REAL Distribución UoA Generales Multiramo GF debe estar disponible.
3. Reglas de negocio y formato para este archivo
4. Todos sus campos son requerido
5. El código de producto debe estar en el catálogo de productos
6. El nombre del productor debe corresponder con el código insertado
7. La unidad debe existir en el maestro de unidades de cuenta (UoA). Permite caracteres especiales como guión, punto, guión bajo, diagonal, coma, paréntesis, comillas dobles, linea vertical, simbolo de porcentaje, dos puntos, signo &.
8. Factor: 10 caracteres nùmericos con decimales. Pueden ser hasta 4 decimales. Acepta valor 0. Acepta enteros sin decimales. Acepta valores negativos. Acepta porcentuales o solo números y Para todos los factores y montos, se debe utilizar punto para indicar decimales

**Datos:**
- Archivo ''REAL Distribución UoA Generales Multiramo GF'' preparado para la prueba en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Distribución UoA Generales Multiramo".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Distribución UoA Generales Multiramo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Distribución UoA Generales Multiramo GF preparado para la carga con los casos a validar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo.
1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.
2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: E70-PRE-GF-01
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga del archivo en el proceso de Parametrización de Gastos Financieros para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E70-PRE-GF-02
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga del archivo en el proceso de Aprovisionamiento de Gastos Financieros para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E70-PRE-GF-03
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga del archivo en el proceso de Asignaciones de Gastos Financieros Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E9-GF-01
**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados en el proceso de Parametrización de Gastos Financieros

### Caso de prueba: E9-GF-01.1
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos del archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Cuentas Contables cargado

**Precondiciones:**
1. La carga exitosa del archivo Cuentas Contables ''REAL Cuentas Contables GF'' cargado

**Datos:**
- Archivo Cuentas Contables ''REAL Cuentas Contables GF'' definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-01.2
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos del archivo Centros definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Centros cargado

**Precondiciones:**
1. La carga exitosa del archivo Centros ''REAL Centros GF''

**Datos:**
- Archivo Centros ''REAL Centros GF'' definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-01.3
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos del archivo Maestro Reservas Producto definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Maestro Reservas Producto cargado

**Precondiciones:**
1. La carga exitosa del archivo ''REAL Maestro Reservas Producto GF''

**Datos:**
- Archivo Maestro Reservas ''REAL Maestro Reservas Producto GF'' definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reservas Producto".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Maestro Reservas Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: E9-GF-02
**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados en el proceso de Aprovisionamiento de Gastos Financieros

### Caso de prueba: E9-GF-02.1
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos del archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Exactus cargado

**Precondiciones:**
1. La carga exitosa del archivo Exactus ''REAL Exactus sin procesar GF''

**Datos:**
- Archivo Exactus ''REAL Exactus sin procesar GF'' definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus ".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Exactus ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.2
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos del archivo AMED definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo AMED cargado

**Precondiciones:**
1. La carga exitosa del archivo ''REAL AMED GF''

**Datos:**
- Archivo AMED ''REAL AMED GF'' definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar AMED", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.3
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos del archivo AP VIDA definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo AP VIDA cargado

**Precondiciones:**
1. La carga exitosa del archivo ''REAL AP VIDA GF''

**Datos:**
- Archivo AP VIDA ''REAL AP VIDA GF'' definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP VIDA".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar AP VIDA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.4
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos del archivo Driver Producto definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Driver Producto cargado

**Precondiciones:**
1. La carga exitosa del archivo Driver Producto ''REAL Driver Producto GF''

**Datos:**
- Archivo Driver Producto ''REAL Driver Producto GF'' definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.5
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos del archivo Driver Subcanal definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Driver Subcanal cargado

**Precondiciones:**
1. La carga exitosa del archivo Driver Subcanal ''REAL Driver Subcanal GF''

**Datos:**
- Archivo Driver Subcanal ''REAL Driver Subcanal GF'' definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.6
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos del archivo Driver CC Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Driver CC Vida cargado

**Precondiciones:**
1. La carga exitosa del archivo Driver CC Vida ''REAL Driver CC Vida l GF''

**Datos:**
- Archivo Driver Subcanal ''REAL Driver CC Vida GF'' definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver CC Vida".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Driver CC Vida", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.7
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos del archivo Maestro de Negocio y Embebidos definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Maestro de Embebidos cargado

**Precondiciones:**
1. La carga exitosa del archivo Maestro de Embebidos ''REAL Maestro Embebidos GF''

**Datos:**
- Archivo Maestro de Embebidos ''REAL Maestro Embebidos GF'' definidos en el proceso de Aprovisionamientode Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Embebidos".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Maestro de Embebidos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: E9-GF-03
**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados en el proceso de Asignaciones de Gastos Financieros

### Caso de prueba: E9-GF-03.1
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos del archivo Especiales NIIF definidos en el proceso de Asignaciones de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Especiales NIIF cargado

**Precondiciones:**
1. La carga exitosa del archivo Especiales NIIF ''REAL Especiales NIIF GF''

**Datos:**
- Archivo Especiales NIIF ''REAL Especiales NIIF GF'' definido en el proceso de Asignaciones de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones " > "Especiales NIIF".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Método Especiales NIIF", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-03.2
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos del archivo Driver Reservas a UoA definidos en el proceso de Asignaciones de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Driver Reservas a UoA cargado

**Precondiciones:**
1. La carga exitosa del archivo ''REAL Driver Reservas a UoA GF''

**Datos:**
- Archivo Método Producto ''REAL Driver Reservas a UoA GF'' definido en el proceso de Asignaciones de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones " > "Driver Reservas a UoA".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Driver Reservas a UoA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-03.3
- Implementado: Si

**Titulo:** Validar que se muestren en el FronEnd los datos del archivo Distribución UoA Generales Multiramo definidos en el proceso de Asignaciones de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos del archivo Distribución UoA Generales Multiramo cargado

**Precondiciones:**
1. La carga exitosa del archivo Distribución UoA Generales Multiramo ''REAL Distribución UoA Generales Multiramo GF''

**Datos:**
- Archivo Especiales NIIF ''REAL Distribución UoA Generales Multiramo'' definido en el proceso de Asignaciones de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones " > "Distribución UoA Generales Multiramo".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Distribución UoA Generales Multiramo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos del documento.
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: E9-PRE-GF-01
**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados en el proceso de Parametrización de Gastos Financieros para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E9-PRE-GF-02
**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados en el proceso de Aprovisionamiento de Gastos Financieros para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E9-PRE-GF-03
**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados en el proceso de Asignaciones de Gastos Financieros para el flujo Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E10-GF-01
**Descripcion:** Validar la correcta ejecución del flujo de descarga en Parametrización de Gastos Financieros

### Caso de prueba: E10-GF-01.1
- Implementado: Si

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Cuentas Contables definido en el proceso de Parametrización de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-01.2
- Implementado: Si

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Centros definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Centros definido en el proceso de Parametrización de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Centros ".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-01.3
- Implementado: Si

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Maestro Reservas Producto definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Cuentas Contables definido en el proceso de Parametrización de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > " Maestro Reservas Producto".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E10-GF-02
**Descripcion:** Validar la correcta ejecución del flujo de descarga en Aprovisionamiento de Gastos Financieros

### Caso de prueba: E10-GF-02.1
- Implementado: Si

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Exactus sin procesar definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Exactus sin porcesar definido en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.2
- Implementado: Si

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo AMED definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo AMED definido en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.3
- Implementado: Si

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo AP Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo AP Vida definido en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP Vida".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.4
- Implementado: Si

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Driver Producto definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Driver Producto definido en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.5
- Implementado: Si

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Driver Subcanal definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Driver Subcanal definido en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Subcanal ".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.6
- Implementado: Si

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Driver CC Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Driver CC Vida definido en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver CC Vida".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.7
- Implementado: Si

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Maestro de Negocio y Embebidos definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Maestro de Negocio y Embebidos definido en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E10-GF-03
**Descripcion:** Validar la correcta ejecución del flujo de descarga en Asignaciones de Gastos Financieros

### Caso de prueba: E10-GF-03.1
- Implementado: Si

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Especiales NIIF definidos en el proceso de Asignaciones de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Especiales NIIF definido en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-03.2
- Implementado: Si

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Driver reservas a UoA definidos en el proceso de Asignación de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Driver reservas a UoA definido en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Driver reservas a UoA".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-03.3
- Implementado: Si

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Distribución UoA Generales Multiramo definidos en el proceso de Asignación de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Distribución UoA Generales Multiramo definido en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Distribución UoA Generales Multiramo".
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E11-GF-01
**Descripcion:** Validar que el archivo descargado en Parametrización de Gastos Financieros muestre los datos correctamente y no tenga perdida de información

### Caso de prueba: E11-GF-01.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Cuentas Contables del proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la volumetria en los datos del archivo Cuentas Contables descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Cuentas Contables definido en el proceso de Parametrización de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-01.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Centros del proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar volumetria en los datos del archivo Centros descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Centros definido en el proceso de Parametrización de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Centros ".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-01.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Maestro Reserva Producto del proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos del archivo Maestro Reserva Producto descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Maestro Reserva Producto definido en el proceso de Parametrización de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reserva Producto ".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E11-GF-02
**Descripcion:** Validar que el archivo descargado en Aprovisionamiento de Gastos Financieros muestre los datos correctamente y no tenga perdida de información

### Caso de prueba: E11-GF-02.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Exactus sin procesar del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos del archivo descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Exactus sin porcesar definido en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado AMED del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos del archivo descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo AMED procesado definido en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado AP Vida del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos del archivo descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo AP Vida definido en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP Vida ".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.4
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Driver Producto del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos del archivo descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Driver Producto definido en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.5
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Driver Subcanal del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos del archivo descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Driver Subcanal definido en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.6
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Drivers CC Vida del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos del archivo descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Drivers CC Vida definido en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers CC Vida".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.7
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Maestro de Negocio y Embebidos del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos del archivo descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Maestro de Negocio y Embebidos definido en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E11-GF-03
**Descripcion:** Validar que el archivo descargado en Asignaciones de Gastos Financieros muestre los datos correctamente y no tenga perdida de información

### Caso de prueba: E11-GF-03.1
- Implementado: No

**Titulo:** Validar que muestre los datos correctamente en el archivo descargado Especiales NIIF definidos en el proceso de Asignaciones de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos del archivo descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Especiales NIIF definidos en el proceso de Asignaciones de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-03.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Driver UoA - VIDA definidos en el proceso de Asignaciones de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos del archivo descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Método Subcanal definidos en el proceso de Asignaciones de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones" > "Método Subcanal ".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-03.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asignaciones de distribución UoA Generales Multiramo definidos en el proceso de Asignaciones de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos del archivo descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo distribución UoA Generales Multiramoo definidos en el proceso de Asignaciones de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones" > "distribución UoA Generales Multiramo".
3. El usuario presiona el botón "Descargar".
4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E11-PRE-GF-01
**Descripcion:** Validar que el archivo descargado en Parametrización de Gastos Financieros no tenga pérdida de información para el flujo Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E11-PRE-GF-02
**Descripcion:** Validar que el archivo descargado en Aprovisionamiento de Gastos Financieros no tenga pérdida de información para el flujo Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E11-PRE-GF-03
**Descripcion:** Validar que el archivo descargado en Asignaciones de Gastos Financieros no tenga pérdida de información para el flujo Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E71-GF-01
**Descripcion:** Validación de la carga de los archivos descargados en Parametrización de Gastos Financieros

### Caso de prueba: E71-GF-01.1
- Implementado: No

**Titulo:** Validar la carga del archivo de Cuentas Contables descargado en la parametrización de Gastos Financieros

**Descripcion:** Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo Cuentas Contables debe haberse descargado anteriormente en el flujo de esta pantalla.

**Datos:**
- Archivo ''REAL Cuentas Contables GF'' descargado en el proceso de descarga de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-GF-01.2
- Implementado: No

**Titulo:** Validar la carga del archivo de Centros descargado en la parametrización de Gastos Financieros

**Descripcion:** Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo Centros debe haberse descargado anteriormente en el flujo de esta pantalla.

**Datos:**
- Archivo ''REAL Centros GF'' descargado en el proceso de descarga de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Centros ".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Centros GF ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-GF-01.3
- Implementado: No

**Titulo:** Validar la carga del archivo de Maestro Reservas Producto descargado en la parametrización de Gastos Financieros

**Descripcion:** Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo Maestro Reservas Producto debe haberse descargado anteriormente en el flujo de esta pantalla.

**Datos:**
- Archivo ''REAL Maestro Reservas Producto GF'' descargado en el proceso de descarga de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reservas Producto".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar Maestro Reservas Producto", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Maestro Reservas Producto ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E71-GF-02
**Descripcion:** Validación de la carga de los archivos descargados en Aprovisionamiento de Gastos Financieros

### Caso de prueba: E71-GF-02.1
- Implementado: No

**Titulo:** Validar la carga del archivo de Exactus sin procesar de Aprovisionamiento descargado en el proceso de Gastos Financieros

**Descripcion:** Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo Exactus sin procesar debe haberse descargado anteriormente en el flujo de esta pantalla.
3. Esta prueba se realiza luego de haber realizado el CP E69-GF-EC

**Datos:**
- Archivo ''REAL Exactus sin procesar GF'' descargado en el proceso de descarga de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Exactus ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-GF-02.2
- Implementado: No

**Titulo:** Validar la carga del archivo de AMED de Aprovisionamiento descargado en el proceso de Gastos Financieros

**Descripcion:** Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo AMED debe haberse descargado anteriormente en el flujo de esta pantalla.

**Datos:**
- Archivo ''REAL AMED GF'' descargado en el proceso de descarga de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar AMED", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real AMED ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-GF-02.3
- Implementado: No

**Titulo:** Validar la carga del archivo de AP VIDA de Aprovisionamiento descargado en el proceso de Gastos Financieros

**Descripcion:** Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo AP VIDA debe haberse descargado anteriormente en el flujo de esta pantalla.

**Datos:**
- Archivo ''REAL AP VIDA GF'' descargado en el proceso de descarga de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > " AP VIDA".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar AP VIDA", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real AP Vida ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-GF-02.4
- Implementado: No

**Titulo:** Validar la carga del archivo de Driver Producto de Aprovisionamiento descargado en el proceso de Gastos Financieros

**Descripcion:** Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo AMED debe haberse descargado anteriormente en el flujo de esta pantalla.

**Datos:**
- Archivo ''REAL Driver Producto GF' descargado en el proceso de descarga de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Driver Producto ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-GF-02.5
- Implementado: No

**Titulo:** Validar la carga del archivo de Driver Subcanal de Aprovisionamiento descargado en el proceso de Gastos Financieros

**Descripcion:** Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo Driver Subcanal debe haberse descargado anteriormente en el flujo de esta pantalla.

**Datos:**
- Archivo ''REAL Driver Subcanal GF'' descargado en el proceso de descarga de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar Driver Subcanal", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Driver Subcanal ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-GF-02.6
- Implementado: No

**Titulo:** Validar la carga del archivo de Driver CC Vida de Aprovisionamiento descargado en el proceso de Gastos Financieros

**Descripcion:** Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo Driver CC Vida debe haberse descargado anteriormente en el flujo de esta pantalla.

**Datos:**
- Archivo ''REAL Driver CC Vida GF'' descargado en el proceso de descarga de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver CC Vida".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar Driver CC Vida", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Drivers CC Vida ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-GF-02.7
- Implementado: No

**Titulo:** Validar la carga del archivo de Maestro de Negocio y Embebidos de Aprovisionamiento descargado en el proceso de Gastos Financieros

**Descripcion:** Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo Maestro de Negocio y Embebidos debe haberse descargado anteriormente en el flujo de esta pantalla.

**Datos:**
- Archivo ''REAL Maestro Negocio y Embebidos GF'' descargado en el proceso de descarga de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar Maestro de Embebidos", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Maestro de Negocio Embebidos ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E71-GF-03
**Descripcion:** Validación de la carga de los archivos descargados en Asignaciones de Gastos Financieros

### Caso de prueba: E71-GF-03.1
- Implementado: No

**Titulo:** Validar la carga del archivo de Especiales NIIF de Asignaciones descargado en el proceso de Gastos Financieros

**Descripcion:** Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo Especiales NIIF debe haberse descargado anteriormente en el flujo de esta pantalla.

**Datos:**
- Archivo ''REAL Especiales NIIF GF'' descargado en el proceso de descarga de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar Especiales NIIF", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Rea Especiales NIIF GF' ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-GF-03.2
- Implementado: No

**Titulo:** Validar la carga del archivo de Driver Reservas a UoA de Asignaciones descargado en el proceso de Gastos Financieros

**Descripcion:** Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo Driver Reservas a UoA debe haberse descargado anteriormente en el flujo de esta pantalla.

**Datos:**
- Archivo ''REAL Driver Reservas a UoA GF'' descargado en el proceso de descarga de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones" > "Driver Reservas a UoA".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar Maestro Productos UoA", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Driver UoA - VIDA ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.
### Caso de prueba: E71-GF-03.3
- Implementado: No

**Titulo:** Validar la carga del archivo de Distribución UoA Generales Multiramo de Asignaciones descargado en el proceso de Gastos Financieros

**Descripcion:** Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. el archivo Distribución UoA Generales Multiramo debe haberse descargado anteriormente en el flujo de esta pantalla.

**Datos:**
- Archivo ''REAL Distribución UoA Generales Multiramo GF'' descargado en el proceso de descarga de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones" > "Distribución UoA Generales Multiramo".
3. El usuario presiona el botón ¨Descargar¨,
4. El usuario presiona el botón ¨Cargar¨,
5. Se levanta el modal con titulo "Cargar Distribución UoA Generales Multiramo", el botón aceptar está deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.
El archivo Real Distribución UoA Generaels Multiramo ha sido cargado satisfactoriamente. Con el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E71-PRE-GF-01
**Descripcion:** Validación de la carga de los archivos descargados en el proceso de Parametrización de Gastos Financieros para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E71-PRE-GF-02
**Descripcion:** Validación de la carga de los archivos descargados en el proceso de Aprovisionamiento de Gastos Financieros para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E71-PRE-GF-03
**Descripcion:** Validación de la carga de los archivos descargados en el proceso de Asignaciones de Gastos Financieros para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E35-GF-01
**Descripcion:** Validar que el sistema pueda agregar un nuevo registro en el flujo de Gastos Financieros

### Caso de prueba: E35-GF-01.01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Cuentas Contables definido en la Parametrización del flujo de Gastos Financieros

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Cuenta Contable" de Cuenta Contable

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Los campos Cuenta Contable, Nombre Cuenta Contable, Código Concepto, Concepto N1, Concepto N2, Concepto N3, Concepto Niif17, Método de Distribución VIDA, Método Distribución Generales son obligatorios
4. Los campos Código Ramo, Concepto Niif17, Tipo de Cuenta, Método de Distribución VIDA, Método Distribución Generales, Tipo NIIF17 CBR son select
5. Los valores de código Cuenta Contable debe ser único

**Datos:**
- Campos del formulario [ ]
- Cuenta Contable: [ 57.2.9.09.OO.05]
- Nombre Cuenta Contable: Se autocompleta según el código seleccionado
- Código Ramo: Se debe seleccionar el Ramo correspondiente
- Código Concepto: [30.05.04, 10.01.03]
- Concepto N1: [Egresos Técnicos netos, Ajuste de Reservas]
- Concepto N2: [ Ventas, Investment Link]
- Concepto N3: [Bonos Corredores, Investment Link]
- Concepto Niif17: Se debe seleccionar el Niif correspondiente Ej: [Gastos Generales/Técnicos, Investment Link]
- Tipo de Cuenta: Se debe seleccionar el tipo de cuenta correspondiente
- Método de Distribución VIDA: Se debe seleccionar el metodo Vida correspondiente[Premium], OPETARJETA
- Método Distribución Generales: Se debe seleccionar el metofo General correspondiente [COSTARRENPPS]
- Tipo NIIF17 CBR: Se debe seleccionar el Tipo Noiif correspondiente [vacio, GA, GM, GI, GS]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Cuentas Contables".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora
4- Si el valor de Código Ramo, Tipo de Cuenta o Tipo NIIF17 CBR fue vacio, en el front debe mostrar No presente.
### Caso de prueba: E35-GF-01.01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Centros definido en la Parametrización del flujo de Gastos Financieros

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Centros" de Centros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Los campos Negocio, Centro de Costo, Nombre Centro de costo son obligatorios
4. Todos los códigos de Línea, Producto, Canal y Subcanal deben existir en catálogo.
5. Cuando el Centro es del tipo DIRECTO, debe existir una combinación válida de Línea, Producto, Canal y Subcanal en los catálogos maestros.
6. Cuando el campo TIPO viene vacío, el Centro NO se considera DIRECTO.
7. Los catálogos maestros de Línea, Producto, Canal y Subcanal se encuentran previamente configurados, activos y con sus relaciones jerárquicas definidas (Producto–Línea y Subcanal–Canal).

**Datos:**
- Campos del formulario
- Negocio: Se debe seleccionar el negocio correspondiente [PPS o PVI]
- Centro de Costo: Se debe seleccionar el centro de costos correspondiente
- Nombre Centro de costo: Se autocompleta según el código seleccionado
- Código Linea: Se debe seleccionar la linea correspondiente
- Línea: Se autocompleta según el código seleccionado
- Código Producto: Se debe seleccionar el producto correspondiente
- Producto: Se autocompleta según el código seleccionado
- Código Canal: Se debe seleccionar el canal correspondiente
- Canal: Se autocompleta según el código seleccionado
- Código Subcanal Se debe seleccionar el sucanal correspondiente
- Subcanal: Se autocompleta según el código seleccionado
- Tipo: Se debe seleccionar el tipo correspondiente [DIRECTO, DIRECTOS, INDIRECTO O INDIRECTOS]
- Tipo Emisión: Se debe seleccionar el tipo de emision correspondiente [DIGITAL, TRADICIONAL]
- Tipo Negocio: Se debe seleccionar el tipo de negocio correspondiente [PERSONA, EMPRESA]
- Tipo Producto: Se debe seleccionar el tipo de producto correspondiente [MODULAR, NO MODULAR]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Centros".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora
### Caso de prueba: E35-GF-01.01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Maestro Reservas Producto definido en la Parametrización del flujo de Gastos Financieros

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Maestro Reservas Producto" de Maestro Reservas Producto

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios
4. El códigos de Producto debe existir en el catálogo. Grupo Producto. Debe contener entre 4 y 10 caracteres alfanuméricos
5. Los archivos Grupo Producto y Subcanal de Comunes deben estar cargados.

**Datos:**
- Campos del formulario
- Grupo: [APF AR, VIDA LEY]
- Código producto: Se debe seleccionar el producto correspondiente
- Producto: Se autocompleta según el código de producto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reservas Producto".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Maestro Reservas Producto".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora
### Caso de prueba: E35-GF-01.02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Maestro de Negocio y Embebidos definido en el Aprovisionamiento del flujo de Gastos Financieros

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Maestro de Negocio y Embebidos" de Maestro de Negocio y Embebidos

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Los campos Negocio y Producto son obligatorios
4. Loa archivos Linea, Grupo Producto , Canal y Subcanal deben estar cargados.
5. Se debe validar que los valores de Línea, Producto, Canal y Subcanal existan en sus respectivos catálogos. Además, se debe verificar que el Producto esté asociado a la Línea y que el Subcanal esté asociado al Canal correspondiente.
6. Los campos Embebidos y Tipo de Negocio son excluyentes: si Embebidos tiene valor, Tipo de Negocio debe estar vacío, y viceversa.

**Datos:**
- Campos del formulario
- Negocio: Se debe seleccionar el negocio correspondiente [VIDA, GENERALES]
- Línea: Se debe seleccionar la línea correspondiente
- Producto: Se debe seleccionar el producto correspondiente
- Canal: Se debe seleccionar el canal correspondiente
- Subcanal: Se debe seleccionar el subcanal correspondiente
- Embebido: Se debe seleccionar el embebido correspondiente [EMBEBIDO, NO EMBEBIDO]
- Tipo Negocio: Se debe seleccionar el tipo de negocio correspondiente [EMPRESA, PERSONA]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Maestro de Negocio y Embebidos".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora
### Caso de prueba: E35-GF-01.02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en AMED definido en el Aprovisionamiento del flujo de Gastos Financieros

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar AMED" de AMED

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios
4. El campo Cuentas Contables es select
5. El archivo Cuenta Contable debe estar cargado
6. Los campos Cuenta Contable, AUM, Ingreso Financiero y Tasa deben ser diligenciados obligatoriamente
7. El catálogo de Cuentas Contables debe estar previamente configurado, activo y disponible en el sistema para permitir la selección del campo Cuenta Contable.
8. El campo Cuenta Contable es de tipo selector

**Datos:**
- Campos del formulario
- Cuenta Contable: Se debe seleccionar la cuenta contable correspondiente
- AUM: [0, 100, -10, 25.5, 99.9999, -0.1234]
- Ingreso Financiero: [0, 100, -10, 25.5, 99.9999, -0.1234]
- Tasa: [0, 100, -10, 25.5, 99.9999, -0.1234]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar AMED".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora
### Caso de prueba: E35-GF-01.02.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en AP Vida definido en el Aprovisionamiento del flujo de Gastos Financieros

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar AP Vida" de AP Vida

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Los campos Cuenta Contable, Nombre Cuenta Contable, Monto y Centro de Costo son obligatorios
4. El valor del Dígito de la Cuenta debe ser 46, 47, 56 o 57, que corresponden a las cuentas contables aplicables para Gastos Financieros. En caso contrario, debe mostrar un mensaje de error y no permitir el registro.
5. Los campos Cuenta Contable y Centro de Costos son de tipo selector
6. Los catálogos de Cuentas Contables y Centros de Costos deben estar previamente configurados, activos y disponibles

**Datos:**
- Campos del formulario
- Cuenta Contable: Se debe seleccionar la cuenta contable correspondiente
- Nombre Cuenta Contable: Se autocompleta según el código seleccionado
- Asiento: [ABC123, ASI001, MOV2025]
- Referencia: TEXTO (ej. REF-001/2025)
- Fecha: [01/1/2025, 31/5/2025, 15/12/2024]
- Mes: [1, 01, 12]
- Año: [2024, 2025, 2030]
- Monto: [0, 100, -10, 25.5, 999999.9999, -0.1234]
- Centro de Costos: Se debe seleccionar el centro de costos correspondiente
- Descripción CECO: Se autocompleta según el centro de costos seleccionado
- Compañía: [EMPRESA1, COMPANIA_X, GRUPO2025]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP Vida".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "AP Vida".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora
### Caso de prueba: E35-GF-01.03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Especiales NIIF definido en el Asignaciones del flujo de Gastos Financieros

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Los campos Codigo Linea, Porcentaje, Tipo Distribución son obligatorios.
4. Los campos NIIF17 Atribuible, NIIF17 Tipo son select.
5. Los campos Nombre Linea, Nombre Producto, Nombre Canal y Nombre Subcanal son de tipo autocompletar.
6. Los archivos Grupo Producto y Subcanal de Comunes y Cuenta Contable y Centro de GF deben estar cargados.
7. Se debe validar que los valores de Código Linea, Código Producto, Código Canal y Código Subcanal existan en sus respectivos catálogos maestros.
8. La suma de porcentajes por combinación Producto/Subcanal debe ser 100%.

**Datos:**
- Campos del formulario
- Codigo Linea: Se debe seleccionar la línea correspondiente
- Nombre Linea: Se autocompleta según el código de línea seleccionado
- Codigo Producto: Se debe seleccionar el producto correspondiente
- Nombre Producto: Se autocompleta según el código de producto seleccionado
- Codigo Canal: Se debe seleccionar el canal correspondiente
- Nombre Canal: Se autocompleta según el código de canal seleccionado
- Codsubcanal: Se debe seleccionar el subcanal correspondiente
- Nombre Subcanal: Se autocompleta según el código de subcanal seleccionado
- Método Valoración: [0, 1]
- Porcentaje: [1.0, 22.563, 100, -10]
- Digito de cuenta: [00, 01, 99]
- Tipo Distribución: [POLIZAS, RESERVAS UOA, MULTIRAMO]
- NIIF17 Atribuible: [ATRIBUIBLE, NO ATRIBUIBLE]
- NIIF17 Tipo: [GM, GA]
- Concepto N1: Se debe seleccionar el concepto correspondiente
- Concepto N2: Se debe seleccionar el concepto correspondiente
- Codigo Concepto: Se debe seleccionar el concepto correspondiente
- CECO: Se debe seleccionar el centro de costo correspondiente

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Especiales NIIF.
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora
### Caso de prueba: E35-GF-01.03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Driver UoA - VIDA definido en el Asignaciones del flujo de Gastos Financieros

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Driver UoA - VIDA" de Driver UoA - VIDA

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios
4. El valor de Unidad de Cuenta debe estar registrado en catálogo
5. os campos Código Concepto, Concepto, Unidad de Cuenta, Grupo Producto NIIF Distribuido, Producto NIIF17 y Driver UoA deben ser diligenciados obligatoriamente
6. Los catálogos de Cuentas Contables (para conceptos), Productos y el maestro de Unidades de Cuenta (UoA) deben estar previamente configurados, activos y disponibles en el sistema.

**Datos:**
- Campos del formulario
- Código Concepto: Se debe seleccionar el código de concepto correspondiente
- Concepto: Se autocompleta según el código de concepto seleccionado
- Unidad de Cuenta: Se debe seleccionar el código de la unidad correspondiente
- Grupo Producto NIIF Distribuido: TEXTO EN MAYÚSCULAS (ej. GRUPO_NIIF)
- Producto NIIF17: Se debe seleccionar el producto correspondiente
- Driver UoA: [0, 100, -10, 25.5, 99.9999, -0.1234]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asiganaciones" > "Driver UoA - VIDA".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Driver UoA - VIDA''.
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora
### Caso de prueba: E35-GF-01.03.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Distribución UoA Generales Multiramo definido en el Asignaciones del flujo de Gastos Financieros

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Distribución UoA Generales Multiramo" de Especiales NIIF

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios.
4. Los archivos Grupo Producto de comunes y Maestro Reservas Producto y Maestro uoA de GF deben estar cargados
5. El valor del campo Código Producto y Unidad de Cuenta debe existir y estar registrado en su respectivo catálogo.
6. Los campos Código Producto y Unidad de Cuenta son select.
7. EL valor de Factor debe estar entre 0 y 1

**Datos:**
- Campos del formulario
- Código Producto: Se debe seleccionar el producto correspondiente
- Nombre Producto: Se autocompleta según el código de producto seleccionado
- Unidad de Cuenta: Se debe seleccionar la unidad de cuenta correspondiente
- Factor: [0, 100, -10, 25.5, 99.9999, -0.1234]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asiganaciones" > "Distribución UoA Generales Multiramo".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Distribución UoA Generales Multiramo.
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.
1-se muestra el mensaje de exito ¡Hecho! El registro se agregó sin problemas
2-se agrega correctamente cada dato en la tabla
3-se registra la fecha y la hora

---

## Escenario: E35-PRE-GF-01
**Descripcion:** Validar que el sistema pueda agregar un nuevo registro en el flujo de Gastos Financieros para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E35-GF-02
**Descripcion:** Validar las reglas de negocio al agregar un registro en el flujo de Gasto Financieros

### Caso de prueba: E35-GF-02.01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Cuentas Contables de la Parametrización de Gastos Financieros al validar la regla de duplicidad definidas por negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro ya existente desde el modal "Agregar Cuenta Contable" de Cuentas Contables

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Seleccionar un registro Cuentas Contables de la tabla mostrada en el front.
4. Usar para el nuevo registro la misma cuenta contable ya existente en el sistema o alguna de las Cuentas Contables definida como dato de prueba en el CP E35-GF-01.01.1

**Datos:**
- Campos del formulario
- Juego de Dato 1:
- Los valores para cada campo serán identicos a los mostrado en el registro seleccionado de la tabla Cuentas Contables mostrada en el front
- Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-GF-01.01.1

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > " Cuentas Contables".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Cuentas Contables".
5. El usuario completa todos los campos del formulario con los datos definidos en la sección "Datos de prueba", replicando un registro existente.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-GF-02.01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Centros de la Parametrización de Gastos Financieros al validar la regla de duplicidad definidas por negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Centro" de Centros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Los campos Negocio, Centro de Costo, Nombre Centro de costo son obligatorios
4. Todos los códigos de Línea, Producto, Canal y Subcanal deben existir en catálogo.
5. Cuando el Centro es del tipo DIRECTO, debe existir una combinación válida de Línea, Producto, Canal y Subcanal en los catálogos maestros.
6. Cuando el campo TIPO viene vacío, el Centro NO se considera DIRECTO.
7. Los catálogos maestros de Línea, Producto, Canal y Subcanal se encuentran previamente configurados, activos y con sus relaciones jerárquicas definidas (Producto–Línea y Subcanal–Canal).

**Datos:**
- Campos del formulario
- Juego de Dato 1:
- Los valores para cada campo serán identicos a los mostrado en el registro seleccionado de la tabla Centros mostrada en el front
- Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-GF-01.01.2

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Centros".
5. El usuario completa los campos del formulario con los datos definidos en la sección "Datos de prueba", replicando un registro existente.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-GF-02.01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Maestro Reservas Producto de la Parametrización de Gastos Financieros al validar la regla de duplicidad definidas por negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Maestro Reservas Producto" de Maestro Reservas Producto

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios
4. El códigos de Producto debe existir en el catálogo. Grupo Producto. Debe contener entre 4 y 10 caracteres alfanuméricos
5. Los archivos Grupo Producto y Subcanal de Comunes deben estar cargados.

**Datos:**
- Campos del formulario
- Juego de Dato 1:
- Los valores para cada campo serán identicos a los mostrado en el registro seleccionado de la tabla Centros mostrada en el front
- Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-GF-01.01.3

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reservas Producto".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Maestro Reservas Producto".
5. El usuario completa los campos del formulario con los datos definidos en la sección "Datos de prueba", replicando un registro existente.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-GF-02.02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Maestro de Negocios y Embebidos del Aprovisionamiento de Gastos Financieros porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Maestro de Negocio y Embebidos" de Maestro de Negocio y Embebidos

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios
4. El archivo Cuenta Contable debe estar cargado

**Datos:**
- Campos del formulario
- Negocio: Campo obligatorio. Tipo Selector. Formato texto. Valores permitidos: GENERALES, VIDA. Mayúscula.
- Línea: Campo obligatorio. Tipo Selector. Formato texto. Debe existir en el catálogo maestro de Líneas. Debe iniciar con letra y puede contener letras, números y espacios.
- Producto: Campo obligatorio. Tipo Selector. Formato texto. Debe existir en el catálogo maestro de Producto. Debe iniciar con letra y puede contener letras, números y espacios.
- Canal: Campo opcional. Tipo Selector. Formato texto. Debe existir en el catálogo maestro de Canal. Debe iniciar con letra y puede contener letras, números y espacios.
- Subcanal: Campo opcional. Tipo Selector. Formato texto. Debe existir previamente en el Maestro de Subcanales y estar asociado al Canal correspondiente. Debe iniciar con letra y puede contener letras, números y espacios.
- Embebido: Campo opcional. Tipo Selector. Formato texto. Valores permitidos: Embebido, No embebido.
- Tipo Negocio:Campo opcional. Tipo Selector. Formato texto. Valores permitidos: EMPRESA, PERSONA.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Maestro de Negocio y Embebidos".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-GF-02.02.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en AMED del Aprovisionamiento de Gastos Financieros porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar AMED" de AMED

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios
4. El archivo Cuenta Contable debe estar cargado

**Datos:**
- Toda combinación que no corresponda con:
- Cuentas Contables: Solo números y punto, Ej: 46.12.16.00.01
- AUM: Formato numérico, de hasta 6 cifras con tres decimales,Ej: 455.057
- Ingreso Financiero. Formato numérico, de hasta 4 cifras con un decimal,Ej: 125,7
- Tasa: Formato numérico en porciento, de hasta 4 cifras con dos decimales, Ej:13.98, 1.09, 0.65, 1234.98

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar AMED".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-GF-02.02.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en AP VIDA del Aprovisionamiento de Gastos Financieros porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar AP VIDA" de AP VIDA

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios
4. El archivo Cuenta Contable debe estar cargado

**Datos:**
- Toda combinación que no corresponda con:
- Cuenta Contable: Ej: 46.12.16.00.01, solo números y punto
- Nombre Cuenta Contable: Formato texto
- Asiento: Formato alfanumérico. Ej: MG500001
- Referencia: Formato texto. Ej:INGRESOS FINANIEROS AP GENERALES
- Fecha: Formato fecha DDMMAAAA
- Mes: Formato numerico, entero del 1 al 12
- Año: Formato numerico, entero del AAAA
- Monto: Formato numerico decimal, puede ser positivo o negativo
- Centro de Costo: Solo números y punto Ej: 30.05.01
- Descripción CECO: Formato texto Ej: AP BCP RED COMERCIAL
- Compañia: CREDICOR

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP VIDA".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar AP VIDA".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-GF-02.03.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Especiales NIIF de la Asignaciones de Gastos Financieros porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Los campos Codigo Linea, Porcentaje, Tipo Distribución son obligatorios.
4. Los campos NIIF17 Atribuible, NIIF17 Tipo son select.
5. Los campos Nombre Linea, Nombre Producto, Nombre Canal y Nombre Subcanal son de tipo autocompletar.
6. Los archivos Grupo Producto y Subcanal de Comunes y Cuenta Contable y Centro de GF deben estar cargados.
7. Se debe validar que los valores de Código Linea, Código Producto, Código Canal y Código Subcanal existan en sus respectivos catálogos maestros.
8. La suma de porcentajes por combinación Producto/Subcanal debe ser 100%. El porcentaje debe tener entre 1 y 3 dígitos en la parte entera, un punto decimal y entre 1 y 6 dígitos en la parte decimal.

**Datos:**
- Toda combinación que no corresponda con:
- Codigo Linea: Campo obligatorio. Filtrable. Tipo Selector. Formato alfanumérico. Debe existir y estar activo en el Catálogo de Líneas. Debe contener de 3–4 letras mayúsculas, opcionalmente seguidas de 4 números. Debe comenzar por una letra (Ej.: ABC1234). No debe permitir caracteres especiales. Mayúscula.
- Nombre Linea: Campo opcional. Tipo Autocompletar. No Editable. Formato texto. Se autocompleta según el código de Línea. Debe iniciar con letra y puede contener letras, números y espacios.
- Codigo Producto: Campo opcional. Filtrable. Tipo Selector. Formato alfanumérico. Debe existir y estar activo en el Catálogo de Grupo Producto. Debe contener entre 4 y 10 caracteres alfanuméricos (Ej.: ABCD1234). No debe permitir caracteres especiales. Mayúscula.
- Nombre Producto: Campo opcional. Tipo Autocompletar. No Editable. Formato texto. Se autocompleta según el código de producto. Mayúscula. Debe iniciar con letra y puede contener letras, números y espacios.
- Codigo Canal: Campo opcional. Filtrable. Tipo Selector. Formato texto XXX. Debe existir y estar activo en el Catálogo de Canales. Debe contener de 3–4 letras mayúsculas, opcionalmente seguidas de 4 números. Debe comenzar por una letra (Ej.: ABC1234). No debe permitir caracteres especiales. Mayúscula. Debe contener 3 letras mayúsculas, o usar 000.
- Nombre Canal: Campo opcional. Tipo Autocompletar. No Editable. Se autocompleta según el código de Canal. Mayúscula. Debe iniciar con letra y puede contener letras, números y espacios.
- Codsubcanal. Campo opcional. Filtrable. Tipo Selector. Formato alfanumérico. Debe contener 6 caracteres alfanuméricos. Debe comenzar por una letra (Ej.: ABC123). No debe permitir caracteres especiales. Mayúscula.
- Nombre Subcanal: Campo opcional. Tipo Autocompletar. No Editable. Debe existir previamente en el Maestro de Subcanales y estar asociado al Canal correspondiente. Debe iniciar con letra y puede contener letras, números y espacios.
- Metodo Valoracion: Campo opcional. Filtrable. Tipo Selector. Valores permitidos: PAA, BBA, VFA y BBA/VFA.
- Porcentaje: Campo obligatorio. Tipo Input. Formato decimal. La suma de porcentajes por combinación Producto/Subcanal debe ser 100%. El porcentaje debe tener entre 1 y 3 dígitos en la parte entera, un punto decimal y entre 1 y 6 dígitos en la parte decimal (ej. 22.563).
- Digito de cuenta: Campo opcional. Primeros 2 dígitos de la cuenta contable. Si es null, se usa '-' para aplicar a todas las cuentas del producto.
- Tipo Distribución: Campo obligatorio. Tipo Selector. Valores permitidos: Pólizas, UoA. Define si la base de reparto es el conteo de pólizas o unidades de cuenta de GF.
- NIIF17 Atribuible Campo opcional. Tipo Selector. Valores permitidos: Atribuible, No Atribuible.
- NIIF17 Tipo: Campo opcional. Tipo Selector. Mayúscula. Valores permitidos: GM (Gastos de Mantenimiento) o GA (Gastos de Adquisición).
- Concepto N1: Campo opcional. Tipo Input. Formato texto. Nivel 1 de la jerarquía de conceptos (ej. Ingresos Financieros). Permite mayúsculas y minúsculas.
- Concepto N2: Campo opcional. Tipo Input. Formato texto. Nivel 2 de la jerarquía de conceptos. Permite mayúsculas y minúsculas.
- Código Concepto: Campo opcional. Tipo Selector. Formato numérico y puntos NN.NN.NN. Debe coincidir con el CONCEPTO en las cuentas contables.
- CECO: Campo opcional. Tipo Selector. Formato numérico y puntos NN.NN.NN. Debe coincidir con el maestro de Centros.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Especiales NIIF".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-GF-02.03.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Driver UoA - VIDA de la Asignaciones de Gastos Financieros porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Driver UoA - VIDA" de Driver UoA - VIDA

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios
4. El valor del campo Unidad de Cuenta debe existir y estar registrados en su catálogos.

**Datos:**
- Toda combinación que no corresponda con:
- Código Concepto: Solo números y punto. Ej: 30.05.01
- Concepto: Formato texto, Ej: Investment Link
- Unidad de Cuenta: Cadena letras, guión bajo y números Ej: IFRS_GRP_2021_PREMIUM BBA_PEN_GM_Gross_Prof
- Grupo - Producto NIIF Distribuido: Formato texto, Ej: PREMIUM BBA | VFA | PU
- Producto NIIF: Formato texto, Ej: PREMIUM BBA
- Driver UoA: Formato numérico, decimal, puede ser positivo o negativo Ej: 0,06316124963053 y -0,0000957843105233285

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Driver UoA - VIDA".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Driver UoA - VIDA".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente
### Caso de prueba: E35-GF-02.03.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Distribución UoA Generales Multiramo de la Asignaciones de Gastos Financieros porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Distribución UoA Generales Multiramo" de Método Producto

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios.
4. Los archivos Grupo Producto de comunes y Maestro Reservas Producto y Maestro uoA de GF deben estar cargados
5. El valor del campo Código Producto y Unidad de Cuenta debe existir y estar registrado en su respectivo catálogo.
6. Los campos Código Producto y Unidad de Cuenta son select.
7. EL valor de Factor debe estar entre 0 y 1

**Datos:**
- Toda combinación que no corresponda con:
- Codigo Producto: Formato alfanumérico. Debe contener entre 4 y 10 caracteres alfanuméricos (Ej.: ABCD1234).
- Nombre Producto: Se autocompleta según el código de producto.
- Unidad de Cuenta: Cadena letras, guión bajo y números Ej: IFRS_GRP_2021_UNIQUE INCENDIO_PEN_PAA_Gross_Prof
- Factor: Formato numerico decimal, puede ser positivo o negativo Ej: 94.3700

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Distribución UoA Generales Multiramo".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Distribución UoA Generales Multiramo".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.
1- se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la información o edita el registro existente

---

## Escenario: E35-PRE-GF-02
**Descripcion:** Validar las reglas de negocio al agregar un registro en el flujo de Gasto Financieros para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E35-GF-03
**Descripcion:** Validar el formato y campos obligatorios del formulario en un nuevo registro en el flujo de Gasto Financieros

### Caso de prueba: E35-GF-03.01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de Cuentas Contables de los campos en el flujo de Gasto Financieros

**Descripcion:** Verificar que el sistema bloquee el guardado y muestre los mensajes de error correspondientes cuando los campos obligatorios están vacíos o el formato es incorrecto en el modal "Agregar Cuentas Contables"

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.

**Datos:**
- Campos del formulario [ ]
- Cuenta Contable: No cumple: [vacio, 46,12,03,00,00, 56.1.4.O, 56.1.4.OO.OO.05.11.14.NN,
- 60.1.4.OO.OO.05]
- Nombre Cuenta Contable: No cumle [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]
- Código Ramo: Es un select y acepta vacio.
- Código Concepto: No cumle: [vacio, SS.05.04, 30.05.04.12]
- Concepto N1: No cumle [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]
- Concepto N2: No cumle [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]
- Concepto N3: No cumle [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]
- Concepto Niif17: No cumle [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]
- Tipo de Cuenta: Es un select y acepta vacio.
- Método de Distribución VIDA: No cumle [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]
- Método Distribución Generales: No cumle [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]
- Tipo NIIF17 CBR: Es un select y acepta vacio

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > " Cuentas Contables".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Cuentas Contables".
5. El usuario completa los campos.

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
-Cuenta Contable: El código debe tener entre 6 y 14 dígitos (según plan contable)
-Nombre Cuentas Contable: Formato inválido. Solo se permiten letras, números y los caracteres: . , _ ( ) /
-Código Ramo: El Código Ramo debe ser un valor numérico de 1 o 2 dígitos o el valor especial 'SIN RAMO'
### Caso de prueba: E35-GF-03-01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos de Centros en el flujo de Gastos Financieross

**Descripcion:** Verificar que el sistema bloquee el guardado y muestre los mensajes de error correspondientes cuando los campos obligatorios están vacíos o el formato es incorrecto en el modal "Agregar Centros"

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros
2. La distribución está en estado creada.

**Datos:**
- Campos del formulario
- Negocio: Campo Select. Valores permitidos: [PPS o PVI.
- Centro de Costo: Campo Select. No cumple [vacio; 07,99,31; DD.99.31; 07.99; 07.99.31.44
- Nombre Centro de costo: Se autocompleta según el código de Costo.
- Código línea: Campo Selector.
- Nombre Línea: Se autocompleta según el código de Línea.
- Código producto. Campo Selector.
- Nombre producto: Se autocompleta según el código de producto.
- Código canal: Campo Selector.
- Nombre canal: Se autocompleta según el código de Canal.
- Código subcanal: Campo Selector.
- Nombre subcanal: Se autocompleta según el código del Subcanal..
- Tipo: Campo Select, Valores permitidos: [DIRECTO, DIRECTOS, INDIRECTO O INDIRECTOS]
- Tipo Emisión: Campo Select, Valores permitidos: [vacio, DIGITAL, TRADICIONAL].
- Tipo Negocio: Selector, Valores permitidos: [vacio, PERSONA, EMPRESA]
- Tipo Producto: Selector, Valores permitidos: [vacio, MODULAR, NO MODULAR]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Centros".
5. El usuario completa los campos.

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
### Caso de prueba: E35-GF-03.02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos de AMED en el flujo de Gastos Financieros

**Descripcion:** Verificar que el sistema bloquee el guardado y muestre los mensajes de error correspondientes cuando los campos obligatorios están vacíos o el formato es incorrecto en el modal "Agregar AMED"

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios
4. El archivo Cuenta Contable debe estar cargado

**Datos:**
- Campos del formulario
- Cuentas Contables: Solo números y punto, Ej: 46.12.16.00.01
- AUM: Formato numérico, de hasta 6 cifras con tres decimales,Ej: 455.057
- Ingreso Financiero. Formato numérico, de hasta 4 cifras con un decimal,Ej: 125,7
- Tasa: Formato numérico en porciento, de hasta 4 cifras con dos decimales, Ej:13.98, 1.09, 0.65, 1234.98

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar AMED".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
- Cuenta Contable: Cuenta Contable es requerido
- AUM: AUM es requerido
- Ingreso Financiero: Ingreso Financiero es requerido
- Tasa: Tasa es requerido
### Caso de prueba: E35-GF-03.02.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos de AP VIDA en el flujo de Gastos Financieros

**Descripcion:** Verificar que el sistema bloquee el guardado y muestre los mensajes de error correspondientes cuando los campos obligatorios están vacíos o el formato es incorrecto en el modal "Agregar AP VIDA"

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Los campos Cuenta Contable, Nombre Cuenta Contable, Monto y Centro de Costo son obligatorios
4. El valor del Dígito de la Cuenta debe ser 46, 47, 56 o 57, que corresponden a las cuentas contables aplicables para Gastos Financieros. En caso contrario, debe mostrar un mensaje de error y no permitir el registro.
5. El campo Cuentas Contables es select
6. Los archivos Cuenta Contable y Centro de GF deben estar cargados

**Datos:**
- Toda combinación que no corresponda con:
- Cuenta Contable: Ej: 46.12.16.00.01, solo números y punto
- Nombre Cuenta Contable: Formato texto
- Asiento: Formato alfanumérico. Ej: MG500001
- Referencia: Formato texto. Ej:INGRESOS FINANIEROS AP GENERALES
- Fecha: Formato fecha DDMMAAAA
- Mes: Formato numerico, entero del 1 al 12
- Año: Formato numerico, entero del AAAA
- Monto: Formato numerico decimal, puede ser positivo o negativo
- Centro de Costo: Solo números y punto Ej: 30.05.01
- Descripción CECO: Formato texto Ej: AP BCP RED COMERCIAL
- Compañia: CREDICOR

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP VIDA".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar AP VIDA".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
- Cuenta Contable: Cuenta Contable es requerido
- Nombre Cuenta Contable: Nombre Cuenta Contable es requerido
- Monto: Monto es requerido
- Centro de Costos: Centro de Costos es requerido
### Caso de prueba: E35-GF-03-02.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos de Maestro de Negocios y Embebidos en el flujo de Gastos Financieros

**Descripcion:** Verificar que el sistema bloquee el guardado y muestre los mensajes de error correspondientes cuando los campos obligatorios están vacíos o el formato es incorrecto en el modal "Agregar Maestro de Negocios y Embebidos"

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Los campos Negocio, Linea, Producto son obligatorios
4. Se debe validar que los valores de Línea, Producto, Canal y Subcanal existan en sus respectivos catálogos maestros. Además, se debe verificar que el Producto esté asociado a la Línea y que el Subcanal esté asociado al Canal correspondiente.
5. Los campos Embebidos y Tipo de Negocio son excluyentes: si Embebidos tiene valor, Tipo de Negocio debe estar vacío, y viceversa.

**Datos:**
- Toda combinación que no corresponda con:
- Negocio: Campo obligatorio. Tipo Selector. Formato texto. Valores permitidos: GENERALES, VIDA. Mayúscula.
- Línea: Campo obligatorio. Tipo Selector. Formato texto. Debe existir en el catálogo maestro de Líneas. Debe iniciar con letra y puede contener letras, números y espacios.
- Producto: Campo obligatorio. Tipo Selector. Formato texto. Debe existir en el catálogo maestro de Producto. Debe iniciar con letra y puede contener letras, números y espacios.
- Canal: Campo opcional. Tipo Selector. Formato texto. Debe existir en el catálogo maestro de Canal. Debe iniciar con letra y puede contener letras, números y espacios.
- Subcanal: Campo opcional. Tipo Selector. Formato texto. Debe existir previamente en el Maestro de Subcanales y estar asociado al Canal correspondiente. Debe iniciar con letra y puede contener letras, números y espacios.
- Embebido: Campo opcional. Tipo Selector. Formato texto. Valores permitidos: Embebido, No embebido.
- Tipo Negocio:Campo opcional. Tipo Selector. Formato texto. Valores permitidos: EMPRESA, PERSONA.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Maestro de Negocio y Embebidos".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
-Todos los campos son select, deben mostrar la data y permitir seleccionar cada opción
### Caso de prueba: E35-GF-03-03.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos de Especiales NIIF en el flujo de Gastos Financieros

**Descripcion:** Verificar que el sistema bloquee el guardado y muestre los mensajes de error correspondientes cuando los campos obligatorios están vacíos o el formato es incorrecto en el modal "Agregar Especiales NIIF"

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Los campos son obligatorios
4. Deben existir datos válidos y activos en los catálogos de Líneas, Productos, Canales, Subcanales, Conceptos y Centros de Costo

**Datos:**
- Toda combinación que no corresponda con:
- Codigo Linea: Campo obligatorio. Filtrable. Tipo Selector. Formato alfanumérico. Debe existir y estar activo en el Catálogo de Líneas. Debe contener de 3–4 letras mayúsculas, opcionalmente seguidas de 4 números. Debe comenzar por una letra (Ej.: ABC1234). No debe permitir caracteres especiales. Mayúscula.
- Nombre Linea: Campo opcional. Tipo Autocompletar. No Editable. Formato texto. Se autocompleta según el código de Línea. Debe iniciar con letra y puede contener letras, números y espacios.
- Codigo Producto: Campo opcional. Filtrable. Tipo Selector. Formato alfanumérico. Debe existir y estar activo en el Catálogo de Grupo Producto. Debe contener entre 4 y 10 caracteres alfanuméricos (Ej.: ABCD1234). No debe permitir caracteres especiales. Mayúscula.
- Nombre Producto: Campo obligatorio. Tipo Autocompletar. No Editable. Formato texto. Se autocompleta según el código de producto. Mayúscula. Debe iniciar con letra y puede contener letras, números y espacios.
- Codigo Canal: Campo opcional. Filtrable. Tipo Selector. Formato texto XXX. Debe existir y estar activo en el Catálogo de Canales. Debe contener de 3–4 letras mayúsculas, opcionalmente seguidas de 4 números. Debe comenzar por una letra (Ej.: ABC1234). No debe permitir caracteres especiales. Mayúscula. Debe contener 3 letras mayúsculas, o usar 000.
- Nombre Canal: Campo opcional. Tipo Autocompletar. No Editable. Se autocompleta según el código de Canal. Mayúscula. Debe iniciar con letra y puede contener letras, números y espacios.
- Codsubcanal. Campo opcional. Filtrable. Tipo Selector. Formato alfanumérico. Debe contener 6 caracteres alfanuméricos. Debe comenzar por una letra (Ej.: ABC123). No debe permitir caracteres especiales. Mayúscula.
- Nombre Subcanal: Campo opcional. Tipo Autocompletar. No Editable. Debe existir previamente en el Maestro de Subcanales y estar asociado al Canal correspondiente. Debe iniciar con letra y puede contener letras, números y espacios.
- Metodo Valoracion: Campo opcional. Filtrable. Tipo Selector. Valores permitidos: PAA, BBA/VFA. Mayúscula.
- Porcentaje: Campo obligatorio. Tipo Input. Formato decimal. La suma de porcentajes por combinación Producto/Subcanal debe ser 100%. El porcentaje debe tener entre 1 y 3 dígitos en la parte entera, un punto decimal y entre 1 y 6 dígitos en la parte decimal (ej. 22.563).
- Digito de cuenta: Campo opcional. Primeros 2 dígitos de la cuenta contable. Si es null, se usa '-' para aplicar a todas las cuentas del producto.
- Tipo Distribución: Campo obligatorio. Tipo Selector. Valores permitidos: Pólizas, UoA. Define si la base de reparto es el conteo de pólizas o unidades de cuenta de GF.
- NIIF17 Atribuible Campo opcional. Tipo Selector. Valores permitidos: Atribuible, No Atribuible.
- NIIF17 Tipo: Campo opcional. Tipo Selector. Mayúscula. Valores permitidos: GM (Gastos de Mantenimiento) o GA (Gastos de Adquisición).
- Concepto N1: Campo opcional. Tipo Input. Formato texto. Nivel 1 de la jerarquía de conceptos (ej. Ingresos Financieros). Permite mayúsculas y minúsculas.
- Concepto N2: Campo opcional. Tipo Input. Formato texto. Nivel 2 de la jerarquía de conceptos. Permite mayúsculas y minúsculas.
- Código Concepto: Campo opcional. Tipo Selector. Formato numérico y puntos NN.NN.NN. Debe coincidir con el CONCEPTO en las cuentas contables.
- CECO: Campo opcional. Tipo Selector. Formato numérico y puntos NN.NN.NN. Debe coincidir con el maestro de Centros.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Especiales NIIF".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
- Porcentaje: ''El Porcentaje es obligatorio'' / ''Ingrese un porcentaje válido con hasta 3 dígitos en la parte entera y hasta 6 en la parte decimal, separado por punto (Ej.: 22.563)''.
- Concepto N2: Formato esperado: Solo letras mayúsculas, minúsculas y espacios
### Caso de prueba: E35-GF-03-03.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos de Driver UoA - VIDA en el flujo de Gastos Financieros

**Descripcion:** Verificar que el sistema bloquee el guardado y muestre los mensajes de error correspondientes cuando los campos obligatorios están vacíos o el formato es incorrecto en el modal "Agregar Driver UoA - VIDA"

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios
4. El valor del campo Unidad de Cuenta debe existir y estar registrados en su catálogos.

**Datos:**
- Toda combinación que no corresponda con:
- Código Concepto: Solo números y punto. Ej: 30.05.01
- Concepto: Formato texto, Ej: Investment Link
- Unidad de Cuenta: Cadena letras, guión bajo y números Ej: IFRS_GRP_2021_PREMIUM BBA_PEN_GM_Gross_Prof
- Grupo - Producto NIIF Distribuido: Formato texto, Ej: PREMIUM BBA | VFA | PU
- Producto NIIF: Formato texto, Ej: PREMIUM BBA
- Driver UoA: Formato numérico, decimal, puede ser positivo o negativo Ej: 0,06316124963053 y -0,0000957843105233285

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Driver UoA - VIDA".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Driver UoA - VIDA".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
Código Concepto: Código Concepto es requerido
Concepto: Concepto es requerido
Unidad de Cuenta: Unidad de Cuentaes requerida
Grupo Producto NIIF Distribuido: Grupo Producto NIIF Distribuido es requerido
Producto NIIF17: Producto NIIF17 es requerido
Driver UoA: Driver UoA es requerido
### Caso de prueba: E35-GF-03-03.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos de Distribución UoA Generales Multiramo en el flujo de Gastos Financieros

**Descripcion:** Verificar que el sistema bloquee el guardado y muestre los mensajes de error correspondientes cuando los campos obligatorios están vacíos o el formato es incorrecto en el modal "Agregar Distribución UoA Generales Multiramo"

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios.
4. Los archivos Grupo Producto de comunes y Maestro Reservas Producto y Maestro uoA de GF deben estar cargados
5. El valor del campo Código Producto y Unidad de Cuenta debe existir y estar registrado en su respectivo catálogo.
6. Los campos Código Producto y Unidad de Cuenta son select.
7. EL valor de Factor debe estar entre 0 y 1

**Datos:**
- Toda combinación que no corresponda con:
- Codigo Producto: Formato alfanumérico. Debe contener entre 4 y 10 caracteres alfanuméricos (Ej.: ABCD1234).
- Nombre Producto: Se autocompleta según el código de producto.
- Unidad de Cuenta: Cadena letras, guión bajo y números Ej: IFRS_GRP_2021_UNIQUE INCENDIO_PEN_PAA_Gross_Prof
- Factor: Formato numerico decimal, puede ser positivo o negativo Ej: 94.3700

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Distribución UoA Generales Multiramo".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Distribución UoA Generales Multiramo".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
Código Producto: Código Producto es requerido
Nombre Producto: Nombre Producto es requerido
Unidad de Cuenta : Unidad de Cuenta es requerida
Factor: Factor es requerido

---

## Escenario: E35-GF-04
**Descripcion:** Validar que el sistema sobreescriba datos manuales mediante la carga de archivo en el flujo de Gastos Financieros

### Caso de prueba: E35-GF-04-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de gastos financieros de Cuentas Contables

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Cuentas Contables definido

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Cuentas Contables GF'' definido en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > " Cuentas contables".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Cuenta Contable".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar Cuenta Contable ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-GF-04-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de gastos financieros de Centros

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Centros definido

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. Debe existir previamente un registro de creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Centros GF'' definido en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > " Centros".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Centro".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-GF-04-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de gastos financieros de Maestro Reservas Producto

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Maestro Reservas Producto

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Maestro Reservas Producto GF'' definido en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > " Maestro Reservas Producto".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Maestro Reservas Producto".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar Maestro Reservas Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-GF-04-02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de gastos financieros de AMED

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo AMED

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL AMED GF'' definido en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > " AMED".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar AMED".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar AMED", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-GF-04-02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de gastos financieros de AP VIDA

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo AP Vida

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL AP Vida GF'' definido en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > " AP Vida".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar AP Vida".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar AP Vida", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-GF-04-02.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de gastos financieros de Maestro de Negocios y Embebidos

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Maestro de Negocios y Embebidos definido

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Maestro Negocio y Embebidos GF'' definido en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > " Maestro de Negocios y Embebidos".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Maestro de Embebidos".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar Maestro de Embebidos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-GF-04-03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de gastos financieros de Especiales NIIF

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Especiales NIIF definido

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Especiales NIIF GF'' definido en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > " Especiales NIIF ".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Especiales NIIF".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar Especiales NIIF", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-GF-04-03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de gastos financieros de Driver Reservas a UoA

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Driver Reservas a UoA definido

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Driver Reservas a UoA GF'' definido en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Driver Reservas a UoA".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Driver Reservas a UoA".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar Driver Reservas a UoA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.
### Caso de prueba: E35-GF-04-03.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el flujo de gastos financieros de Distribución UoA Generales Multiramo

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Distribución UoA Generales Multiramo definido

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL DistribuciónUoA Generales Multiramo GF'' definido en el proceso de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "DistribuciónUoA Generales Multiramo".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar DistribuciónUoA Generales Multiramo".
5. El usuario completa los campos.
6. El usuario presiona el botón Agregar".
7. Visualiza la información del registro agregado en el front.
8. El usuario presiona el botón "Cargar".
9. Se levanta el modal con titulo "Cargar DistribuciónUoA Generales Multiramo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2- La información del archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

## Escenario: E35-PRE-GF-04
**Descripcion:** Validar que el sistema sobreescriba datos manuales mediante la carga de archivo en el flujo de Gastos Financieros para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E36-GF-01
**Descripcion:** Validar que el sistema pueda editar un nuevo registro en el flujo de Gastos Financieros

### Caso de prueba: E36-GF-01-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Cuentas Contables en Parametrización en el flujo Gastos Financieros

**Descripcion:** Validar que se pueda editar un registro desde el modal "Editar Cuentas Contables" de Cuentas Contables

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. El registro a editar debe visualizarse en el listado de Cuentas Contables del Front
3. El valor del campo Cuenta Contable:se mostrará pero no es editable.
4. El código Ramo debe existir y estar creado en el Catálogo de Ramo

**Datos:**
- Datos para los campos editables del formulario
- Nombre Cuenta Contable: [BONOS DE AGENTES,
- DIVIDENDO LOCAL NGL IL]
- Código Ramo: [61, SIN RAMO, Vacio]
- Código Concepto: [30.05.04, 10.01.03]
- Concepto N1: [Egresos Técnicos netos, Ajuste de Reservas]
- Concepto N2: [ Ventas, Investment Link]
- Concepto N3: [Bonos Corredores, Investment Link]
- Concepto Niif17: [Gastos Generales/Técnicos, Investment Link]
- Tipo de Cuenta: [Vacio, IF, GG]
- Método de Distribución VIDA: [Premium, OPETARJETA]
- Método Distribución Generales: [COSTARRENPPS]
- Tipo NIIF17 CBR: [vacio, GA, GM, GI, GS]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Técnicos.
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Cuentas Contables".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-Se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora
4- Si el valor de Código Ramo, Tipo de Cuenta o Tipo NIIF17 CBR fue vacio, en el front debe mostrar No presente.
### Caso de prueba: E36-GF-01-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Centros en Parametrización en el flujo Gastos Financieros

**Descripcion:** Validar que se pueda editar un registro desde el modal "Editar Centros" de Centros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. El registro a editar debe visualizarse en el listado de Centros del Front
3. El valor del campo Negocio se mostrará pero no es editable.
4. Los campos Negocio, Centro de Costo, Nombre Centro de costo son obligatorios
5. Todos los códigos de Línea, Producto, Canal y Subcanal deben existir en catálogo.
6. Cuando el Centro es del tipo DIRECTO, debe existir una combinación válida de Línea, Producto, Canal y Subcanal en los catálogos maestros.
7. Cuando el campo TIPO viene vacío, el Centro NO se considera DIRECTO.
8. Los catálogos maestros de Línea, Producto, Canal y Subcanal se encuentran previamente configurados, activos y con sus relaciones jerárquicas definidas (Producto–Línea y Subcanal–Canal).

**Datos:**
- Datos para los campos editables del formulario
- Centro de Costo: [07.99.31, 08.99.69]
- Nombre Centro de costo: Se autocompleta: [RENTA ASESORES RV, AFP PRIMA]
- Código Linea: [ RVIT, AFP]
- Línea: Se autocompleta según el código de Línea [ RENTAS, AFP]
- Código Producto: [RVIT001, AFP002]
- Producto: Se autocompleta según el código de Producto [RENTAS VITALICIAS, AFP NUEVO]
- Código Canal: [DFV, AFP]
- Canal: Se autocompleta según el código de Canal [CANALES DIRECTOS, AFP]
- Código Subcanal: [DFV006, AFP002]
- Subcanal: Se autocompleta según el código de Subcanal [FFVV RENTAS, AFP NUEVO]
- Tipo: Valores permitidos: [DIRECTO, DIRECTOS, INDIRECTO O INDIRECTOS]
- Tipo Emisión: Valores permitidos: [DIGITAL, TRADICIONAL]
- Tipo Negocio: Valores permitidos: [PERSONA, EMPRESA]
- Tipo Producto: Valores permitidos: [MODULAR, NO MODULAR]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Técnicos.
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Centros".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1- Se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-Se actualiza correctamente cada dato en la tabla
3- Se actualiza la fecha y la hora
4- Si en el campo Código Línea, Código Producto, Código Canal y Código Subcanal no se agrega valor debe decir "No presente", al agregar el registro
### Caso de prueba: E36-GF-01-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Maestro Reservas Producto en Parametrización en el flujo Gastos Financieros

**Descripcion:** Validar que se pueda editar un registro desde el modal "Editar Maestro Reservas Producto" de Maestro Reservas Producto

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. El registro a editar debe visualizarse en el listado de Maestro Reservas Producto
3. El valor de los campos Grupo y Código de Producto se mostrará pero no es editable.

**Datos:**
- Datos para los campos editables del formulario
- Grupo: Visible pero no editable
- Código de Producto: Visible pero no editable
- Producto: Obligatorio: Se autocompleta segun el código de producto.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Técnicos.
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Reservas Producto".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Maestro Reservas Producto".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-Se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora
### Caso de prueba: E36-GF-01-02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de AMED en Aprovisionamiento en el flujo Gastos Financieros

**Descripcion:** Validar que se pueda editar un registro desde el modal "Editar AMED " de AMED

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. El registro a editar debe visualizarse en el listado de AMED
3. Todos los campos son editables.
4. Para todos los factores y montos, se debe utilizar punto para indicar decimales
5. El valor del AUM, Ingreso Financiero y Tasa puede tener 10 caracteres nùmericos con decimales, pueden ser hasta 4 decimales, Acepta valor 0, Acepta enteros sin decimales y Acepta valores negativos.
6. El valor de la tasa se presenta en formato porcentaje.

**Datos:**
- Datos para los campos editables del formulario
- Cuenta Contable: [46.1.7.40.09.10, 47.2.3.01.02.03, 56.1.4.OO.OO.05, 57.1.0.10.20.30]
- AUM: [0, 100, -10, 25.5, 99.9999, -0.1234]
- Ingreso Financiero: [0, 100, -10, 25.5, 99.9999, -0.1234]
- Tasa: [0, 100, -10, 25.5, 99.9999, -0.1234]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED ".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar AMED ".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-se actualiza correctamente cada dato en la tabla
3-se actualiza la fecha y la hora
### Caso de prueba: E36-GF-01-02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de AP Vida en Aprovisionamiento en el flujo Gastos Financieros

**Descripcion:** Validar que se pueda editar un registro desde el modal "Editar Agregar/Editar AP Vida " de AP Vida

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. El registro a editar debe visualizarse en el listado de AP Vida
3. Todos los campos son editables.
4. Los campos Cuenta Contable, Nombre Cuenta Contable, Monto y Centro de Costo son obligatorios
5. El valor del Dígito de la Cuenta debe ser 46, 47, 56 o 57, correspondiente a las cuentas contables para Gastos Financieros. En caso contrario, debe mostrar un mensaje de error y no permitir el registro.
6. Los campos Cuenta Contable y Centro de Costos son de tipo selector
7. Los catálogos de Cuentas Contables y Centros de Costos deben estar previamente configurados, activos y disponibles
8. El valor de Referencia: Es una cadena de TEXTO. Permite caracteres especiales como guión, punto, guión bajo, diagonal, coma, paréntesis, comillas dobles, linea vertical, simbolo de porcentaje, dos puntos, signo &
9. El formato del campo fecha tiene la estructura DD/M/AAAA (por ejemplo: 31/5/2025)
10. El valor del campo mes. Acepta 1 o 2 digitos. Corresponde al mes indicado en el campo Fecha
11. El valor del campo mes. Acepta 4 digitos. Corresponde al año indicado en el campo Fecha
12. El valor del monto puede tener 10 caracteres nùmericos con decimales, pueden ser hasta 4 decimales, Acepta valor 0, Acepta enteros sin decimales y Acepta valores negativos.
13. El centro de costo debe estar registrado en el catálogo de centros de costos. Debe cumplir un formato jerárquico numérico, compuesto por tres bloques de dos dígitos, separados por punto (NN.NN.NN).
14. Compañia: Solo mayúsculas y hasta 30 caracteres

**Datos:**
- Datos para los campos editables del formulario
- Cuenta Contable: Campo Select [46.1.7.40.09.10, 47.2.3.01.02.03, 56.1.4.OO.OO.05, 57.1.0.10.20.30]
- Nombre Cuenta Contable: Se autocompleta según el código seleccionado. Valor Alfanumérico]
- Asiento: [ABC123, ASI001, MOV2025]
- Referencia: [INGRESOS FINANIEROS AP GENERALES REF-001/2025]
- Fecha: [01/1/2025, 31/5/2025, 15/12/2024]
- Mes: [1, 01, 12]
- Año: [2024, 2025, 2030]
- Monto: [0, 100, -10, 25.5, 999999.9999, -0.1234]
- Centro de Costos: Campo Select
- Descripción CECO: Se autocompleta según el centro de costos seleccionado
- Compañía: [EMPRESA1, COMPANIA_X, GRUPO2025]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP Vida".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar AP Vida".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-se actualiza correctamente cada dato en la tabla
3-se actualiza la fecha y la hora
### Caso de prueba: E36-GF-01-02.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Maestro de Negocio Embebidos en Aprovisionamiento en el flujo Gastos Financieros

**Descripcion:** Validar que se pueda editar un registro desde el modal "Editar Maestro de Embebidos " de Maestro de Negocio Embebidos

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. El registro a editar debe visualizarse en el listado de Maestro de Negocio Embebidos
3. Todos los campos son editables y select.
4. Los campos Negocio y Producto son obligatorios
5. Los catálogos de Línea, producto, Canal y Subcanal deben estar previamente configurados, activos y disponibles
6. Los valores de Línea, producto, Canal y Subcanal deben estar registrados en sus respectivos catálogos

**Datos:**
- Datos para los campos editables del formulario
- Negocio: Campo Select [VIDA o GENERALES]
- Linea: Campo Select
- Producto: Campo Select
- Canal: Campo Select
- Subcanal: Campo Select
- Embebido: Campo Select [Embebido o No Embebido]
- Tipo Negocio: Campo Select [EMPRESA, PERSONA]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Maestro de Negocio Embebidos".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Maestro de Embebidos".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-se actualiza correctamente cada dato en la tabla
3-se actualiza la fecha y la hora
### Caso de prueba: E36-GF-01-03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Especiales NIIF en Asignacion en el flujo Gastos Financieros

**Descripcion:** Validar que se pueda editar un registro desde el modal " Editar Especiales NIIF " de Especiales NIIF

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. El registro a editar debe visualizarse en el listado de Especiales NIIF
3. Deben existir datos válidos y activos en los catálogos de Líneas, Productos, Canales, Subcanales, Conceptos y Centros de Costo
4. Los valores de Línea, producto, Canal y Subcanal deben estar registrados en sus respectivos catálogos
5. Los campos Código de Línea, Porcentaje y Tipo Distribución son obligatorios
6. Todos los campos son editables, exceptuando Línea, Producto, Canal y Subcanal no son editables porque se autocompletan al seleccionar su código correspondiente
7. El porcentaje debe tener entre 1 y 3 dígitos en la parte entera, un punto decimal y entre 1 y 6 dígitos en la parte decimal
8. El valor de Digcuenta debe ser dos digitos numèricos unicamente, entre el 0 y 9
9. El tipo de distribución define si la base de reparto es el conteo de pólizas o unidades de cuenta de GT
10. Los valores Concepto N1 y Concepto N2, aceptan Nivel 1 y 2 de la jerarquía de conceptos. Permite Mayusculas y MInusculas. Caracteres especiales como guión, punto, guión bajo, diagonal, coma, paréntesis, comillas dobles, linea vertical, simbolo de porcentaje, dos puntos, signo &. Debe coincidir con la información cargada en Cuentas Contables
11. Se permite longitud de 6 dígitos, no debe contener letras. Debe cumplir un formato jerárquico numérico con estructura NN.NN.NN. Cada bloque tiene un rango de entre 00 y 99, Debe coincidir con la información cargada en Cuentas Contables
12. Debe conincidir con el maestro de Centros

**Datos:**
- Datos para los campos editables del formulario
- Código Línea: Campo Select [ RVIT, AFP]
- Nombre Línea: Se autocompleta según el código seleccionado.
- Código Producto: Campo Select [ RVIT, AFP]
- Nombre Producto: Se autocompleta según el código seleccionado.
- Código Canal: Campo Select [DFV, AFP]
- Nombre Canal: Se autocompleta según el código seleccionado.
- Código Subcanal: Campo Select [DFV006, AFP002]
- Nombre Subcanal: Se autocompleta según el código seleccionado.
- Método de Valoración: Campo Select: [0 (PAA) o 1 (BBA/VFA)]
- Porcentaje: [22.563, 413.77789, 1.46]
- Dígito de cuenta: [46, 47, 56, 57]
- Tipo Distribución: [POLIZAS, RESERVAS UOA, MULTIRAMO]
- NIIF17 Atribuible: ['Atribuible' o 'No Atribuible']
- NIIF 17 Tipo: ['GM' (Gastos de Mantenimiento) o 'GA' (Gastos de Adquisición)]
- Concepto N1: Se debe seleccionar el concepto N1 (Ej. Ingresos Financieros).
- Concepto N2: Se debe seleccionar el concepto N2
- Código Concepto: se debe seleccionar el codigo concepto [07.99.31, 08.99.69]
- CECO: Se debe seleccionar el CECO [06.99.80, 02.99.44]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > " Especiales NIIF".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Especiales NIIF ".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-se actualiza correctamente cada dato en la tabla
3-se actualiza la fecha y la hora
### Caso de prueba: E36-GF-01-03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Driver Reservas a UoA en Asignacion en el flujo Gastos Financieros

**Descripcion:** Validar que se pueda editar un registro desde el modal "Editar Driver Reservas a UoA " de Driver Reservas a UoA

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. El registro a editar debe visualizarse en el listado de Driver Reservas a UoA

**Datos:**
- Datos para los campos editables del formulario
- Código Concepto: se debe seleccionar el codigo concepto [07.99.31, 08.99.69
- Concepto: Se autocompleta segun el codigo concepto
- Unidad de Cuenta: Se seleccionar la Unidad de cuenta correspondiente [ IFRS_GRP_2021_UNIQUE INCENDIO_PEN_PAA_Gross_Prof, IFRS_GRP_2021_UNIQUE MULTISEGUROS_PEN_PAA_Gross_Prof]
- Grupo - Producto NIIF Distribuido: [PREMIUM BBA | VFA | PU]
- Producto NIIF: Se seleccionar el Producto NIIF Correspondiente
- Driver UoA: 6,25%

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Driver Reservas a UoA".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Driver Reservas a UoA".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-se actualiza correctamente cada dato en la tabla
3-se actualiza la fecha y la hora
### Caso de prueba: E36-GF-01-03.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Distribución UoA Generales Multiramo en Asignacion en el flujo Gastos Financieros

**Descripcion:** Validar que se pueda editar un registro desde el modal "Editar Distribución UoA Generales Multiramo" de Distribución UoA Generales Multiramo

**Precondiciones:**
1. El registro de Driver Reservas a UoA debe haber sido creado anteriormente.
2. El usuario debe tener rol de Gestor de Gastos Financieros
3. Todos sus campos son obligatorios y editables.
4. Los valores de Producto y Unidad de Cuenta deben estar registrados en sus catálogos.
5. La unidad permite caracteres especiales como guión, punto, guión bajo, diagonal, coma, paréntesis, comillas dobles, linea vertical, simbolo de porcentaje, dos puntos, signo &
6. El valor fel factor puede tener 10 caracteres nùmericos con decimales, Pueden ser hasta 4 decimales, Acepta valor 0, enteros sin decimales, valores negativos, porcentuales o solo numeros. Para todos los factores se debe utilizar punto para indicar decimales

**Datos:**
- Datos para los campos editables del formulario
- Código Producto: Campo Select [ RVIT, AFP]
- Nombre Producto: Se autocompleta según el código seleccionado.
- Unidad de Cuenta: Se seleccionar la Unidad de cuenta correspondiente [ IFRS_GRP_2021_UNIQUE INCENDIO_PEN_PAA_Gross_Prof, IFRS_GRP_2021_UNIQUE MULTISEGUROS_PEN_PAA_Gross_Prof]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > " Especiales NIIF".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Especiales NIIF ".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-se actualiza correctamente cada dato en la tabla
3-se actualiza la fecha y la hora

---

## Escenario: E36-GF-03
**Descripcion:** Validar el formato y campos obligatorios del formulario al editar un registro en el flujo de Gasto Financieros

### Caso de prueba: E36-GF-03-01.2
- Implementado: No

**Titulo:** Validar que se no pueda editar un nuevo registro de Centros por error de formato de los campos en Parametrización en el flujo de Gastos Financieros

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Centros de Centros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Debe existir un registo correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Los campos Centro de Costo, Nombre Centro de costo, Nombre Línea, Nombre producto, Nombre canal, Nombre subcanal, Tipo son obligatorios
- Centro de Costo: Editable [vacio, SS.05.04, 30.05.04.12]
- Nombre CECO: Editable [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Centros".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
### Caso de prueba: E36-GF-03-02.1
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de AMED por error de formato de los campos en aprovisionamiento el flujo de Gastos Financieros

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar AMED" de AMED

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Debe existir al menos un registro previamente creado de AMED.
3. Se deben eliminar espacios en blanco al inicio y al final tanto del código
4. Para todos los factores y montos, se debe utilizar punto para indicar decimales

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- AUM: Editable, Campo obligatorio, 10 caracteres nùmericos con decimales,Pueden ser hasta 4 decimales, Acepta valor 0,enteros y negativos
- Ingreso Financiero: Editable, Campo obligatorio, 10 caracteres nùmericos con decimales,Pueden ser hasta 4 decimales, Acepta valor 0,enteros y negativos [vacio]
- Tasa:Campo obligatorio.Editable, Campo obligatorio, Pueden ser hasta 4 decimales, Acepta valor 0,enteros y negativos [vacio]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar AMED".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
### Caso de prueba: E36-GF-03-02.2
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de AP VIDA por error de formato de los campos en el flujo de Gastos Financieros

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar AP VIDA" de AP Vida

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Debe existir al menos un registro previamente creado de AP Vida.

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Cuenta Contable: Editable, Campo obligatorio. [vacio,NN.NN.NN.NN.NN.NN, ]
- Asiento:Campo opcional. Editable , [nnnnnnnnnnnnnnnnnn]
- Referencia:Campo opcional Editable, Alfanumérico, permite caracteres especiales como: - . _ / , ( ) " | % : &_
- Fecha:Campo opcional Editable.Tipo Fecha. DD/M/AAAA
- Mes:Campo opcional. Editable [ NN, 1234]
- Año:Campo opcional. Editable, [ NN, 12, 12345]
- Monto:Campo obligatorio. Editable,[ NNNNN]
- Compañía:Campo opcional Editable. [nnnn]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP Vida".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar AP Vida".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
La cuenta debe tener el formato XX.X.XX.XX.XX, donde cada X es un dígito. Ejemplo válido: 12.4.56.78.90
### Caso de prueba: E36-GF-03-03.1
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Especiales NIIF en Asignacion en el flujo Gastos Financieros

**Descripcion:** Validar que no se puede editar un registro desde desde el modal " Editar Especiales NIIF " de Especiales NIIF

**Precondiciones:**
1. El registro de Especiales NIIF debe haber sido creado anteriormente.
2. El usuario debe tener rol de Gestor de Gastos Financieros .
3. Deben existir datos válidos y activos en los catálogos de Líneas, Productos, Canales, Subcanales, Conceptos y Centros de Costo
4. El registro a editar debe visualizarse en el listado del Maestro deEspeciales NIIF

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Método de Valoración: Campo obligatorio. Editable.[ 3, paa]
- Porcentaje: Campo obligatorio. Editable. [1234]
- Dígito de cuenta: Campo obligatorio. Editable. [123, NN]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > " Especiales NIIF".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Especiales NIIF ".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
### Caso de prueba: E36-GF-03-03.2
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Driver Reservas a UoA en Asignacion en el flujo Gastos Financieros

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Driver Reservas a UoA " de Driver Reservas a UoA

**Precondiciones:**
1. El registro de Driver Reservas a UoA debe haber sido creado anteriormente.
2. El usuario debe tener rol de Gestor de Gastos Financieros

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Grupo - Producto NIIF Distribuido: Campo obligatorio. Editable [vacio].
- Driver UoA: Campo obligatorio. Editable. [vacio, NNN]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > " Driver Reservas a UoA ".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal " Driver Reservas a UoA ".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
### Caso de prueba: E36-GF-03-03.3
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Distribución UoA Generales Multiramo en Asignacion en el flujo Gastos Financieros

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Distribución UoA Generales Multiramo" de Distribución UoA Generales Multiramo

**Precondiciones:**
1. El registro de Distribución UoA Generales Multiramo debe haber sido creado anteriormente.
2. El usuario debe tener rol de Gestor de Gastos Financieros

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Factor: Campo obligatorio. Editable. [vacio, 5, -10, 34,343, L2 1%]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > " Distribución UoA Generales Multiramo".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Distribución UoA Generales Multiramo ".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
### Caso de prueba: E36-GF-03-03.1
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Especiales NIIF por error de formato de los campos en el flujo de Gastos Financieros

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Los campos son obligatorios
3. Deben existir datos válidos y activos en los catálogos de Líneas, Productos, Canales, Subcanales, Conceptos y Centros de Costo

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Metodo Valoracion: Campo opcional. . Editable. [3, paa]
- Porcentaje: Campo obligatorio. Editable. [vacio]
- Digito de cuenta: Campo opcional. Editable. [222]
- Concepto N1: Campo opcional. Editable. [123]
- Concepto N2: Campo opcional. Tipo Input. Editable. [123]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > " Especiales NIIF".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Especiales NIIF".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.
### Caso de prueba: E36-GF-03-03.2
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Driver UoA Vida por error de formato de los campos en el flujo de Gastos Financieros

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Driver UoA Vida" de Driver UoA Vida

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Debe existir al menos un registro previamente creado de Driver UoA Vida

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Grupo Producto NIIF Distribuido:Campo obligatorio. Editable [vacio]
- Driver UoA:Campo obligatorio Editable [vacio]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Driver UoA Vida".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Driver UoA Vida".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.
### Caso de prueba: E36-GF-03-03.3
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Distribución UoA Generales Multiramo por error de formato de los campos en el flujo de Gastos Financieros

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Distribución UoA Generales Multiramo" de Distribución UoA Generales Multiramo

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Debe existir al menos un registro previamente creado de Distribución UoA Generales Multiramo

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Factor:Campo obligatorio. Editable [vacio, 5, -10, 34,343, L2 1%]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Distribución UoA Generales Multiramo".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Distribución UoA Generales Multiramo".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.

---

## Escenario: E36-PRE-GF-01
**Descripcion:** Validar que el sistema pueda editar un nuevo registro en el flujo de Gastos Financieros para Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E36-PRE-GF-03
**Descripcion:** Validar el formato y campos obligatorios del formulario al editar un registro en el flujo de Gasto Financieros para presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E37-GF-01
**Descripcion:** Validar que solo el rol de administrador de gastos pueda eliminar un registro en el flujo de Gastos Financieros

### Caso de prueba: E37-GF-01.01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Cuentas Contables en el flujo de Gastos Financieros

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Cuentas Contables

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una cuenta si existen movimientos asociados a un Exactus, Unidad de Cuenta GF o Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > " Cuentas Contables".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-GF-01.01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Centros en el flujo de Gastos Financieros

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Centros

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar un centro si existen movimientos asociados a un Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > " Centros".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-GF-01.01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Maestro Reservas Producto en el flujo de Gastos Financieros

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Maestro Reservas Producto

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si existen movimientos asociados a un Maestro Reservas Producto

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > " Maestro Reservas Producto".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-GF-01.02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Driver Producto en el flujo de Gastos Financieros

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Driver Producto

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si existen movimientos asociados a un Maestro Reservas Producto

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-GF-01.02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Drive Subcanal en el flujo de Gastos Financieros

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Drive Subcanal

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drive Subcanal".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-GF-01.02.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Drive CC Vida en el flujo de Gastos Financieros

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Drive CC Vida

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drive CC Vida".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-GF-01.02.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de AMED en el flujo de Gastos Financieros

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de AMED

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED ".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-GF-01.02.5
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de AP Vida en el flujo de Gastos Financieros

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de AP Vida

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP Vida".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-GF-01.02.6
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Maestro de Negocios y Embebidos en el flujo de Gastos Financieros

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Maestro de Negocios y Embebidos

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > " Maestro de Negocios y Embebidos".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-GF-01.03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Especiales NIIF en el flujo de Gastos Financieros

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Especiales NIIF

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asiganaciones" > " Especiales NIIFl".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-GF-01.03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Driver UoA - VIDA en el flujo de Gastos Financieros

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Driver UoA - VIDA

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asiganaciones" > " Driver UoA - VIDA".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-GF-01.03.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Driver UoA Generales Multiramo en el flujo de Gastos Financieros

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Driver UoA Generales Multiramo

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asiganaciones" > " Driver UoA Generales Multiramo".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: ¿Está seguro que desea eliminar este registro?.
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.

---

## Escenario: E37-GF-02
**Descripcion:** Validar restricciones al eliminar un registro en el Gastos Financieros

### Caso de prueba: E37-GF-02.01.1
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas de negocio definidas en el flujo de Gastos Financieros para Cuentas Contables

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Cuentas Contables

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una cuenta si existen movimientos asociados a un Exactus, Unidad de Cuenta GF o Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > " Cuentas Contables".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-GF-02.01.2
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas de negocio definidas en el flujo de Gastos Financieros para Centros

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Centros

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar un centro si existen movimientos asociados a un Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > " Centros".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-GF-02.01.3
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas de negocio definidas en el flujo de Gastos Financieros para Maestro Reservas Producto

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Maestro Reservas Producto

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si existen movimientos asociados a un Maestro Reservas Producto

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > " Maestro Reservas Producto".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-GF-02.02.1
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas de negocio definidas en el flujo de Gastos Financieros para Driver Producto

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el flujo de Gastos Financieros de Driver Producto

**Precondiciones:**
1. Validar que no se puede eliminar un registro desde el menú de acciones en el flujo de Gastos Financieros de Driver Producto

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-GF-02.02.2
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas de negocio definidas en el flujo de Gastos Financieros para Drive Subcanal

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el flujo de Gastos Financieros de Drive Subcanal

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drive Subcanal".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-GF-02.02.3
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas de negocio definidas en el flujo de Gastos Financieros para Drive CC Vida

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el flujo de Gastos Financieros de Drive CC Vida

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drive CC Vida".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-GF-02.02.4
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas de negocio definidas en el flujo de Gastos Financieros para AMED

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el flujo de Gastos Financieros de AMED

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AMED ".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-GF-02.02.5
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas de negocio definidas en el flujo de Gastos Financieros para AP Vida

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el flujo de Gastos Financieros de AP Vida

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP Vida".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-GF-02.02.6
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas de negocio definidas en el flujo de Gastos Financieros para Maestro de Negocios y Embebidos

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el flujo de Gastos Financieros de Maestro de Negocios y Embebidos

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > " Maestro de Negocios y Embebidos".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-GF-02.03.1
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas definidas de negocio en el flujo de Gastos Financieros de Especiales NIIF

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el flujo de Gastos Financieros de Especiales NIIF

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asiganaciones" > " Especiales NIIF".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-GF-02.03.2
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas definidas de negocio en el flujo de Gastos Financieros de Driver UoA - VIDA

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Driver UoA - VIDA

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asiganaciones" > " Driver UoA - VIDA".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-GF-02.03.3
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un registro porque no cumplen con las reglas definidas de negocio en el flujo de Gastos Financieros de Driver UoA Generales Multiramo

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el flujo de Gatos Financieros de Driver UoA Generales Multiramo

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos
2. El registro debe haber sido creado correctamente
3. El registro no puede estar siendo usado.
4. No permite eliminar una registro si tiene datos asociados

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asiganaciones" > " Driver UoA Generales Multiramo".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: E37-PRE-GF-02
**Descripcion:** Validar las reglas de negocio al eliminar un registro en el Gastos Financieros Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E56-GF-PAG
**Descripcion:** Validar el funcionamiento integral del paginador en el flujo de Gastos Financieros

### Caso de prueba: E56-GF-PAG
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de los elementos del paginador en el flujo de Gastos Financieros

**Descripcion:** Validar que los elementos del paginador funcionen correctamente en el flujo de Gastos Financieros

**Precondiciones:**
1. Si la vista selecionada de flujo de Gastos Financieros tiene data cargada.
2. Al acceder inicialmente, esté sombreada la página 1 y bloquaedos los botones ''página anterior'' y ''primera página''
3. Tenga selecionada una opción por defecto (5) en el selector de filas por vista.
4. Si no hay data cargada, todos los elementos del paginador deben estar bloqueado.

**Datos:**
- Data para definida para parametrizacion, aprovicionamiento, y asignaciones de el flujo de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario accede a los botones del paginador de la vista en la que se encuentra.
3. Seleciona la opción de filas a mostrar por vista.
4. El usuario accede a los botones

**Resultado esperado:**
El sistema pagina correctamente
1- El selector de filas por vista da la opción de selecionar.
2- Las filas mostradas en el front corresponden con la opción mostrada de 5, 10 o 20.
3- Se muestre la cantidad de páginas con respecto a la cantidad de elementos a mostrar.
4- al encontrarse en la primera página, los botones de ''página anterior'' y ''primera página'' deben estár bloqueados.
5- al encontrarse en la última página los botones de ''siguiente página'' y ''última página'' deben estár bloqueados.

---

## Escenario: E60-GF
**Descripcion:** Validar el funcionamiento del botón 'Ver'' más columnas en el flujo de Gastos Financieros

### Caso de prueba: E60-GF-01.1.1
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del botón Ver en la pantalla Cuentas Contables del flujo de Parametrización de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Cuentas Contables definido para el motor.
3. las columnas por defecto siempre se mostrarán

**Datos:**
- Columna definidas Por defecto.
- Código cuenta contable
- Nombre Cuenta Contable
- Código concepto
- Concepto N1
- Concepto N2
- Concepto N3
- Concepto NIIF17
- Metodo De Distribución Vida
- Metodo De Distribución Generales
- Columna definidas opcionales.
- Código ramo
- Tipo de cuenta
- Tipo NIIF17 CBR

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-GF-01.1.2
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del botón Ver en la pantalla Centros del flujo de Parametrización de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Centros definido para el motor.
3. las columnas por defecto siempre se mostrarán.

**Datos:**
- Columna definidas Por defecto.
- Negocio
- Centro de Costo
- Nombre Centro de costo
- Columna definidas opcionales.
- Código línea
- Nombre Línea
- Código Producto
- Nombre producto
- Código canal
- Nombre canal
- Código subcanal
- Nombre subcanal
- Tipo
- Estatus del Centro de Costo
- Tipo emisión
- Tipo negocio
- Tipo producto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-GF-01.2.1
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del botón Ver en la pantalla Exactus Sin Procesar del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Cuentas Contables definido para el motor.
3. las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- Cuenta Contable
- Nombre Cuentas Contables
- Asiento
- Débito Local
- Crédito Local
- Centro Costo
- Tipo De Asiento (Contalidad)
- Razón Social
- Partida
- Columna definidas opcionales.
- Tipo De Documento
- Documento
- Referencia
- Débito Dólar
- Crédito Dólar
- Descripción Centro Costo
- Fecha
- NIT
- Fuente
- Notas
- Flujo Efectivo
- Partida
- Patrimonio Neto
- Broker
- Canal Alt.
- Cliente
- Segmento
- Poliza
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
- Nombre Canal Alt.
- Nombre Producto
- Grupo Comercial
- Nombre Grupo Comercial
- Segmento Mercado
- Fecha Inicio Vigencia Poliza
- Fecha Fin Vigencia Poliza
- Tipo Transacción

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-GF-01.2.2
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del botón Ver en la pantalla Exactus Procesado del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Cuentas Contables definido para el motor.
3. las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- NEGOCIO
- TIPO_ASIENTO
- METODODIST
- LINEA
- CODCANAL
- SUBCANAL
- CODPRODUCTO
- CODCTACTB_EX
- CODCECO_EX
- CODCONCEPTO
- MTOMES_SOL
- DESC_REG1
- Columna definidas opcionales.
- COMPAÑIA
- ANOMES
- CAPACTB
- INDMANAUTO
- NUMFACT
- REFERENCIA
- TIPMOV
- TIPO_DOCUMENTO
- DOCUMENTO
- IDEPROC
- FECHA
- STDIST
- DESCANAL
- CAN_DEST
- RAMO_DEST
- CODSEGMENTO
- CODREGION
- NOMBRECTA
- NIT
- RAZON SOCIAL
- CODIGOMONEDA
- TIPO_COSTO
- MTOMES_DOL
- PROCESO
- FUENTE

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario selecciona el botón "Exactus procesado"
4. El usuario presiona el botón ''Ver"
5. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-GF-01.2.3
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del botón Ver en la pantalla Driver Producto del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Driver Producto definido para el motor.
3. las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- Método de distribución
- Código Linea
- Nombre de Linea
- Código Canal
- Código Producto
- Factor
- Columna definidas opcionales.
- Nombre producto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-GF-01.2.4
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del botón Ver en la pantalla Driver Subcanal del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Driver Subcanal definido para el motor.
3. las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- Método
- Código Línea
- Nombre Línea
- Código canal
- Código Producto
- Código Canal Destino
- Código Subcanal
- Factor
- Columna definidas opcionales.
- Descripción del método
- Producto
- Subcanal
- Estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Subcanal''
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-GF-01.2.5
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del botón Ver en la pantalla AP Vida del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo AP Vida definido para el motor.
3. las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- Método
- Código Línea
- Nombre Línea
- Código canal
- Código Producto
- Código Canal Destino
- Código Subcanal
- Factor
- Columna definidas opcionales.
- Descripción del método
- Producto
- Subcanal
- Estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP Vida''
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-GF-01.3.1
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del botón Ver en la pantalla Especiales NIIF del flujo de Asignaciones de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Especiales NIIF definido para el motor.
3. las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- Codigo Linea
- Porcentaje
- Tipo Distribución
- Columna definidas opcionales.
- Nombre Linea
- Código Producto
- Nombre Producto
- Código Canal
- Nombre Canal
- Código Subcanal
- Nombre Subcanal
- Método Valoracion
- Digito de cuenta
- NIIF17 Atribuible
- NIIF17 Tipo
- Concepto N1
- Concepto N2
- Código Concepto
- CECO

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros.
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.
### Caso de prueba: E60-GF-02.1.1
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del buscador del componente Columnas de Cuentas Contables del flujo de Parametrización de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento del buscador del componente de la Pantallla Cuentas Contables que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Cuentas Contables definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- Código cuenta contable
- Nombre Cuenta Contable
- Código concepto
- Concepto N1
- Concepto N2
- Concepto N3
- Concepto NIIF17
- Metodo De Distribución Vida
- Metodo De Distribución Generales
- Columna definidas opcionales.
- Código ramo
- Tipo de cuenta
- Tipo NIIF17 CBR

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-GF-02.1.2
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del buscador del componente Columnas de Centros del flujo de Parametrización de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento del buscador del componente de la Pantallla Centros que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Centros definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- Negocio
- Centro de Costo
- Nombre Centro de costo
- Columna definidas opcionales.
- Código línea
- Nombre Línea
- Código Producto
- Nombre producto
- Código canal
- Nombre canal
- Código subcanal
- Nombre subcanal
- Tipo
- Estatus del Centro de Costo
- Tipo emisión
- Tipo negocio
- Tipo producto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Centros ".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-GF-02.2.1
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del buscador del componente Columnas de Exactus sin procesar del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento del buscador del componente de la Pantallla Exactus sin procesar que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Exactus sin procesar definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- Cuenta Contable
- Nombre Cuentas Contables
- Asiento
- Débito Local
- Crédito Local
- Centro Costo
- Tipo De Asiento
- Razón Social
- Partida
- Columna definidas opcionales.
- Tipo De Documento
- Documento
- Referencia
- Débito Dólar
- Crédito Dólar
- Descripción Centro Costo
- Fecha
- NIT
- Fuente
- Notas
- Flujo Efectivo
- Partida
- Patrimonio Neto
- Broker
- Canal Alt.
- Cliente
- Segmento
- Poliza
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
- Nombre Canal Alt.
- Nombre Producto
- Grupo Comercial
- Nombre Grupo Comercial
- Segmento Mercado
- Fecha Inicio Vigencia Poliza
- Fecha Fin Vigencia Poliza
- Tipo Transacción

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-GF-02.2.2
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del buscador del componente Columnas de Exactus Procesado del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento del buscador del componente de la Pantallla Exactus procesado que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Exactus Procesado definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- NEGOCIO
- TIPO_ASIENTO
- METODODIST
- LINEA
- CODCANAL
- SUBCANAL
- CODPRODUCTO
- CODCTACTB_EX
- CODCECO_EX
- CODCONCEPTO
- MTOMES_SOL
- DESC_REG1
- Columna definidas opcionales.
- COMPAÑIA
- ANOMES
- CAPACTB
- INDMANAUTO
- NUMFACT
- REFERENCIA
- TIPMOV
- TIPO_DOCUMENTO
- DOCUMENTO
- IDEPROC
- FECHA
- STDIST
- DESCANAL
- CAN_DEST
- RAMO_DEST
- CODSEGMENTO
- CODREGION
- NOMBRECTA
- NIT
- RAZON SOCIAL
- CODIGOMONEDA
- TIPO_COSTO
- MTOMES_DOL
- PROCESO
- FUENTE

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ''Exactus procesado"
4. El usuario presiona el botón ''Ver"
5. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-GF-02.2.3
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del buscador del componente Columnas de Driver Producto del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento del buscador del componente de la Pantallla Driver Producto que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Driver Producto definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- Método de distribución
- Código Linea
- Nombre de Linea
- Código Canal
- Código Producto
- Factor
- Columna definidas opcionales.
- Nombre producto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-GF-02.2.4
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del buscador del componente Columnas de Driver Subcanal del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento del buscador del componente de la Pantallla Driver Subcanal que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Driver Subcanal definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- Método
- Código Línea
- Nombre Línea
- Código canal
- Código Producto
- Código Canal Destino
- Código Subcanal
- Factor
- Columna definidas opcionales.
- Descripción del método
- Producto
- Subcanal
- Estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-GF-02.2.5
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del buscador del componente Columnas de AP Vida del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento del buscador del componente de la Pantallla AP Vida que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo AP Vida definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- Método
- Código Línea
- Nombre Línea
- Código canal
- Código Producto
- Código Canal Destino
- Código Subcanal
- Factor
- Columna definidas opcionales.
- Descripción del método
- Producto
- Subcanal
- Estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP Vida".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-GF-02.3.1
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del buscador del componente Columnas de Especiales NIIF del flujo de Asignaciones de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento del buscador del componente de la Pantallla Especiales NIIF que desea mostrar en el frontend.

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Especiales NIIF definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- Codigo Linea
- Porcentaje
- Tipo Distribución
- Columna definidas opcionales.
- Nombre Linea
- Código Producto
- Nombre Producto
- Código Canal
- Nombre Canal
- Código Subcanal
- Nombre Subcanal
- Método Valoracion
- Digito de cuenta
- NIIF17 Atribuible
- NIIF17 Tipo
- Concepto N1
- Concepto N2
- Código Concepto
- CECO

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.
### Caso de prueba: E60-GF-03.1.1
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' del componente Columnas de Cuentas Contables del flujo de Parametrización de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción 'Mostrar todas'' del componente columnas de Cuentas Contables del flujo de Parametrización de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Cuentas Contables definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- Código cuenta contable
- Nombre Cuenta Contable
- Código concepto
- Concepto N1
- Concepto N2
- Concepto N3
- Concepto NIIF17
- Metodo De Distribución Vida
- Metodo De Distribución Generales
- Columna definidas opcionales.
- Código ramo
- Tipo de cuenta
- Tipo NIIF17 CBR

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla del Front.
### Caso de prueba: E60-GF-03.1.2
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' del componente Columnas de Centros del flujo de Parametrización de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción 'Mostrar todas'' del componente columnas de Centros del flujo de Parametrización de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Centros definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- Negocio
- Centro de Costo
- Nombre Centro de costo
- Columna definidas opcionales.
- Código línea
- Nombre Línea
- Código Producto
- Nombre producto
- Código canal
- Nombre canal
- Código subcanal
- Nombre subcanal
- Tipo
- Estatus del Centro de Costo
- Tipo emisión
- Tipo negocio
- Tipo producto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla del Front.
### Caso de prueba: E60-GF-03.2.1
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' del componente Columnas de Exactus sin procesar del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción 'Mostrar todas'' del componente columnas de Exactus sin procesar del flujo de Aprovisionamiento de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Exactus sin procesar definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- Cuenta Contable
- Nombre Cuentas Contables
- Asiento
- Débito Local
- Crédito Local
- Centro Costo
- Tipo De Asiento
- Razón Social
- Partida
- Columna definidas opcionales.
- Tipo De Documento
- Documento
- Referencia
- Débito Dólar
- Crédito Dólar
- Descripción Centro Costo
- Fecha
- NIT
- Fuente
- Notas
- Flujo Efectivo
- Partida
- Patrimonio Neto
- Broker
- Canal Alt.
- Cliente
- Segmento
- Poliza
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
- Nombre Canal Alt.
- Nombre Producto
- Grupo Comercial
- Nombre Grupo Comercial
- Segmento Mercado
- Fecha Inicio Vigencia Poliza
- Fecha Fin Vigencia Poliza
- Tipo Transacción

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla del Front.
### Caso de prueba: E60-GF-03.2.2
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' del componente Columnas de Exactus procesado del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción 'Mostrar todas'' del componente columnas de Exactus procesado del flujo de Aprovisionamiento de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Exactus procesado definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- NEGOCIO
- TIPO_ASIENTO
- METODODIST
- LINEA
- CODCANAL
- SUBCANAL
- CODPRODUCTO
- CODCTACTB_EX
- CODCECO_EX
- CODCONCEPTO
- MTOMES_SOL
- DESC_REG1
- Columna definidas opcionales.
- COMPAÑIA
- ANOMES
- CAPACTB
- INDMANAUTO
- NUMFACT
- REFERENCIA
- TIPMOV
- TIPO_DOCUMENTO
- DOCUMENTO
- IDEPROC
- FECHA
- STDIST
- DESCANAL
- CAN_DEST
- RAMO_DEST
- CODSEGMENTO
- CODREGION
- NOMBRECTA
- NIT
- RAZON SOCIAL
- CODIGOMONEDA
- TIPO_COSTO
- MTOMES_DOL
- PROCESO
- FUENTE

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botón ''Exactus procesado"
4. El usuario presiona el botón ''Ver"
5. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla del Front.
### Caso de prueba: E60-GF-03.2.3
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' del componente Columnas de Driver Producto del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción 'Mostrar todas'' del componente columnas de Driver Producto procesado del flujo de Aprovisionamiento de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Driver Producto definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- Método de distribución
- Código Linea
- Nombre de Linea
- Código Canal
- Código Producto
- Factor
- Columna definidas opcionales.
- Nombre producto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Producto".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla del Front.
### Caso de prueba: E60-GF-03.2.4
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' del componente Columnas de Driver Subcanal del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción 'Mostrar todas'' del componente columnas de Driver Subcanal procesado del flujo de Aprovisionamiento de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos o Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Driver Subcanal definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- Método
- Código Línea
- Nombre Línea
- Código canal
- Código Producto
- Código Canal Destino
- Código Subcanal
- Factor
- Columna definidas opcionales.
- Descripción del método
- Producto
- Subcanal
- Estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla del Front.
### Caso de prueba: E60-GF-03.2.5
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' del componente Columnas de AP Vida del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción 'Mostrar todas'' del componente columnas de AP Vida procesado del flujo de Aprovisionamiento de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos o Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo AP Vida definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- Método
- Código Línea
- Nombre Línea
- Código canal
- Código Producto
- Código Canal Destino
- Código Subcanal
- Factor
- Columna definidas opcionales.
- Descripción del método
- Producto
- Subcanal
- Estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "AP Vida".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla del Front.
### Caso de prueba: E60-GF-03.3.1
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' del componente Columnas de Especiales NIIF del flujo de Asignaciones de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción 'Mostrar todas'' del componente columnas de Especiales NIIF del flujo de Asignaciones de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Especiales NIIF definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- Codigo Linea
- Porcentaje
- Tipo Distribución
- Columna definidas opcionales.
- Nombre Linea
- Código Producto
- Nombre Producto
- Código Canal
- Nombre Canal
- Código Subcanal
- Nombre Subcanal
- Método Valoracion
- Digito de cuenta
- NIIF17 Atribuible
- NIIF17 Tipo
- Concepto N1
- Concepto N2
- Código Concepto
- CECO

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones " > "Especiales NIIF".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas del archivo en la tabla del Front.
### Caso de prueba: E60-GF-04.1.1
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' del componente Columnas de Cuentas Contables del flujo de Parametrización de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción ''Ocultar todas'' del componente Columnas de Cuentas Contables del flujo de Parametrización de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Cuentas Contables definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- Código cuenta contable
- Nombre Cuenta Contable
- Código concepto
- Concepto N1
- Concepto N2
- Concepto N3
- Concepto NIIF17
- Metodo De Distribución Vida
- Metodo De Distribución Generales
- Columna definidas opcionales.
- Código ramo
- Tipo de cuenta
- Tipo NIIF17 CBR

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla del Front solo las columnas del archivo definidas Por defecto.
### Caso de prueba: E60-GF-04.1.2
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' del componente Columnas de Centros del flujo de Parametrización de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción ''Ocultar todas'' del componente Columnas de Cuentas Contables del flujo de Parametrización de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Centros definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- Negocio
- Centro de Costo
- Nombre Centro de costo
- Columna definidas opcionales.
- Código línea
- Nombre Línea
- Código Producto
- Nombre producto
- Código canal
- Nombre canal
- Código subcanal
- Nombre subcanal
- Tipo
- Estatus del Centro de Costo
- Tipo emisión
- Tipo negocio
- Tipo producto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla del Front solo las columnas del archivo definidas Por defecto.
### Caso de prueba: E60-GF-04.2.1
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' del componente Columnas de Exactus sin porcesar del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción ''Ocultar todas'' del componente Columnas de Exactus sin porcesar del flujo de Aprovisionamiento de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos o Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Exactus sin porcesa definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- Cuenta Contable
- Nombre Cuentas Contables
- Asiento
- Débito Local
- Crédito Local
- Centro Costo
- Razón Social
- Partida
- Columna definidas opcionales.
- Tipo De Documento
- Documento
- Referencia
- Débito Dólar
- Crédito Dólar
- Descripción Centro Costo
- Fecha
- NIT
- Fuente
- Notas
- Flujo Efectivo
- Partida
- Patrimonio Neto
- Broker
- Canal Alt.
- Cliente
- Segmento
- Poliza
- Siniestro
- Tipo De Asiento
- Producto
- Canal Distribución
- Cuenta Origen
- Asiento Origen
- Centro Costo Origen
- Identificador NIIF
- Tipo Documento Cliente
- Nombre Broker
- Nombre Canal Alt.
- Nombre Producto
- Grupo Comercial
- Nombre Grupo Comercial
- Segmento Mercado
- Fecha Inicio Vigencia Poliza
- Fecha Fin Vigencia Poliza
- Tipo Transacción

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus sin porcesar".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla del Front solo las columnas del archivo definidas Por defecto.
### Caso de prueba: E60-GF-04.2.2
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' del componente Columnas de Exactus procesado del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción ''Ocultar todas'' del componente Columnas de Exactus procesado del flujo de Aprovisionamiento de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Exactus procesado definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.
5. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- NEGOCIO
- TIPO_ASIENTO
- METODODIST
- LINEA
- CODCANAL
- SUBCANAL
- CODPRODUCTO
- CODCTACTB_EX
- CODCECO_EX
- CODCONCEPTO
- MTOMES_SOL
- DESC_REG1
- Columna definidas opcionales.
- COMPAÑIA
- ANOMES
- CAPACTB
- INDMANAUTO
- NUMFACT
- REFERENCIA
- TIPMOV
- TIPO_DOCUMENTO
- DOCUMENTO
- IDEPROC
- FECHA
- STDIST
- DESCANAL
- CAN_DEST
- RAMO_DEST
- CODSEGMENTO
- CODREGION
- NOMBRECTA
- NIT
- RAZON SOCIAL
- CODIGOMONEDA
- TIPO_COSTO
- MTOMES_DOL
- PROCESO
- FUENTE

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus porcesa".
3. El usuario presiona el botón ''Exactus procesado"
4. El usuario presiona el botón ''Ver"
5. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla del Front solo las columnas del archivo definidas Por defecto.
### Caso de prueba: E60-GF-04.2.3
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' del componente Columnas de Driver Producto del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción ''Ocultar todas'' del componente Columnas de Driver Producto sin porcesar del flujo de Aprovisionamiento de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Driver Producto definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- Método de distribución
- Código Linea
- Nombre de Linea
- Código Canal
- Código Producto
- Factor
- Columna definidas opcionales.
- Nombre producto

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Driver Producto".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla del Front solo las columnas del archivo definidas Por defecto.
### Caso de prueba: E60-GF-04.2.4
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' del componente Columnas de Driver Subcanal del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción ''Ocultar todas'' del componente Columnas de Driver Subcanal sin porcesar del flujo de Aprovisionamiento de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Driver Subcanal definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. Opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- Método
- Código Línea
- Nombre Línea
- Código canal
- Código Producto
- Código Canal Destino
- Código Subcanal
- Factor
- Columna definidas opcionales.
- Descripción del método
- Producto
- Subcanal
- Estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Driver Sudcanal".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla del Front solo las columnas del archivo definidas Por defecto.
### Caso de prueba: E60-GF-04.2.5
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' del componente Columnas de AP Vida del flujo de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción ''Ocultar todas'' del componente Columnas de AP Vida sin porcesar del flujo de Aprovisionamiento de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo AP Vida definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- Método
- Código Línea
- Nombre Línea
- Código canal
- Código Producto
- Código Canal Destino
- Código Subcanal
- Factor
- Columna definidas opcionales.
- Descripción del método
- Producto
- Subcanal
- Estado

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "AP Vida".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla del Front solo las columnas del archivo definidas Por defecto.
### Caso de prueba: E60-GF-04.3.1
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' del componente Columnas de Especiales NIIF del flujo de Asignaciones de Gastos Financieros

**Descripcion:** Validad el correcto funcionamiento de la opción ''Ocultar todas'' del componente Columnas de Especiales NIIF sin porcesar del flujo de Asignaciones de Gastos Financieros

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Estén configurados los nombre de las columnas del archivo Especiales NIIF definido para el motor.
3. las columnas por defecto siempre se mostrarán..
4. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- Codigo Linea
- Porcentaje
- Tipo Distribución
- Columna definidas opcionales.
- Nombre Linea
- Código Producto
- Nombre Producto
- Código Canal
- Nombre Canal
- Código Subcanal
- Nombre Subcanal
- Método Valoracion
- Digito de cuenta
- NIIF17 Atribuible
- NIIF17 Tipo
- Concepto N1
- Concepto N2
- Código Concepto
- CECO

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botón ''Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario seleciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla del Front solo las columnas del archivo definidas Por defecto.

---

## Escenario: E63-GF-BUS
**Descripcion:** Validar el funcionamiento integral del buscador en el flujo de Gastos Financieros

### Caso de prueba: E63-GF-BUS
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento del buscador en el flujo de Gastos Financieros

**Descripcion:** Validar que el buscador filtra, encuentra y maneja los datos correctamente según los diferentes criterios de entrada en todas sus vistas

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros
2. Todos los filtos deben estar activos.

**Datos:**
- Datos de los registros almacenados y elementos para uso de prueba (Números, Letras, carácteres especiales o combinaciones)

**Pasos:**
1. El usuario Gestor de Gastos. accede a la página de inicio ''Distribución''.
2. El usuario accede a los filtros de busqueda general (buscar) o especificos (Código, Nombre, Unidad de Cuenta, etc)

**Resultado esperado:**
El sistema devuelve los resultados esperados y debe comportarse como se describe.
1- El resultado corresponde con a la columna correcta.
2- La busqueda en el filtro general devuelve todos los elementos encontrados a partir de los criterios de entrada.
3- A partir del tercer caracter brinda la opción de completamiento.

---

## Escenario: E47-GF-EC
**Descripcion:** Validar el procesamiento de las Fases de Procesos de Gastos Financieros en el modo de ejecución Completo

_Sin casos de prueba asociados._

---

## Escenario: E47-PRE-GF-EC
**Descripcion:** Validar el procesamiento de las Fases de Procesos de Gastos Financieros en el modo de ejecución Completo para el flujo Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E47-GF-ER
**Descripcion:** Validar el procesamiento de las Fases de Procesos de Gastos Financieros en el modo de ejecución Resumido

_Sin casos de prueba asociados._

---

## Escenario: E47-PRE-GF-ER
**Descripcion:** Validar el procesamiento de las Fases de Procesos de Gastos Financieros en el modo de ejecución Resumido para el flujo Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E51-GF-EC
**Descripcion:** Permanencia de los montos durante el procesamiento por cada una de las Fases de Gastos Financieros en el proceso de ejecución Completo

_Sin casos de prueba asociados._

---

## Escenario: E51-PRE-GF-EC
**Descripcion:** Permanencia de los montos durante el procesamiento por cada una de las Fases de Gastos Financieros en el proceso de ejecución Completo para el flujo Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E51-GF-ER
**Descripcion:** Permanencia de los montos durante el procesamiento por cada una de las Fases de Gastos Financieros en el proceso de ejecución Resumido

_Sin casos de prueba asociados._

---

## Escenario: E51-PRE-GF-ER
**Descripcion:** Permanencia de los montos durante el procesamiento por cada una de las Fases de Gastos Financieros en el proceso de ejecución Resumido para el flujo Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E52-GF-EC
**Descripcion:** Validar la generación del archivo Cuadre de cuentas en el proceso de distribución en el flujo Gastos Financieros en el modo de ejecución completo

_Sin casos de prueba asociados._

---

## Escenario: E52-PRE-GF-EC
**Descripcion:** Validar la generación del archivo Cuadre de cuentas en el proceso de distribución en el flujo Gastos Financieros para el flujo Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E52-GF-ER
**Descripcion:** Validar la generación del archivo Cuadre de cuentas en el proceso de distribución en el flujo Gastos Financieros en el modo de ejecución Resumido

_Sin casos de prueba asociados._

---

## Escenario: E52-PRE-GF-ER
**Descripcion:** Validar la generación del archivo Cuadre de cuentas en el proceso de distribución en el flujo Gastos Financieros para el flujo Presupuesto

_Sin casos de prueba asociados._

---

## Escenario: E64-GF-ER
**Descripcion:** Validar funcionalidad 'Ejecutar Todo' en el proceso de distribución en el flujo Gastos Financieros en el modo de ejecución resumido

_Sin casos de prueba asociados._

---

## Escenario: E64-GF-EC
**Descripcion:** Validar funcionalidad 'Ejecutar Todo' en el proceso de distribución en el flujo Gastos Financieros en el modo de ejecución completo

_Sin casos de prueba asociados._

---

## Escenario: E65-GF-ER
**Descripcion:** Validar funcionalidad 'Detener' la ejecución en curso en el proceso de distribución en el flujo Gastos Financieros en el modo de ejecución resumido

_Sin casos de prueba asociados._

---

## Escenario: E65-GF-EC
**Descripcion:** Validar funcionalidad 'Detener' la ejecución en curso en el proceso de distribución en el flujo Gastos Financieros en el modo de ejecución completo

_Sin casos de prueba asociados._

---

## Escenario: E66-GF-ER
**Descripcion:** Validar funcionalidad 'Reiniciar' la ejecución detenida en el proceso de distribución en el flujo Gastos Financieros en el modo de ejecución resumida

_Sin casos de prueba asociados._

---

## Escenario: E66-GF-EC
**Descripcion:** Validar funcionalidad 'Reiniciar' la ejecución detenida en el proceso de distribución en el flujo Gastos Financieros en el modo de ejecución completo

_Sin casos de prueba asociados._

---

## Escenario: E67-DIS
**Descripcion:** Validar que el archivo descargado de Distribución muestre los datos correctamente y no tenga perdida de información.

### Caso de prueba: E67-DIS
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Distrubución

**Descripcion:** Validar alteraciones en los datos del archivo descargado

**Precondiciones:**
1. Descarga exitosa del archivo

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

## Escenario: E68-GF
**Descripcion:** Validar la correcta ejecución del botón ''Borrar Versión'' de la pantalla Exactus de Gastos Financieros.

### Caso de prueba: E68-GT-01
- Implementado: No

**Titulo:** Validar la correcta ejecución del botón ''Borrar Versión'' de la pantalla Exactus de Gastos Financieros.

**Descripcion:** Validar la correcta ejecución del botón ''Borrar Versión'' de la pantalla Exactus de Gastos Financieros.

**Precondiciones:**
1. El usuario registrado tenga el rol de Gestor de Gastos Financieros.
2. El botón Borrar Versión este funcional.
3. Debe existir un archivo Exactus cargado anteriormente.

**Datos:**
- Archivo ''REAL Exactus sin procesar GT'' definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Aprovisionamiento" > " Exactus".
3. El usuario presiona botón ''Borrar Versión''.
4. Se levanta un modal con la advertencia Se eliminarán todos los datos asociados al archivo Exactus cargados. ¿Desea continuar?

**Resultado esperado:**
La data de Exactus ha sido borrada satisfactoriamente. Se muestra el mensaje ¡Listo! La data ha sido borrada.
Se debe validar que en el front no se muestre data.

---

## Escenario: E69-GF-EC
**Descripcion:** Validar que se procesen las fases en la sección "Procesos" usando "Exactus Procesado" de Gastos Financieros en el modo de ejecución Completo

_Sin casos de prueba asociados._

---

## Escenario: E69-GF-01
**Descripcion:** Validar la correcta ejecución del flujo de descarga del archivo Exactus procesado de Gastos Financieros

_Sin casos de prueba asociados._

---

## Casos sin escenario asociado

### Caso de prueba: E-35-GF-03-01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos de Maestro Reservas Producto en el flujo de Gastos Financieross

**Descripcion:** Verificar que el sistema bloquee el guardado y muestre los mensajes de error correspondientes cuando los campos obligatorios están vacíos o el formato es incorrecto en el modal "Agregar Maestro Reservas Producto"

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. La distribución está en estado creada.
3. Todos sus campos son obligatorios
4. El códigos de Producto debe existir en el catálogo. Grupo Producto. Debe contener entre 4 y 10 caracteres alfanuméricos
5. Los archivos Grupo Producto y Subcanal de Comunes deben estar cargados.

**Datos:**
- Campos del formulario
- Grupo: [APF AR, VIDA LEY]
- Código producto: Campo Select. [AFP 002, VGRP002]
- Producto: Se autocompleta según el código de producto [AFP ANTIGUO, VIDA LEY]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón "Agregar".
4. Se levanta el modal "Agregar Centros".
5. El usuario completa los campos.

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
### Caso de prueba: E-36-GF-03-01.1
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro por error en los campos de Cuenta contable por error de formato de los campos en Parametrización en el flujo de Gastos Financieros

**Descripcion:** Validar que no se puede editar un registro por error de formato desde el modal "Editar Cuentas Contables"

**Precondiciones:**
1. El usuario debe tener rol de Gestor de Gastos Financieros.
2. Debe existir un registo correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- Nombre Cuenta Contable:obligatorio Editable No cumle [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]
- Código Concepto:obligatorio Editable No cumle: [vacio, SS.05.04, 30.05.04.12]
- Concepto N1: obligatorio Editable No cumple [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]
- Concepto N2: obligatorio Editable No cumple [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]
- Concepto N3: obligatorio Editable No cumple [Vacio, Cadena de texto incluir $, #, @, !, *, ?, +]

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución'' con el selector por defecto en Gastos Financieros
2. El usuario selecciona del menú lateral "Parametrización" > " Cuentas Contables".
3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Cuenta contable".
5. El usuario borrar la información y deja campos vacíos
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''
-Nombre Cuentas Contable: Formato inválido. Solo se permiten letras, números y los caracteres: . , _ ( ) /
Código Concepto:Formato inválido.
Concepto N1: Formato inválido.
Concepto N2:Formato inválido.
Concepto N3:Formato inválido.
