# Catalogo de casos de prueba

---

## Escenario: E0-LOGIN-ADMIN-01
**Descripcion:** Validar que sistema permite autenticarse con el rol de Administrador

### Caso de prueba: E0-LOGIN-ADMIN-01.01
- Implementado: Si

**Titulo:** Validar que el rol Administrador tiene acceso al sistema

**Descripcion:** Validar que un usuario con el rol de Administrador pueda autenticarse al sistema.

**Precondiciones:**
1. Usuario creado en el sistema con rol Administrador de Gastos
2. El usuario debe ingresar con un rol Administrador de Gastos para ejecutar cualquier acción.

**Datos:**
- Rol: Administrador de gasto
- Correo: inetum.Fernando.Alva@pacifico.com.pe
- Contraseña: Bry.18AC!

**Pasos:**
1. 1. El usuario accede a la página de inicio de sesión (https://distribuciónGastosdev.pacificotest.com.pe/)
2. 2. Ingresa el correo y contraseña y da click en el botón "inicio de sesión"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-En la parte inferior de sidebar, se muestra el nombre y rol, al hacer click se muestra el correo  y la acción de cerrar sesión

---

## Escenario: E0-LOGIN-ADMIN-02
**Descripcion:** Validar que el sistema restringe la modificación de archivos con el rol de Administrador

### Caso de prueba: E0-LOGIN-ADMIN-02
- Implementado: Si

**Titulo:** Validar que el rol administrador puede visualizar y modificar los archivos comunes

**Descripcion:** Validar el rol Administrador de Gestor de Gastos puede hacer uso total de las funcionalidades de la sección comunes

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos

**Datos:**
- Archivos comunes Línea, Canales, Subcanal, Grupo Producto, Maestro UoA y Configuración de Parches únicamente a usuarios con el rol "Administrador de Gastos"

**Pasos:**
1. 1. El usuario accede a la página de inicio de sesión --> https://distribuciónGastosdev.pacificotest.com.pe/
2. 2- Ingresa el correo y contraseña y da click en el botón "inicio de sesión"
3. 3-El usuario selecciona de menú lateral "Comunes" > "Líneas"
4. 4-El usuario selecciona de menú lateral "Comunes" > "Grupo Producto".
5. 5-El usuario selecciona de menú lateral "Comunes" > "Canales".
6. 6-El usuario selecciona de menú lateral "Comunes" > "Subcanales".
7. 7-El usuario selecciona de menú lateral "Comunes" > "Maestro UoA".
8. 8-El usuario selecciona de menú lateral "Comunes" > "Unidades de Cuenta - BBVA/BFA".
9. 9-El usuario selecciona de menú lateral "Comunes" > "Configuración de Parches".

**Resultado esperado:**
1-El usuario accede correctamente al sistema y puede visualizar todas las secciones
2-El usuario puede crear, editar y eliminar registros en el flujo de comunes con su rol "Administrador de Gastos"

---

## Escenario: E0-LOGIN-Gestor-GASTO-01
**Descripcion:** Validar que sistema permite autenticarse con el rol de Gestor de Gastos Técnicos

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-01
- Implementado: Si

**Titulo:** Validar que el rol de Gestor de Gastos Técnicos tiene acceso al sistema

**Descripcion:** Validar que un usuario con el rol de Gestor de Gastos Técnicos pueda autenticarse al sistema.

**Precondiciones:**
1. Usuario creado en el sistema con rol Gestor de Gastos Técnicos
2. El usuario está activo.
3. El usuario con el rol de Gestor de Gastos Técnicos Solo podrá ejecutar acciones propias de Gastos Técnicos

**Datos:**
- Rol: Gestor de Gastos Técnicos
- Correo: psilvestre@pacificotest.com.pe
- Contraseña: MDG rocks!

**Pasos:**
1. 1. El usuario accede a la página de inicio de sesión (https://distribuciónGastosdev.pacificotest.com.pe/)
2. 2. Ingresa el correo y contraseña y da click en el botón "inicio de sesión"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El sidebar muestra el rol Gestor de Gastos Técnicos y al hacer click se muestra el correo  y la accion de cerrar sesion
3-Se visualiza por defecto en el selector superior "Gastos Técnicos" y no puede selecionar otro tipo de gasto.

---

## Escenario: E0-LOGIN-Gestor-GASTO-02
**Descripcion:** Validar que el sistema restringe la modificación de archivos comunes a un rol de Gestor de Gastos Técnicos

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-02
- Implementado: Si

**Titulo:** Validar que el rol de Gestor de  Gastos Técnicos no pueda visualizar ni modificar los archivos ni datos de flujo de comunes

**Descripcion:** Validar el rol Gestor de  Gastos Técnicos no pueda visualizar ni modificar informacion de flujo de comunes

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de Gastos Técnicos

**Datos:**
- Archivos comunes Línea, Canales, Subcanal, Grupo Producto, Maestro UoA y Configuración de Parches únicamente a usuarios con el rol "Administrador de Gastos"

**Pasos:**
1. 1. El usuario accede a la página de inicio de sesion --> https://distribucionGastos.pacificotest.com.pe/
2. 2- Ingresa el correo y contraseña, con el rol correspondiente, dar click en el botón "inicio de sesión"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no puede visualizar el flujo de comunes

---

## Escenario: E0-LOGIN-Gestor-GASTO-03
**Descripcion:** Validar que el sistema restringe la eliminación de archivos a un rol de Gestor de Gastos para el flujo de Gastos Técnicos

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-03.1
- Implementado: Si

**Titulo:** Validar que el rol de Gestor de Gastos Técnicos no pueda eliminar registros de flujo de parametrización

**Descripcion:** Validar el rol Gestor de  Gastos Técnicos no pueda eliminar informacion de flujo de parametrización

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de Gastos Técnicos

**Datos:**
- Archivos Parametrización :Ramo, Centros y cuentas Contables
- Únicamente a usuarios con el rol "Administrador de Gastos" puede eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio de sesión --> https://distribuciónGastosdev.pacificotest.com.pe/
2. 2- Ingresa el correo y contraseña, con el rol correspondiente, dar click en el botón "inicio de sesión"
3. 3-El usuario selecciona de menú lateral "Parametrización " > "Ramo".
4. 4-El usuario selecciona de menú lateral "Parametrización " > "Cuentas contables"
5. 5-El usuario selecciona de menú lateral "Parametrización " > "Centros ".

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no se le visualiza el icono para eliminar en las acciones en el flujo de Parametrización

---

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-03.2
- Implementado: No

**Titulo:** Validar que el rol de gestor de gastos Técnicos no pueda eliminar registros de flujo de Aprovisionamiento

**Descripcion:** Validar el rol gestor de  gastos Técnicos no pueda eliminar informacion de flujo de Aprovisionamiento

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de gastos Técnicos

**Datos:**
- Archivos Aprovisionamiento:
- Exactus (procesado)
- Exactus (sin procesar)
- Driver Producto
- Driver Subcanal
- Unidad de cuenta GT
- Maestro de Negocio y Embebidos
- 
- Únicamente a usuarios con el rol "Administrador de Gastos" puede eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio de sesión --> https://distribuciónGastosdev.pacificotest.com.pe/
2. 2- Ingresa el correo y contraseña, con el rol correspondiente, dar click en el botón "inicio de sesión"
3. 3-El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus"
4. 5-El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
5. 6-El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal".
6. 7-El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de cuenta GT".
7. 8-El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocio Embebidos".

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no se le visualiza el icono para eliminar en las acciones en el flujo de Aprovisionamiento

---

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-03.3
- Implementado: No

**Titulo:** Validar que el rol de gestor de gastos Técnicos no pueda eliminar registros de flujo de Asignaciones

**Descripcion:** Validar el rol gestor de  gastos Técnicos no pueda modificar informacion de flujo de Asignaciones

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de gastos Técnicos

**Datos:**
- Archivos Asignaciones:
- Especiales NIIF
- Método subcanal
- Método Producto
- 
- Únicamente a usuarios con el rol "Administrador de Gastos" puede eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio de sesión --> https://distribuciónGastosdev.pacificotest.com.pe/
2. 2- Ingresa el correo y contraseña, con el rol correspondiente, dar click en el botón "inicio de sesión"
3. 3-El usuario selecciona de menú lateral "Aprovisionamiento" > "Especiales NIIF"
4. 4-El usuario selecciona de menú lateral "Aprovisionamiento" > "Método subcanal"
5. 5-El usuario selecciona de menú lateral "Aprovisionamiento" > "Método Producto"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no se le visualiza el icono para eliminar en las acciones en el flujo de Aprovisionamiento

---

## Escenario: E40-DIS-01
**Descripcion:** Validar que el sistema pueda crear una nueva distribución

### Caso de prueba: E40-DIS-01
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de crear una nueva distribución

**Descripcion:** Validar que se pueda crear una nueva distribución desde el modal "Nueva Distribución"

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol Gestor de Gastos Técnicos.
2. 2- está distribución no haya sido creada anteriormente.
3. 3- El nombre se va formando con la información de los campos: período, Tipo y Sección.
4. 4- Los campos Tipo, período y Secciones son select.

**Datos:**
- Campos de formulario
- -Nombre: período Tipo Sección
- -Tipo: Real
- -período: catálogo con los periodos de año en curso, Ej: 202501, 202502, etc.
- -Versión: número entero con un decimal, Ej: 1.0, 1.1, 2.0
- -Tasa de cambio: número entero de hasta 4 cifras con dos decimales, Ej:13.98, 1.09, 0.65, 1234.98
- -Secciones: Flujo de mes, Ajuste de mes

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''.
2. 2. El usuario presiona "Nueva Distribución".
3. 3. Se levanta el modal con título "Crear distribución", el botón crear está deshabilitado
4. 4. El usuario completa los campos y se habilita el botón crear.
5. 5. El usuario presiona el botón crear
6. 6. Se muestra un mensaje de éxito.

**Resultado esperado:**
El sistema crea una nueva distribución correctamente y muestra un mensaje de exito ¡Hecho! El registro se agregó sin problemas

---

## Escenario: E40-DIS-02
**Descripcion:** Validar las reglas de negocio al crear una nueva distribución

### Caso de prueba: E40-DIS-02
- Implementado: Si

**Titulo:** Validar que no se pueda crear una nueva distribución porque no cumplen con las reglas definidas de negocio

**Descripcion:** Validar no se pueda crear una nueva distribución porque no cumplen con las reglas definidas de negocio desde el modal "Nueva Distribución"

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol Gestor de Gastos Técnicos.
2. 2- Está distribución ya ha sido creada anteriormente.
3. 3- Solo se puede crear una distribución, no se puede editar.
4. 4- El nombre se va formando con la información de los campos: período, Tipo y Sección.
5. 5- Los campos Tipo, período y Secciones son select.

**Datos:**
- Todos los campos de formulario se han completado con los datos idénticos a una distribución creada anteriormente
- -Nombre
- -Tipo
- -período
- -Versión
- -Tasa de cambio
- -Secciones

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''.
2. 2. El usuario presiona "Nueva Distribución".
3. 3. Se levanta el modal con título "Crear distribución", el botón crear está deshabilitado
4. 4. El usuario completa los campos y se habilita el botón crear.
5. 5. El usuario presiona el botón crear
6. 6. Se muestra un mensaje de error.

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
1. 1- El usuario debe ingresar con un rol Gestor de Gastos Técnicos.
2. 2- está distribución no haya sido creada anteriormente.

**Datos:**
- Campos de formulario
- -Nombre: período Tipo Sección
- -Tipo: Real
- -período: catálogo con los periodos de año en curso, Ej: 202501, 202502, etc.
- -Versión: número entero con un decimal, Ej: 1.0, 1.1, 2.0
- -Tasa de cambio: número entero de hasta 4 cifras con dos decimales, Ej:13.98, 1.09, 0.65, 1234.98
- -Secciones: Flujo de mes, Ajuste de mes

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''.
2. 2. El usuario presiona "Nueva Distribución".
3. 3. Se levanta el modal con título "Crear distribución", el botón crear está deshabilitado
4. 4. El usuario completa los campos y se habilita el botón crear.
5. 5. El usuario presiona el botón crear
6. 6. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no crea una nueva distribución y muestra un mensaje Algunos datos tienen un formato no válido o contienen caracteres extraños

---

## Escenario: E40-DIS-04
**Descripcion:** Validar que el sistema pueda editar el nombre al crear una distribución con un rol de Gestor de Gastos

### Caso de prueba: E40-DIS-04
- Implementado: Si

**Titulo:** Validar la Edición de nombre durante la creación de una distribución con el rol de Gestor de Gastos Técnicos.

**Descripcion:** Validar que un usuario con el rol de Gestor de Gastos pueda modificar correctamente el nombre de una distribución durante su proceso de creación, asegurando que el sistema permite la edición de campo y guarde los cambios de forma exitosa.

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol de Gestor de Gastos Técnicos.
2. 2- Está distribución no haya sido creada anteriormente.

**Datos:**
- Campos de formulario
- -Nombre:
- -Tipo: Real NIIF., REAL LOCAL y PRESUPUESTO
- -período: catálogo con los periodos de año en curso, Ej: 202501, 202502, etc.
- -Versión: número entero con un decimal, Ej: 1.0, 1.1, 2.0
- -Tasa de cambio: número entero de hasta 4 cifras con dos decimales, Ej:13.98, 1.09, 0.65, 1234.98
- -Secciones: Flujo de mes

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''.
2. 2. El usuario presiona "Nueva Distribución".
3. 3. Se levanta el modal con título "Crear distribución", el botón crear está deshabilitado
4. 4. El usuario ingresa un nombre en el campo Nombre
5. 5. El usuario selecciona el tipo, [REAL NIIF]
6. 6. El sistema muestra una sugerencia debajo de campo de nombre con el texto: "Sugerencia: [Real NIIF]"
7. 7. El usuario tiene dos opciones:
8. Si hace clic en “Aplicar”, el sistema actualiza el nombre con la sugerencia.
9. Si no hace clic en “Aplicar”, el nombre ingresado se mantiene sin cambios.
10. 8. El usuario completa los demás campos obligatorios de formulario.
11. 9. El sistema habilita el botón “Crear” una vez que todos los campos requeridos son válidos.
12. 10. El usuario hace clic en el botón “Crear”.

**Resultado esperado:**
El sistema crea una nueva distribución con el nombre editado correctamente y muestra un mensaje de éxito ¡Hecho! El registro se agregó sin problemas

---

## Escenario: E41-DIS-01
**Descripcion:** Validar que el sistema permite visualizar una distribución desde el menú de acciones

### Caso de prueba: E41-DIS-01
- Implementado: Si

**Titulo:** Validar que se pueda visualizar el estado de la ejecución de la distribución desde el menú de acciones

**Descripcion:** Validar que se pueda visualizar el estado de una distribución

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol Gestor de Gastos Técnicos.
2. 2- La distribución debe estar creada y visible en la tabla de distribución.

**Datos:**
- Campos de formulario
- -Nombre(que valores acepta)
- -período
- -Tipo
- -Tasa de cambio
- -Secciones

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''.
2. 2. El usuario presiona el icono "ojo" para visualizar el registro seleccionado
3. 3. Se levanta el modal y se muestra la información de progreso de la distribución seleccionada.

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
1. 1-El usuario debe ingresar con un rol Gestor de Gastos Técnicos.
2. 2- Se debe haber creado la distribución origen
3. 3- La distribución selecciona para realizar la copia está en estado Completada

**Datos:**
- Data de la distribución seleccionada como origen para realizar la copia.
- Estado: completada

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''.
2. 2. El usuario presiona el icono "copy" para copiar el registro de la distribución seleccionada.
3. 3. Se levanta un modal con el texto "Se va a copiar toda la información de la distribución seleccionada." donde se puede seleccionar el período y Versión"
4. 4.El usuario hace clik en aceptar

**Resultado esperado:**
Se muestra en el frontend el nuevo registro de distribución, en donde se copian todos los datos de la distribución seleccionada, con el estado "creada"

---

### Caso de prueba: E42-DIS-01.1
- Implementado: No

**Titulo:** Validar que el sistema no muestre la opción “Copiar” en el menú de acciones cuando el estado sea diferente a “Completada”

**Descripcion:** Validar que no se muestre el icono de copiar en una distribución con estado diferente a completado

**Precondiciones:**
1. 1-El usuario debe ingresar con un rol Gestor de Gastos Técnicos.
2. 2- Se debe haber creado la distribución origen
3. 3- La distribución selecciona para realizar la copia está con estado diferente a completado

**Datos:**
- Estado: creada, detenido, con errores y corriendo

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''.
2. 2. El usuario busca una distribución en estado --> creada
3. 3. El usuario busca una distribución en estado --> detenido
4. 4. El usuario busca una distribución en estado --> con errores
5. 5. El usuario busca una distribución en estado --> corriendo

**Resultado esperado:**
No se muestra en ninguna de las distribuciones el icono para copiar

---

## Escenario: E43-DIS-01
**Descripcion:** Validar la disponibilidad de la acción “Eliminar” desde el menú de acciones según el estado de la distribución

### Caso de prueba: E43-DIS-01.1
- Implementado: No

**Titulo:** Validar que el sistema permite Eliminar una distribución desde el menú de acciones cuando el estado sea “Creada" y su rol sea Administrador de Gastos

**Descripcion:** Validar que se pueda eliminar la distribución seleccionada.

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol Administrador de Gastos.
2. 2- La distribución debe estar creada anteriormente y su Estados: Creada

**Datos:**
- Data con la que fue creada la distribución y en estado Creada

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''.
2. 2. El usuario presiona el icono "basurero" para eliminar el registro seleccionado.
3. 3. Se levanta un modal con la advertencia Se eliminarán todos los datos asociados a la distribución. ¿Desea continuar?

**Resultado esperado:**
Se elimina el registro seleccionado

1- Se muestra un mensaje de éxito ¡Registro eliminado con éxito! 
2- se elimina el registro de la tabla distribución mostrada en el front.

---

### Caso de prueba: E43-DIS-01.2
- Implementado: No

**Titulo:** Validar que el sistema permite Eliminar una distribución desde el menú de acciones cuando el estado sea “Con errores" y su rol sea Administrador de Gastos

**Descripcion:** Validar que se pueda eliminar la  distribución seleccionada.

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol Administrador de Gastos.
2. 2- La distribución debe estar creada anteriormente y su Estado debe ser Con Errores

**Datos:**
- Data con la que fue creada la distribución y su estado Con Errores

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''.
2. 2. Selecciona una distribución en estado: Con Errores.
3. 3. El usuario presiona el icono "basurero" para eliminar el registro seleccionado.
4. 4. Se levanta un modal con la advertencia Se eliminarán todos los datos asociados a la distribución. ¿Desea continuar?
5. 5. El usuario acepta

**Resultado esperado:**
Se elimina el registro seleccionado

1- Se muestra un mensaje de éxito ¡Registro eliminado con éxito! 
2- Se elimina el registro de la tabla distribución mostrada en el front.

---

### Caso de prueba: E43-DIS-01.3
- Implementado: No

**Titulo:** Validar que el sistema No permite Eliminar una distribución desde el menú de acciones cuando el estado sea: “Detenida", “Corriendo" o “Completada"

**Descripcion:** Validar que NO se pueda eliminar la distribución seleccionada.

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol Administrador de Gastos.
2. 2- La distribución debe estar en Estado: Detenida, Corriendo o Completada

**Datos:**
- Data con la que fue creada la distribución y en estado Detenida

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''.
2. 2. El usuario busca una distribución en estado --> Detenida
3. 3. El usuario busca una distribución en estado --> Corriendo
4. 4. El usuario busca una distribución en estado --> Completada

**Resultado esperado:**
No se muestra en ninguna de las distribuciones el icono para eliminar. Lo que impide eliminar la distribución.

---

## Escenario: Validar que el sistema permite visualizar una distribución desde el listado de distribuciones
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E44-DIS
- Implementado: No

**Titulo:** Validar que se pueda visualizar una distribución distribución seleccionando de listado de la tabla principal

**Descripcion:** Validar que al seleccionar una distribución se muestran los datos correctamente en pantalla

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol de Gestor de Gastos Técnicos
2. 2- Se debe haber creado la distribución origen

**Datos:**
- Data con la que fue creada la distribución en cualquiera de sus estado

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''.
2. 2. El usuario hace click en el nombre de distribución desde la tabla principal de distribuciones
3. 3. Se levanta el modal y se muestra el texto "La información que se mostrará corresponde a la distribución seleccionada y período asociado a ella"
4. 4. El usuario, el usuario da clic en "Aceptar"

**Resultado esperado:**
Se muestra los datos seleccionado correctamente

1-Se actualiza el dropdown principal con la selección
2-La distribución seleccionada queda marca en celeste
3-Los datos ingresados a esa distribución me muestra correctamente
4-En la sección de procesos muestra el estado de la distribución seleccionada

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
1. 1. El usuario accede a la página de inicio ''Distribución''
2. 2.  El usuario presiona el botón "Descargar".
3. 3. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos

---

## Escenario: E58-GT-01
**Descripcion:** Validar que no se cargue el archivo sin que su antecesor ya se encuentre cargado en Parametrización de Gastos Técnicos

### Caso de prueba: E58-GT-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Centros sin que su antecesor ya se encuentre cargado en Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo Centros sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gastos Técnicos
2. 2- No deben estar cargados los archivos de Comunes: Línea, Grupo producto, Canal y Subcanal.

**Datos:**
- Archivo ''REAL Centros GT'' definidos en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Centros",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado

---

## Escenario: E58-GT-02
**Descripcion:** Validar que no se cargue el archivo sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Gastos Técnicos

### Caso de prueba: E58-GT-02.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Exactus sin procesar GT sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo REAL Exactus sin procesar GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos Técnicos
2. 2- No deben estar cargados los archivos: Cuentas Contables y Centros de Parametrización de GT y Líneas y Canal de Comunes.

**Datos:**
- Archivo ''REAL Exactus sin procesar GT'' definidos en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Exactus",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado

---

### Caso de prueba: E58-GT-02.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Driver Producto sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo REAL Driver Producto GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos Técnicos
2. 2- No debe estar cargado el archivo Grupo Producto y Lineas

**Datos:**
- Archivo ''REAL Driver Producto GT'' definidos en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Producto",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado

---

### Caso de prueba: E58-GT-02.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Driver Subcanal sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo REAL Driver Subcanal GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos Técnicos
2. 2- No debe estar cargado el archivo Canal, Subcanal.

**Datos:**
- Archivo ''REAL Driver Subcanal GT'' definidos en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado

---

### Caso de prueba: E58-GT-02.4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Unidad de Cuenta GT sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo REAL Unidad de Cuenta GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos Técnicos
2. 2- No deben estar cargados los archivos: Ramo y Cuentas Contables de la parametrización de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Unidad de Cuenta GT'' definidos en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Unidad de Cuenta",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado

---

### Caso de prueba: E58-GT-02.5
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Maestro de Negocio y Embebidos sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo REAL Maestro de Embebidos GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos Técnicos
2. 2- No deben estar cargados los archivos: Línea, Grupo producto, Canal y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Maestro de Embebidos GT'' definidos en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado

---

## Escenario: E58-GT-03
**Descripcion:** Validar que no se cargue el archivo sin que su antecesor ya se encuentre cargado en Asignaciones de Gastos Técnicos

### Caso de prueba: E58-GT-03.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignaciones Método Subcanal sin que su antecesor ya se encuentre cargado en Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo REAL Método Subcanal GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos Técnicos
2. 2- No debe estar cargado el archivo: Driver Subcanal, línea, Producto, Canal

**Datos:**
- Archivo ''REAL Método Subcanal GT'' definidos en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Subcanal".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Método Subcanal",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado

---

### Caso de prueba: E58-GT-03.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignaciones Método Producto sin que su antecesor ya se encuentre cargado en Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo REAL Método Producto GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos Técnicos
2. 2- No debe estar cargado el archivo: Driver Producto.

**Datos:**
- Archivo ''REAL Método Producto GT'' definidos en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Producto".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Método Producto",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado

---

### Caso de prueba: E58-GT-03.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignaciones Especiales NIIF sin que su antecesor ya se encuentre cargado en Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo REAL Especiales NIIF GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos Técnicos
2. 2- No deben estar cargados los archivos: Cuentas Contables y Centros de la parametrización de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' definidos en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Subcanal".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Método Subcanal",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado

---

## Escenario: E59-GT-01
**Descripcion:** Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en Parametrización de Gastos Técnicos

### Caso de prueba: E59-GT-01.1
- Implementado: No

**Titulo:** Carga de el archivo para Parametrización en Ramo que ya contenga información definido en el proceso Gastos Técnicos

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos Técnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Ramo GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. 5. Se levanta el modal con título "Recargar Ramo",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E59-GT-01.2
- Implementado: No

**Titulo:** Carga de el archivo para Parametrización en Cuentas Contables que ya contenga  información definido en el proceso Gastos Técnicos

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos Técnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Cuentas Contables GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. 5. Se levanta el modal con título "Recargar Cuentas Contables",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E59-GT-01.3
- Implementado: No

**Titulo:** Carga de el archivo para Parametrización en Centros que ya contenga  información definido en el proceso Gastos Técnicos

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos Técnicos
3. 3- que exista data cargada.
4. .

**Datos:**
- Archivo ''REAL Centros GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. 5. Se levanta el modal con título "Recargar Centros",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E59-GT-02
**Descripcion:** Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en Aprovisionamiento de Gastos Técnicos

### Caso de prueba: E59-GT-02.1
- Implementado: No

**Titulo:** Carga de el archivo para Aprovisionamiento en Exactus sin procesar que ya contenga  información definido en el proceso Gastos Técnicos

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos Técnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Exactus sin procesar GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. 5. Se levanta el modal con título "Recargar Exactus",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E59-GT-02.2
- Implementado: No

**Titulo:** Carga de el archivo para Aprovisionamiento en Driver Producto que ya contenga  información definido en el proceso Gastos Técnicos

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos Técnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Driver Producto GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. 5. Se levanta el modal con título "Recargar Driver Producto",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E59-GT-02.3
- Implementado: No

**Titulo:** Carga de el archivo para Aprovisionamiento en Driver Subcanal que ya contenga  información definido en el proceso Gastos Técnicos

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos Técnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Driver Subcanal GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. 5. Se levanta el modal con título "Recargar Driver Subcanal",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E59-GT-02.4
- Implementado: No

**Titulo:** Carga de el archivo para Aprovisionamiento en Unidad de Cuenta GT que ya contenga  información definido en el proceso Gastos Técnicos

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos Técnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Unidad de Cuenta GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. 5. Se levanta el modal con título "Recargar Unidad de Cuenta",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E59-GT-02.5
- Implementado: No

**Titulo:** Carga de el archivo para Aprovisionamiento en Maestro de Negocio y Embebidos que ya contenga  información definido en el proceso Gastos Técnicos

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos Técnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Maestro de Embebidos GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. 5. Se levanta el modal con título "Recargar Maestro de Negocio y Embebidos",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E59-GT-03
**Descripcion:** Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en Asignaciones de Gastos Técnicos

### Caso de prueba: E59-GT-03.1
- Implementado: No

**Titulo:** Carga de el archivo para Asignaciones en Método Subcanal que ya contenga información definido en el proceso Gastos Técnicos

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos Técnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Método Subcanal GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Subcanal".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. 5. Se levanta el modal con título "Recargar Método Subcanal",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E59-GT-03.2
- Implementado: No

**Titulo:** Carga de el archivo para Asignaciones en Método Producto que ya contenga información definido en el proceso Gastos Técnicos

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos Técnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Método Producto GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Producto".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. 5. Se levanta el modal con título "Recargar Método Producto",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E59-GT-03.3
- Implementado: No

**Titulo:** Carga de el archivo para Asignaciones en Especiales NIIF que ya contenga información definido en el proceso Gastos Técnicos

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos Técnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se muestra una alerta acompañada de la pregunta ¿Desea continuar con la carga?, el usuario presiona el botón ''Aceptar''
5. 5. Se levanta el modal con título "Recargar Especiales NIIF",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de éxito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?
2-aparece el mensaje ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E4-GT-01
**Descripcion:** Validación de la carga de los archivos en formato permitido en Parametrización de Gastos Técnicos

### Caso de prueba: E4-GT-01.1
- Implementado: No

**Titulo:** Carga de archivo Ramo definidos en el proceso de Parametrización de Gastos  Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- Archivo "REAL Ramos GT" definidos en el proceso de Parametrización de Gastos Técnicoscreo

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Ramo",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Ramo ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-01.1.1
- Implementado: No

**Titulo:** Funcionalidad botón subir nuevo archivo archivo Ramo definido en el proceso de Parametrización de Gastos  Técnicos en el formato permitido

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Que ya se haya cargado un archivo
2. 2- el usuario registrado tenga el rol Gestor de Gastos Técnicos
3. 3-Se debe haber creado una distribución para el período correspondiente

**Datos:**
- Archivo Líneas ''REAL Ramo GT'' definido en el proceso de Comunes

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Ramo", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?",  el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
6. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
7. 6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
8. 7. El usuario presiona " procesar archivo".
9. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Ramo ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-01.2
- Implementado: No

**Titulo:** Carga de archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos  Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente para el período
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- debe estar cargado el archivo de Ramo.

**Datos:**
- Archivo ''REAL Cuentas Contables GT'' definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-01.2.1
- Implementado: Si

**Titulo:** Funcionalidad botón subir nuevo archivo archivo Cuentas Contables definido en el proceso de Parametrización de Gastos  Técnicos en el formato permitido

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Que ya se haya cargado un archivo
2. 2- el usuario registrado tenga el rol de Administrador de Gastos
3. 3-Se debe haber creado una distribución para el período correspondiente

**Datos:**
- Archivo Líneas ''REAL Cuentas Contables GT'' definido en el proceso de Comunes

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?",  el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
6. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
7. 6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
8. 7. El usuario presiona " procesar archivo".
9. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-01.3
- Implementado: No

**Titulo:** Carga de archivo Centros definidos en el proceso de Parametrización de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- deben estar cargados los archivos de Comunes: Línea, Grupo producto, Canal y Subcanal.

**Datos:**
- Archivo ''REAL Centros GT'' definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Centros",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Centros ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-01.3.1
- Implementado: No

**Titulo:** Funcionalidad botón subir nuevo archivo archivo Centros definido en el proceso de Parametrización de Gastos  Técnicos en el formato permitido

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Que ya se haya cargado un archivo
2. 2- el usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3-Se debe haber creado una distribución para el período correspondiente

**Datos:**
- Archivo Líneas ''REAL Centros GT'' definido en el proceso de Comunes

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Centros", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?",  el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
6. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
7. 6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
8. 7. El usuario presiona " procesar archivo".
9. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Centros ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E4-GT-02
**Descripcion:** Validación de la carga de los archivos en formato permitido en Aprovisionamiento de Gastos Técnicos

### Caso de prueba: E4-GT-02.1
- Implementado: No

**Titulo:** Carga de archivo Exactus sin procesar definidos en el proceso de Aprovisionamiento de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- deben estar cargados los archivos: Cuentas Contables de Parametrización de GT y Líneas y Canal de Comunes.

**Datos:**
- Archivo ''REAL Exactus sin procesar GT'' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2.  El usuario selecciona de menú lateral "Aprovisionamiento"  > " Exactus".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar ''Exactus, el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar"" y selecciona el archivo a Recargar.
5. 5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Exactus ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-02.1.1
- Implementado: No

**Titulo:** Funcionalidad botón subir nuevo archivo Exactus  sin procesar definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo  correcto

**Precondiciones:**
1. 1-Que ya se haya cargado un archivo procesado
2. 2- el usuario registrado tenga el rol de Gestor de  Gastos Técnicos

**Datos:**
- Archivo Líneas ''REAL Exactus sin procesar GT'' definido en el proceso de Aprovisionamiento

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Centros".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar ''Centros", con el texto "Advertencia
5. Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?",  el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
6. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
7. 6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
8. 7. El usuario presiona " procesar archivo".
9. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Exactus ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-02.2
- Implementado: No

**Titulo:** Carga de archivo Driver Productos definidos en el proceso de Aprovisionamiento de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- debe estar cargado el archivo Grupo Producto.

**Datos:**
- Archivo ''REAL Driver Producto GT'' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento " > "Driver Productos''.
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Driver Productos,''el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Productos ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-02.2.1
- Implementado: No

**Titulo:** Carga de archivo Driver Productos definidos en el proceso de Aprovisionamiento de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL Driver Productos GT '' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento"  > " Driver Productos".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Driver Productos'', con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?",  el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Driver Productos ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-02.3
- Implementado: No

**Titulo:** Carga de archivo Driver Subcanal definidos en el proceso de Aprovisionamiento de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3-debe estar cargado el archivo Subcanal.

**Datos:**
- Archivo ''REAL Driver Subcanal GT'' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento " > "Driver Subcanal''.
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal'',el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Subcanal ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-02.3.1
- Implementado: No

**Titulo:** Carga de archivo Driver Subcanal  definidos en el proceso de Aprovisionamiento de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL Driver Subcanal GT '' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento"  > " Driver Subcanal ".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal '', con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?",  el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Driver Subcanal ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-02.4
- Implementado: No

**Titulo:** Carga de archivo Unidad de cuenta GT definidos en el proceso de Aprovisionamiento de Gastos Técnico en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- deben estar cargados los archivos: Ramo y Cuentas Contables de la parametrización de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Unidad de Cuenta GT '' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento " > "Unidad de cuenta GT.
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar ''Unidad de cuenta GT'' ,el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Unidad de cuenta GT ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-02.4.1
- Implementado: No

**Titulo:** Carga de archivo Unidad de cuenta GT  definidos en el proceso de Aprovisionamiento de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL Unidad de cuenta GT '' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento"  > " Unidad de cuenta GT ".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Unidad de cuenta GT '', con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?",  el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Unidad de cuenta GT ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-02.5
- Implementado: No

**Titulo:** Carga de archivo Maestro de Negocio y Embebidos definidos en el proceso de Aprovisionamiento de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- deben estar cargados los archivos: Línea, Grupo producto, Canal y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Maestro de Negocio y Embebidos GT'' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento " > "Maestro de Negocio y Embebidos.
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos'',el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra la información en el front de modal
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Maestro de Embebidos ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-02.5.1
- Implementado: No

**Titulo:** Carga de archivo Maestro de Negocio y Embebidos  definidos en el proceso de Aprovisionamiento de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL Maestro de Negocio y Embebidos GT '' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento"  > " Maestro de Negocio y Embebidos ".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos'', con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?",  el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Maestro de Negocio y Embebidos ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E4-GT-03
**Descripcion:** Validación de la carga de los archivos en formato permitido en Asignaciones de Gastos Técnicos

### Caso de prueba: E4-GT-03.1
- Implementado: No

**Titulo:** Carga de archivo Método Subcanal definidos en el proceso de Asignaciones de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- debe estar cargado el archivo: Driver Subcanal.

**Datos:**
- Archivo ''REAL Método Subcanal GT'' definidos en el proceso de Asignación de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones " > "Método Subcanal''.
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Método Subcanal'',el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Método Subcanal  ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-03.1.1
- Implementado: No

**Titulo:** Carga de archivo Método Subcanal  definidos en el proceso de Asignaciones de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL Método Subcanal GT'' definidos en el proceso de Asignación de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones "  > "Método Subcanal".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Método Subcanal'', con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?",  el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Método Subcanal ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-03.2
- Implementado: No

**Titulo:** Carga de archivo Método Producto definidos en el proceso de Asignaciones de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- debe estar cargado el archivo: Driver Producto.

**Datos:**
- Archivo ''REAL Método producto GT'' definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones " > "Método Producto''.
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Método Producto'',el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra la información en el front de modal
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Método Producto ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-03.2.1
- Implementado: No

**Titulo:** Carga de archivo Método Producto definidos en el proceso de Asignaciones de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL Método Producto GT'' definidos en el proceso de Asignación de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones "  > "Método Producto".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Método Producto'', con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?",  el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Método Producto ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-03.3
- Implementado: No

**Titulo:** Carga de archivo Especiales NIIF definidos en el proceso de Asignaciones de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- deben estar cargados los archivos: Cuentas Contables y Centros de la parametrización de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones " > "Especiales NIIF''.
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF'',el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Especiales NIIF ha sido cargado satisfactoriamente.Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E4-GT-03.3.1
- Implementado: No

**Titulo:** Carga de archivo Especiales NIIF definidos en el proceso de Asignaciones de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones "  > "Método Producto".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF'', con el texto "Advertencia Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?",  el botón Procesar archivo está deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botón procesar archivo queda habilitado y se muestra un nuevo botón ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. esté proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Especiales NIIF ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E5-GT-01
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad de proceso de  Parametrización de Gastos Técnicos

### Caso de prueba: E5-GT-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Ramo diferente al definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Ramo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Ramo a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Las cabeceras de archivo no coinciden con las esperadas. Verifique la plantilla.

---

### Caso de prueba: E5-GT-01.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Cuentas Contables diferente al definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.
3. 3- Debe estar cargado el archivo de Ramo.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Cuentas Contables a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Las cabeceras de archivo no coinciden con las esperadas. Verifique la plantilla.

---

### Caso de prueba: E5-GT-01.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Centros diferente al definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.
3. 3- Deben estar cargados los archivos de Comunes: Línea, Grupo producto, Canal y Subcanal.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Centros a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Las cabeceras de archivo no coinciden con las esperadas. Verifique la plantilla.

---

## Escenario: E5-GT-02
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad de proceso de Aprovisionamiento de Gastos Técnicos

### Caso de prueba: E5-GT-02.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad  Exactus sin procesar diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Exactus a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Las cabeceras de archivo no coinciden con las esperadas. Verifique la plantilla.

---

### Caso de prueba: E5-GT-02.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Driver Producto diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Driver Producto a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E5-GT-02.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Driver Subcanal diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Driver Subcanal a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E5-GT-02.4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Unidad de cuenta GT diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Unidad de cuenta GT", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Unidad de cuenta GT a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E5-GT-02.5
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Maestro de Negocio y Embebidos diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Maestro de Embebidos a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E5-GT-03
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad de  proceso de Asignaciones de Gastos Técnicos

### Caso de prueba: E5-GT-03.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignaciones de Métodos Subcanal definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de  Gestor de Gastos Técnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Métodos Subcanal".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Métodos Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Métodos Subcanal a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E5-GT-03.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Método Producto definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de  Gestor de Gastos Técnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Producto".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Método Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Método Producto a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E5-GT-03.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad de Especiales NIIF  definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de  Gestor de Gastos Técnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Especiales NIIF a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E6-GT-01
**Descripcion:** Validar la carga de un archivo con la estructura definida para el  proceso de Parametrización de Gastos Técnicos sin datos

### Caso de prueba: E6-GT-01.1
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Ramo de proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- Archivo "REAL Ramos GT" definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Ramo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Ramo sin datos a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-01.2
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Cuentas Contables de proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- Archivo "REAL Cuentas Contables GT" definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Cuentas Contables sin datos a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-01.3
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Centros de proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- Archivo "REAL Centros GT" definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Centros sin datos a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E6-GT-02
**Descripcion:** Validar la carga de un archivo con la estructura definida para el  proceso de Aprovisionamiento de Gastos Técnicos sin datos

### Caso de prueba: E6-GT-02.1
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Exactus sin Procesar de proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- Archivo "REAL Exactus GT" definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus ".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Exactus ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Exactus sin datos a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-02.2
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Driver Producto de proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- Archivo "REAL Driver Producto GT" definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Productos".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Drivers Productos sin datos a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-02.3
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Driver Subcanal de proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- Archivo "REAL Driver Subcanal GT" definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Drivers Subcanal sin datos a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-02.4
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Unidad de Cuenta GT de proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- Archivo "REAL Unidad de Cuenta GT" definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Unidad de cuenta GT", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Unidad de cuenta GT sin datos a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-02.5
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Maestro de Negocios y Embebidos de proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- Archivo "REAL Maestro de Negocio y Embebidos GT" definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocios y Embebidos".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo ''Real Maestro de Embebidos GT'' sin datos a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E6-GT-03
**Descripcion:** Validar la carga de un archivo con la estructura definida para el  proceso de Asignaciones de Gastos Técnicos sin datos

### Caso de prueba: E6-GT-03.1
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Métodos Subcanal de proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- Archivo "REAL Métodos Subcanal GT" definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Subcanal".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Método Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Drivers Subcanal sin datos a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-03.2
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Métodos Producto de proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos.

**Datos:**
- Archivo "REAL Métodos Producto GT" definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Métodos Producto".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Métodos Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Métodos Producto sin datos a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-03.3
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Especiales NIIF de proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos Técnicos.

**Datos:**
- Archivo Asignaciones ''REAL Especiales NIIF GT'' definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Especiales NIIF sin datos a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E8-GT-01
**Descripcion:** Validar la carga de un archivo con los datos incompletos en  Parametrización de Gastos Técnicos

### Caso de prueba: E8-GT-01.1
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Ramo definido en el  proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el período

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Ramo definido para el período
2. 2- usuario registrado tenga el rol de Gastos Técnicos

**Datos:**
- 1- Archivo Ramo definidos en el proceso de Gastos Técnicos
- 2- campos :
- 
- Código ramo: Obligatorio
- Descripción ramo: Obligatorio
- Rubro: Adicional

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona el botón ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar Ramo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-01.2
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Cuentas Contables definido en  el  proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el período

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Cuentas Contables definido para el período
2. 2- usuario registrado tenga el rol de Gastos Técnicos
3. 3- debe estar cargado el archivo de Ramo.

**Datos:**
- 1- Archivo Cuentas Contables definidos en el proceso de Gastos Técnicos
- 2- campos :
- 
- Cuenta Contable: Obligatorio
- Nombre Cuenta Contable: Obligatorio
- Código ramo: Obligatorio
- Tipo de cuenta: Adicional
- Tipo NIIF 17 CBR: Adicional
- NIIF 17 Atribuible: Obligatorio
- NIIF 17 Tipo: Obligatorio
- Código Concepto: Obligatorio
- Concepto N1: Obligatorio
- Concepto N2: Obligatorio
- Concepto N3: Obligatorio

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona el botón ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-01.3
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Centros definido en  el  proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el período

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Centros definido para el período
2. 2- usuario registrado tenga el rol de Gastos Técnicos
3. 3- deben estar cargados los archivos de Comunes: Línea, Grupo producto, Canal y Subcanal.

**Datos:**
- 1- Archivo Centros  definidos en el proceso de Gastos Técnicos
- 2- campos :
- 
- Negocio :Obligatorio
- Centro de Costo :Obligatorio
- Nombre Centro de Costo :Obligatorio
- Código Línea :Obligatorio
- Línea :Obligatorio
- Código Producto :Obligatorio
- Producto :Obligatorio
- Código de Canal :Obligatorio
- Canal :Obligatorio
- Código subcanal :Obligatorio
- Subcanal :Obligatorio
- Tipo :Obligatorio
- Tipo Emisión :Adicional
- Tipo Negocio :Adicional
- Tipo Producto :Adicional

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros ".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

## Escenario: E8-GT-02
**Descripcion:** Validar la carga de un archivo con los datos incompletos en Aprovisionamiento de Gastos Técnicos

### Caso de prueba: E8-GT-02.1
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Exactus sin Porcesar definido en el  proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Centros definidos
2. 2- Usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- 1- Archivo Exactus definidos en el proceso de Gastos Técnico
- 
- 2- campos :
- 
- ANOMES: Adicional
- Fecha: Adicional
- Negocio: Adicional
- Información: Adicional
- Contabilidad: Adicional
- Código lina: Adicional
- Ramo: Adicional
- Ramo directo: Adicional
- Riesgo: Adicional
- Rubro: Adicional
- Código grupo producto: Adicional
- Código producto: Adicional
- Código canal: Adicional
- Canal Distribución: Adicional
- Grupo canales: Adicional
- Grupo comercial: Adicional
- Código subcanal: Adicional
- Código agente: Adicional
- Agente: Adicional
- Código CAV: Adicional
- CAV: Obligatorio
- Código SEG: Obligatorio
- Código REG: Adicional
- SEG REG: Obligatorio
- CECO: Obligatorio
- Código Concepto: Obligatorio
- Cuenta: Obligatorio
- Código de moneda: Obligatorio
- Monto Dólares: Adicional
- Monto Soles: Adicional
- Indice manual o automático: Adicional
- Proceso: Adicional
- Fuente: Adicional
- Número de Póliza: Adicional
- Tipo Póliza: Adicional
- Nivel estandar: Adicional
- Tipo negocio: Adicional
- Gestor: Adicional
- Tipo documento: Adicional
- Número de documneto: Adicional
- Proceedor: Adicional
- Referencia: Adicional
- Partida: Adicional
- Código Fsro: Obligatorio
- Fuente 2: Adicional
- Fuente: Adicional
- Tipo de asiento: Obligatorio
- Estatus: Adicional
- Método GP: Obligatorio
- Método SC: Obligatorio
- Tipo día: Obligatorio
- NIT: Obligatorio
- Razón social: Obligatorio

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en  Gastos Técnicos .
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento " > "Exactus".
3. 3. El usuario presiona el botón ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-02.2
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para  Driver Producto  definido en el  proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Driver Producto definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- 1- Archivo Driver Producto  definidos en el proceso de Gastos Técnico
- 2- campos :
- 
- Código Método:Obligatorio
- Descripción Método:Obligatorio
- Código producto destino:Adicional
- Código producto:Obligatorio
- Nombre producto:Obligatorio
- Código línea:Obligatorio
- Línea:Obligatorio
- Factor:Obligatorio

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en  Gastos Técnicos .
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento " > "Driver Producto".
3. 3. El usuario presiona el botón ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-02.3
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para  Driver Subcanal  definido en el  proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Driver Subcanal definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- 1- Archivo Driver Subcanal definidos en el proceso de Gastos Técnico
- 
- 2- campos :
- 
- Código método: Obligatorio
- Método: Adicional
- Código canal: Obligatorio
- Nombre canal: Obligatorio
- Código subcanal: Adicional
- Nombre Subcanal: Adicional
- Factor: Obligatorio

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en  Gastos Técnicos .
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento " > " Driver Subcanal ".
3. 3. El usuario presiona el botón ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-02.4
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Unidad de cuenta GT definido en el  proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Unidad de cuenta GT  definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- 1- Archivo Unidad de cuenta GT  definidos en el proceso de Gastos Técnico
- 2- campos :
- Prioridad: Obligatorio
- Código Concepto: Adicional
- Moneda: Adicional
- Digito de Cuenta: Adicional
- Código Ramo: Adicional
- Producto: Adicional
- subcanal: Obligatorio
- Unidad de Cuenta: Obligatorio
- Factor: Obligatorio

**Pasos:**
1. -

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-02.5
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Maestro de Negocio y Embebidos definido en el  proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Maestro de Negocio y Embebidos  definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- 1- Archivo Maestro de Negocio y Embebidos  definidos en el proceso de Gastos Técnico
- 
- 2- campos :
- 
- Negocio: Obligatorio
- Línea: Obligatorio
- Producto: Obligatorio
- Canal: Adicional
- Subcanal: Adicional
- Embebido: Adicional
- Tipo Negocio: Adicional

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en  Gastos Técnicos .
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento " > "  Maestro de Negocio y Embebidos ".
3. 3. El usuario presiona el botón ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar  Maestro de Negocio y Embebidos ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

## Escenario: E8-GT-03
**Descripcion:** Validar la carga de un archivo con los datos incompletos en Asignación de Gastos Técnicos

### Caso de prueba: E8-GT-03.1
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Método Subcanal definido en el  proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Método Subcanal  definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- 1- Archivo Método Subcanal  definidos en el proceso de Gastos Técnico
- 
- 2- campos :
- 
- Negocio: Obligatorio
- Línea: Obligatorio
- Producto: Obligatorio
- Canal: Adicional
- Subcanal: Adicional
- Embebido: Adicional
- Tipo Negocio: Adicional

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en  Gastos Técnicos .
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento " > "  Método Subcanal ".
3. 3. El usuario presiona el botón ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar  Método Subcanal ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-03.2
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Método Producto en el  proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Método Subcanal  definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- 1- Archivo Método Subcanal  definidos en el proceso de Gastos Técnico
- 
- 2- campos :
- 
- Código Línea: Obligatorio
- Línea: Obligatorio
- Código Producto: Adicional
- Producto: Adicional
- Código Canal: Adicional
- Canal: Adicional
- Codsubcanal: Adicional
- Subcanal: Adicional
- Digito de cuenta: Adicional
- Método Valoración: Adicional
- Porcentaje: Obligatorio
- Tipo Distribución: Obligatorio
- NIIF 17 Atribuible: Adicional
- NIIF 17 Tipo: Adicional
- Concepto N1: Adicional
- Concepto N2: Adicional
- Código Concepto: Adicional
- CECO: Adicional

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en  Gastos Técnicos .
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento " > "  Método Subcanal ".
3. 3. El usuario presiona el botón ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar  Método Subcanal ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-03.3
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Especiales NIIF en el  proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Especiales NIIF  definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos Técnicos

**Datos:**
- 1- Archivo preparado a partir de archivo para Especiales NIIF  definido
- 
- 2- campos :
- 
- Código Concepto: Obligatorio
- Código Ramo: Obligatorio
- Código línea: Obligatorio
- Línea: Obligatorio
- Código Canal: Obligatorio
- Código Método: Obligatorio

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en  Gastos Técnicos .
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento " > "  Especiales NIIF ".
3. 3. El usuario presiona el botón ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar  Especiales NIIF ", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos

---

## Escenario: E61-GT-01
**Descripcion:** Validar  que no se cargue un archivo de más de 30 Mb en la Parametrización de Gastos Técnicos

### Caso de prueba: E61-GT-01.1
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Ramo definido en la parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso para el período

**Precondiciones:**
1. 1- El archivo Ramo debe exceder el tamaño máximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos Técnicos.

**Datos:**
- Archivo ''REAL Ramo GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Ramo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

### Caso de prueba: E61-GT-01.2
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Cuentas Contables definido en la parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso para el período

**Precondiciones:**
1. 1- El archivo Cuentas Contables debe exceder el tamaño máximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos Técnicos.

**Datos:**
- Archivo ''REAL Cuentas Contables GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

### Caso de prueba: E61-GT-01.3
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Centros definido en en la parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso para el período

**Precondiciones:**
1. 1- El archivo Centros debe exceder el tamaño máximo permitido
2. 2- el usuario registrado tenga el rol de Administrador de Gastos o
3. Gestor de Gastos Técnicos.

**Datos:**
- Archivo ''REAL Centros GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros ".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

## Escenario: E61-GT-02
**Descripcion:** Validar que no se cargue un archivo de más de 30 Mb en Aprovisionamiento de Gastos Técnicos

### Caso de prueba: E61-GT-02.1
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Exactus sin procesar de Aprovisionamiento definido en el proceso de Gastos Técnicos

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Exactus debe exceder el tamaño máximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos Técnicos.

**Datos:**
- Archivo ''REAL Exactus sin procesar'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

### Caso de prueba: E61-GT-02.2
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Driver Producto de Aprovisionamiento definido en el proceso de Gastos Técnicos

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Driver Producto procesado debe exceder el tamaño máximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos Técnicos.

**Datos:**
- Archivo ''REAL Driver Producto GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

### Caso de prueba: E61-GT-02.3
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Driver Subcanal  de Aprovisionamiento definido en el proceso de Gastos Técnicos

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Driver Subcanal procesado debe exceder el tamaño máximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos Técnicos.

**Datos:**
- Archivo ''REAL Driver Subcanal GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

### Caso de prueba: E61-GT-02.4
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Unidad de cuenta GT de Aprovisionamiento definido en el proceso de Gastos Técnicos

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Unidad de cuenta GT procesado debe exceder el tamaño máximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos Técnicos.

**Datos:**
- Archivo ''REAL Unidad de cuenta GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Unidad de cuenta GT", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

### Caso de prueba: E61-GT-02.5
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Maestro de Negocio y Embebidos de Aprovisionamiento definido en el proceso de Gastos Técnicos

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Maestro de Negocio y Embebidos procesado debe exceder el tamaño máximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos Técnicos.

**Datos:**
- Archivo ''REAL Maestro de Negocio y Embebidos GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

## Escenario: E61-GT-03
**Descripcion:** Validar que no se cargue un archivo de más de 30 Mb en Asignaciones de Gastos Técnicos

### Caso de prueba: E61-GT-03.1
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Métodos Subcanal de Asignaciones definido en el proceso de Gastos Técnicos

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Métodos Subcanal procesado debe exceder el tamaño máximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos Técnicos.

**Datos:**
- Archivo ''REAL Métodos Subcanal GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Métodos Subcanal".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Métodos Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

### Caso de prueba: E61-GT-03.2
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Métodos Producto de Asignaciones definido en el proceso de Gastos Técnicos

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Métodos Producto procesado debe exceder el tamaño máximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos Técnicos.

**Datos:**
- Archivo ''REAL Métodos Producto GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Métodos Producto".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Métodos Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

### Caso de prueba: E61-GT-03.3
- Implementado: No

**Titulo:** Validar la carga de archivo de más de 30 mb de peso para Especiales NIIF de Asignaciones definido en el proceso de Gastos Técnicos

**Descripcion:** Validar la carga de archivo de más de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Especiales NIIF procesado debe exceder el tamaño máximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos Técnicos.

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botón ¨Recargar¨,
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.

---

## Escenario: E70-GT-01
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga de archivo en el proceso de Parametrización de flujo de Gastos Técnicos

### Caso de prueba: E70-GT-01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Ramo de la Parametrización de Gastos Técnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Ramo

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo REAL Ramo GT debe estar disponible
3. 3- Reglas de negocio y formato para esté archivo
4. -Los campos código ramo y descriçión son obligatorios
5. -Un Ramo puede tener múltiples Rubros
6. -El CodRamo debe ser un valor de 1 o 2 posiciones, que pueden ser números o letras
7. - Se acepta el valor especial 'SIN RAMO'.
8. - Si el CodRamo de entrada tiene 1 Solo dígito, el sistema debe añadir un '0' a la izquierda para estandarizar a un formato de 2 dígitos (ej. '7' se convierte en '07').

**Datos:**
- Archivo ''REAL Ramos GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Ramo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Ramo GT preparado para la carga con los casos a validar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Cuentas Contables de la Parametrización de Gastos Técnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Cuentas Contables

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo REAL Cuentas Contables GT debe estar disponible
3. 3- Reglas de negocio y formato para esté archivo
4. -Los campos Código cuenta contable, Descripción cuenta contable, NIIF 17 Atribuible, NIIF 17 Tipo, Concepto, Concepto N1, Concepto N2, Concepto N3 son obligatorios
5. -Los valores de código Cuenta Contable  debe ser único
6. -El Código de Ramo debe estar creado en el maestro de Ramo
7. -NIIF 17 Tipo: Valores permitidos: 'GM' (Gastos de Mantenimiento) o 'GA' (Gastos de Adquisición).
8. -La cuenta contable Los 2 primeros dígitos deben ser 46,47,56,57 el 3er dígito 1 o 2; el 4to dígito entre 0 y 9 o una letra; y los bloques siguientes entre 01 y 99 o la combinación de letras, por ejemplo OO

**Datos:**
- Archivo ''REAL Cuentas Contables GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Cuentas Contables GT preparado para la carga con los casos a validar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Centros de la Parametrización de Gastos Técnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Centros

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo REAL Centros GT debe estar disponible
3. 3- Reglas de negocio y formato para esté archivo
4. -Los campos Negocio, Centro de Costo, Nombre Centro de costo, Nombre Línea, Nombre producto, Nombre canal, Nombre subcanal, Tipo son obligatorios
5. -Las Línea, Producto, Canal y Subcanal deben estar creados en su catálogo
6. -El Negocio debe ser PPS o PVI; otros valores son rechazados.
7. -Cuando el Centro es de tipo DIRECTO, debe existir una combinación válida de Línea, Producto, Canal y Subcanal en los catálogos maestros.
8. - Cuando el campo TIPO viene vacío, el Centro NO se considera DIRECTO.
9. - Los catálogos maestros de Línea, Producto, Canal y Subcanal se encuentran previamente configurados, activos y con sus relaciones jerárquicas definidas (Producto–Línea y Subcanal–Canal)

**Datos:**
- Archivo ''REAL Centros GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Centros GT preparado para la carga con los casos a validar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: E70-GT-02
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga de archivo en el  proceso de  Aprovisionamiento de Gastos Técnicos

### Caso de prueba: E70-GT-02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Exactus sin Procesar de la Aprovisionamiento de Gastos Técnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Exactus

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo REAL Exactus GT debe estar disponible
3. 3- Reglas de negocio y formato para esté archivo

**Datos:**
- Archivo ''REAL Exactus sin procesar GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Exactus GT preparado para la carga con los casos a validar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-02.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Driver Producto de la Aprovisionamiento de Gastos Técnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Driver Producto

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo REAL Driver Producto GT debe estar disponible
3. 3- Reglas de negocio y formato para esté archivo
4. -Los campos Codigo Método, descripción Método, Codigo producto, Nombre Producto, Codigo línea, línea y Factor son obligatorisos
5. -Los catálogos maestros de Línea, Producto  se encuentran previamente configurados y activos
6. -El factor permite 10 caracteres nùmericos, Pueden ser hasta 4 decimales, Acepta valor 0, Acepta enteros sin decimales, Acepta valores negativos

**Datos:**
- Archivo ''REAL Driver Producto GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Driver Producto GT preparado para la carga con los casos a validar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-02.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Driver Subcanal de la Aprovisionamiento de Gastos Técnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Driver Subcanal

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo REAL Driver Subcanal GT debe estar disponible
3. 3- Reglas de negocio y formato para esté archivo
4. -Los campos Codigo Método, Codigo Canal, Nombre Canal y Factor son Obligatorios
5. -Los catálogos maestros de Canal, Subcanal  se encuentran previamente configurados y activos
6. -El factor permite 10 caracteres nùmericos, Pueden ser hasta 4 decimales, Acepta valor 0, Acepta enteros sin decimales, Acepta valores negativos

**Datos:**
- Archivo ''REAL Driver Subcanal GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Driver Subcanal GT preparado para la carga con los casos a validar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-02.4
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Unidad de Cuenta GT de la Aprovisionamiento de Gastos Técnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Unidad de Cuenta GT

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo REAL Unidad de Cuenta GT GT debe estar disponible
3. 3- Reglas de negocio y formato para esté archivo
4. -Los campos Prioridad, Unidad de Cuenta y factor son obligatorios
5. -Los campos Unidad de Cuenta, Ramo, Producto y Subcanal deben existir y estar previamente registrados en sus respectivos catálogos maestros.
6. -El campo Prioridad debe contener un valor numérico entre 1 y 4.
7. -El Código de Concepto exista en el catálogo de conceptos dentro de " Cuentas Contables"
8. - Para un mismo registro con el mismo Código de Concepto, Producto y Subcanal, la Unidad de Cuenta debe ser única y la suma de sus factores debe ser igual a 1.
9. -El valor de campo Dígito de la Cuenta debe ser 44 o 54, que corresponden a las cuentas contables aplicables para Gastos Técnicos. En caso contrario,debe mostrar un mensaje de error y no permitir el registro.
10. -EL valor de Factor debe esatr entre 0 y 1

**Datos:**
- Archivo ''REAL Unidad de Cuenta GT GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Unidad de Cuenta GT", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Unidad de Cuenta GT GT preparado para la carga con los casos a validar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-02.5
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Maestro de Negocio y Embebido de la Aprovisionamiento de Gastos Técnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Maestro de Negocio y Embebido

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo REAL Maestro de Negocio y Embebido GT debe estar disponible
3. 3- Reglas de negocio y formato para esté archivo
4. -Los campos Negocio, Línea, Producto son obligatorios
5. -Se debe validar que los valores de Línea, Producto, Canal y Subcanal existan en sus respectivos catálogos maestros. Además, se debe verificar que el Producto esté asociado a la Línea y que el Subcanal esté asociado al Canal correspondiente.
6. -Los campos Embebidos y Tipo de Negocio son excluyentes: si Embebidos tiene valor, Tipo de Negocio debe estar vacío, y viceversa.

**Datos:**
- Archivo ''REAL Maestro Embebido GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebido".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebido", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Maestro de Negocio y Embebido GT preparado para la carga con los casos a validar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: E70-GT-03
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga de archivo en el  proceso de  Asignaciones de Gastos  Técnicos

### Caso de prueba: E70-GT-03.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Método Subcanal de la Asignación de Gastos Técnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Método Subcanal

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo REAL Método Subcanal GT debe estar disponible
3. 3- Reglas de negocio y formato para esté archivo
4. -Todos los campos son obligatorios
5. -El Código de Concepto, Ramo, Línea, Producto, Canal y Método debe estar previamente configurado en sus catálogos
6. -Los campos son obligatorios
7. -Debe existir correspondencia válida entre Código de Línea y Nombre de Línea, así como entre Código de Producto y Nombre de Producto.
8. -Debe existir una relación válida entre la Línea y el Producto (el Producto debe estar asociado a la Línea correspondiente).
9. -La combinación de los campos Código de Concepto, Código de Ramo, Código de Línea, Línea, Código de Grupo de Producto, Grupo de Producto, Código de Canal y Código de Método debe ser única. No se permite registrar más de un registro con la misma combinación de estos valores.

**Datos:**
- Archivo ''REAL Método Subcanal GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignación" > "Método Subcanal".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Método Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Método Subcanal GT preparado para la carga con los casos a validar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-03.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Especiales NIIF de la Asignación de Gastos Técnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Especiales NIIF

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo REAL Especiales NIIF GT debe estar disponible
3. 3- Reglas de negocio y formato para esté archivo
4. -El Código de Concepto, Línea, Producto, Canal, Subcanal y Método debe estar previamente configurado en sus catálogos
5. -Deben existir datos válidos y activos en los catálogos de Líneas, Productos, Canales, Subcanales, Conceptos y Centros de Costo
6. -Los campos Código Línea, Línea, Porcentaje y Tipo Distribución son abligatorios.
7. MM

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignación" > "Especiales NIIF".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Especiales NIIF GT preparado para la carga con los casos a validar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-03.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Método Producto de la Asignación de Gastos Técnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Método Producto

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo REAL Método Producto GT debe estar disponible
3. 3- Reglas de negocio y formato para esté archivo
4. -Todos los campos son obligatorios
5. -El Código de Concepto, Ramo, Línea, Producto, Canal y Método debe estar previamente configurados en sus catálogos
6. -Debe existir correspondencia válida entre Código de Línea y Nombre de Línea
7. -La combinación Código de Concepto, Código de Ramo, Código de Línea, Línea, Código de Canal y Código de Método no debe repetirse.

**Datos:**
- Archivo ''REAL Método Producto GT'' preparado para la prueba en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignación" > "Método Producto".
3. 3. El usuario presiona el botón "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Método Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Método Producto GT preparado para la carga con los casos a validar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catálogo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botón ''Descargar errores'' y al dar clic sobre él descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: E9-GT-01
**Descripcion:** Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de Parametrización de Gastos Técnicos

### Caso de prueba: E9-GT-01.1
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Ramo definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Ramo cargado

**Precondiciones:**
1. La carga exitosa de archivo Ramo ''REAL Ramo GT''

**Datos:**
- Archivo Ramo ''REAL Ramo GT'' definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Ramo",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-01.2
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Cuentas Contables cargado

**Precondiciones:**
1. La carga exitosa de archivo Cuentas Contables ''REAL Cuentas Contables GT''

**Datos:**
- Archivo Cuentas Contables ''REAL Cuentas Contables GT'' definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-01.3
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Centros definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Centros cargado

**Precondiciones:**
1. La carga exitosa de archivo Centros ''REAL Centros GT''

**Datos:**
- Archivo Centros ''REAL Centros GT'' definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Centros",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: E9-GT-02
**Descripcion:** Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de  Aprovisionamiento de Gastos Técnicos

### Caso de prueba: E9-GT-02.1
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Exactus sin procesar definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Exactus cargado

**Precondiciones:**
1. La carga exitosa de archivo Exactus ''REAL Exactus sin procesar GT''

**Datos:**
- Archivo Centros ''REAL Exactus sin procesar GT'' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus ".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Exactus ",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-02.2
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Driver Producto definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Driver Producto cargado

**Precondiciones:**
1. La carga exitosa de archivo Driver Producto ''REAL Driver Producto GT''

**Datos:**
- Archivo Driver Producto ''REAL Driver Producto GT'' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Driver Producto",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-02.3
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Driver Subcanal definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Driver Subcanal cargado

**Precondiciones:**
1. La carga exitosa de archivo Driver Subcanal ''REAL Driver Subcanal GT''

**Datos:**
- Archivo Driver Subcanal ''REAL Driver Subcanal GT'' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-02.4
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Unidad de cuenta GT definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Unidad de cuenta GT cargado

**Precondiciones:**
1. La carga exitosa de archivo Unidad de cuenta GT ''REAL Unidad de Cuenta GT''

**Datos:**
- Archivo Unidad de cuenta GT ''REAL Unidad de Cuenta GT'' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Unidad de cuenta GT",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-02.5
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Maestro de Negocio y Embebidos definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Maestro de Embebidos cargado

**Precondiciones:**
1. La carga exitosa de archivo Maestro de Embebidos ''REAL Maestro de Negocio y Embebidos GT''

**Datos:**
- Archivo Maestro de Embebidos ''REAL Maestro de Negocio y Embebidos GT'' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Maestro de  Negocios y Embebidos",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: E9-GT-03
**Descripcion:** Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de  Asignaciones de Gastos  Técnicos

### Caso de prueba: E9-GT-03.1
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Método Subcanal definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Método Subcanal cargado

**Precondiciones:**
1. La carga exitosa de archivo Método Subcanal ''REAL Método Subcanal GT''

**Datos:**
- Archivo Método Subcanal ''REAL Método Subcanal GT'' definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones " > "Método Subcanal".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Método Subcanal",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-03.2
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Método Producto definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Método Producto cargado

**Precondiciones:**
1. La carga exitosa de archivo Método Producto ''REAL Método Producto GT''

**Datos:**
- Archivo Método Producto ''REAL Método Producto GT'' definido en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones " > "Método Producto".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Método Producto",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-03.3
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Especiales NIIF definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Especiales NIIF cargado

**Precondiciones:**
1. La carga exitosa de archivo Especiales NIIF ''REAL Especiales NIIF GT''

**Datos:**
- Archivo Especiales NIIF ''REAL Especiales NIIF GT'' definido en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones " > "Especiales NIIF".
3. 3. El usuario presiona botón Recargar.
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: E10-GT-01
**Descripcion:** Validar la correcta ejecución de flujo de descarga en Parametrización de Gastos Técnicos

### Caso de prueba: E10-GT-01.1
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Ramo definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Ramo definido en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-01.2
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Cuentas Contables definido en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-01.3
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Centros definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Centros definido en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros ".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E10-GT-02
**Descripcion:** Validar la correcta ejecución de flujo de descarga en Aprovisionamiento de Gastos Técnicos

### Caso de prueba: E10-GT-02.1
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Exactus sin procesar definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Exactus sin procesar definido en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-02.2
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Driver Producto definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Driver Producto definido en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-02.3
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Driver Subcanal definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Driver Subcanal definido en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal ".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-02.4
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Unidad de cuenta GT definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Unidad de cuenta GT definido en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-02.5
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Maestro de Negocio y Embebidos definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Maestro de Embebidos definido en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E10-GT-03
**Descripcion:** Validar la correcta ejecución de flujo de descarga en Asignaciones de Gastos Técnicos

### Caso de prueba: E10-GT-03.1
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Método Subcanal definidos en el proceso de Asignación de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Método Subcanal definido en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Método Subcanal".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-03.2
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Método Producto definidos en el proceso de Asignación de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Método Producto definido en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Método Producto".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-03.3
- Implementado: No

**Titulo:** Validar la correcta ejecución de flujo de descargas de archivo Especiales NIIF  definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución de flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Especiales NIIF definido en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Especiales NIIF".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E11-GT-01
**Descripcion:** Validar que el archivo descargado en el  proceso de Parametrización de Gastos Técnicos muestre los datos correctamente y no tenga perdida de información

### Caso de prueba: E11-GT-01.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Ramo de proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de archivo Ramo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Ramo definido en el proceso de Parametrización de Gastos Técnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3.  El usuario presiona el botón "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-01.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Cuentas Contables de proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de archivo Cuentas Contables descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Cuentas Contables definido en el proceso de Parametrización de Gastos Técnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3.  El usuario presiona el botón "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-01.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Centros de proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de archivo Centros descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Centros definido en el proceso de Parametrización de Gastos Técnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros ".
3. 3.  El usuario presiona el botón "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E11-GT-02
**Descripcion:** Validar que el archivo descargado en el  proceso de Aprovisionamiento de Gastos Técnicos muestre los datos correctamente y no tenga perdida de información

### Caso de prueba: E11-GT-02.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Exactus sin Procesar de proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de archivo Centros descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Exactus definido en el proceso de Aprovisionamiento de Gastos Técnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3.  El usuario presiona el botón "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-02.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Driver Producto de proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Driver Producto definido en el proceso de Aprovisionamiento de Gastos Técnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3.  El usuario presiona el botón "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-02.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Driver Subcanal  de proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Driver Subcanal definido en el proceso de Aprovisionamiento de Gastos Técnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3.  El usuario presiona el botón "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-02.4
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Unidad de cuenta GT  de proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Unidad de cuenta GT definido en el proceso de Aprovisionamiento de Gastos Técnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3.  El usuario presiona el botón "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-02.5
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Maestro de Negocio y Embebidos de proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Maestro de Negocio y Embebidos definido en el proceso de Aprovisionamiento de Gastos Técnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3.  El usuario presiona el botón "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E11-GT-03
**Descripcion:** Validar que el archivo descargado en el  proceso de Asignaciones de Gastos Técnicos muestre los datos correctamente y no tenga perdida de información

### Caso de prueba: E11-GT-03.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Método Subcanal definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Método Subcanal definidos en el proceso de Asignaciones de Gastos Técnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Subcanal ".
3. 3.  El usuario presiona el botón "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-03.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Especiales NIIF definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Especiales NIIF definidos en el proceso de Asignaciones de Gastos Técnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Especiales NIIF".
3. 3.  El usuario presiona el botón "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas. 
2-Validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-03.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asignaciones de Método Producto definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Método Producto definidos en el proceso de Asignaciones de Gastos Técnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Producto".
3. 3.  El usuario presiona el botón "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E71-GT-01
**Descripcion:** Validación de la carga de los archivos descargados en Parametrización de Gastos Técnicos

### Caso de prueba: E71-GT-01.1
- Implementado: No

**Titulo:** Validar la carga de archivo de Ramo descargado en la parametrización de Gastos Técnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para está pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo Ramo debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Ramos GT'' descargado en el proceso de descarga de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona el botón ¨Descargar¨,
4. 4. El usuario presiona el botón ¨Recargar¨,
5. 5. Se levanta el modal con título "Recargar Ramo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Ramo ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E71-GT-01.2
- Implementado: No

**Titulo:** Validar la carga de archivo de Cuentas Contables descargado en la parametrización de Gastos Técnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para está pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo Cuentas Contables debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Cuentas Contables GT'' descargado en el proceso de descarga de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona el botón ¨Descargar¨,
4. 4. El usuario presiona el botón ¨Recargar¨,
5. 5. Se levanta el modal con título "Recargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E71-GT-01.3
- Implementado: No

**Titulo:** Validar la carga de archivo de Centros descargado en la parametrización de Gastos Técnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para está pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo Centros debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Centros GT'' descargado en el proceso de descarga de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona el botón ¨Descargar¨,
4. 4. El usuario presiona el botón ¨Recargar¨,
5. 5. Se levanta el modal con título "Recargar Centros", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Centros  ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E71-GT-02
**Descripcion:** Validación de la carga de los archivos descargados en Aprovisionamiento de Gastos Técnicos

### Caso de prueba: E71-GT-02.1
- Implementado: No

**Titulo:** Validar la carga de archivo de Exactus sin Procesar descargado en la parametrización de Gastos Técnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para está pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo Exactus debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Exactus sin procesar GT'' descargado en el proceso de descarga de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botón ¨Descargar¨,
4. 4. El usuario presiona el botón ¨Recargar¨,
5. 5. Se levanta el modal con título "Recargar Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Exactus  ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E71-GT-02.3
- Implementado: No

**Titulo:** Validar la carga de archivo de Driver Producto descargado en la parametrización de Gastos Técnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo Driver Producto debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Driver Producto GT'' descargado en el proceso de descarga de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botón ¨Descargar¨,
4. 4. El usuario presiona el botón ¨Recargar¨,
5. 5. Se levanta el modal con título "Recargar Driver Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Driver Producto  ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E71-GT-02.4
- Implementado: No

**Titulo:** Validar la carga de archivo de Driver Subcanal descargado en la parametrización de Gastos Técnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo Driver Subcanal debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Driver Subcanal GT'' descargado en el proceso de descarga de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botón ¨Descargar¨,
4. 4. El usuario presiona el botón ¨Recargar¨,
5. 5. Se levanta el modal con título "Recargar Driver Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Driver Subcanal  ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E71-GT-02.5
- Implementado: No

**Titulo:** Validar la carga de archivo de Unidad de Cuenta GT descargado en la parametrización de Gastos Técnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo Unidad de Cuenta GT debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Unidad de Cuenta GT GT'' descargado en el proceso de descarga de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. El usuario presiona el botón ¨Descargar¨,
4. 4. El usuario presiona el botón ¨Recargar¨,
5. 5. Se levanta el modal con título "Recargar Unidad de Cuenta GT", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Unidad de Cuenta GT  ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E71-GT-02.6
- Implementado: No

**Titulo:** Validar la carga de archivo de Maestro de Negocio y Embebidos descargado en la parametrización de Gastos Técnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo Maestro de Negocio y Embebidos debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Maestro Embebido GT'' descargado en el proceso de descarga de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona el botón ¨Descargar¨,
4. 4. El usuario presiona el botón ¨Recargar¨,
5. 5. Se levanta el modal con título "Recargar Maestro de Negocio y Embebidos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.

El archivo Real Maestro de Negocio y Embebidos  ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E71-GT-03
**Descripcion:** Validación de la carga de los archivos descargados en Asignaciones de Gastos Técnicos

### Caso de prueba: E71-GT-03.1
- Implementado: No

**Titulo:** Validar la carga de archivo de Método Subcanal descargado en la parametrización de Gastos Técnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo Método Subcanal debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Método Subcanal GT'' descargado en el proceso de descarga de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Subcanal".
3. 3. El usuario presiona el botón ¨Descargar¨,
4. 4. El usuario presiona el botón ¨Recargar¨,
5. 5. Se levanta el modal con título "Recargar Método Subcanal", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Método Subcanal  ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E71-GT-03.2
- Implementado: No

**Titulo:** Validar la carga de archivo de Especiales NIIF descargado en la parametrización de Gastos Técnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo Especiales NIIF debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' descargado en el proceso de descarga de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botón ¨Descargar¨,
4. 4. El usuario presiona el botón ¨Recargar¨,
5. 5. Se levanta el modal con título "Recargar Especiales NIIF", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Especiales NIIF  ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

### Caso de prueba: E71-GT-03.3
- Implementado: No

**Titulo:** Validar la carga de archivo de Método Producto descargado en la parametrización de Gastos Técnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos Técnicos
2. 2- El archivo Método Producto debe haberse descargado anteriormente en el flujo de está pantalla.

**Datos:**
- Archivo ''REAL Método Producto GT'' descargado en el proceso de descarga de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Producto".
3. 3. El usuario presiona el botón ¨Descargar¨,
4. 4. El usuario presiona el botón ¨Recargar¨,
5. 5. Se levanta el modal con título "Recargar Método Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Método Producto  ha sido cargado satisfactoriamente. Con el mensaje  ¡Listo! El archivo se cargó correctamente.

---

## Escenario: E35-GT-01
**Descripcion:** Validar que el sistema pueda agregar un nuevo registro en el  flujo de Gastos Técnicos

### Caso de prueba: E35-GT-01.01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Ramos definido en la Parametrización de  flujo de Gastos Técnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Ramo" de Ramo

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3- Los campos código ramo y descriçión son obligatorios
4. 4- Los valores de código Ramo es único.
5. 5- Un Ramo puede tener múltiples Rubros
6. 6-Código Ramo: -El CodRamo debe ser un valor de 1 o 2 posiciones, que pueden ser números o letras - Se acepta el valor especial 'SIN RAMO'. - Si el CodRamo de entrada tiene 1 Solo dígito, el sistema debe añadir un '0' a la izquierda para estandarizar a un formato de 2 dígitos (ej. '7' se convierte en '07').

**Datos:**
- Campos de formulario
- 
- Código de Ramo: [12 o SIN RAMO]
- Descripción de Ramo: Texto. Ej: INCENDIO
- Rubro Texto, Ej: Líneas ALIADAS INCENDIO

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Ramo".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de éxito ¡Hecho! El registro se agregó sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Cuentas Contables definido en la Parametrización de  flujo de Gastos Técnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Cuenta Contable" de Cuenta Contable

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3- Los campos Código cuenta contable, Descripción cuenta contable, NIIF 17 Atribuible, NIIF 17 Tipo, Concepto, Concepto N1, Concepto N2, Concepto N3 son obligatorios
4. 4- Los valores de código Cuenta Contable  debe ser único
5. 5- El Código de Ramo debe estar creado en el maestro de Ramo
6. 6-NIIF 17 Tipo: Valores permitidos: 'GM' (Gastos de Mantenimiento) o 'GA' (Gastos de Adquisición).
7. 7- La cuenta contable Los 2 primeros dígitos deben ser 46,47,56,57 el 3er dígito 1 o 2; el 4to dígito entre 0 y 9 o una letra; y los bloques siguientes entre 01 y 99 o la combinación de letras, por ejemplo OO

**Datos:**
- Campos de formulario
- 
- - Cuenta Contable: Alfanumérico y puntos Ej: 46.1.7.40.09.10, 47.1.7.40.09.10
- - Nombre Cuenta Contable: Texto. Ej: BONOS ASESORES - PROV. ESSALUD
- - Código ramo: Se selecciona el Código ramo correspondiente [01, 44]
- - Tipo de cuenta:  Se selecciona el tipo de cuenta correspondiente [MT, RT, IF, GG]
- - Tipo NIIF 17 CBR: Se selecciona el Tipo NIIF 17 CBR  [GS, GI]
- - NIIF 17 Atribuible: Se selecciona el  NIIF 17 Atribuible correspondiente [Atribuible, No Atribuible]
- - NIIF 17 Tipo: Se selecciona el NIIF 17 Tipo correspondiente  [GM,GA]
- - Código Concepto:  NN.NN.NN  Ej: 10.01.05, 10.14.00
- - Concepto N1: Texto Ej: Egresos Técnicos netos
- - Concepto N2: Texto. Ej; Compras
- - Concepto N3: Texto. Ej: Seguro Social

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Cuentas Contables".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de éxito ¡Hecho! El registro se agregó sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Centros definido en la Parametrización de  flujo de Gastos Técnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Centros" de Centros

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3- Los campos Negocio, Centro de Costo, Nombre Centro de costo, Nombre Línea, Nombre producto, Nombre canal, Nombre subcanal, Tipo son obligatorios
4. 4- Las Línea, Producto, Canal y Subcanal deben estar creados en su catálogo
5. 5- El Negocio debe ser PPS o PVI; otros valores son rechazados.
6. 6- Cuando el Centro es de tipo DIRECTO, debe existir una combinación válida de Línea, Producto, Canal y Subcanal en los catálogos maestros.
7. 7- Todos los códigos de Línea, Producto, Canal y Subcanal deben existir en catálogo.
8. 8- Cuando el campo TIPO viene vacío, el Centro NO se considera DIRECTO.
9. 9- Los catálogos maestros de Línea, Producto, Canal y Subcanal se encuentran previamente configurados, activos y con sus relaciones jerárquicas definidas (Producto–Línea y Subcanal–Canal).

**Datos:**
- Campos de formulario
- 
- - Negocio: Se selecciona el Negocio Correspondiente [PPS, PVI]
- - Centro de Costo: Se selecciona el centro de costos correspondiente
- - Nombre Centro de Costo: Se autocompleta según el centro de costo
- - Código línea: Se selecciona el Código Línea correspondiente  EJ: SEPE, VGRP
- - Línea: Se autocompleta según el Código seleccionado
- - Código producto: Se selecciona el Código Producto correspondiente EJ: SEPE001, VGRP001
- - Producto: Se autocompleta según el Código seleccionado
- - Código canal: Se selecciona el Código Canal correspondiente EJ: COR, CCO
- - Canal: Se autocompleta según el Código seleccionado
- - Código subcanal: Se selecciona el Código Subcanal correspondiente Ej: COR004,CCO006
- - Subcanal: Se autocompleta según el Código seleccionado
- - Tipo: Se selecciona el tipo correspondiente: [DIRECTOS, INDIRECTOS]
- - Tipo emisión: Se selecciona el tipo de emisión correspondiente:[DIGITAL, TRADICIONAL]
- - Tipo negocio:Se selecciona el tipo de negocio correspondiente:[PERSONA, EMPRESA]
- - Tipo producto: Se selecciona el tipo correspondiente: [MODULAR, NO MODULAR]

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Centros".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de éxito ¡Hecho! El registro se agregó sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Unidad de cuenta GT  definido en el Aprovisionamiento de  flujo de Gastos Técnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Unidad de cuenta GT" de Unidad de cuenta GT

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3- El campo Prioridad es obligatorio
4. 4- Los campos Unidad de Cuenta, Ramo, Producto y Subcanal deben existir y estar previamente registrados en sus respectivos catálogos maestros.
5. 5- En el valor de factor debe usarse punto para indicar decimales.
6. 6- El campo Prioridad es obligatorio y debe contener un valor numérico entre 1 y 4.
7. 7- El Código de Concepto exista en el catálogo de conceptos dentro de " Cuentas Contables"
8. 8- Para un mismo registro con el mismo Código de Concepto, Producto y Subcanal, la Unidad de Cuenta debe ser única y la suma de sus factores debe ser igual a 1.
9. 9. El valor de campo Dígito de la Cuenta debe ser 44 o 54, que corresponden a las cuentas contables aplicables para Gastos Técnicos. En caso contrario,debe mostrar un mensaje de error y no permitir el registro.
10. 10- Los campos Unidad de Cuenta, Ramo, Producto y Subcanal deben existir y estar previamente registrados en sus respectivos catálogos maestros.
11. 11- EL valor de Factor debe estar entre 0 y 1

**Datos:**
- Campos de formulario
- 
- - Prioridad: Seleccionar la Prioridad correspondiente [1 o 4]
- - Código Concepto: Se selecciona el Código concepto correspondiente Ej:  07.04.00
- - Moneda: Se selecciona la moneda correspondiente [PEN,USD]
- - Dígito de Cuenta: Seleccionar el Dígito de Cuenta correspondiente [44 o 54]
- - Código Ramo: Se selecciona el CÓdigo Ramo correspondiente Ej: [01,70]
- - Producto: Se selecciona el Producto correspondiente Ej: [AFP003]
- - Subcanal: Se selecciona el subcanal  correspondiente Ej; [AFPS2]
- - Unidad de Cuenta: Se selecciona la Unidad de cuenta correspondiente Ej: IFRS_GRP_2021_UNIQUE SISCO2_PEN_PAA_Ceded_Prof
- - Factor: [1,0.234,-10]

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Unidad de Cuenta GT".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de éxito ¡Hecho! El registro se agregó sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Maestro de Negocio y Embebidos  definido en el Aprovisionamiento de  flujo de Gastos Técnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Maestro de Negocio y Embebidos" de Maestro de Negocio y Embebidos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3- Los campos Negocio, Línea, Producto son obligatorios
4. 4- Se debe validar que los valores de Línea, Producto, Canal y Subcanal existan en sus respectivos catálogos maestros. Además, se debe verificar que el Producto esté asociado a la Línea y que el Subcanal esté asociado al Canal correspondiente.
5. 5- Los campos Embebidos y Tipo de Negocio son excluyentes: si Embebidos tiene valor, Tipo de Negocio debe estar vacío, y viceversa.

**Datos:**
- Campos de formulario
- 
- - Negocio: [GENERALES, VIDA]
- - Línea: Se selecciona la Línea correspondiente. Ej: ASISTENCIA MÉDICA
- - Producto: Se selecciona el  producto correspondiente Ej: INDEMNIZATORIO INDIVIDUAL
- - Canal: Se selecciona el canal correspondiente Ej: ALIANZAS]
- - Subcanal: Se selecciona el subcanal correspondiente Ej:  FALABELLA
- - Embebido: [Embebido, No embebido]
- - Tipo Negocio: [EMPRESA, PERSONA]

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Maestro de Negocio y Embebidos".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de éxito ¡Hecho! El registro se agregó sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Método Subcanal  definido en el Asignaciones de  flujo de Gastos Técnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Método Subcanal" de Método Subcanal

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3- Todos los campos son obligatorios
4. 4- El Código de Concepto, Ramo, Línea, Producto, Canal y Método debe estar previamente configurado en sus catálogos
5. 5- Los campos son obligatorios
6. 6- Debe existir correspondencia válida entre Código de Línea y Nombre de Línea, así como entre Código de Producto y Nombre de Producto.
7. 7- Debe existir una relación válida entre la Línea y el Producto (el Producto debe estar asociado a la Línea correspondiente).
8. 8- La combinación de los campos Código de Concepto, Código de Ramo, Código de Línea, Línea, Código de Grupo de Producto, Grupo de Producto, Código de Canal y Código de Método debe ser única. No se permite registrar más de un registro con la misma combinación de estos valores.

**Datos:**
- Campos de formulario:
- 
- -Código línea: Se selecciona la Línea correspondiente Ej: AMED
- -Línea: Se autocompleta según el Código seleccionado
- -Código producto:Se selecciona el producto correspondiente Ej: AMED019
- -Producto: Se autocompleta según el Código seleccionado
- -Código canal: Se selecciona el Código canal correspondiente Ej: CCO
- -Código Concepto: Se selecciona el Código concepto correspondiente Ej: 10.22.08
- -Código Ramo: Se selecciona el ramo correspondiente Ej: 64
- -Código método: Se selecciona el Método correspondiente Ej: GT2SCCCO001

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Subcanal".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Método Subcanal.
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de éxito ¡Hecho! El registro se agregó sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Método Producto definido en el Asignaciones de  flujo de Gastos Técnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar/Editar Método Productor" de Método Producto

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3- Todos los campos son obligatorios
4. 4- El Código de Concepto, Ramo, Línea, Producto, Canal y Método debe estar previamente configurados en sus catálogos
5. 5- Debe existir correspondencia válida entre Código de Línea y Nombre de Línea
6. 6- La combinación Código de Concepto, Código de Ramo, Código de Línea, Línea, Código de Canal y Código de Método no debe repetirse.

**Datos:**
- Campos de formulario:
- 
- - Código Concepto:  Se selecciona el concepto correspondiente Ej: 10.01.14
- - Código Ramo:  Se selecciona el ramo correspondiente Ej: 61
- - Código línea:  Se selecciona la Línea correspondiente Ej: LPER
- - Línea: Se autocompleta según el Código correspondiente.
- - Código Canal:  Se selecciona el canal correspondiente Ej: ALZ
- - Código Método:  Se selecciona el Método correspondiente Ej: PD2561ALZLPER

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Producto".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Método Producto.
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de éxito ¡Hecho! El registro se agregó sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.03.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Especiales NIIF  definido en el Asignaciones de  flujo de Gastos Técnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar  Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3- El Código de Concepto, Línea, Producto, Canal, Subcanal y Método debe estar previamente configurado en sus catálogos
4. 4-Deben existir datos válidos y activos en los catálogos de Líneas, Productos, Canales, Subcanales, Conceptos y Centros de Costo
5. 5- Los campos Código Línea, Línea, Porcentaje y Tipo Distribución son obligatorios.

**Datos:**
- Campos de formulario:
- 
- - Código Línea: Se selecciona el concepto correspondiente Ej: LA
- - Línea: Se autocompleta según el Código seleccionado
- -Código Producto: Se selecciona el concepto correspondiente Ej: LPER019
- - Producto: Se autocompleta según el Código seleccionado
- - Código Canal: Se selecciona el concepto correspondiente Ej: DFV
- - Canal: Se autocompleta según el Código seleccionado
- - Codsubcanal: Se selecciona el concepto correspondiente Ej: DFV008
- - Subcanal: Se autocompleta según el Código seleccionado
- - Método Valoración: [0 (PAA), 1 (BBVA/VFA).]
- - Porcentaje: [100, 1,2 , 65]
- - Dígito de cuenta: [44,54]
- - Tipo Distribución: [PÓLIZAS, UOA]
- - NIIF 17 Atribuible: [SI Atribuible' o NO 'No Atribuible'.]
- - NIIF 17 Tipo:  [GM, GA]
- - Concepto N1:Tipo texto  Ej: Egresos Técnicos netos
- - Concepto N2: Tipo texto Ej: Servicios
- - Código Concepto: Se selecciona el concepto correspondiente Ej: 10.14.00
- - CECO: se selecciona el CECO correspondiente Ej: 06.99.80

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Especiales NIIF.
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de éxito ¡Hecho! El registro se agregó sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

## Escenario: E35-GT-02
**Descripcion:** Validar las reglas de negocio al agregar un registro en el  flujo de Gasto Técnicos

### Caso de prueba: E35-GT-02.01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Ramo de la Parametrización de Gastos Técnicos porque no cumple con las reglas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Ramo" de Ramo

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3-Existe al menos un registro, el cual será utilizado como referencia para ingresar datos idénticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serán idénticos a los mostrado en el registro seleccionado de la tabla Ramos mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.01.1

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Ramo".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la información o edita el registro existente."

---

### Caso de prueba: E35-GT-02.01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Cuentas Contables de la Parametrización de Gastos Técnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Cuenta Contable" de Cuentas Contables

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3-Existe al menos un registro, el cual será utilizado como referencia para ingresar datos idénticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serán idénticos a los mostrado en el registro seleccionado de la tabla Cuenta Contable mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.01.2

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > " Cuentas Contables".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar  Cuentas Contables".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la información o edita el registro existente."

---

### Caso de prueba: E35-GT-02.01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Centros de la Parametrización de Gastos Técnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Centro" de Centros

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3-Existe al menos un registro, el cual será utilizado como referencia para ingresar datos idénticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serán idénticos a los mostrado en el registro seleccionado de la tabla centros mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.01.3

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Centros".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la información o edita el registro existente."

---

### Caso de prueba: E35-GT-02.02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Unidad de cuenta GT de Aprovisionamiento de Gastos Técnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Unidad de Cuenta GT" de Unidad de Cuenta GT

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3-Existe al menos un registro, el cual será utilizado como referencia para ingresar datos idénticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serán idénticos a los mostrado en el registro seleccionado de la tabla Unidad de Cuenta GT mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.02.1

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Unidad de Cuenta GT".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la información o edita el registro existente."

---

### Caso de prueba: E35-GT-02.02.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Maestro de Negocios y Embebidos de Aprovisionamiento de Gastos Técnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Maestro de Negocio y Embebidos" de Maestro de Negocio y Embebidos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3-Existe al menos un registro, el cual será utilizado como referencia para ingresar datos idénticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serán idénticos a los mostrado en el registro seleccionado de la tabla Maestro de negocios Embebidos mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.02.2

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Maestro de Negocio y Embebidos".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la información o edita el registro existente."

---

### Caso de prueba: E35-GT-02.03.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Método Subcanal de la Asignaciones de Gastos Técnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Método Subcanal" de Método Subcanal

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3-Existe al menos un registro, el cual será utilizado como referencia para ingresar datos idénticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serán idénticos a los mostrado en el registro seleccionado de la tabla Método Subcanal mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.03.1.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Subcanal".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Método Subcanal".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la información o edita el registro existente."

---

### Caso de prueba: E35-GT-02.03.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Método Producto de la Asignaciones de Gastos Técnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Método Producto" de Método Producto

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3-Existe al menos un registro, el cual será utilizado como referencia para ingresar datos idénticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serán idénticos a los mostrado en el registro seleccionado de la tabla Método Producto mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.03.2

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Producto".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Método Producto".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la información o edita el registro existente."

---

### Caso de prueba: E35-GT-02.03.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Especiales NIIF  de la Asignaciones de Gastos Técnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.
3. 3-Existe al menos un registro, el cual será utilizado como referencia para ingresar datos idénticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serán idénticos a los mostrado en el registro seleccionado de la tabla Especiales NIIF mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.03.3

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Especiales NIIF".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la información o edita el registro existente."

---

## Escenario: Validar el formato y campos obligatorios de formulario en un nuevo registro en el  flujo de Gasto Técnicos
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E35-GT-03-01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los Gasto Técnicos en el  flujo de  Ramo

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Ramo" de Ramo

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacíos.
- 
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- Código de Ramo: X02, 000, VACIO, *?/(&
- Descripción de Ramo: 1231+=, [] RMA 12
- Rubro: 123132

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Ramo".
5. 5. No agrega Información y deja campos vacíos
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:

-Código Ramo: ''El Código Ramo es requerido'' / ''El Código Ramo debe ser un valor numérico de 1 o 2 dígitos o el valor especial 'SIN RAMO'.
-Descripción Ramo: ''La Descripción Ramo es requerida''  / "La Descripción contiene caracteres no permitidos"

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto Técnicos de Cuentas Contables

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Cuentas Contables" de Cuentas Contables

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacíos.
- 
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- - Cuenta Contable: LYTS_1213
- - Nombre Cuenta Contable: 123CUENTA
- - Código Concepto: LAS_213331*

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > " Cuentas Contables".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Cuentas Contables".
5. 5. No agrega Información y deja campos vacíos
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Toda combinación que no corresponda con:  

-Código es requerido
-Ingrese un valor numérico entre 6 y 14 dígitos, separado por puntos y con formato NN.N.N.NN.NN.NN (Ej.: 44.1.7.40.09.10)..
-Nombre Cuenta Contable:  -Nombre es requerido
-Código Ramo: Código Ramo es requerido
-NIIF 17 Atribuible: NIIF 17 Atribuible es requerido
-NIIF 17 Tipo: NIIF 17 Tipo es requerido
-Código Concepto: Concepto es requerido
-Concepto N1:  Concepto N1 es requerido
-Concepto N2:  Concepto N2 es requerido
-Concepto N3: Concepto N3 es requerido

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto Técnicos de Centros

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Centros" de Centros

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacíos.
- 
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- - Centro de Costo: El campo no es Editable
- - Nombre Centro de Costo: Se autocompleta según el centro de costo

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Centros".
5. 5. No agrega Información y deja campos vacíos
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:

-Negocio: -Negocio requerido
-Centro de costo: Centro de costo es requerido
-Ingrese un Código de Centro con el formato NN.NN.NN (Ej.: 01.02.03).es requerido
-Código Línea: Código Línea requerido
-Código Producto: Código Producto requerido
-Código Canal: Código Canal requerido
-Código Subcanal: Código Subcanal requerido
-Tipo: Tipo requerido

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto Técnicos de Unidad de cuenta GT

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Unidad de cuenta GT" de Unidad de cuenta GT

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacíos.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Unidad de Cuenta GT".
5. 5. No agrega Información y deja campos vacíos
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:

-Código Subcanal: Código Subcanal requerido
-Unidad de Cuenta: Unidad de Cuenta requerido
-Factor: Factor es requerido

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-02.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto Técnicos de Maestro de Negocios y Embebidos

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Maestro de Negocios y Embebidos" de Maestro de Negocios y Embebidos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacíos.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Maestro de Negocio y Embebidos".
5. 5. No agrega Información y deja campos vacíos
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:

-Negocio: Negocio requerido
-Línea: Línea requerido
-Producto: Producto requerido

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-03.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto Técnicos de Método Subcanal

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Método Subcanal" de Método Subcanal

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacíos.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Subcanal".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Método Subcanal".
5. 5. No agrega Información y deja campos vacíos
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:

-Todos los campos son select y autocompletados. 
-Código línea requerido      
-Código producto requerido          
-Nombre producto requerido
-Código canal requerido
-Concepto es requerido
-Código Ramo requerido
-Código método requerido

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-03.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto Técnicos de Método Producto

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Método Producto" de Método Producto

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacíos.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Producto".
3. 3. El usuario presiona  el botón "Agregar".
4. 5. No agrega Información y deja campos vacíos
5. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:

-Todos los campos son select y autocompletados. 
-En el caso de los inputs se autocomplentan cuando se selecciona el código.
 
-Concepto es requerido
-Código Ramo requerido
-Código línea requerido
-Nombre Línea requerido
-Código Canal requerido
-Código Método requerido

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-03.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto Técnicos de  Especiales NIIF

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- La distribución está en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacíos.
- 
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- - Porcentaje: DOS, 12%, 1,2342

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Especiales NIIF".
5. 5. No agrega Información y deja campos vacíos
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:


- Porcentaje: ''El Porcentaje es obligatorio'' 
''Ingrese un porcentaje válido con hasta 3 dígitos en la parte entera y hasta 6 en la parte decimal, separado por punto (Ej.: 22.563)''.
 
-Tpo Distribución: Tpo Distribución requerido

-No se habilitael campo agregar

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro pero al subir el archivo de período esté se sobreescriba en el  flujo de Gasto Técnicos
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E35-GT-04-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo período en el  flujo de comunes de  Ramo

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Ramo definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Ramos GT'' definido en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > " Ramo".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Ramo".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".
7. 7. Visualiza la información de registro agregado en el front.
8. 8. El usuario presiona  el botón "Recargar".
9. 9. Se levanta el modal con título "Recargar Ramo",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?

2- La información de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo período en el  flujo de comunes de  Cuentas Contables

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Cuentas Contables definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL  Cuentas Contables GT'' definido en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > " Cuentas contables".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Cuenta Contable".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".
7. 7. Visualiza la información de registro agregado en el front.
8. 8. El usuario presiona  el botón "Recargar".
9. 9. Se levanta el modal con título "Recargar Cuenta Contable",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?

2- La información de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el  flujo de comunes de  Centros

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Centros definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL  Centros GT'' definido en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > " Centros".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Centro".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".
7. 7. Visualiza la información de registro agregado en el front.
8. 8. El usuario presiona  el botón "Recargar".
9. 9. Se levanta el modal con título "Recargar Centros",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?

2- La información de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo período en el  flujo de comunes de Unidad de cuenta GT

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo  Unidad de cuenta GT definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL  Unidad de cuenta GT'' definido en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Unidad de cuenta GT".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".
7. 7. Visualiza la información de registro agregado en el front.
8. 8. El usuario presiona  el botón "Recargar".
9. 9. Se levanta el modal con título "Recargar Unidad de cuenta GT",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?

2- La información de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo período en el  flujo de comunes de   Maestro de Negocios y Embebidos

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Maestro de Negocios y Embebidos definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Maestro de Negocio y Embebidos GT'' definido en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > " Maestro de Negocios y Embebidos".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Maestro de Negocios y Embebidos".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".
7. 7. Visualiza la información de registro agregado en el front.
8. 8. El usuario presiona  el botón "Recargar".
9. 9. Se levanta el modal con título "Recargar Maestro de Negocios y Embebidos",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?

2- La información de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo período en el  flujo de comunes de  Método Subcanal

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Método Subcanal definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Método Subcanal GT'' definido en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > " Método Subcanal".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Método Subcanal".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".
7. 7. Visualiza la información de registro agregado en el front.
8. 8. El usuario presiona  el botón "Recargar".
9. 9. Se levanta el modal con título "Recargar Método Subcanal",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?

2- La información de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo período en el  flujo de comunes de Método Producto

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Método Producto definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Método producto GT'' definido en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Producto".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Método Producto".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".
7. 7. Visualiza la información de registro agregado en el front.
8. 8. El usuario presiona  el botón "Recargar".
9. 9. Se levanta el modal con título "Recargar Método Producto",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?

2- La información de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-03.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo período en el  flujo de comunes de  Especiales NIIF

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo  Especiales NIIF definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' definido en el proceso de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona  el botón "Agregar".
4. 4. Se levanta el modal "Agregar Especiales NIIF".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botón Agregar".
7. 7. Visualiza la información de registro agregado en el front.
8. 8. El usuario presiona  el botón "Recargar".
9. 9. Se levanta el modal con título "Recargar Especiales NIIF",el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?

2- La información de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

## Escenario: Validar que el sistema pueda editar un registro en el  flujo de Gastos Técnicos
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E36-GT-01-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Ramo

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Ramo" de Ramo

**Precondiciones:**
1. 1- El registro debe haber sido creado anteriormente.
2. 2- el usuario debe tener rol de Gestor de Gastos Técnicos
3. 3- Los campos código ramo y descriçión son obligatorios
4. 4- Un Ramo puede tener múltiples Rubros
5. 5-Los campos de tipo autocompleta son Editables condicionados según el código asociado.

**Datos:**
- Datos para los campos editables de formulario
- 
- - Código Ramo:  SIN RAMO, 1, 44
- - Descripción ramo: SIN RAMO, INCENDIO, DESHONESTIDAD
- - Rubro: Líneas ALIADAS INCENDIO, DESHONESTIDAD FRENTE A LA EMPRESA

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar  Ramo".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Cuentas Contables

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Cuentas Contables" de Cuentas Contables

**Precondiciones:**
1. 1-El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2-El registro de Cuenta Contable debe haber sido creado anteriormente.
3. 3-El usuario debe tener permisos para editar registros de Cuentas Contables.
4. 4-El Código de Ramo debe estar creado en el maestro de Ramo
5. 5-Los valores de código Cuenta Contable debe ser único
6. 6- El modal "Editar Cuenta Contable" debe estar disponible desde el listado de Cuentas Contables.
7. 7-Los campos de tipo autocompleta son Editables condicionados según el código asociado.
8. 8-La cuenta contable Los dos primeros dígitos deben ser 46, 47, 56 o 57; el tercer dígito debe ser 1 o 2; el cuarto puede ser un número entre 0 y 9 o una letra; y los bloques siguientes deben estar entre 01 y 99 o combinaciones de letras (ej. OO).

**Datos:**
- Datos para los campos editables de formulario
- 
- - Código cuenta contable: 46.1.7.40.09.10, 47.1.7.40.09.10
- - Nombre Cuenta Contablee: Ej: BONOS ASESORES - PROV. ESSALUD
- - Código ramo: Se selecciona el Código ramo correspondiente [01, 44]
- - Tipo de cuenta:  Se selecciona el tipo de cuenta correspondiente [MT, RT, IF, GG]
- - Tipo NIIF 17 CBR: Se selecciona el Tipo NIIF 17 CBR  [GS, GI]
- - NIIF 17 Atribuible: Se selecciona el  NIIF 17 Atribuible correspondiente [Atribuible, No Atribuible]
- - NIIF 17 Tipo: Se selecciona el NIIF 17 Tipo correspondiente  [GM,GA]
- - Concepto: Campo obligatorio. Ej: 10.01.05, 10.14.00
- - Concepto N1: Ej: Egresos Técnicos netos
- - Concepto N2: Ej; Compras
- - Concepto N3: Ej: Seguro Social

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar Cuentas Contables".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Centros

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Centros" de  Centros

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 1- El registro de Centro debe haber sido creado anteriormente.
3. 2- El usuario debe tener permisos para editar registros de Centros.
4. 3- El registro a editar debe visualizarse en el listado de Centros.
5. 4-Los campos de tipo autocompleta son Editables condicionados según el código asociado.
6. 5- Cuando el Centro es de tipo DIRECTO, debe existir una combinación válida de Línea, Producto, Canal y Subcanal en los catálogos maestros.
7. 6- Todos los códigos de Línea, Producto, Canal y Subcanal deben existir en catálogo.
8. 7- Cuando el campo TIPO viene vacío, el Centro NO se considera DIRECTO.
9. 8- Los catálogos maestros de Línea, Producto, Canal y Subcanal se encuentran previamente configurados, activos y con sus relaciones jerárquicas definidas (Producto–Línea y Subcanal–Canal).

**Datos:**
- Datos para los campos editables de formulario
- 
- - Negocio: Se selecciona el Negocio Correspondiente [PPS, PVI]
- - Centro de Costo: El campo no es Editable
- - Nombre Centro de Costo: Se autocompleta según el centro de costo
- - Código línea: Se selecciona el Código Línea correspondiente  EJ: SEPE, VGRP
- - Línea: Se autocompleta según el Código seleccionado
- - Código producto: Se selecciona el Código Producto correspondiente EJ: SEPE001, VGRP001
- - Producto: Se autocompleta según el Código seleccionado
- - Código canal: Se selecciona el Código Canal correspondiente EJ: COR, CCO
- - Canal: Se autocompleta según el Código seleccionado
- - Código subcanal: Se selecciona el Código Subcanal correspondiente Ej: COR004,CCO006
- - Subcanal: Se autocompleta según el Código seleccionado
- - Tipo: [DIRECTO,DIRECTOS, INDIRECTO,INDIRECTOS]
- -Tipo Emisión: [DIGITAL,TRADICIONAL]
- -Tipo Negocio: [PERSONA,EMPRESA]
- -Tipo Poducto:Campo Adicional. [MODULAR,NO MODULAR]

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar Centros".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Driver Producto

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Driver Producto" de  Driver Producto

**Precondiciones:**
1. 1- El registro de Driver Producto debe haber sido creado anteriormente.
2. 2- El usuario debe tener permisos para editar registros de Driver Producto
3. 3- El registro a editar debe visualizarse en el listado de Driver Producto.

**Datos:**
- Código Método: Obligatorio No Editable.
- Descripción Método: Obligatorio Editable.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar Driver Producto".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Driver Subcanal

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Subcanal" de  Subcanal

**Precondiciones:**
1. 1- El registro de  Driver Subcanal debe haber sido creado anteriormente.
2. 2- El usuario debe tener permisos para editar registros de Driver Subcanal
3. 3- El registro a editar debe visualizarse en el listado de Driver Subcanal
4. 4- Código Método debe existir en el catálogo de métodos.

**Datos:**
- Código método: Obligatorio  Editable.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > " Driver Subcanal".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar  Driver Subcanal".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Unidad de cuenta GT

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Unidad de cuenta GT" de  Unidad de cuenta GT

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- El registro de Unidad de Cuenta GT debe haber sido creado anteriormente.
3. 3- El usuario debe tener permisos para editar registros de Unidades de Cuenta.
4. 4- El registro a editar debe visualizarse en el listado de Unidades de Cuenta GT.
5. 5-Los campos de tipo autocompleta son Editables condicionados según el código asociado.
6. 6- El campo Prioridad es obligatorio y debe contener un valor numérico entre 1 y 4.
7. 7- El Código de Concepto exista en el catálogo de conceptos dentro de " Cuentas Contables"
8. 8- Para un mismo registro con el mismo Código de Concepto, Producto y Subcanal, la Unidad de Cuenta debe ser única y la suma de sus factores debe ser igual a 1.
9. 9. El valor de campo Dígito de la Cuenta debe ser 44 o 54, que corresponden a las cuentas contables aplicables para Gastos Técnicos. En caso contrario,debe mostrar un mensaje de error y no permitir el registro.
10. 10- Los campos Unidad de Cuenta, Ramo, Producto y Subcanal deben existir y estar previamente registrados en sus respectivos catálogos maestros.
11. 11- EL valor de Factor debe esatr entre 0 y 1

**Datos:**
- Datos para los campos editables de formulario
- 
- - Prioridad: Seleccionar la Prioridad correspondiente [1 o 4]
- - Código Concepto: Se selecciona el Código concepto correspondiente Ej:  07.04.00
- - Moneda: Se selecciona la moneda correspondiente [PEN,USD]
- - Dígito de Cuenta: Seleccionar el Digito de Cuenta correspondiente [44 o 54]
- - Código Ramo: Se selecciona el COdifo Ramo correspondiente Ej: [01,70]
- - Producto: Se selecciona el Producto correspondiente Ej: [AFP003]
- - Subcanal: Se selecciona el subcanal  correspondiente Ej; [AFPS2]
- - Unidad de Cuenta: Se selecciona la Unida de cuenta correspondiente Ej: IFRS_GRP_2021_UNIQUE SISCO2_PEN_PAA_Ceded_Prof
- - Factor: [1,0.234,-10]

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar Unidad de cuenta GT".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de  Maestro de Negocios y Embebidos

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Maestro de Negocios y Embebidos" de Maestro de Negocios y Embebidos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- El registro debe haber sido creado anteriormente.
3. 3- El usuario debe tener permisos para editar registros de Maestro de Negocios y Embebidos.
4. 4- El registro a editar debe visualizarse en el listado de Maestro de Negocios y Embebidos.
5. 5- El subcanal debe estar asociado al canal correpsondiente
6. 6-Los campos de tipo autocompleta son Editables condicionados según el código asociado.
7. 7- Los campos Negocio, Línea, Producto son obligatorios
8. 8- Se debe validar que los valores de Línea, Producto, Canal y Subcanal existan en sus respectivos catálogos maestros. Además, se debe verificar que el Producto esté asociado a la Línea y que el Subcanal esté asociado al Canal correspondiente.
9. 9- Los campos Embebidos y Tipo de Negocio son excluyentes: si Embebidos tiene valor, Tipo de Negocio debe estar vacío, y viceversa.

**Datos:**
- Datos para los campos editables de formulario
- 
- - Negocio: [GENERALES, VIDA]
- - Línea: Se selecciona la Línea correspondiente. Ej: ASISTENCIA MÉDICA
- - Producto: Se selecciona el  producto correspondiente Ej: INDEMNIZATORIO INDIVIDUAL
- - Canal: Se selecciona el canal correspondiente Ej: ALIANZAS]
- - Subcanal: Se selecciona el subcanal correspondiente Ej:  FALABELLA
- - Embebido: [Embebido, No embebido]
- - Tipo Negocio: [EMPRESA, PERSONA]

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Maestro de Negocios y Embebidos".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar Maestro de Negocios y Embebidos".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Método Subcanal

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Método Subcanal" de Método Subcanal

**Precondiciones:**
1. 1- El registro de Método Subcanal debe haber sido creado anteriormente.
2. 2- El usuario debe tener permisos para editar registros de Método Subcanal.
3. 3- Deben existir datos válidos en los catálogos de Ramos, Líneas, Grupo Producto, Canales, Unidad de Cuenta GT y Driver Subcanal.
4. 4- El registro a editar debe visualizarse en el listado de Maestro de Método subcanal
5. 5- Debe existir correspondencia válida entre Código de Línea y  Línea, así como entre Código de Producto y  Producto.
6. 6- Debe existir una relación válida entre la Línea y el Producto (el Producto debe estar asociado a la Línea correspondiente).
7. 7- La combinación de los campos Código de Concepto, Código de Ramo, Código de Línea, Línea, Código de Grupo de Producto, Grupo de Producto, Código de Canal y Código de Método debe ser única. No se permite registrar más de un registro con la misma combinación de estos valores.

**Datos:**
- Datos para los campos editables de formulario
- 
- -Código línea: Se selecciona la Línea correspondiente Ej: AMED
- -Línea: Se autocompleta según el Código seleccionado
- -Código producto:Se selecciona el producto correspondiente Ej: AMED019
- -Producto: Se autocompleta según el Código seleccionado
- -Código canal: Se selecciona el Código canal correspondiente Ej: CCO
- -Código Concepto: Se selecciona el Código concepto correspondiente Ej: 10.22.08
- -Código Ramo: Se selecciona el ramo correspondiente Ej: 64
- -Código método: Se selecciona el Método correspondiente Ej: GT2SCCCO0017

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Subcanal".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar Método Subcanal".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Método Producto

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Método Producto " de Método Producto

**Precondiciones:**
1. 1-El registro de Método Producto debe haber sido creado anteriormente.
2. 2-El usuario debe tener permisos para editar registros de Método Producto.
3. 3-Deben existir datos válidos en los catálogos de Ramos, Líneas, Canales, Unidad de Cuenta GT y Driver Subcanal.
4. 4- El registro a editar debe visualizarse en el listado de Maestro de Método subcanal
5. 5- La combinación Código de Concepto, Código de Ramo, Código de Línea, Línea, Código de Canal y Código de Método no debe repetirse

**Datos:**
- Datos para los campos editables de formulario
- 
- - Código Concepto:  Se selecciona el concepto correspondiente Ej: 10.01.14
- - Código Ramo:  Se selecciona el ramo correspondiente Ej: 61
- - Código línea:  Se selecciona la Línea correspondiente Ej: LPER
- - Línea: Se autocompleta según el Código correspondinete.
- - Código Canal:  Se selecciona el canal correspondiente Ej: ALZ
- - Código Método:  Se selecciona el Método correspondiente Ej: PD2561ALZLPER

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Producto ".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar Método Producto ".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-03.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Especiales NIIF

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Especiales NIIF " de Especiales NIIF

**Precondiciones:**
1. 1-El registro de Especiales NIIF debe haber sido creado anteriormente.
2. 2-El usuario debe tener permisos para editar registros de Especiales NIIF.
3. 3-Deben existir datos válidos y activos en los catálogos de Líneas, Productos, Canales, Subcanales, Conceptos y Centros de Costo
4. 4- El registro a editar debe visualizarse en el listado de Maestro deEspeciales NIIF

**Datos:**
- Datos para los campos editables de formulario
- 
- - Código Línea: Se selecciona el concepto correspondiente Ej: LPER
- - Línea: Se autocompleta según el Código seleccionado
- -Código Producto: Se selecciona el concepto correspondiente Ej: LPER019
- - Producto: Se autocompleta según el Código seleccionado
- - Código Canal: Se selecciona el concepto correspondiente Ej: DFV
- - Canal: Se autocompleta según el Código seleccionado
- - Codsubcanal: Se selecciona el concepto correspondiente Ej: DFV008
- - Subcanal: Se autocompleta según el Código seleccionado
- - Método Valoración: [0 (PAA), 1 (BBVA/VFA).]
- - Porcentaje: [100, 1,2 , 65]
- - Digito de cuenta: [44,54]
- - Tipo Distribución: [POLIZAS, UOA]
- - NIIF 17 Atribuible: [SI Atribuible' o NO 'No Atribuible'.]
- - NIIF 17 Tipo:  [GM, GA]
- - Concepto N1:Tipo texto  Ej: Egresos Técnicos netos
- - Concepto N2: Tipo texto Ej: Servicios
- - Código Concepto: Se selecciona el cocepto correspondiente Ej: 10.14.00
- - CECO: se selecciona el CECO correspondiente Ej: 06.99.80

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > " Especiales NIIF".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar  Especiales NIIF ".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de éxito ¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

## Escenario: Validar el formato y campos obligatorios de formulario al editar un registro en el  flujo de Gastos Técnicos
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E36-GT-03-01.1
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro por error en los campos  de Ramo  por error de formato de los campos en el  flujo de Gastos Técnicos

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Ramo" de Ramo

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- Debe existir un registro correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- -Descripción Ramo: campo obligatorio, Editable,texto. Permite caracteres especiales como: - . _ / , ( )
- -Rubro: campo Adicional, Editable, Texto. Permite caracteres especiales como: - . _ / , ( ) " | % : &

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Ramo".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar Ramo".
5. 5. El usuario borrar la información y deja campos vacíos
6. 6. El usuario edita los campos incorrectamente

**Resultado esperado:**
-El nuevo registro no ha sido editado.

Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''

1-Se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.

---

### Caso de prueba: E36-GT-03-01.2
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Cuentas Contables  por error de formato de los campos en el  flujo de Gastos Técnicos

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Cuentas Contables" de Cuentas Contables

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- Debe existir un registro correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- -Nombre Cuenta Contable: Campo obligatorio, Editable, Texto. permite caracteres especiales como: - . _ / , ( )

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar Cuentas Contables".
5. 5. El usuario borrar la información y deja campos vacíos
6. 6. El usuario edita los campos incorrectamente

**Resultado esperado:**
-El nuevo registro no ha sido editado.

Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''

1-Se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.

---

### Caso de prueba: E36-GT-03-02.3
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Unidad de Cuenta GT por error de formato de los campos en el  flujo de Gastos Técnicos

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Unidad de Cuenta GT" de Unidad de Cuenta G

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- Debe existir un registro correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad
- -Para verificar la validación de campos obligatorios, el usuario debe ingresar a los campos, borrar la información y luego dejarlos vacíos.
- 
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- -Factor:  5, -10, 34,343, L2 1%

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar Unidad de Cuenta GT".
5. 5. El usuario borrar la información y deja campos vacíos
6. 6. El usuario edita los campos incorrectamente

**Resultado esperado:**
-El nuevo registro no ha sido editado.

Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''

1-Se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.

---

### Caso de prueba: E36-GT-03-03.3
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de  Especiales NIIF  por error de formato de los campos en el  flujo de Gastos Técnicos

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos.
2. 2- Debe existir un registro correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- - Porcentaje: DOS, 12%, 1,2342

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > " Especiales NIIF".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono lápiz
4. 4. Se levanta el modal "Editar Especiales NIIF".
5. 5. El usuario borrar la información y deja campos vacíos
6. 6. El usuario edita los campos incorrectamente

**Resultado esperado:**
-El nuevo registro no ha sido editado.

Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo de error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''

1-Se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.

---

## Escenario: E37-GT-01
**Descripcion:** Validar  que solo el rol de administrador de Gastos pueda eliminar un registro en el  flujo de Gastos Técnicos

### Caso de prueba: E37-GT-01.01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Ramo en el  flujo de Gastos Técnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el  flujo de Gatos Técnicos de Ramo

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo está siendo usado.
5. 5- No se permite eliminar un Ramo  si existen movimientos asociados a una cuenta contable GT

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > " Ramo".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: ¿Está seguro que desea eliminar esté registro?.  

2- se muestra el mensaje de éxito ¡Registro eliminado con éxito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Cuentas Contables en el  flujo de Gastos Técnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el  flujo de Gatos Técnicos de Cuentas Contables

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo está siendo usado.
5. 5-No permite eliminar una cuenta si existen movimientos asociados a un Exactus, Unidad de Cuenta GT o Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > " Cuentas Contables".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: ¿Está seguro que desea eliminar esté registro?.  

2- se muestra el mensaje de éxito ¡Registro eliminado con éxito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Centros en el  flujo de Gastos Técnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el  flujo de Gatos Técnicos de Centros

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo está siendo usado.
5. 5-No permite eliminar una centro si existen movimientos asociados a un Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > " Centros".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: ¿Está seguro que desea eliminar esté registro?.  

2- se muestra el mensaje de éxito ¡Registro eliminado con éxito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Driver Producto en el  flujo de Gastos Técnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el  flujo de Gatos Técnicos de Driver Producto

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- No permite eliminar una registro si existen movimientos asociados a un Método Producto

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: ¿Está seguro que desea eliminar esté registro?.  

2- se muestra el mensaje de éxito ¡Registro eliminado con éxito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.02.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Drive Subcanal en el  flujo de Gastos Técnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el  flujo de Datos Técnicos de Drive Subcanal

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- No permite eliminar una registro si existen movimientos asociados a un Método Subcanal

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Drive Subcanal".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: ¿Está seguro que desea eliminar esté registro?.  

2- se muestra el mensaje de éxito ¡Registro eliminado con éxito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.02.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Unidad de Cuenta GT en el  flujo de Gastos Técnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el  flujo de Datos Técnicos de Unidad de Cuenta GT

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: ¿Está seguro que desea eliminar esté registro?.  

2- se muestra el mensaje de éxito ¡Registro eliminado con éxito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.02.5
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Maestro de Negocios y Embebidos en el  flujo de Gastos Técnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el  flujo de Gatos Técnicos de  Maestro de Negocios y Embebidos

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > " Maestro de Negocios y Embebidos".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: ¿Está seguro que desea eliminar esté registro?.  

2- se muestra el mensaje de éxito ¡Registro eliminado con éxito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Método Subcanal en el  flujo de Gastos Técnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el  flujo de Gatos Técnicos de  Método Subcanal

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > " Método Subcanal".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: ¿Está seguro que desea eliminar esté registro?.  

2- se muestra el mensaje de éxito ¡Registro eliminado con éxito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Método Producto en el  flujo de Gastos Técnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el  flujo de Gatos Técnicos de  Método Producto

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > " MetodoProducto".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: ¿Está seguro que desea eliminar esté registro?.  

2- se muestra el mensaje de éxito ¡Registro eliminado con éxito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.03.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Especiales NIIF en el  flujo de Gastos Técnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menú de acciones en el  flujo de Gatos Técnicos de  Especiales NIIF

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > " Especiales NIIFl".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: ¿Está seguro que desea eliminar esté registro?.  

2- se muestra el mensaje de éxito ¡Registro eliminado con éxito! 

3-  no se muestra en la tabla de front.

---

## Escenario: E37-GT-02
**Descripcion:** Validar restricciones al eliminar un registro en el Gastos Técnicos

### Caso de prueba: E37-GT-02.01.1
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Ramo

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el  flujo de Gastos Técnicos de Ramo

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo está siendo usado.
5. 5- No se permite eliminar un Ramo  si existen movimientos asociados a una cuenta contable GT

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > " Ramo".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.01.2
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Cuentas Contables

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el  flujo de Gastos Técnicos de Cuentas Contables

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo está siendo usado.
5. 5-No permite eliminar una cuenta si existen movimientos asociados a un Exactus, Unidad de Cuenta GT o Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > " Cuentas Contables".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.01.3
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de  Centros

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el  flujo de Gastos Técnicos de  Centros

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo está siendo usado.
5. 5-No permite eliminar una centro si existen movimientos asociados a un Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > " Centros".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.02.1
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Driver Producto

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el  flujo de Gastos Técnicos de Driver Producto

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- No permite eliminar una registro si existen movimientos asociados a un Método Producto

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.02.2
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Drive Subcanal

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el  flujo de Gastos Técnicos de Drive Subcanal

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- No permite eliminar una registro si existen movimientos asociados a un Método Subcanal

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Drive Subcanal".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.02.3
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Unidad de Cuenta GT

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el  flujo de Gastos Técnicos de Unidad de Cuenta GT

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.02.4
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Maestro de Negocios y Embebidos

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el  flujo de Gastos Técnicos de Maestro de Negocios y Embebidos

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > " Maestro de Negocios y Embebidos".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.03.1
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Método Subcanal

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el  flujo de Gastos Técnicos de Método Subcanal

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > " Método Subcanal".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.03.2
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de MetodoProducto

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el  flujo de Gastos Técnicos de MetodoProducto

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > " MetodoProducto".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.03.3
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos Técnicos de Especiales NIIF

**Descripcion:** Validar que no se puede eliminar un registro desde el menú de acciones en el  flujo de Gastos Técnicos de Especiales NIIF

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > " Especiales NIIF".
3. 3. Desde el menú acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar esté registro?".
5. 5.  El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: E56-GT-PAG
**Descripcion:** Validar el funcionamiento integral de paginador en el  flujo de  Gastos Técnicos

### Caso de prueba: E56-GT-PAG
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de los elementos de paginador en el flujo de  Gastos Técnicos

**Descripcion:** Validar que  los elementos de paginador funcionen correctamente en el  flujo de  Gastos Técnicos

**Precondiciones:**
1. 1- Si la vista seleccionada de flujo de Gastos Técnicos tiene data cargada.
2. 2- Al acceder inicialmente, esté sombreada la página 1 y bloquaedos los botones ''página anterior'' y ''primera página''
3. 3- Tenga seleccionada una opción por defecto (5) en el selector de filas por vista.
4. 4- Si no hay data cargada, todos los elementos de paginador deben estar bloqueado.

**Datos:**
- Data para definida para Parametrización, Aprovisionamiento, y asignaciones de el flujo de  Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario accede a los botones de paginador de la vista en la que se encuentra.
3. 3. selecciona la opción de filas a mostrar por vista.
4. 4. El usuario accede a los botones

**Resultado esperado:**
El sistema página correctamente

1- El selector de filas por vista da la opción de seleccionar.
2- Las filas mostradas en el front corresponden con la opción mostrada de 5, 10 o 20.
3- Se muestre la cantidad de páginas con respecto a la cantidad de elementos a mostrar.
4- al encontrarse en la primera página, los botones de ''página anterior'' y ''primera página'' deben estar bloqueados.
5- al encontrarse en la última página los botones de ''siguiente página'' y ''última página'' deben estar bloqueados.

---

## Escenario: Validar el funcionamiento de botón ver más columnas en el flujo de Gastos Técnicos
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E60-GT-01.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón Ver en la pantalla Cuentas Contables de flujo de Parametrización de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - Descripción
- - Concepto N1
- - Concepto N2
- - Concepto N3
- - Código Ramo
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Tipo NIIF 17 CBR
- - Modificado
- 
- Columna definidas opcionales.
- - Concepto
- - Tipo de cuenta

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón Ver en la pantalla Centros de flujo de Parametrización de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Centros definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán.

**Datos:**
- Columna definidas Por defecto.
- -Negocio
- - Centro de Costo
- - Nombre Centro de costo
- - Nombre Línea
- - Nombre producto
- - Nombre canal
- - Nombre subcanal
- - Tipo
- - Código Producto
- - Modificado
- 
- Columna definidas opcionales.
- - Código línea
- - Código canal
- - Código subcanal
- - Estado CECO
- - Tipo emisión
- - Tipo negocio
- - Tipo producto

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón Ver en la pantalla Exactus Sin Procesar de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - Descripción
- - Asiento
- - Débito Local
- - Crédito Local
- - Centro Costo
- - Descripción Centro Costo
- - Tipo de Asiento
- - Razón Social
- - Segmento
- - Canal Distribución
- - Tipo Transacción
- 
- 
- Columna definidas opcionales.
- - Origen
- - Tipo de Documento
- - Documento
- - Referencia
- - Débito Dólar
- - Crédito Dólar
- - Fecha
- - NIT
- - Fuente
- - Notas
- - Fecha/Hora Creación
- - Flujo Efectivo
- - Patrimonio Neto
- - Partida
- - Broker
- - Canal Alt.
- - Cliente
- - Póliza
- - Siniestro
- - Producto
- - Cuenta Origen
- - Tipo Asiento
- - Asiento Origen
- - Centro Costo Origen
- - Identificador NIIF
- - Tipo Documento Cliente
- - Nombre Broker
- - Nombre Producto
- - Grupo Comercial
- - Nombre Grupo Comercial
- - Segmento Mercado
- - Fecha Inicio Vigencia Póliza
- - Fecha Fin Vigencia Póliza

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón Ver en la pantalla Exactus Procesado de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- - Negocio
- - Información
- - Contabilidad
- - Código Línea
- - Ramo
- - Ramo Directo
- - Riesgo Contable
- - Rubro
- - Código Grupo Prod
- - Código producto
- - Código canal
- - Canal Distribución
- - Grupo canales
- - Grupo comercial
- 
- 
- Columna definidas opcionales.
- - Cod subcanal
- - Cod Agente
- - Agente
- - Código CAV
- - CAV
- - Código SEG
- - Código REG
- - SEG REG
- - Código Centro
- - Código Concepto
- - Código C.Contable
- - Código de moneda
- - Monto Dólares
- - Monto Soles
- - Indice
- - Proceso
- - Fuente
- - Número de Póliza
- - Tipo Póliza
- - Nivel estandar
- - Tipo negocio
- - Gestor
- - Tipo documento
- - Número de documneto
- - Proveedor
- - Referencia
- - Partida
- - Código Faro
- - Fuente 2
- - Tipo de asiento
- - Estatus
- - Método Distribución
- - Método SC
- - Tipo día
- - NIT
- - Razón Social
- - Nombre Línea
- - Nombre Subcanal
- - Descripción Reg.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario selecciona el botón "Exactus procesado" >
4. 4.El usuario presiona el botón ''Ver"
5. 5. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. 6. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. 7. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.2.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón Ver en la pantalla Driver Producto de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Driver Producto definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- - Código Método
- - Descripción Método
- - Código producto
- - Nombre producto
- - Código línea
- - Línea
- - Factor
- 
- Columna definidas opcionales.
- - Código producto destino

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.2.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón Ver en la pantalla Driver Subcanal de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Driver Subcanal definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- - Código método
- - Código canal
- - Nombre canal
- - Código subcanal
- - Nombre Subcanal
- - Factor
- 
- Columna definidas opcionales.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.3.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón Ver en la pantalla Método Subcanal de flujo de Asignaciones de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Driver Método Subcanal definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- - Código concepto
- - Código ramo
- - Código Línea
- -  Nombre Línea
- - Código producto
- - Nombre producto
- - Código canal
- - Código método
- 
- Columna definidas opcionales.
- - Se muestran todos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Subcanal".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.3.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón Ver en la pantalla Método Producto de flujo de Asignaciones de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Método Producto definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- - Código Concepto
- - Código Ramo
- - Código Línea
- - Nombre Línea
- 
- Columna definidas opcionales.
- - Código Canal
- - Código Método

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Producto".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.3.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botón Ver en la pantalla Especiales NIIF de flujo de Asignaciones de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Especiales NIIF definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..

**Datos:**
- Columna definidas Por defecto.
- 
- - Nombre Producto
- - Nombre Subcanal
- - Tipo Distribución
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Concepto N1
- - Concepto N2
- - CECO
- 
- 
- Columna definidas opcionales.
- - Código Producto
- - Código Subcanal
- - Método Valoración
- - Porcentaje
- - Código Concepto
- - Código Línea
- - Nombre Línea
- - Código Canal
- - Nombre Canal
- - Dígito Cuenta
- - Modificado

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos.
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-02.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Cuentas Contables de flujo de Parametrización de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Cuentas Contables que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - Descripción
- - Concepto N1
- - Concepto N2
- - Concepto N3
- - Código Ramo
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Tipo NIIF 17 CBR
- - Modificado
- 
- Columna definidas opcionales.
- - Concepto
- - Tipo de cuenta

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Centros de flujo de Parametrización de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Centros que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Centros definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- -Negocio
- - Centro de Costo
- - Nombre Centro de costo
- - Nombre Línea
- - Nombre producto
- - Nombre canal
- - Nombre subcanal
- - Tipo
- - Código Producto
- - Modificado
- 
- Columna definidas opcionales.
- - Código línea
- - Código canal
- - Código subcanal
- - Estado CECO
- - Tipo emisión
- - Tipo negocio
- - Tipo producto

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros ".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Exactus sin procesar de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Exactus sin procesar que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Exactus sin procesar definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - Descripción
- - Asiento
- - Débito Local
- - Crédito Local
- - Centro Costo
- - Descripción Centro Costo
- - Tipo de Asiento
- - Razón Social
- - Segmento
- - Canal Distribución
- - Tipo Transacción
- 
- 
- Columna definidas opcionales.
- - Origen
- - Tipo de Documento
- - Documento
- - Referencia
- - Débito Dólar
- - Crédito Dólar
- - Fecha
- - NIT
- - Fuente
- - Notas
- - Fecha/Hora Creación
- - Flujo Efectivo
- - Patrimonio Neto
- - Partida
- - Broker
- - Canal Alt.
- - Cliente
- - Póliza
- - Siniestro
- - Producto
- - Cuenta Origen
- - Tipo Asiento
- - Asiento Origen
- - Centro Costo Origen
- - Identificador NIIF
- - Tipo Documento Cliente
- - Nombre Broker
- - Nombre Producto
- - Grupo Comercial
- - Nombre Grupo Comercial
- - Segmento Mercado
- - Fecha Inicio Vigencia Póliza
- - Fecha Fin Vigencia Póliza

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Exactus Procesado de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Exactus procesado que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Exactus Procesado definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - Negocio
- - Información
- - Contabilidad
- - Código Línea
- - Ramo
- - Ramo Directo
- - Riesgo Contable
- - Rubro
- - Código Grupo Prod
- - Código producto
- - Código canal
- - Canal Distribución
- - Grupo canales
- - Grupo comercial
- 
- 
- Columna definidas opcionales.
- - Cod subcanal
- - Cod Agente
- - Agente
- - Código CAV
- - CAV
- - Código SEG
- - Código REG
- - SEG REG
- - Código Centro
- - Código Concepto
- - Código C.Contable
- - Código de moneda
- - Monto Dólares
- - Monto Soles
- - Indice
- - Proceso
- - Fuente
- - Número de Póliza
- - Tipo Póliza
- - Nivel estandar
- - Tipo negocio
- - Gestor
- - Tipo documento
- - Número de documneto
- - Proveedor
- - Referencia
- - Partida
- - Código Faro
- - Fuente 2
- - Tipo de asiento
- - Estatus
- - Método Distribución
- - Método SC
- - Tipo día
- - NIT
- - Razón Social
- - Nombre Línea
- - Nombre Subcanal
- - Descripción Reg.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botón ''Exactus procesado"
4. 4. El usuario presiona el botón ''Ver"
5. 5. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. 6. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. 7. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.2.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Driver Producto de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Driver Producto que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Driver Producto definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - Código Método
- - Descripción Método
- - Código producto
- - Nombre producto
- - Código línea
- - Línea
- - Factor
- 
- Columna definidas opcionales.
- - Código producto destino

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.2.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Driver Subcanal de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Driver Subcanal que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Driver Subcanal definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - Código método
- - Código canal
- - Nombre canal
- - Código subcanal
- - Nombre Subcanal
- - Factor
- 
- Columna definidas opcionales.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.3.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Método Subcanal de flujo de Asignaciones de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Método Subcanal que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Método Subcanal definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - Código concepto
- - Código ramo
- - Código Línea
- -  Nombre Línea
- - Código producto
- - Nombre producto
- - Código canal
- - Código método
- 
- Columna definidas opcionales.
- - Se muestran todos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Subcanal".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.3.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Método Producto de flujo de Asignaciones de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Método Producto que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Método Producto definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - Código Concepto
- - Código Ramo
- - Código Línea
- - Nombre Línea
- 
- Columna definidas opcionales.
- - Código Canal
- - Código Método

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Producto".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.3.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Especiales NIIF de flujo de Asignaciones de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Especiales NIIF que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Especiales NIIF definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- 
- - Nombre Producto
- - Nombre Subcanal
- - Tipo Distribución
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Concepto N1
- - Concepto N2
- - CECO
- 
- 
- Columna definidas opcionales.
- - Código Producto
- - Código Subcanal
- - Método Valoración
- - Porcentaje
- - Código Concepto
- - Código Línea
- - Nombre Línea
- - Código Canal
- - Nombre Canal
- - Dígito Cuenta
- - Modificado

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-03.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente Columnas de Cuentas Contables de flujo de Parametrización de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente columnas de Cuentas Contables de flujo de Parametrización de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - Descripción
- - Concepto N1
- - Concepto N2
- - Concepto N3
- - Código Ramo
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Tipo NIIF 17 CBR
- - Modificado
- 
- Columna definidas opcionales.
- - Concepto
- - Tipo de cuenta

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente Columnas de Centros de flujo de Parametrización de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente columnas de Centros de flujo de Parametrización de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Centros definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- -Negocio
- - Centro de Costo
- - Nombre Centro de costo
- - Nombre Línea
- - Nombre producto
- - Nombre canal
- - Nombre subcanal
- - Tipo
- - Código Producto
- - Modificado
- 
- Columna definidas opcionales.
- - Código línea
- - Código canal
- - Código subcanal
- - Estado CECO
- - Tipo emisión
- - Tipo negocio
- - Tipo producto

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Centros".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente Columnas de Exactus sin procesar de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente columnas de Exactus sin procesar de flujo de Aprovisionamiento de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Exactus sin procesar definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - Descripción
- - Asiento
- - Débito Local
- - Crédito Local
- - Centro Costo
- - Descripción Centro Costo
- - Razón Social
- - Segmento
- - Canal Distribución
- - Tipo Transacción
- 
- 
- Columna definidas opcionales.
- - Origen
- - Tipo de Documento
- - Documento
- - Referencia
- - Débito Dólar
- - Crédito Dólar
- - Fecha
- - NIT
- - Fuente
- - Notas
- - Fecha/Hora Creación
- - Flujo Efectivo
- - Patrimonio Neto
- - Partida
- - Broker
- - Canal Alt.
- - Cliente
- - Póliza
- - Siniestro
- - Producto
- - Cuenta Origen
- - Tipo Asiento
- - Asiento Origen
- - Centro Costo Origen
- - Identificador NIIF
- - Tipo Documento Cliente
- - Nombre Broker
- - Nombre Producto
- - Grupo Comercial
- - Nombre Grupo Comercial
- - Segmento Mercado
- - Fecha Inicio Vigencia Póliza
- - Fecha Fin Vigencia Póliza

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente Columnas de Exactus procesado de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente columnas de Exactus procesado de flujo de Aprovisionamiento de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Exactus procesado definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - Negocio
- - Información
- - Contabilidad
- - Código Línea
- - Ramo
- - Ramo Directo
- - Riesgo Contable
- - Rubro
- - Código Grupo Prod
- - Código producto
- - Código canal
- - Canal Distribución
- - Grupo canales
- - Grupo comercial
- 
- 
- Columna definidas opcionales.
- - Cod subcanal
- - Cod Agente
- - Agente
- - Código CAV
- - CAV
- - Código SEG
- - Código REG
- - SEG REG
- - Código Centro
- - Código Concepto
- - Código C.Contable
- - Código de moneda
- - Monto Dólares
- - Monto Soles
- - Indice
- - Proceso
- - Fuente
- - Número de Póliza
- - Tipo Póliza
- - Nivel estandar
- - Tipo negocio
- - Gestor
- - Tipo documento
- - Número de documneto
- - Proveedor
- - Referencia
- - Partida
- - Código Faro
- - Fuente 2
- - Tipo de asiento
- - Estatus
- - Método Distribución
- - Método SC
- - Tipo día
- - NIT
- - Razón Social
- - Nombre Línea
- - Nombre Subcanal
- - Descripción Reg.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botón ''Exactus procesado"
4. 4. El usuario presiona el botón ''Ver"
5. 5. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.2.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente Columnas de Driver Producto de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente columnas de Driver Producto procesado de flujo de Aprovisionamiento de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de  Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Driver Producto definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - Código Método
- - Descripción Método
- - Código producto
- - Nombre producto
- - Código línea
- - Línea
- - Factor
- 
- Columna definidas opcionales.
- - Código producto destino

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.2.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente Columnas de Driver Subcanal de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente columnas de Driver Subcanal procesado de flujo de Aprovisionamiento de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Administrador de Gastos o Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Driver Subcanal definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - Código método
- - Código canal
- - Nombre canal
- - Código subcanal
- - Nombre Subcanal
- - Factor
- 
- Columna definidas opcionales.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.3.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente Columnas de Método Subcanal de flujo de Asignaciones de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente columnas de Método Subcanal de flujo de Asignaciones de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Administrador de Gastos o Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Método Subcanal definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - Código concepto
- - Código ramo
- - Código Línea
- -  Nombre Línea
- - Código producto
- - Nombre producto
- - Código canal
- - Código método
- 
- Columna definidas opcionales.
- - Se muestran todos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones " > "Método Subcanal".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.3.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente Columnas de Método Producto de flujo de Asignaciones de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente columnas de Método Producto de flujo de Asignaciones de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Administrador de Gastos o Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Método Producto definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - Código Concepto
- - Código Ramo
- - Código Línea
- - Nombre Línea
- 
- Columna definidas opcionales.
- - Código Canal
- - Código Método

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones " > "Método Producto".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.3.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente Columnas de Especiales NIIF de flujo de Asignaciones de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción 'Mostrar todas'' de componente columnas de Especiales NIIF de flujo de Asignaciones de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Administrador de Gastos o Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Especiales NIIF definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- 
- - Nombre Producto
- - Nombre Subcanal
- - Tipo Distribución
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Concepto N1
- - Concepto N2
- - CECO
- 
- 
- Columna definidas opcionales.
- - Código Producto
- - Código Subcanal
- - Método Valoración
- - Porcentaje
- - Código Concepto
- - Código Línea
- - Nombre Línea
- - Código Canal
- - Nombre Canal
- - Dígito Cuenta
- - Modificado

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones " > "Especiales NIIF".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-04.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' de componente Columnas de Cuentas Contables de flujo de Parametrización de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción ''Ocultar todas'' de componente Columnas de Cuentas Contables de flujo de Parametrización de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - Descripción
- - Concepto N1
- - Concepto N2
- - Concepto N3
- - Código Ramo
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Tipo NIIF 17 CBR
- - Modificado
- 
- Columna definidas opcionales.
- - Concepto
- - Tipo de cuenta

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' de componente Columnas de Centros de flujo de Parametrización de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción ''Ocultar todas'' de componente Columnas de Cuentas Contables de flujo de Parametrización de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Centros definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- -Negocio
- - Centro de Costo
- - Nombre Centro de costo
- - Nombre Línea
- - Nombre producto
- - Nombre canal
- - Nombre subcanal
- - Tipo
- - Código Producto
- - Modificado
- 
- Columna definidas opcionales.
- - Código línea
- - Código canal
- - Código subcanal
- - Estado CECO
- - Tipo emisión
- - Tipo negocio
- - Tipo producto

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Parametrización" > "Cuentas Contables".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' de componente Columnas de Exactus sin procesar de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción ''Ocultar todas'' de componente Columnas de Exactus sin procesar de flujo de Aprovisionamiento de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Administrador de Gastos o Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Exactus sin porcesa definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - Descripción
- - Asiento
- - Débito Local
- - Crédito Local
- - Centro Costo
- - Descripción Centro Costo
- - Tipo de Asiento
- - Razón Social
- - Segmento
- - Canal Distribución
- - Tipo Transacción
- 
- 
- Columna definidas opcionales.
- - Origen
- - Tipo de Documento
- - Documento
- - Referencia
- - Débito Dólar
- - Crédito Dólar
- - Fecha
- - NIT
- - Fuente
- - Notas
- - Fecha/Hora Creación
- - Flujo Efectivo
- - Patrimonio Neto
- - Partida
- - Broker
- - Canal Alt.
- - Cliente
- - Póliza
- - Siniestro
- - Producto
- - Cuenta Origen
- - Tipo Asiento
- - Asiento Origen
- - Centro Costo Origen
- - Identificador NIIF
- - Tipo Documento Cliente
- - Nombre Broker
- - Nombre Producto
- - Grupo Comercial
- - Nombre Grupo Comercial
- - Segmento Mercado
- - Fecha Inicio Vigencia Póliza
- - Fecha Fin Vigencia Póliza

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus sin procesar".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' de componente Columnas de Exactus procesado de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción ''Ocultar todas'' de componente Columnas de Exactus procesado de flujo de Aprovisionamiento de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Exactus procesado definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Mostrar todas'': muestra todas las columnas de la tabla.
5. 5- la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - Negocio
- - Información
- - Contabilidad
- - Código Línea
- - Ramo
- - Ramo Directo
- - Riesgo Contable
- - Rubro
- - Código Grupo Prod
- - Código producto
- - Código canal
- - Canal Distribución
- - Grupo canales
- - Grupo comercial
- 
- 
- Columna definidas opcionales.
- - Cod subcanal
- - Cod Agente
- - Agente
- - Código CAV
- - CAV
- - Código SEG
- - Código REG
- - SEG REG
- - Código Centro
- - Código Concepto
- - Código C.Contable
- - Código de moneda
- - Monto Dólares
- - Monto Soles
- - Indice
- - Proceso
- - Fuente
- - Número de Póliza
- - Tipo Póliza
- - Nivel estandar
- - Tipo negocio
- - Gestor
- - Tipo documento
- - Número de documneto
- - Proveedor
- - Referencia
- - Partida
- - Código Faro
- - Fuente 2
- - Tipo de asiento
- - Estatus
- - Método Distribución
- - Método SC
- - Tipo día
- - NIT
- - Razón Social
- - Nombre Línea
- - Nombre Subcanal
- - Descripción Reg.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento" > "Exactus porcesa".
3. 3. El usuario presiona el botón ''Exactus procesado"
4. 4. El usuario presiona el botón ''Ver"
5. 5. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.2.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' de componente Columnas de Driver Producto de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción ''Ocultar todas'' de componente Columnas de Driver Producto sin procesar de flujo de Aprovisionamiento de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Driver Producto definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - Código Método
- - Descripción Método
- - Código producto
- - Nombre producto
- - Código línea
- - Línea
- - Factor
- 
- Columna definidas opcionales.
- - Código producto destino

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento " > "Driver Producto".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.2.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' de componente Columnas de Driver Subcanal de flujo de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción ''Ocultar todas'' de componente Columnas de Driver Subcanal sin procesar de flujo de Aprovisionamiento de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Driver Subcanal definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- Opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - Código método
- - Código canal
- - Nombre canal
- - Código subcanal
- - Nombre Subcanal
- - Factor
- 
- Columna definidas opcionales.

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Aprovisionamiento " > "Driver Sudcanal".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.3.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' de componente Columnas de Método Subcanal de flujo de Asignaciones de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción ''Ocultar todas'' de componente Columnas de Método Subcanal sin procesar de flujo de Asignaciones de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Método Subcanal definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- Opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - Código concepto
- - Código ramo
- - Código Línea
- -  Nombre Línea
- - Código producto
- - Nombre producto
- - Código canal
- - Código método
- 
- Columna definidas opcionales.
- - Se muestran todos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Sudcanal".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.3.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' de componente Columnas de Driver Producto de flujo de Asignaciones de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción ''Ocultar todas'' de componente Columnas de Driver Producto sin procesar de flujo de Asignaciones de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Método Producto definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- Opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - Código Concepto
- - Código Ramo
- - Código Línea
- - Nombre Línea
- 
- Columna definidas opcionales.
- - Código Canal
- - Código Método

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Método Producto".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.3.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opción''Ocultar todas'' de componente Columnas de Especiales NIIF de flujo de Asignaciones de Gastos Técnicos

**Descripcion:** Validar el correcto funcionamiento de la opción ''Ocultar todas'' de componente Columnas de Especiales NIIF sin procesar de flujo de Asignaciones de Gastos Técnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos Técnicos
2. 2- están configurados los nombre de las columnas de archivo Especiales NIIF definido para el motor.
3. 3- las columnas por defecto siempre se mostrarán..
4. 4- Opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- 
- - Nombre Producto
- - Nombre Subcanal
- - Tipo Distribución
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Concepto N1
- - Concepto N2
- - CECO
- 
- 
- Columna definidas opcionales.
- - Código Producto
- - Código Subcanal
- - Método Valoración
- - Porcentaje
- - Código Concepto
- - Código Línea
- - Nombre Línea
- - Código Canal
- - Nombre Canal
- - Dígito Cuenta
- - Modificado

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2. El usuario selecciona de menú lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botón ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

## Escenario: E63-GT-BUS
**Descripcion:** Validar el funcionamiento integral de buscador en el sistema en el  flujo de  Gastos Técnicos

### Caso de prueba: E63-GT-BUS
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador en el flujo de Gastos Técnicos

**Descripcion:** Validar que el buscador filtra, encuentra y maneja los datos correctamente según los diferentes criterios de entrada en todas sus vistas

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos.
2. 2- Todos los filtos deben estar activos.

**Datos:**
- Datos de los registros almacenados y elementos para uso de prueba (Números, Letras, carácteres especiales o combinaciones)

**Pasos:**
1. 1. El usuario Gestor de Gastos. accede a la página de inicio ''Distribución''.
2. 2. El usuario accede a los filtros de búsqueda general (buscar) o especificos (Código, Nombre, Unidad de Cuenta, etc)

**Resultado esperado:**
El sistema devuelve los resultados esperados y debe comportarse como se describe.

1- El resultado corresponde con a la columna correcta.
2- La búsqueda en el filtro general devuelve todos los elementos encontrados a partir de los criterios de entrada.
3- A partir de tercer caracter brinda la opción de completamiento.

---

## Escenario: Validar la correcta ejecución de botón ''Borrar Versión'' de la pantalla Exactus de Gastos Técnicos.
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E68-GT-01
- Implementado: No

**Titulo:** Validar la correcta ejecución de botón ''Borrar Versión'' de la pantalla Exactus de Gastos Técnicos.

**Descripcion:** Validar la correcta ejecución de botón ''Borrar Versión'' de la pantalla Exactus de Gastos Técnicos.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor  de Gastos Técnicos.
2. 2- El botón Borrar Versión esté funcional.
3. 3- Debe existir un archivo Exactus cargado anteriormente.

**Datos:**
- Archivo ''REAL Exactus sin procesar GT'' definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. 1. El usuario accede a la página de inicio ''Distribución''  con el selector por defecto en Gastos Técnicos
2. 2.  El usuario selecciona de menú lateral "Aprovisionamiento"  > " Exactus".
3. 3. El usuario presiona botón ''Borrar Versión''.
4. 4. Se levanta un modal con la advertencia Se eliminarán todos los datos asociados al archivo Exactus cargados. ¿Desea continuar?

**Resultado esperado:**
La data de Exactus ha sido borrada satisfactoriamente. Se muestra el mensaje  ¡Listo! La data ha sido borrada. 

Se debe validar que en el front no se muestre data.

---

