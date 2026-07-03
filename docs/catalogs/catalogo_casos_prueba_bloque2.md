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
2. El usuario debe ingresar con un rol Administrador de Gastos para ejecutar cualquier acciÃ³n.

**Datos:**
- Rol: Administrador de gasto
- Correo: inetum.Fernando.Alva@pacifico.com.pe
- ContraseÃ±a: Bry.18AC!

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio de sesiÃ³n (https://distribuciÃ³nGastosdev.pacificotest.com.pe/)
2. 2. Ingresa el correo y contraseÃ±a y da click en el botÃ³n "inicio de sesiÃ³n"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-En la parte inferior de sidebar, se muestra el nombre y rol, al hacer click se muestra el correo  y la acciÃ³n de cerrar sesiÃ³n

---

## Escenario: E0-LOGIN-ADMIN-02
**Descripcion:** Validar que el sistema restringe la modificaciÃ³n de archivos con el rol de Administrador

### Caso de prueba: E0-LOGIN-ADMIN-02
- Implementado: Si

**Titulo:** Validar que el rol administrador puede visualizar y modificar los archivos comunes

**Descripcion:** Validar el rol Administrador de Gestor de Gastos puede hacer uso total de las funcionalidades de la secciÃ³n comunes

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos

**Datos:**
- Archivos comunes LÃ­nea, Canales, Subcanal, Grupo Producto, Maestro UoA y ConfiguraciÃ³n de Parches Ãºnicamente a usuarios con el rol "Administrador de Gastos"

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio de sesiÃ³n --> https://distribuciÃ³nGastosdev.pacificotest.com.pe/
2. 2- Ingresa el correo y contraseÃ±a y da click en el botÃ³n "inicio de sesiÃ³n"
3. 3-El usuario selecciona de menÃº lateral "Comunes" > "LÃ­neas"
4. 4-El usuario selecciona de menÃº lateral "Comunes" > "Grupo Producto".
5. 5-El usuario selecciona de menÃº lateral "Comunes" > "Canales".
6. 6-El usuario selecciona de menÃº lateral "Comunes" > "Subcanales".
7. 7-El usuario selecciona de menÃº lateral "Comunes" > "Maestro UoA".
8. 8-El usuario selecciona de menÃº lateral "Comunes" > "Unidades de Cuenta - BBVA/BFA".
9. 9-El usuario selecciona de menÃº lateral "Comunes" > "ConfiguraciÃ³n de Parches".

**Resultado esperado:**
1-El usuario accede correctamente al sistema y puede visualizar todas las secciones
2-El usuario puede crear, editar y eliminar registros en el flujo de comunes con su rol "Administrador de Gastos"

---

## Escenario: E0-LOGIN-Gestor-GASTO-01
**Descripcion:** Validar que sistema permite autenticarse con el rol de Gestor de Gastos TÃ©cnicos

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-01
- Implementado: Si

**Titulo:** Validar que el rol de Gestor de Gastos TÃ©cnicos tiene acceso al sistema

**Descripcion:** Validar que un usuario con el rol de Gestor de Gastos TÃ©cnicos pueda autenticarse al sistema.

**Precondiciones:**
1. Usuario creado en el sistema con rol Gestor de Gastos TÃ©cnicos
2. El usuario estÃ¡ activo.
3. El usuario con el rol de Gestor de Gastos TÃ©cnicos Solo podrÃ¡ ejecutar acciones propias de Gastos TÃ©cnicos

**Datos:**
- Rol: Gestor de Gastos TÃ©cnicos
- Correo: psilvestre@pacificotest.com.pe
- ContraseÃ±a: MDG rocks!

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio de sesiÃ³n (https://distribuciÃ³nGastosdev.pacificotest.com.pe/)
2. 2. Ingresa el correo y contraseÃ±a y da click en el botÃ³n "inicio de sesiÃ³n"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El sidebar muestra el rol Gestor de Gastos TÃ©cnicos y al hacer click se muestra el correo  y la accion de cerrar sesion
3-Se visualiza por defecto en el selector superior "Gastos TÃ©cnicos" y no puede selecionar otro tipo de gasto.

---

## Escenario: E0-LOGIN-Gestor-GASTO-02
**Descripcion:** Validar que el sistema restringe la modificaciÃ³n de archivos comunes a un rol de Gestor de Gastos TÃ©cnicos

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-02
- Implementado: Si

**Titulo:** Validar que el rol de Gestor de  Gastos TÃ©cnicos no pueda visualizar ni modificar los archivos ni datos de flujo de comunes

**Descripcion:** Validar el rol Gestor de  Gastos TÃ©cnicos no pueda visualizar ni modificar informacion de flujo de comunes

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- Archivos comunes LÃ­nea, Canales, Subcanal, Grupo Producto, Maestro UoA y ConfiguraciÃ³n de Parches Ãºnicamente a usuarios con el rol "Administrador de Gastos"

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio de sesion --> https://distribucionGastos.pacificotest.com.pe/
2. 2- Ingresa el correo y contraseÃ±a, con el rol correspondiente, dar click en el botÃ³n "inicio de sesiÃ³n"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no puede visualizar el flujo de comunes

---

## Escenario: E0-LOGIN-Gestor-GASTO-03
**Descripcion:** Validar que el sistema restringe la eliminaciÃ³n de archivos a un rol de Gestor de Gastos para el flujo de Gastos TÃ©cnicos

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-03.1
- Implementado: Si

**Titulo:** Validar que el rol de Gestor de Gastos TÃ©cnicos no pueda eliminar registros de flujo de parametrizaciÃ³n

**Descripcion:** Validar el rol Gestor de  Gastos TÃ©cnicos no pueda eliminar informacion de flujo de parametrizaciÃ³n

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- Archivos ParametrizaciÃ³n :Ramo, Centros y cuentas Contables
- Ãšnicamente a usuarios con el rol "Administrador de Gastos" puede eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio de sesiÃ³n --> https://distribuciÃ³nGastosdev.pacificotest.com.pe/
2. 2- Ingresa el correo y contraseÃ±a, con el rol correspondiente, dar click en el botÃ³n "inicio de sesiÃ³n"
3. 3-El usuario selecciona de menÃº lateral "ParametrizaciÃ³n " > "Ramo".
4. 4-El usuario selecciona de menÃº lateral "ParametrizaciÃ³n " > "Cuentas contables"
5. 5-El usuario selecciona de menÃº lateral "ParametrizaciÃ³n " > "Centros ".

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no se le visualiza el icono para eliminar en las acciones en el flujo de ParametrizaciÃ³n

---

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-03.2
- Implementado: Si

**Titulo:** Validar que el rol de gestor de gastos TÃ©cnicos no pueda eliminar registros de flujo de Aprovisionamiento

**Descripcion:** Validar el rol gestor de  gastos TÃ©cnicos no pueda eliminar informacion de flujo de Aprovisionamiento

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de gastos TÃ©cnicos

**Datos:**
- Archivos Aprovisionamiento:
- Exactus (procesado)
- Exactus (sin procesar)
- Driver Producto
- Driver Subcanal
- Unidad de cuenta GT
- Maestro de Negocio y Embebidos
- 
- Ãšnicamente a usuarios con el rol "Administrador de Gastos" puede eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio de sesiÃ³n --> https://distribuciÃ³nGastosdev.pacificotest.com.pe/
2. 2- Ingresa el correo y contraseÃ±a, con el rol correspondiente, dar click en el botÃ³n "inicio de sesiÃ³n"
3. 3-El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus"
4. 5-El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
5. 6-El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
6. 7-El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de cuenta GT".
7. 8-El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio Embebidos".

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no se le visualiza el icono para eliminar en las acciones en el flujo de Aprovisionamiento

---

### Caso de prueba: E0-LOGIN-GESTOR-GASTO-03.3
- Implementado: Si

**Titulo:** Validar que el rol de gestor de gastos TÃ©cnicos no pueda eliminar registros de flujo de Asignaciones

**Descripcion:** Validar el rol gestor de  gastos TÃ©cnicos no pueda modificar informacion de flujo de Asignaciones

**Precondiciones:**
1. El usuario debe ingresar con el rol de Gestor de gastos TÃ©cnicos

**Datos:**
- Archivos Asignaciones:
- Especiales NIIF
- MÃ©todo subcanal
- MÃ©todo Producto
- 
- Ãšnicamente a usuarios con el rol "Administrador de Gastos" puede eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio de sesiÃ³n --> https://distribuciÃ³nGastosdev.pacificotest.com.pe/
2. 2- Ingresa el correo y contraseÃ±a, con el rol correspondiente, dar click en el botÃ³n "inicio de sesiÃ³n"
3. 3-El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Especiales NIIF"
4. 4-El usuario selecciona de menÃº lateral "Aprovisionamiento" > "MÃ©todo subcanal"
5. 5-El usuario selecciona de menÃº lateral "Aprovisionamiento" > "MÃ©todo Producto"

**Resultado esperado:**
1-El usuario accede correctamente al sistema
2-El usuario no se le visualiza el icono para eliminar en las acciones en el flujo de Aprovisionamiento

---

## Escenario: E40-DIS-01
**Descripcion:** Validar que el sistema pueda crear una nueva distribuciÃ³n

### Caso de prueba: E40-DIS-01
- Implementado: Si

**Titulo:** Validar el correcto funcionamiento de crear una nueva distribuciÃ³n

**Descripcion:** Validar que se pueda crear una nueva distribuciÃ³n desde el modal "Nueva DistribuciÃ³n"

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol Gestor de Gastos TÃ©cnicos.
2. 2- estÃ¡ distribuciÃ³n no haya sido creada anteriormente.
3. 3- El nombre se va formando con la informaciÃ³n de los campos: perÃ­odo, Tipo y SecciÃ³n.
4. 4- Los campos Tipo, perÃ­odo y Secciones son select.

**Datos:**
- Campos de formulario
- -Nombre: perÃ­odo Tipo SecciÃ³n
- -Tipo: Real
- -perÃ­odo: catÃ¡logo con los periodos de aÃ±o en curso, Ej: 202501, 202502, etc.
- -VersiÃ³n: nÃºmero entero con un decimal, Ej: 1.0, 1.1, 2.0
- -Tasa de cambio: nÃºmero entero de hasta 4 cifras con dos decimales, Ej:13.98, 1.09, 0.65, 1234.98
- -Secciones: Flujo de mes, Ajuste de mes

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''.
2. 2. El usuario presiona "Nueva DistribuciÃ³n".
3. 3. Se levanta el modal con tÃ­tulo "Crear distribuciÃ³n", el botÃ³n crear estÃ¡ deshabilitado
4. 4. El usuario completa los campos y se habilita el botÃ³n crear.
5. 5. El usuario presiona el botÃ³n crear
6. 6. Se muestra un mensaje de Ã©xito.

**Resultado esperado:**
El sistema crea una nueva distribuciÃ³n correctamente y muestra un mensaje de exito Â¡Hecho! El registro se agregÃ³ sin problemas

---

## Escenario: E40-DIS-02
**Descripcion:** Validar las reglas de negocio al crear una nueva distribuciÃ³n

### Caso de prueba: E40-DIS-02
- Implementado: Si

**Titulo:** Validar que no se pueda crear una nueva distribuciÃ³n porque no cumplen con las reglas definidas de negocio

**Descripcion:** Validar no se pueda crear una nueva distribuciÃ³n porque no cumplen con las reglas definidas de negocio desde el modal "Nueva DistribuciÃ³n"

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol Gestor de Gastos TÃ©cnicos.
2. 2- EstÃ¡ distribuciÃ³n ya ha sido creada anteriormente.
3. 3- Solo se puede crear una distribuciÃ³n, no se puede editar.
4. 4- El nombre se va formando con la informaciÃ³n de los campos: perÃ­odo, Tipo y SecciÃ³n.
5. 5- Los campos Tipo, perÃ­odo y Secciones son select.

**Datos:**
- Todos los campos de formulario se han completado con los datos idÃ©nticos a una distribuciÃ³n creada anteriormente
- -Nombre
- -Tipo
- -perÃ­odo
- -VersiÃ³n
- -Tasa de cambio
- -Secciones

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''.
2. 2. El usuario presiona "Nueva DistribuciÃ³n".
3. 3. Se levanta el modal con tÃ­tulo "Crear distribuciÃ³n", el botÃ³n crear estÃ¡ deshabilitado
4. 4. El usuario completa los campos y se habilita el botÃ³n crear.
5. 5. El usuario presiona el botÃ³n crear
6. 6. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no crea una nueva distribuciÃ³n y muestra un mensaje de error Algo no coincide entre los datos ingresados. Por favor, revise que los campos estÃ¡n relacionados correctamente e intente de nuevo.

---

## Escenario: E40-DIS-03
**Descripcion:** Validar el formato de los campos de formulario al crear una nueva distribuciÃ³n

### Caso de prueba: E40-DIS-03
- Implementado: No

**Titulo:** Validar que no se pueda crear una nueva distribuciÃ³n por error de formato de los campos

**Descripcion:** Validar no se pueda crear una nueva distribuciÃ³n por error de formato de los campos

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol Gestor de Gastos TÃ©cnicos.
2. 2- estÃ¡ distribuciÃ³n no haya sido creada anteriormente.

**Datos:**
- Campos de formulario
- -Nombre: perÃ­odo Tipo SecciÃ³n
- -Tipo: Real
- -perÃ­odo: catÃ¡logo con los periodos de aÃ±o en curso, Ej: 202501, 202502, etc.
- -VersiÃ³n: nÃºmero entero con un decimal, Ej: 1.0, 1.1, 2.0
- -Tasa de cambio: nÃºmero entero de hasta 4 cifras con dos decimales, Ej:13.98, 1.09, 0.65, 1234.98
- -Secciones: Flujo de mes, Ajuste de mes

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''.
2. 2. El usuario presiona "Nueva DistribuciÃ³n".
3. 3. Se levanta el modal con tÃ­tulo "Crear distribuciÃ³n", el botÃ³n crear estÃ¡ deshabilitado
4. 4. El usuario completa los campos y se habilita el botÃ³n crear.
5. 5. El usuario presiona el botÃ³n crear
6. 6. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no crea una nueva distribuciÃ³n y muestra un mensaje Algunos datos tienen un formato no vÃ¡lido o contienen caracteres extraÃ±os

---

## Escenario: E40-DIS-04
**Descripcion:** Validar que el sistema pueda editar el nombre al crear una distribuciÃ³n con un rol de Gestor de Gastos

### Caso de prueba: E40-DIS-04
- Implementado: Si

**Titulo:** Validar la EdiciÃ³n de nombre durante la creaciÃ³n de una distribuciÃ³n con el rol de Gestor de Gastos TÃ©cnicos.

**Descripcion:** Validar que un usuario con el rol de Gestor de Gastos pueda modificar correctamente el nombre de una distribuciÃ³n durante su proceso de creaciÃ³n, asegurando que el sistema permite la ediciÃ³n de campo y guarde los cambios de forma exitosa.

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol de Gestor de Gastos TÃ©cnicos.
2. 2- EstÃ¡ distribuciÃ³n no haya sido creada anteriormente.

**Datos:**
- Campos de formulario
- -Nombre:
- -Tipo: Real NIIF., REAL LOCAL y PRESUPUESTO
- -perÃ­odo: catÃ¡logo con los periodos de aÃ±o en curso, Ej: 202501, 202502, etc.
- -VersiÃ³n: nÃºmero entero con un decimal, Ej: 1.0, 1.1, 2.0
- -Tasa de cambio: nÃºmero entero de hasta 4 cifras con dos decimales, Ej:13.98, 1.09, 0.65, 1234.98
- -Secciones: Flujo de mes

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''.
2. 2. El usuario presiona "Nueva DistribuciÃ³n".
3. 3. Se levanta el modal con tÃ­tulo "Crear distribuciÃ³n", el botÃ³n crear estÃ¡ deshabilitado
4. 4. El usuario ingresa un nombre en el campo Nombre
5. 5. El usuario selecciona el tipo, [REAL NIIF]
6. 6. El sistema muestra una sugerencia debajo de campo de nombre con el texto: "Sugerencia: [Real NIIF]"
7. 7. El usuario tiene dos opciones:
8. Si hace clic en â€œAplicarâ€, el sistema actualiza el nombre con la sugerencia.
9. Si no hace clic en â€œAplicarâ€, el nombre ingresado se mantiene sin cambios.
10. 8. El usuario completa los demÃ¡s campos obligatorios de formulario.
11. 9. El sistema habilita el botÃ³n â€œCrearâ€ una vez que todos los campos requeridos son vÃ¡lidos.
12. 10. El usuario hace clic en el botÃ³n â€œCrearâ€.

**Resultado esperado:**
El sistema crea una nueva distribuciÃ³n con el nombre editado correctamente y muestra un mensaje de Ã©xito Â¡Hecho! El registro se agregÃ³ sin problemas

---

## Escenario: E41-DIS-01
**Descripcion:** Validar que el sistema permite visualizar una distribuciÃ³n desde el menÃº de acciones

### Caso de prueba: E41-DIS-01
- Implementado: Si

**Titulo:** Validar que se pueda visualizar el estado de la ejecuciÃ³n de la distribuciÃ³n desde el menÃº de acciones

**Descripcion:** Validar que se pueda visualizar el estado de una distribuciÃ³n

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n debe estar creada y visible en la tabla de distribuciÃ³n.

**Datos:**
- Campos de formulario
- -Nombre(que valores acepta)
- -perÃ­odo
- -Tipo
- -Tasa de cambio
- -Secciones

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''.
2. 2. El usuario presiona el icono "ojo" para visualizar el registro seleccionado
3. 3. Se levanta el modal y se muestra la informaciÃ³n de progreso de la distribuciÃ³n seleccionada.

**Resultado esperado:**
Se muestra los datos creados correctamente
Se levanta un modal con la informaciÃ³n de porciento de avance de la corrida por Fase y proceso
Si el estado es ''Creada'', todas sus fases mostrarÃ¡n ''Sin ejecutar''.

---

## Escenario: E42-DIS-01
**Descripcion:** Validar la disponibilidad de la acciÃ³n â€œCopiarâ€ desde el menÃº de acciones segÃºn el estado de la distribuciÃ³n

### Caso de prueba: E42-DIS-01
- Implementado: No

**Titulo:** Validar que el sistema permite copiar una distribuciÃ³n desde el menÃº de acciones cuando el estado sea â€œCompletada

**Descripcion:** Validar que se realice una copia de una distribuciÃ³n ya creada anteriormente.

**Precondiciones:**
1. 1-El usuario debe ingresar con un rol Gestor de Gastos TÃ©cnicos.
2. 2- Se debe haber creado la distribuciÃ³n origen
3. 3- La distribuciÃ³n selecciona para realizar la copia estÃ¡ en estado Completada

**Datos:**
- Data de la distribuciÃ³n seleccionada como origen para realizar la copia.
- Estado: completada

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''.
2. 2. El usuario presiona el icono "copy" para copiar el registro de la distribuciÃ³n seleccionada.
3. 3. Se levanta un modal con el texto "Se va a copiar toda la informaciÃ³n de la distribuciÃ³n seleccionada." donde se puede seleccionar el perÃ­odo y VersiÃ³n"
4. 4.El usuario hace clik en aceptar

**Resultado esperado:**
Se muestra en el frontend el nuevo registro de distribuciÃ³n, en donde se copian todos los datos de la distribuciÃ³n seleccionada, con el estado "creada"

---

### Caso de prueba: E42-DIS-01.1
- Implementado: No

**Titulo:** Validar que el sistema no muestre la opciÃ³n â€œCopiarâ€ en el menÃº de acciones cuando el estado sea diferente a â€œCompletadaâ€

**Descripcion:** Validar que no se muestre el icono de copiar en una distribuciÃ³n con estado diferente a completado

**Precondiciones:**
1. 1-El usuario debe ingresar con un rol Gestor de Gastos TÃ©cnicos.
2. 2- Se debe haber creado la distribuciÃ³n origen
3. 3- La distribuciÃ³n selecciona para realizar la copia estÃ¡ con estado diferente a completado

**Datos:**
- Estado: creada, detenido, con errores y corriendo

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''.
2. 2. El usuario busca una distribuciÃ³n en estado --> creada
3. 3. El usuario busca una distribuciÃ³n en estado --> detenido
4. 4. El usuario busca una distribuciÃ³n en estado --> con errores
5. 5. El usuario busca una distribuciÃ³n en estado --> corriendo

**Resultado esperado:**
No se muestra en ninguna de las distribuciones el icono para copiar

---

## Escenario: E43-DIS-01
**Descripcion:** Validar la disponibilidad de la acciÃ³n â€œEliminarâ€ desde el menÃº de acciones segÃºn el estado de la distribuciÃ³n

### Caso de prueba: E43-DIS-01.1
- Implementado: No

**Titulo:** Validar que el sistema permite Eliminar una distribuciÃ³n desde el menÃº de acciones cuando el estado sea â€œCreada" y su rol sea Administrador de Gastos

**Descripcion:** Validar que se pueda eliminar la distribuciÃ³n seleccionada.

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol Administrador de Gastos.
2. 2- La distribuciÃ³n debe estar creada anteriormente y su Estados: Creada

**Datos:**
- Data con la que fue creada la distribuciÃ³n y en estado Creada

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''.
2. 2. El usuario presiona el icono "basurero" para eliminar el registro seleccionado.
3. 3. Se levanta un modal con la advertencia Se eliminarÃ¡n todos los datos asociados a la distribuciÃ³n. Â¿Desea continuar?

**Resultado esperado:**
Se elimina el registro seleccionado

1- Se muestra un mensaje de Ã©xito Â¡Registro eliminado con Ã©xito! 
2- se elimina el registro de la tabla distribuciÃ³n mostrada en el front.

---

### Caso de prueba: E43-DIS-01.2
- Implementado: No

**Titulo:** Validar que el sistema permite Eliminar una distribuciÃ³n desde el menÃº de acciones cuando el estado sea â€œCon errores" y su rol sea Administrador de Gastos

**Descripcion:** Validar que se pueda eliminar la  distribuciÃ³n seleccionada.

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol Administrador de Gastos.
2. 2- La distribuciÃ³n debe estar creada anteriormente y su Estado debe ser Con Errores

**Datos:**
- Data con la que fue creada la distribuciÃ³n y su estado Con Errores

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''.
2. 2. Selecciona una distribuciÃ³n en estado: Con Errores.
3. 3. El usuario presiona el icono "basurero" para eliminar el registro seleccionado.
4. 4. Se levanta un modal con la advertencia Se eliminarÃ¡n todos los datos asociados a la distribuciÃ³n. Â¿Desea continuar?
5. 5. El usuario acepta

**Resultado esperado:**
Se elimina el registro seleccionado

1- Se muestra un mensaje de Ã©xito Â¡Registro eliminado con Ã©xito! 
2- Se elimina el registro de la tabla distribuciÃ³n mostrada en el front.

---

### Caso de prueba: E43-DIS-01.3
- Implementado: No

**Titulo:** Validar que el sistema No permite Eliminar una distribuciÃ³n desde el menÃº de acciones cuando el estado sea: â€œDetenida", â€œCorriendo" o â€œCompletada"

**Descripcion:** Validar que NO se pueda eliminar la distribuciÃ³n seleccionada.

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol Administrador de Gastos.
2. 2- La distribuciÃ³n debe estar en Estado: Detenida, Corriendo o Completada

**Datos:**
- Data con la que fue creada la distribuciÃ³n y en estado Detenida

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''.
2. 2. El usuario busca una distribuciÃ³n en estado --> Detenida
3. 3. El usuario busca una distribuciÃ³n en estado --> Corriendo
4. 4. El usuario busca una distribuciÃ³n en estado --> Completada

**Resultado esperado:**
No se muestra en ninguna de las distribuciones el icono para eliminar. Lo que impide eliminar la distribuciÃ³n.

---

## Escenario: Validar que el sistema permite visualizar una distribuciÃ³n desde el listado de distribuciones
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E44-DIS
- Implementado: Si

**Titulo:** Validar que se pueda visualizar una distribuciÃ³n distribuciÃ³n seleccionando de listado de la tabla principal

**Descripcion:** Validar que al seleccionar una distribuciÃ³n se muestran los datos correctamente en pantalla

**Precondiciones:**
1. 1- El usuario debe ingresar con un rol de Gestor de Gastos TÃ©cnicos
2. 2- Se debe haber creado la distribuciÃ³n origen

**Datos:**
- Data con la que fue creada la distribuciÃ³n en cualquiera de sus estado

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''.
2. 2. El usuario hace click en el nombre de distribuciÃ³n desde la tabla principal de distribuciones
3. 3. Se levanta el modal y se muestra el texto "La informaciÃ³n que se mostrarÃ¡ corresponde a la distribuciÃ³n seleccionada y perÃ­odo asociado a ella"
4. 4. El usuario, el usuario da clic en "Aceptar"

**Resultado esperado:**
Se muestra los datos seleccionado correctamente

1-Se actualiza el dropdown principal con la selecciÃ³n
2-La distribuciÃ³n seleccionada queda marca en celeste
3-Los datos ingresados a esa distribuciÃ³n me muestra correctamente
4-En la secciÃ³n de procesos muestra el estado de la distribuciÃ³n seleccionada

---

## Escenario: E67-DIS
**Descripcion:** Validar que el archivo descargado de DistribuciÃ³n muestre, las cabeceras, los datos correctamente y no tenga perdida de informaciÃ³n

### Caso de prueba: E67-DIS
- Implementado: Si

**Titulo:** Validar alteraciÃ³n en el archivo descargado DistribuciÃ³n

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo

**Datos:**
- Archivo DistribuciÃ³n

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''
2. 2.  El usuario presiona el botÃ³n "Descargar".
3. 3. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos

---

## Escenario: E58-GT-01
**Descripcion:** Validar que no se cargue el archivo sin que su antecesor ya se encuentre cargado en ParametrizaciÃ³n de Gastos TÃ©cnicos

### Caso de prueba: E58-GT-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Centros sin que su antecesor ya se encuentre cargado en ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo Centros sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gastos TÃ©cnicos
2. 2- No deben estar cargados los archivos de Comunes: LÃ­nea, Grupo producto, Canal y Subcanal.

**Datos:**
- Archivo ''REAL Centros GT'' definidos en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Centros",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar estÃ© archivo porque el archivo anterior aÃºn no ha sido cargado

---

## Escenario: E58-GT-02
**Descripcion:** Validar que no se cargue el archivo sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Gastos TÃ©cnicos

### Caso de prueba: E58-GT-02.1
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Exactus sin procesar GT sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo REAL Exactus sin procesar GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos TÃ©cnicos
2. 2- No deben estar cargados los archivos: Cuentas Contables y Centros de ParametrizaciÃ³n de GT y LÃ­neas y Canal de Comunes.

**Datos:**
- Archivo ''REAL Exactus sin procesar GT'' definidos en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Exactus",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar estÃ© archivo porque el archivo anterior aÃºn no ha sido cargado

---

### Caso de prueba: E58-GT-02.2
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Driver Producto sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo REAL Driver Producto GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos TÃ©cnicos
2. 2- No debe estar cargado el archivo Grupo Producto y Lineas

**Datos:**
- Archivo ''REAL Driver Producto GT'' definidos en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Producto",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar estÃ© archivo porque el archivo anterior aÃºn no ha sido cargado

---

### Caso de prueba: E58-GT-02.3
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Driver Subcanal sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo REAL Driver Subcanal GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos TÃ©cnicos
2. 2- No debe estar cargado el archivo Canal, Subcanal.

**Datos:**
- Archivo ''REAL Driver Subcanal GT'' definidos en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar estÃ© archivo porque el archivo anterior aÃºn no ha sido cargado

---

### Caso de prueba: E58-GT-02.4
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Unidad de Cuenta GT sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo REAL Unidad de Cuenta GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos TÃ©cnicos
2. 2- No deben estar cargados los archivos: Ramo y Cuentas Contables de la parametrizaciÃ³n de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Unidad de Cuenta GT'' definidos en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Unidad de Cuenta",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar estÃ© archivo porque el archivo anterior aÃºn no ha sido cargado

---

### Caso de prueba: E58-GT-02.5
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Maestro de Negocio y Embebidos sin que su antecesor ya se encuentre cargado en Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo REAL Maestro de Embebidos GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos TÃ©cnicos
2. 2- No deben estar cargados los archivos: LÃ­nea, Grupo producto, Canal y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Maestro de Embebidos GT'' definidos en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar estÃ© archivo porque el archivo anterior aÃºn no ha sido cargado

---

## Escenario: E58-GT-03
**Descripcion:** Validar que no se cargue el archivo sin que su antecesor ya se encuentre cargado en Asignaciones de Gastos TÃ©cnicos

### Caso de prueba: E58-GT-03.1
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Asignaciones MÃ©todo Subcanal sin que su antecesor ya se encuentre cargado en Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo REAL MÃ©todo Subcanal GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos TÃ©cnicos
2. 2- No debe estar cargado el archivo: Driver Subcanal, lÃ­nea, Producto, Canal

**Datos:**
- Archivo ''REAL MÃ©todo Subcanal GT'' definidos en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar MÃ©todo Subcanal",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar estÃ© archivo porque el archivo anterior aÃºn no ha sido cargado

---

### Caso de prueba: E58-GT-03.2
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Asignaciones MÃ©todo Producto sin que su antecesor ya se encuentre cargado en Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo REAL MÃ©todo Producto GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos TÃ©cnicos
2. 2- No debe estar cargado el archivo: Driver Producto.

**Datos:**
- Archivo ''REAL MÃ©todo Producto GT'' definidos en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Producto".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar MÃ©todo Producto",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar estÃ© archivo porque el archivo anterior aÃºn no ha sido cargado

---

### Caso de prueba: E58-GT-03.3
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Asignaciones Especiales NIIF sin que su antecesor ya se encuentre cargado en Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo REAL Especiales NIIF GT sin que su antecesor ya se encuentre cargado.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol  Gestor de Gastos TÃ©cnicos
2. 2- No deben estar cargados los archivos: Cuentas Contables y Centros de la parametrizaciÃ³n de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' definidos en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar MÃ©todo Subcanal",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra un mensaje de error.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.  No se puede Recargar estÃ© archivo porque el archivo anterior aÃºn no ha sido cargado

---

## Escenario: E59-GT-01
**Descripcion:** Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en ParametrizaciÃ³n de Gastos TÃ©cnicos

### Caso de prueba: E59-GT-01.1
- Implementado: No

**Titulo:** Carga de el archivo para ParametrizaciÃ³n en Ramo que ya contenga informaciÃ³n definido en el proceso Gastos TÃ©cnicos

**Descripcion:** Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Ramo GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. 5. Se levanta el modal con tÃ­tulo "Recargar Ramo",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de Ã©xito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E59-GT-01.2
- Implementado: No

**Titulo:** Carga de el archivo para ParametrizaciÃ³n en Cuentas Contables que ya contenga  informaciÃ³n definido en el proceso Gastos TÃ©cnicos

**Descripcion:** Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Cuentas Contables GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. 5. Se levanta el modal con tÃ­tulo "Recargar Cuentas Contables",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de Ã©xito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E59-GT-01.3
- Implementado: No

**Titulo:** Carga de el archivo para ParametrizaciÃ³n en Centros que ya contenga  informaciÃ³n definido en el proceso Gastos TÃ©cnicos

**Descripcion:** Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos
3. 3- que exista data cargada.
4. .

**Datos:**
- Archivo ''REAL Centros GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. 5. Se levanta el modal con tÃ­tulo "Recargar Centros",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de Ã©xito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: E59-GT-02
**Descripcion:** Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en Aprovisionamiento de Gastos TÃ©cnicos

### Caso de prueba: E59-GT-02.1
- Implementado: No

**Titulo:** Carga de el archivo para Aprovisionamiento en Exactus sin procesar que ya contenga  informaciÃ³n definido en el proceso Gastos TÃ©cnicos

**Descripcion:** Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Exactus sin procesar GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. 5. Se levanta el modal con tÃ­tulo "Recargar Exactus",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de Ã©xito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E59-GT-02.2
- Implementado: No

**Titulo:** Carga de el archivo para Aprovisionamiento en Driver Producto que ya contenga  informaciÃ³n definido en el proceso Gastos TÃ©cnicos

**Descripcion:** Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Driver Producto GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. 5. Se levanta el modal con tÃ­tulo "Recargar Driver Producto",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de Ã©xito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E59-GT-02.3
- Implementado: No

**Titulo:** Carga de el archivo para Aprovisionamiento en Driver Subcanal que ya contenga  informaciÃ³n definido en el proceso Gastos TÃ©cnicos

**Descripcion:** Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Driver Subcanal GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. 5. Se levanta el modal con tÃ­tulo "Recargar Driver Subcanal",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de Ã©xito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E59-GT-02.4
- Implementado: No

**Titulo:** Carga de el archivo para Aprovisionamiento en Unidad de Cuenta GT que ya contenga  informaciÃ³n definido en el proceso Gastos TÃ©cnicos

**Descripcion:** Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Unidad de Cuenta GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. 5. Se levanta el modal con tÃ­tulo "Recargar Unidad de Cuenta",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de Ã©xito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E59-GT-02.5
- Implementado: No

**Titulo:** Carga de el archivo para Aprovisionamiento en Maestro de Negocio y Embebidos que ya contenga  informaciÃ³n definido en el proceso Gastos TÃ©cnicos

**Descripcion:** Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Maestro de Embebidos GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. 5. Se levanta el modal con tÃ­tulo "Recargar Maestro de Negocio y Embebidos",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de Ã©xito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: E59-GT-03
**Descripcion:** Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en Asignaciones de Gastos TÃ©cnicos

### Caso de prueba: E59-GT-03.1
- Implementado: No

**Titulo:** Carga de el archivo para Asignaciones en MÃ©todo Subcanal que ya contenga informaciÃ³n definido en el proceso Gastos TÃ©cnicos

**Descripcion:** Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL MÃ©todo Subcanal GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. 5. Se levanta el modal con tÃ­tulo "Recargar MÃ©todo Subcanal",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de Ã©xito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E59-GT-03.2
- Implementado: No

**Titulo:** Carga de el archivo para Asignaciones en MÃ©todo Producto que ya contenga informaciÃ³n definido en el proceso Gastos TÃ©cnicos

**Descripcion:** Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL MÃ©todo Producto GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Producto".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. 5. Se levanta el modal con tÃ­tulo "Recargar MÃ©todo Producto",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de Ã©xito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E59-GT-03.3
- Implementado: No

**Titulo:** Carga de el archivo para Asignaciones en Especiales NIIF que ya contenga informaciÃ³n definido en el proceso Gastos TÃ©cnicos

**Descripcion:** Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1. 1-Existencia de archivo correspondiente
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos
3. 3- que exista data cargada.

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' que corresponde a la funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. 5. Se levanta el modal con tÃ­tulo "Recargar Especiales NIIF",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. 6 Se muestra un mensaje de Ã©xito.

**Resultado esperado:**
1-Antes de Recargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: E4-GT-01
**Descripcion:** ValidaciÃ³n de la carga de los archivos en formato permitido en ParametrizaciÃ³n de Gastos TÃ©cnicos

### Caso de prueba: E4-GT-01.1
- Implementado: No

**Titulo:** Carga de archivo Ramo definidos en el proceso de ParametrizaciÃ³n de Gastos  TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- Archivo "REAL Ramos GT" definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicoscreo

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Ramo",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Ramo ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-01.1.1
- Implementado: No

**Titulo:** Funcionalidad botÃ³n subir nuevo archivo archivo Ramo definido en el proceso de ParametrizaciÃ³n de Gastos  TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Que ya se haya cargado un archivo
2. 2- el usuario registrado tenga el rol Gestor de Gastos TÃ©cnicos
3. 3-Se debe haber creado una distribuciÃ³n para el perÃ­odo correspondiente

**Datos:**
- Archivo LÃ­neas ''REAL Ramo GT'' definido en el proceso de Comunes

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar Ramo", con el texto "Advertencia
5. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
6. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
7. 6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
8. 7. El usuario presiona " procesar archivo".
9. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Ramo ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-01.2
- Implementado: No

**Titulo:** Carga de archivo Cuentas Contables definidos en el proceso de ParametrizaciÃ³n de Gastos  TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente para el perÃ­odo
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- debe estar cargado el archivo de Ramo.

**Datos:**
- Archivo ''REAL Cuentas Contables GT'' definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-01.2.1
- Implementado: Si

**Titulo:** Funcionalidad botÃ³n subir nuevo archivo archivo Cuentas Contables definido en el proceso de ParametrizaciÃ³n de Gastos  TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Que ya se haya cargado un archivo
2. 2- el usuario registrado tenga el rol de Administrador de Gastos
3. 3-Se debe haber creado una distribuciÃ³n para el perÃ­odo correspondiente

**Datos:**
- Archivo LÃ­neas ''REAL Cuentas Contables GT'' definido en el proceso de Comunes

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables", con el texto "Advertencia
5. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
6. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
7. 6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
8. 7. El usuario presiona " procesar archivo".
9. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-01.3
- Implementado: No

**Titulo:** Carga de archivo Centros definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- deben estar cargados los archivos de Comunes: LÃ­nea, Grupo producto, Canal y Subcanal.

**Datos:**
- Archivo ''REAL Centros GT'' definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Centros",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Centros ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-01.3.1
- Implementado: No

**Titulo:** Funcionalidad botÃ³n subir nuevo archivo archivo Centros definido en el proceso de ParametrizaciÃ³n de Gastos  TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Que ya se haya cargado un archivo
2. 2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3-Se debe haber creado una distribuciÃ³n para el perÃ­odo correspondiente

**Datos:**
- Archivo LÃ­neas ''REAL Centros GT'' definido en el proceso de Comunes

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar Centros", con el texto "Advertencia
5. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
6. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
7. 6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
8. 7. El usuario presiona " procesar archivo".
9. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Centros ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: E4-GT-02
**Descripcion:** ValidaciÃ³n de la carga de los archivos en formato permitido en Aprovisionamiento de Gastos TÃ©cnicos

### Caso de prueba: E4-GT-02.1
- Implementado: No

**Titulo:** Carga de archivo Exactus sin procesar definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- deben estar cargados los archivos: Cuentas Contables de ParametrizaciÃ³n de GT y LÃ­neas y Canal de Comunes.

**Datos:**
- Archivo ''REAL Exactus sin procesar GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2.  El usuario selecciona de menÃº lateral "Aprovisionamiento"  > " Exactus".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar ''Exactus, el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar"" y selecciona el archivo a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Exactus ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-02.1.1
- Implementado: No

**Titulo:** Funcionalidad botÃ³n subir nuevo archivo Exactus  sin procesar definido en el proceso Aprovisionamiento

**Descripcion:** Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo  correcto

**Precondiciones:**
1. 1-Que ya se haya cargado un archivo procesado
2. 2- el usuario registrado tenga el rol de Gestor de  Gastos TÃ©cnicos

**Datos:**
- Archivo LÃ­neas ''REAL Exactus sin procesar GT'' definido en el proceso de Aprovisionamiento

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Centros".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar ''Centros", con el texto "Advertencia
5. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
6. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
7. 6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
8. 7. El usuario presiona " procesar archivo".
9. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Real Exactus ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-02.2
- Implementado: No

**Titulo:** Carga de archivo Driver Productos definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- debe estar cargado el archivo Grupo Producto.

**Datos:**
- Archivo ''REAL Driver Producto GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "Driver Productos''.
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Driver Productos,''el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Productos ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-02.2.1
- Implementado: No

**Titulo:** Carga de archivo Driver Productos definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL Driver Productos GT '' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento"  > " Driver Productos".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Driver Productos'', con el texto "Advertencia Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Driver Productos ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-02.3
- Implementado: No

**Titulo:** Carga de archivo Driver Subcanal definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3-debe estar cargado el archivo Subcanal.

**Datos:**
- Archivo ''REAL Driver Subcanal GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "Driver Subcanal''.
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal'',el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Subcanal ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-02.3.1
- Implementado: No

**Titulo:** Carga de archivo Driver Subcanal  definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL Driver Subcanal GT '' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento"  > " Driver Subcanal ".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal '', con el texto "Advertencia Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Driver Subcanal ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-02.4
- Implementado: No

**Titulo:** Carga de archivo Unidad de cuenta GT definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnico en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- deben estar cargados los archivos: Ramo y Cuentas Contables de la parametrizaciÃ³n de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Unidad de Cuenta GT '' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "Unidad de cuenta GT.
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar ''Unidad de cuenta GT'' ,el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Unidad de cuenta GT ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-02.4.1
- Implementado: No

**Titulo:** Carga de archivo Unidad de cuenta GT  definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL Unidad de cuenta GT '' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento"  > " Unidad de cuenta GT ".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Unidad de cuenta GT '', con el texto "Advertencia Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Unidad de cuenta GT ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-02.5
- Implementado: No

**Titulo:** Carga de archivo Maestro de Negocio y Embebidos definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- deben estar cargados los archivos: LÃ­nea, Grupo producto, Canal y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Maestro de Negocio y Embebidos GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "Maestro de Negocio y Embebidos.
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos'',el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra la informaciÃ³n en el front de modal
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Maestro de Embebidos ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-02.5.1
- Implementado: No

**Titulo:** Carga de archivo Maestro de Negocio y Embebidos  definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL Maestro de Negocio y Embebidos GT '' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento"  > " Maestro de Negocio y Embebidos ".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos'', con el texto "Advertencia Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Maestro de Negocio y Embebidos ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: E4-GT-03
**Descripcion:** ValidaciÃ³n de la carga de los archivos en formato permitido en Asignaciones de Gastos TÃ©cnicos

### Caso de prueba: E4-GT-03.1
- Implementado: No

**Titulo:** Carga de archivo MÃ©todo Subcanal definidos en el proceso de Asignaciones de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- debe estar cargado el archivo: Driver Subcanal.

**Datos:**
- Archivo ''REAL MÃ©todo Subcanal GT'' definidos en el proceso de AsignaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones " > "MÃ©todo Subcanal''.
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar MÃ©todo Subcanal'',el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo MÃ©todo Subcanal  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-03.1.1
- Implementado: No

**Titulo:** Carga de archivo MÃ©todo Subcanal  definidos en el proceso de Asignaciones de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL MÃ©todo Subcanal GT'' definidos en el proceso de AsignaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones "  > "MÃ©todo Subcanal".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar MÃ©todo Subcanal'', con el texto "Advertencia Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo MÃ©todo Subcanal ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-03.2
- Implementado: No

**Titulo:** Carga de archivo MÃ©todo Producto definidos en el proceso de Asignaciones de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- debe estar cargado el archivo: Driver Producto.

**Datos:**
- Archivo ''REAL MÃ©todo producto GT'' definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones " > "MÃ©todo Producto''.
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar MÃ©todo Producto'',el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. Se muestra la informaciÃ³n en el front de modal
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo MÃ©todo Producto ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-03.2.1
- Implementado: No

**Titulo:** Carga de archivo MÃ©todo Producto definidos en el proceso de Asignaciones de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL MÃ©todo Producto GT'' definidos en el proceso de AsignaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones "  > "MÃ©todo Producto".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar MÃ©todo Producto'', con el texto "Advertencia Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo MÃ©todo Producto ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-03.3
- Implementado: No

**Titulo:** Carga de archivo Especiales NIIF definidos en el proceso de Asignaciones de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- deben estar cargados los archivos: Cuentas Contables y Centros de la parametrizaciÃ³n de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones " > "Especiales NIIF''.
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF'',el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo. Regresa al paso 4.
6. 6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Especiales NIIF ha sido cargado satisfactoriamente.Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E4-GT-03.3.1
- Implementado: No

**Titulo:** Carga de archivo Especiales NIIF definidos en el proceso de Asignaciones de Gastos TÃ©cnicos en el formato permitido

**Descripcion:** Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto

**Precondiciones:**
1. 1-Existencia de archivo correspondiente.
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
3. 3- debe estar cargado el archivo Exactus sin procesar.

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones "  > "MÃ©todo Producto".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF'', con el texto "Advertencia Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a Recargar.
5. 5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a Recargar.
6. 6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita Recargar nuevamente el archivo.
7. 7. El usuario presiona " procesar archivo".
8. 8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Especiales NIIF ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: E5-GT-01
**Descripcion:** ValidaciÃ³n la carga de un archivo que no corresponde con la opciÃ³n/funcionalidad de proceso de  ParametrizaciÃ³n de Gastos TÃ©cnicos

### Caso de prueba: E5-GT-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Ramo diferente al definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opciÃ³n/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Ramo a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Las cabeceras de archivo no coinciden con las esperadas. Verifique la plantilla.

---

### Caso de prueba: E5-GT-01.2
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Cuentas Contables diferente al definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opciÃ³n/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.
3. 3- Debe estar cargado el archivo de Ramo.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Cuentas Contables a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Las cabeceras de archivo no coinciden con las esperadas. Verifique la plantilla.

---

### Caso de prueba: E5-GT-01.3
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Centros diferente al definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opciÃ³n/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.
3. 3- Deben estar cargados los archivos de Comunes: LÃ­nea, Grupo producto, Canal y Subcanal.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Centros a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Las cabeceras de archivo no coinciden con las esperadas. Verifique la plantilla.

---

## Escenario: E5-GT-02
**Descripcion:** ValidaciÃ³n la carga de un archivo que no corresponde con la opciÃ³n/funcionalidad de proceso de Aprovisionamiento de Gastos TÃ©cnicos

### Caso de prueba: E5-GT-02.1
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad  Exactus sin procesar diferente al definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opciÃ³n/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Exactus", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Exactus a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Las cabeceras de archivo no coinciden con las esperadas. Verifique la plantilla.

---

### Caso de prueba: E5-GT-02.2
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Driver Producto diferente al definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opciÃ³n/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Producto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Driver Producto a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E5-GT-02.3
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Driver Subcanal diferente al definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opciÃ³n/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Driver Subcanal a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E5-GT-02.4
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Unidad de cuenta GT diferente al definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opciÃ³n/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Unidad de cuenta GT", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Unidad de cuenta GT a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E5-GT-02.5
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Maestro de Negocio y Embebidos diferente al definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opciÃ³n/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes.

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Maestro de Embebidos a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E5-GT-03
**Descripcion:** ValidaciÃ³n la carga de un archivo que no corresponde con la opciÃ³n/funcionalidad de  proceso de Asignaciones de Gastos TÃ©cnicos

### Caso de prueba: E5-GT-03.1
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad Asignaciones de MÃ©todos Subcanal definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opciÃ³n/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de  Gestor de Gastos TÃ©cnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todos Subcanal".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar MÃ©todos Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a MÃ©todos Subcanal a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E5-GT-03.2
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad MÃ©todo Producto definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opciÃ³n/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de  Gestor de Gastos TÃ©cnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Producto".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar MÃ©todo Producto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a MÃ©todo Producto a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E5-GT-03.3
- Implementado: No

**Titulo:** Carga de un archivo en la opciÃ³n/funcionalidad de Especiales NIIF  definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opciÃ³n/ funcionalidad seleccionada.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de  Gestor de Gastos TÃ©cnicos
2. 2- Subir un archivo con el mismo nombre pero las cabeceras son diferentes

**Datos:**
- Archivo con el mismo nombre pero diferente funcionalidad

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Especiales NIIF a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E6-GT-01
**Descripcion:** Validar la carga de un archivo con la estructura definida para el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos sin datos

### Caso de prueba: E6-GT-01.1
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Ramo de proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- Archivo "REAL Ramos GT" definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Ramo sin datos a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-01.2
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Cuentas Contables de proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- Archivo "REAL Cuentas Contables GT" definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Cuentas Contables sin datos a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-01.3
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Centros de proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- Archivo "REAL Centros GT" definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Centros sin datos a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E6-GT-02
**Descripcion:** Validar la carga de un archivo con la estructura definida para el  proceso de Aprovisionamiento de Gastos TÃ©cnicos sin datos

### Caso de prueba: E6-GT-02.1
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Exactus sin Procesar de proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- Archivo "REAL Exactus GT" definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus ".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Exactus ", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Exactus sin datos a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-02.2
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Driver Producto de proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- Archivo "REAL Driver Producto GT" definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Productos".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Producto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Drivers Productos sin datos a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-02.3
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Driver Subcanal de proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- Archivo "REAL Driver Subcanal GT" definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Drivers Subcanal sin datos a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-02.4
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Unidad de Cuenta GT de proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- Archivo "REAL Unidad de Cuenta GT" definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Unidad de cuenta GT", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Unidad de cuenta GT sin datos a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-02.5
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Maestro de Negocios y Embebidos de proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- Archivo "REAL Maestro de Negocio y Embebidos GT" definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocios y Embebidos".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo ''Real Maestro de Embebidos GT'' sin datos a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E6-GT-03
**Descripcion:** Validar la carga de un archivo con la estructura definida para el  proceso de Asignaciones de Gastos TÃ©cnicos sin datos

### Caso de prueba: E6-GT-03.1
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en MÃ©todos Subcanal de proceso de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- Archivo "REAL MÃ©todos Subcanal GT" definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar MÃ©todo Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Drivers Subcanal sin datos a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-03.2
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en MÃ©todos Producto de proceso de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.

**Datos:**
- Archivo "REAL MÃ©todos Producto GT" definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todos Producto".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar MÃ©todos Producto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo MÃ©todos Producto sin datos a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

### Caso de prueba: E6-GT-03.3
- Implementado: No

**Titulo:** Carga de archivo con la estructura definida y sin datos en Especiales NIIF de proceso de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. 1- Existencia de un archivos con la estructura de archivo y sin datos
2. 2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.

**Datos:**
- Archivo Asignaciones ''REAL Especiales NIIF GT'' definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Especiales NIIF sin datos a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. El archivo seleccionado no contiene informaciÃ³n. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E8-GT-01
**Descripcion:** Validar la carga de un archivo con los datos incompletos en  ParametrizaciÃ³n de Gastos TÃ©cnicos

### Caso de prueba: E8-GT-01.1
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Ramo definido en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el perÃ­odo

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Ramo definido para el perÃ­odo
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos

**Datos:**
- 1- Archivo Ramo definidos en el proceso de Gastos TÃ©cnicos
- 2- campos :
- 
- CÃ³digo ramo: Obligatorio
- DescripciÃ³n ramo: Obligatorio
- Rubro: Adicional

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona el botÃ³n ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-01.2
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Cuentas Contables definido en  el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el perÃ­odo

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Cuentas Contables definido para el perÃ­odo
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos
3. 3- debe estar cargado el archivo de Ramo.

**Datos:**
- 1- Archivo Cuentas Contables definidos en el proceso de Gastos TÃ©cnicos
- 2- campos :
- 
- Cuenta Contable: Obligatorio
- Nombre Cuenta Contable: Obligatorio
- CÃ³digo ramo: Obligatorio
- Tipo de cuenta: Adicional
- Tipo NIIF 17 CBR: Adicional
- NIIF 17 Atribuible: Obligatorio
- NIIF 17 Tipo: Obligatorio
- CÃ³digo Concepto: Obligatorio
- Concepto N1: Obligatorio
- Concepto N2: Obligatorio
- Concepto N3: Obligatorio

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona el botÃ³n ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-01.3
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Centros definido en  el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos para el perÃ­odo

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Centros definido para el perÃ­odo
2. 2- usuario registrado tenga el rol de Gastos TÃ©cnicos
3. 3- deben estar cargados los archivos de Comunes: LÃ­nea, Grupo producto, Canal y Subcanal.

**Datos:**
- 1- Archivo Centros  definidos en el proceso de Gastos TÃ©cnicos
- 2- campos :
- 
- Negocio :Obligatorio
- Centro de Costo :Obligatorio
- Nombre Centro de Costo :Obligatorio
- CÃ³digo LÃ­nea :Obligatorio
- LÃ­nea :Obligatorio
- CÃ³digo Producto :Obligatorio
- Producto :Obligatorio
- CÃ³digo de Canal :Obligatorio
- Canal :Obligatorio
- CÃ³digo subcanal :Obligatorio
- Subcanal :Obligatorio
- Tipo :Obligatorio
- Tipo EmisiÃ³n :Adicional
- Tipo Negocio :Adicional
- Tipo Producto :Adicional

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros ".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos

---

## Escenario: E8-GT-02
**Descripcion:** Validar la carga de un archivo con los datos incompletos en Aprovisionamiento de Gastos TÃ©cnicos

### Caso de prueba: E8-GT-02.1
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Exactus sin Porcesar definido en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Centros definidos
2. 2- Usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- 1- Archivo Exactus definidos en el proceso de Gastos TÃ©cnico
- 
- 2- campos :
- 
- ANOMES: Adicional
- Fecha: Adicional
- Negocio: Adicional
- InformaciÃ³n: Adicional
- Contabilidad: Adicional
- CÃ³digo lina: Adicional
- Ramo: Adicional
- Ramo directo: Adicional
- Riesgo: Adicional
- Rubro: Adicional
- CÃ³digo grupo producto: Adicional
- CÃ³digo producto: Adicional
- CÃ³digo canal: Adicional
- Canal DistribuciÃ³n: Adicional
- Grupo canales: Adicional
- Grupo comercial: Adicional
- CÃ³digo subcanal: Adicional
- CÃ³digo agente: Adicional
- Agente: Adicional
- CÃ³digo CAV: Adicional
- CAV: Obligatorio
- CÃ³digo SEG: Obligatorio
- CÃ³digo REG: Adicional
- SEG REG: Obligatorio
- CECO: Obligatorio
- CÃ³digo Concepto: Obligatorio
- Cuenta: Obligatorio
- CÃ³digo de moneda: Obligatorio
- Monto DÃ³lares: Adicional
- Monto Soles: Adicional
- Indice manual o automÃ¡tico: Adicional
- Proceso: Adicional
- Fuente: Adicional
- NÃºmero de PÃ³liza: Adicional
- Tipo PÃ³liza: Adicional
- Nivel estandar: Adicional
- Tipo negocio: Adicional
- Gestor: Adicional
- Tipo documento: Adicional
- NÃºmero de documneto: Adicional
- Proceedor: Adicional
- Referencia: Adicional
- Partida: Adicional
- CÃ³digo Fsro: Obligatorio
- Fuente 2: Adicional
- Fuente: Adicional
- Tipo de asiento: Obligatorio
- Estatus: Adicional
- MÃ©todo GP: Obligatorio
- MÃ©todo SC: Obligatorio
- Tipo dÃ­a: Obligatorio
- NIT: Obligatorio
- RazÃ³n social: Obligatorio

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en  Gastos TÃ©cnicos .
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "Exactus".
3. 3. El usuario presiona el botÃ³n ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar Exactus", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-02.2
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para  Driver Producto  definido en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Driver Producto definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- 1- Archivo Driver Producto  definidos en el proceso de Gastos TÃ©cnico
- 2- campos :
- 
- CÃ³digo MÃ©todo:Obligatorio
- DescripciÃ³n MÃ©todo:Obligatorio
- CÃ³digo producto destino:Adicional
- CÃ³digo producto:Obligatorio
- Nombre producto:Obligatorio
- CÃ³digo lÃ­nea:Obligatorio
- LÃ­nea:Obligatorio
- Factor:Obligatorio

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en  Gastos TÃ©cnicos .
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "Driver Producto".
3. 3. El usuario presiona el botÃ³n ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar Driver Producto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-02.3
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para  Driver Subcanal  definido en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Driver Subcanal definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- 1- Archivo Driver Subcanal definidos en el proceso de Gastos TÃ©cnico
- 
- 2- campos :
- 
- CÃ³digo mÃ©todo: Obligatorio
- MÃ©todo: Adicional
- CÃ³digo canal: Obligatorio
- Nombre canal: Obligatorio
- CÃ³digo subcanal: Adicional
- Nombre Subcanal: Adicional
- Factor: Obligatorio

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en  Gastos TÃ©cnicos .
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > " Driver Subcanal ".
3. 3. El usuario presiona el botÃ³n ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal ", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-02.4
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Unidad de cuenta GT definido en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Unidad de cuenta GT  definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- 1- Archivo Unidad de cuenta GT  definidos en el proceso de Gastos TÃ©cnico
- 2- campos :
- Prioridad: Obligatorio
- CÃ³digo Concepto: Adicional
- Moneda: Adicional
- Digito de Cuenta: Adicional
- CÃ³digo Ramo: Adicional
- Producto: Adicional
- subcanal: Obligatorio
- Unidad de Cuenta: Obligatorio
- Factor: Obligatorio

**Pasos:**
1. -

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-02.5
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Maestro de Negocio y Embebidos definido en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Maestro de Negocio y Embebidos  definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- 1- Archivo Maestro de Negocio y Embebidos  definidos en el proceso de Gastos TÃ©cnico
- 
- 2- campos :
- 
- Negocio: Obligatorio
- LÃ­nea: Obligatorio
- Producto: Obligatorio
- Canal: Adicional
- Subcanal: Adicional
- Embebido: Adicional
- Tipo Negocio: Adicional

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en  Gastos TÃ©cnicos .
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "  Maestro de Negocio y Embebidos ".
3. 3. El usuario presiona el botÃ³n ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar  Maestro de Negocio y Embebidos ", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos

---

## Escenario: E8-GT-03
**Descripcion:** Validar la carga de un archivo con los datos incompletos en AsignaciÃ³n de Gastos TÃ©cnicos

### Caso de prueba: E8-GT-03.1
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para MÃ©todo Subcanal definido en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para MÃ©todo Subcanal  definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- 1- Archivo MÃ©todo Subcanal  definidos en el proceso de Gastos TÃ©cnico
- 
- 2- campos :
- 
- Negocio: Obligatorio
- LÃ­nea: Obligatorio
- Producto: Obligatorio
- Canal: Adicional
- Subcanal: Adicional
- Embebido: Adicional
- Tipo Negocio: Adicional

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en  Gastos TÃ©cnicos .
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "  MÃ©todo Subcanal ".
3. 3. El usuario presiona el botÃ³n ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar  MÃ©todo Subcanal ", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-03.2
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para MÃ©todo Producto en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para MÃ©todo Subcanal  definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- 1- Archivo MÃ©todo Subcanal  definidos en el proceso de Gastos TÃ©cnico
- 
- 2- campos :
- 
- CÃ³digo LÃ­nea: Obligatorio
- LÃ­nea: Obligatorio
- CÃ³digo Producto: Adicional
- Producto: Adicional
- CÃ³digo Canal: Adicional
- Canal: Adicional
- Codsubcanal: Adicional
- Subcanal: Adicional
- Digito de cuenta: Adicional
- MÃ©todo ValoraciÃ³n: Adicional
- Porcentaje: Obligatorio
- Tipo DistribuciÃ³n: Obligatorio
- NIIF 17 Atribuible: Adicional
- NIIF 17 Tipo: Adicional
- Concepto N1: Adicional
- Concepto N2: Adicional
- CÃ³digo Concepto: Adicional
- CECO: Adicional

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en  Gastos TÃ©cnicos .
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "  MÃ©todo Subcanal ".
3. 3. El usuario presiona el botÃ³n ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar  MÃ©todo Subcanal ", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos

---

### Caso de prueba: E8-GT-03.3
- Implementado: No

**Titulo:** Validar la carga de archivo con los datos incompletos para Especiales NIIF en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de un archivo con los datos incompletos

**Precondiciones:**
1. 1- Archivo preparado a partir de archivo para Especiales NIIF  definido
2. 
3. 2- Usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
- 1- Archivo preparado a partir de archivo para Especiales NIIF  definido
- 
- 2- campos :
- 
- CÃ³digo Concepto: Obligatorio
- CÃ³digo Ramo: Obligatorio
- CÃ³digo lÃ­nea: Obligatorio
- LÃ­nea: Obligatorio
- CÃ³digo Canal: Obligatorio
- CÃ³digo MÃ©todo: Obligatorio

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en  Gastos TÃ©cnicos .
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "  Especiales NIIF ".
3. 3. El usuario presiona el botÃ³n ''Recargar'',
4. 4. Se levanta el modal con titulo "Cargar  Especiales NIIF ", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a Recargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos

---

## Escenario: E61-GT-01
**Descripcion:** Validar  que no se cargue un archivo de mÃ¡s de 30 Mb en la ParametrizaciÃ³n de Gastos TÃ©cnicos

### Caso de prueba: E61-GT-01.1
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Ramo definido en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para el perÃ­odo

**Precondiciones:**
1. 1- El archivo Ramo debe exceder el tamaÃ±o mÃ¡ximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.

**Datos:**
- Archivo ''REAL Ramo GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

### Caso de prueba: E61-GT-01.2
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Cuentas Contables definido en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para el perÃ­odo

**Precondiciones:**
1. 1- El archivo Cuentas Contables debe exceder el tamaÃ±o mÃ¡ximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.

**Datos:**
- Archivo ''REAL Cuentas Contables GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

### Caso de prueba: E61-GT-01.3
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Centros definido en en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para el perÃ­odo

**Precondiciones:**
1. 1- El archivo Centros debe exceder el tamaÃ±o mÃ¡ximo permitido
2. 2- el usuario registrado tenga el rol de Administrador de Gastos o
3. Gestor de Gastos TÃ©cnicos.

**Datos:**
- Archivo ''REAL Centros GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros ".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

## Escenario: E61-GT-02
**Descripcion:** Validar que no se cargue un archivo de mÃ¡s de 30 Mb en Aprovisionamiento de Gastos TÃ©cnicos

### Caso de prueba: E61-GT-02.1
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Exactus sin procesar de Aprovisionamiento definido en el proceso de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de archivo de mÃ¡s de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Exactus debe exceder el tamaÃ±o mÃ¡ximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.

**Datos:**
- Archivo ''REAL Exactus sin procesar'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar Exactus", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

### Caso de prueba: E61-GT-02.2
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Driver Producto de Aprovisionamiento definido en el proceso de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de archivo de mÃ¡s de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Driver Producto procesado debe exceder el tamaÃ±o mÃ¡ximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.

**Datos:**
- Archivo ''REAL Driver Producto GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar Driver Producto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

### Caso de prueba: E61-GT-02.3
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Driver Subcanal  de Aprovisionamiento definido en el proceso de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de archivo de mÃ¡s de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Driver Subcanal procesado debe exceder el tamaÃ±o mÃ¡ximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.

**Datos:**
- Archivo ''REAL Driver Subcanal GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

### Caso de prueba: E61-GT-02.4
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Unidad de cuenta GT de Aprovisionamiento definido en el proceso de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de archivo de mÃ¡s de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Unidad de cuenta GT procesado debe exceder el tamaÃ±o mÃ¡ximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.

**Datos:**
- Archivo ''REAL Unidad de cuenta GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar Unidad de cuenta GT", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

### Caso de prueba: E61-GT-02.5
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Maestro de Negocio y Embebidos de Aprovisionamiento definido en el proceso de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de archivo de mÃ¡s de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Maestro de Negocio y Embebidos procesado debe exceder el tamaÃ±o mÃ¡ximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.

**Datos:**
- Archivo ''REAL Maestro de Negocio y Embebidos GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

## Escenario: E61-GT-03
**Descripcion:** Validar que no se cargue un archivo de mÃ¡s de 30 Mb en Asignaciones de Gastos TÃ©cnicos

### Caso de prueba: E61-GT-03.1
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para MÃ©todos Subcanal de Asignaciones definido en el proceso de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de archivo de mÃ¡s de 30 mb de peso

**Precondiciones:**
1. 1- El archivo MÃ©todos Subcanal procesado debe exceder el tamaÃ±o mÃ¡ximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.

**Datos:**
- Archivo ''REAL MÃ©todos Subcanal GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todos Subcanal".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar MÃ©todos Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

### Caso de prueba: E61-GT-03.2
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para MÃ©todos Producto de Asignaciones definido en el proceso de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de archivo de mÃ¡s de 30 mb de peso

**Precondiciones:**
1. 1- El archivo MÃ©todos Producto procesado debe exceder el tamaÃ±o mÃ¡ximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.

**Datos:**
- Archivo ''REAL MÃ©todos Producto GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todos Producto".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar MÃ©todos Producto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

### Caso de prueba: E61-GT-03.3
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Especiales NIIF de Asignaciones definido en el proceso de Gastos TÃ©cnicos

**Descripcion:** Validar la carga de archivo de mÃ¡s de 30 mb de peso

**Precondiciones:**
1. 1- El archivo Especiales NIIF procesado debe exceder el tamaÃ±o mÃ¡ximo permitido
2. 2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para Recargar.
5. 5. seleccionar el archivo que exceda el peso permitido
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

## Escenario: E70-GT-01
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga de archivo en el proceso de ParametrizaciÃ³n de flujo de Gastos TÃ©cnicos

### Caso de prueba: E70-GT-01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Ramo de la ParametrizaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Ramo

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo REAL Ramo GT debe estar disponible
3. 3- Reglas de negocio y formato para estÃ© archivo
4. -Los campos cÃ³digo ramo y descriÃ§iÃ³n son obligatorios
5. -Un Ramo puede tener mÃºltiples Rubros
6. -El CodRamo debe ser un valor de 1 o 2 posiciones, que pueden ser nÃºmeros o letras
7. - Se acepta el valor especial 'SIN RAMO'.
8. - Si el CodRamo de entrada tiene 1 Solo dÃ­gito, el sistema debe aÃ±adir un '0' a la izquierda para estandarizar a un formato de 2 dÃ­gitos (ej. '7' se convierte en '07').

**Datos:**
- Archivo ''REAL Ramos GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Ramo GT preparado para la carga con los casos a validar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Cuentas Contables de la ParametrizaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Cuentas Contables

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo REAL Cuentas Contables GT debe estar disponible
3. 3- Reglas de negocio y formato para estÃ© archivo
4. -Los campos CÃ³digo cuenta contable, DescripciÃ³n cuenta contable, NIIF 17 Atribuible, NIIF 17 Tipo, Concepto, Concepto N1, Concepto N2, Concepto N3 son obligatorios
5. -Los valores de cÃ³digo Cuenta Contable  debe ser Ãºnico
6. -El CÃ³digo de Ramo debe estar creado en el maestro de Ramo
7. -NIIF 17 Tipo: Valores permitidos: 'GM' (Gastos de Mantenimiento) o 'GA' (Gastos de AdquisiciÃ³n).
8. -La cuenta contable Los 2 primeros dÃ­gitos deben ser 46,47,56,57 el 3er dÃ­gito 1 o 2; el 4to dÃ­gito entre 0 y 9 o una letra; y los bloques siguientes entre 01 y 99 o la combinaciÃ³n de letras, por ejemplo OO

**Datos:**
- Archivo ''REAL Cuentas Contables GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Cuentas Contables GT preparado para la carga con los casos a validar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Centros de la ParametrizaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Centros

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo REAL Centros GT debe estar disponible
3. 3- Reglas de negocio y formato para estÃ© archivo
4. -Los campos Negocio, Centro de Costo, Nombre Centro de costo, Nombre LÃ­nea, Nombre producto, Nombre canal, Nombre subcanal, Tipo son obligatorios
5. -Las LÃ­nea, Producto, Canal y Subcanal deben estar creados en su catÃ¡logo
6. -El Negocio debe ser PPS o PVI; otros valores son rechazados.
7. -Cuando el Centro es de tipo DIRECTO, debe existir una combinaciÃ³n vÃ¡lida de LÃ­nea, Producto, Canal y Subcanal en los catÃ¡logos maestros.
8. - Cuando el campo TIPO viene vacÃ­o, el Centro NO se considera DIRECTO.
9. - Los catÃ¡logos maestros de LÃ­nea, Producto, Canal y Subcanal se encuentran previamente configurados, activos y con sus relaciones jerÃ¡rquicas definidas (Productoâ€“LÃ­nea y Subcanalâ€“Canal)

**Datos:**
- Archivo ''REAL Centros GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Centros GT preparado para la carga con los casos a validar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: E70-GT-02
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga de archivo en el  proceso de  Aprovisionamiento de Gastos TÃ©cnicos

### Caso de prueba: E70-GT-02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Exactus sin Procesar de la Aprovisionamiento de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Exactus

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo REAL Exactus GT debe estar disponible
3. 3- Reglas de negocio y formato para estÃ© archivo

**Datos:**
- Archivo ''REAL Exactus sin procesar GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Exactus", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Exactus GT preparado para la carga con los casos a validar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-02.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Driver Producto de la Aprovisionamiento de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Driver Producto

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo REAL Driver Producto GT debe estar disponible
3. 3- Reglas de negocio y formato para estÃ© archivo
4. -Los campos Codigo MÃ©todo, descripciÃ³n MÃ©todo, Codigo producto, Nombre Producto, Codigo lÃ­nea, lÃ­nea y Factor son obligatorisos
5. -Los catÃ¡logos maestros de LÃ­nea, Producto  se encuentran previamente configurados y activos
6. -El factor permite 10 caracteres nÃ¹mericos, Pueden ser hasta 4 decimales, Acepta valor 0, Acepta enteros sin decimales, Acepta valores negativos

**Datos:**
- Archivo ''REAL Driver Producto GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Producto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Driver Producto GT preparado para la carga con los casos a validar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-02.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Driver Subcanal de la Aprovisionamiento de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Driver Subcanal

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo REAL Driver Subcanal GT debe estar disponible
3. 3- Reglas de negocio y formato para estÃ© archivo
4. -Los campos Codigo MÃ©todo, Codigo Canal, Nombre Canal y Factor son Obligatorios
5. -Los catÃ¡logos maestros de Canal, Subcanal  se encuentran previamente configurados y activos
6. -El factor permite 10 caracteres nÃ¹mericos, Pueden ser hasta 4 decimales, Acepta valor 0, Acepta enteros sin decimales, Acepta valores negativos

**Datos:**
- Archivo ''REAL Driver Subcanal GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Driver Subcanal GT preparado para la carga con los casos a validar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-02.4
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Unidad de Cuenta GT de la Aprovisionamiento de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Unidad de Cuenta GT

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo REAL Unidad de Cuenta GT GT debe estar disponible
3. 3- Reglas de negocio y formato para estÃ© archivo
4. -Los campos Prioridad, Unidad de Cuenta y factor son obligatorios
5. -Los campos Unidad de Cuenta, Ramo, Producto y Subcanal deben existir y estar previamente registrados en sus respectivos catÃ¡logos maestros.
6. -El campo Prioridad debe contener un valor numÃ©rico entre 1 y 4.
7. -El CÃ³digo de Concepto exista en el catÃ¡logo de conceptos dentro de " Cuentas Contables"
8. - Para un mismo registro con el mismo CÃ³digo de Concepto, Producto y Subcanal, la Unidad de Cuenta debe ser Ãºnica y la suma de sus factores debe ser igual a 1.
9. -El valor de campo DÃ­gito de la Cuenta debe ser 44 o 54, que corresponden a las cuentas contables aplicables para Gastos TÃ©cnicos. En caso contrario,debe mostrar un mensaje de error y no permitir el registro.
10. -EL valor de Factor debe esatr entre 0 y 1

**Datos:**
- Archivo ''REAL Unidad de Cuenta GT GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Unidad de Cuenta GT", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Unidad de Cuenta GT GT preparado para la carga con los casos a validar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-02.5
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Maestro de Negocio y Embebido de la Aprovisionamiento de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Maestro de Negocio y Embebido

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo REAL Maestro de Negocio y Embebido GT debe estar disponible
3. 3- Reglas de negocio y formato para estÃ© archivo
4. -Los campos Negocio, LÃ­nea, Producto son obligatorios
5. -Se debe validar que los valores de LÃ­nea, Producto, Canal y Subcanal existan en sus respectivos catÃ¡logos maestros. AdemÃ¡s, se debe verificar que el Producto estÃ© asociado a la LÃ­nea y que el Subcanal estÃ© asociado al Canal correspondiente.
6. -Los campos Embebidos y Tipo de Negocio son excluyentes: si Embebidos tiene valor, Tipo de Negocio debe estar vacÃ­o, y viceversa.

**Datos:**
- Archivo ''REAL Maestro Embebido GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebido".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebido", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Maestro de Negocio y Embebido GT preparado para la carga con los casos a validar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: E70-GT-03
**Descripcion:** Validar las reglas de negocio y formato para un registro en la carga de archivo en el  proceso de  Asignaciones de Gastos  TÃ©cnicos

### Caso de prueba: E70-GT-03.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en MÃ©todo Subcanal de la AsignaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de MÃ©todo Subcanal

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo REAL MÃ©todo Subcanal GT debe estar disponible
3. 3- Reglas de negocio y formato para estÃ© archivo
4. -Todos los campos son obligatorios
5. -El CÃ³digo de Concepto, Ramo, LÃ­nea, Producto, Canal y MÃ©todo debe estar previamente configurado en sus catÃ¡logos
6. -Los campos son obligatorios
7. -Debe existir correspondencia vÃ¡lida entre CÃ³digo de LÃ­nea y Nombre de LÃ­nea, asÃ­ como entre CÃ³digo de Producto y Nombre de Producto.
8. -Debe existir una relaciÃ³n vÃ¡lida entre la LÃ­nea y el Producto (el Producto debe estar asociado a la LÃ­nea correspondiente).
9. -La combinaciÃ³n de los campos CÃ³digo de Concepto, CÃ³digo de Ramo, CÃ³digo de LÃ­nea, LÃ­nea, CÃ³digo de Grupo de Producto, Grupo de Producto, CÃ³digo de Canal y CÃ³digo de MÃ©todo debe ser Ãºnica. No se permite registrar mÃ¡s de un registro con la misma combinaciÃ³n de estos valores.

**Datos:**
- Archivo ''REAL MÃ©todo Subcanal GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "AsignaciÃ³n" > "MÃ©todo Subcanal".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar MÃ©todo Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL MÃ©todo Subcanal GT preparado para la carga con los casos a validar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-03.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Especiales NIIF de la AsignaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Especiales NIIF

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo REAL Especiales NIIF GT debe estar disponible
3. 3- Reglas de negocio y formato para estÃ© archivo
4. -El CÃ³digo de Concepto, LÃ­nea, Producto, Canal, Subcanal y MÃ©todo debe estar previamente configurado en sus catÃ¡logos
5. -Deben existir datos vÃ¡lidos y activos en los catÃ¡logos de LÃ­neas, Productos, Canales, Subcanales, Conceptos y Centros de Costo
6. -Los campos CÃ³digo LÃ­nea, LÃ­nea, Porcentaje y Tipo DistribuciÃ³n son abligatorios.
7. MM

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "AsignaciÃ³n" > "Especiales NIIF".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL Especiales NIIF GT preparado para la carga con los casos a validar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

### Caso de prueba: E70-GT-03.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en MÃ©todo Producto de la AsignaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de MÃ©todo Producto

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo REAL MÃ©todo Producto GT debe estar disponible
3. 3- Reglas de negocio y formato para estÃ© archivo
4. -Todos los campos son obligatorios
5. -El CÃ³digo de Concepto, Ramo, LÃ­nea, Producto, Canal y MÃ©todo debe estar previamente configurados en sus catÃ¡logos
6. -Debe existir correspondencia vÃ¡lida entre CÃ³digo de LÃ­nea y Nombre de LÃ­nea
7. -La combinaciÃ³n CÃ³digo de Concepto, CÃ³digo de Ramo, CÃ³digo de LÃ­nea, LÃ­nea, CÃ³digo de Canal y CÃ³digo de MÃ©todo no debe repetirse.

**Datos:**
- Archivo ''REAL MÃ©todo Producto GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "AsignaciÃ³n" > "MÃ©todo Producto".
3. 3. El usuario presiona el botÃ³n "Cargar".
4. 4. Se levanta el modal con titulo "Cargar MÃ©todo Producto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo REAL MÃ©todo Producto GT preparado para la carga con los casos a validar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: E9-GT-01
**Descripcion:** Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

### Caso de prueba: E9-GT-01.1
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Ramo definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Ramo cargado

**Precondiciones:**
1. La carga exitosa de archivo Ramo ''REAL Ramo GT''

**Datos:**
- Archivo Ramo ''REAL Ramo GT'' definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Ramo",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-01.2
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Cuentas Contables definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Cuentas Contables cargado

**Precondiciones:**
1. La carga exitosa de archivo Cuentas Contables ''REAL Cuentas Contables GT''

**Datos:**
- Archivo Cuentas Contables ''REAL Cuentas Contables GT'' definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Cuentas Contables",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-01.3
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Centros definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Centros cargado

**Precondiciones:**
1. La carga exitosa de archivo Centros ''REAL Centros GT''

**Datos:**
- Archivo Centros ''REAL Centros GT'' definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Centros",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: E9-GT-02
**Descripcion:** Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de  Aprovisionamiento de Gastos TÃ©cnicos

### Caso de prueba: E9-GT-02.1
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Exactus sin procesar definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Exactus cargado

**Precondiciones:**
1. La carga exitosa de archivo Exactus ''REAL Exactus sin procesar GT''

**Datos:**
- Archivo Centros ''REAL Exactus sin procesar GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus ".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Exactus ",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-02.2
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Driver Producto definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Driver Producto cargado

**Precondiciones:**
1. La carga exitosa de archivo Driver Producto ''REAL Driver Producto GT''

**Datos:**
- Archivo Driver Producto ''REAL Driver Producto GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Driver Producto",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-02.3
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Driver Subcanal definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Driver Subcanal cargado

**Precondiciones:**
1. La carga exitosa de archivo Driver Subcanal ''REAL Driver Subcanal GT''

**Datos:**
- Archivo Driver Subcanal ''REAL Driver Subcanal GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Driver Subcanal",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-02.4
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Unidad de cuenta GT definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Unidad de cuenta GT cargado

**Precondiciones:**
1. La carga exitosa de archivo Unidad de cuenta GT ''REAL Unidad de Cuenta GT''

**Datos:**
- Archivo Unidad de cuenta GT ''REAL Unidad de Cuenta GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Unidad de cuenta GT",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-02.5
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Maestro de Negocio y Embebidos definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Maestro de Embebidos cargado

**Precondiciones:**
1. La carga exitosa de archivo Maestro de Embebidos ''REAL Maestro de Negocio y Embebidos GT''

**Datos:**
- Archivo Maestro de Embebidos ''REAL Maestro de Negocio y Embebidos GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Maestro de  Negocios y Embebidos",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: E9-GT-03
**Descripcion:** Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de  Asignaciones de Gastos  TÃ©cnicos

### Caso de prueba: E9-GT-03.1
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo MÃ©todo Subcanal definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo MÃ©todo Subcanal cargado

**Precondiciones:**
1. La carga exitosa de archivo MÃ©todo Subcanal ''REAL MÃ©todo Subcanal GT''

**Datos:**
- Archivo MÃ©todo Subcanal ''REAL MÃ©todo Subcanal GT'' definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones " > "MÃ©todo Subcanal".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar MÃ©todo Subcanal",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-03.2
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo MÃ©todo Producto definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo MÃ©todo Producto cargado

**Precondiciones:**
1. La carga exitosa de archivo MÃ©todo Producto ''REAL MÃ©todo Producto GT''

**Datos:**
- Archivo MÃ©todo Producto ''REAL MÃ©todo Producto GT'' definido en el proceso de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones " > "MÃ©todo Producto".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar MÃ©todo Producto",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

### Caso de prueba: E9-GT-03.3
- Implementado: No

**Titulo:** Validar que se muestran en el FrontEnd los datos de archivo Especiales NIIF definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar que se muestran en el FrontEnd los datos de archivo Especiales NIIF cargado

**Precondiciones:**
1. La carga exitosa de archivo Especiales NIIF ''REAL Especiales NIIF GT''

**Datos:**
- Archivo Especiales NIIF ''REAL Especiales NIIF GT'' definido en el proceso de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones " > "Especiales NIIF".
3. 3. El usuario presiona botÃ³n Recargar.
4. 4. Se levanta el modal con titulo "Cargar Especiales NIIF",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. 5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: E10-GT-01
**Descripcion:** Validar la correcta ejecuciÃ³n de flujo de descarga en ParametrizaciÃ³n de Gastos TÃ©cnicos

### Caso de prueba: E10-GT-01.1
- Implementado: No

**Titulo:** Validar la correcta ejecuciÃ³n de flujo de descargas de archivo Ramo definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
1. Se active el botÃ³n descarga

**Datos:**
- Archivo Ramo definido en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-01.2
- Implementado: No

**Titulo:** Validar la correcta ejecuciÃ³n de flujo de descargas de archivo Cuentas Contables definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
1. Se active el botÃ³n descarga

**Datos:**
- Archivo Cuentas Contables definido en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-01.3
- Implementado: No

**Titulo:** Validar la correcta ejecuciÃ³n de flujo de descargas de archivo Centros definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
1. Se active el botÃ³n descarga

**Datos:**
- Archivo Centros definido en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros ".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E10-GT-02
**Descripcion:** Validar la correcta ejecuciÃ³n de flujo de descarga en Aprovisionamiento de Gastos TÃ©cnicos

### Caso de prueba: E10-GT-02.1
- Implementado: No

**Titulo:** Validar la correcta ejecuciÃ³n de flujo de descargas de archivo Exactus sin procesar definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
1. Se active el botÃ³n descarga

**Datos:**
- Archivo Exactus sin procesar definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-02.2
- Implementado: No

**Titulo:** Validar la correcta ejecuciÃ³n de flujo de descargas de archivo Driver Producto definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
1. Se active el botÃ³n descarga

**Datos:**
- Archivo Driver Producto definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-02.3
- Implementado: No

**Titulo:** Validar la correcta ejecuciÃ³n de flujo de descargas de archivo Driver Subcanal definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
1. Se active el botÃ³n descarga

**Datos:**
- Archivo Driver Subcanal definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal ".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-02.4
- Implementado: No

**Titulo:** Validar la correcta ejecuciÃ³n de flujo de descargas de archivo Unidad de cuenta GT definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
1. Se active el botÃ³n descarga

**Datos:**
- Archivo Unidad de cuenta GT definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-02.5
- Implementado: No

**Titulo:** Validar la correcta ejecuciÃ³n de flujo de descargas de archivo Maestro de Negocio y Embebidos definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
1. Se active el botÃ³n descarga

**Datos:**
- Archivo Maestro de Embebidos definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E10-GT-03
**Descripcion:** Validar la correcta ejecuciÃ³n de flujo de descarga en Asignaciones de Gastos TÃ©cnicos

### Caso de prueba: E10-GT-03.1
- Implementado: No

**Titulo:** Validar la correcta ejecuciÃ³n de flujo de descargas de archivo MÃ©todo Subcanal definidos en el proceso de AsignaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
1. Se active el botÃ³n descarga

**Datos:**
- Archivo MÃ©todo Subcanal definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "MÃ©todo Subcanal".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-03.2
- Implementado: No

**Titulo:** Validar la correcta ejecuciÃ³n de flujo de descargas de archivo MÃ©todo Producto definidos en el proceso de AsignaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
1. Se active el botÃ³n descarga

**Datos:**
- Archivo MÃ©todo Producto definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "MÃ©todo Producto".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

### Caso de prueba: E10-GT-03.3
- Implementado: No

**Titulo:** Validar la correcta ejecuciÃ³n de flujo de descargas de archivo Especiales NIIF  definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
1. Se active el botÃ³n descarga

**Datos:**
- Archivo Especiales NIIF definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos cargado en el motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Especiales NIIF".
3. 3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E11-GT-01
**Descripcion:** Validar que el archivo descargado en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos muestre los datos correctamente y no tenga perdida de informaciÃ³n

### Caso de prueba: E11-GT-01.1
- Implementado: No

**Titulo:** Validar alteraciÃ³n en el archivo descargado Ramo de proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar alteraciones en los datos de archivo Ramo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Ramo definido en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3.  El usuario presiona el botÃ³n "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-01.2
- Implementado: No

**Titulo:** Validar alteraciÃ³n en el archivo descargado Cuentas Contables de proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar alteraciones en los datos de archivo Cuentas Contables descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Cuentas Contables definido en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3.  El usuario presiona el botÃ³n "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-01.3
- Implementado: No

**Titulo:** Validar alteraciÃ³n en el archivo descargado Centros de proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar alteraciones en los datos de archivo Centros descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Centros definido en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros ".
3. 3.  El usuario presiona el botÃ³n "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E11-GT-02
**Descripcion:** Validar que el archivo descargado en el  proceso de Aprovisionamiento de Gastos TÃ©cnicos muestre los datos correctamente y no tenga perdida de informaciÃ³n

### Caso de prueba: E11-GT-02.1
- Implementado: No

**Titulo:** Validar alteraciÃ³n en el archivo descargado Exactus sin Procesar de proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de archivo Centros descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Exactus definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3.  El usuario presiona el botÃ³n "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-02.2
- Implementado: No

**Titulo:** Validar alteraciÃ³n en el archivo descargado Driver Producto de proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Driver Producto definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3.  El usuario presiona el botÃ³n "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-02.3
- Implementado: No

**Titulo:** Validar alteraciÃ³n en el archivo descargado Driver Subcanal  de proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Driver Subcanal definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3.  El usuario presiona el botÃ³n "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-02.4
- Implementado: No

**Titulo:** Validar alteraciÃ³n en el archivo descargado Unidad de cuenta GT  de proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Unidad de cuenta GT definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3.  El usuario presiona el botÃ³n "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-02.5
- Implementado: No

**Titulo:** Validar alteraciÃ³n en el archivo descargado Maestro de Negocio y Embebidos de proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Maestro de Negocio y Embebidos definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3.  El usuario presiona el botÃ³n "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E11-GT-03
**Descripcion:** Validar que el archivo descargado en el  proceso de Asignaciones de Gastos TÃ©cnicos muestre los datos correctamente y no tenga perdida de informaciÃ³n

### Caso de prueba: E11-GT-03.1
- Implementado: No

**Titulo:** Validar alteraciÃ³n en el archivo descargado MÃ©todo Subcanal definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo MÃ©todo Subcanal definidos en el proceso de Asignaciones de Gastos TÃ©cnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal ".
3. 3.  El usuario presiona el botÃ³n "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-03.2
- Implementado: No

**Titulo:** Validar alteraciÃ³n en el archivo descargado Especiales NIIF definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo Especiales NIIF definidos en el proceso de Asignaciones de Gastos TÃ©cnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. 3.  El usuario presiona el botÃ³n "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas. 
2-Validar la permanencia de los datos cargados inicialmente.

---

### Caso de prueba: E11-GT-03.3
- Implementado: No

**Titulo:** Validar alteraciÃ³n en el archivo descargado Asignaciones de MÃ©todo Producto definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar alteraciones en los datos de archivo descargado

**Precondiciones:**
1. Descarga exitosa de archivo de motor.

**Datos:**
- Archivo MÃ©todo Producto definidos en el proceso de Asignaciones de Gastos TÃ©cnicos descargado de motor

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Producto".
3. 3.  El usuario presiona el botÃ³n "Descargar".
4. 4. Accede al archivo descargado en la carpeta local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E71-GT-01
**Descripcion:** ValidaciÃ³n de la carga de los archivos descargados en ParametrizaciÃ³n de Gastos TÃ©cnicos

### Caso de prueba: E71-GT-01.1
- Implementado: No

**Titulo:** Validar la carga de archivo de Ramo descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para estÃ¡ pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo Ramo debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
- Archivo ''REAL Ramos GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona el botÃ³n Â¨DescargarÂ¨,
4. 4. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
5. 5. Se levanta el modal con tÃ­tulo "Recargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Ramo ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E71-GT-01.2
- Implementado: No

**Titulo:** Validar la carga de archivo de Cuentas Contables descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para estÃ¡ pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo Cuentas Contables debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
- Archivo ''REAL Cuentas Contables GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona el botÃ³n Â¨DescargarÂ¨,
4. 4. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
5. 5. Se levanta el modal con tÃ­tulo "Recargar Cuentas Contables", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E71-GT-01.3
- Implementado: No

**Titulo:** Validar la carga de archivo de Centros descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para estÃ¡ pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo Centros debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
- Archivo ''REAL Centros GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona el botÃ³n Â¨DescargarÂ¨,
4. 4. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
5. 5. Se levanta el modal con tÃ­tulo "Recargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Centros  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: E71-GT-02
**Descripcion:** ValidaciÃ³n de la carga de los archivos descargados en Aprovisionamiento de Gastos TÃ©cnicos

### Caso de prueba: E71-GT-02.1
- Implementado: No

**Titulo:** Validar la carga de archivo de Exactus sin Procesar descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para estÃ¡ pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo Exactus debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
- Archivo ''REAL Exactus sin procesar GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botÃ³n Â¨DescargarÂ¨,
4. 4. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
5. 5. Se levanta el modal con tÃ­tulo "Recargar Exactus", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Exactus  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E71-GT-02.3
- Implementado: No

**Titulo:** Validar la carga de archivo de Driver Producto descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo Driver Producto debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
- Archivo ''REAL Driver Producto GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botÃ³n Â¨DescargarÂ¨,
4. 4. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
5. 5. Se levanta el modal con tÃ­tulo "Recargar Driver Producto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Driver Producto  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E71-GT-02.4
- Implementado: No

**Titulo:** Validar la carga de archivo de Driver Subcanal descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo Driver Subcanal debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
- Archivo ''REAL Driver Subcanal GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botÃ³n Â¨DescargarÂ¨,
4. 4. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
5. 5. Se levanta el modal con tÃ­tulo "Recargar Driver Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Driver Subcanal  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E71-GT-02.5
- Implementado: No

**Titulo:** Validar la carga de archivo de Unidad de Cuenta GT descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo Unidad de Cuenta GT debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
- Archivo ''REAL Unidad de Cuenta GT GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. El usuario presiona el botÃ³n Â¨DescargarÂ¨,
4. 4. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
5. 5. Se levanta el modal con tÃ­tulo "Recargar Unidad de Cuenta GT", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Unidad de Cuenta GT  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E71-GT-02.6
- Implementado: No

**Titulo:** Validar la carga de archivo de Maestro de Negocio y Embebidos descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo Maestro de Negocio y Embebidos debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
- Archivo ''REAL Maestro Embebido GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona el botÃ³n Â¨DescargarÂ¨,
4. 4. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
5. 5. Se levanta el modal con tÃ­tulo "Recargar Maestro de Negocio y Embebidos", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.

El archivo Real Maestro de Negocio y Embebidos  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: E71-GT-03
**Descripcion:** ValidaciÃ³n de la carga de los archivos descargados en Asignaciones de Gastos TÃ©cnicos

### Caso de prueba: E71-GT-03.1
- Implementado: No

**Titulo:** Validar la carga de archivo de MÃ©todo Subcanal descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo MÃ©todo Subcanal debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
- Archivo ''REAL MÃ©todo Subcanal GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. 3. El usuario presiona el botÃ³n Â¨DescargarÂ¨,
4. 4. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
5. 5. Se levanta el modal con tÃ­tulo "Recargar MÃ©todo Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real MÃ©todo Subcanal  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E71-GT-03.2
- Implementado: No

**Titulo:** Validar la carga de archivo de Especiales NIIF descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo Especiales NIIF debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botÃ³n Â¨DescargarÂ¨,
4. 4. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
5. 5. Se levanta el modal con tÃ­tulo "Recargar Especiales NIIF", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real Especiales NIIF  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

### Caso de prueba: E71-GT-03.3
- Implementado: No

**Titulo:** Validar la carga de archivo de MÃ©todo Producto descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar que el archivo descargado se pueda Recargar satisfactoriamente para esta pantalla

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2. 2- El archivo MÃ©todo Producto debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
- Archivo ''REAL MÃ©todo Producto GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Producto".
3. 3. El usuario presiona el botÃ³n Â¨DescargarÂ¨,
4. 4. El usuario presiona el botÃ³n Â¨RecargarÂ¨,
5. 5. Se levanta el modal con tÃ­tulo "Recargar MÃ©todo Producto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para Recargar.
6. 6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Real MÃ©todo Producto  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: E35-GT-01
**Descripcion:** Validar que el sistema pueda agregar un nuevo registro en el  flujo de Gastos TÃ©cnicos

### Caso de prueba: E35-GT-01.01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Ramos definido en la ParametrizaciÃ³n de  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Ramo" de Ramo

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3- Los campos cÃ³digo ramo y descriÃ§iÃ³n son obligatorios
4. 4- Los valores de cÃ³digo Ramo es Ãºnico.
5. 5- Un Ramo puede tener mÃºltiples Rubros
6. 6-CÃ³digo Ramo: -El CodRamo debe ser un valor de 1 o 2 posiciones, que pueden ser nÃºmeros o letras - Se acepta el valor especial 'SIN RAMO'. - Si el CodRamo de entrada tiene 1 Solo dÃ­gito, el sistema debe aÃ±adir un '0' a la izquierda para estandarizar a un formato de 2 dÃ­gitos (ej. '7' se convierte en '07').

**Datos:**
- Campos de formulario
- 
- CÃ³digo de Ramo: [12 o SIN RAMO]
- DescripciÃ³n de Ramo: Texto. Ej: INCENDIO
- Rubro Texto, Ej: LÃ­neas ALIADAS INCENDIO

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Ramo".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Cuentas Contables definido en la ParametrizaciÃ³n de  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Cuenta Contable" de Cuenta Contable

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3- Los campos CÃ³digo cuenta contable, DescripciÃ³n cuenta contable, NIIF 17 Atribuible, NIIF 17 Tipo, Concepto, Concepto N1, Concepto N2, Concepto N3 son obligatorios
4. 4- Los valores de cÃ³digo Cuenta Contable  debe ser Ãºnico
5. 5- El CÃ³digo de Ramo debe estar creado en el maestro de Ramo
6. 6-NIIF 17 Tipo: Valores permitidos: 'GM' (Gastos de Mantenimiento) o 'GA' (Gastos de AdquisiciÃ³n).
7. 7- La cuenta contable Los 2 primeros dÃ­gitos deben ser 46,47,56,57 el 3er dÃ­gito 1 o 2; el 4to dÃ­gito entre 0 y 9 o una letra; y los bloques siguientes entre 01 y 99 o la combinaciÃ³n de letras, por ejemplo OO

**Datos:**
- Campos de formulario
- 
- - Cuenta Contable: AlfanumÃ©rico y puntos Ej: 46.1.7.40.09.10, 47.1.7.40.09.10
- - Nombre Cuenta Contable: Texto. Ej: BONOS ASESORES - PROV. ESSALUD
- - CÃ³digo ramo: Se selecciona el CÃ³digo ramo correspondiente [01, 44]
- - Tipo de cuenta:  Se selecciona el tipo de cuenta correspondiente [MT, RT, IF, GG]
- - Tipo NIIF 17 CBR: Se selecciona el Tipo NIIF 17 CBR  [GS, GI]
- - NIIF 17 Atribuible: Se selecciona el  NIIF 17 Atribuible correspondiente [Atribuible, No Atribuible]
- - NIIF 17 Tipo: Se selecciona el NIIF 17 Tipo correspondiente  [GM,GA]
- - CÃ³digo Concepto:  NN.NN.NN  Ej: 10.01.05, 10.14.00
- - Concepto N1: Texto Ej: Egresos TÃ©cnicos netos
- - Concepto N2: Texto. Ej; Compras
- - Concepto N3: Texto. Ej: Seguro Social

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Cuentas Contables".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Centros definido en la ParametrizaciÃ³n de  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Centros" de Centros

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3- Los campos Negocio, Centro de Costo, Nombre Centro de costo, Nombre LÃ­nea, Nombre producto, Nombre canal, Nombre subcanal, Tipo son obligatorios
4. 4- Las LÃ­nea, Producto, Canal y Subcanal deben estar creados en su catÃ¡logo
5. 5- El Negocio debe ser PPS o PVI; otros valores son rechazados.
6. 6- Cuando el Centro es de tipo DIRECTO, debe existir una combinaciÃ³n vÃ¡lida de LÃ­nea, Producto, Canal y Subcanal en los catÃ¡logos maestros.
7. 7- Todos los cÃ³digos de LÃ­nea, Producto, Canal y Subcanal deben existir en catÃ¡logo.
8. 8- Cuando el campo TIPO viene vacÃ­o, el Centro NO se considera DIRECTO.
9. 9- Los catÃ¡logos maestros de LÃ­nea, Producto, Canal y Subcanal se encuentran previamente configurados, activos y con sus relaciones jerÃ¡rquicas definidas (Productoâ€“LÃ­nea y Subcanalâ€“Canal).

**Datos:**
- Campos de formulario
- 
- - Negocio: Se selecciona el Negocio Correspondiente [PPS, PVI]
- - Centro de Costo: Se selecciona el centro de costos correspondiente
- - Nombre Centro de Costo: Se autocompleta segÃºn el centro de costo
- - CÃ³digo lÃ­nea: Se selecciona el CÃ³digo LÃ­nea correspondiente  EJ: SEPE, VGRP
- - LÃ­nea: Se autocompleta segÃºn el CÃ³digo seleccionado
- - CÃ³digo producto: Se selecciona el CÃ³digo Producto correspondiente EJ: SEPE001, VGRP001
- - Producto: Se autocompleta segÃºn el CÃ³digo seleccionado
- - CÃ³digo canal: Se selecciona el CÃ³digo Canal correspondiente EJ: COR, CCO
- - Canal: Se autocompleta segÃºn el CÃ³digo seleccionado
- - CÃ³digo subcanal: Se selecciona el CÃ³digo Subcanal correspondiente Ej: COR004,CCO006
- - Subcanal: Se autocompleta segÃºn el CÃ³digo seleccionado
- - Tipo: Se selecciona el tipo correspondiente: [DIRECTOS, INDIRECTOS]
- - Tipo emisiÃ³n: Se selecciona el tipo de emisiÃ³n correspondiente:[DIGITAL, TRADICIONAL]
- - Tipo negocio:Se selecciona el tipo de negocio correspondiente:[PERSONA, EMPRESA]
- - Tipo producto: Se selecciona el tipo correspondiente: [MODULAR, NO MODULAR]

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Centros".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Unidad de cuenta GT  definido en el Aprovisionamiento de  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Unidad de cuenta GT" de Unidad de cuenta GT

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3- El campo Prioridad es obligatorio
4. 4- Los campos Unidad de Cuenta, Ramo, Producto y Subcanal deben existir y estar previamente registrados en sus respectivos catÃ¡logos maestros.
5. 5- En el valor de factor debe usarse punto para indicar decimales.
6. 6- El campo Prioridad es obligatorio y debe contener un valor numÃ©rico entre 1 y 4.
7. 7- El CÃ³digo de Concepto exista en el catÃ¡logo de conceptos dentro de " Cuentas Contables"
8. 8- Para un mismo registro con el mismo CÃ³digo de Concepto, Producto y Subcanal, la Unidad de Cuenta debe ser Ãºnica y la suma de sus factores debe ser igual a 1.
9. 9. El valor de campo DÃ­gito de la Cuenta debe ser 44 o 54, que corresponden a las cuentas contables aplicables para Gastos TÃ©cnicos. En caso contrario,debe mostrar un mensaje de error y no permitir el registro.
10. 10- Los campos Unidad de Cuenta, Ramo, Producto y Subcanal deben existir y estar previamente registrados en sus respectivos catÃ¡logos maestros.
11. 11- EL valor de Factor debe estar entre 0 y 1

**Datos:**
- Campos de formulario
- 
- - Prioridad: Seleccionar la Prioridad correspondiente [1 o 4]
- - CÃ³digo Concepto: Se selecciona el CÃ³digo concepto correspondiente Ej:  07.04.00
- - Moneda: Se selecciona la moneda correspondiente [PEN,USD]
- - DÃ­gito de Cuenta: Seleccionar el DÃ­gito de Cuenta correspondiente [44 o 54]
- - CÃ³digo Ramo: Se selecciona el CÃ“digo Ramo correspondiente Ej: [01,70]
- - Producto: Se selecciona el Producto correspondiente Ej: [AFP003]
- - Subcanal: Se selecciona el subcanal  correspondiente Ej; [AFPS2]
- - Unidad de Cuenta: Se selecciona la Unidad de cuenta correspondiente Ej: IFRS_GRP_2021_UNIQUE SISCO2_PEN_PAA_Ceded_Prof
- - Factor: [1,0.234,-10]

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Unidad de Cuenta GT".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Maestro de Negocio y Embebidos  definido en el Aprovisionamiento de  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar Maestro de Negocio y Embebidos" de Maestro de Negocio y Embebidos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3- Los campos Negocio, LÃ­nea, Producto son obligatorios
4. 4- Se debe validar que los valores de LÃ­nea, Producto, Canal y Subcanal existan en sus respectivos catÃ¡logos maestros. AdemÃ¡s, se debe verificar que el Producto estÃ© asociado a la LÃ­nea y que el Subcanal estÃ© asociado al Canal correspondiente.
5. 5- Los campos Embebidos y Tipo de Negocio son excluyentes: si Embebidos tiene valor, Tipo de Negocio debe estar vacÃ­o, y viceversa.

**Datos:**
- Campos de formulario
- 
- - Negocio: [GENERALES, VIDA]
- - LÃ­nea: Se selecciona la LÃ­nea correspondiente. Ej: ASISTENCIA MÃ‰DICA
- - Producto: Se selecciona el  producto correspondiente Ej: INDEMNIZATORIO INDIVIDUAL
- - Canal: Se selecciona el canal correspondiente Ej: ALIANZAS]
- - Subcanal: Se selecciona el subcanal correspondiente Ej:  FALABELLA
- - Embebido: [Embebido, No embebido]
- - Tipo Negocio: [EMPRESA, PERSONA]

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Maestro de Negocio y Embebidos".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en MÃ©todo Subcanal  definido en el Asignaciones de  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar MÃ©todo Subcanal" de MÃ©todo Subcanal

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3- Todos los campos son obligatorios
4. 4- El CÃ³digo de Concepto, Ramo, LÃ­nea, Producto, Canal y MÃ©todo debe estar previamente configurado en sus catÃ¡logos
5. 5- Los campos son obligatorios
6. 6- Debe existir correspondencia vÃ¡lida entre CÃ³digo de LÃ­nea y Nombre de LÃ­nea, asÃ­ como entre CÃ³digo de Producto y Nombre de Producto.
7. 7- Debe existir una relaciÃ³n vÃ¡lida entre la LÃ­nea y el Producto (el Producto debe estar asociado a la LÃ­nea correspondiente).
8. 8- La combinaciÃ³n de los campos CÃ³digo de Concepto, CÃ³digo de Ramo, CÃ³digo de LÃ­nea, LÃ­nea, CÃ³digo de Grupo de Producto, Grupo de Producto, CÃ³digo de Canal y CÃ³digo de MÃ©todo debe ser Ãºnica. No se permite registrar mÃ¡s de un registro con la misma combinaciÃ³n de estos valores.

**Datos:**
- Campos de formulario:
- 
- -CÃ³digo lÃ­nea: Se selecciona la LÃ­nea correspondiente Ej: AMED
- -LÃ­nea: Se autocompleta segÃºn el CÃ³digo seleccionado
- -CÃ³digo producto:Se selecciona el producto correspondiente Ej: AMED019
- -Producto: Se autocompleta segÃºn el CÃ³digo seleccionado
- -CÃ³digo canal: Se selecciona el CÃ³digo canal correspondiente Ej: CCO
- -CÃ³digo Concepto: Se selecciona el CÃ³digo concepto correspondiente Ej: 10.22.08
- -CÃ³digo Ramo: Se selecciona el ramo correspondiente Ej: 64
- -CÃ³digo mÃ©todo: Se selecciona el MÃ©todo correspondiente Ej: GT2SCCCO001

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar MÃ©todo Subcanal.
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en MÃ©todo Producto definido en el Asignaciones de  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar/Editar MÃ©todo Productor" de MÃ©todo Producto

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3- Todos los campos son obligatorios
4. 4- El CÃ³digo de Concepto, Ramo, LÃ­nea, Producto, Canal y MÃ©todo debe estar previamente configurados en sus catÃ¡logos
5. 5- Debe existir correspondencia vÃ¡lida entre CÃ³digo de LÃ­nea y Nombre de LÃ­nea
6. 6- La combinaciÃ³n CÃ³digo de Concepto, CÃ³digo de Ramo, CÃ³digo de LÃ­nea, LÃ­nea, CÃ³digo de Canal y CÃ³digo de MÃ©todo no debe repetirse.

**Datos:**
- Campos de formulario:
- 
- - CÃ³digo Concepto:  Se selecciona el concepto correspondiente Ej: 10.01.14
- - CÃ³digo Ramo:  Se selecciona el ramo correspondiente Ej: 61
- - CÃ³digo lÃ­nea:  Se selecciona la LÃ­nea correspondiente Ej: LPER
- - LÃ­nea: Se autocompleta segÃºn el CÃ³digo correspondiente.
- - CÃ³digo Canal:  Se selecciona el canal correspondiente Ej: ALZ
- - CÃ³digo MÃ©todo:  Se selecciona el MÃ©todo correspondiente Ej: PD2561ALZLPER

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Producto".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar MÃ©todo Producto.
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

### Caso de prueba: E35-GT-01.03.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Especiales NIIF  definido en el Asignaciones de  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se pueda agregar un nuevo registro desde el modal "Agregar  Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3- El CÃ³digo de Concepto, LÃ­nea, Producto, Canal, Subcanal y MÃ©todo debe estar previamente configurado en sus catÃ¡logos
4. 4-Deben existir datos vÃ¡lidos y activos en los catÃ¡logos de LÃ­neas, Productos, Canales, Subcanales, Conceptos y Centros de Costo
5. 5- Los campos CÃ³digo LÃ­nea, LÃ­nea, Porcentaje y Tipo DistribuciÃ³n son obligatorios.

**Datos:**
- Campos de formulario:
- 
- - CÃ³digo LÃ­nea: Se selecciona el concepto correspondiente Ej: LA
- - LÃ­nea: Se autocompleta segÃºn el CÃ³digo seleccionado
- -CÃ³digo Producto: Se selecciona el concepto correspondiente Ej: LPER019
- - Producto: Se autocompleta segÃºn el CÃ³digo seleccionado
- - CÃ³digo Canal: Se selecciona el concepto correspondiente Ej: DFV
- - Canal: Se autocompleta segÃºn el CÃ³digo seleccionado
- - Codsubcanal: Se selecciona el concepto correspondiente Ej: DFV008
- - Subcanal: Se autocompleta segÃºn el CÃ³digo seleccionado
- - MÃ©todo ValoraciÃ³n: [0 (PAA), 1 (BBVA/VFA).]
- - Porcentaje: [100, 1,2 , 65]
- - DÃ­gito de cuenta: [44,54]
- - Tipo DistribuciÃ³n: [PÃ“LIZAS, UOA]
- - NIIF 17 Atribuible: [SI Atribuible' o NO 'No Atribuible'.]
- - NIIF 17 Tipo:  [GM, GA]
- - Concepto N1:Tipo texto  Ej: Egresos TÃ©cnicos netos
- - Concepto N2: Tipo texto Ej: Servicios
- - CÃ³digo Concepto: Se selecciona el concepto correspondiente Ej: 10.14.00
- - CECO: se selecciona el CECO correspondiente Ej: 06.99.80

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Especiales NIIF.
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

## Escenario: E35-GT-02
**Descripcion:** Validar las reglas de negocio al agregar un registro en el  flujo de Gasto TÃ©cnicos

### Caso de prueba: E35-GT-02.01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Ramo de la ParametrizaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Ramo" de Ramo

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla Ramos mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.01.1

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Ramo".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la informaciÃ³n o edita el registro existente."

---

### Caso de prueba: E35-GT-02.01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Cuentas Contables de la ParametrizaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Cuenta Contable" de Cuentas Contables

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla Cuenta Contable mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.01.2

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Cuentas Contables".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar  Cuentas Contables".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la informaciÃ³n o edita el registro existente."

---

### Caso de prueba: E35-GT-02.01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Centros de la ParametrizaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Centro" de Centros

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla centros mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.01.3

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Centros".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la informaciÃ³n o edita el registro existente."

---

### Caso de prueba: E35-GT-02.02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Unidad de cuenta GT de Aprovisionamiento de Gastos TÃ©cnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Unidad de Cuenta GT" de Unidad de Cuenta GT

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla Unidad de Cuenta GT mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.02.1

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Unidad de Cuenta GT".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la informaciÃ³n o edita el registro existente."

---

### Caso de prueba: E35-GT-02.02.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Maestro de Negocios y Embebidos de Aprovisionamiento de Gastos TÃ©cnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Maestro de Negocio y Embebidos" de Maestro de Negocio y Embebidos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla Maestro de negocios Embebidos mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.02.2

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Maestro de Negocio y Embebidos".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la informaciÃ³n o edita el registro existente."

---

### Caso de prueba: E35-GT-02.03.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en MÃ©todo Subcanal de la Asignaciones de Gastos TÃ©cnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar MÃ©todo Subcanal" de MÃ©todo Subcanal

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla MÃ©todo Subcanal mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.03.1.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar MÃ©todo Subcanal".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la informaciÃ³n o edita el registro existente."

---

### Caso de prueba: E35-GT-02.03.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en MÃ©todo Producto de la Asignaciones de Gastos TÃ©cnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar MÃ©todo Producto" de MÃ©todo Producto

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla MÃ©todo Producto mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.03.2

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Producto".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar MÃ©todo Producto".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la informaciÃ³n o edita el registro existente."

---

### Caso de prueba: E35-GT-02.03.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Especiales NIIF  de la Asignaciones de Gastos TÃ©cnicos porque no cumple con las reglas definidas de negocio

**Descripcion:** Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.
3. 3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
- Campos de formulario
- 
- Juego de Dato 1:
- - Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla Especiales NIIF mostrada en el front
- 
- Juego de Dato 2:
- - Datos usados para para crear el registro en el CP E35-GT-01.03.3

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Especiales NIIF".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, "Registro duplicado. El registro que intentas agregar ya existe en el sistema. Por favor, verifica la informaciÃ³n o edita el registro existente."

---

## Escenario: Validar el formato y campos obligatorios de formulario en un nuevo registro en el  flujo de Gasto TÃ©cnicos
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E35-GT-03-01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los Gasto TÃ©cnicos en el  flujo de  Ramo

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Ramo" de Ramo

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.
- 
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- CÃ³digo de Ramo: X02, 000, VACIO, *?/(&
- DescripciÃ³n de Ramo: 1231+=, [] RMA 12
- Rubro: 123132

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Ramo".
5. 5. No agrega InformaciÃ³n y deja campos vacÃ­os
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:

-CÃ³digo Ramo: ''El CÃ³digo Ramo es requerido'' / ''El CÃ³digo Ramo debe ser un valor numÃ©rico de 1 o 2 dÃ­gitos o el valor especial 'SIN RAMO'.
-DescripciÃ³n Ramo: ''La DescripciÃ³n Ramo es requerida''  / "La DescripciÃ³n contiene caracteres no permitidos"

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto TÃ©cnicos de Cuentas Contables

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Cuentas Contables" de Cuentas Contables

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.
- 
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- - Cuenta Contable: LYTS_1213
- - Nombre Cuenta Contable: 123CUENTA
- - CÃ³digo Concepto: LAS_213331*

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Cuentas Contables".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Cuentas Contables".
5. 5. No agrega InformaciÃ³n y deja campos vacÃ­os
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Toda combinaciÃ³n que no corresponda con:  

-CÃ³digo es requerido
-Ingrese un valor numÃ©rico entre 6 y 14 dÃ­gitos, separado por puntos y con formato NN.N.N.NN.NN.NN (Ej.: 44.1.7.40.09.10)..
-Nombre Cuenta Contable:  -Nombre es requerido
-CÃ³digo Ramo: CÃ³digo Ramo es requerido
-NIIF 17 Atribuible: NIIF 17 Atribuible es requerido
-NIIF 17 Tipo: NIIF 17 Tipo es requerido
-CÃ³digo Concepto: Concepto es requerido
-Concepto N1:  Concepto N1 es requerido
-Concepto N2:  Concepto N2 es requerido
-Concepto N3: Concepto N3 es requerido

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto TÃ©cnicos de Centros

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Centros" de Centros

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.
- 
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- - Centro de Costo: El campo no es Editable
- - Nombre Centro de Costo: Se autocompleta segÃºn el centro de costo

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Centros".
5. 5. No agrega InformaciÃ³n y deja campos vacÃ­os
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:

-Negocio: -Negocio requerido
-Centro de costo: Centro de costo es requerido
-Ingrese un CÃ³digo de Centro con el formato NN.NN.NN (Ej.: 01.02.03).es requerido
-CÃ³digo LÃ­nea: CÃ³digo LÃ­nea requerido
-CÃ³digo Producto: CÃ³digo Producto requerido
-CÃ³digo Canal: CÃ³digo Canal requerido
-CÃ³digo Subcanal: CÃ³digo Subcanal requerido
-Tipo: Tipo requerido

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto TÃ©cnicos de Unidad de cuenta GT

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Unidad de cuenta GT" de Unidad de cuenta GT

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Unidad de Cuenta GT".
5. 5. No agrega InformaciÃ³n y deja campos vacÃ­os
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:

-CÃ³digo Subcanal: CÃ³digo Subcanal requerido
-Unidad de Cuenta: Unidad de Cuenta requerido
-Factor: Factor es requerido

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-02.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto TÃ©cnicos de Maestro de Negocios y Embebidos

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Maestro de Negocios y Embebidos" de Maestro de Negocios y Embebidos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Maestro de Negocio y Embebidos".
5. 5. No agrega InformaciÃ³n y deja campos vacÃ­os
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:

-Negocio: Negocio requerido
-LÃ­nea: LÃ­nea requerido
-Producto: Producto requerido

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-03.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto TÃ©cnicos de MÃ©todo Subcanal

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar MÃ©todo Subcanal" de MÃ©todo Subcanal

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar MÃ©todo Subcanal".
5. 5. No agrega InformaciÃ³n y deja campos vacÃ­os
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:

-Todos los campos son select y autocompletados. 
-CÃ³digo lÃ­nea requerido      
-CÃ³digo producto requerido          
-Nombre producto requerido
-CÃ³digo canal requerido
-Concepto es requerido
-CÃ³digo Ramo requerido
-CÃ³digo mÃ©todo requerido

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-03.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto TÃ©cnicos de MÃ©todo Producto

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar MÃ©todo Producto" de MÃ©todo Producto

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Producto".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 5. No agrega InformaciÃ³n y deja campos vacÃ­os
5. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:

-Todos los campos son select y autocompletados. 
-En el caso de los inputs se autocomplentan cuando se selecciona el cÃ³digo.
 
-Concepto es requerido
-CÃ³digo Ramo requerido
-CÃ³digo lÃ­nea requerido
-Nombre LÃ­nea requerido
-CÃ³digo Canal requerido
-CÃ³digo MÃ©todo requerido

-No se habilita el campo Agregar

---

### Caso de prueba: E35-GT-03-03.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto TÃ©cnicos de  Especiales NIIF

**Descripcion:** Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
- Obligatoriedad
- -Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.
- 
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- - Porcentaje: DOS, 12%, 1,2342

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Especiales NIIF".
5. 5. No agrega InformaciÃ³n y deja campos vacÃ­os
6. 6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:


- Porcentaje: ''El Porcentaje es obligatorio'' 
''Ingrese un porcentaje vÃ¡lido con hasta 3 dÃ­gitos en la parte entera y hasta 6 en la parte decimal, separado por punto (Ej.: 22.563)''.
 
-Tpo DistribuciÃ³n: Tpo DistribuciÃ³n requerido

-No se habilitael campo agregar

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro pero al subir el archivo de perÃ­odo estÃ© se sobreescriba en el  flujo de Gasto TÃ©cnicos
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E35-GT-04-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo perÃ­odo en el  flujo de comunes de  Ramo

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Ramo definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Ramos GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Ramo".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Ramo".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".
7. 7. Visualiza la informaciÃ³n de registro agregado en el front.
8. 8. El usuario presiona  el botÃ³n "Recargar".
9. 9. Se levanta el modal con tÃ­tulo "Recargar Ramo",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?

2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo perÃ­odo en el  flujo de comunes de  Cuentas Contables

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Cuentas Contables definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL  Cuentas Contables GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Cuentas contables".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Cuenta Contable".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".
7. 7. Visualiza la informaciÃ³n de registro agregado en el front.
8. 8. El usuario presiona  el botÃ³n "Recargar".
9. 9. Se levanta el modal con tÃ­tulo "Recargar Cuenta Contable",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?

2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el  flujo de comunes de  Centros

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Centros definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL  Centros GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Centros".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Centro".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".
7. 7. Visualiza la informaciÃ³n de registro agregado en el front.
8. 8. El usuario presiona  el botÃ³n "Recargar".
9. 9. Se levanta el modal con tÃ­tulo "Recargar Centros",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?

2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo perÃ­odo en el  flujo de comunes de Unidad de cuenta GT

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo  Unidad de cuenta GT definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL  Unidad de cuenta GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Unidad de cuenta GT".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".
7. 7. Visualiza la informaciÃ³n de registro agregado en el front.
8. 8. El usuario presiona  el botÃ³n "Recargar".
9. 9. Se levanta el modal con tÃ­tulo "Recargar Unidad de cuenta GT",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?

2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo perÃ­odo en el  flujo de comunes de   Maestro de Negocios y Embebidos

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Maestro de Negocios y Embebidos definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Maestro de Negocio y Embebidos GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > " Maestro de Negocios y Embebidos".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Maestro de Negocios y Embebidos".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".
7. 7. Visualiza la informaciÃ³n de registro agregado en el front.
8. 8. El usuario presiona  el botÃ³n "Recargar".
9. 9. Se levanta el modal con tÃ­tulo "Recargar Maestro de Negocios y Embebidos",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?

2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo perÃ­odo en el  flujo de comunes de  MÃ©todo Subcanal

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo MÃ©todo Subcanal definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL MÃ©todo Subcanal GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > " MÃ©todo Subcanal".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar MÃ©todo Subcanal".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".
7. 7. Visualiza la informaciÃ³n de registro agregado en el front.
8. 8. El usuario presiona  el botÃ³n "Recargar".
9. 9. Se levanta el modal con tÃ­tulo "Recargar MÃ©todo Subcanal",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?

2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo perÃ­odo en el  flujo de comunes de MÃ©todo Producto

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo MÃ©todo Producto definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL MÃ©todo producto GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Producto".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar MÃ©todo Producto".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".
7. 7. Visualiza la informaciÃ³n de registro agregado en el front.
8. 8. El usuario presiona  el botÃ³n "Recargar".
9. 9. Se levanta el modal con tÃ­tulo "Recargar MÃ©todo Producto",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?

2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

### Caso de prueba: E35-GT-04-03.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al Recargar el archivo perÃ­odo en el  flujo de comunes de  Especiales NIIF

**Descripcion:** Validar que se sobreescribe el o los registros manuales existentes al subir el archivo  Especiales NIIF definido

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- Si hay data cargada, enviar mensaje de advertencia.
3. 3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
- Archivo ''REAL Especiales NIIF GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona  el botÃ³n "Agregar".
4. 4. Se levanta el modal "Agregar Especiales NIIF".
5. 5. El usuario completa los campos.
6. 6. El usuario presiona el botÃ³n Agregar".
7. 7. Visualiza la informaciÃ³n de registro agregado en el front.
8. 8. El usuario presiona  el botÃ³n "Recargar".
9. 9. Se levanta el modal con tÃ­tulo "Recargar Especiales NIIF",el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. 10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?

2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

## Escenario: Validar que el sistema pueda editar un registro en el  flujo de Gastos TÃ©cnicos
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E36-GT-01-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Ramo

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Ramo" de Ramo

**Precondiciones:**
1. 1- El registro debe haber sido creado anteriormente.
2. 2- el usuario debe tener rol de Gestor de Gastos TÃ©cnicos
3. 3- Los campos cÃ³digo ramo y descriÃ§iÃ³n son obligatorios
4. 4- Un Ramo puede tener mÃºltiples Rubros
5. 5-Los campos de tipo autocompleta son Editables condicionados segÃºn el cÃ³digo asociado.

**Datos:**
- Datos para los campos editables de formulario
- 
- - CÃ³digo Ramo:  SIN RAMO, 1, 44
- - DescripciÃ³n ramo: SIN RAMO, INCENDIO, DESHONESTIDAD
- - Rubro: LÃ­neas ALIADAS INCENDIO, DESHONESTIDAD FRENTE A LA EMPRESA

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar  Ramo".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Cuentas Contables

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Cuentas Contables" de Cuentas Contables

**Precondiciones:**
1. 1-El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2-El registro de Cuenta Contable debe haber sido creado anteriormente.
3. 3-El usuario debe tener permisos para editar registros de Cuentas Contables.
4. 4-El CÃ³digo de Ramo debe estar creado en el maestro de Ramo
5. 5-Los valores de cÃ³digo Cuenta Contable debe ser Ãºnico
6. 6- El modal "Editar Cuenta Contable" debe estar disponible desde el listado de Cuentas Contables.
7. 7-Los campos de tipo autocompleta son Editables condicionados segÃºn el cÃ³digo asociado.
8. 8-La cuenta contable Los dos primeros dÃ­gitos deben ser 46, 47, 56 o 57; el tercer dÃ­gito debe ser 1 o 2; el cuarto puede ser un nÃºmero entre 0 y 9 o una letra; y los bloques siguientes deben estar entre 01 y 99 o combinaciones de letras (ej. OO).

**Datos:**
- Datos para los campos editables de formulario
- 
- - CÃ³digo cuenta contable: 46.1.7.40.09.10, 47.1.7.40.09.10
- - Nombre Cuenta Contablee: Ej: BONOS ASESORES - PROV. ESSALUD
- - CÃ³digo ramo: Se selecciona el CÃ³digo ramo correspondiente [01, 44]
- - Tipo de cuenta:  Se selecciona el tipo de cuenta correspondiente [MT, RT, IF, GG]
- - Tipo NIIF 17 CBR: Se selecciona el Tipo NIIF 17 CBR  [GS, GI]
- - NIIF 17 Atribuible: Se selecciona el  NIIF 17 Atribuible correspondiente [Atribuible, No Atribuible]
- - NIIF 17 Tipo: Se selecciona el NIIF 17 Tipo correspondiente  [GM,GA]
- - Concepto: Campo obligatorio. Ej: 10.01.05, 10.14.00
- - Concepto N1: Ej: Egresos TÃ©cnicos netos
- - Concepto N2: Ej; Compras
- - Concepto N3: Ej: Seguro Social

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar Cuentas Contables".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Centros

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Centros" de  Centros

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 1- El registro de Centro debe haber sido creado anteriormente.
3. 2- El usuario debe tener permisos para editar registros de Centros.
4. 3- El registro a editar debe visualizarse en el listado de Centros.
5. 4-Los campos de tipo autocompleta son Editables condicionados segÃºn el cÃ³digo asociado.
6. 5- Cuando el Centro es de tipo DIRECTO, debe existir una combinaciÃ³n vÃ¡lida de LÃ­nea, Producto, Canal y Subcanal en los catÃ¡logos maestros.
7. 6- Todos los cÃ³digos de LÃ­nea, Producto, Canal y Subcanal deben existir en catÃ¡logo.
8. 7- Cuando el campo TIPO viene vacÃ­o, el Centro NO se considera DIRECTO.
9. 8- Los catÃ¡logos maestros de LÃ­nea, Producto, Canal y Subcanal se encuentran previamente configurados, activos y con sus relaciones jerÃ¡rquicas definidas (Productoâ€“LÃ­nea y Subcanalâ€“Canal).

**Datos:**
- Datos para los campos editables de formulario
- 
- - Negocio: Se selecciona el Negocio Correspondiente [PPS, PVI]
- - Centro de Costo: El campo no es Editable
- - Nombre Centro de Costo: Se autocompleta segÃºn el centro de costo
- - CÃ³digo lÃ­nea: Se selecciona el CÃ³digo LÃ­nea correspondiente  EJ: SEPE, VGRP
- - LÃ­nea: Se autocompleta segÃºn el CÃ³digo seleccionado
- - CÃ³digo producto: Se selecciona el CÃ³digo Producto correspondiente EJ: SEPE001, VGRP001
- - Producto: Se autocompleta segÃºn el CÃ³digo seleccionado
- - CÃ³digo canal: Se selecciona el CÃ³digo Canal correspondiente EJ: COR, CCO
- - Canal: Se autocompleta segÃºn el CÃ³digo seleccionado
- - CÃ³digo subcanal: Se selecciona el CÃ³digo Subcanal correspondiente Ej: COR004,CCO006
- - Subcanal: Se autocompleta segÃºn el CÃ³digo seleccionado
- - Tipo: [DIRECTO,DIRECTOS, INDIRECTO,INDIRECTOS]
- -Tipo EmisiÃ³n: [DIGITAL,TRADICIONAL]
- -Tipo Negocio: [PERSONA,EMPRESA]
- -Tipo Poducto:Campo Adicional. [MODULAR,NO MODULAR]

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar Centros".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Cambios guardados correctamente! 
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
- CÃ³digo MÃ©todo: Obligatorio No Editable.
- DescripciÃ³n MÃ©todo: Obligatorio Editable.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar Driver Producto".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Cambios guardados correctamente! 
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
4. 4- CÃ³digo MÃ©todo debe existir en el catÃ¡logo de mÃ©todos.

**Datos:**
- CÃ³digo mÃ©todo: Obligatorio  Editable.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > " Driver Subcanal".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar  Driver Subcanal".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Unidad de cuenta GT

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Unidad de cuenta GT" de  Unidad de cuenta GT

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- El registro de Unidad de Cuenta GT debe haber sido creado anteriormente.
3. 3- El usuario debe tener permisos para editar registros de Unidades de Cuenta.
4. 4- El registro a editar debe visualizarse en el listado de Unidades de Cuenta GT.
5. 5-Los campos de tipo autocompleta son Editables condicionados segÃºn el cÃ³digo asociado.
6. 6- El campo Prioridad es obligatorio y debe contener un valor numÃ©rico entre 1 y 4.
7. 7- El CÃ³digo de Concepto exista en el catÃ¡logo de conceptos dentro de " Cuentas Contables"
8. 8- Para un mismo registro con el mismo CÃ³digo de Concepto, Producto y Subcanal, la Unidad de Cuenta debe ser Ãºnica y la suma de sus factores debe ser igual a 1.
9. 9. El valor de campo DÃ­gito de la Cuenta debe ser 44 o 54, que corresponden a las cuentas contables aplicables para Gastos TÃ©cnicos. En caso contrario,debe mostrar un mensaje de error y no permitir el registro.
10. 10- Los campos Unidad de Cuenta, Ramo, Producto y Subcanal deben existir y estar previamente registrados en sus respectivos catÃ¡logos maestros.
11. 11- EL valor de Factor debe esatr entre 0 y 1

**Datos:**
- Datos para los campos editables de formulario
- 
- - Prioridad: Seleccionar la Prioridad correspondiente [1 o 4]
- - CÃ³digo Concepto: Se selecciona el CÃ³digo concepto correspondiente Ej:  07.04.00
- - Moneda: Se selecciona la moneda correspondiente [PEN,USD]
- - DÃ­gito de Cuenta: Seleccionar el Digito de Cuenta correspondiente [44 o 54]
- - CÃ³digo Ramo: Se selecciona el COdifo Ramo correspondiente Ej: [01,70]
- - Producto: Se selecciona el Producto correspondiente Ej: [AFP003]
- - Subcanal: Se selecciona el subcanal  correspondiente Ej; [AFPS2]
- - Unidad de Cuenta: Se selecciona la Unida de cuenta correspondiente Ej: IFRS_GRP_2021_UNIQUE SISCO2_PEN_PAA_Ceded_Prof
- - Factor: [1,0.234,-10]

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar Unidad de cuenta GT".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de  Maestro de Negocios y Embebidos

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar Maestro de Negocios y Embebidos" de Maestro de Negocios y Embebidos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- El registro debe haber sido creado anteriormente.
3. 3- El usuario debe tener permisos para editar registros de Maestro de Negocios y Embebidos.
4. 4- El registro a editar debe visualizarse en el listado de Maestro de Negocios y Embebidos.
5. 5- El subcanal debe estar asociado al canal correpsondiente
6. 6-Los campos de tipo autocompleta son Editables condicionados segÃºn el cÃ³digo asociado.
7. 7- Los campos Negocio, LÃ­nea, Producto son obligatorios
8. 8- Se debe validar que los valores de LÃ­nea, Producto, Canal y Subcanal existan en sus respectivos catÃ¡logos maestros. AdemÃ¡s, se debe verificar que el Producto estÃ© asociado a la LÃ­nea y que el Subcanal estÃ© asociado al Canal correspondiente.
9. 9- Los campos Embebidos y Tipo de Negocio son excluyentes: si Embebidos tiene valor, Tipo de Negocio debe estar vacÃ­o, y viceversa.

**Datos:**
- Datos para los campos editables de formulario
- 
- - Negocio: [GENERALES, VIDA]
- - LÃ­nea: Se selecciona la LÃ­nea correspondiente. Ej: ASISTENCIA MÃ‰DICA
- - Producto: Se selecciona el  producto correspondiente Ej: INDEMNIZATORIO INDIVIDUAL
- - Canal: Se selecciona el canal correspondiente Ej: ALIANZAS]
- - Subcanal: Se selecciona el subcanal correspondiente Ej:  FALABELLA
- - Embebido: [Embebido, No embebido]
- - Tipo Negocio: [EMPRESA, PERSONA]

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocios y Embebidos".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar Maestro de Negocios y Embebidos".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de MÃ©todo Subcanal

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar MÃ©todo Subcanal" de MÃ©todo Subcanal

**Precondiciones:**
1. 1- El registro de MÃ©todo Subcanal debe haber sido creado anteriormente.
2. 2- El usuario debe tener permisos para editar registros de MÃ©todo Subcanal.
3. 3- Deben existir datos vÃ¡lidos en los catÃ¡logos de Ramos, LÃ­neas, Grupo Producto, Canales, Unidad de Cuenta GT y Driver Subcanal.
4. 4- El registro a editar debe visualizarse en el listado de Maestro de MÃ©todo subcanal
5. 5- Debe existir correspondencia vÃ¡lida entre CÃ³digo de LÃ­nea y  LÃ­nea, asÃ­ como entre CÃ³digo de Producto y  Producto.
6. 6- Debe existir una relaciÃ³n vÃ¡lida entre la LÃ­nea y el Producto (el Producto debe estar asociado a la LÃ­nea correspondiente).
7. 7- La combinaciÃ³n de los campos CÃ³digo de Concepto, CÃ³digo de Ramo, CÃ³digo de LÃ­nea, LÃ­nea, CÃ³digo de Grupo de Producto, Grupo de Producto, CÃ³digo de Canal y CÃ³digo de MÃ©todo debe ser Ãºnica. No se permite registrar mÃ¡s de un registro con la misma combinaciÃ³n de estos valores.

**Datos:**
- Datos para los campos editables de formulario
- 
- -CÃ³digo lÃ­nea: Se selecciona la LÃ­nea correspondiente Ej: AMED
- -LÃ­nea: Se autocompleta segÃºn el CÃ³digo seleccionado
- -CÃ³digo producto:Se selecciona el producto correspondiente Ej: AMED019
- -Producto: Se autocompleta segÃºn el CÃ³digo seleccionado
- -CÃ³digo canal: Se selecciona el CÃ³digo canal correspondiente Ej: CCO
- -CÃ³digo Concepto: Se selecciona el CÃ³digo concepto correspondiente Ej: 10.22.08
- -CÃ³digo Ramo: Se selecciona el ramo correspondiente Ej: 64
- -CÃ³digo mÃ©todo: Se selecciona el MÃ©todo correspondiente Ej: GT2SCCCO0017

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar MÃ©todo Subcanal".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

### Caso de prueba: E36-GT-01-03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de MÃ©todo Producto

**Descripcion:** Validar que se pueda editar un nuevo registro desde el modal "Editar MÃ©todo Producto " de MÃ©todo Producto

**Precondiciones:**
1. 1-El registro de MÃ©todo Producto debe haber sido creado anteriormente.
2. 2-El usuario debe tener permisos para editar registros de MÃ©todo Producto.
3. 3-Deben existir datos vÃ¡lidos en los catÃ¡logos de Ramos, LÃ­neas, Canales, Unidad de Cuenta GT y Driver Subcanal.
4. 4- El registro a editar debe visualizarse en el listado de Maestro de MÃ©todo subcanal
5. 5- La combinaciÃ³n CÃ³digo de Concepto, CÃ³digo de Ramo, CÃ³digo de LÃ­nea, LÃ­nea, CÃ³digo de Canal y CÃ³digo de MÃ©todo no debe repetirse

**Datos:**
- Datos para los campos editables de formulario
- 
- - CÃ³digo Concepto:  Se selecciona el concepto correspondiente Ej: 10.01.14
- - CÃ³digo Ramo:  Se selecciona el ramo correspondiente Ej: 61
- - CÃ³digo lÃ­nea:  Se selecciona la LÃ­nea correspondiente Ej: LPER
- - LÃ­nea: Se autocompleta segÃºn el CÃ³digo correspondinete.
- - CÃ³digo Canal:  Se selecciona el canal correspondiente Ej: ALZ
- - CÃ³digo MÃ©todo:  Se selecciona el MÃ©todo correspondiente Ej: PD2561ALZLPER

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Producto ".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar MÃ©todo Producto ".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Cambios guardados correctamente! 
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
3. 3-Deben existir datos vÃ¡lidos y activos en los catÃ¡logos de LÃ­neas, Productos, Canales, Subcanales, Conceptos y Centros de Costo
4. 4- El registro a editar debe visualizarse en el listado de Maestro deEspeciales NIIF

**Datos:**
- Datos para los campos editables de formulario
- 
- - CÃ³digo LÃ­nea: Se selecciona el concepto correspondiente Ej: LPER
- - LÃ­nea: Se autocompleta segÃºn el CÃ³digo seleccionado
- -CÃ³digo Producto: Se selecciona el concepto correspondiente Ej: LPER019
- - Producto: Se autocompleta segÃºn el CÃ³digo seleccionado
- - CÃ³digo Canal: Se selecciona el concepto correspondiente Ej: DFV
- - Canal: Se autocompleta segÃºn el CÃ³digo seleccionado
- - Codsubcanal: Se selecciona el concepto correspondiente Ej: DFV008
- - Subcanal: Se autocompleta segÃºn el CÃ³digo seleccionado
- - MÃ©todo ValoraciÃ³n: [0 (PAA), 1 (BBVA/VFA).]
- - Porcentaje: [100, 1,2 , 65]
- - Digito de cuenta: [44,54]
- - Tipo DistribuciÃ³n: [POLIZAS, UOA]
- - NIIF 17 Atribuible: [SI Atribuible' o NO 'No Atribuible'.]
- - NIIF 17 Tipo:  [GM, GA]
- - Concepto N1:Tipo texto  Ej: Egresos TÃ©cnicos netos
- - Concepto N2: Tipo texto Ej: Servicios
- - CÃ³digo Concepto: Se selecciona el cocepto correspondiente Ej: 10.14.00
- - CECO: se selecciona el CECO correspondiente Ej: 06.99.80

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > " Especiales NIIF".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar  Especiales NIIF ".
5. 5. El usuario edita los campos
6. 6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de Ã©xito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

## Escenario: Validar el formato y campos obligatorios de formulario al editar un registro en el  flujo de Gastos TÃ©cnicos
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E36-GT-03-01.1
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro por error en los campos  de Ramo  por error de formato de los campos en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Ramo" de Ramo

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- Debe existir un registro correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- -DescripciÃ³n Ramo: campo obligatorio, Editable,texto. Permite caracteres especiales como: - . _ / , ( )
- -Rubro: campo Adicional, Editable, Texto. Permite caracteres especiales como: - . _ / , ( ) " | % : &

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar Ramo".
5. 5. El usuario borrar la informaciÃ³n y deja campos vacÃ­os
6. 6. El usuario edita los campos incorrectamente

**Resultado esperado:**
-El nuevo registro no ha sido editado.

Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''

1-Se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.

---

### Caso de prueba: E36-GT-03-01.2
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Cuentas Contables  por error de formato de los campos en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Cuentas Contables" de Cuentas Contables

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- Debe existir un registro correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- -Nombre Cuenta Contable: Campo obligatorio, Editable, Texto. permite caracteres especiales como: - . _ / , ( )

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar Cuentas Contables".
5. 5. El usuario borrar la informaciÃ³n y deja campos vacÃ­os
6. 6. El usuario edita los campos incorrectamente

**Resultado esperado:**
-El nuevo registro no ha sido editado.

Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''

1-Se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.

---

### Caso de prueba: E36-GT-03-02.3
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Unidad de Cuenta GT por error de formato de los campos en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Unidad de Cuenta GT" de Unidad de Cuenta G

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- Debe existir un registro correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad
- -Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, borrar la informaciÃ³n y luego dejarlos vacÃ­os.
- 
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- -Factor:  5, -10, 34,343, L2 1%

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar Unidad de Cuenta GT".
5. 5. El usuario borrar la informaciÃ³n y deja campos vacÃ­os
6. 6. El usuario edita los campos incorrectamente

**Resultado esperado:**
-El nuevo registro no ha sido editado.

Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''

1-Se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.

---

### Caso de prueba: E36-GT-03-03.3
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de  Especiales NIIF  por error de formato de los campos en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2. 2- Debe existir un registro correctamente creado con todos los campos obligatorios.

**Datos:**
- Obligatoriedad y Formato (Valores Incorrectos)
- 
- - Porcentaje: DOS, 12%, 1,2342

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > " Especiales NIIF".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. 4. Se levanta el modal "Editar Especiales NIIF".
5. 5. El usuario borrar la informaciÃ³n y deja campos vacÃ­os
6. 6. El usuario edita los campos incorrectamente

**Resultado esperado:**
-El nuevo registro no ha sido editado.

Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:
-Los campos obligatorios deben mostrar el mensaje, ''el campo es requerido''

1-Se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.

---

## Escenario: E37-GT-01
**Descripcion:** Validar  que solo el rol de administrador de Gastos pueda eliminar un registro en el  flujo de Gastos TÃ©cnicos

### Caso de prueba: E37-GT-01.01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Ramo en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gatos TÃ©cnicos de Ramo

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo estÃ¡ siendo usado.
5. 5- No se permite eliminar un Ramo  si existen movimientos asociados a una cuenta contable GT

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Ramo".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar estÃ© registro?.  

2- se muestra el mensaje de Ã©xito Â¡Registro eliminado con Ã©xito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Cuentas Contables en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gatos TÃ©cnicos de Cuentas Contables

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo estÃ¡ siendo usado.
5. 5-No permite eliminar una cuenta si existen movimientos asociados a un Exactus, Unidad de Cuenta GT o Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Cuentas Contables".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar estÃ© registro?.  

2- se muestra el mensaje de Ã©xito Â¡Registro eliminado con Ã©xito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Centros en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gatos TÃ©cnicos de Centros

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo estÃ¡ siendo usado.
5. 5-No permite eliminar una centro si existen movimientos asociados a un Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Centros".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar estÃ© registro?.  

2- se muestra el mensaje de Ã©xito Â¡Registro eliminado con Ã©xito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Driver Producto en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gatos TÃ©cnicos de Driver Producto

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- No permite eliminar una registro si existen movimientos asociados a un MÃ©todo Producto

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar estÃ© registro?.  

2- se muestra el mensaje de Ã©xito Â¡Registro eliminado con Ã©xito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.02.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Drive Subcanal en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menÃº de acciones en el  flujo de Datos TÃ©cnicos de Drive Subcanal

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- No permite eliminar una registro si existen movimientos asociados a un MÃ©todo Subcanal

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Drive Subcanal".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar estÃ© registro?.  

2- se muestra el mensaje de Ã©xito Â¡Registro eliminado con Ã©xito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.02.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Unidad de Cuenta GT en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menÃº de acciones en el  flujo de Datos TÃ©cnicos de Unidad de Cuenta GT

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar estÃ© registro?.  

2- se muestra el mensaje de Ã©xito Â¡Registro eliminado con Ã©xito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.02.5
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Maestro de Negocios y Embebidos en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gatos TÃ©cnicos de  Maestro de Negocios y Embebidos

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo estÃ¡ siendo usado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > " Maestro de Negocios y Embebidos".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar estÃ© registro?.  

2- se muestra el mensaje de Ã©xito Â¡Registro eliminado con Ã©xito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de MÃ©todo Subcanal en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gatos TÃ©cnicos de  MÃ©todo Subcanal

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > " MÃ©todo Subcanal".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar estÃ© registro?.  

2- se muestra el mensaje de Ã©xito Â¡Registro eliminado con Ã©xito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de MÃ©todo Producto en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gatos TÃ©cnicos de  MÃ©todo Producto

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > " MetodoProducto".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar estÃ© registro?.  

2- se muestra el mensaje de Ã©xito Â¡Registro eliminado con Ã©xito! 

3-  no se muestra en la tabla de front.

---

### Caso de prueba: E37-GT-01.03.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Especiales NIIF en el  flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gatos TÃ©cnicos de  Especiales NIIF

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > " Especiales NIIFl".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.

1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar estÃ© registro?.  

2- se muestra el mensaje de Ã©xito Â¡Registro eliminado con Ã©xito! 

3-  no se muestra en la tabla de front.

---

## Escenario: E37-GT-02
**Descripcion:** Validar restricciones al eliminar un registro en el Gastos TÃ©cnicos

### Caso de prueba: E37-GT-02.01.1
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos TÃ©cnicos de Ramo

**Descripcion:** Validar que no se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gastos TÃ©cnicos de Ramo

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo estÃ¡ siendo usado.
5. 5- No se permite eliminar un Ramo  si existen movimientos asociados a una cuenta contable GT

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Ramo".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.01.2
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos TÃ©cnicos de Cuentas Contables

**Descripcion:** Validar que no se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gastos TÃ©cnicos de Cuentas Contables

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo estÃ¡ siendo usado.
5. 5-No permite eliminar una cuenta si existen movimientos asociados a un Exactus, Unidad de Cuenta GT o Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Cuentas Contables".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.01.3
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos TÃ©cnicos de  Centros

**Descripcion:** Validar que no se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gastos TÃ©cnicos de  Centros

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo estÃ¡ siendo usado.
5. 5-No permite eliminar una centro si existen movimientos asociados a un Especiales NIIF

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Centros".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.02.1
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos TÃ©cnicos de Driver Producto

**Descripcion:** Validar que no se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gastos TÃ©cnicos de Driver Producto

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- No permite eliminar una registro si existen movimientos asociados a un MÃ©todo Producto

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.02.2
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos TÃ©cnicos de Drive Subcanal

**Descripcion:** Validar que no se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gastos TÃ©cnicos de Drive Subcanal

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- No permite eliminar una registro si existen movimientos asociados a un MÃ©todo Subcanal

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Drive Subcanal".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.02.3
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos TÃ©cnicos de Unidad de Cuenta GT

**Descripcion:** Validar que no se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gastos TÃ©cnicos de Unidad de Cuenta GT

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.02.4
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos TÃ©cnicos de Maestro de Negocios y Embebidos

**Descripcion:** Validar que no se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gastos TÃ©cnicos de Maestro de Negocios y Embebidos

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.
4. 4- si el mismo estÃ¡ siendo usado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > " Maestro de Negocios y Embebidos".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.03.1
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos TÃ©cnicos de MÃ©todo Subcanal

**Descripcion:** Validar que no se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gastos TÃ©cnicos de MÃ©todo Subcanal

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > " MÃ©todo Subcanal".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.03.2
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos TÃ©cnicos de MetodoProducto

**Descripcion:** Validar que no se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gastos TÃ©cnicos de MetodoProducto

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > " MetodoProducto".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

### Caso de prueba: E37-GT-02.03.3
- Implementado: No

**Titulo:** Validar que no se pueda eliminar un nuevo registro porque no cumplen con las reglas definidas de negocio en el  flujo de Gastos TÃ©cnicos de Especiales NIIF

**Descripcion:** Validar que no se puede eliminar un registro desde el menÃº de acciones en el  flujo de Gastos TÃ©cnicos de Especiales NIIF

**Precondiciones:**
1. 1- El registro debe haber sido creado correctamente
2. 2- el usuario debe tener rol de Administrador de Gastos
3. 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > " Especiales NIIF".
3. 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero
4. 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?".
5. 5.  El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado

1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: E56-GT-PAG
**Descripcion:** Validar el funcionamiento integral de paginador en el  flujo de  Gastos TÃ©cnicos

### Caso de prueba: E56-GT-PAG
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de los elementos de paginador en el flujo de  Gastos TÃ©cnicos

**Descripcion:** Validar que  los elementos de paginador funcionen correctamente en el  flujo de  Gastos TÃ©cnicos

**Precondiciones:**
1. 1- Si la vista seleccionada de flujo de Gastos TÃ©cnicos tiene data cargada.
2. 2- Al acceder inicialmente, estÃ© sombreada la pÃ¡gina 1 y bloquaedos los botones ''pÃ¡gina anterior'' y ''primera pÃ¡gina''
3. 3- Tenga seleccionada una opciÃ³n por defecto (5) en el selector de filas por vista.
4. 4- Si no hay data cargada, todos los elementos de paginador deben estar bloqueado.

**Datos:**
- Data para definida para ParametrizaciÃ³n, Aprovisionamiento, y asignaciones de el flujo de  Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario accede a los botones de paginador de la vista en la que se encuentra.
3. 3. selecciona la opciÃ³n de filas a mostrar por vista.
4. 4. El usuario accede a los botones

**Resultado esperado:**
El sistema pÃ¡gina correctamente

1- El selector de filas por vista da la opciÃ³n de seleccionar.
2- Las filas mostradas en el front corresponden con la opciÃ³n mostrada de 5, 10 o 20.
3- Se muestre la cantidad de pÃ¡ginas con respecto a la cantidad de elementos a mostrar.
4- al encontrarse en la primera pÃ¡gina, los botones de ''pÃ¡gina anterior'' y ''primera pÃ¡gina'' deben estar bloqueados.
5- al encontrarse en la Ãºltima pÃ¡gina los botones de ''siguiente pÃ¡gina'' y ''Ãºltima pÃ¡gina'' deben estar bloqueados.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E60-GT-01.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - DescripciÃ³n
- - Concepto N1
- - Concepto N2
- - Concepto N3
- - CÃ³digo Ramo
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Tipo NIIF 17 CBR
- - Modificado
- 
- Columna definidas opcionales.
- - Concepto
- - Tipo de cuenta

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla Centros de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Centros definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n.

**Datos:**
- Columna definidas Por defecto.
- -Negocio
- - Centro de Costo
- - Nombre Centro de costo
- - Nombre LÃ­nea
- - Nombre producto
- - Nombre canal
- - Nombre subcanal
- - Tipo
- - CÃ³digo Producto
- - Modificado
- 
- Columna definidas opcionales.
- - CÃ³digo lÃ­nea
- - CÃ³digo canal
- - CÃ³digo subcanal
- - Estado CECO
- - Tipo emisiÃ³n
- - Tipo negocio
- - Tipo producto

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla Exactus Sin Procesar de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - DescripciÃ³n
- - Asiento
- - DÃ©bito Local
- - CrÃ©dito Local
- - Centro Costo
- - DescripciÃ³n Centro Costo
- - Tipo de Asiento
- - RazÃ³n Social
- - Segmento
- - Canal DistribuciÃ³n
- - Tipo TransacciÃ³n
- 
- 
- Columna definidas opcionales.
- - Origen
- - Tipo de Documento
- - Documento
- - Referencia
- - DÃ©bito DÃ³lar
- - CrÃ©dito DÃ³lar
- - Fecha
- - NIT
- - Fuente
- - Notas
- - Fecha/Hora CreaciÃ³n
- - Flujo Efectivo
- - Patrimonio Neto
- - Partida
- - Broker
- - Canal Alt.
- - Cliente
- - PÃ³liza
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
- - Fecha Inicio Vigencia PÃ³liza
- - Fecha Fin Vigencia PÃ³liza

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla Exactus Procesado de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..

**Datos:**
- Columna definidas Por defecto.
- - Negocio
- - InformaciÃ³n
- - Contabilidad
- - CÃ³digo LÃ­nea
- - Ramo
- - Ramo Directo
- - Riesgo Contable
- - Rubro
- - CÃ³digo Grupo Prod
- - CÃ³digo producto
- - CÃ³digo canal
- - Canal DistribuciÃ³n
- - Grupo canales
- - Grupo comercial
- 
- 
- Columna definidas opcionales.
- - Cod subcanal
- - Cod Agente
- - Agente
- - CÃ³digo CAV
- - CAV
- - CÃ³digo SEG
- - CÃ³digo REG
- - SEG REG
- - CÃ³digo Centro
- - CÃ³digo Concepto
- - CÃ³digo C.Contable
- - CÃ³digo de moneda
- - Monto DÃ³lares
- - Monto Soles
- - Indice
- - Proceso
- - Fuente
- - NÃºmero de PÃ³liza
- - Tipo PÃ³liza
- - Nivel estandar
- - Tipo negocio
- - Gestor
- - Tipo documento
- - NÃºmero de documneto
- - Proveedor
- - Referencia
- - Partida
- - CÃ³digo Faro
- - Fuente 2
- - Tipo de asiento
- - Estatus
- - MÃ©todo DistribuciÃ³n
- - MÃ©todo SC
- - Tipo dÃ­a
- - NIT
- - RazÃ³n Social
- - Nombre LÃ­nea
- - Nombre Subcanal
- - DescripciÃ³n Reg.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario selecciona el botÃ³n "Exactus procesado" >
4. 4.El usuario presiona el botÃ³n ''Ver"
5. 5. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. 6. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. 7. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.2.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla Driver Producto de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Driver Producto definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo MÃ©todo
- - DescripciÃ³n MÃ©todo
- - CÃ³digo producto
- - Nombre producto
- - CÃ³digo lÃ­nea
- - LÃ­nea
- - Factor
- 
- Columna definidas opcionales.
- - CÃ³digo producto destino

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.2.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla Driver Subcanal de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Driver Subcanal definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo mÃ©todo
- - CÃ³digo canal
- - Nombre canal
- - CÃ³digo subcanal
- - Nombre Subcanal
- - Factor
- 
- Columna definidas opcionales.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.3.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla MÃ©todo Subcanal de flujo de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Driver MÃ©todo Subcanal definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo concepto
- - CÃ³digo ramo
- - CÃ³digo LÃ­nea
- -  Nombre LÃ­nea
- - CÃ³digo producto
- - Nombre producto
- - CÃ³digo canal
- - CÃ³digo mÃ©todo
- 
- Columna definidas opcionales.
- - Se muestran todos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.3.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla MÃ©todo Producto de flujo de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo MÃ©todo Producto definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo Concepto
- - CÃ³digo Ramo
- - CÃ³digo LÃ­nea
- - Nombre LÃ­nea
- 
- Columna definidas opcionales.
- - CÃ³digo Canal
- - CÃ³digo MÃ©todo

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Producto".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-01.3.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla Especiales NIIF de flujo de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Especiales NIIF definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..

**Datos:**
- Columna definidas Por defecto.
- 
- - Nombre Producto
- - Nombre Subcanal
- - Tipo DistribuciÃ³n
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Concepto N1
- - Concepto N2
- - CECO
- 
- 
- Columna definidas opcionales.
- - CÃ³digo Producto
- - CÃ³digo Subcanal
- - MÃ©todo ValoraciÃ³n
- - Porcentaje
- - CÃ³digo Concepto
- - CÃ³digo LÃ­nea
- - Nombre LÃ­nea
- - CÃ³digo Canal
- - Nombre Canal
- - DÃ­gito Cuenta
- - Modificado

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

### Caso de prueba: E60-GT-02.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Cuentas Contables que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - DescripciÃ³n
- - Concepto N1
- - Concepto N2
- - Concepto N3
- - CÃ³digo Ramo
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Tipo NIIF 17 CBR
- - Modificado
- 
- Columna definidas opcionales.
- - Concepto
- - Tipo de cuenta

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Centros de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Centros que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Centros definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- -Negocio
- - Centro de Costo
- - Nombre Centro de costo
- - Nombre LÃ­nea
- - Nombre producto
- - Nombre canal
- - Nombre subcanal
- - Tipo
- - CÃ³digo Producto
- - Modificado
- 
- Columna definidas opcionales.
- - CÃ³digo lÃ­nea
- - CÃ³digo canal
- - CÃ³digo subcanal
- - Estado CECO
- - Tipo emisiÃ³n
- - Tipo negocio
- - Tipo producto

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros ".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Exactus sin procesar de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Exactus sin procesar que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Exactus sin procesar definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - DescripciÃ³n
- - Asiento
- - DÃ©bito Local
- - CrÃ©dito Local
- - Centro Costo
- - DescripciÃ³n Centro Costo
- - Tipo de Asiento
- - RazÃ³n Social
- - Segmento
- - Canal DistribuciÃ³n
- - Tipo TransacciÃ³n
- 
- 
- Columna definidas opcionales.
- - Origen
- - Tipo de Documento
- - Documento
- - Referencia
- - DÃ©bito DÃ³lar
- - CrÃ©dito DÃ³lar
- - Fecha
- - NIT
- - Fuente
- - Notas
- - Fecha/Hora CreaciÃ³n
- - Flujo Efectivo
- - Patrimonio Neto
- - Partida
- - Broker
- - Canal Alt.
- - Cliente
- - PÃ³liza
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
- - Fecha Inicio Vigencia PÃ³liza
- - Fecha Fin Vigencia PÃ³liza

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Exactus Procesado de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Exactus procesado que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Exactus Procesado definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - Negocio
- - InformaciÃ³n
- - Contabilidad
- - CÃ³digo LÃ­nea
- - Ramo
- - Ramo Directo
- - Riesgo Contable
- - Rubro
- - CÃ³digo Grupo Prod
- - CÃ³digo producto
- - CÃ³digo canal
- - Canal DistribuciÃ³n
- - Grupo canales
- - Grupo comercial
- 
- 
- Columna definidas opcionales.
- - Cod subcanal
- - Cod Agente
- - Agente
- - CÃ³digo CAV
- - CAV
- - CÃ³digo SEG
- - CÃ³digo REG
- - SEG REG
- - CÃ³digo Centro
- - CÃ³digo Concepto
- - CÃ³digo C.Contable
- - CÃ³digo de moneda
- - Monto DÃ³lares
- - Monto Soles
- - Indice
- - Proceso
- - Fuente
- - NÃºmero de PÃ³liza
- - Tipo PÃ³liza
- - Nivel estandar
- - Tipo negocio
- - Gestor
- - Tipo documento
- - NÃºmero de documneto
- - Proveedor
- - Referencia
- - Partida
- - CÃ³digo Faro
- - Fuente 2
- - Tipo de asiento
- - Estatus
- - MÃ©todo DistribuciÃ³n
- - MÃ©todo SC
- - Tipo dÃ­a
- - NIT
- - RazÃ³n Social
- - Nombre LÃ­nea
- - Nombre Subcanal
- - DescripciÃ³n Reg.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botÃ³n ''Exactus procesado"
4. 4. El usuario presiona el botÃ³n ''Ver"
5. 5. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. 6. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. 7. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.2.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Driver Producto de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Driver Producto que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Driver Producto definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo MÃ©todo
- - DescripciÃ³n MÃ©todo
- - CÃ³digo producto
- - Nombre producto
- - CÃ³digo lÃ­nea
- - LÃ­nea
- - Factor
- 
- Columna definidas opcionales.
- - CÃ³digo producto destino

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.2.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Driver Subcanal de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Driver Subcanal que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Driver Subcanal definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo mÃ©todo
- - CÃ³digo canal
- - Nombre canal
- - CÃ³digo subcanal
- - Nombre Subcanal
- - Factor
- 
- Columna definidas opcionales.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.3.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de MÃ©todo Subcanal de flujo de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla MÃ©todo Subcanal que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo MÃ©todo Subcanal definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo concepto
- - CÃ³digo ramo
- - CÃ³digo LÃ­nea
- -  Nombre LÃ­nea
- - CÃ³digo producto
- - Nombre producto
- - CÃ³digo canal
- - CÃ³digo mÃ©todo
- 
- Columna definidas opcionales.
- - Se muestran todos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.3.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de MÃ©todo Producto de flujo de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla MÃ©todo Producto que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo MÃ©todo Producto definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo Concepto
- - CÃ³digo Ramo
- - CÃ³digo LÃ­nea
- - Nombre LÃ­nea
- 
- Columna definidas opcionales.
- - CÃ³digo Canal
- - CÃ³digo MÃ©todo

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Producto".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-02.3.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Especiales NIIF de flujo de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de buscador de componente de la Pantalla Especiales NIIF que desea mostrar en el frontend.

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Especiales NIIF definido para el motor.

**Datos:**
- Columna definidas Por defecto.
- 
- - Nombre Producto
- - Nombre Subcanal
- - Tipo DistribuciÃ³n
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Concepto N1
- - Concepto N2
- - CECO
- 
- 
- Columna definidas opcionales.
- - CÃ³digo Producto
- - CÃ³digo Subcanal
- - MÃ©todo ValoraciÃ³n
- - Porcentaje
- - CÃ³digo Concepto
- - CÃ³digo LÃ­nea
- - Nombre LÃ­nea
- - CÃ³digo Canal
- - Nombre Canal
- - DÃ­gito Cuenta
- - Modificado

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

### Caso de prueba: E60-GT-03.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - DescripciÃ³n
- - Concepto N1
- - Concepto N2
- - Concepto N3
- - CÃ³digo Ramo
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Tipo NIIF 17 CBR
- - Modificado
- 
- Columna definidas opcionales.
- - Concepto
- - Tipo de cuenta

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de Centros de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de Centros de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Centros definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- -Negocio
- - Centro de Costo
- - Nombre Centro de costo
- - Nombre LÃ­nea
- - Nombre producto
- - Nombre canal
- - Nombre subcanal
- - Tipo
- - CÃ³digo Producto
- - Modificado
- 
- Columna definidas opcionales.
- - CÃ³digo lÃ­nea
- - CÃ³digo canal
- - CÃ³digo subcanal
- - Estado CECO
- - Tipo emisiÃ³n
- - Tipo negocio
- - Tipo producto

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de Exactus sin procesar de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de Exactus sin procesar de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Exactus sin procesar definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - DescripciÃ³n
- - Asiento
- - DÃ©bito Local
- - CrÃ©dito Local
- - Centro Costo
- - DescripciÃ³n Centro Costo
- - RazÃ³n Social
- - Segmento
- - Canal DistribuciÃ³n
- - Tipo TransacciÃ³n
- 
- 
- Columna definidas opcionales.
- - Origen
- - Tipo de Documento
- - Documento
- - Referencia
- - DÃ©bito DÃ³lar
- - CrÃ©dito DÃ³lar
- - Fecha
- - NIT
- - Fuente
- - Notas
- - Fecha/Hora CreaciÃ³n
- - Flujo Efectivo
- - Patrimonio Neto
- - Partida
- - Broker
- - Canal Alt.
- - Cliente
- - PÃ³liza
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
- - Fecha Inicio Vigencia PÃ³liza
- - Fecha Fin Vigencia PÃ³liza

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de Exactus procesado de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de Exactus procesado de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Exactus procesado definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - Negocio
- - InformaciÃ³n
- - Contabilidad
- - CÃ³digo LÃ­nea
- - Ramo
- - Ramo Directo
- - Riesgo Contable
- - Rubro
- - CÃ³digo Grupo Prod
- - CÃ³digo producto
- - CÃ³digo canal
- - Canal DistribuciÃ³n
- - Grupo canales
- - Grupo comercial
- 
- 
- Columna definidas opcionales.
- - Cod subcanal
- - Cod Agente
- - Agente
- - CÃ³digo CAV
- - CAV
- - CÃ³digo SEG
- - CÃ³digo REG
- - SEG REG
- - CÃ³digo Centro
- - CÃ³digo Concepto
- - CÃ³digo C.Contable
- - CÃ³digo de moneda
- - Monto DÃ³lares
- - Monto Soles
- - Indice
- - Proceso
- - Fuente
- - NÃºmero de PÃ³liza
- - Tipo PÃ³liza
- - Nivel estandar
- - Tipo negocio
- - Gestor
- - Tipo documento
- - NÃºmero de documneto
- - Proveedor
- - Referencia
- - Partida
- - CÃ³digo Faro
- - Fuente 2
- - Tipo de asiento
- - Estatus
- - MÃ©todo DistribuciÃ³n
- - MÃ©todo SC
- - Tipo dÃ­a
- - NIT
- - RazÃ³n Social
- - Nombre LÃ­nea
- - Nombre Subcanal
- - DescripciÃ³n Reg.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. 3. El usuario presiona el botÃ³n ''Exactus procesado"
4. 4. El usuario presiona el botÃ³n ''Ver"
5. 5. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.2.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de Driver Producto de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de Driver Producto procesado de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de  Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Driver Producto definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo MÃ©todo
- - DescripciÃ³n MÃ©todo
- - CÃ³digo producto
- - Nombre producto
- - CÃ³digo lÃ­nea
- - LÃ­nea
- - Factor
- 
- Columna definidas opcionales.
- - CÃ³digo producto destino

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Producto".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.2.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de Driver Subcanal de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de Driver Subcanal procesado de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Administrador de Gastos o Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Driver Subcanal definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo mÃ©todo
- - CÃ³digo canal
- - Nombre canal
- - CÃ³digo subcanal
- - Nombre Subcanal
- - Factor
- 
- Columna definidas opcionales.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.3.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de MÃ©todo Subcanal de flujo de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de MÃ©todo Subcanal de flujo de Asignaciones de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Administrador de Gastos o Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo MÃ©todo Subcanal definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo concepto
- - CÃ³digo ramo
- - CÃ³digo LÃ­nea
- -  Nombre LÃ­nea
- - CÃ³digo producto
- - Nombre producto
- - CÃ³digo canal
- - CÃ³digo mÃ©todo
- 
- Columna definidas opcionales.
- - Se muestran todos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones " > "MÃ©todo Subcanal".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.3.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de MÃ©todo Producto de flujo de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de MÃ©todo Producto de flujo de Asignaciones de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Administrador de Gastos o Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo MÃ©todo Producto definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo Concepto
- - CÃ³digo Ramo
- - CÃ³digo LÃ­nea
- - Nombre LÃ­nea
- 
- Columna definidas opcionales.
- - CÃ³digo Canal
- - CÃ³digo MÃ©todo

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones " > "MÃ©todo Producto".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-03.3.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de Especiales NIIF de flujo de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de Especiales NIIF de flujo de Asignaciones de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Administrador de Gastos o Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Especiales NIIF definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.

**Datos:**
- Columna definidas Por defecto.
- 
- - Nombre Producto
- - Nombre Subcanal
- - Tipo DistribuciÃ³n
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Concepto N1
- - Concepto N2
- - CECO
- 
- 
- Columna definidas opcionales.
- - CÃ³digo Producto
- - CÃ³digo Subcanal
- - MÃ©todo ValoraciÃ³n
- - Porcentaje
- - CÃ³digo Concepto
- - CÃ³digo LÃ­nea
- - Nombre LÃ­nea
- - CÃ³digo Canal
- - Nombre Canal
- - DÃ­gito Cuenta
- - Modificado

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones " > "Especiales NIIF".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

### Caso de prueba: E60-GT-04.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - DescripciÃ³n
- - Concepto N1
- - Concepto N2
- - Concepto N3
- - CÃ³digo Ramo
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Tipo NIIF 17 CBR
- - Modificado
- 
- Columna definidas opcionales.
- - Concepto
- - Tipo de cuenta

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de Centros de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Centros definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- -Negocio
- - Centro de Costo
- - Nombre Centro de costo
- - Nombre LÃ­nea
- - Nombre producto
- - Nombre canal
- - Nombre subcanal
- - Tipo
- - CÃ³digo Producto
- - Modificado
- 
- Columna definidas opcionales.
- - CÃ³digo lÃ­nea
- - CÃ³digo canal
- - CÃ³digo subcanal
- - Estado CECO
- - Tipo emisiÃ³n
- - Tipo negocio
- - Tipo producto

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de Exactus sin procesar de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de Exactus sin procesar de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Administrador de Gastos o Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Exactus sin porcesa definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - Cuenta Contable
- - DescripciÃ³n
- - Asiento
- - DÃ©bito Local
- - CrÃ©dito Local
- - Centro Costo
- - DescripciÃ³n Centro Costo
- - Tipo de Asiento
- - RazÃ³n Social
- - Segmento
- - Canal DistribuciÃ³n
- - Tipo TransacciÃ³n
- 
- 
- Columna definidas opcionales.
- - Origen
- - Tipo de Documento
- - Documento
- - Referencia
- - DÃ©bito DÃ³lar
- - CrÃ©dito DÃ³lar
- - Fecha
- - NIT
- - Fuente
- - Notas
- - Fecha/Hora CreaciÃ³n
- - Flujo Efectivo
- - Patrimonio Neto
- - Partida
- - Broker
- - Canal Alt.
- - Cliente
- - PÃ³liza
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
- - Fecha Inicio Vigencia PÃ³liza
- - Fecha Fin Vigencia PÃ³liza

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus sin procesar".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de Exactus procesado de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de Exactus procesado de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Exactus procesado definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
5. 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - Negocio
- - InformaciÃ³n
- - Contabilidad
- - CÃ³digo LÃ­nea
- - Ramo
- - Ramo Directo
- - Riesgo Contable
- - Rubro
- - CÃ³digo Grupo Prod
- - CÃ³digo producto
- - CÃ³digo canal
- - Canal DistribuciÃ³n
- - Grupo canales
- - Grupo comercial
- 
- 
- Columna definidas opcionales.
- - Cod subcanal
- - Cod Agente
- - Agente
- - CÃ³digo CAV
- - CAV
- - CÃ³digo SEG
- - CÃ³digo REG
- - SEG REG
- - CÃ³digo Centro
- - CÃ³digo Concepto
- - CÃ³digo C.Contable
- - CÃ³digo de moneda
- - Monto DÃ³lares
- - Monto Soles
- - Indice
- - Proceso
- - Fuente
- - NÃºmero de PÃ³liza
- - Tipo PÃ³liza
- - Nivel estandar
- - Tipo negocio
- - Gestor
- - Tipo documento
- - NÃºmero de documneto
- - Proveedor
- - Referencia
- - Partida
- - CÃ³digo Faro
- - Fuente 2
- - Tipo de asiento
- - Estatus
- - MÃ©todo DistribuciÃ³n
- - MÃ©todo SC
- - Tipo dÃ­a
- - NIT
- - RazÃ³n Social
- - Nombre LÃ­nea
- - Nombre Subcanal
- - DescripciÃ³n Reg.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus porcesa".
3. 3. El usuario presiona el botÃ³n ''Exactus procesado"
4. 4. El usuario presiona el botÃ³n ''Ver"
5. 5. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
6. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
7. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.2.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de Driver Producto de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de Driver Producto sin procesar de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Driver Producto definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo MÃ©todo
- - DescripciÃ³n MÃ©todo
- - CÃ³digo producto
- - Nombre producto
- - CÃ³digo lÃ­nea
- - LÃ­nea
- - Factor
- 
- Columna definidas opcionales.
- - CÃ³digo producto destino

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "Driver Producto".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.2.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de Driver Subcanal de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de Driver Subcanal sin procesar de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Driver Subcanal definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- OpciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo mÃ©todo
- - CÃ³digo canal
- - Nombre canal
- - CÃ³digo subcanal
- - Nombre Subcanal
- - Factor
- 
- Columna definidas opcionales.

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "Driver Sudcanal".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.3.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de MÃ©todo Subcanal de flujo de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de MÃ©todo Subcanal sin procesar de flujo de Asignaciones de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo MÃ©todo Subcanal definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- OpciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo concepto
- - CÃ³digo ramo
- - CÃ³digo LÃ­nea
- -  Nombre LÃ­nea
- - CÃ³digo producto
- - Nombre producto
- - CÃ³digo canal
- - CÃ³digo mÃ©todo
- 
- Columna definidas opcionales.
- - Se muestran todos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Sudcanal".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.3.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de Driver Producto de flujo de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de Driver Producto sin procesar de flujo de Asignaciones de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo MÃ©todo Producto definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- OpciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- - CÃ³digo Concepto
- - CÃ³digo Ramo
- - CÃ³digo LÃ­nea
- - Nombre LÃ­nea
- 
- Columna definidas opcionales.
- - CÃ³digo Canal
- - CÃ³digo MÃ©todo

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Producto".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

### Caso de prueba: E60-GT-04.3.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de Especiales NIIF de flujo de Asignaciones de Gastos TÃ©cnicos

**Descripcion:** Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de Especiales NIIF sin procesar de flujo de Asignaciones de Gastos TÃ©cnicos

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
2. 2- estÃ¡n configurados los nombre de las columnas de archivo Especiales NIIF definido para el motor.
3. 3- las columnas por defecto siempre se mostrarÃ¡n..
4. 4- OpciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
- Columna definidas Por defecto.
- 
- - Nombre Producto
- - Nombre Subcanal
- - Tipo DistribuciÃ³n
- - NIIF 17 Atribuible
- - NIIF 17 Tipo
- - Concepto N1
- - Concepto N2
- - CECO
- 
- 
- Columna definidas opcionales.
- - CÃ³digo Producto
- - CÃ³digo Subcanal
- - MÃ©todo ValoraciÃ³n
- - Porcentaje
- - CÃ³digo Concepto
- - CÃ³digo LÃ­nea
- - Nombre LÃ­nea
- - CÃ³digo Canal
- - Nombre Canal
- - DÃ­gito Cuenta
- - Modificado

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. 3. El usuario presiona el botÃ³n ''Ver"
4. 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar.
6. 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front Solo las columnas de archivo definidas Por defecto.

---

## Escenario: E63-GT-BUS
**Descripcion:** Validar el funcionamiento integral de buscador en el sistema en el  flujo de  Gastos TÃ©cnicos

### Caso de prueba: E63-GT-BUS
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador en el flujo de Gastos TÃ©cnicos

**Descripcion:** Validar que el buscador filtra, encuentra y maneja los datos correctamente segÃºn los diferentes criterios de entrada en todas sus vistas

**Precondiciones:**
1. 1- El usuario debe tener rol de Gestor de Gastos.
2. 2- Todos los filtos deben estar activos.

**Datos:**
- Datos de los registros almacenados y elementos para uso de prueba (NÃºmeros, Letras, carÃ¡cteres especiales o combinaciones)

**Pasos:**
1. 1. El usuario Gestor de Gastos. accede a la pÃ¡gina de inicio ''DistribuciÃ³n''.
2. 2. El usuario accede a los filtros de bÃºsqueda general (buscar) o especificos (CÃ³digo, Nombre, Unidad de Cuenta, etc)

**Resultado esperado:**
El sistema devuelve los resultados esperados y debe comportarse como se describe.

1- El resultado corresponde con a la columna correcta.
2- La bÃºsqueda en el filtro general devuelve todos los elementos encontrados a partir de los criterios de entrada.
3- A partir de tercer caracter brinda la opciÃ³n de completamiento.

---

## Escenario: Validar la correcta ejecuciÃ³n de botÃ³n ''Borrar VersiÃ³n'' de la pantalla Exactus de Gastos TÃ©cnicos.
**Descripcion:** Sin descripcion disponible

### Caso de prueba: E68-GT-01
- Implementado: No

**Titulo:** Validar la correcta ejecuciÃ³n de botÃ³n ''Borrar VersiÃ³n'' de la pantalla Exactus de Gastos TÃ©cnicos.

**Descripcion:** Validar la correcta ejecuciÃ³n de botÃ³n ''Borrar VersiÃ³n'' de la pantalla Exactus de Gastos TÃ©cnicos.

**Precondiciones:**
1. 1- El usuario registrado tenga el rol de Gestor  de Gastos TÃ©cnicos.
2. 2- El botÃ³n Borrar VersiÃ³n estÃ© funcional.
3. 3- Debe existir un archivo Exactus cargado anteriormente.

**Datos:**
- Archivo ''REAL Exactus sin procesar GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. 1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. 2.  El usuario selecciona de menÃº lateral "Aprovisionamiento"  > " Exactus".
3. 3. El usuario presiona botÃ³n ''Borrar VersiÃ³n''.
4. 4. Se levanta un modal con la advertencia Se eliminarÃ¡n todos los datos asociados al archivo Exactus cargados. Â¿Desea continuar?

**Resultado esperado:**
La data de Exactus ha sido borrada satisfactoriamente. Se muestra el mensaje  Â¡Listo! La data ha sido borrada. 

Se debe validar que en el front no se muestre data.

---


---

# Casos adicionales desde Excel - Procesos GT y Presupuesto GT
---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-EC-01.01
- Implementado: No

**Titulo:** Procesamiento de la Fase Inicial DistribuciÃ³n preliminar de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Descripcion:**
Validar el procesamiento de la Fase Inicial: DistribuciÃ³n preliminar (Oracle) de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n completo
se debe haber cargado el exactus sin procesar

**Precondiciones:**
Debe estar cargado el archivo de Exactus sin procesar

**Datos:**
- No especificado en Excel

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y DescripciÃ³n RegiÃ³n
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase inicial.

**Resultado esperado:**
La Fase Inicial de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo se ejecutÃ³ satisfactoriamente
el porcetanje de ejecucion estÃ¡ al 100%

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-EC-01.02
- Implementado: No

**Titulo:** Procesamiento de la Fase 1 ObtenciÃ³n de LÃ­neas, Grupo Productos y Canales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Descripcion:**
Validar el procesamiento de la Fase 1: ObtenciÃ³n de LÃ­neas, Grupo Productos y Canales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n completo

**Precondiciones:**
1-Que estÃ¡n cargados los Archivos comunes
2-Que estÃ© concluida la fase inicial
3-Se debe habilitar solamente despuÃ©s de que la fase anterior se haya completado

**Datos:**
Data resultado de la fase Inicial en el modo de ejecuciÃ³n Completo

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y DescripciÃ³n RegiÃ³n
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 1

**Resultado esperado:**
La Fase 1 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo se ejecutÃ³ satisfactoriamente
el porcetanje de ejecucion estÃ¡ al 100%

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-EC-01.03
- Implementado: No

**Titulo:** Procesamiento de la Fase 2: ObtenciÃ³n de canales/subcanales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Descripcion:**
Validar el procesamiento de la Fase 2: Obtencion de Subcanales + Distribucion CECOs Vida de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n completo

**Precondiciones:**
1-Que estÃ¡n cargados los archivos de Drivers Subcanal y mÃ©todo subcanal
2- Ejecutada la Fase 1 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo

**Datos:**
Data resultado de la fase 1 en el modo de ejecuciÃ³n Completo

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y DescripciÃ³n RegiÃ³n
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 2.

**Resultado esperado:**
La Fase 2 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo se ejecutÃ³ satisfactoriamente
el porcetanje de ejecucion estÃ¡ al 100%

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-EC-01.04
- Implementado: No

**Titulo:** Procesamiento de la Fase 3: Distribuir Objetos de Costos a Unidades de Cuentas de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Descripcion:**
Validar el procesamiento de la Fase 3: Distribuir Objetos de Costos a Unidades de Cuentas de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n completo

**Precondiciones:**
Ejecutada la Fase 2 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo
el check de la fase 3 activo

**Datos:**
Data resultado de la fase 2 en el modo de ejecuciÃ³n Completo

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 3.

**Resultado esperado:**
La Fase 3 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo se ejecutÃ³ satisfactoriamente
el porcetanje de ejecucion estÃ¡ al 100%

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-EC-01.05
- Implementado: No

**Titulo:** Procesamiento de Cerrar proceso de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Descripcion:**
Validar el procesamiento de Cerrar proceso de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Precondiciones:**
Ejecutadas las Fases 1,2 y 3 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo

**Datos:**
Data resultado de la fase 3 en el modo de ejecuciÃ³n Completo

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario verifica la ejecuciÃ³n de todas las fases.
5. El usuario presiona el botÃ³n "Cerrar proceso" y acepta el la pregunta de verificaciÃ³n.

**Resultado esperado:**
El cierre de proceso de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo es ejecutado satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-EC-02.01
- Implementado: No

**Titulo:** Procesamiento de la Fase Inicial DistribuciÃ³n preliminar de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Descripcion:**
Validar el procesamiento de la Fase Inicial: DistribuciÃ³n preliminar (Oracle) de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n completo

**Precondiciones:**
Debe estar cargado el archivo de Exactus sin procesar

**Datos:**
- No especificado en Excel

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y DescripciÃ³n RegiÃ³n
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase inicial.

**Resultado esperado:**
La Fase Inicial de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo se ejecutÃ³ satisfactoriamente
el porcetanje de ejecucion estÃ¡ al 100%

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-EC-02.02
- Implementado: No

**Titulo:** Procesamiento de la Fase 1  ObtenciÃ³n de  Productos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n completo

**Descripcion:**
Validar el procesamiento de la Fase 1: ObtenciÃ³n de  Productos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n completo

**Precondiciones:**
1-Que estÃ¡n cargados los Archivos comunes
2-Que estÃ© concluida la fase inicial
3-Se debe habilitar solamente despuÃ©s de que la fase anterior se haya completado

**Datos:**
Data resultado de la fase Inicial en el modo de ejecuciÃ³n Completo

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y DescripciÃ³n RegiÃ³n
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 1

**Resultado esperado:**
La Fase 1 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo se ejecutÃ³ satisfactoriamente
el porcetanje de ejecucion estÃ¡ al 100%

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-EC-02.03
- Implementado: No

**Titulo:** Procesamiento de la Fase 2: ObtenciÃ³n de canales/subcanales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Descripcion:**
Validar el procesamiento de la Fase 2: ObtenciÃ³n de canales/subcanales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n completo

**Precondiciones:**
1-Que estÃ¡n cargados los archivos de Drivers Subcanal y mÃ©todo subcanal
2- Ejecutada la Fase 1 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo

**Datos:**
Data resultado de la fase 1 en el modo de ejecuciÃ³n Completo

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y DescripciÃ³n RegiÃ³n
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 2.

**Resultado esperado:**
La Fase 2 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo se ejecutÃ³ satisfactoriamente
el porcetanje de ejecucion estÃ¡ al 100%

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-EC-02.04
- Implementado: No

**Titulo:** Procesamiento de Cerrar proceso de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Descripcion:**
Validar el procesamiento de Cerrar proceso de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Precondiciones:**
Ejecutadas las Fases inicial, 1 y 2, de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo
Sin check de la fase 3 activo

**Datos:**
Data resultado de la fase 2 en el modo de ejecuciÃ³n Completo

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario verifica la ejecuciÃ³n de todas las fases.
5. El usuario presiona el botÃ³n "Cerrar proceso" y acepta el la pregunta de verificaciÃ³n.

**Resultado esperado:**
El cierre de proceso de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo es ejecutado satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-ER-01.1
- Implementado: No

**Titulo:** Procesamiento de la Fase Inicial DistribuciÃ³n preliminar de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Descripcion:**
Validar el procesamiento de la Fase Inicial: DistribuciÃ³n preliminar (Oracle) de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Precondiciones:**
Debe estar cargado el archivo de Exactus

**Datos:**
- No especificado en Excel

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y DescripciÃ³n RegiÃ³n
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase inicial.

**Resultado esperado:**
La Fase Inicial de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido se ejecutÃ³ satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-ER-01.2
- Implementado: No

**Titulo:** Procesamiento de la Fase 1 ObtenciÃ³n de  Productos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Descripcion:**
Validar el procesamiento de la Fase 1: ObtenciÃ³n de  Productos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Precondiciones:**
1-Que estÃ¡n cargados los Archivos comunes
se debe haber cargado el exacto procesado

**Datos:**
Data resultado de la fase Inicial en el modo de ejecuciÃ³n Resumido

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y DescripciÃ³n RegiÃ³n
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 1

**Resultado esperado:**
La Fase 1 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido se ejecutÃ³ satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-ER-01.3
- Implementado: No

**Titulo:** Procesamiento de la Fase 2: ObtenciÃ³n de canales/subcanales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Descripcion:**
Validar el procesamiento de la Fase 2: ObtenciÃ³n de canales/subcanales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Precondiciones:**
1-Que estÃ¡n cargados los archivos de Drivers Subcanal y mÃ©todo subcanal
2- Ejecutada la Fase 1 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido

**Datos:**
Data resultado de la fase 1 en el modo de ejecuciÃ³n Resumido

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 2.

**Resultado esperado:**
La Fase 2 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido se ejecutÃ³ satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-ER-01.4
- Implementado: No

**Titulo:** Procesamiento de la Fase 3: Distribuir Objetos de Costos a Unidades de Cuentas de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Descripcion:**
Validar el procesamiento de la Fase 3: Distribuir Objetos de Costos a Unidades de Cuentas de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Precondiciones:**
Ejecutada la Fase 2 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido
 check de la fase 3 activo

**Datos:**
Data resultado de la fase 2 en el modo de ejecuciÃ³n Resumido

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 3.

**Resultado esperado:**
La Fase 3 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido se ejecutÃ³ satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-ER-01.5
- Implementado: No

**Titulo:** Procesamiento de Cerrar proceso de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Descripcion:**
Validar el procesamiento de Cerrar proceso de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Precondiciones:**
Ejecutadas las Fases 1,2 y 3 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido

**Datos:**
Data resultado de la fase 3 en el modo de ejecuciÃ³n Resumido

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario verifica la ejecuciÃ³n de todas las fases.
5. El usuario presiona el botÃ³n "Cerrar proceso" y acepta el la pregunta de verificaciÃ³n.

**Resultado esperado:**
El cierre de proceso de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido es ejecutado satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-ER-02.1
- Implementado: No

**Titulo:** Procesamiento de la Fase Inicial DistribuciÃ³n preliminar de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Descripcion:**
Validar el procesamiento de la Fase Inicial: DistribuciÃ³n preliminar (Oracle) de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n resumido

**Precondiciones:**
Debe estar cargado el archivo de Exactus

**Datos:**
- No especificado en Excel

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y DescripciÃ³n RegiÃ³n
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase inicial.

**Resultado esperado:**
La Fase Inicial de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido se ejecutÃ³ satisfactoriamente
el porcentaje de ejecuciÃ³n estÃ¡ al 100%

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-ER-02.2
- Implementado: No

**Titulo:** Procesamiento de la Fase 1  ObtenciÃ³n de  Productos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Descripcion:**
Validar el procesamiento de la Fase 1:  ObtenciÃ³n de  Productos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n asumido

**Precondiciones:**
1-Que estÃ¡n cargados los Archivos comunes
2-Que estÃ© concluida la fase inicial

**Datos:**
Data resultado de la fase Inicial en el modo de ejecuciÃ³n Completo

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y DescripciÃ³n RegiÃ³n
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 1

**Resultado esperado:**
La Fase 1 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido se ejecutÃ³ satisfactoriamente
el porcentaje de ejecuciÃ³n estÃ¡ al 100%

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-ER-02.3
- Implementado: No

**Titulo:** Procesamiento de la Fase 2: ObtenciÃ³n de canales/subcanales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Descripcion:**
Validar el procesamiento de la Fase 2: ObtenciÃ³n de canales/subcanales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n resumido

**Precondiciones:**
1-Que estÃ¡n cargados los archivos de Drivers Subcanal y mÃ©todo subcanal
2- Ejecutada la Fase 1 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n resumido

**Datos:**
Data resultado de la fase 1 en el modo de ejecuciÃ³n Completo

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y DescripciÃ³n RegiÃ³n
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 2.

**Resultado esperado:**
La Fase 2 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido se ejecutÃ³ satisfactoriamente
el porcentaje de ejecuciÃ³n estÃ¡ al 100%

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido
**Fuente:** Procesos GT

### Caso de prueba: E47-GG-ER-02.4
- Implementado: No

**Titulo:** Procesamiento de Cerrar proceso de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Descripcion:**
Validar el procesamiento de Cerrar proceso de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n resumido

**Precondiciones:**
Ejecutadas las Fases inicial, 1 y 2, de Gastos TÃ©cnicos en el modo de ejecuciÃ³n resumido
Sin check de la fase 3 activo

**Datos:**
Data resultado de la fase 2 en el modo de ejecuciÃ³n Completo

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario verifica la ejecuciÃ³n de todas las fases.
5. El usuario presiona el botÃ³n "Cerrar proceso" y acepta el la pregunta de verificaciÃ³n.

**Resultado esperado:**
El cierre de proceso de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido es ejecutado satisfactoriamente

---

## Escenario: Permanencia de los montos durante el procesamiento por cada una de las Fases de Gastos TÃ©cnicos en el proceso de ejecuciÃ³n Completo
**Fuente:** Procesos GT

### Caso de prueba: E51-GT-EC
- Implementado: No

**Titulo:** Permanencia de monto durante el proceso Completo de Gastos TÃ©cnicos

**Descripcion:**
Validar la permanencia de monto durante la corrida de las fases y cierre de proceso Completo de Gastos TÃ©cnicos

**Precondiciones:**
- Completado el proceso Completo de Gastos TÃ©cnicos.

- El monto no debe variar al ejecutarse ninguna de las fases o el cierre.

**Datos:**
Montos resultados de la ejecuciÃ³n de cada fase corrida y cierre de proceso de Gastos TÃ©cnicos de modo Completo

**Pasos:**
1. El usuario accede a la vista ''Proceso'' de Gastos TÃ©cnicos.
2. El usuario verifica la ejecuciÃ³n de cada una de las fases y el cierre de modo Completo.

**Resultado esperado:**
Verificar la permanencia de monto de cada fase ejecutada y cierre.

---

## Escenario: Permanencia de los montos durante el procesamiento por cada una de las Fases de Gastos TÃ©cnicos en el proceso de ejecuciÃ³n Resumido
**Fuente:** Procesos GT

### Caso de prueba: E51-GT-ER
- Implementado: No

**Titulo:** Permanencia de monto durante el proceso Resumido de Gastos TÃ©cnicos

**Descripcion:**
Validar la permanencia de monto durante la corrida de las fases y cierre de proceso Resumido de Gastos TÃ©cnicos

**Precondiciones:**
- Completado el proceso Resumido de Gastos TÃ©cnicos.

- El monto no debe variar al ejecutarse ninguna de las fases o el cierre.

**Datos:**
Montos resultados de la ejecuciÃ³n de cada fase corrida y cierre de proceso de Gastos TÃ©cnicos de modo Resumido

**Pasos:**
1. El usuario accede a la vista ''Proceso'' de Gastos TÃ©cnicos.
2. El usuario verifica la ejecuciÃ³n de cada una de las fases y el cierre de modo Resumido.

**Resultado esperado:**
Verificar la permanencia de monto de cada fase ejecutada y cierre.

---

## Escenario: Validar la generaciÃ³n de archivo Cuadre de cuentas en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos en el proceso de ejecuciÃ³n Completo
**Fuente:** Procesos GT

### Caso de prueba: E52-GT-EC-01
- Implementado: No

**Titulo:** Archivo Cuadre de cuentas antes de cierre de proceso de Modo Completo de  Gastos TÃ©cnicos

**Descripcion:**
Obtener el archivo Cuadre de cuentas de Modo Completo de  Gastos TÃ©cnicos

**Precondiciones:**
BotÃ³n Cuadre de cuenta activo

**Datos:**
Data procesada durante las fases de procesos

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n "Cuadre de cuentas" y acepta la pregunta de verificaciÃ³n.

**Resultado esperado:**
Obtener el archivo Cuadre de cuentas de Modo Completo de  Gastos TÃ©cnicos, donde se muestran todas las fases y sus montos
columnas:
cuenta contable
monto exacto
monto fases (dependiendo de la fase que se ejecute)

---

## Escenario: Validar la generaciÃ³n de archivo Cuadre de cuentas en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos en el proceso de ejecuciÃ³n Completo
**Fuente:** Procesos GT

### Caso de prueba: E52-GT-EC-02
- Implementado: No

**Titulo:** Archivo Cuadre de cuentas despuÃ©s de cierre de proceso de Modo Completo de  Gastos TÃ©cnicos

**Descripcion:**
Obtener el archivo Cuadre de cuentas de Modo Completo de  Gastos TÃ©cnicos

**Precondiciones:**
BotÃ³n Cuadre de cuenta activo y cerrado el proceso

**Datos:**
Data procesada al cerrar proceso

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n "Cuadre de cuentas" y acepta la pregunta de verificaciÃ³n.

**Resultado esperado:**
Obtener el archivo Cuadre de cuentas de Modo Completo de  Gastos TÃ©cnicos, donde se muestran todas las fases y sus montos
cuenta contable
monto exacto
monto fases
monto resumen

---

## Escenario: Validar la generaciÃ³n de archivo Cuadre de cuentas en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos en el proceso de ejecuciÃ³n Resumido
**Fuente:** Procesos GT

### Caso de prueba: E52-GT-ER-01
- Implementado: No

**Titulo:** Archivo Cuadre de cuentas antes de cierre de proceso de Modo Resumido de  Gastos TÃ©cnicos

**Descripcion:**
Obtener el archivo Cuadre de cuentas de Modo Resumido de  Gastos TÃ©cnicos

**Precondiciones:**
BotÃ³n Cuadre de cuenta activo

**Datos:**
Data procesada durante las fases de procesos

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n "Cuadre de cuentas" y acepta la pregunta de verificaciÃ³n.

**Resultado esperado:**
Obtener el archivo Cuadre de cuentas de Modo Resumido de  Gastos TÃ©cnicos, donde se muestran todas las fases y sus montos
cuenta contable
monto exacto
monto fases

---

## Escenario: Validar la generaciÃ³n de archivo Cuadre de cuentas en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos en el proceso de ejecuciÃ³n Resumido
**Fuente:** Procesos GT

### Caso de prueba: E52-GT-ER-02
- Implementado: No

**Titulo:** Archivo Cuadre de cuentas despuÃ©s de cierre de proceso de Modo Resumido de  Gastos TÃ©cnicos

**Descripcion:**
Obtener el archivo Cuadre de cuentas de Modo Resumido de  Gastos TÃ©cnicos

**Precondiciones:**
BotÃ³n Cuadre de cuenta activo

**Datos:**
Data procesada al cerrar proceso

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n "Cuadre de cuentas" y acepta la pregunta de verificaciÃ³n.

**Resultado esperado:**
Obtener el archivo Cuadre de cuentas de Modo Resumido de  Gastos TÃ©cnicos, donde se muestran todas las fases y sus montos
cuenta contable
monto exacto
monto fases
monto resumen

---

## Escenario: Validar funcionalidad 'Ejecutar Todo' en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos Modo resumido
**Fuente:** Procesos GT

### Caso de prueba: E64-GT-ER-01-01
- Implementado: No

**Titulo:** EjecuciÃ³n de proceso hasta la fase 3 â€œDistribuir Objetos de Costo a Unidades de Cuentaâ€ mediante la opciÃ³n â€œEjecutar Todoâ€ Modo resumido

**Descripcion:**
Validar la opciÃ³n â€œEjecutar Todoâ€ en modo Resumido de flujo de Gastos TÃ©cnicos, el sistema procese correctamente hasta la fase 3 y sin aplicaciÃ³n de parches.

**Precondiciones:**
1- hasta la fase 3
2-Sin parches
3-Se debe seleccionar el perÃ­odo, modo de ejecuciÃ³n y descripciÃ³n, para que se habilite el botÃ³n "Ejecutar todo"

**Datos:**
Data procesada en el cierre de proceso de GT de modo resumido

-perÃ­odo 202506
-modo de ejecuciÃ³n "Resumido"
-descripciÃ³n de regiÃ³n: Exactus, Amed y AP Vida (por default)

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos"
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y descripciÃ³n de regiÃ³n
4. El usuario marca el check de fase 3.
5. El usuario presiona el botÃ³n "Ejecutar Todo"
6. Se levanta un modal,
Â¿Desea aplicar el parche a la informaciÃ³n procesada?
Desea aplicar cambios en la informaciÃ³n obtenida.
7. Seleccione â€œNoâ€

**Resultado esperado:**
Se ejecutan las fases inicial, fase 1, fase 2, fase 3 y cierre
El proceso de parches no se ejecuta

---

## Escenario: Validar funcionalidad 'Ejecutar Todo' en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos Modo resumido
**Fuente:** Procesos GT

### Caso de prueba: E64-GT-ER-01-02
- Implementado: No

**Titulo:** EjecuciÃ³n de proceso hasta la fase 3 â€œDistribuir Objetos de Costo a Unidades de Cuentaâ€ mediante la opciÃ³n â€œEjecutar Todoâ€ Modo resumido

**Descripcion:**
Validar la opciÃ³n â€œEjecutar Todoâ€ en modo Resumido de flujo de Gastos TÃ©cnicos, el sistema procese correctamente hasta la fase 3 y con aplicaciÃ³n de parches.

**Precondiciones:**
1- hasta la fase 3
2-Con parches

**Datos:**
Data procesada en el cierre de proceso de GT de modo resumido

-perÃ­odo 202506
-modo de ejecuciÃ³n "Resumido"
-descripciÃ³n de regiÃ³n: Exactus, Amed y AP Vida (por default)

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos"
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y descripciÃ³n de regiÃ³n
4. El usuario marca el check de fase 3.
5. El usuario presiona el botÃ³n "Ejecutar Todo"
6. Se levanta un modal,
Â¿Desea aplicar el parche a la informaciÃ³n procesada?
Desea aplicar cambios en la informaciÃ³n obtenida.
7. Seleccione â€œSÃ­â€

**Resultado esperado:**
Se ejecutan las fases inicial, fase 1, fase 2, fase 3, parches  y cierre

---

## Escenario: Validar funcionalidad 'Ejecutar Todo' en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos Modo resumido
**Fuente:** Procesos GT

### Caso de prueba: E64-GT-ER-02-01
- Implementado: No

**Titulo:** EjecuciÃ³n de proceso hasta la fase 2 â€œObtenciÃ³n de Subcanales + distribuciÃ³n CECOs Vidaâ€ mediante la opciÃ³n â€œEjecutar Todoâ€ Modo resumido

**Descripcion:**
Validar la opciÃ³n â€œEjecutar Todoâ€ en modo Resumido de flujo de Gastos TÃ©cnicos, el sistema procese correctamente hasta la fase 2 y sin aplicaciÃ³n de parches.

**Precondiciones:**
1- hasta la fase 2
2-Sin parches
3-Se debe seleccionar el perÃ­odo, modo de ejecuciÃ³n y descripciÃ³n, para que se habilite el botÃ³n "Ejecutar todo

**Datos:**
Data procesada en el cierre de proceso de GT de modo resumido

-perÃ­odo 202506
-modo de ejecuciÃ³n "Resumido"
-descripciÃ³n de regiÃ³n: Exactus, Amed y AP Vida (por default)

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos"
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y descripciÃ³n de regiÃ³n
4. El usuario NO marca el check de fase 3.
5. El usuario presiona el botÃ³n "Ejecutar Todo"
6. Se levanta un modal,
Â¿Desea aplicar el parche a la informaciÃ³n procesada?
Desea aplicar cambios en la informaciÃ³n obtenida.
7. Seleccione â€œNO"

**Resultado esperado:**
Se ejecutan las fases inicial, fase 1, fase 2 y cierre
El proceso de parches no se ejecuta

---

## Escenario: Validar funcionalidad 'Ejecutar Todo' en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos Modo resumido
**Fuente:** Procesos GT

### Caso de prueba: E64-GT-ER-02-02
- Implementado: No

**Titulo:** EjecuciÃ³n de proceso hasta la fase 2 â€œObtenciÃ³n de Subcanales + distribuciÃ³n CECOs Vidaâ€ mediante la opciÃ³n â€œEjecutar Todoâ€ Modo resumido

**Descripcion:**
Validar la opciÃ³n â€œEjecutar Todoâ€ en modo Resumido de flujo de Gastos TÃ©cnicos, el sistema procese correctamente hasta la fase 2 y con aplicaciÃ³n de parches.

**Precondiciones:**
1- hasta la fase 2
2-Con parches
3-Se debe seleccionar el perÃ­odo, modo de ejecucion y descripciÃ³n, para que se habilite el boton "Ejecutar todo

**Datos:**
Data procesada en el cierre de proceso de GT de modo resumido

-perÃ­odo 202506
-modo de ejecuciÃ³n "Resumido"
-descripciÃ³n de regiÃ³n: Exactus, Amed y AP Vida (por default)

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos"
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y descripciÃ³n de regiÃ³n
4. El usuario NO marca el check de fase 3.
5. El usuario presiona el botÃ³n "Ejecutar Todo"
6. Se levanta un modal,
Â¿Desea aplicar el parche a la informaciÃ³n procesada?
Desea aplicar cambios en la informaciÃ³n obtenida.
7. Selecione â€œSi"

**Resultado esperado:**
Se ejecutan las fases inicial, fase 1, fase 2, parches  y cierre

---

## Escenario: Validar funcionalidad 'Ejecutar Todo' en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos Modo Completo
**Fuente:** Procesos GT

### Caso de prueba: E64-GT-EC-01-01
- Implementado: No

**Titulo:** EjecuciÃ³n de proceso hasta la fase 3 â€œDistribuir Objetos de Costo a Unidades de Cuentaâ€ mediante la opciÃ³n â€œEjecutar Todoâ€ Modo Completo

**Descripcion:**
Validar la funcionalidad "Ejecutar Todo" en el  modo de ejecuciÃ³n Completo de GT

**Precondiciones:**
1- hasta la fase 3
2-Sin parches
3-Se debe seleccionar el perÃ­odo, modo de ejecucion y descripciÃ³n, para que se habilite el boton "Ejecutar todo

**Datos:**
Data procesada en el cierre de proceso de GT de modo completo

-perÃ­odo 202506
-modo de ejecuciÃ³n "completo"
-descripciÃ³n de regiÃ³n: Exactus, Amed y AP Vida (por default)

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos"
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y descripciÃ³n de regiÃ³n
4. El usuario marca el check de fase 3.
5. El usuario presiona el botÃ³n "Ejecutar Todo"
6. Se levanta un modal,
Â¿Desea aplicar el parche a la informaciÃ³n procesada?
Desea aplicar cambios en la informaciÃ³n obtenida.
7. Selecione â€œNoâ€

**Resultado esperado:**
Se ejecutan las fases inicial, fase 1, fase 2, fase 3 y cierre
El proceso de parches no se ejecuta

---

## Escenario: Validar funcionalidad 'Ejecutar Todo' en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos Modo Completo
**Fuente:** Procesos GT

### Caso de prueba: E64-GT-EC-01-02
- Implementado: No

**Titulo:** EjecuciÃ³n de proceso hasta la fase 3 â€œDistribuir Objetos de Costo a Unidades de Cuentaâ€ mediante la opciÃ³n â€œEjecutar Todoâ€ Modo completo

**Descripcion:**
Validar la opciÃ³n â€œEjecutar Todoâ€ en modo Completo de flujo de Gastos TÃ©cnicos, el sistema procese correctamente hasta la fase 3 y con aplicaciÃ³n de parches.

**Precondiciones:**
1- hasta la fase 3
2-Con parches
3-Se debe seleccionar el perÃ­odo, modo de ejecucion y descripciÃ³n, para que se habilite el boton "Ejecutar todo

**Datos:**
"Data procesada en el cierre de proceso de GT de modo resumido

-perÃ­odo 202506
-modo de ejecuciÃ³n ""completo""
-descripciÃ³n de regiÃ³n: Exactus, Amed y AP Vida (por default)
"

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos"
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y descripciÃ³n de regiÃ³n
4. El usuario marca el check de fase 3.
5. El usuario presiona el botÃ³n "Ejecutar Todo"
6. Se levanta un modal,
Â¿Desea aplicar el parche a la informaciÃ³n procesada?
Desea aplicar cambios en la informaciÃ³n obtenida.
7. Selecione â€œSiâ€

**Resultado esperado:**
Se ejecutan las fases inicial, fase 1, fase 2, fase 3, parches  y cierre

---

## Escenario: Validar funcionalidad 'Ejecutar Todo' en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos Modo Completo
**Fuente:** Procesos GT

### Caso de prueba: E64-GT-EC-02-01
- Implementado: No

**Titulo:** EjecuciÃ³n de proceso hasta la fase 2 â€œObtencion de Subcanales + distribuciÃ³n CECOs Vidaâ€ mediante la opciÃ³n â€œEjecutar Todoâ€ Modo completo

**Descripcion:**
Validar la opciÃ³n â€œEjecutar Todoâ€ en modo completo de flujo de Gastos TÃ©cnicos, el sistema procese correctamente hasta la fase 2 y sin aplicaciÃ³n de parches.

**Precondiciones:**
1- hasta la fase 2
2-Sin parches
3-Se debe seleccionar el perÃ­odo, modo de ejecucion y descripciÃ³n, para que se habilite el boton "Ejecutar todo

**Datos:**
Data procesada en el cierre de proceso de GT de modo completo

-perÃ­odo 202506
-modo de ejecuciÃ³n "Resumido"
-descripciÃ³n de regiÃ³n: Exactus, Amed y AP Vida (por default)

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos"
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y descripciÃ³n de regiÃ³n
4. El usuario NO marca el check de fase 3.
5. El usuario presiona el botÃ³n "Ejecutar Todo"
6. Se levanta un modal,
Â¿Desea aplicar el parche a la informaciÃ³n procesada?
Desea aplicar cambios en la informaciÃ³n obtenida.
7. Selecione â€œNo"

**Resultado esperado:**
Se ejecutan las fases inicial, fase 1, fase 2 y cierre
El proceso de parches no se ejecuta

---

## Escenario: Validar funcionalidad 'Ejecutar Todo' en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos Modo Completo
**Fuente:** Procesos GT

### Caso de prueba: E64-GT-EC-02-02
- Implementado: No

**Titulo:** EjecuciÃ³n de proceso hasta la fase 2 â€œObtencion de Subcanales + distribuciÃ³n CECOs Vidaâ€ mediante la opciÃ³n â€œEjecutar Todoâ€ Modo completo

**Descripcion:**
Validar la opciÃ³n â€œEjecutar Todoâ€ en modo completo de flujo de Gastos TÃ©cnicos, el sistema procese correctamente hasta la fase 2 y con aplicaciÃ³n de parches.

**Precondiciones:**
1- hasta la fase 2
2-Con parches
3-Se debe seleccionar el perÃ­odo, modo de ejecucion y descripciÃ³n, para que se habilite el boton "Ejecutar todo

**Datos:**
Data procesada en el cierre de proceso de GT de modo completo

-perÃ­odo 202506
-modo de ejecuciÃ³n "Resumido"
-descripciÃ³n de regiÃ³n: Exactus, Amed y AP Vida (por default)

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos"
3. El usuario configura el perÃ­odo, versiÃ³n, modo de ejecuciÃ³n y descripciÃ³n de regiÃ³n
4. El usuario NO marca el check de fase 3.
5. El usuario presiona el botÃ³n "Ejecutar Todo"
6. Se levanta un modal,
Â¿Desea aplicar el parche a la informaciÃ³n procesada?
Desea aplicar cambios en la informaciÃ³n obtenida.
7. Selecione â€œSi"

**Resultado esperado:**
Se ejecutan las fases inicial, fase 1, fase 2, parches  y cierre

---

## Escenario: Validar funcionalidad 'Detener' en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos Modo resumido
**Fuente:** Procesos GT

### Caso de prueba: E65-GT-ER
- Implementado: No

**Titulo:** DetenciÃ³n de proceso de distribuciÃ³n en modo resumido mediante la opciÃ³n â€œDetenerâ€ â€“ Flujo Gastos TÃ©cnicos

**Descripcion:**
Validar que, al ejecutar la opciÃ³n â€œDetenerâ€ durante el procesamiento de flujo de Gastos TÃ©cnicos en modo resumido, el sistema interrumpa correctamente la ejecuciÃ³n en curso, mostrando el mensaje correspondiente, deshabilitando las acciones asociadas y conservando el estado de avance al momento de la detenciÃ³n.

**Precondiciones:**
1-El proceso debe encontrarse en estado en ejecuciÃ³n (con porcentaje de avance visible)

**Datos:**
-

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos"
3. El usuario presiona el botÃ³n "Detener"

**Resultado esperado:**
1-Al detener el proceso, se muestra un modal con el mensaje:
â€œEl proceso de distribuciÃ³n se ha detenidoâ€
2-El botÃ³n â€œEjecutar todoâ€ queda deshabilitado
3-El proceso se detiene manteniendo el porcentaje de avance actual, sin reiniciar ni continuar la ejecuciÃ³n

---

## Escenario: Validar funcionalidad 'Detener' en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos Modo completo
**Fuente:** Procesos GT

### Caso de prueba: E65-GT-EC
- Implementado: No

**Titulo:** DetenciÃ³n de proceso de distribuciÃ³n en modo completo mediante la opciÃ³n â€œDetenerâ€ â€“ Flujo Gastos TÃ©cnicos

**Descripcion:**
Validar que, al ejecutar la opciÃ³n â€œDetenerâ€ durante el procesamiento de flujo de Gastos TÃ©cnicos en modo completo, el sistema interrumpa correctamente la ejecuciÃ³n en curso, mostrando el mensaje correspondiente, deshabilitando las acciones asociadas y conservando el estado de avance al momento de la detenciÃ³n.

**Precondiciones:**
1-El proceso debe encontrarse en estado en ejecuciÃ³n (con porcentaje de avance visible)

**Datos:**
-

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos"
3. El usuario presiona el botÃ³n "Detener"

**Resultado esperado:**
1-Al detener el proceso, se muestra un modal con el mensaje:
â€œEl proceso de distribuciÃ³n se ha detenidoâ€
2-El botÃ³n â€œEjecutar todoâ€ queda deshabilitado
3-El proceso se detiene manteniendo el porcentaje de avance actual, sin reiniciar ni continuar la ejecuciÃ³n

---

## Escenario: Validar funcionalidad 'Reiniciar' la ejecuciÃ³n detenida en el proceso de distribuciÃ³n en el flujo Gastos TÃ©cnicos  en el  modo de ejecuciÃ³n resumida
**Fuente:** Procesos GT

### Caso de prueba: E66-GT-ER
- Implementado: No

**Titulo:** Reinicio de proceso de distribuciÃ³n en modo resumido mediante la opciÃ³n â€œReiniciarâ€ â€“ Flujo Gastos TÃ©cnicos

**Descripcion:**
Validar que, al ejecutar la opciÃ³n â€œReiniciarâ€ sobre un proceso previamente detenido en el flujo de Gastos TÃ©cnicos en modo resumido, el sistema retome correctamente la ejecuciÃ³n, reiniciando Ãºnicamente la fase en la cual se detuvo .

**Precondiciones:**
1-El proceso de distribuciÃ³n en el flujo de Gastos TÃ©cnicos (modo resumido) debe haber sido detenido previamente

**Datos:**
-

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Real" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos"
3. El usuario presiona el botÃ³n "Reiniciar"

**Resultado esperado:**
1-Al ejecutar la opciÃ³n â€œReiniciarâ€, el proceso se reanuda y la fase especÃ­fica en la que se detuvo inicia desde cero
2-Las fases anteriores se mantienen con su estado previamente ejecutado (no se procesan)
3-El botÃ³n â€œEjecutar todoâ€ permanece deshabilitado durante la ejecuciÃ³n posterior al reinicio

---

## Escenario: Validar que se procesen las fases en la secciÃ³n "Procesos" usando "Exactus Procesado" de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo
**Fuente:** Procesos GT

### Caso de prueba: E69-GT-EC-01
- Implementado: No

**Titulo:** Procesamiento de las Fases de Gastos TÃ©cnicos con la carga manual de Exactus procesado en el modo de ejecuciÃ³n Completo

**Descripcion:**
Validar el procesamiento de modo de ejecuciÃ³n Completo de Gastos TÃ©cnicos cargando inicialmente el archivo Exactus procesado y comenzando desde la fase 1.

**Precondiciones:**
- No se ha procesado la informaciÃ³n en Oracle.
- Se debe tener el archivo Exactus procesado correcto.
- Se debe comenzar con la Fase 1.

**Datos:**
Archivo REAL Exactus Procesado GT

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, con el selector por defecto en Gastos TÃ©cnicos y selecciona una distribuciÃ³n de tipo "Real".
2. El usuario selecciona de menÃº lateral "Aprovisionamiento"  > " Exactus".
3. El usuario selecciona el botÃ³n ''Exactus procesado''
4. El usuario presiona botÃ³n Cargar.
5. Se levanta el modal con tÃ­tulo "Cargar Exactus Procesado'', el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar"" y selecciona el archivo a cargar.
6. El botÃ³n aceptar queda habilitado para dar aceptar.
7. El usuario selecciona de menÃº lateral "Procesos" 
8. El usuario configura el perÃ­odo, la VersiÃ³n y el Modo de ejecuciÃ³n.
9. El usuario ejecuta la Fase 1, 2, 3 y cierre de proceso.

**Resultado esperado:**
Se ejecuta el proceso de Gastos TÃ©cnicos satisfactoriamente, sustituyendo la corrida de la fase inicial por la carga de exactus procesado manualmente.

---

## Escenario: Validar la correcta ejecuciÃ³n de flujo de descarga de archivo Exactus procesado de Gastos TÃ©cnicos
**Fuente:** Procesos GT

### Caso de prueba: E69-GT-01
- Implementado: No

**Titulo:** Validar la correcta ejecuciÃ³n de flujo de descargas de archivo Exactus procesado definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Descripcion:**
Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
Se active el botÃ³n descarga

**Datos:**
Archivo Exactus procesado definido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos cargado en el motor

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, con el selector por defecto en Gastos TÃ©cnicos y selecciona una distribuciÃ³n de tipo "Real".2. El usuario selecciona de menÃº lateral "Aprovisionamiento"  > " Exactus".3. El usuario selecciona el botÃ³n ''Exactus procesado''4. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: Validar que el sistema pueda crear una nueva distribuciÃ³n para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E40-PRE-DIS-01
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de crear una nueva distribuciÃ³n para el flujo de Presupuesto

**Descripcion:**
Validar que se pueda crear una nueva distribuciÃ³n desde el modal "Nueva DistribuciÃ³n"

**Precondiciones:**
1- El usuario debe ingresar con un rol Gestor de Gastos TÃ©cnicos.
2- esta distribuciÃ³n no haya sido creada anteriormente.
3- El nombre se va formando con la informaciÃ³n de los campos: perÃ­odo, Tipo y SecciÃ³n.
4- Los campos Tipo, perÃ­odo y Secciones son select.

**Datos:**
Campos de formulario
-Nombre: perÃ­odo Tipo SecciÃ³n
-Tipo:  Presupuesto
-perÃ­odo: Con doble cero, Ej: 202500, 202600
-VersiÃ³n: nÃºmero entero con un decimal, Ej: 1.0, 1.1, 2.0
-Tasa de cambio: nÃºmero entero de hasta 4 cifras con dos decimales, Ej:13.98, 1.09, 0.65, 1234.98
-Secciones: Flujo de mes, Ajuste de mes.
-Acumulado: Valores permitidos Si o No
-Meses: se debe indicar â€œNoâ€

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''. 
2. El usuario presiona "Nueva DistribuciÃ³n".
3. Se levanta el modal con tÃ­tulo "Crear distribuciÃ³n", el botÃ³n crear estÃ¡ deshabilitado.
4. El usuario completa los campos y se habilita el botÃ³n crear.
5. El usuario presiona el botÃ³n crear.
6. Se muestra un mensaje de Ã©xito.

**Resultado esperado:**
El sistema crea una nueva distribuciÃ³n correctamente y muestra un mensaje de Ã©xito Â¡Hecho! El registro se agregÃ³ sin problemas

---

## Escenario: ValidaciÃ³n de la carga de los archivos en formato permitido en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-01.1
- Implementado: No

**Titulo:** Validar la carga de archivo  Ramo  de la ParametrizaciÃ³n de Gastos TÃ©cnicos en formato permitido para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto para el Flujo de Presupuesto

**Precondiciones:**
1- Existencia de archivo correspondiente
2- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3. Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o 00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO

**Datos:**
Archivo "PRESUPUESTO Ramos GT" definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con tÃ­tulo "Cargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Ramo ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de archivos en formato permitido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-01.1.1
- Implementado: No

**Titulo:** Funcionalidad boton subir nuevo archivo archivo Ramo definido en el proceso de ParametrizaciÃ³n de Gastos  TÃ©cnicos en el formato permitido para Presupuesto

**Descripcion:**
Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto para Presupuesto

**Precondiciones:**
1-Que ya se haya cargado un archivo
2-  El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3. Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO

**Datos:**
Archivo "PRESUPUESTO Ramos GT" definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
4. Se levanta el modal con titulo "Cargar Ramo", con el texto "Advertencia
Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Ramo ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos en formato permitido en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-01.2
- Implementado: No

**Titulo:** Validar la carga de archivo  Cuentas Contables  de la ParametrizaciÃ³n de Gastos TÃ©cnicos en formato permitido para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto para el Flujo de Presupuesto

**Precondiciones:**
1- Existencia de archivo correspondiente.
2- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Debe estar cargado el archivo de Ramo

**Datos:**
Archivo ''PRESUPUESTO Cuentas Contables GT'' definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de archivos en formato permitido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-01.2.1
- Implementado: No

**Titulo:** Funcionalidad boton subir nuevo archivo archivo Cuentas Contables definido en el proceso de ParametrizaciÃ³n de Gastos  TÃ©cnicos en el formato permitido para Presupuesto

**Descripcion:**
Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto para Presupuesto

**Precondiciones:**
1-Que ya se haya cargado un archivo
2- el usuario registrado tenga el rol  de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Debe estar cargado el archivo de Ramo

**Datos:**
Archivo ''PRESUPUESTO Cuentas Contables GT'' definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
4. Se levanta el modal con titulo "Cargar Cuentas Contables", con el texto "Advertencia
Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos en formato permitido en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-01.3
- Implementado: No

**Titulo:** Validar la carga de archivo  Centros  de la ParametrizaciÃ³n de Gastos TÃ©cnicos en formato permitido para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto para el Flujo de Presupuesto

**Precondiciones:**
1- Existencia de archivo correspondiente.
2- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO.
4- Deben estar cargados los archivos de Comunes: LÃ­nea, Grupo producto, Canal y Subcanal.

**Datos:**
Archivo ''PRESUPUESTO Centros GT'' definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con titulo "Cargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Centros ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de archivos en formato permitido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-01.3.1
- Implementado: No

**Titulo:** Funcionalidad boton subir nuevo archivo archivo Centros definido en el proceso de ParametrizaciÃ³n de Gastos  TÃ©cnicos en el formato permitido para Presupuesto

**Descripcion:**
Validar la carga de otro archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto para Presupuesto

**Precondiciones:**
1-Que ya se haya cargado un archivo
2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO.
4- Deben estar cargados los archivos de Comunes: LÃ­nea, Grupo producto, Canal y Subcanal.

**Datos:**
Archivo ''PRESUPUESTO Centros GT'' definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
4. Se levanta el modal con titulo "Cargar Centros", con el texto "Advertencia
Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Centros ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos en formato permitido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-02.1
- Implementado: No

**Titulo:** Validar la carga de archivo  Presupuesto de la Aprovisionamiento de Gastos TÃ©cnicos en formato permitido para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto para el Flujo de Presupuesto

**Precondiciones:**
1- Existencia de archivo correspondiente.
2- El usuario registrado tenga el rol de  Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Deben estar cargados los archivos: Ramo y Cuentas Contables de ParametrizaciÃ³n de GT y Lineas, Gripo producto, Canal y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO AÃ±o GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "Presupuesto".
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con titulo "Cargar Presupuesto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Presupuesto ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de archivos en formato permitido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-02.1,1
- Implementado: No

**Titulo:** Carga de archivo Presupuesto definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos en el formato permitido para Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto  para Presupuesto

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Deben estar cargados los archivos: Ramo y Cuentas Contables de ParametrizaciÃ³n de GT y Lineas, Gripo producto, Canal y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO AÃ±o GT '' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2.  El usuario selecciona de menÃº lateral "Aprovisionamiento"  > " Presupuesto".
3. El usuario presiona botÃ³n ''Exactus procesado''.
4. El usuario presiona botÃ³n Cargar.
5. Se levanta el modal con titulo "Cargar Presupuesto'', con el texto "Advertencia Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
6. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
7. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
8. El usuario presiona " procesar archivo".
9.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Presupuesto Procesado ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos en formato permitido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-02.2
- Implementado: No

**Titulo:** Validar la carga de archivo  Driver Subcanal de Aprovisionamiento de Gastos TÃ©cnicos en formato permitido para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto para el Flujo de Presupuesto

**Precondiciones:**
1- Existencia de archivo correspondiente.
2- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Debe estar cargado el archivo Subcanal.

**Datos:**
Archivo ''PRESUPUESTO Driver Subcanal GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "Driver Subcanal ".
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con titulo "Cargar Driver Subcanal ", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Driver Subcanal ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de archivos en formato permitido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-02.2.1
- Implementado: No

**Titulo:** Carga de archivo Driver Subcanal  definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos en el formato permitido para Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto  para Presupuesto

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Debe estar cargado el archivo Subcanal.

**Datos:**
Archivo ''PRESUPUESTO Driver Subcanal GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento"  > " Driver Subcanal ".
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con titulo "Cargar Driver Subcanal '', con el texto "Advertencia Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Driver Subcanal ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos en formato permitido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-02.3
- Implementado: No

**Titulo:** Validar la carga de archivo  Unidad de Cuenta GT de Aprovisionamiento de Gastos TÃ©cnicos en formato permitido para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto para el Flujo de Presupuesto

**Precondiciones:**
1- Existencia de archivo correspondiente.
2- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Deben estar cargados los archivos: Ramo y Cuentas Contables de ParametrizaciÃ³n de GT y Lineas, Gripo producto, Canal y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO  Unidad de Cuenta GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "Unidad de Cuenta".
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con titulo "Cargar Unidad de Cuenta", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Unidad de Cuenta ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de archivos en formato permitido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-02.3.1
- Implementado: No

**Titulo:** Carga de archivo Unidad de cuenta GT  definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos en el formato permitido para Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto  para Presupuesto

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Deben estar cargados los archivos: Ramo y Cuentas Contables de ParametrizaciÃ³n de GT y Lineas, Gripo producto, Canal y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO  Unidad de Cuenta GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento"  > " Unidad de cuenta GT ".
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con titulo "Cargar Unidad de cuenta GT '', con el texto "Advertencia Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Unidad de cuenta GT ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos en formato permitido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-02.4
- Implementado: No

**Titulo:** Validar la carga de archivo  Maestro de Negocio y Embebidos de Aprovisionamiento de Gastos TÃ©cnicos en formato permitido para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto para el Flujo de Presupuesto

**Precondiciones:**
1- Existencia de archivo correspondiente.
2- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Deben estar cargados los archivos: LÃ­nea, Grupo producto, Canal y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO Maestro de Negocio y Embebidos GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "Maestro de Negocio y Embebidos".
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Maestro de Negocio y Embebidos ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de archivos en formato permitido en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-02.4.1
- Implementado: No

**Titulo:** Carga de archivo Maestro de Negocio y Embebidos  definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos en el formato permitido para Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto  para Presupuesto

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Deben estar cargados los archivos: LÃ­nea, Grupo producto, Canal y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO Maestro de Negocio y Embebidos GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento"  > " Maestro de Negocio y Embebidos ".
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos'', con el texto "Advertencia Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Maestro de Negocio y Embebidos ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos en formato permitido en el proceso de Asignaciones de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-03.1
- Implementado: No

**Titulo:** Validar la carga de archivo  MÃ©todo Subcanal de Asignaciones de Gastos TÃ©cnicos en formato permitido para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto para el Flujo de Presupuesto

**Precondiciones:**
1- Existencia de archivo correspondiente.
2- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Debe estar cargado el archivo: Driver Subcanal.

**Datos:**
Archivo ''PRESUPUESTO MÃ©todo Subcanal GT'' definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Asignaciones" > ''MÃ©todo Subcanal''. 
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con titulo "Cargar MÃ©todo Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo MÃ©todo Subcanal ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de archivos en formato permitido en el proceso de Asignaciones de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-03.1.1
- Implementado: No

**Titulo:** Carga de archivo MÃ©todo Subcanal  definidos en el proceso de Asignaciones de Gastos TÃ©cnicos en el formato permitido para Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto  para Presupuesto

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Debe estar cargado el archivo: Driver Subcanal.

**Datos:**
Archivo ''PRESUPUESTO MÃ©todo Subcanal GT'' definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Asignaciones "  > "MÃ©todo Subcanal".
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con tÃ­tulo "Cargar MÃ©todo Subcanal'', con el texto "Advertencia Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. este proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo MÃ©todo Subcanal ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos en formato permitido en el proceso de Asignaciones de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-03.2
- Implementado: No

**Titulo:** Validar la carga de archivo  Especiales NIIF de Asignaciones de Gastos TÃ©cnicos en formato permitido para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto para el Flujo de Presupuesto

**Precondiciones:**
1- Existencia de archivo correspondiente.
2- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Deben estar cargados los archivos: Cuentas Contables y Centros de la parametrizaciÃ³n de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO Especiales NIIF GT'' definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Asignaciones" > ''Especiales NIIF''. 
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con tÃ­tulo "Cargar Especiales NIIF", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botÃ³n aceptar queda habilitado y se muestra un nuevo botÃ³n ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Especiales NIIF ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de archivos en formato permitido en el proceso de Asignaciones de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E4-PRE-GT-03.2.1
- Implementado: No

**Titulo:** Carga de archivo Especiales NIIF definidos en el proceso de Asignaciones de Gastos TÃ©cnicos en el formato permitido para Presupuesto

**Descripcion:**
Validar la carga de archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo correcto para Presupuesto

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos 
3- Se debe haber creado una distribuciÃ³n con perÃ­odo: aÃ±o00 (Ej:202600),  tipo: presupuesto, secciones: flujo de mes y acoumulado: NO
4- Deben estar cargados los archivos: Cuentas Contables y Centros de la parametrizaciÃ³n de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO Especiales NIIF GT'' definidos en el proceso de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Asignaciones "  > "MÃ©todo Producto".
3. El usuario presiona botÃ³n Cargar.
4. Se levanta el modal con tÃ­tulo "Cargar Especiales NIIF'', con el texto "Advertencia Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?",  el botÃ³n Procesar archivo estÃ¡ deshabilitado, el usuario da clic en "continuar con la carga" y selecciona el archivo a cargar.
5. El usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. El botÃ³n procesar archivo queda habilitado y se muestra un nuevo botÃ³n ''Subir un nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo.
7. El usuario presiona " procesar archivo".
8.  se muestra en mensaje "Procesando archivo Por favor espere mientras procesamos su archivo. estÃ© proceso puede tardar varios minutos."

**Resultado esperado:**
El archivo Especiales NIIF ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: Validar la carga de un archivo con los datos incompletos en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E8-PRE-GT-01.1
- Implementado: No

**Titulo:** Carga de archivo con los datos incompletos en Ramo de la ParametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar la carga de un archivo con los datos incompletos para el perÃ­odo

**Precondiciones:**
1- Existencia de un archivos con la estructura de archivo y con datos incompletos
2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
1- Archivo Ramo definidos en el proceso de Gastos TÃ©cnicos
2- campos obligatorios: 
- CODRAMO 
- DESRAMO

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para  cargar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios. Por favor, revisa que todos los campos requeridos estÃ¡n completos

---

## Escenario: Validar la carga de un archivo con los datos incompletos en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E8-PRE-GT-01.2
- Implementado: No

**Titulo:** Carga de archivo con los datos incompletos en Cuentas Contables de la ParametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar la carga de un archivo con los datos incompletos para el perÃ­odo

**Precondiciones:**
1- Existencia de un archivos con la estructura de archivo y con datos incompletos
2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
1- Archivo Cuentas Contables definidos en el proceso de Gastos TÃ©cnicos
2- campos obligatorios: 
- CÃ³digo cuenta contable 
- DescripciÃ³n cuenta contable 
- Niif 17 Atribuible
-  Niif 17 Tipo Concepto
- Concepto N1
- Concepto N2
- Concepto N3

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para  cargar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios. Por favor, revisa que todos los campos requeridos estÃ¡n completos

---

## Escenario: Validar la carga de un archivo con los datos incompletos en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E8-PRE-GT-01.3
- Implementado: No

**Titulo:** Carga de archivo con los datos incompletos en Centros de la ParametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar la carga de un archivo con los datos incompletos para el perÃ­odo

**Precondiciones:**
1- Existencia de un archivos con la estructura de archivo y con datos incompletos
2- usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos

**Datos:**
1- Archivo Centros definidos en el proceso de Gastos TÃ©cnicos
2- campos obligatorios: 
- Negocio 
- Centro de Costo 
- Nombre Centro de costo 
- Nombre LÃ­nea 
- Nombre producto
- Nombre canal 
- Nombre subcanal
- Tipo

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para  cargar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. Faltan algunos datos obligatorios. Por favor, revisa que todos los campos requeridos estÃ¡n completos

---

## Escenario: Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E59-PRE-GT-01.1
- Implementado: No

**Titulo:** Carga de el archivo de parametrizaciÃ³n en Ramo que ya contenga  informaciÃ³n definida  en el proceso Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gastos TÃ©cnicos 
3- que exista data cargada.

**Datos:**
Archivo ''PRESUPUESTO Ramo GT'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. El usuario presiona el botÃ³n "Cargar".
4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. Se levanta el modal con titulo "Cargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E59-PRE-GT-01.2
- Implementado: No

**Titulo:** Carga de el archivo de parametrizaciÃ³n en Cuentas Contables que ya contenga  informaciÃ³n definida  en el proceso Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gastos TÃ©cnicos 
3- que exista data cargada.
4- debe estar cargado el archivo de Ramo.

**Datos:**
Archivo ''PRESUPUESTO Cuentas Contables GT'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. El usuario presiona el botÃ³n "Cargar".
4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. Se levanta el modal con titulo "Cargar Cuentas Contables", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E59-PRE-GT-01.3
- Implementado: No

**Titulo:** Carga de el archivo de parametrizaciÃ³n en Centros que ya contenga  informaciÃ³n definida  en el proceso Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gastos TÃ©cnicos 
3- que exista data cargada.
4- deben estar cargados los archivos de Comunes: LÃ­nea, Grupo producto, Canal y Subcanal.

**Datos:**
Archivo ''PRESUPUESTO Centros GT'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. El usuario presiona el botÃ³n "Cargar".
4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. Se levanta el modal con titulo "Cargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E59-PRE-GT-02.1
- Implementado: No

**Titulo:** Carga de el archivo de Aprovisionamiento en Presupuesto que ya contenga  informaciÃ³n definida  en el proceso Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gastos TÃ©cnicos 
3- que exista data cargada.
4- deben estar cargados los archivos: Ramo y Cuentas Contables de ParametrizaciÃ³n de GT y LÃ­nea, Grupo producto, Canal y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO GT'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''. 
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Presupuesto".
3. El usuario presiona el botÃ³n "Cargar".
4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. Se levanta el modal con titulo "Cargar Exactus", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E59-PRE-GT-02.2
- Implementado: No

**Titulo:** Carga de el archivo de Aprovisionamiento en Driver Subcanal que ya contenga  informaciÃ³n definida  en el proceso Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gastos TÃ©cnicos 
3- que exista data cargada.
4- debe estar cargado el archivo Subcanal.

**Datos:**
Archivo ''PRESUPUESTO Driver Subcanal GT'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. El usuario presiona el botÃ³n "Cargar".
4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. Se levanta el modal con titulo "Cargar Driver Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E59-PRE-GT-02.3
- Implementado: No

**Titulo:** Carga de el archivo de Aprovisionamiento en Unidad de Cuenta GT que ya contenga  informaciÃ³n definida  en el proceso Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gastos TÃ©cnicos 
3- que exista data cargada.
4- deben estar cargados los archivos: Ramo y Cuentas Contables de la parametrizaciÃ³n de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO Unidad de Cuenta GT'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta".
3. El usuario presiona el botÃ³n "Cargar".
4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. Se levanta el modal con titulo "Cargar Unidad de Cuenta", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a c.argar.
6 Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E59-PRE-GT-02.4
- Implementado: No

**Titulo:** Carga de el archivo de Aprovisionamiento en Maestro de Negocio y Embebidos que ya contenga  informaciÃ³n definida  en el proceso Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gastos TÃ©cnicos 
3- que exista data cargada.
4- deben estar cargados los archivos: LÃ­nea, Grupo producto, Canal y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO Maestro de Embebidos GT'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona el botÃ³n "Cargar".
4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E59-PRE-GT-03.1
- Implementado: No

**Titulo:** Carga de el archivo de Asignaciones en MÃ©todo Subcanal que ya contenga  informaciÃ³n definida  en el proceso Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gastos TÃ©cnicos 
3- que exista data cargada.
4- debe estar cargado el archivo: Driver Subcanal.

**Datos:**
Archivo ''PRESUPUESTO MÃ©todo Subcanal GT'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. El usuario presiona el botÃ³n "Cargar".
4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. Se levanta el modal con titulo "Cargar MÃ©todo Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: Validar la funcionalidad de sobreescritura de datos mediante la carga de archivo en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E59-PRE-GT-03.2
- Implementado: No

**Titulo:** Carga de el archivo de Asignaciones en Especiales NIIF que ya contenga  informaciÃ³n definida  en el proceso Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que la informaciÃ³n no se duplique y que la carga mÃ¡s reciente tenga la prioridad esperada.

**Precondiciones:**
1-Existencia de archivo correspondiente.
2- usuario registrado tenga el rol de Gastos TÃ©cnicos 
3- que exista data cargada.
4- deben estar cargados los archivos: Cuentas Contables y Centros de la parametrizaciÃ³n de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO Especiales NIIF GT'' que corresponde a la funcionalidad

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botÃ³n "Cargar".
4. Se muestra una alerta acompaÃ±ada de la pregunta Â¿Desea continuar con la carga?, el usuario presiona el botÃ³n ''Aceptar''
5. Se levanta el modal con titulo "Cargar Especiales NIIF", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. Se muestra un mensaje de exito.

**Resultado esperado:**
1-Antes de cargar el archivo aparece el mensaje. Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
2-aparece el mensaje Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: Validar  que no se cargue un archivo de mÃ¡s de 30 Mb en la ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E61-PRE-GT-01.1
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Ramo definido en la parametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo de mÃ¡s de 30 mb de peso para el perÃ­odo

**Precondiciones:**
1- El archivo Ramo debe exceder el tamaÃ±o mÃ¡ximo permitido 
2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.

**Datos:**
Archivo ''PRESUPUESTO Ramo GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
4. Se levanta el modal con titulo "Cargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite de tamaÃ±o.

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

## Escenario: Validar  que no se cargue un archivo de mÃ¡s de 30 Mb en la ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E61-PRE-GT-01.2
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Cuentas Contables definido en la parametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo de mÃ¡s de 30 mb de peso para el perÃ­odo

**Precondiciones:**
1- El archivo Cuentas Contables debe exceder el tamaÃ±o mÃ¡ximo permitido 
2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.
3- debe estar cargado el archivo de Ramo.

**Datos:**
Archivo ''PRESUPUESTO Cuentas Contables GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite de tamaÃ±o.

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

## Escenario: Validar  que no se cargue un archivo de mÃ¡s de 30 Mb en la ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E61-PRE-GT-01.3
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Centros definido en en la parametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo de mÃ¡s de 30 mb de peso para el perÃ­odo

**Precondiciones:**
1- El archivo Centros debe exceder el tamaÃ±o mÃ¡ximo permitido 
2- el usuario registrado tenga el rol de Administrador de Gastos o 
Gestor de Gastos TÃ©cnicos.
3- deben estar cargados los archivos de Comunes: LÃ­nea, Grupo producto, Canal y Subcanal.

**Datos:**
Archivo ''PRESUPUESTO Centros GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros ".
3. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
4. Se levanta el modal con titulo "Cargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite de tamaÃ±o.

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

## Escenario: Validar que no se cargue un archivo de mÃ¡s de 30 Mb en Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E61-PRE-GT-02.1
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Presupuesto de Aprovisionamiento definido en el proceso de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo de mÃ¡s de 30 mb de peso para el perÃ­odo

**Precondiciones:**
1- El archivo Presupuesto debe exceder el tamaÃ±o mÃ¡ximo permitido 
2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.
3- deben estar cargados los archivos: Cuentas Contables de ParametrizaciÃ³n de GT y Lineas y Canal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO Exactus sin procesar'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Exactus".
3. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
4. Se levanta el modal con titulo "Cargar Exactus", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite de tamaÃ±o.

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

## Escenario: Validar que no se cargue un archivo de mÃ¡s de 30 Mb en Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E61-PRE-GT-02.2
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Driver Subcanal  de Aprovisionamiento definido en el proceso de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo de mÃ¡s de 30 mb de peso para el perÃ­odo

**Precondiciones:**
1- El archivo Driver Subcanal procesado debe exceder el tamaÃ±o mÃ¡ximo permitido 
2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.
3-debe estar cargado el archivo Subcanal.

**Datos:**
Archivo ''PRESUPUESTO Driver Subcanal GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite de tamaÃ±o.

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

## Escenario: Validar que no se cargue un archivo de mÃ¡s de 30 Mb en Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E61-PRE-GT-02.3
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Unidad de cuenta GT de Aprovisionamiento definido en el proceso de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo de mÃ¡s de 30 mb de peso para el perÃ­odo

**Precondiciones:**
1- El archivo Unidad de cuenta GT procesado debe exceder el tamaÃ±o mÃ¡ximo permitido 
2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.
3- deben estar cargados los archivos: Ramo y Cuentas Contables de la parametrizaciÃ³n de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO Unidad de cuenta GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
4. Se levanta el modal con titulo "Cargar Unidad de cuenta GT", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite de tamaÃ±o.

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

## Escenario: Validar que no se cargue un archivo de mÃ¡s de 30 Mb en Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E61-PRE-GT-02.4
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Maestro de Negocio y Embebidos de Aprovisionamiento definido en el proceso de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo de mÃ¡s de 30 mb de peso para el perÃ­odo

**Precondiciones:**
1- El archivo Maestro de Negocio y Embebidos procesado debe exceder el tamaÃ±o mÃ¡ximo permitido 
2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.
3- deben estar cargados los archivos: LÃ­nea, Grupo producto, Canal y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO Maestro de Negocio y Embebidos GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite de tamaÃ±o.

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

## Escenario: Validar que no se cargue un archivo de mÃ¡s de 30 Mb en Asignaciones de Gastos TÃ©cnicos  para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E61-PREGT-03.1
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para MÃ©todos Subcanal de Asignaciones definido en el proceso de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar la carga de archivo de mÃ¡s de 30 mb de peso para el perÃ­odo

**Precondiciones:**
1- El archivo MÃ©todos Subcanal procesado debe exceder el tamaÃ±o mÃ¡ximo permitido 
2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.
3- debe estar cargado el archivo: Driver Subcanal.

**Datos:**
Archivo ''PRESUPUESTO MÃ©todos Subcanal GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todos Subcanal".
3. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
4. Se levanta el modal con titulo "Cargar MÃ©todos Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite de tamaÃ±o.

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

## Escenario: Validar que no se cargue un archivo de mÃ¡s de 30 Mb en Asignaciones de Gastos TÃ©cnicos  para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E61-PRE-GT-03.2
- Implementado: No

**Titulo:** Validar la carga de archivo de mÃ¡s de 30 mb de peso para Especiales NIIF de Asignaciones definido en el proceso de Gastos TÃ©cnicos

**Descripcion:**
Validar la carga de archivo de mÃ¡s de 30 mb de peso para el perÃ­odo

**Precondiciones:**
1- El archivo Especiales NIIF procesado debe exceder el tamaÃ±o mÃ¡ximo permitido 
2- el usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos.
3- deben estar cargados los archivos: Cuentas Contables y Centros de la parametrizaciÃ³n de GT y Grupo producto y Subcanal de Comunes.

**Datos:**
Archivo ''PRESUPUESTO Especiales NIIF GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite de tamaÃ±o.

**Resultado esperado:**
El sistema no carga el archivo. 

1- muestra un mensaje de error.  El archivo excede el tamaÃ±o mÃ¡ximo permitido (30 MB). Seleccione un archivo que cumpla con el lÃ­mite establecido para completar la carga.

---

## Escenario: Validar las reglas de negocio y formato para un registro en la carga de archivo en el proceso de ParametrizaciÃ³n de flujo de Gastos TÃ©cnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E70-PRE-GT-01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Ramo de la ParametrizaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Ramo

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo PRESUPUESTO Ramo GT debe estar disponible
3- Reglas de negocio y formato para estÃ© archivo
-Los campos cÃ³digo ramo y descriÃ§iÃ³n son obligatorios
-Un Ramo puede tener mÃºltiples Rubros
-El CodRamo debe ser un valor de 1 o 2 posiciones, que pueden ser nÃºmeros o letras 
- Se acepta el valor especial 'SIN RAMO'. 
- Si el CodRamo de entrada tiene 1 SÃ³lo dÃ­gito, el sistema debe aÃ±adir un '0' a la izquierda para estandarizar a un formato de 2 dÃ­gitos (ej. '7' se convierte en '07').

**Datos:**
Archivo ''PRESUPUESTO Ramos GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo PRESUPUESTO Ramo GT preparado para la carga con los casos a validar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: Validar las reglas de negocio y formato para un registro en la carga de archivo en el proceso de ParametrizaciÃ³n de flujo de Gastos TÃ©cnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E70-PRE-GT-01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Cuentas Contables de la ParametrizaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Cuentas Contables

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo PRESUPUESTO Cuentas Contables GT debe estar disponible
3- Reglas de negocio y formato para estÃ© archivo
-Los campos CÃ³digo cuenta contable, DescripciÃ³n cuenta contable, NIIF 17 Atribuible, NIIF 17 Tipo, Concepto, Concepto N1, Concepto N2, Concepto N3 son obligatorios
-Los valores de cÃ³digo Cuenta Contable  debe ser Ãºnico
-El CÃ³digo de Ramo debe estar creado en el maestro de Ramo
-NIIF 17 Tipo: Valores permitidos: 'GM' (Gastos de Mantenimiento) o 'GA' (Gastos de AdquisiciÃ³n).
-La cuenta contable Los 2 primeros dÃ­gitos deben ser 46,47,56,57 el 3er dÃ­gito 1 o 2; el 4to dÃ­gito entre 0 y 9 o una letra; y los bloques siguientes entre 01 y 99 o la combinaciÃ³n de letras, por ejemplo OO

**Datos:**
Archivo ''PRESUPUESTO Cuentas Contables GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo PRESUPUESTO Cuentas Contables GT preparado para la carga con los casos a validar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: Validar las reglas de negocio y formato para un registro en la carga de archivo en el proceso de ParametrizaciÃ³n de flujo de Gastos TÃ©cnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E70-PRE-GT-01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Centros de la ParametrizaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Centros

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo PRESUPUESTO Centros GT debe estar disponible
3- Reglas de negocio y formato para estÃ© archivo
-Los campos Negocio, Centro de Costo, Nombre Centro de costo, Nombre LÃ­nea, Nombre producto, Nombre canal, Nombre subcanal, Tipo son obligatorios
-Las LÃ­nea, Producto, Canal y Subcanal deben estar creados en su catÃ¡logo
-El Negocio debe ser PPS o PVI; otros valores son rechazados.
-Cuando el Centro es de tipo DIRECTO, debe existir una combinaciÃ³n vÃ¡lida de LÃ­nea, Producto, Canal y Subcanal en los catÃ¡logos maestros.
- Cuando el campo TIPO viene vacÃ­o, el Centro NO se considera DIRECTO.
- Los catÃ¡logos maestros de LÃ­nea, Producto, Canal y Subcanal se encuentran previamente configurados, activos y con sus relaciones jerÃ¡rquicas definidas (Productoâ€“LÃ­nea y Subcanalâ€“Canal)

**Datos:**
Archivo ''PRESUPUESTO Centros GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo PRESUPUESTO Centros GT preparado para la carga con los casos a validar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: Validar las reglas de negocio y formato para un registro en la carga de archivo en el proceso de Aprovisionamiento de flujo de Gastos TÃ©cnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E70-PRE-GT-02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Presupuesto de la Aprovisionamiento de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Presupuesto

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo PRESUPUESTO GT debe estar disponible
3- Reglas de negocio y formato para estÃ© archivo

**Datos:**
Archivo ''PRESUPUESTO GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Presupuesto".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Presupuesto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo PRESUPUESTO  GT preparado para la carga con los casos a validar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: Validar las reglas de negocio y formato para un registro en la carga de archivo en el proceso de Aprovisionamiento de flujo de Gastos TÃ©cnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E70-PRE-GT-02.4
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Driver Subcanal de la Aprovisionamiento de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Driver Subcanal

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo PRESUPUESTO Driver Subcanal GT debe estar disponible
3- Reglas de negocio y formato para estÃ© archivo
-Los campos Codigo MÃ©todo, Codigo Canal, Nombre Canal y Factor son Obligatorios 
-Los catÃ¡logos maestros de Canal, Subcanal  se encuentran previamente configurados y activos
-El factor permite 10 caracteres nÃ¹mericos, Pueden ser hasta 4 decimales, Acepta valor 0, Acepta enteros sin decimales, Acepta valores negativos

**Datos:**
Archivo ''PRESUPUESTO Driver Subcanal GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo PRESUPUESTO Driver Subcanal GT preparado para la carga con los casos a validar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: Validar las reglas de negocio y formato para un registro en la carga de archivo en el proceso de Aprovisionamiento de flujo de Gastos TÃ©cnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E70-PRE-GT-02.5
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Unidad de Cuenta GT de la Aprovisionamiento de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Unidad de Cuenta GT

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo PRESUPUESTO Unidad de Cuenta GT GT debe estar disponible
3- Reglas de negocio y formato para estÃ© archivo
-Los campos Prioridad, Unidad de Cuenta y factor son obligatorios
-Los campos Unidad de Cuenta, Ramo, Producto y Subcanal deben existir y estar previamente registrados en sus respectivos catÃ¡logos maestros.
-El campo Prioridad debe contener un valor numÃ©rico entre 1 y 4.
-El CÃ³digo de Concepto exista en el catÃ¡logo de conceptos dentro de " Cuentas Contables"
- Para un mismo registro con el mismo CÃ³digo de Concepto, Producto y Subcanal, la Unidad de Cuenta debe ser Ãºnica y la suma de sus factores debe ser igual a 1. 
-El valor de campo DÃ­gito de la Cuenta debe ser 44 o 54, que corresponden a las cuentas contables aplicables para Gastos TÃ©cnicos. En caso contrario,debe mostrar un mensaje de error y no permitir el registro.
-EL valor de Factor debe esatr entre 0 y 1

**Datos:**
Archivo ''PRESUPUESTO Unidad de Cuenta GT GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Unidad de Cuenta GT", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo PRESUPUESTO Unidad de Cuenta GT GT preparado para la carga con los casos a validar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: Validar las reglas de negocio y formato para un registro en la carga de archivo en el proceso de Aprovisionamiento de flujo de Gastos TÃ©cnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E70-PRE-GT-02.6
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Maestro de Negocio y Embebido de la Aprovisionamiento de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Maestro de Negocio y Embebido

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo PRESUPUESTO Maestro de Negocio y Embebido GT debe estar disponible
3- Reglas de negocio y formato para estÃ© archivo
-Los campos Negocio, LÃ­nea, Producto son obligatorios
-Se debe validar que los valores de LÃ­nea, Producto, Canal y Subcanal existan en sus respectivos catÃ¡logos maestros. AdemÃ¡s, se debe verificar que el Producto estÃ© asociado a la LÃ­nea y que el Subcanal estÃ© asociado al Canal correspondiente.
-Los campos Embebidos y Tipo de Negocio son excluyentes: si Embebidos tiene valor, Tipo de Negocio debe estar vacÃ­o, y viceversa.

**Datos:**
Archivo ''PRESUPUESTO Maestro Embebido GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebido".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebido", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo PRESUPUESTO Maestro de Negocio y Embebido GT preparado para la carga con los casos a validar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: Validar las reglas de negocio y formato para un registro en la carga de archivo en el proceso de AsignaciÃ³n de flujo de Gastos TÃ©cnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E70-PRE-GT-03.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en MÃ©todo Subcanal de la AsignaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de MÃ©todo Subcanal

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo PRESUPUESTO MÃ©todo Subcanal GT debe estar disponible
3- Reglas de negocio y formato para estÃ© archivo
-Todos los campos son obligatorios
-El CÃ³digo de Concepto, Ramo, LÃ­nea, Producto, Canal y MÃ©todo debe estar previamente configurado en sus catÃ¡logos
-Los campos son obligatorios
-Debe existir correspondencia vÃ¡lida entre CÃ³digo de LÃ­nea y Nombre de LÃ­nea, asÃ­ como entre CÃ³digo de Producto y Nombre de Producto.
-Debe existir una relaciÃ³n vÃ¡lida entre la LÃ­nea y el Producto (el Producto debe estar asociado a la LÃ­nea correspondiente).
-La combinaciÃ³n de los campos CÃ³digo de Concepto, CÃ³digo de Ramo, CÃ³digo de LÃ­nea, LÃ­nea, CÃ³digo de Grupo de Producto, Grupo de Producto, CÃ³digo de Canal y CÃ³digo de MÃ©todo debe ser Ãºnica. No se permite registrar mÃ¡s de un registro con la misma combinaciÃ³n de estos valores.

**Datos:**
Archivo ''PRESUPUESTO MÃ©todo Subcanal GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "AsignaciÃ³n" > "MÃ©todo Subcanal".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar MÃ©todo Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo PRESUPUESTO MÃ©todo Subcanal GT preparado para la carga con los casos a validar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: Validar las reglas de negocio y formato para un registro en la carga de archivo en el proceso de AsignaciÃ³n de flujo de Gastos TÃ©cnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E70-PRE-GT-03.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Especiales NIIF de la AsignaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  y formato establecido

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas de negocio y formato definidas de negocio  desde la carga de archivos de Especiales NIIF

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo PRESUPUESTO Especiales NIIF GT debe estar disponible
3- Reglas de negocio y formato para estÃ© archivo
-El CÃ³digo de Concepto, LÃ­nea, Producto, Canal, Subcanal y MÃ©todo debe estar previamente configurado en sus catÃ¡logos
-Deben existir datos vÃ¡lidos y activos en los catÃ¡logos de LÃ­neas, Productos, Canales, Subcanales, Conceptos y Centros de Costo
-Los campos CÃ³digo LÃ­nea, LÃ­nea, Porcentaje y Tipo DistribuciÃ³n son abligatorios.
MM

**Datos:**
Archivo ''PRESUPUESTO Especiales NIIF GT'' preparado para la prueba en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "AsignaciÃ³n" > "Especiales NIIF".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo PRESUPUESTO Especiales NIIF GT preparado para la carga con los casos a validar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema no carga el archivo. 

1- Muestra un mensaje de Error al procesar el archivo. Faltan algunos datos obligatorios, con formato incorrecto o con datos que no existen en el catÃ¡logo relacionado. Por favor, revisa todos los campos requeridos.

2- Debe aparecer el botÃ³n ''Descargar errores'' y al dar clic sobre Ã©l descargarse el archivo con los archivos que no cumlen con las reglas o formato.

---

## Escenario: Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E9-PRE-GT-01.1
- Implementado: No

**Titulo:** Carga en el FrontEnd de la data de archivo Ramos definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que se muestran en el FrontEnd los datos de archivo Ramo cargado

**Precondiciones:**
La carga exitosa de archivo ''PRESUPUESTO Ramos GT''

**Datos:**
Archivo ''PRESUPUESTO Ramos GT'' definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para  cargar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E9-PRE-GT-01.2
- Implementado: No

**Titulo:** Carga en el FrontEnd de la data de archivo Cuentas Contables definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que se muestran en el FrontEnd los datos de archivo Cuentas Contables cargado

**Precondiciones:**
La carga exitosa de archivo ''PRESUPUESTO Cuentas Contables GT''

**Datos:**
Archivo ''PRESUPUESTO Cuentas Contables GT'' definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para  cargar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E9-PRE-GT-01.3
- Implementado: No

**Titulo:** Carga en el FrontEnd de la data de archivo Centros definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que se muestran en el FrontEnd los datos de archivo Centros cargado

**Precondiciones:**
La carga exitosa de archivo ''PRESUPUESTO Centros GT''

**Datos:**
Archivo ''PRESUPUESTO Centros GT'' definidos en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para  cargar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de  Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E9-PRE-GT-02.1
- Implementado: No

**Titulo:** Carga en el FrontEnd de la data de archivo Presupuesto definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que se muestran en el FrontEnd los datos de archivo Presupuesto cargado

**Precondiciones:**
La carga exitosa de archivo ''PRESUPUESTO AÃ±o GT''

**Datos:**
Archivo ''PRESUPUESTO AÃ±o GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento"> "Presupuesto".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Presupuesto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para  cargar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de  Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E9-PRE-GT-02.2
- Implementado: No

**Titulo:** Carga en el FrontEnd de la data de archivo Driver Subcanal definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que se muestran en el FrontEnd los datos de archivo Driver Subcanal cargado

**Precondiciones:**
La carga exitosa de archivo ''PRESUPUESTO Driver Subcanal GT''

**Datos:**
Archivo ''PRESUPUESTO Driver Subcanal GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento"> "Driver Subcanal".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Driver Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para  cargar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de  Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E9-PRE-GT-02.3
- Implementado: No

**Titulo:** Carga en el FrontEnd de la data de archivo Unidad de Cuenta GT definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que se muestran en el FrontEnd los datos de archivo Unidad de Cuenta cargado

**Precondiciones:**
La carga exitosa de archivo ''PRESUPUESTO Unidad de Cuenta GT''

**Datos:**
Archivo ''PRESUPUESTO Unidad de Cuenta GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento"> "Unidad de Cuenta".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Unidad de Cuenta", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para  cargar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de  Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E9-PRE-GT-02.4
- Implementado: No

**Titulo:** Carga en el FrontEnd de la data de archivo Maestro de Negocio y Embebidos definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que se muestran en el FrontEnd los datos de archivo Maestro de Negocio y Embebidos cargado

**Precondiciones:**
La carga exitosa de archivo ''PRESUPUESTO Maestro de Negocio y Embebidos GT''

**Datos:**
Archivo ''PRESUPUESTO Maestro de Negocio y Embebidos GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento"> "Maestro de Negocio y Embebidos".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para  cargar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de  Asignaciones de Gastos  TÃ©cnicos para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E9-PRE-GT-03.1
- Implementado: No

**Titulo:** Carga en el FrontEnd de la data de archivo MÃ©todo Subcanal definidos en el proceso de Asignaciones de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que se muestran en el FrontEnd los datos de archivo MÃ©todo Subcanal cargado

**Precondiciones:**
La carga exitosa de archivo ''PRESUPUESTO MÃ©todo Subcanal GT''

**Datos:**
Archivo ''PRESUPUESTO MÃ©todo Subcanal GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Asignaciones"> "MÃ©todo Subcanal".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar MÃ©todo Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para  cargar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: Validar que se muestran en el FrontEnd los datos de los archivos cargados en el  proceso de  Asignaciones de Gastos  TÃ©cnicos para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E9-PRE-GT-03.2
- Implementado: No

**Titulo:** Carga en el FrontEnd de la data de archivo Especiales NIIF definidos en el proceso de Asignaciones de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que se muestran en el FrontEnd los datos de archivo Especiales NIIF cargado

**Precondiciones:**
La carga exitosa de archivo ''PRESUPUESTO Especiales NIIF GT''

**Datos:**
Archivo ''PRESUPUESTO Especiales NIIF GT'' definidos en el proceso de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Asignaciones"> "Especiales NIIF".
3. El usuario presiona el botÃ³n "Cargar".
4. Se levanta el modal con titulo "Cargar Especiales NIIF", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado para  cargar.
5. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra una tabla cuyas columnas es la estructura de datos de documento. 
2- Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: Validar la correcta ejecuciÃ³n de flujo de descargas de los archivos cargados en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E10-PRE-GT-01.1
- Implementado: No

**Titulo:** Correcta ejecuciÃ³n de flujo de descargas de archivo Ramo de la ParametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
El botÃ³n descargar estÃ© activo

**Datos:**
Data cargada en la sesiÃ³n Ramo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. El usuario presiona el botÃ³n ''Descargar''

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: Validar la correcta ejecuciÃ³n de flujo de descargas de los archivos cargados en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E10-PRE-GT-01.2
- Implementado: No

**Titulo:** Correcta ejecuciÃ³n de flujo de descargas de archivo Cuentas Contables de la ParametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
El botÃ³n descargar estÃ© activo

**Datos:**
Data cargada en la sesiÃ³n Cuentas Contables de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. El usuario presiona el botÃ³n ''Descargar''

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: Validar la correcta ejecuciÃ³n de flujo de descargas de los archivos cargados en el  proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E10-PRE-GT-01.3
- Implementado: No

**Titulo:** Correcta ejecuciÃ³n de flujo de descargas de archivo Centros de la ParametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
El botÃ³n descargar estÃ© activo

**Datos:**
Data cargada en la sesiÃ³n Centros de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. El usuario presiona el botÃ³n ''Descargar''

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: Validar la correcta ejecuciÃ³n de flujo de descargas de los archivos cargados en el  proceso  Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E10-PRE-GT-02.1
- Implementado: No

**Titulo:** Correcta ejecuciÃ³n de flujo de descargas de archivo Presupuesto de Aprovisionamiento de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
El botÃ³n descargar estÃ© activo

**Datos:**
Data cargada en la sesiÃ³n Presupuesto de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento"> "Presupuesto".
3. El usuario presiona el botÃ³n ''Descargar''

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: Validar la correcta ejecuciÃ³n de flujo de descargas de los archivos cargados en el  proceso  Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E10-PRE-GT-02.2
- Implementado: No

**Titulo:** Correcta ejecuciÃ³n de flujo de descargas de archivo Driver Subcanal de Aprovisionamiento de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
El botÃ³n descargar estÃ© activo

**Datos:**
Data cargada en la sesiÃ³n Driver Subcanal de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento"> "Driver Subcanal".
3. El usuario presiona el botÃ³n ''Descargar''

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: Validar la correcta ejecuciÃ³n de flujo de descargas de los archivos cargados en el  proceso  Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E10-PRE-GT-02.3
- Implementado: No

**Titulo:** Correcta ejecuciÃ³n de flujo de descargas de archivo Unidad de Cuenta de Aprovisionamiento de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
El botÃ³n descargar estÃ© activo

**Datos:**
Data cargada en la sesiÃ³n Unidad de Cuenta de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento"> "Unidad de Cuenta".
3. El usuario presiona el botÃ³n ''Descargar''

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: Validar la correcta ejecuciÃ³n de flujo de descargas de los archivos cargados en el  proceso  Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E10-PRE-GT-02.4
- Implementado: No

**Titulo:** Correcta ejecuciÃ³n de flujo de descargas de archivo Maestro de Negocio y Embebidos de Aprovisionamiento de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
El botÃ³n descargar estÃ© activo

**Datos:**
Data cargada en la sesiÃ³n Maestro de Negocio y Embebidos de Aprovisionamiento de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento"> "Maestro de Negocio y Embebidos".
3. El usuario presiona el botÃ³n ''Descargar''

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: Validar la correcta ejecuciÃ³n de flujo de descargas de los archivos cargados en el  proceso de  Asignaciones de Gastos  TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E10-PRE-GT-03.1
- Implementado: No

**Titulo:** Correcta ejecuciÃ³n de flujo de descargas de archivo MÃ©todo Subcanal de Asignaciones de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
El botÃ³n descargar estÃ© activo

**Datos:**
Data cargada en la sesiÃ³n MÃ©todo Subcanal de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Asignaciones"> "MÃ©todo Subcanal".
3. El usuario presiona el botÃ³n ''Descargar''

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: Validar la correcta ejecuciÃ³n de flujo de descargas de los archivos cargados en el  proceso de  Asignaciones de Gastos  TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E10-PRE-GT-03.2
- Implementado: No

**Titulo:** Correcta ejecuciÃ³n de flujo de descargas de archivo Especiales NIIF de Asignaciones de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Verificar la correcta ejecuciÃ³n de flujo de descargas

**Precondiciones:**
El botÃ³n descargar estÃ© activo

**Datos:**
Data cargada en la sesiÃ³n Especiales NIIF de Asignaciones de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario selecciona de menÃº lateral "Asignaciones"> "Especiales NIIF".
3. El usuario presiona el botÃ³n ''Descargar''

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: Validar que el archivo descargado en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnico no tenga pÃ©rdida de informaciÃ³n para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E11-PRE-GT-01.1
- Implementado: No

**Titulo:** Validar la permanencia de la informaciÃ³n en el archivo Ramo descargados en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que el archivo descargado mantenga la permanencia de informaciÃ³n cargada inicialmente

**Precondiciones:**
Descarga exitosa de archivo de motor.

**Datos:**
- Data cargada en Ramo de la ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto.
- Orden de las cabeceras de archivo Ramo.
- Cantidad de registro mostrado en el Front de sistema

**Pasos:**
1. El usuario accede a la carpeta descarga de su PC.
2. Abre el archivo Ramo de parametrizaciÃ³n de Gastos TÃ©cnicos  descargado que va a validar.
3. PRESUPUESTOiza una comparaciÃ³n de la informaciÃ³n cargada en el motor y la de archivo local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: Validar que el archivo descargado en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnico no tenga pÃ©rdida de informaciÃ³n para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E11-PRE-GT-01.2
- Implementado: No

**Titulo:** Validar la permanencia de la informaciÃ³n en el archivo Cuentas Contables descargados en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que el archivo descargado mantenga la permanencia de informaciÃ³n cargada inicialmente

**Precondiciones:**
Descarga exitosa de archivo de motor.

**Datos:**
- Data cargada en Cuentas Contables de la ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto.
- Orden de las cabeceras de archivo Cuentas Contables.
- Cantidad de registro mostrado en el Front de sistema

**Pasos:**
1. El usuario accede a la carpeta descarga de su PC.
2. Abre el archivo Cuentas Contables de parametrizaciÃ³n de Gastos TÃ©cnicos  descargado que va a validar.
3. PRESUPUESTOiza una comparaciÃ³n de la informaciÃ³n cargada en el motor y la de archivo local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: Validar que el archivo descargado en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnico no tenga pÃ©rdida de informaciÃ³n para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E11-PRE-GT-01.3
- Implementado: No

**Titulo:** Validar la permanencia de la informaciÃ³n en el archivo Centros descargados en el proceso de ParametrizaciÃ³n de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que el archivo descargado mantenga la permanencia de informaciÃ³n cargada inicialmente

**Precondiciones:**
Descarga exitosa de archivo de motor.

**Datos:**
- Data cargada en Centros de la ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto.
- Orden de las cabeceras de archivo Centros.
- Cantidad de registro mostrado en el Front de sistema

**Pasos:**
1. El usuario accede a la carpeta descarga de su PC.
2. Abre el archivo Centros de parametrizaciÃ³n de Gastos TÃ©cnicos  descargado que va a validar.
3. PRESUPUESTOiza una comparaciÃ³n de la informaciÃ³n cargada en el motor y la de archivo local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: Validar que el archivo descargado en el  proceso de Aprovisionamiento de Gastos TÃ©cnico no tenga pÃ©rdida de informaciÃ³n para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E11-PRE-GT-02.1
- Implementado: No

**Titulo:** Validar la permanencia de la informaciÃ³n en el archivo Presupuesto descargados en el  proceso de Aprovisionamiento de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que el archivo descargado mantenga la permanencia de informaciÃ³n cargada inicialmente

**Precondiciones:**
Descarga exitosa de archivo de motor.

**Datos:**
- Data cargada en Presupuesto de Aprovisionamientos de Gastos TÃ©cnicos para Presupuesto.
- Orden de las cabeceras de archivo Presupuesto.
- Cantidad de registro mostrado en el Front de sistema

**Pasos:**
1. El usuario accede a la carpeta descarga de su PC.
2. Abre el archivo Presupuesto de parametrizaciÃ³n de Gastos TÃ©cnicos  descargado que va a validar.
3. PRESUPUESTOiza una comparaciÃ³n de la informaciÃ³n cargada en el motor y la de archivo local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: Validar que el archivo descargado en el  proceso de Aprovisionamiento de Gastos TÃ©cnico no tenga pÃ©rdida de informaciÃ³n para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E11-PRE-GT-02.2
- Implementado: No

**Titulo:** Validar la permanencia de la informaciÃ³n en el archivo Driver Subcanal descargados en el  proceso de Aprovisionamiento de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que el archivo descargado mantenga la permanencia de informaciÃ³n cargada inicialmente

**Precondiciones:**
Descarga exitosa de archivo de motor.

**Datos:**
- Data cargada en Driver Subcanal de Aprovisionamientos de Gastos TÃ©cnicos para Presupuesto.
- Orden de las cabeceras de archivo Driver Subcanal.
- Cantidad de registro mostrado en el Front de sistema

**Pasos:**
1. El usuario accede a la carpeta descarga de su PC.
2. Abre el archivo Driver Subcanal de parametrizaciÃ³n de Gastos TÃ©cnicos  descargado que va a validar.
3. PRESUPUESTO  una comparaciÃ³n de la informaciÃ³n cargada en el motor y la de archivo local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: Validar que el archivo descargado en el  proceso de Aprovisionamiento de Gastos TÃ©cnico no tenga pÃ©rdida de informaciÃ³n para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E11-PRE-GT-02.3
- Implementado: No

**Titulo:** Validar la permanencia de la informaciÃ³n en el archivo Unidad de Cuenta GT  descargados en el  proceso de Aprovisionamiento de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que el archivo descargado mantenga la permanencia de informaciÃ³n cargada inicialmente

**Precondiciones:**
Descarga exitosa de archivo de motor.

**Datos:**
- Data cargada en Unidad de Cuenta GT  de Aprovisionamientos de Gastos TÃ©cnicos para Presupuesto.
- Orden de las cabeceras de archivo Unidad de Cuenta GT .
- Cantidad de registro mostrado en el Front de sistema

**Pasos:**
1. El usuario accede a la carpeta descarga de su PC.
2. Abre el archivo Unidad de Cuenta GT  de parametrizaciÃ³n de Gastos TÃ©cnicos  descargado que va a validar.
3. PRESUPUESTOiza una comparaciÃ³n de la informaciÃ³n cargada en el motor y la de archivo local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: Validar que el archivo descargado en el  proceso de Aprovisionamiento de Gastos TÃ©cnico no tenga pÃ©rdida de informaciÃ³n para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E11-PRE-GT-02.4
- Implementado: No

**Titulo:** Validar la permanencia de la informaciÃ³n en el archivo Maestro de Negocio y Embebidos descargados en el  proceso de Aprovisionamiento de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que el archivo descargado mantenga la permanencia de informaciÃ³n cargada inicialmente

**Precondiciones:**
Descarga exitosa de archivo de motor.

**Datos:**
- Data cargada en Maestro de Negocio y Embebidos de Aprovisionamientos de Gastos TÃ©cnicos para Presupuesto.
- Orden de las cabeceras de archivo Maestro de Negocio y Embebidos.
- Cantidad de registro mostrado en el Front de sistema

**Pasos:**
1. El usuario accede a la carpeta descarga de su PC.
2. Abre el archivo Maestro de Negocio y Embebidos de parametrizaciÃ³n de Gastos TÃ©cnicos  descargado que va a validar.
3. PRESUPUESTOiza una comparaciÃ³n de la informaciÃ³n cargada en el motor y la de archivo local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: Validar que el archivo descargado en el  proceso de Asignaciones de Gastos TÃ©cnico no tenga pÃ©rdida de informaciÃ³n para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E11-PRE-GT-03.1
- Implementado: No

**Titulo:** Validar la permanencia de la informaciÃ³n de archivo MÃ©todo Subcanal descargado en el  proceso de Asignaciones de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que el archivo descargado mantenga la permanencia de informaciÃ³n cargada inicialmente

**Precondiciones:**
Descarga exitosa de archivo de motor.

**Datos:**
- Data cargada en MÃ©todo Subcanal de Aprovisionamientos de Gastos TÃ©cnicos para Presupuesto.
- Orden de las cabeceras de archivo MÃ©todo Subcanal.
- Cantidad de registro mostrado en el Front de sistema

**Pasos:**
1. El usuario accede a la carpeta descarga de su PC.
2. Abre el archivo MÃ©todo Subcanal de parametrizaciÃ³n de Gastos TÃ©cnicos  descargado que va a validar.
3. PRESUPUESTOiza una comparaciÃ³n de la informaciÃ³n cargada en el motor y la de archivo local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: Validar que el archivo descargado en el  proceso de Asignaciones de Gastos TÃ©cnico no tenga pÃ©rdida de informaciÃ³n para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E11-PRE-GT-03.2
- Implementado: No

**Titulo:** Validar la permanencia de la informaciÃ³n de archivo Especiales NIIF descargado en el  proceso de Asignaciones de Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Validar que el archivo descargado mantenga la permanencia de informaciÃ³n cargada inicialmente

**Precondiciones:**
Descarga exitosa de archivo de motor.

**Datos:**
- Data cargada en Especiales NIIF de Aprovisionamientos de Gastos TÃ©cnicos para Presupuesto.
- Orden de las cabeceras de archivo Especiales NIIF.
- Cantidad de registro mostrado en el Front de sistema

**Pasos:**
1. El usuario accede a la carpeta descarga de su PC.
2. Abre el archivo Especiales NIIF de parametrizaciÃ³n de Gastos TÃ©cnicos  descargado que va a validar.
3. PRESUPUESTOiza una comparaciÃ³n de la informaciÃ³n cargada en el motor y la de archivo local.

**Resultado esperado:**
1-Verificar que el archivo descargado mantenga la estructura de las columnas.  
2-validar la permanencia de los datos cargados inicialmente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos descargados en ParametrizaciÃ³n de Tecnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E71-PRE-GT-01.1
- Implementado: No

**Titulo:** Validar la carga de archivo de Ramo descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:**
Validar que el archivo descargado se pueda cargar satisfactoriamente para esta pantalla

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo Ramo debe haberse descargado anteriormente en el flujo de esta pantalla.

**Datos:**
Archivo ''PRESUPUESTO Ramos GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. El usuario presiona el botÃ³n Â¨DescargarÂ¨, 
4. El usuario presiona el botÃ³n Â¨RecargarÂ¨, 
5. Se levanta el modal con tÃ­tulo "Cargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para cargar.
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo PRESUPUESTO Ramo ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos descargados en ParametrizaciÃ³n de Tecnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E71-PRE-GT-01.2
- Implementado: No

**Titulo:** Validar la carga de archivo de Cuentas Contables descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:**
Validar que el archivo descargado se pueda cargar satisfactoriamente para estÃ¡ pantalla

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo Cuentas Contables debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
Archivo ''PRESUPUESTO Cuentas Contables GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. El usuario presiona el botÃ³n Â¨DescargarÂ¨, 
4. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
5. Se levanta el modal con titulo "Cargar Cuentas Contables", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para cargar.
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo PRESUPUESTO Cuentas Contables ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos descargados en ParametrizaciÃ³n de Tecnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E71-PRE-GT-01.3
- Implementado: No

**Titulo:** Validar la carga de archivo de Centros descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:**
Validar que el archivo descargado se pueda cargar satisfactoriamente para estÃ¡ pantalla

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo Centros debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
Archivo ''PRESUPUESTO Centros GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. El usuario presiona el botÃ³n Â¨DescargarÂ¨, 
4. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
5. Se levanta el modal con titulo "Cargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para cargar.
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo PRESUPUESTO Centros  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos descargados en Aprovisionamiento de Tecnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E71-PRE-GT-02.1
- Implementado: No

**Titulo:** Validar la carga de archivo de Presupuesto descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:**
Validar que el archivo descargado se pueda cargar satisfactoriamente para estÃ¡ pantalla

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo Presupuesto debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
Archivo ''PRESUPUESTO GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Presupuesto".
3. El usuario presiona el botÃ³n Â¨DescargarÂ¨, 
4. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
5. Se levanta el modal con titulo "Cargar Presupuesto", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para cargar.
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo Presupuesto  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos descargados en Aprovisionamiento de Tecnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E71-PRE-GT-02.2
- Implementado: No

**Titulo:** Validar la carga de archivo de Driver Subcanal descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:**
Validar que el archivo descargado se pueda cargar satisfactoriamente para estÃ¡ pantalla

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo Driver Subcanal debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
Archivo ''PRESUPUESTO Driver Subcanal GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
3. El usuario presiona el botÃ³n Â¨DescargarÂ¨, 
4. El usuario presiona el botÃ³n Â¨CargarÂ¨,
5. Se levanta el modal con titulo "Cargar Driver Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para cargar.
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo PRESUPUESTO Driver Subcanal  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos descargados en Aprovisionamiento de Tecnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E71-PRE-GT-02.3
- Implementado: No

**Titulo:** Validar la carga de archivo de Unidad de Cuenta GT descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:**
Validar que el archivo descargado se pueda cargar satisfactoriamente para estÃ¡ pantalla

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo Unidad de Cuenta GT debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
Archivo ''PRESUPUESTO Unidad de Cuenta GT GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. El usuario presiona el botÃ³n Â¨DescargarÂ¨, 
4. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
5. Se levanta el modal con titulo "Cargar Unidad de Cuenta GT", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para cargar.
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo PRESUPUESTO Unidad de Cuenta GT  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos descargados en Aprovisionamiento de Tecnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E71-PRE-GT-02.4
- Implementado: No

**Titulo:** Validar la carga de archivo de Maestro de Negocio y Embebidos descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:**
Validar que el archivo descargado se pueda cargar satisfactoriamente para estÃ¡ pantalla

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo Maestro de Negocio y Embebidos debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
Archivo ''PRESUPUESTO Maestro Embebido GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona el botÃ³n Â¨DescargarÂ¨, 
4. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
5. Se levanta el modal con titulo "Cargar Maestro de Negocio y Embebidos", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para cargar.
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo.

El archivo PRESUPUESTO Maestro de Negocio y Embebidos  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos descargados en AsignaciÃ³n de Tecnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E71-PRE-GT-03.1
- Implementado: No

**Titulo:** Validar la carga de archivo de MÃ©todo Subcanal descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:**
Validar que el archivo descargado se pueda cargar satisfactoriamente para estÃ¡ pantalla

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo MÃ©todo Subcanal debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
Archivo ''PRESUPUESTO MÃ©todo Subcanal GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. El usuario presiona el botÃ³n Â¨DescargarÂ¨, 
4. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
5. Se levanta el modal con titulo "Cargar MÃ©todo Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para cargar.
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo PRESUPUESTO MÃ©todo Subcanal  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: ValidaciÃ³n de la carga de los archivos descargados en AsignaciÃ³n de Tecnicos para el flujo de Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E71-PRE-GT-03.2
- Implementado: No

**Titulo:** Validar la carga de archivo de Especiales NIIF descargado en la parametrizaciÃ³n de Gastos TÃ©cnicos

**Descripcion:**
Validar que el archivo descargado se pueda cargar satisfactoriamente para estÃ¡ pantalla

**Precondiciones:**
1- El usuario registrado tenga el rol de Gestor de Gastos TÃ©cnicos
2- El archivo Especiales NIIF debe haberse descargado anteriormente en el flujo de estÃ¡ pantalla.

**Datos:**
Archivo ''PRESUPUESTO Especiales NIIF GT'' descargado en el proceso de descarga de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos
2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona el botÃ³n Â¨DescargarÂ¨, 
4. El usuario presiona el botÃ³n Â¨CargarÂ¨, 
5. Se levanta el modal con titulo "Cargar Especiales NIIF", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo descargado anteriormente para cargar.
6. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El sistema carga el archivo. 

El archivo PRESUPUESTO Especiales NIIF  ha sido cargado satisfactoriamente. Con el mensaje  Â¡Listo! El archivo se cargÃ³ correctamente.

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-01.01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Ramos definido en la ParametrizaciÃ³n de  flujo de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que se pueda agregar un nuevo registro desde el modal "Agregar Ramo" de Ramo

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3- Los campos cÃ³digo ramo y descriÃ§iÃ³n son obligatorios
4- Los valores de cÃ³digo Ramo es Ãºnico.
5- Un Ramo puede tener mÃºltiples Rubros
6-CÃ³digo Ramo: -El CodRamo debe ser un valor de 1 o 2 posiciones, que pueden ser nÃºmeros o letras - Se acepta el valor especial 'SIN RAMO'. - Si el CodRamo de entrada tiene 1 Solo dÃ­gito, el sistema debe aÃ±adir un '0' a la izquierda para estandarizar a un formato de 2 dÃ­gitos (ej. '7' se convierte en '07').

**Datos:**
Campos de formulario

CÃ³digo de Ramo: [12 o SIN RAMO]
DescripciÃ³n de Ramo: Texto. Ej: INCENDIO
Rubro Texto, Ej: LÃ­neas ALIADAS INCENDIO

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos. 
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Ramo".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de exito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-01.01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Cuentas Contables definido en la ParametrizaciÃ³n de  flujo de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que se pueda agregar un nuevo registro desde el modal "Agregar Cuenta Contable" de Cuenta Contable

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3- Los campos CÃ³digo cuenta contable, DescripciÃ³n cuenta contable, NIIF 17 Atribuible, NIIF 17 Tipo, Concepto, Concepto N1, Concepto N2, Concepto N3 son obligatorios
4- Los valores de cÃ³digo Cuenta Contable  debe ser Ãºnico
5- El CÃ³digo de Ramo debe estar creado en el maestro de Ramo
6-NIIF 17 Tipo: Valores permitidos: 'GM' (Gastos de Mantenimiento) o 'GA' (Gastos de AdquisiciÃ³n).
7- La cuenta contable Los 2 primeros dÃ­gitos deben ser 46,47,56,57 el 3er dÃ­gito 1 o 2; el 4to dÃ­gito entre 0 y 9 o una letra; y los bloques siguientes entre 01 y 99 o la combinaciÃ³n de letras, por ejemplo OO

**Datos:**
Campos de formulario

- Cuenta Contable: AlfanumÃ©rico y puntos Ej: 46.1.7.40.09.10, 47.1.7.40.09.10
- Nombre Cuenta Contable: Texto. Ej: BONOS ASESORES - PROV. ESSALUD
- CÃ³digo ramo: Se selecciona el CÃ³digo ramo correspondiente [01, 44]
- Tipo de cuenta:  Se selecciona el tipo de cuenta correspondiente [MT, RT, IF, GG]
- Tipo NIIF 17 CBR: Se selecciona el Tipo NIIF 17 CBR  [GS, GI]
- NIIF 17 Atribuible: Se selecciona el  NIIF 17 Atribuible correspondiente [Atribuible, No Atribuible]
- NIIF 17 Tipo: Se selecciona el NIIF 17 Tipo correspondiente  [GM,GA]
- CÃ³digo Concepto:  NN.NN.NN  Ej: 10.01.05, 10.14.00
- Concepto N1: Texto Ej: Egresos TÃ©cnicos netos
- Concepto N2: Texto. Ej; Compras
- Concepto N3: Texto. Ej: Seguro Social

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.  
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Cuentas Contables".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de exito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-01.01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Centros definido en la ParametrizaciÃ³n de  flujo de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que se pueda agregar un nuevo registro desde el modal "Agregar Centros" de Centros

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3- Los campos Negocio, Centro de Costo, Nombre Centro de costo, Nombre LÃ­nea, Nombre producto, Nombre canal, Nombre subcanal, Tipo son obligatorios
4- Las LÃ­nea, Producto, Canal y Subcanal deben estar creados en su catÃ¡logo
5- El Negocio debe ser PPS o PVI; otros valores son rechazados.
6- Cuando el Centro es de tipo DIRECTO, debe existir una combinaciÃ³n vÃ¡lida de LÃ­nea, Producto, Canal y Subcanal en los catÃ¡logos maestros.
7- Todos los cÃ³digos de LÃ­nea, Producto, Canal y Subcanal deben existir en catÃ¡logo. 
8- Cuando el campo TIPO viene vacÃ­o, el Centro NO se considera DIRECTO.
9- Los catÃ¡logos maestros de LÃ­nea, Producto, Canal y Subcanal se encuentran previamente configurados, activos y con sus relaciones jerÃ¡rquicas definidas (Productoâ€“LÃ­nea y Subcanalâ€“Canal).

**Datos:**
Campos de formulario

- Negocio: Se selecciona el Negocio Correspondiente [PPS, PVI]
- Centro de Costo: Se selecciona el centro de costos correspondiente 
- Nombre Centro de Costo: Se autocompleta segÃºn el centro de costo  
- CÃ³digo lÃ­nea: Se selecciona el CÃ³digo LÃ­nea correspondiente  EJ: SEPE, VGRP
- LÃ­nea: Se autocompleta segÃºn el CÃ³digo seleccionado
- CÃ³digo producto: Se selecciona el CÃ³digo Producto correspondiente EJ: SEPE001, VGRP001
- Producto: Se autocompleta segÃºn el CÃ³digo seleccionado
- CÃ³digo canal: Se selecciona el CÃ³digo Canal correspondiente EJ: COR, CCO
- Canal: Se autocompleta segÃºn el CÃ³digo seleccionado
- CÃ³digo subcanal: Se selecciona el CÃ³digo Subcanal correspondiente Ej: COR004,CCO006
- Subcanal: Se autocompleta segÃºn el CÃ³digo seleccionado
- Tipo: Se selecciona el tipo correspondiente: [DIRECTOS, INDIRECTOS]
- Tipo emisiÃ³n: Se selecciona el tipo de emisiÃ³n correspondiente:[DIGITAL, TRADICIONAL]
- Tipo negocio:Se selecciona el tipo de negocio correspondiente:[PERSONA, EMPRESA]
- Tipo producto: Se selecciona el tipo correspondiente: [MODULAR, NO MODULAR]

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.  
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Centros".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de exito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-01.02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Unidad de cuenta GT  definido en el Aprovisionamiento de  flujo de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que se pueda agregar un nuevo registro desde el modal "Agregar Unidad de cuenta GT" de Unidad de cuenta GT

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3- El campo Prioridad es obligatorio
4- Los campos Unidad de Cuenta, Ramo, Producto y Subcanal deben existir y estar previamente registrados en sus respectivos catÃ¡logos maestros.
5- En el valor de factor debe usarse punto para indicar decimales. 
6- El campo Prioridad es obligatorio y debe contener un valor numÃ©rico entre 1 y 4.
7- El CÃ³digo de Concepto exista en el catÃ¡logo de conceptos dentro de " Cuentas Contables"
8- Para un mismo registro con el mismo CÃ³digo de Concepto, Producto y Subcanal, la Unidad de Cuenta debe ser Ãºnica y la suma de sus factores debe ser igual a 1. 
9. El valor de campo DÃ­gito de la Cuenta debe ser 44 o 54, que corresponden a las cuentas contables aplicables para Gastos TÃ©cnicos. En caso contrario,debe mostrar un mensaje de error y no permitir el registro.
10- Los campos Unidad de Cuenta, Ramo, Producto y Subcanal deben existir y estar previamente registrados en sus respectivos catÃ¡logos maestros.
11- EL valor de Factor debe estar entre 0 y 1

**Datos:**
Campos de formulario

- Prioridad: Seleccionar la Prioridad correspondiente [1 o 4]
- CÃ³digo Concepto: Se selecciona el CÃ³digo concepto correspondiente Ej:  07.04.00
- Moneda: Se selecciona la moneda correspondiente [PEN,USD]
- DÃ­gito de Cuenta: Seleccionar el DÃ­gito de Cuenta correspondiente [44 o 54]
- CÃ³digo Ramo: Se selecciona el CÃ“digo Ramo correspondiente Ej: [01,70]
- Producto: Se selecciona el Producto correspondiente Ej: [AFP003]
- Subcanal: Se selecciona el subcanal  correspondiente Ej; [AFPS2]
- Unidad de Cuenta: Se selecciona la Unidad de cuenta correspondiente Ej: IFRS_GRP_2021_UNIQUE SISCO2_PEN_PAA_Ceded_Prof
- Factor: [1,0.234,-10]

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos. 
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Unidad de Cuenta GT".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de exito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-01.02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Maestro de Negocio y Embebidos  definido en el Aprovisionamiento de  flujo de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que se pueda agregar un nuevo registro desde el modal "Agregar MÃ©todo Subcanal" de MÃ©todo Subcanal

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3- Los campos Negocio, LÃ­nea, Producto son obligatorios
4- Se debe validar que los valores de LÃ­nea, Producto, Canal y Subcanal existan en sus respectivos catÃ¡logos maestros. AdemÃ¡s, se debe verificar que el Producto estÃ© asociado a la LÃ­nea y que el Subcanal estÃ© asociado al Canal correspondiente.
5- Los campos Embebidos y Tipo de Negocio son excluyentes: si Embebidos tiene valor, Tipo de Negocio debe estar vacÃ­o, y viceversa.

**Datos:**
Campos de formulario

- Negocio: [GENERALES, VIDA]
- LÃ­nea: Se selecciona la LÃ­nea correspondiente. Ej: ASISTENCIA MÃ‰DICA
- Producto: Se selecciona el  producto correspondiente Ej: INDEMNIZATORIO INDIVIDUAL
- Canal: Se selecciona el canal correspondiente Ej: ALIANZAS]
- Subcanal: Se selecciona el subcanal correspondiente Ej:  FALABELLA
- Embebido: [Embebido, No embebido]
- Tipo Negocio: [EMPRESA, PERSONA]

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos. 
2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar MÃ©todo Subcanal.                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de exito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-01.03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en MÃ©todo Subcanal  definido en el Asignaciones de  flujo de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que se pueda agregar un nuevo registro desde el modal "Agregar/Editar MÃ©todo Productor" de MÃ©todo Producto

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3- Todos los campos son obligatorios
4- El CÃ³digo de Concepto, Ramo, LÃ­nea, Producto, Canal y MÃ©todo debe estar previamente configurado en sus catÃ¡logos
5- Los campos son obligatorios
6- Debe existir correspondencia vÃ¡lida entre CÃ³digo de LÃ­nea y Nombre de LÃ­nea, asÃ­ como entre CÃ³digo de Producto y Nombre de Producto.
7- Debe existir una relaciÃ³n vÃ¡lida entre la LÃ­nea y el Producto (el Producto debe estar asociado a la LÃ­nea correspondiente).
8- La combinaciÃ³n de los campos CÃ³digo de Concepto, CÃ³digo de Ramo, CÃ³digo de LÃ­nea, LÃ­nea, CÃ³digo de Grupo de Producto, Grupo de Producto, CÃ³digo de Canal y CÃ³digo de MÃ©todo debe ser Ãºnica. No se permite registrar mÃ¡s de un registro con la misma combinaciÃ³n de estos valores.

**Datos:**
Campos de formulario: 

-CÃ³digo lÃ­nea: Se selecciona la LÃ­nea correspondiente Ej: AMED
-LÃ­nea: Se autocompleta segÃºn el CÃ³digo seleccionado 
-CÃ³digo producto:Se selecciona el producto correspondiente Ej: AMED019
-Producto: Se autocompleta segÃºn el CÃ³digo seleccionado 
-CÃ³digo canal: Se selecciona el CÃ³digo canal correspondiente Ej: CCO
-CÃ³digo Concepto: Se selecciona el CÃ³digo concepto correspondiente Ej: 10.22.08
-CÃ³digo Ramo: Se selecciona el ramo correspondiente Ej: 64
-CÃ³digo mÃ©todo: Se selecciona el MÃ©todo correspondiente Ej: GT2SCCCO001

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos. 
2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar MÃ©todo Subcanal.                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de exito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-01.03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en Especiales NIIF  definido en el Asignaciones de  flujo de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que se pueda agregar un nuevo registro desde el modal "Agregar  Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3- El CÃ³digo de Concepto, LÃ­nea, Producto, Canal, Subcanal y MÃ©todo debe estar previamente configurado en sus catÃ¡logos
4-Deben existir datos vÃ¡lidos y activos en los catÃ¡logos de LÃ­neas, Productos, Canales, Subcanales, Conceptos y Centros de Costo
5- Los campos CÃ³digo LÃ­nea, LÃ­nea, Porcentaje y Tipo DistribuciÃ³n son obligatorios.

**Datos:**
Campos de formulario: 

- CÃ³digo LÃ­nea: Se selecciona el concepto correspondiente Ej: LA 
- LÃ­nea: Se autocompleta segÃºn el CÃ³digo seleccionado
-CÃ³digo Producto: Se selecciona el concepto correspondiente Ej: LPER019 
- Producto: Se autocompleta segÃºn el CÃ³digo seleccionado
- CÃ³digo Canal: Se selecciona el concepto correspondiente Ej: DFV
- Canal: Se autocompleta segÃºn el CÃ³digo seleccionado
- Codsubcanal: Se selecciona el concepto correspondiente Ej: DFV008 
- Subcanal: Se autocompleta segÃºn el CÃ³digo seleccionado
- MÃ©todo ValoraciÃ³n: [0 (PAA), 1 (BBVA/VFA).]
- Porcentaje: [100, 1,2 , 65]
- DÃ­gito de cuenta: [44,54]
- Tipo DistribuciÃ³n: [PÃ“LIZAS, UOA]
- NIIF 17 Atribuible: [SI Atribuible' o NO 'No Atribuible'.]
- NIIF 17 Tipo:  [GM, GA]
- Concepto N1:Tipo texto  Ej: Egresos TÃ©cnicos netos
- Concepto N2: Tipo texto Ej: Servicios
- CÃ³digo Concepto: Se selecciona el concepto correspondiente Ej: 10.14.00
- CECO: se selecciona el CECO correspondiente Ej: 06.99.80

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos. 
2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Especiales NIIF.                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro ha sido agregado correctamente.

1-Se muestra el mensaje de exito Â¡Hecho! El registro se agregÃ³ sin problemas
2-Se agrega correctamente cada dato en la tabla
3-Se registra la fecha y la hora

---

## Escenario: Validar las reglas de negocio al agregar un registro en el  flujo de Gasto TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-02.01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Ramo de la ParametrizaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas de negocio  para Presupuesto

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Ramo" de Ramo

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
Campos de formulario

Juego de Dato 1:
- Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla Ramos mostrada en el front

Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-GT-01.01.1

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos. 
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Ramo".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la informaciÃ³n o edita el registro existente

---

## Escenario: Validar las reglas de negocio al agregar un registro en el  flujo de Gasto TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-02.01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Cuentas Contables de la ParametrizaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas definidas de negocio  para Presupuesto

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Cuenta Contable" de Cuentas Contables

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
Campos de formulario

Juego de Dato 1:
- Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla Cuenta Contable mostrada en el front

Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-GT-01.01.2

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos. 
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Cuentas Contables".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar  Cuentas Contables".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la informaciÃ³n o edita el registro existente

---

## Escenario: Validar las reglas de negocio al agregar un registro en el  flujo de Gasto TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-02.01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Centros de la ParametrizaciÃ³n de Gastos TÃ©cnicos porque no cumple con las reglas definidas de negocio  para Presupuesto

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Centro" de Centros

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
Campos de formulario

Juego de Dato 1:
- Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla centros mostrada en el front

Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-GT-01.01.3

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos. 
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Centros".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la informaciÃ³n o edita el registro existente

---

## Escenario: Validar las reglas de negocio al agregar un registro en el  flujo de Gasto TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-GT-PRE-02.02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Unidad de cuenta GT de Aprovisionamiento de Gastos TÃ©cnicos porque no cumple con las reglas definidas de negocio  para Presupuesto

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Unidad de Cuenta GT" de Unidad de Cuenta GT

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
Campos de formulario

Juego de Dato 1:
- Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla Unidad de Cuenta GT mostrada en el front

Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-GT-01.02.1

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Unidad de Cuenta GT".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la informaciÃ³n o edita el registro existente

---

## Escenario: Validar las reglas de negocio al agregar un registro en el  flujo de Gasto TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-GT-PRE-02.02.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Maestro de Negocios y Embebidos de Aprovisionamiento de Gastos TÃ©cnicos porque no cumple con las reglas definidas de negocio  para Presupuesto

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Maestro de Negocio y Embebidos" de Maestro de Negocio y Embebidos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
Campos de formulario

Juego de Dato 1:
- Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla Maestro de negocios Embebidos mostrada en el front

Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-GT-01.02.2

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos. 
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Maestro de Negocio y Embebidos".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la informaciÃ³n o edita el registro existente

---

## Escenario: Validar las reglas de negocio al agregar un registro en el  flujo de Gasto TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-02.03.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en MÃ©todo Subcanal de la Asignaciones de Gastos TÃ©cnicos porque no cumple con las reglas definidas de negocio para Presupuesto

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar MÃ©todo Subcanal" de MÃ©todo Subcanal

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
Campos de formulario

Juego de Dato 1:
- Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla MÃ©todo Subcanal mostrada en el front

Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-GT-01.03.1.

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar MÃ©todo Subcanal".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la informaciÃ³n o edita el registro existente

---

## Escenario: Validar las reglas de negocio al agregar un registro en el  flujo de Gasto TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-02.03.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro en Especiales NIIF  de la Asignaciones de Gastos TÃ©cnicos porque no cumple con las reglas definidas de negocio para Presupuesto

**Descripcion:**
Validar que no se puede agregar un nuevo registro porque no cumplen con las reglas definidas de negocio desde el modal "Agregar Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.
3-Existe al menos un registro, el cual serÃ¡ utilizado como referencia para ingresar datos idÃ©nticos en el formulario.

**Datos:**
Campos de formulario

Juego de Dato 1:
- Los valores para cada campo serÃ¡n idÃ©nticos a los mostrado en el registro seleccionado de la tabla Especiales NIIF mostrada en el front

Juego de Dato 2:
- Datos usados para para crear el registro en el CP E35-GT-01.03.3

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Especiales NIIF".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".

**Resultado esperado:**
El nuevo registro no ha sido agregado correctamente.

1- Se muestra el mensaje de error, El registro que intentas agregar ya existe en el sistema.
Por favor, verifica la informaciÃ³n o edita el registro existente

---

## Escenario: Validar el formato y campos obligatorios de formulario en un nuevo registro en el  flujo de Gasto TÃ©cnicos presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-03-01.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los Gasto TÃ©cnicos en el  flujo de  Ramo

**Descripcion:**
Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Ramo" de Ramo

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
Obligatoriedad
-Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.

 Obligatoriedad y Formato (Valores Incorrectos)

CÃ³digo de Ramo: X02, 000, VACIO, *?/(&
DescripciÃ³n de Ramo: 1231+=, [] RMA 12
Rubro: 123132

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Ramo".                             
5. No agrega InformaciÃ³n y deja campos vacÃ­os 
6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:

-CÃ³digo Ramo: ''El CÃ³digo Ramo es requerido'' / ''El CÃ³digo Ramo debe ser un valor numÃ©rico de 1 o 2 dÃ­gitos o el valor especial  ''SIN RAMO'' (Ej.: 7, 12, SIN RAMO).
-DescripciÃ³n Ramo: ''La DescripciÃ³n Ramo es requerida'' 

-No se habilita el campo Agregar

---

## Escenario: Validar el formato y campos obligatorios de formulario en un nuevo registro en el  flujo de Gasto TÃ©cnicos presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-03-01.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto TÃ©cnicos de Cuentas Contables

**Descripcion:**
Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Cuentas Contables" de Cuentas Contables

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
Obligatoriedad
-Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.

 Obligatoriedad y Formato (Valores Incorrectos)

- Cuenta Contable: LYTS_1213
- Nombre Cuenta Contable: 123CUENTA
- CÃ³digo Concepto: LAS_213331*

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Cuentas Contables".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Cuentas Contables".                             
5. No agrega InformaciÃ³n y deja campos vacÃ­os 
6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Toda combinaciÃ³n que no corresponda con:  

-CÃ³digo es requerido
-Ingrese un valor numÃ©rico entre 6 y 14 dÃ­gitos, separado por puntos y con formato NN.N.N.NN.NN.NN (Ej.: 44.1.7.40.09.10)..
-Nombre Cuenta Contable:  -Nombre es requerido
-CÃ³digo Ramo: CÃ³digo Ramo es requerido
-NIIF 17 Atribuible: NIIF 17 Atribuible es requerido
-NIIF 17 Tipo: NIIF 17 Tipo es requerido
-CÃ³digo Concepto: Concepto es requerido
-Concepto N1:  Concepto N1 es requerido
-Concepto N2:  Concepto N2 es requerido
-Concepto N3: Concepto N3 es requerido

-No se habilita el campo Agregar

---

## Escenario: Validar el formato y campos obligatorios de formulario en un nuevo registro en el  flujo de Gasto TÃ©cnicos presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-03-01.3
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto TÃ©cnicos de Centros

**Descripcion:**
Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Centros" de Centros

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
Obligatoriedad
-Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.

 Obligatoriedad y Formato (Valores Incorrectos)

- Centro de Costo: El campo no es Editable
- Nombre Centro de Costo: Se autocompleta segÃºn el centro de costo

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Centros".                             
5. No agrega InformaciÃ³n y deja campos vacÃ­os 
6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:

-Negocio: -Negocio requerido
-Centro de costo: Centro de costo es requerido
-Ingrese un CÃ³digo de Centro con el formato NN.NN.NN (Ej.: 01.02.03).es requerido
-CÃ³digo LÃ­nea: CÃ³digo LÃ­nea requerido
-CÃ³digo Producto: CÃ³digo Producto requerido
-CÃ³digo Canal: CÃ³digo Canal requerido
-CÃ³digo Subcanal: CÃ³digo Subcanal requerido
-Tipo: Tipo requerido

-No se habilita el campo Agregar

---

## Escenario: Validar el formato y campos obligatorios de formulario en un nuevo registro en el  flujo de Gasto TÃ©cnicos presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-03-02.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto TÃ©cnicos de Unidad de cuenta GT

**Descripcion:**
Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Unidad de cuenta GT" de Unidad de cuenta GT

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
Obligatoriedad
-Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Unidad de Cuenta GT".                             
5. No agrega InformaciÃ³n y deja campos vacÃ­os 
6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:

-CÃ³digo Subcanal: CÃ³digo Subcanal requerido
-Unidad de Cuenta: Unidad de Cuenta requerido
-Factor: Factor es requerido

-No se habilita el campo Agregar

---

## Escenario: Validar el formato y campos obligatorios de formulario en un nuevo registro en el  flujo de Gasto TÃ©cnicos presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-03-02.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto TÃ©cnicos de Maestro de Negocios y Embebidos

**Descripcion:**
Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Maestro de Negocios y Embebidos" de Maestro de Negocios y Embebidos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
Obligatoriedad
-Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocio y Embebidos".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Maestro de Negocio y Embebidos".                             
5. No agrega InformaciÃ³n y deja campos vacÃ­os 
6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:

-Negocio: Negocio requerido
-LÃ­nea: LÃ­nea requerido
-Producto: Producto requerido

-No se habilita el campo Agregar

---

## Escenario: Validar el formato y campos obligatorios de formulario en un nuevo registro en el  flujo de Gasto TÃ©cnicos presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-03-03.1
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto TÃ©cnicos de MÃ©todo Subcanal

**Descripcion:**
Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar MÃ©todo Subcanal" de MÃ©todo Subcanal

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
Obligatoriedad
-Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar MÃ©todo Subcanal".                             
5. No agrega InformaciÃ³n y deja campos vacÃ­os 
6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:

-Todos los campos son select y autocompletados. 
-CÃ³digo lÃ­nea requerido      
-CÃ³digo producto requerido          
-Nombre producto requerido
-CÃ³digo canal requerido
-Concepto es requerido
-CÃ³digo Ramo requerido
-CÃ³digo mÃ©todo requerido

-No se habilita el campo Agregar

---

## Escenario: Validar el formato y campos obligatorios de formulario en un nuevo registro en el  flujo de Gasto TÃ©cnicos presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-03-03.2
- Implementado: No

**Titulo:** Validar que no se pueda agregar un nuevo registro por error de formato de los campos en el  flujo de Gasto TÃ©cnicos de  Especiales NIIF

**Descripcion:**
Validar que no se puede agregar un nuevo registro por error de formato de los campos desde el modal "Agregar Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- La distribuciÃ³n estÃ¡ en estado creada.

**Datos:**
Obligatoriedad
-Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, interactuar con ellos y luego dejarlos vacÃ­os.

 Obligatoriedad y Formato (Valores Incorrectos)

- Porcentaje: DOS, 12%, 1,2342

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos. 
2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Especiales NIIF".                             
5. No agrega InformaciÃ³n y deja campos vacÃ­os 
6. El usuario agrega los campos incorrectamente

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y especÃ­ficos por campo, indicando el motivo de error, por ejemplo:


- Porcentaje: ''El Porcentaje es obligatorio'' 
''Ingrese un porcentaje vÃ¡lido con hasta 3 dÃ­gitos en la parte entera y hasta 6 en la parte decimal, separado por punto (Ej.: 22.563)''.
 
-Tpo DistribuciÃ³n: Tpo DistribuciÃ³n requerido

-No se habilitael campo agregar

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro pero al subir el archivo de perÃ­odo estÃ© se sobreescriba en el  flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-04-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al cargar el archivo perÃ­odo en el  flujo de comunes de  Ramo

**Descripcion:**
Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Ramo definido

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- Si hay data cargada, enviar mensaje de advertencia.
3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
Archivo ''PRESUPUESTO Ramos GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Ramo".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Ramo".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".   
7. Visualiza la informaciÃ³n de registro agregado en el front.  
8. El usuario presiona  el botÃ³n "Cargar".             
9. Se levanta el modal con tÃ­tulo "Cargar Ramo", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
 
 2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro pero al subir el archivo de perÃ­odo estÃ© se sobreescriba en el  flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-04-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al cargar el archivo perÃ­odo en el  flujo de comunes de  Cuentas Contables

**Descripcion:**
Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Cuentas Contables definido

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- Si hay data cargada, enviar mensaje de advertencia.
3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
Archivo ''PRESUPUESTO Cuentas Contables GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Cuentas contables".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Cuenta Contable".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".   
7. Visualiza la informaciÃ³n de registro agregado en el front.  
8. El usuario presiona  el botÃ³n "Cargar".             
9. Se levanta el modal con tÃ­tulo "Cargar Cuenta Contable", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
 
 2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro pero al subir el archivo de perÃ­odo estÃ© se sobreescriba en el  flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-04-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de agregar un nuevo registro en el  flujo de comunes de  Centros

**Descripcion:**
Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Centros definido

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- Si hay data cargada, enviar mensaje de advertencia.
3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
Archivo ''PRESUPUESTO Centros GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Centros".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Centro".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".   
7. Visualiza la informaciÃ³n de registro agregado en el front.  
8. El usuario presiona  el botÃ³n "Cargar".             
9. Se levanta el modal con tÃ­tulo "Cargar Centros", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
 
 2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro pero al subir el archivo de perÃ­odo estÃ© se sobreescriba en el  flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-04-02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al cargar el archivo perÃ­odo en el  flujo de comunes de Unidad de cuenta GT

**Descripcion:**
Validar que se sobreescribe el o los registros manuales existentes al subir el archivo  Unidad de cuenta GT definido

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- Si hay data cargada, enviar mensaje de advertencia.
3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
Archivo ''PRESUPUESTO Unidad de cuenta GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Unidad de cuenta GT".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".   
7. Visualiza la informaciÃ³n de registro agregado en el front.  
8. El usuario presiona  el botÃ³n "Cargar".             
9. Se levanta el modal con tÃ­tulo "Cargar Unidad de cuenta GT", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
 
 2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro pero al subir el archivo de perÃ­odo estÃ© se sobreescriba en el  flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-04-02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al cargar el archivo perÃ­odo en el  flujo de comunes de   Maestro de Negocios y Embebidos

**Descripcion:**
Validar que se sobreescribe el o los registros manuales existentes al subir el archivo Maestro de Negocios y Embebidos definido

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- Si hay data cargada, enviar mensaje de advertencia.
3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
Archivo ''PRESUPUESTO Maestro Negocio y Embebidos GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > " Maestro de Negocios y Embebidos".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Maestro de Negocios y Embebidos".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".   
7. Visualiza la informaciÃ³n de registro agregado en el front.  
8. El usuario presiona  el botÃ³n "Cargar".             
9. Se levanta el modal con tÃ­tulo "Cargar Maestro de Negocios y Embebidos", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
 
 2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro pero al subir el archivo de perÃ­odo estÃ© se sobreescriba en el  flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-04-03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al cargar el archivo perÃ­odo en el  flujo de comunes de  MÃ©todo Subcanal

**Descripcion:**
Validar que se sobreescribe el o los registros manuales existentes al subir el archivo MÃ©todo Subcanal definido

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- Si hay data cargada, enviar mensaje de advertencia.
3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
Archivo ''PRESUPUESTO MÃ©todo Subcanal GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Asignaciones" > " MÃ©todo Subcanal".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar MÃ©todo Subcanal".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".   
7. Visualiza la informaciÃ³n de registro agregado en el front.  
8. El usuario presiona  el botÃ³n "Cargar".             
9. Se levanta el modal con titulo "Cargar MÃ©todo Subcanal", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
 
 2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

## Escenario: Validar que el sistema pueda agregar un nuevo registro pero al subir el archivo de perÃ­odo estÃ© se sobreescriba en el  flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E35-PRE-GT-04-03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de sobreescribir un nuevo registro manual al cargar el archivo perÃ­odo en el  flujo de comunes de  Especiales NIIF

**Descripcion:**
Validar que se sobreescribe el o los registros manuales existentes al subir el archivo  Especiales NIIF definido

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- Si hay data cargada, enviar mensaje de advertencia.
3- Debe existir previamente un registro creado manualmente en el sistema

**Datos:**
Archivo ''PRESUPUESTO Especiales NIIF GT'' definido en el proceso de Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''
2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
3. El usuario presiona  el botÃ³n "Agregar".             
4. Se levanta el modal "Agregar Especiales NIIF".                             
5. El usuario completa los campos. 
6. El usuario presiona el botÃ³n Agregar".   
7. Visualiza la informaciÃ³n de registro agregado en el front.  
8. El usuario presiona  el botÃ³n "Cargar".             
9. Se levanta el modal con titulo "Cargar Especiales NIIF", el botÃ³n aceptar estÃ¡ deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
10. El botÃ³n aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
1- Se muestra un mensaje de alerta:Si sube un nuevo archivo, la informaciÃ³n previamente cargada serÃ¡ reemplazada. Â¿Desea continuar con la carga?
 
 2- La informaciÃ³n de archivo sobrescribe correctamente los datos que fueron ingresados manualmente, asegurando que la carga masiva tiene prioridad.

---

## Escenario: Validar que el sistema pueda editar un registro en el flujo de Gastos TÃ©cnicos  para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E36-PRE-GT-01-01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Ramo

**Descripcion:**
Validar que se pueda editar un nuevo registro desde el modal "Editar Ramo" de Ramo

**Precondiciones:**
1- El registro debe haber sido creado anteriormente. 
2- el usuario debe tener rol de Gestor de Gastos Tecnicos
3- Los campos cÃ³digo ramo y descriÃ§iÃ³n son obligatorios
4- Un Ramo puede tener mÃºltiples Rubros
5-Los campos de tipo autocompleta son Editables condicionados segÃºn el cÃ³digo asociado.

**Datos:**
Datos para los campos editables de formulario

- CÃ³digo Ramo:  SIN RAMO, 1, 44 
- DescripciÃ³n ramo: SIN RAMO, INCENDIO, DESHONESTIDAD
- Rubro: LINEAS ALIADAS INCENDIO, DESHONESTIDAD FRENTE A LA EMPRESA

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. Se levanta el modal "Editar  Ramo".                             
5. El usuario edita los campos
6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de exito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

## Escenario: Validar que el sistema pueda editar un registro en el flujo de Gastos TÃ©cnicos  para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E36-PRE-GT-01-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Cuentas Contables

**Descripcion:**
Validar que se pueda editar un nuevo registro desde el modal "Editar Cuentas Contables" de Cuentas Contables

**Precondiciones:**
1-El usuario debe tener rol de Gestor de Gastos Tecnicos
2-El registro de Cuenta Contable debe haber sido creado anteriormente.
3-El usuario debe tener permisos para editar registros de Cuentas Contables.
4-El codigo de Ramo debe estar creado en el maestro de Ramo
5-Los valores de cÃ³digo Cuenta Contable debe ser Ãºnico
6- El modal "Editar Cuenta Contable" debe estar disponible desde el listado de Cuentas Contables.
7-Los campos de tipo autocompleta son Editables condicionados segÃºn el cÃ³digo asociado.
8-La cuenta contable Los dos primeros dÃ­gitos deben ser 46, 47, 56 o 57; el tercer dÃ­gito debe ser 1 o 2; el cuarto puede ser un nÃºmero entre 0 y 9 o una letra; y los bloques siguientes deben estar entre 01 y 99 o combinaciones de letras (ej. OO).

**Datos:**
Datos para los campos editables de formulario

- CÃ³digo cuenta contable: 46.1.7.40.09.10, 47.1.7.40.09.10
- Nombre Cuenta Contablee: Ej: BONOS ASESORES - PROV. ESSALUD
- CÃ³digo ramo: Se selecciona el codigo ramo correspondiente [01, 44]
- Tipo de cuenta:  Se selecciona el tipo de cuenta correspondiente [MT, RT, IF, GG]
- Tipo Niif 17 CBR: Se selecciona el Tipo Niif 17 CBR  [GS, GI]
- Niif 17 Atribuible: Se selecciona el  Niif 17 Atribuible correspondiente [Atribuible, No Atribuible]
- Niif 17 Tipo: Se selecciona el Niif 17 Tipo correspondiente  [GM,GA]
- Concepto: Campo obligatorio. Ej: 10.01.05, 10.14.00
- Concepto N1: Ej: Egresos TÃ©cnicos netos
- Concepto N2: Ej; Compras
- Concepto N3: Ej: Seguro Social

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. Se levanta el modal "Editar Cuentas Contables".                             
5. El usuario edita los campos
6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de exito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

## Escenario: Validar que el sistema pueda editar un registro en el flujo de Gastos TÃ©cnicos  para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E36-PRE-GT-01-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Centros

**Descripcion:**
Validar que se pueda editar un nuevo registro desde el modal "Editar Centros" de  Centros

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos Tecnicos
1- El registro de Centro debe haber sido creado anteriormente.
2- El usuario debe tener permisos para editar registros de Centros.
3- El registro a editar debe visualizarse en el listado de Centros.
4-Los campos de tipo autocompleta son Editables condicionados segÃºn el cÃ³digo asociado.
5- Cuando el Centro es de tipo DIRECTO, debe existir una combinaciÃ³n vÃ¡lida de LÃ­nea, Producto, Canal y Subcanal en los catÃ¡logos maestros.
6- Todos los cÃ³digos de LÃ­nea, Producto, Canal y Subcanal deben existir en catÃ¡logo. 
7- Cuando el campo TIPO viene vacÃ­o, el Centro NO se considera DIRECTO.
8- Los catÃ¡logos maestros de LÃ­nea, Producto, Canal y Subcanal se encuentran previamente configurados, activos y con sus relaciones jerÃ¡rquicas definidas (Productoâ€“LÃ­nea y Subcanalâ€“Canal).

**Datos:**
Datos para los campos editables de formulario

- Negocio: Se selecciona el Negocio Correspondiente [PPS, PVI]
- Centro de Costo: El campo no es Editable
- Nombre Centro de Costo: Se autocompleta segun el centro de costo  
- CÃ³digo lÃ­nea: Se selecciona el Codigo lÃ­nea correspondiente  EJ: SEPE, VGRP
- LÃ­nea: Se autocompleta segun el codigo seleccionado
- CÃ³digo producto: Se selecciona el Codigo Producto correspondiente EJ: SEPE001, VGRP001
- Producto: Se autocompleta segun el codigo seleccionado
- CÃ³digo canal: Se selecciona el Codigo Canal correspondiente EJ: COR, CCO
- Canal: Se autocompleta segun el codigo seleccionado
- CÃ³digo subcanal: Se selecciona el Codigo Subcanal correspondiente Ej: COR004,CCO006
- Subcanal: Se autocompleta segun el codigo seleccionado
- Tipo: [DIRECTO,DIRECTOS, INDIRECTO,INDIRECTOS]
-Tipo EmisiÃ³n: [DIGITAL,TRADICIONAL]
-Tipo Negocio: [PERSONA,EMPRESA]
-Tipo Poducto:Campo opcional. [MODULAR,NO MODULAR]

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos. 
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. Se levanta el modal "Editar Centros".                             
5. El usuario edita los campos
6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de exito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

## Escenario: Validar que el sistema pueda editar un registro en el flujo de Gastos TÃ©cnicos  para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E36-PRE-GT-01-02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Unidad de cuenta GT

**Descripcion:**
Validar que se pueda editar un nuevo registro desde el modal "Editar Unidad de cuenta GT" de  Unidad de cuenta GT

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos Tecnicos
2- El registro de Unidad de Cuenta GT debe haber sido creado anteriormente.
3- El usuario debe tener permisos para editar registros de Unidades de Cuenta.
4- El registro a editar debe visualizarse en el listado de Unidades de Cuenta GT.
5-Los campos de tipo autocompleta son Editables condicionados segÃºn el cÃ³digo asociado.
6- El campo Prioridad es obligatorio y debe contener un valor numÃ©rico entre 1 y 4.
7- El CÃ³digo de Concepto exista en el catÃ¡logo de conceptos dentro de " Cuentas Contables"
8- Para un mismo registro con el mismo CÃ³digo de Concepto, Producto y Subcanal, la Unidad de Cuenta debe ser Ãºnica y la suma de sus factores debe ser igual a 1. 
9. El valor de campo DÃ­gito de la Cuenta debe ser 44 o 54, que corresponden a las cuentas contables aplicables para Gastos TÃ©cnicos. En caso contrario,debe mostrar un mensaje de error y no permitir el registro.
10- Los campos Unidad de Cuenta, Ramo, Producto y Subcanal deben existir y estar previamente registrados en sus respectivos catÃ¡logos maestros.
11- EL valor de Factor debe esatr entre 0 y 1

**Datos:**
Datos para los campos editables de formulario

- Prioridad: Seleccionar la Prioridad correspondiente [1 o 4]
- CÃ³digo Concepto: Se selecciona el codigo concepto correspondiente Ej:  07.04.00
- Moneda: Se selecciona la moneada correspondiente [PEN,USD]
- DÃ­gito de Cuenta: Seleccionar el Digito de Cuenta correspondiente [44 o 54]
- CÃ³digo Ramo: Se selecciona el COdifo Ramo correspondiente Ej: [01,70]
- Producto: Se selecciona el Producto correspondiente Ej: [AFP003]
- Subcanal: Se selecciona el subcanal  correspondiente Ej; [AFPS2]
- Unidad de Cuenta: Se selecciona la Unida de cuenta correspondiente Ej: IFRS_GRP_2021_UNIQUE SISCO2_PEN_PAA_Ceded_Prof
- Factor: [1,0.234,-10]

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de cuenta GT".
3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. Se levanta el modal "Editar Unidad de cuenta GT".                             
5. El usuario edita los campos
6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de exito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

## Escenario: Validar que el sistema pueda editar un registro en el flujo de Gastos TÃ©cnicos  para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E36-PRE-GT-01-02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de  Maestro de Negocios y Embebidos

**Descripcion:**
Validar que se pueda editar un nuevo registro desde el modal "Editar Maestro de Negocios y Embebidos" de Maestro de Negocios y Embebidos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos Tecnicos
2- El registro debe haber sido creado anteriormente.
3- El usuario debe tener permisos para editar registros de Maestro de Negocios y Embebidos.
4- El registro a editar debe visualizarse en el listado de Maestro de Negocios y Embebidos.
5- El subcanal debe estar asociado al canal correpsondiente
6-Los campos de tipo autocompleta son Editables condicionados segÃºn el cÃ³digo asociado.
7- Los campos Negocio, lÃ­nea, Producto son obligatorios
8- Se debe validar que los valores de LÃ­nea, Producto, Canal y Subcanal existan en sus respectivos catÃ¡logos maestros. AdemÃ¡s, se debe verificar que el Producto estÃ© asociado a la LÃ­nea y que el Subcanal estÃ© asociado al Canal correspondiente.
9- Los campos Embebidos y Tipo de Negocio son excluyentes: si Embebidos tiene valor, Tipo de Negocio debe estar vacÃ­o, y viceversa.

**Datos:**
Datos para los campos editables de formulario

- Negocio: [GENERALES, VIDA]
- LÃ­nea: Se selecciona la lÃ­nea correspondiente. Ej: ASISTENCIA MEDICA
- Producto: Se selecciona el  producto correspondiente Ej: INDEMNIZATORIO INDIVIDUAL
- Canal: Se selecciona el canal correspondiente Ej: ALIANZAS]
- Subcanal: Se selecciona el subcanal correspondiente Ej:  FALABELLA
- Embebido: [Embebido, No embebido]
- Tipo Negocio: [EMPRESA, PERSONA]

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Maestro de Negocios y Embebidos".
3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. Se levanta el modal "Editar Maestro de Negocios y Embebidos".                             
5. El usuario edita los campos
6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de exito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

## Escenario: Validar que el sistema pueda editar un registro en el  flujo de Gastos TÃ©cnicos
**Fuente:** Presupuesto GT

### Caso de prueba: E36-PRE-GT-01-03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de MÃ©todo Subcanal

**Descripcion:**
Validar que se pueda editar un nuevo registro desde el modal "Editar MÃ©todo Subcanal" de MÃ©todo Subcanal

**Precondiciones:**
1- El registro de MÃ©todo Subcanal debe haber sido creado anteriormente.
2- El usuario debe tener permisos para editar registros de MÃ©todo Subcanal.
3- Deben existir datos vÃ¡lidos en los catÃ¡logos de Ramos, LÃ­neas, Grupo Producto, Canales, Unidad de Cuenta GT y Driver Subcanal.
4- El registro a editar debe visualizarse en el listado de Maestro de MÃ©todo subcanal
5- Debe existir correspondencia vÃ¡lida entre CÃ³digo de LÃ­nea y  LÃ­nea, asÃ­ como entre CÃ³digo de Producto y  Producto.
6- Debe existir una relaciÃ³n vÃ¡lida entre la LÃ­nea y el Producto (el Producto debe estar asociado a la LÃ­nea correspondiente).
7- La combinaciÃ³n de los campos CÃ³digo de Concepto, CÃ³digo de Ramo, CÃ³digo de LÃ­nea, LÃ­nea, CÃ³digo de Grupo de Producto, Grupo de Producto, CÃ³digo de Canal y CÃ³digo de MÃ©todo debe ser Ãºnica. No se permite registrar mÃ¡s de un registro con la misma combinaciÃ³n de estos valores.

**Datos:**
Datos para los campos editables de formulario

-CÃ³digo lÃ­nea: Se selecciona la lÃ­nea correspondiente Ej: AMED
-LÃ­nea: Se autocompleta segun el codigo seleccionado 
-CÃ³digo producto:Se selecciona el producto correspondiente Ej: AMED019
-Producto: Se autocompleta segun el codigo seleccionado 
-CÃ³digo canal: Se selecciona el codigo canal correspondiente Ej: CCO
-CÃ³digo Concepto: Se selecciona el codigo concepto correspondiente Ej: 10.22.08
-CÃ³digo Ramo: Se selecciona el ramo correspondiente Ej: 64
-CÃ³digo mÃ©todo: Se selecciona el MÃ©todo correspondiente Ej: GT2SCCCO0017

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. Se levanta el modal "Editar MÃ©todo Subcanal".                             
5. El usuario edita los campos
6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de exito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

## Escenario: Validar que el sistema pueda editar un registro en el  flujo de Gastos TÃ©cnicos
**Fuente:** Presupuesto GT

### Caso de prueba: E36-PRE-GT-01-03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de editar un registro de Especiales NIIF

**Descripcion:**
Validar que se pueda editar un nuevo registro desde el modal "Editar Especiales NIIF " de Especiales NIIF

**Precondiciones:**
1-El registro de Especiales NIIF debe haber sido creado anteriormente.
2-El usuario debe tener permisos para editar registros de Especiales NIIF.
3-Deben existir datos vÃ¡lidos y activos en los catÃ¡logos de LÃ­neas, Productos, Canales, Subcanales, Conceptos y Centros de Costo
4- El registro a editar debe visualizarse en el listado de Maestro deEspeciales NIIF

**Datos:**
Datos para los campos editables de formulario

- Codigo lÃ­nea: Se selecciona el concepto correspondiente Ej: LPER 
- lÃ­nea: Se autocompleta segun el codigo seleccionado
-Codigo Producto: Se selecciona el concepto correspondiente Ej: LPER019 
- Producto: Se autocompleta segun el codigo seleccionado
- Codigo Canal: Se selecciona el concepto correspondiente Ej: DFV
- Canal: Se autocompleta segun el codigo seleccionado
- Codsubcanal: Se selecciona el concepto correspondiente Ej: DFV008 
- Subcanal: Se autocompleta segun el codigo seleccionado
- MÃ©todo Valoracion: [0 (PAA), 1 (BBA/VFA).]
- Porcentaje: [100, 1,2 , 65]
- Digito de cuenta: [44,54]
- Tipo DistribuciÃ³n: [POLIZAS, UOA]
- Niif 17 Atribuible: [SI Atribuible' o NO 'No Atribuible'.]
- Niif 17 Tipo:  [GM, GA]
- Concepto N1:Tipo texto  Ej: Egresos TÃ©cnicos netos
- Concepto N2: Tipo texto Ej: Servicios
- CÃ³digo Concepto: Se selecciona el cocepto correspondiente Ej: 10.14.00
- CECO: se selecciona el CECO correspondiente Ej: 06.99.80

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "Asignaciones" > " Especiales NIIF".
3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. Se levanta el modal "Editar  Especiales NIIF ".                             
5. El usuario edita los campos
6. El usuario presiona el botÃ³n "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.

1-Se muestra el mensaje de exito Â¡Cambios guardados correctamente! 
2-Se actualiza correctamente cada dato en la tabla
3-Se actualiza la fecha y la hora

---

## Escenario: Validar el formato y campos obligatorios de formulario al editar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E36-PRE-GT-03-01.1
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro de Ramo  por error de formato de los campos en el  flujo de Gastos TÃ©cnicos

**Descripcion:**
Validar que no se puede editar un registro desde desde el modal "Editar Ramo" de Ramo

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- Debe existir un registo correctamente creado con todos los campos obligatorios.

**Datos:**
Obligatoriedad y Formato (Valores Incorrectos)

-DescripciÃ³n Ramo: campo obligatorio, Editable,texto. Permite caracteres especiales como: - . _ / , ( ) 
-Rubro: campo opcional, Editable, Texto. Permite caracteres especiales como: - . _ / , ( ) " | % : &

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Ramo".
3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. Se levanta el modal "Editar Ramo".                             
5. El usuario borrar la informaciÃ³n y deja campos vacÃ­os
 6. El usuario edita los campos incorrectamente

**Resultado esperado:**
El nuevo registro no ha sido editado.

1-Se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.

---

## Escenario: Validar el formato y campos obligatorios de formulario al editar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E36-PRE-GT-03-01.2
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro de Cuentas Contables  por error de formato de los campos en el  flujo de Gastos TÃ©cnicos

**Descripcion:**
Validar que no se puede editar un registro desde desde el modal "Editar Cuentas Contables" de Cuentas Contables

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- Debe existir un registo correctamente creado con todos los campos obligatorios.

**Datos:**
Obligatoriedad y Formato (Valores Incorrectos)
 
-Nombre Cuenta Contable: Campo obligatorio, Editable, Texto. permite caracteres especiales como: - . _ / , ( )

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. Se levanta el modal "Editar Cuentas Contables".                             
5. El usuario borrar la informaciÃ³n y deja campos vacÃ­os 
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
El nuevo registro no ha sido editado.

1-Se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.

---

## Escenario: Validar el formato y campos obligatorios de formulario al editar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E36-PRE-GT-03-02.1
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro de Unidad de Cuenta GT por error de formato de los campos en el  flujo de Gastos TÃ©cnicos

**Descripcion:**
Validar que no se puede editar un registro desde desde el modal "Editar Unidad de Cuenta GT" de Unidad de Cuenta G

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- Debe existir un registo correctamente creado con todos los campos obligatorios.

**Datos:**
Obligatoriedad y Formato (Valores Incorrectos)

-Factor:  5, -10, 34,343, L2 1%

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. Se levanta el modal "Editar Unidad de Cuenta GT".                             
5. El usuario borrar la informaciÃ³n y deja campos vacÃ­os 
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
El nuevo registro no ha sido editado.

1-Se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.

---

## Escenario: Validar el formato y campos obligatorios de formulario al editar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E36-PRE-GT-03-03.2
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de  Especiales NIIF  por error de formato de los campos en el  flujo de Gastos TÃ©cnicos

**Descripcion:**
Validar que no se puede editar un registro desde desde el modal "Editar Especiales NIIF" de Especiales NIIF

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos.
2- Debe existir un registo correctamente creado con todos los campos obligatorios.

**Datos:**
Obligatoriedad
-Para verificar la validaciÃ³n de campos obligatorios, el usuario debe ingresar a los campos, borrar la informaciÃ³n y luego dejarlos vacÃ­os.

 Obligatoriedad y Formato (Valores Incorrectos)

- Porcentaje: DOS, 12%, 1,2342

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en Gastos TÃ©cnicos.
2. El usuario selecciona de menÃº lateral "Asignaciones" > " Especiales NIIF".
3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono lÃ¡piz
4. Se levanta el modal "Editar Especiales NIIF".                             
5. El usuario borrar la informaciÃ³n y deja campos vacÃ­os 
6. El usuario edita los campos incorrectamente

**Resultado esperado:**
El nuevo registro no ha sido editado.

1-Se muestra el mensaje de error, Los datos en el campo [nombre de campo] no son correctos, favor de validarlos.

---

## Escenario: Validar que el sistema pueda eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-01.01.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Ramo en el flujo de Gastos TÃ©cnicos para presupuesto

**Descripcion:**
Validar que se puede eliminar un registro desde el menÃº de acciones en el flujo de Gatos TÃ©cnicos de Ramo

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso. 
 4- si el mismo estÃ¡ siendo usado.
 5- No se permite eliminar un Ramo si existen movimientos asociados a una cuenta contable GT

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Ramo".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
 
 1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar estÃ© registro?. 
 
 2- se muestra el mensaje de exito Â¡Registro eliminado con Ã©xito! 
 
 3- no se muestra en la tabla de front.

---

## Escenario: Validar que el sistema pueda eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-01.01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Cuentas Contables en el flujo de Gastos TÃ©cnicos para presupuesto

**Descripcion:**
Validar que se puede eliminar un registro desde el menÃº de acciones en el flujo de Gatos TÃ©cnicos de Cuentas Contables

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso. 
 4- si el mismo estÃ¡ siendo usado.
 5-No permite eliminar una cuenta si existen movimientos asociados a un Exactus, Unidad de Cuenta GT o Especiales NIIF

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Cuentas Contables".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
 
 1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar este registro?. 
 
 2- se muestra el mensaje de exito Â¡Registro eliminado con Ã©xito! 
 
 3- no se muestra en la tabla de front.

---

## Escenario: Validar que el sistema pueda eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-01.01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Centros en el flujo de Gastos TÃ©cnicos para presupuesto

**Descripcion:**
Validar que se puede eliminar un registro desde el menÃº de acciones en el flujo de Gatos TÃ©cnicos de Centros

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso. 
 4- si el mismo estÃ¡ siendo usado.
 5-No permite eliminar una centro si existen movimientos asociados a un Especiales NIIF

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Centros".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
 
 1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar este registro?. 
 
 2- se muestra el mensaje de exito Â¡Registro eliminado con Ã©xito! 
 
 3- no se muestra en la tabla de front.

---

## Escenario: Validar que el sistema pueda eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-01.02.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Drive Subcanal en el flujo de Gastos TÃ©cnicos para presupuesto

**Descripcion:**
Validar que se puede eliminar un registro desde el menÃº de acciones en el flujo de Gatos TÃ©cnicos de Drive Subcanal

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso. 
 4- No permite eliminar una registro si existen movimientos asociados a un MÃ©todo Subcanal

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Drive Subcanal".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
 
 1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar este registro?. 
 
 2- se muestra el mensaje de exito Â¡Registro eliminado con Ã©xito! 
 
 3- no se muestra en la tabla de front.

---

## Escenario: Validar que el sistema pueda eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-01.02.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Unidad de Cuenta GT en el flujo de Gastos TÃ©cnicos para presupuesto

**Descripcion:**
Validar que se puede eliminar un registro desde el menÃº de acciones en el flujo de Gatos TÃ©cnicos de Unidad de Cuenta GT

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
 
 1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar este registro?. 
 
 2- se muestra el mensaje de exito Â¡Registro eliminado con Ã©xito! 
 
 3- no se muestra en la tabla de front.

---

## Escenario: Validar que el sistema pueda eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-01.02.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Maestro de Negocios y Embebidos en el flujo de Gastos TÃ©cnicos para presupuesto

**Descripcion:**
Validar que se puede eliminar un registro desde el menÃº de acciones en el flujo de Gatos TÃ©cnicos de Maestro de Negocios y Embebidos

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso. 
 4- si el mismo estÃ¡ siendo usado.

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > " Maestro de Negocios y Embebidos".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
 
 1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar este registro?. 
 
 2- se muestra el mensaje de exito Â¡Registro eliminado con Ã©xito! 
 
 3- no se muestra en la tabla de front.

---

## Escenario: Validar que el sistema pueda eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-01.03.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de MÃ©todo Subcanal en el flujo de Gastos TÃ©cnicos para presupuesto

**Descripcion:**
Validar que se puede eliminar un registro desde el menÃº de acciones en el flujo de Gatos TÃ©cnicos de MÃ©todo Subcanal

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "Asignaciones" > " MÃ©todo Subcanal".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
 
 1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar este registro?. 
 
 2- se muestra el mensaje de exito Â¡Registro eliminado con Ã©xito! 
 
 3- no se muestra en la tabla de front.

---

## Escenario: Validar que el sistema pueda eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-01.03.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Especiales NIIF en el flujo de Gastos TÃ©cnicos para presupuesto

**Descripcion:**
Validar que se puede eliminar un registro desde el menÃº de acciones en el flujo de Gatos TÃ©cnicos de Especiales NIIF

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "Asignaciones" > " Especiales NIIFl".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
 
 1- Advertencia: Â¿EstÃ¡ seguro que desea eliminar este registro?. 
 
 2- se muestra el mensaje de exito Â¡Registro eliminado con Ã©xito! 
 
 3- no se muestra en la tabla de front.

---

## Escenario: Validar las reglas de negocio al eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-02.01.1
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de Gastos TÃ©cnicos para presupuesto de Ramo

**Descripcion:**
Validar que no se puede eliminar un registro desde el menÃº de acciones en el flujo de Gastos TÃ©cnicos para presupuesto de Ramo

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso. 
 4- si el mismo estÃ¡ siendo usado.
 5- No se permite eliminar un Ramo si existen movimientos asociados a una cuenta contable GT

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Ramo".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar este registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
 
 1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: Validar las reglas de negocio al eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-02.01.2
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de Gastos TÃ©cnicos para presupuesto de Cuentas Contables

**Descripcion:**
Validar que no se puede eliminar un registro desde el menÃº de acciones en el flujo de Gastos TÃ©cnicos para presupuesto de Cuentas Contables

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso. 
 4- si el mismo estÃ¡ siendo usado.
 5-No permite eliminar una cuenta si existen movimientos asociados a un Exactus, Unidad de Cuenta GTo Especiales NIIF

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Cuentas Contables".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar este registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
 
 1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: Validar las reglas de negocio al eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-02.01.3
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de Gastos TÃ©cnicos para presupuesto de Centros

**Descripcion:**
Validar que no se puede eliminar un registro desde el menÃº de acciones en el flujo de Gastos TÃ©cnicos para presupuesto de Centros

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso. 
 4- si el mismo estÃ¡ siendo usado.
 5-No permite eliminar una centro si existen movimientos asociados a un Especiales NIIF

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > " Centros".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar este registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
 
 1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: Validar las reglas de negocio al eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-02.02.1
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de Gastos TÃ©cnicos para presupuesto de Drive Subcanal

**Descripcion:**
Validar que no se puede eliminar un registro desde el menÃº de acciones en el flujo de Gastos TÃ©cnicos para presupuesto de Drive Subcanal

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso. 
 4- No permite eliminar una registro si existen movimientos asociados a un MÃ©todo Subcanal

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Drive Subcanal".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar este registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
 
 1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: Validar las reglas de negocio al eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-02.02.2
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de Gastos TÃ©cnicos para presupuesto de Unidad de Cuenta GT

**Descripcion:**
Validar que no se puede eliminar un registro desde el menÃº de acciones en el flujo de Gastos TÃ©cnicos para presupuesto de Unidad de Cuenta GT

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Unidad de Cuenta GT".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar este registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
 
 1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: Validar las reglas de negocio al eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-02.02.3
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de Gastos TÃ©cnicos para presupuesto de Maestro de Negocios y Embebidos

**Descripcion:**
Validar que no se puede eliminar un registro desde el menÃº de acciones en el flujo de Gastos TÃ©cnicos para presupuesto de Maestro de Negocios y Embebidos

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso. 
 4- si el mismo estÃ¡ siendo usado.

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > " Maestro de Negocios y Embebidos".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar este registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
 
 1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: Validar las reglas de negocio al eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-02.03.1
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de Gastos TÃ©cnicos para presupuesto de MÃ©todo Subcanal

**Descripcion:**
Validar que no se puede eliminar un registro desde el menÃº de acciones en el flujo de Gastos TÃ©cnicos para presupuesto de MÃ©todo Subcanal

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "Asignaciones" > " MÃ©todo Subcanal".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
 
 1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: Validar las reglas de negocio al eliminar un registro en el flujo de Gastos TÃ©cnicos para presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E37-PRE-GT-02.03.2
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de Gastos TÃ©cnicos para presupuesto de Especiales NIIF

**Descripcion:**
Validar que no se puede eliminar un registro desde el menÃº de acciones en el flujo de Gastos TÃ©cnicos para presupuesto de Especiales NIIF

**Precondiciones:**
1- El registro debe haber sido creado correctamente
 2- el usuario debe tener rol de Administrador de Gastos
 3- no se debe eliminar el registro si ya se ha cerrado un proceso.

**Datos:**
Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n'' 
 2. El usuario selecciona de menÃº lateral "Asignaciones" > " Especiales NIIF".
 3. Desde el menÃº acciones de la tabla principal, el usuario presiona el icono basurero 
 4. Se levanta el modal con la advertencia "EstÃ¡ seguro de que desea eliminar estÃ© registro?". 
 5. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
 
 1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecuciÃ³n, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E47-PRE-GT-EC-01
- Implementado: No

**Titulo:** Procesamiento de la Fase Inicial: ObtenciÃ³n de Grupo-Producto)  de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Descripcion:**
Validar el procesamiento de la Fase Inicial: ObtenciÃ³n de canales/subcanales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n completo

**Precondiciones:**
Ejecutada la Fase Inicial de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo

**Datos:**
se utiliza como insumo principal la informaciÃ³n contenida en el archivo Exactus,

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "PRESUPUESTO" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase Inicial.

**Resultado esperado:**
La Fase Inicial  de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo se ejecutÃ³ satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E47-PRE-GT-EC-02
- Implementado: No

**Titulo:** Procesamiento de la Fase 1: ObtenciÃ³n de canales/subcanales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Descripcion:**
Validar el procesamiento de la Fase 1: ObtenciÃ³n de Objeto de Costo (DistribuciÃ³n a nivel de subcanal) de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n completo

**Precondiciones:**
Ejecutada la Fase 1 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo

**Datos:**
Drivers Subcanal y mÃ©todo subcanal

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "PRESUPUESTO" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 1.

**Resultado esperado:**
La Fase 1 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo se ejecutÃ³ satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E47-PRE-GT-EC-03
- Implementado: No

**Titulo:** Procesamiento de la Fase 2: ObtenciÃ³n de canales/subcanales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Descripcion:**
Validar el procesamiento de la Fase 2:  AsignaciÃ³n de Objetos de Costo a Unidades de Cuenta  de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n completo

**Precondiciones:**
Ejecutada la Fase 2 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo

**Datos:**
Drivers Subcanal y mÃ©todo subcanal

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "PRESUPUESTO" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 2.

**Resultado esperado:**
La Fase 2 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo se ejecutÃ³ satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E47-PRE-GT-EC-04
- Implementado: No

**Titulo:** Procesamiento de Cerrar proceso de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Descripcion:**
Validar el procesamiento de Cerrar proceso de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Completo

**Precondiciones:**
Ejecutadas las Fases 1,2  de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Completo

**Datos:**
Data procesada para el Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "PRESUPUESTO" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario verifica la ejecuciÃ³n de todas las fases.
5. El usuario presiona el botÃ³n "Cerrar proceso" y acepta el la pregunta de verificaciÃ³n.

**Resultado esperado:**
El cierre de proceso de Gastos TÃ©cnico en el modo de ejecuciÃ³n Completo es ejecutado satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E47-PRE-GT-ER-01
- Implementado: No

**Titulo:** Procesamiento de la Fase Inicial: ObtenciÃ³n de Grupo-Producto)  de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Descripcion:**
Validar el procesamiento de la Fase Inicial: ObtenciÃ³n de canales/subcanales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n completo

**Precondiciones:**
Ejecutada la Fase Inicial de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Datos:**
se utiliza como insumo principal la informaciÃ³n contenida en el archivo Exactus,

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "PRESUPUESTO" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase Inicial.

**Resultado esperado:**
La Fase 2 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido se ejecutÃ³ satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E47-PRE-GT-ER-02
- Implementado: No

**Titulo:** Procesamiento de la Fase 1: ObtenciÃ³n de canales/subcanales  de  Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Descripcion:**
Validar el procesamiento de la Fase 1: ObtenciÃ³n de Objeto de Costo (DistribuciÃ³n a nivel de subcanal) de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Precondiciones:**
Ejecutada la Fase 1 de  Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Datos:**
Drivers Subcanal y mÃ©todo subcanal

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "PRESUPUESTO" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 1.

**Resultado esperado:**
La Fase 1 de  Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido se ejecutÃ³ satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E47-PRE-GT-ER-03
- Implementado: No

**Titulo:** Procesamiento de la Fase 2: ObtenciÃ³n de canales/subcanales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Descripcion:**
Validar el procesamiento de la Fase 2: ObtenciÃ³n de canales/subcanales de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Precondiciones:**
Ejecutada la Fase 1 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido

**Datos:**
Drivers Subcanal y mÃ©todo subcanal

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "PRESUPUESTO" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n, PÃ³liza y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n Â¨PlayÂ¨ de la fase 2.

**Resultado esperado:**
La Fase 2 de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido se ejecutÃ³ satisfactoriamente

---

## Escenario: Validar el procesamiento de las Fases de Procesos de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E47-PRE-GT-ER-04
- Implementado: No

**Titulo:** Procesamiento de Cerrar proceso de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Descripcion:**
Validar el procesamiento de Cerrar proceso de Gastos TÃ©cnicos en el  modo de ejecuciÃ³n Resumido

**Precondiciones:**
Ejecutadas las Fases 1,2  de Gastos TÃ©cnicos en el modo de ejecuciÃ³n Resumido

**Datos:**
Data procesada para el Gastos TÃ©cnicos

**Pasos:**
revisar

**Resultado esperado:**
El cierre de proceso de Gastos TÃ©cnico en el modo de ejecuciÃ³n Resumido es ejecutado satisfactoriamente

---

## Escenario: Permanencia de los montos durante el procesamiento por cada una de las Fases de Gastos TÃ©cnicos en el proceso de ejecuciÃ³n Completo para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E51-PRE-GT-EC
- Implementado: No

**Titulo:** Permanencia de monto durante el proceso Completo de Gastos TÃ©cnicos para el flujo Presupuesto

**Descripcion:**
Validar la permanencia de monto durante la corrida de las fases y cierre de proceso Completo de Gastos TÃ©cnicos

**Precondiciones:**
- Completado el proceso Completo de Gastos TÃ©cnicos.

- El monto no debe variar al ejecutarse ninguna de las fases o el cierre.

**Datos:**
Montos resultados de la ejecuciÃ³n de cada fase corrida y cierre de proceso de Gastos TÃ©cnicos de modo Completo

**Pasos:**
1. El usuario accede a la vista ''Proceso'' de Gastos TÃ©cnicos.
2. El usuario verifica la ejecuciÃ³n de cada una de las fases y el cierre de modo Completo.

**Resultado esperado:**
Verificar la permanencia de monto de cada fase ejecutada y cierre.

---

## Escenario: Permanencia de los montos durante el procesamiento por cada una de las Fases de Gastos TÃ©cnicos en el proceso de ejecuciÃ³n Resumido para el flujo Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E51-PRE-GT-ER
- Implementado: No

**Titulo:** Permanencia de monto durante el proceso Resumido de Gastos TÃ©cnicos para el flujo Presupuesto

**Descripcion:**
Validar la permanencia de monto durante la corrida de las fases y cierre de proceso Resumido de Gastos TÃ©cnicos

**Precondiciones:**
- Completado el proceso Resumido de Gastos TÃ©cnicos.

- El monto no debe variar al ejecutarse ninguna de las fases o el cierre.

**Datos:**
Montos resultados de la ejecuciÃ³n de cada fase corrida y cierre de proceso de Gastos TÃ©cnicos de modo Resumido

**Pasos:**
1. El usuario accede a la vista ''Proceso'' de Gastos TÃ©cnicos.
2. El usuario verifica la ejecuciÃ³n de cada una de las fases y el cierre de modo Resumido.

**Resultado esperado:**
Verificar la permanencia de monto de cada fase ejecutada y cierre.

---

## Escenario: Generar el archivo Cuadre de cuentas en el flujo Gastos TÃ©cnicos  para el flujo de Presupuesto y Verificar la permanencia de las cuentas y montos procesados correctamente.
**Fuente:** Presupuesto GT

### Caso de prueba: E52-PRE-GT-EC-01
- Implementado: No

**Titulo:** Archivo Cuadre de cuentas antes de cierre de proceso de Modo Completo de  Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Obtener el archivo Cuadre de cuentas de Modo Completo de  Gastos TÃ©cnicos para el flujo de Presupuesto

**Precondiciones:**
1 - BotÃ³n Cuadre de cuenta activo

 2 - El proceso  no debe estar cerrado

**Datos:**
Data procesada durante las fases de procesos

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Presupuesto" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n  y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n "Cuadre de cuentas" y acepta la pregunta de verificaciÃ³n.

**Resultado esperado:**
Obtener el archivo Cuadre de cuentas de Modo Completo de GT, donde se muestran todas las fases y sus montos
columnas:
cuenta contable
monto exactus
monto fases (dependiendo de la fase que se ejecute)

---

## Escenario: Generar el archivo Cuadre de cuentas en el flujo Gastos TÃ©cnicos para el flujo de Presupuesto y Verificar la permanencia de las cuentas y montos procesados correctamente.
**Fuente:** Presupuesto GT

### Caso de prueba: E52-PRE-GT-EC-02
- Implementado: No

**Titulo:** Archivo Cuadre de cuentas despuÃ©s de cierre de proceso de Modo Completo de  Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Obtener el archivo Cuadre de cuentas de Modo Completo de  Gastos TÃ©cnicos para el flujo de Presupuesto

**Precondiciones:**
1 - BotÃ³n Cuadre de cuenta activo y cerrado el proceso
 2 - El proceso debe estar cerrado

**Datos:**
Data procesada al cerrar proceso

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Presupuesto" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n  y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n "Cuadre de cuentas" y acepta la pregunta de verificaciÃ³n.

**Resultado esperado:**
Obtener el archivo Cuadre de cuentas de Modo Completo de GT, donde se muestran todas las fases y sus montos
cuenta contable
monto exactus
monto fases
monto resumen

---

## Escenario: Generar el archivo Cuadre de cuentas en el flujo Gastos TÃ©cnicos para el flujo de Presupuesto y Verificar la permanencia de las cuentas y montos procesados correctamente.
**Fuente:** Presupuesto GT

### Caso de prueba: E52-PRE-GT-ER-01
- Implementado: No

**Titulo:** Archivo Cuadre de cuentas antes de cierre de proceso de Modo Resumido de  Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Obtener el archivo Cuadre de cuentas de Modo Resumido de  Gastos TÃ©cnicos para el flujo de Presupuesto

**Precondiciones:**
1 - BotÃ³n Cuadre de cuenta activo 
 2 - El proceso No debe estar cerrado

**Datos:**
Data procesada durante las fases de procesos

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Presupuesto" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n  y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n "Cuadre de cuentas" y acepta la pregunta de verificaciÃ³n.

**Resultado esperado:**
Obtener el archivo Cuadre de cuentas de Modo Resumido de GT, donde se muestran todas las fases y sus montos
cuenta contable
monto exactus
monto fases

---

## Escenario: Generar el archivo Cuadre de cuentas en el flujo Gastos TÃ©cnicos para el flujo de Presupuesto y Verificar la permanencia de las cuentas y montos procesados correctamente.
**Fuente:** Presupuesto GT

### Caso de prueba: E52-PRE-GT-ER-02
- Implementado: No

**Titulo:** Archivo Cuadre de cuentas despuÃ©s de cierre de proceso de Modo Resumido de  Gastos TÃ©cnicos para el flujo de Presupuesto

**Descripcion:**
Obtener el archivo Cuadre de cuentas de Modo Resumido de  Gastos TÃ©cnicos para el flujo de Presupuesto

**Precondiciones:**
1 - BotÃ³n Cuadre de cuenta activo 
 2 - El proceso debe estar cerrado

**Datos:**
Data procesada al cerrar proceso

**Pasos:**
1. El usuario accede en la pÃ¡gina de inicio, selecciona "Presupuesto" y "Gastos TÃ©cnicos".
2. El usuario selecciona de menÃº lateral "Procesos" y "Gastos TÃ©cnicos".
3. El usuario configura el perÃ­odo, versiÃ³n  y modo de ejecuciÃ³n.
4. El usuario presiona el botÃ³n "Cuadre de cuentas" y acepta la pregunta de verificaciÃ³n.

**Resultado esperado:**
Obtener el archivo Cuadre de cuentas de Modo Resumido de  Gastos TÃ©cnicos donde se muestran todas las fases y sus montos
cuenta contable
monto exactus
monto fases
monto resumen

---

## Escenario: Validar el funcionamiento integral de paginador en el  flujo de  Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E56-PRE-GT-PAG
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de los elementos de paginador en el flujo de  Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar que los elementos de paginador funcionen correctamente en el  flujo de  Gastos TÃ©cnicos para Presupuesto

**Precondiciones:**
1- Si la vista seleccionada de flujo de Gastos TÃ©cnicos tiene data cargada.
2- Al acceder inicialmente, estÃ© sombreada la pÃ¡gina 1 y bloquaedos los botones ''pÃ¡gina anterior'' y ''primera pÃ¡gina''
3- Tenga seleccionada una opciÃ³n por defecto (5) en el selector de filas por vista.
4- Si no hay data cargada, todos los elementos de paginador deben estar bloqueado.

**Datos:**
Data definida para parametrizaciÃ³n, Aprovisionamiento, y asignaciones de el flujo de  Gastos TÃ©cnicos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
2. El usuario accede a los botones de paginador de la vista en la que se encuentra. 
3. selecciona la opciÃ³n de filas a mostrar por vista.
4. El usuario accede a los botones

**Resultado esperado:**
El sistema pÃ¡gina correctamente

1- El selector de filas por vista da la opciÃ³n de selecionar.
2- Las filas mostradas en el front corresponden con la opciÃ³n mostrada de 5, 10 o 20.
3- Se muestre la cantidad de pÃ¡ginas con respecto a la cantidad de elementos a mostrar.
4- al encontrarse en la primera pÃ¡gina, los botones de ''pÃ¡gina anterior'' y ''primera pÃ¡gina'' estÃ¡n bloqueados.
5- al encontrarse en la Ãºltima pÃ¡gina los botones de ''siguiente pÃ¡gina'' y ''Ãºltima pÃ¡gina'' estÃ¡n bloqueados.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-01.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
- CÃ³digo cuenta contable 
- DescripciÃ³n cuenta contable 
- CÃ³digo ramo 
- Niif 17 Atribuible 
- Niif 17 Tipo 
- Concepto N1 
- Concepto N2 
- Concepto N3 
- Tipo Niif 17 CBR

Columna definidas opcionales.
- Concepto
- Tipo de cuenta

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-01.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla Centros de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
 -Negocio 
- Centro de Costo 
- Nombre Centro de costo 
- Nombre LÃ­nea 
- Nombre producto 
- Nombre canal 
- Nombre subcanal 

Columna definidas opcionales.
- CÃ³digo lÃ­nea 
- CÃ³digo producto 
- CÃ³digo canal 
- CÃ³digo subcanal 
- Tipo Estado CECO
- Tipo emisiÃ³n 
- Tipo negocio 
- Tipo producto

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-02.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla Driver Subcanal de flujo de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna
- CÃ³digo mÃ©todo

- CÃ³digo canal   
- Nombre canal  
- CÃ³digo subcanal  
- Nombre Subcanal  
- Factor

Columna definidas opcionales.

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-03.1.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla MÃ©todo Subcanal de flujo de Asignaciones de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
- CÃ³digo concepto
- CÃ³digo ramo
- CÃ³digo lÃ­nea
- LÃ­nea
- CÃ³digo producto
- Nombre producto
- CÃ³digo canal
- CÃ³digo mÃ©todo

Columna definidas opcionales.
 - Se muestran todos

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-03.1.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de botÃ³n Ver en la pantalla Especiales NIIF de flujo de Asignaciones de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de seleccionar las columnas que desea mostrar en el frontend.

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
 - Cod Linea
- lÃ­nea
- Codproducto
- Producto
- Codcana
- Canal
- Codsubcanal
- Subcanal
- MÃ©todo Valoracion
- Porcentaje

Columna definidas opcionales.
 - Digito de cuenta
- Tipo DistribuciÃ³n
- Niif 17 Atribuible
- Niif 17 Tipo
- Concepto N1
- Concepto N2
- CÃ³digo Concepto
- CECO

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Los nombre seleccionado en el modal ''Columna'' se muestran correctamente como columnas de la tabla en el frontend.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-01.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de buscador de componente de la Pantalla Cuentas Contables que desea mostrar en el frontend.

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
- CÃ³digo cuenta contable 
- DescripciÃ³n cuenta contable 
- CÃ³digo ramo 
- Niif 17 Atribuible 
- Niif 17 Tipo 
- Concepto N1 
- Concepto N2 
- Concepto N3 
- Tipo Niif 17 CBR

Columna definidas opcionales.
- Concepto
- Tipo de cuenta

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-01.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Centros de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de buscador de componente de la Pantalla Centros que desea mostrar en el frontend.

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Centros definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
 -Negocio 
- Centro de Costo 
- Nombre Centro de costo 
- Nombre LÃ­nea 
- Nombre producto 
- Nombre canal 
- Nombre subcanal 

Columna definidas opcionales.
- CÃ³digo lÃ­nea 
- CÃ³digo producto 
- CÃ³digo canal 
- CÃ³digo subcanal 
- Tipo Estado CECO
- Tipo emisiÃ³n 
- Tipo negocio 
- Tipo producto

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros ".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-02.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Driver Subcanal de flujo de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de buscador de componente de la Pantalla Driver Subcanal que desea mostrar en el frontend.

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Driver Subcanal definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
- CÃ³digo mÃ©todo
- CÃ³digo canal   
- Nombre canal  
- CÃ³digo subcanal  
- Nombre Subcanal  
- Factor

Columna definidas opcionales.
- Todas son Por defecto

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-03.2.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de MÃ©todo Subcanal de flujo de Asignaciones de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de buscador de componente de la Pantalla MÃ©todo Subcanal que desea mostrar en el frontend.

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo MÃ©todo Subcanal definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
- CÃ³digo concepto
- CÃ³digo ramo
- CÃ³digo lÃ­nea
- LÃ­nea
- CÃ³digo producto
- Nombre producto
- CÃ³digo canal
- CÃ³digo mÃ©todo

Columna definidas opcionales.
 - Todas son Por defecto

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-03.2.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de buscador de componente Columnas de Especiales NIIF de flujo de Asignaciones de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de buscador de componente de la Pantalla Especiales NIIF que desea mostrar en el frontend.

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Especiales NIIF definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
 - Cod Linea
- lÃ­nea
- Codproducto
- Producto
- Codcana
- Canal
- Codsubcanal
- Subcanal
- MÃ©todo Valoracion
- Porcentaje

Columna definidas opcionales.
 - Digito de cuenta
- Tipo DistribuciÃ³n
- Niif 17 Atribuible
- Niif 17 Tipo
- Concepto N1
- Concepto N2
- CÃ³digo Concepto
- CECO

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestre el nombre de la columna buscada en el filtro.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-01.3.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
- CÃ³digo cuenta contable 
- DescripciÃ³n cuenta contable 
- CÃ³digo ramo 
- Niif 17 Atribuible 
- Niif 17 Tipo 
- Concepto N1 
- Concepto N2 
- Concepto N3 
- Tipo Niif 17 CBR

Columna definidas opcionales.
- Concepto
- Tipo de cuenta

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-01.3.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de Centros de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de Centros de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Centros definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
 -Negocio 
- Centro de Costo 
- Nombre Centro de costo 
- Nombre LÃ­nea 
- Nombre producto 
- Nombre canal 
- Nombre subcanal 

Columna definidas opcionales.
- CÃ³digo lÃ­nea 
- CÃ³digo producto 
- CÃ³digo canal 
- CÃ³digo subcanal 
- Tipo Estado CECO
- Tipo emisiÃ³n 
- Tipo negocio 
- Tipo producto

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-02.3.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de Driver Subcanal de flujo de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de Driver Subcanal procesado de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Driver Subcanal definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columnas definidas Por defecto.

- CÃ³digo mÃ©todo
- CÃ³digo canal   
- Nombre canal  
- CÃ³digo subcanal  
- Nombre Subcanal  
- Factor

Columna definidas opcionales.
 - Todas por defecto

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-03.3.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de MÃ©todo Subcanal de flujo de Asignaciones de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de MÃ©todo Subcanal de flujo de Asignaciones de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo MÃ©todo Subcanal definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
- CÃ³digo concepto
- CÃ³digo ramo
- CÃ³digo lÃ­nea
- LÃ­nea
- CÃ³digo producto
- Nombre producto
- CÃ³digo canal
- CÃ³digo mÃ©todo

Columna definidas opcionales.
 - Todas Por defecto

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Asignaciones " > "MÃ©todo Subcanal".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-03.3.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente Columnas de Especiales NIIF de flujo de Asignaciones de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la opciÃ³n 'Mostrar todas'' de componente columnas de Especiales NIIF de flujo de Asignaciones de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Especiales NIIF definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
 - Cod Linea
- lÃ­nea
- Codproducto
- Producto
- Codcana
- Canal
- Codsubcanal
- Subcanal
- MÃ©todo Valoracion
- Porcentaje

Columna definidas opcionales.
 - Digito de cuenta
- Tipo DistribuciÃ³n
- Niif 17 Atribuible
- Niif 17 Tipo
- Concepto N1
- Concepto N2
- CÃ³digo Concepto
- CECO

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Asignaciones " > "Especiales NIIF".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran todas las columnas de archivo en la tabla de Front.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-01.4.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
- CÃ³digo cuenta contable 
- DescripciÃ³n cuenta contable 
- CÃ³digo ramo 
- Niif 17 Atribuible 
- Niif 17 Tipo 
- Concepto N1 
- Concepto N2 
- Concepto N3 
- Tipo Niif 17 CBR

Columna definidas opcionales.
- Concepto
- Tipo de cuenta

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front solo las columnas de archivo definidas Por defecto.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-01.4.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de Centros de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
 -Negocio 
- Centro de Costo 
- Nombre Centro de costo 
- Nombre LÃ­nea 
- Nombre producto 
- Nombre canal 
- Nombre subcanal 

Columna definidas opcionales.
- CÃ³digo lÃ­nea 
- CÃ³digo producto 
- CÃ³digo canal 
- CÃ³digo subcanal 
- Tipo Estado CECO
- Tipo emisiÃ³n 
- Tipo negocio 
- Tipo producto

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front solo las columnas de archivo definidas Por defecto.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-02.4.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de Driver Subcanal de flujo de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de Driver Subcanal sin porcesar de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Driver Subcanal definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columnas definidas Por defecto.
- CÃ³digo mÃ©todo

- CÃ³digo canal   
- Nombre canal  
- CÃ³digo subcanal  
- Nombre Subcanal  
- Factor

Columna definidas opcionales.
 - Todas por defecto

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Aprovisionamiento " > "Driver Sudcanal".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front solo las columnas de archivo definidas Por defecto.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-03.4.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de MÃ©todo Subcanal de flujo de Asignaciones de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de MÃ©todo Subcanal sin porcesar de flujo de Asignaciones de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo MÃ©todo Subcanal definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
- CÃ³digo concepto
- CÃ³digo ramo
- CÃ³digo lÃ­nea
- LÃ­nea
- CÃ³digo producto
- Nombre producto
- CÃ³digo canal
- CÃ³digo mÃ©todo

Columna definidas opcionales.
- Todas por defecto

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Sudcanal".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front solo las columnas de archivo definidas Por defecto.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-03.4.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la opciÃ³n''Ocultar todas'' de componente Columnas de Especiales NIIF de flujo de Asignaciones de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la opciÃ³n ''Ocultar todas'' de componente Columnas de Especiales NIIF sin porcesar de flujo de Asignaciones de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Especiales NIIF definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
 - Cod Linea
- lÃ­nea
- Codproducto
- Producto
- Codcana
- Canal
- Codsubcanal
- Subcanal
- MÃ©todo Valoracion
- Porcentaje

Columna definidas opcionales.
 - Digito de cuenta
- Tipo DistribuciÃ³n
- Niif 17 Atribuible
- Niif 17 Tipo
- Concepto N1
- Concepto N2
- CÃ³digo Concepto
- CECO

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran en la tabla de Front solo las columnas de archivo definidas Por defecto.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-01.5.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la selecciÃ³n de columnas por defecto de componente Columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la selecciÃ³n de columnas por defecto de componente Columnas de Cuentas Contables de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Cuentas Contables definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
- CÃ³digo cuenta contable 
- DescripciÃ³n cuenta contable 
- CÃ³digo ramo 
- Niif 17 Atribuible 
- Niif 17 Tipo 
- Concepto N1 
- Concepto N2 
- Concepto N3 
- Tipo Niif 17 CBR

Columna definidas opcionales.
- Concepto
- Tipo de cuenta

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Cuentas Contables".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran la tabla de Front sin las columnas de archivo definidas Por defecto que han sido desmarcadas manualmente.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-01.5.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la selecciÃ³n de columnas por defecto de componente Centros de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la selecciÃ³n de columnas por defecto de componente Columnas de Centros de flujo de ParametrizaciÃ³n de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Centros definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
 -Negocio 
- Centro de Costo 
- Nombre Centro de costo 
- Nombre LÃ­nea 
- Nombre producto 
- Nombre canal 
- Nombre subcanal 

Columna definidas opcionales.
- CÃ³digo lÃ­nea 
- CÃ³digo producto 
- CÃ³digo canal 
- CÃ³digo subcanal 
- Tipo Estado CECO
- Tipo emisiÃ³n 
- Tipo negocio 
- Tipo producto

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "ParametrizaciÃ³n" > "Centros".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran la tabla de Front sin las columnas de archivo definidas Por defecto que han sido desmarcadas manualmente.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-02.5.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la selecciÃ³n de columnas por defecto de componente Driver Subcanal de flujo de Aprovisionamiento de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la selecciÃ³n de columnas por defecto de componente Columnas de Driver Subcanal de flujo de Aprovisionamiento de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Driver Subcanal definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columnas definidas Por defecto.
- CÃ³digo mÃ©todo

- CÃ³digo canal   
- Nombre canal  
- CÃ³digo subcanal  
- Nombre Subcanal  
- Factor

Columna definidas opcionales.
 - Todas por defecto

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Aprovisionamiento" > "Driver Subcanal".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran la tabla de Front sin las columnas de archivo definidas Por defecto que han sido desmarcadas manualmente.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-03.5.1
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la selecciÃ³n de columnas por defecto de componente MÃ©todo Subcanal de flujo de Asignaciones de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la selecciÃ³n de columnas por defecto de componente Columnas de MÃ©todo Subcanal de flujo de Asignaciones de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo MÃ©todo Subcanal definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
- CÃ³digo concepto
- CÃ³digo ramo
- CÃ³digo lÃ­nea
- LÃ­nea
- CÃ³digo producto
- Nombre producto
- CÃ³digo canal
- CÃ³digo mÃ©todo

Columna definidas opcionales.
 - Todas por defecto

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Asignaciones" > "MÃ©todo Subcanal".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran la tabla de Front sin las columnas de archivo definidas Por defecto que han sido desmarcadas manualmente.

---

## Escenario: Validar el funcionamiento de botÃ³n ver mÃ¡s columnas en el flujo de Gastos TÃ©cnicos para Presupuesto
**Fuente:** Presupuesto GT

### Caso de prueba: E60-PRE-GT-03.5.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la selecciÃ³n de columnas por defecto de componente Especiales NIIF de flujo de Asignaciones de Gastos TÃ©cnicos para Presupuesto

**Descripcion:**
Validar el correcto funcionamiento de la selecciÃ³n de columnas por defecto de componente Columnas de Especiales NIIF de flujo de Asignaciones de Gastos TÃ©cnicos

**Precondiciones:**
1- El usuario debe tener rol de Gestor de Gastos TÃ©cnicos
 2- estÃ¡n configurados los nombre de las columnas de archivo Especiales NIIF definido para el motor.
  3-Las columnas por defecto siempre se mostrarÃ¡n.
 4- la opciÃ³n ''Mostrar todas'': muestra todas las columnas de la tabla.
 5- la opciÃ³n ''Ocultar todas'': Oculta todas las columna excepto las que estÃ¡n definidas Por defecto.

**Datos:**
Columna definidas Por defecto.
 - Cod Linea
- lÃ­nea
- Codproducto
- Producto
- Codcana
- Canal
- Codsubcanal
- Subcanal
- MÃ©todo Valoracion
- Porcentaje

Columna definidas opcionales.
 - Digito de cuenta
- Tipo DistribuciÃ³n
- Niif 17 Atribuible
- Niif 17 Tipo
- Concepto N1
- Concepto N2
- CÃ³digo Concepto
- CECO

**Pasos:**
1. El usuario accede a la pÃ¡gina de inicio ''DistribuciÃ³n''  con el selector por defecto en "Gastos TÃ©cnicos" y una distribuciÃ³n de tipo ''Presupuesto''.
 2. El usuario selecciona de menÃº lateral "Asignaciones" > "Especiales NIIF".
 3. El usuario presiona el botÃ³n ''Ver" 
 4. Se levanta el modal ''Columnas'' se mostrarÃ¡n marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
 5. El usuario selecciona el nombre de la columna que desea agregar. Puede usar el filtro buscar. 
 6. El usuario presiona el botÃ³n "Aceptar".

**Resultado esperado:**
Se muestran la tabla de Front sin las columnas de archivo definidas Por defecto que han sido desmarcadas manualmente.
