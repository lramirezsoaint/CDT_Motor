# Catalogo de casos de prueba

---

## Escenario: E0-login-01
**Descripcion:** Validar el correcto inicio de sesion segun el rol al que pertenece

### Caso de prueba: E0-LOGIN-ADMIN-01
- Implementado: No

**Titulo:** Validar que el rol adminsitrador tiene acceso al sistema

**Descripcion:** Validad que un usuario con el rol de Administrador de Gastos pueda autenticarse al sistema.

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos

**Datos:**
- Correo: psilvestre@pacificotest.com.pe
- Contraseña: MDG rocks!

**Pasos:**
1. El usuario accede a la página de inicio de sesion
2. ingresa el correo y contraseña y da click en el botón "inicio de sesion"

**Resultado esperado:**
El usuario accede correctamente al sistema
Se muestra el nombre y correo correctamente, en la parte inferior del sidebar
### Caso de prueba: E0-LOGIN-ADMIN-02
- Implementado: No

**Titulo:** Validar que el rol adminsitrador puede visualizar y modificar los archivos comunes

**Descripcion:** Validar que el rol Administrador de Gastos puede hacer uso total de las funcionalidades de la sección comunes

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos

**Datos:**
- Archivos comunes Línea, Canales, Subcanal, Grupo Producto, Maestro UoA y Configuración de Parches únicamente a usuarios con el rol "Administrador de Gastos" o "Gestor de Gastos".

**Pasos:**
1. El usuario accede a la página de inicio de sesion
2. ingresa el correo y contraseña y da click en el botón "inicio de sesión"

**Resultado esperado:**
El sistema solo permite visualizar y modificar archivos comunes al rol "Administrador de Gastos"
### Caso de prueba: E0-login-02
- Implementado: No

**Titulo:** 

**Descripcion:** 

**Precondiciones:**
1. El usuario debe ingresar con un rol Gestor de Gastos Generales

**Datos:**
- Correo:
- Contraseña:

**Pasos:**
1. . El usuario accede a la página de inicio
2. ingresa el correo y contraseña

**Resultado esperado:**
### Caso de prueba: E0-login-03
- Implementado: No

**Titulo:** 

**Descripcion:** 

**Precondiciones:**
1. El usuario debe ingresar con un rol Gestor de Gastos Financieros

**Datos:**
- Correo:
- Contraseña:

**Pasos:**
1. . El usuario accede a la página de inicio
2. ingresa el correo y contraseña

**Resultado esperado:**
### Caso de prueba: E0-login-04
- Implementado: No

**Titulo:** 

**Descripcion:** 

**Precondiciones:**
1. El usuario debe ingresar con un rol Gestor de Gastos Técnicos

**Datos:**
- Correo:
- Contraseña:

**Pasos:**
1. . El usuario accede a la página de inicio
2. ingresa el correo y contraseña

**Resultado esperado:**
### Caso de prueba: E0-login-05
- Implementado: No

**Titulo:** 

**Descripcion:** 

**Precondiciones:**
1. El usuario debe ingresar con un rol Gestor de Asientos Manuales

**Datos:**
- Correo:
- Contraseña:

**Pasos:**
1. . El usuario accede a la página de inicio
2. ingresa el correo y contraseña

**Resultado esperado:**
### Caso de prueba: E0-login-06
- Implementado: No

**Titulo:** 

**Descripcion:** 

**Precondiciones:**
1. El usuario debe ingresar con un rol Gestor de Margen Técnico

**Datos:**
- Correo:
- Contraseña:

**Pasos:**
1. . El usuario accede a la página de inicio
2. ingresa el correo y contraseña

**Resultado esperado:**

---

## Escenario: E1-C-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos comunes

### Caso de prueba: E1-C-01.1
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Líneas del procesamiento de archivos comunes

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Líneas correspondiente para el periodo

**Datos:**
- Archivo Líneas NOMBRE_ARCHIVO definidos en el proceso de comunes

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón ¨Cargar¨.
4. Se levanta el modal con titulo "Cargar Líneas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox
### Caso de prueba: E1-C-01.2
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Productos del procesamiento de archivos comunes

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Productos correspondiente para el periodo

**Datos:**
- Archivo Productos NOMBRE_ARCHIVO definidos en el proceso de comunes

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Comunes" > "Productos".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Productos", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox
### Caso de prueba: E1-C-01.3
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Canales del procesamiento de archivos comunes

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Canales correspondiente para el periodo

**Datos:**
- Archivo Canales NOMBRE_ARCHIVO definidos en el proceso de comunes

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Canales", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox
### Caso de prueba: E1-C-01.4
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Subcanales del procesamiento de archivos comunes

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Subcanales correspondiente para el periodo

**Datos:**
- Archivo Subcanales NOMBRE_ARCHIVO definidos en el proceso de comunes

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Subcanales", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox
### Caso de prueba: E1-C-01.5
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Maestro UoA del procesamiento de archivos comunes

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Maestro UoA correspondiente para el periodo

**Datos:**
- Archivo Maestro UoA NOMBRE_ARCHIVO definidos en el proceso de comunes

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Maestro UoA", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox
### Caso de prueba: E1-C-01.6
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Unidades de Cuenta - BBA/VFA del procesamiento de archivos comunes

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. La información del archivo Unidades de Cuenta - BBA/VFA esté alamacenada en BD.

**Datos:**
- Archivo Unidades de Cuenta - BBA/VFA definidos en el proceso de comunes para el periodo correspondiente

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Comunes" > "Unidades de Cuenta - BBA/VFA".
3. El usuario presiona el botón ¨Traer PCF¨,
4. Se levanta el modal con titulo "Cargar PCF", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox

---

## Escenario: E1-GG-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Parametrización de Gastos Generales

### Caso de prueba: E1-GG-01.1
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Cuentas Contables correspondiente para el periodo

**Datos:**
- Archivo Cuentas Contables NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas contables".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox
### Caso de prueba: E1-GG-01.2
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Partidas definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Partidas correspondiente para el periodo

**Datos:**
- Archivo Partidas NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Partidas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Partidas", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox
### Caso de prueba: E1-GG-01.3
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Centros de Costo definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Centros de Costo correspondiente para el periodo

**Datos:**
- Archivo Centros de Costo NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Centros de Costo".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Centros de Costo", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox
### Caso de prueba: E1-GG-01.4
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Ramos definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Ramos correspondiente para el periodo

**Datos:**
- Archivo Ramos NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Ramos".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Ramos", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox

---

## Escenario: E1-GF-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Parametrización de Gastos Financieros

### Caso de prueba: E1-GF-01.1
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Cuentas Contables correspondiente para el periodo

**Datos:**
- Archivo Cuentas Contables NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox
### Caso de prueba: E1-GF-01.2
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Centros de Costo definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Centros de Costo correspondiente para el periodo

**Datos:**
- Archivo Centros de Costo NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Centros de Costo".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Centros de Costo", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox
### Caso de prueba: E1-GF-01.3
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Maestro Producto definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Maestro Producto correspondiente para el periodo

**Datos:**
- Archivo Maestro Producto NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Producto".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Maestro Producto", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox
### Caso de prueba: E1-GF-01.4
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Driver reservas a UoA definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Driver reservas a UoA correspondiente para el periodo

**Datos:**
- Archivo Driver reservas a UoA NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Driver reservas a UoA".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Driver reservas a UoA", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox
### Caso de prueba: E1-GF-01.5
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Distribución UoA Generales Multiramo definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido Distribución UoA Generales Multiramo correspondiente para el periodo

**Datos:**
- Archivo Distribución UoA Generales Multiramo NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio y selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Distribución UoA Generales Multiramo".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Distribución UoA Generales Multiramo", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal.
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga del sistema es _____ aprox

---

## Escenario: E1-GT-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Parametrización de Gastos Técnicos

### Caso de prueba: E1-GT-01.1
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Ramo definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Parametrización de Gastos Técnicos correspondiente para el periodo

**Datos:**
- Archivo Ramos NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Ramo".
3. El usuario presiona el botón ¨Cargar¨.
4. Se levanta el modal con titulo "Cargar Ramo", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es __ aprox
### Caso de prueba: E1-GT-01.2
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Parametrización de Gastos Técnicos correspondiente para el periodo

**Datos:**
- Archivo Cuentas Contables NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas contables".
3. El usuario presiona el botón ¨Cargar¨.
4. Se levanta el modal con titulo "Cargar cuentas contables", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es es __ aprox
### Caso de prueba: E1-GT-01.3
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Centros definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Parametrización de Gastos Técnicos correspondiente para el periodo

**Datos:**
- Archivo Centros NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. El usuario presiona el botón ¨Cargar¨.
4. Se levanta el modal con titulo "Cargar Centros", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es es __ aprox

---

## Escenario: E1-AM-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Parametrización de Asientos Manuales

_Sin casos de prueba asociados._

---

## Escenario: E1-MT-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Parametrización de Margen Técnico

_Sin casos de prueba asociados._

---

## Escenario: E2-GG-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Aprovisionamiento de Gastos Generales

### Caso de prueba: E2-GG-02.1
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Generales

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 3.19 s
### Caso de prueba: E2-GG-02.2
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Detalles de Gasto definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la generacion del detalle de gastos

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Generales

**Datos:**
- Archivo Detalles de Gasto definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > " Detalles de Gasto".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Generar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 53,37 s
### Caso de prueba: E2-GG-02.3
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Drivers -Centro de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Generales

**Datos:**
- Archivo Drivers -Centro de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers centro".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 1.40 s
### Caso de prueba: E2-GG-02.4
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Drivers- Objeto de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Generales

**Datos:**
- Archivo Drivers- Objeto de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers objeto".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 1,5 min.
### Caso de prueba: E2-GG-02.5
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Generales

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos General

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Unidades de Cuenta-PAA".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 651 ms
### Caso de prueba: E2-GG-02.7
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Asiento Manuales definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Generales

**Datos:**
- Archivo Asiento Manuales definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Asientos manuales".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 3.2 minutos
### Caso de prueba: E2-GG-02.8
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Cuenta UoA definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** 

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Generales

**Datos:**
- Archivo Cuenta UoA definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Cuentas UoA".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 8.28s
### Caso de prueba: E2-GG-02.9
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Generales

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Configuración de Excepciones".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 197 ms
### Caso de prueba: E2-GG-02.10
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Redistribución Ingreso Financiero GG-GF definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Generales

**Datos:**
- Archivo Redistribución Ingreso Financiero GG-GF definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Redistribución Ingreso Financiero GG-GF".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 389 ms

---

## Escenario: E2-GF-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Aprovisionamiento de Gastos Financieros

### Caso de prueba: E2-GF-02.1-1
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Exactus versión 1 definido en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado la versión 1 del archivo definido para el proceso de Aprovisionamiento de Gastos Financieros

**Datos:**
- Archivo Exactus V1 definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario selecciona el periodo (Mes y Año) y la versión(1).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 6.31s.
### Caso de prueba: E2-GF-02.1-2
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Exactus versión 2 definido en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado la versión 2 del archivo definido para el proceso de Aprovisionamiento de Gastos Financieros

**Datos:**
- Archivo Exactus V2 definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario selecciona el periodo (Mes y Año) y la versión(2).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".
6. Si el sistema da un error de que las cuentas contables no existen, se deben agregar una a una las cuentas contables que salen en el error. Para ello va al menú Parametrización/Cuentas contables y en la pantalla que se muestra da clic en el botón ¨Agregar¨, busca la cuenta en la lupa y da Agregar.
7. Se vuelven a ejecutar los pasos del 1 al 4 para cargar nuevamente la versión 2.

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 7.26s.
### Caso de prueba: E2-GF-02.2
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Financieros

**Datos:**
- Archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers producto".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 6,70s.
### Caso de prueba: E2-GF-02.3
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Drivers Subcanal definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Financieros

**Datos:**
- Archivo Drivers Sub canal definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers subcanal".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 470ms.
### Caso de prueba: E2-GF-02.4
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Drivers-Centro de Costo Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Financieros

**Datos:**
- Archivo Drivers-Centro de Costo Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers CC Vida".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 984ms.
### Caso de prueba: E2-GF-02.5
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Financieros

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Unidades de Cuenta- PAA".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 1,54s..
### Caso de prueba: E2-GF-02.6
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Financieros

**Datos:**
- Archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Unidades de Cuenta-BBA y VFA - Pacífico".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Traer PCF".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 3 minutos.
### Caso de prueba: E2-GF-02.7
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Financieros

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Configuración de exepciones".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 266ms.
### Caso de prueba: E2-GF-02.8
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Redistribución Ingreso Financiero GG-GF definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Financieros

**Datos:**
- Archivo Redistribución Ingreso Financiero GG-GF definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Redistribución Ingreso Financiero GG-GF".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo csv a cargar.
5. Agregar el delimitador (;)
6. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 804ms.

---

## Escenario: E2-GT-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Aprovisionamiento de Gastos Técnicos

### Caso de prueba: E2-GT-02.1
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Técnicos

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 11.68s
### Caso de prueba: E2-GT-02.2
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Técnicos

**Datos:**
- Archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers producto".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 2.19 s
### Caso de prueba: E2-GT-02.3
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Drivers Subcanal definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Técnicos

**Datos:**
- Archivo Drivers Subcanal definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers subcanal".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 4.94 s
### Caso de prueba: E2-GT-02.4
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Técnicos

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Unidades de Cuenta- PAA".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 749 ms
### Caso de prueba: E2-GT-02.5
- Implementado: No

**Titulo:** archivo Unidades de Cuenta BBA y VFA Pacífico

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Técnicos

**Datos:**
- Archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Unidades de Cuenta-BBA y VFA - Pacífico".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Traer PCF".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 3.06 minutos
### Caso de prueba: E2-GT-02.6
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Técnicos

**Datos:**
- Archivo Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Cuentas UoA".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 2,36 s.
### Caso de prueba: E2-GT-02.7
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Técnicos

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Configuración de exepciones".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 210 ms
### Caso de prueba: E2-GT-02.8
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Redistribución Rescate GT definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Aprovisionamiento de Gastos Técnicos

**Datos:**
- Archivo Redistribución Rescate GT definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Redistribución Rescate GT".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 576 ms

---

## Escenario: E2-AM-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Aprovisionamiento de Asientos Manuales

_Sin casos de prueba asociados._

---

## Escenario: E2-MT-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Aprovisionamiento de Margen Técnico

_Sin casos de prueba asociados._

---

## Escenario: E3-GG-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Asignaciones de Gastos Generales

### Caso de prueba: E3-GG-03.1
- Implementado: No

**Titulo:** Tiempo de procesamiento de archivo Asignación de Drivers de Centros a Bolsas definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Asignaciones de Gastos Generales

**Datos:**
- Archivo Asignación de Drivers de Centros a Bolsas definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Fase 1 - Bolsas".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 1.31 s
### Caso de prueba: E3-GG-03.2
- Implementado: No

**Titulo:** Tiempo de procesamiento de archivo Asignación de Drivers a Entidades definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Asignaciones de Gastos Generales

**Datos:**
- Archivo Asignación de Drivers a Entidades definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Fase 2 - Cascada".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 567 ms
### Caso de prueba: E3-GG-03.3
- Implementado: No

**Titulo:** Tiempo de procesamiento de archivo Asignación de Drivers Objetos definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Asignaciones de Gastos Generales

**Datos:**
- Archivo Asignación de Drivers Objetos definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Fase 3 - Objetos".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 1.38 s
### Caso de prueba: E3-GG-03.4
- Implementado: No

**Titulo:** Tiempo de procesamiento de archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Asignaciones de Gastos Generales

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Fase 4- Especiales Niif".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 948 ms
### Caso de prueba: E3-GG-03.5
- Implementado: No

**Titulo:** Tiempo de procesamiento de archivo Asignación Líneas Niif definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Asignaciones de Gastos Generales

**Datos:**
- Archivo Asignación Líneas Niif definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Lineas Niif".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 10,04 s
### Caso de prueba: E3-GG-03.6
- Implementado: No

**Titulo:** Tiempo de procesamiento de archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Asignaciones de Gastos Generales

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Cuenta Concepto".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 16.52 s

---

## Escenario: E3-GF-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Asignaciones de Gastos Financiero

### Caso de prueba: E3-GF-03.1
- Implementado: No

**Titulo:** Tiempo de procesamiento de archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Financieros

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Asignaciones de Gastos Financieros

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Financiero

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financiero".
2. El usuario selecciona del menú lateral "Asignaciones" > "Fase 4 - Especiales Niif".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 355 ms
### Caso de prueba: E3-GF-03.2
- Implementado: No

**Titulo:** Tiempo de procesamiento de archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Asignaciones de Gastos Financieros

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financiero".
2. El usuario selecciona del menú lateral "Asignaciones" > "Cuenta Concepto".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 7,94s.

---

## Escenario: E3-GT-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Asignaciones de Gastos Técnicos

### Caso de prueba: E3-GT-03.1
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Asignaciones de Métodos Subcanal definidos en el proceso de Asignación de Gastos Técnicos

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Asignaciones de Gastos Técnicos

**Datos:**
- Archivo Asignaciones de Métodos Subcanal definidos en el proceso de Asignación de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Asignaciones" > "Métodos subcanal".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 35 s
### Caso de prueba: E3-GT-03.2
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Asignaciones de Gastos Técnicos

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Asignaciones" > "Fase 4 - Especiales Niif".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. El tiempo de carga de la versión actual del sistema es 259 ms
### Caso de prueba: E3-GT-03.3
- Implementado: No

**Titulo:** Tiempo de procesamiento del archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Tomar el tiempo de duración de la carga de este archivo

**Precondiciones:**
1. El usuario ha seleccionado el archivo definido para el proceso de Asignaciones de Gastos Técnicos

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Asignaciones" > "Cuenta Concepto".
3. El usuario selecciona el periodo (Mes y Año).
4. El usuario presiona el botón "Cargar", da clic en Seleccionar archivo y selecciona el archivo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de este archivo. Aunque el archivo al cargarlo muestra errores. El tiempo de carga de la versión actual del sistema es 35.32 s

---

## Escenario: E3-AM-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Asignaciones de Asientos Manuales

_Sin casos de prueba asociados._

---

## Escenario: E3-MT-01
**Descripcion:** Validar el Tiempo de procesamiento de los archivos definidos en el proceso de Asignaciones de Margen Técnico

_Sin casos de prueba asociados._

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

### Caso de prueba: E40-DIS-02
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
El sistema no crea una nueva distribucion y muestra un mensaje Algunos datos tienen un formato no válido o contienen caracteres extraños

---

## Escenario: E41-DIS-01
**Descripcion:** Validar que el sistema permita visualizar una distribucion desde el menu de acciones

### Caso de prueba: E41-DIS-01
- Implementado: No

**Titulo:** Validar que se pueda visualizar una nueva distribución desde el menu de acciones

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

### Caso de prueba: E42-DIS-01
- Implementado: No

**Titulo:** Validar que se pueda copiar una distribución ya creada desde el menu de acciones

**Descripcion:** Validar que se realice una copia de una distribución ya creada anteriormente.

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos
2. Se debe haber creado la distribución origen
3. La distribución selecciona para realizar la copia está en estado Creado

**Datos:**
- Data de la distribución seleccionada como origen para realizar la copia.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''.
2. El usuario presiona el icono "copy" para copiar el registro de la distribución seleccionada.
3. __________________________????????
4. Se muestra ______________________________

**Resultado esperado:**
Se copian los datos de la distribucion seleccionada correctamente y muestra un mensaje ___________________________

---

## Escenario: E43-DIS-01
**Descripcion:** Validar que el sistema permita eliminar una distribucion desde el menu de acciones

### Caso de prueba: E43-DIS-01
- Implementado: No

**Titulo:** Validar que se pueda eliminar una distribución desde el menu de acciones

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
### Caso de prueba: E43-DIS-02
- Implementado: No

**Titulo:** Validar que no se pueda eliminar una distribucion desde el menu de acciones

**Descripcion:** Validar que no se elimine una distribucion

**Precondiciones:**
1. El usuario debe ingresar con un rol Administrador de Gastos de Gastos
2. Se debe haber creado una distribucion
3. Estados: ___________

**Datos:**
- 

**Pasos:**
1. 

**Resultado esperado:**

---

## Escenario: E57-C-01
**Descripcion:** Validar que no se cargue un archivo con los datos que no corresponden al período actual en el flujo de comunes

### Caso de prueba: E57-C-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Líneas que no corresponde al período en el flujo de comunes

**Descripcion:** Validar la carga de un archivo que no corresponde al período seleccionado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Administrador de Gastos.

**Datos:**
- Archivo Lineas ''Real Lineas'' que corresponde a la funcionalidad pero no al periodo

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Líneas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Línea de otro periodo a cargar.
5. Se muestra un mensaje de error

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. El archivo no corresponde al período actual. Verifique la información.
### Caso de prueba: E57-C-01.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Grupo Producto que no corresponde al período en el flujo de comunes

**Descripcion:** Validar la carga de un archivo que no corresponde al período seleccionado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Administrador de Gastos.

**Datos:**
- Archivo Lineas ''Real Grupo Producto'' que corresponde a la funcionalidad pero no al periodo

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Grupo Producto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Línea de otro periodo a cargar.
5. Se muestra un mensaje de error

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. El archivo no corresponde al período actual. Verifique la información.
### Caso de prueba: E57-C-01.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Canales que no corresponde al período en el flujo de comunes

**Descripcion:** Validar la carga de un archivo que no corresponde al período seleccionado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Administrador de Gastos.

**Datos:**
- Archivo Lineas ''Real Canales'' que corresponde a la funcionalidad pero no al periodo

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Canales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Línea de otro periodo a cargar.
5. Se muestra un mensaje de error

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. El archivo no corresponde al período actual. Verifique la información.
### Caso de prueba: E57-C-01.4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Subcanales que no corresponde al período en el flujo de comunes

**Descripcion:** Validar la carga de un archivo que no corresponde al período seleccionado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Administrador de Gastos.

**Datos:**
- Archivo Lineas ''Real Subcanales'' que corresponde a la funcionalidad pero no al periodo

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Subcanales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Línea de otro periodo a cargar.
5. Se muestra un mensaje de error

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. El archivo no corresponde al período actual. Verifique la información.
### Caso de prueba: E57-C-01.5
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Maestro UoA que no corresponde al período en el flujo de comunes

**Descripcion:** Validar la carga de un archivo que no corresponde al período seleccionado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Administrador de Gastos.

**Datos:**
- Archivo Lineas ''Real Maestro UoA'' que corresponde a la funcionalidad pero no al periodo

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Maestro UoA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Línea de otro periodo a cargar.
5. Se muestra un mensaje de error

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. El archivo no corresponde al período actual. Verifique la información.
### Caso de prueba: E57-C-01.6
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Configuración de Parches que no corresponde al período en el flujo de comunes

**Descripcion:** Validar la carga de un archivo que no corresponde al período seleccionado.

**Precondiciones:**
1. El usuario registrado tenga el rol de Administrador de Gastos.

**Datos:**
- Archivo Lineas ''Real Configuración de Parches'' que corresponde a la funcionalidad pero no al periodo

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Cargar Parches", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo Línea de otro periodo a cargar.
5. Se muestra un mensaje de error

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error. El archivo no corresponde al período actual. Verifique la información.

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

**Titulo:** Carga de el archivo Líneas para el mismo periodo que ya contiene información definido en el proceso Comunes

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
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

**Titulo:** Carga de el archivo Grupo Producto para el mismo periodo que ya contiene información definido en el proceso Comunes

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
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

**Titulo:** Carga de el archivo Canales para el mismo periodo que ya contiene información definido en el proceso Comunes

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
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

**Titulo:** Carga de el archivo Subcanales para el mismo periodo que ya contiene información definido en el proceso Comunes

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
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

**Titulo:** Carga de el archivo Maestro UoA para el mismo periodo que ya contiene información definido en el proceso Comunes

**Descripcion:** Validar que la información no se duplique y que la carga más reciente tenga la prioridad esperada.

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
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

**Titulo:** Carga de el archivo Configuración de Parches para el mismo periodo que ya contiene información definido en el proceso Comunes

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
1. Existencia del archivo correspondiente para el periodo
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
- Implementado: No

**Titulo:** Carga del archivo Grupo Producto definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
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
- Implementado: No

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
- Implementado: No

**Titulo:** Carga del archivo Canales definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
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
- Implementado: No

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
- Implementado: No

**Titulo:** Carga del archivo Subcanales definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
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
- Implementado: No

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
- Implementado: No

**Titulo:** Carga del archivo Maestro UoA definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
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
- Implementado: No

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
- Implementado: No

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
- Implementado: No

**Titulo:** Carga del archivo Configuración de Parches definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
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
- Implementado: No

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

## Escenario: E4-GG-01
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Parametrización de Gastos Generales

### Caso de prueba: E4-GG-01.1
- Implementado: No

**Titulo:** Carga del archivo Cuentas Contables definido en el proceso de Parametrización de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Cuentas Contables NOMBRE_ARCHIVO definido en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales"
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas contables".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo cuentas contables ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-01.2
- Implementado: No

**Titulo:** Carga del archivo Partidas definidos en el proceso de Parametrización de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Partidas NOMBRE_ARCHIVO definido en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales"
2. El usuario selecciona del menú lateral "Parametrización" > "Partidas".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Partidas", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Partidas ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-01.3
- Implementado: No

**Titulo:** Carga del archivo Centros de Costo definidos en el proceso de Parametrización de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Centros de Costo NOMBRE_ARCHIVO definido en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales"
2. El usuario selecciona del menú lateral "Parametrización" > "Centros de Costo".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Centros de Costo", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Centros de Costo ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-01.4
- Implementado: No

**Titulo:** Carga del archivo Ramo definidos en el proceso de Parametrización de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Ramos NOMBRE_ARCHIVO definido en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales"
2. El usuario selecciona del menú lateral "Parametrización" > "Ramos".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Ramos", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Ramos ha sido cargado satisfactoriamente.

---

## Escenario: E4-GF-01
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Parametrización de Gastos Financieros

### Caso de prueba: E4-GF-01.1
- Implementado: No

**Titulo:** Carga del archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Financieros en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Cuentas Contables NOMBRE_ARCHIVO definido en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas contables".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Cuentas Contables ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GF-01.2
- Implementado: No

**Titulo:** Carga del archivo Centros de Costo definidos en el proceso de Parametrización de Gastos Financieros en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Centros de Costo NOMBRE_ARCHIVO definido en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Centros de Costo".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Centros de Costo", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Centros de Costo ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GF-01.3
- Implementado: No

**Titulo:** Carga del archivo Maestro Producto definidos en el proceso de Parametrización de Gastos Financieros en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Maestro Producto NOMBRE_ARCHIVO definido en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Maestro Producto ".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Maestro Producto ", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Maestro Producto ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GF-01.4
- Implementado: No

**Titulo:** Carga del archivo Driver Reservas a UoA definidos en el proceso de Parametrización de Gastos Financieros en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Driver Reservas a UoA NOMBRE_ARCHIVO definido en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Driver Reservas a UoA ".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Driver Reservas a UoA ", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Driver Reservas a UoA ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GF-01.5
- Implementado: No

**Titulo:** Carga del archivo Distribución UoA Generales Multiramo definidos en el proceso de Parametrización de Gastos Financieros en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Distribución UoA Generales Multiramo NOMBRE_ARCHIVO definido en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Distribución UoA Generales Multiramo".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Distribución UoA Generales Multiramo ", el botón aceptar esta deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Distribución UoA Generales Multiramo ha sido cargado satisfactoriamente.

---

## Escenario: E4-GT-01
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Parametrización de Gastos Técnicos

### Caso de prueba: E4-GT-01.1
- Implementado: No

**Titulo:** Carga del archivo Ramos definidos en el proceso de Parametrización de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Ramos NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Ramos".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Ramos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Ramos ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GT-01.3
- Implementado: No

**Titulo:** Carga del archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Cuentas Contables NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Cuentas Contables ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GT-01.8
- Implementado: No

**Titulo:** Carga del archivo Centros de costo definidos en el proceso de Parametrización de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Centros de costo NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Centros de costo".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Centros de costo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Centros de costo ha sido cargado satisfactoriamente.

---

## Escenario: E4-AM-01
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Parametrización de Asientos Manuales

### Caso de prueba: E4-AM-01.1
- Implementado: No

**Titulo:** Carga del archivo Cuentas Contables definido en el proceso de Parametrización de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Cuentas Contables NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Asientos Manuales".
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Cuentas Contables ha sido cargado satisfactoriamente.
### Caso de prueba: E4-AM-01.2
- Implementado: No

**Titulo:** Carga del archivo Partidas definidos en el proceso de Parametrización de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Partidas NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Asientos Manuales".
2. El usuario selecciona del menú lateral "Parametrización" > "Partidas".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Partidas", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Partidas ha sido cargado satisfactoriamente.
### Caso de prueba: E4-AM-01.3
- Implementado: No

**Titulo:** Carga del archivo Centros de Costo definidos en el proceso de Parametrización de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Centros de costo NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Asientos Manuales".
2. El usuario selecciona del menú lateral "Parametrización" > "Centros de costo".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Centros de costo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Centros de costo ha sido cargado satisfactoriamente.
### Caso de prueba: E4-AM-01.4
- Implementado: No

**Titulo:** Carga del archivo Ramos definidos en el proceso de Parametrización de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Ramos NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Asientos Manuales".
2. El usuario selecciona del menú lateral "Parametrización" > "Ramos".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Ramos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Ramos ha sido cargado satisfactoriamente.

---

## Escenario: E4-MT-01
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Parametrización de Margen Técnico

### Caso de prueba: E4-MT-01.1
- Implementado: No

**Titulo:** Carga del archivo Ramo definidos en el proceso de Parametrización de Margen Técnico en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Ramos NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Margen Técnico

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Margen Técnico".
2. El usuario selecciona del menú lateral "Parametrización" > "Ramos".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Ramos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Ramos ha sido cargado satisfactoriamente.
### Caso de prueba: E4-MT-01.2
- Implementado: No

**Titulo:** Carga del archivo Cuentas Contables definido en el proceso de Parametrización de Margen Técnico en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Cuentas Contables NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Margen Técnico

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Margen Técnico".
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Cuentas Contables", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Cuentas Contables ha sido cargado satisfactoriamente.
### Caso de prueba: E4-MT-01.3
- Implementado: No

**Titulo:** Carga del archivo Centros de Costo definidos en el proceso de Parametrización de Margen Técnico en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Centros de Costo NOMBRE_ARCHIVO definidos en el proceso de Parametrización de Margen Técnico

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Margen Técnico".
2. El usuario selecciona del menú lateral "Parametrización" > "Centros de Costo".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Centros de Costo", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Centros de Costo ha sido cargado satisfactoriamente.

---

## Escenario: E4-GG-02
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Aprovisionamiento de Gastos Generales

### Caso de prueba: E4-GG-02.1
- Implementado: No

**Titulo:** Carga del archivo Exactus (sin procesar) definidos en el proceso de Aprovisionamiento de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Exactus sin procesar definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > "Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario presiona el botón Elegir archivo en el modal Cargar Exactus General.
5. El usuario selecciona el archivo de Exactus a cargar.
6. El usuario presiona "Cargar".

**Resultado esperado:**
El archivo Exactus ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-02.3
- Implementado: No

**Titulo:** Carga del archivo Driver Centro definidos en el proceso de Aprovisionamiento de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Driver Centro NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Margen Técnico

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Driver Centro".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Driver Centro", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Driver Centro de Costo ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-02.4
- Implementado: No

**Titulo:** Carga del archivo Driver Objeto definidos en el proceso de Aprovisionamiento de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Driver Objeto NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Margen Técnico

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Driver Objeto ".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Driver Objeto", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Objeto de Costo ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-02.5
- Implementado: No

**Titulo:** Carga del archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Unidades de cuenta PAA NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos General

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Unidades de cuenta PAA ".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Unidades de cuenta PAA", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Unidades de cuenta PAA ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-02.6
- Implementado: No

**Titulo:** Carga del archivo Redistribución Ingreso Financiero definidos en el proceso de Aprovisionamiento de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Redistribución Ingreso Financiero NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Redistribución Ingreso Financiero ".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Redistribución Ingreso Financiero", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Redistribución Ingreso Financiero ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-02.7.1
- Implementado: No

**Titulo:** Carga del archivo Maestro Gestor - N1_Maestro_cuenta-partida-ceco definidos en el proceso de Aprovisionamiento de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo N1_Maestro_cuenta-partida-ceco NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Maestro Gestor".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''N1_Maestro_cuenta-partida-ceco", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo N1_Maestro_cuenta-partida-ceco ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-02.7.2
- Implementado: No

**Titulo:** Carga del archivo Maestro Gestor - N2_Maestro_cuenta-partida definidos en el proceso de Aprovisionamiento de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo N2_Maestro_cuenta-partida NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Maestro Gestor".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''N2_Maestro_cuenta-partida", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo N2_Maestro_cuenta-partida ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-02.7.3
- Implementado: No

**Titulo:** Carga del archivo Maestro Gestor - N3_Maestro_cuenta-gestor definidos en el proceso de Aprovisionamiento de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo N3_Maestro_cuenta-gestor NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Maestro Gestor".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''N3_Maestro_cuenta-gestor", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo N3_Maestro_cuenta-gestor ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-02.8
- Implementado: No

**Titulo:** Carga del archivo Mestro Embebidos definidos en el proceso de Aprovisionamiento de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Mestro de Embebidos NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Mestro Embebidos".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Mestro de Embebidos", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Mestro de Embebidos ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-02.9
- Implementado: No

**Titulo:** Carga del archivo Mapa CBR definidos en el proceso de Aprovisionamiento de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Mapa CBR NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Mapa CBR".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Mapa CBR", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Mapa CBR ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-02.9
- Implementado: No

**Titulo:** Carga del archivo Maestro Propio y Asignado definidos en el proceso de Aprovisionamiento de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Maestro Propio y Asignado NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Maestro Propio y Asignado".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Maestro Propio y Asignado", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Maestro Propio y Asignado ha sido cargado satisfactoriamente.

---

## Escenario: E4-GF-02
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Aprovisionamiento de Gastos Financieros

### Caso de prueba: E4-GF-02.1
- Implementado: No

**Titulo:** Carga del archivo Exactus sin procesar definidos en el proceso de Aprovisionamiento de Gastos Financieros en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Exactus sin procesar NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".
3. El usuario selecciona el periodo (Mes y Año) y la versión(1).
4. El usuario presiona el botón "Cargar".
5. Se levanta el modal con titulo "Cargar ''Exactus", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
6. Se muestra la información en el front del modal.
7. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Exactus sin procesar ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GF-02.2
- Implementado: No

**Titulo:** Carga del archivo AMED definidos en el proceso de Aprovisionamiento de Gastos Financieros en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo AMED NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "AMED".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''AMED, el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo AMED ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GF-02.3
- Implementado: No

**Titulo:** Carga del archivo Ap Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Ap Vida NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Ap Vida".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Ap Vida, el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Ap Vida ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GF-02.4
- Implementado: No

**Titulo:** Carga del archivo Driver Producto definidos en el proceso de Aprovisionamiento de Gastos Financieros en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Drivers Productos NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Drivers Producto''
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Drivers Producto, el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Producto ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GF-02.5
- Implementado: No

**Titulo:** Carga del archivo Drivers Subcanal definidos en el proceso de Aprovisionamiento de Gastos Financieros en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Drivers Subcanal NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Drivers Subcanal''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Drivers Subcanal , el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Subcanal ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GF-02.6
- Implementado: No

**Titulo:** Carga del archivo Drivers CC Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Drivers Centro de Costo Vida NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Drivers CC Vida''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Drivers CC Vida, el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Centro de Costo Vida ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GF-02.7
- Implementado: No

**Titulo:** Carga del archivo Configuración de Maestro de Embebidos definidos en el proceso de Aprovisionamiento de Gastos Financieros en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Maestro de Embebidos NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Maestro de Embebidos''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Maestro de Embebidos'', el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Configuración de Maestro de Embebidos ha sido cargado satisfactoriamente.

---

## Escenario: E4-GT-02
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Aprovisionamiento de Gastos Técnicos

### Caso de prueba: E4-GT-02.1
- Implementado: No

**Titulo:** Carga del archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Exactus NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos"
2. El usuario selecciona del menú lateral "Aprovisionamiento" > " Exactus".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo ""Cargar ''Exactus, el botón aceptar está deshabilitado, el usuario da clic en ""Haz click para examinar"" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona ""Aceptar"".
7. "

**Resultado esperado:**
El archivo Exactus ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GT-02.2
- Implementado: No

**Titulo:** Carga del archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Drivers Productos NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos"..
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Drivers Productos''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Drivers Productos,'' el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Productos ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GT-02.3
- Implementado: No

**Titulo:** Carga del archivo Drivers Subcanal definidos en el proceso de Aprovisionamiento de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Drivers Subcanal NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos"..
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Drivers Subcanal''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Drivers Subcanal'', el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Subcanal ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GT-02.4
- Implementado: No

**Titulo:** Carga del archivo Unidades de cuenta GT definidos en el proceso de Aprovisionamiento de Gastos Técnico en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Unidades de cuenta GT NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos"..
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Unidades de cuenta GT.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Unidades de cuenta GT , el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Unidades de cuenta GT ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GT-02.5
- Implementado: No

**Titulo:** Carga del archivo Maestro de Embebidos definidos en el proceso de Aprovisionamiento de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Maestro de Embebidos NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos"..
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Maestro de Embebidos.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Maestro de Embebidos, el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Maestro de Embebidos ha sido cargado satisfactoriamente.

---

## Escenario: E4-AM-02
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Aprovisionamiento de Asientos Manuales

### Caso de prueba: E4-AM-02.1
- Implementado: No

**Titulo:** Carga del archivo Exactus definidos en el proceso de Aprovisionamiento de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Exactus NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Asientos Manuales"
2. El usuario selecciona del menú lateral "Aprovisionamiento" > " Exactus".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo ""Cargar ''Exactus, el botón aceptar está deshabilitado, el usuario da clic en ""Haz click para examinar"" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona ""Aceptar"".
7. "

**Resultado esperado:**
El archivo Exactus ha sido cargado satisfactoriamente.
### Caso de prueba: E4-AM-02.2
- Implementado: No

**Titulo:** Carga del archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Drivers Productos NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Asientos Manuales"..
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Drivers Productos''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Drivers Productos,'' el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Productos ha sido cargado satisfactoriamente.
### Caso de prueba: E4-AM-02.3
- Implementado: No

**Titulo:** Carga del archivo Drivers Subcanal definidos en el proceso de Aprovisionamiento de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Drivers Subcanal NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Asientos Manuales"..
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Drivers Subcanal''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Drivers Subcanal'', el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Subcanal ha sido cargado satisfactoriamente.
### Caso de prueba: E4-AM-02.4
- Implementado: No

**Titulo:** Carga del archivo Unidades de cuenta AM definidos en el proceso de Aprovisionamiento de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Unidades de cuenta AM NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Asientos Manuales"..
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Unidades de cuenta AM''
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Unidades de cuenta AM'' , el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Unidades de cuenta AM ha sido cargado satisfactoriamente.
### Caso de prueba: E4-AM-02.5
- Implementado: No

**Titulo:** Carga del archivo Redistribución Ingreso Financiero GG definidos en el proceso de Aprovisionamiento de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Redistribución Ingreso Financiero GG NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Asientos Manuales"..
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Redistribución Ingreso Financiero GG''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Redistribución Ingreso Financiero GG'', el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Redistribución Ingreso Financiero GG ha sido cargado satisfactoriamente.
### Caso de prueba: E4-AM-02.6
- Implementado: No

**Titulo:** Carga del archivo Maestro Propio y Asignado definidos en el proceso de Aprovisionamiento de Asientos Manuales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Maestro Propio y Asignado NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Asientos Manuales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Asientos Manuales"..
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Maestro Propio y Asignado''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Maestro Propio y Asignado'', el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Maestro Propio y Asignado ha sido cargado satisfactoriamente.

---

## Escenario: E4-MT-02
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Aprovisionamiento de Margen Técnico

### Caso de prueba: E4-MT-02.1
- Implementado: No

**Titulo:** Carga del archivo Exactus definidos en el proceso de Aprovisionamiento de Margen Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Exactus NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Margen Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Margen Técnicos"
2. El usuario selecciona del menú lateral "Aprovisionamiento" > " Exactus".
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo ""Cargar ''Exactus, el botón aceptar está deshabilitado, el usuario da clic en ""Haz click para examinar"" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona ""Aceptar"".
7. "

**Resultado esperado:**
El archivo Exactus ha sido cargado satisfactoriamente.
### Caso de prueba: E4-MT-02.2
- Implementado: No

**Titulo:** Carga del archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Margen Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor. Cabeceras correctas y archivo del periodo correcto

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Drivers Productos NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Margen Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Margen Técnicos"..
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Drivers Productos''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Drivers Productos,'' el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Productos ha sido cargado satisfactoriamente.
### Caso de prueba: E4-MT-02.3
- Implementado: No

**Titulo:** Carga del archivo Drivers Subcanal definidos en el proceso de Aprovisionamiento de Margen Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Drivers Subcanal NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Margen Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Margen Técnicos"..
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Drivers Subcanal''.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Drivers Subcanal'', el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Drivers Subcanal ha sido cargado satisfactoriamente.
### Caso de prueba: E4-MT-02.4
- Implementado: No

**Titulo:** Carga del archivo Unidades de cuenta GT definidos en el proceso de Aprovisionamiento de Margen Técnico en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Unidades de cuenta GT NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Margen Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Margen Técnicos"..
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Unidades de cuenta GT.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Unidades de cuenta GT , el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Unidades de cuenta GT ha sido cargado satisfactoriamente.
### Caso de prueba: E4-MT-02.5
- Implementado: No

**Titulo:** Carga del archivo Maestro de Embebidos definidos en el proceso de Aprovisionamiento de Margen Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo

**Datos:**
- Archivo Maestro de Embebidos NOMBRE_ARCHIVO definidos en el proceso de Aprovisionamiento de Margen Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Margen Técnicos"..
2. El usuario selecciona del menú lateral "Aprovisionamiento " > "Maestro de Embebidos.
3. El usuario presiona botón Cargar.
4. Se levanta el modal con titulo "Cargar ''Maestro de Embebidos, el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. Se muestra la información en el front del modal
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".

**Resultado esperado:**
El archivo Maestro de Embebidos ha sido cargado satisfactoriamente.

---

## Escenario: E4-GG-03
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Asignaciones de Gastos Generales

### Caso de prueba: E4-GG-03.1
- Implementado: No

**Titulo:** Carga del archivo Drivers de Centros a Bolsas definidos en el proceso de Asignaciones de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo.

**Datos:**
- Archivo Asignación de Drivers de Centros a Bolsas definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación de Drivers de Centros a Bolsas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar"
4. El usuario presiona el botón Elegir archivo en el modal Cargar Asignación de Drivers de Centros a Bolsas
5. 5, El usuario selecciona el archivo Asignación de Drivers de Centros a Bolsas.
6. 6, El usuario presiona "Cargar".

**Resultado esperado:**
El archivo Asignación de Drivers de Centros a Bolsas ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-03.2
- Implementado: No

**Titulo:** Carga del archivo Drivers a Entidades definidos en el proceso de Asignaciones de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo.

**Datos:**
- Archivo Asignación de Drivers a Entidades definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > "Asignación de Drivers a Entidades".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar"
4. El usuario presiona el botón Elegir archivo en el modal Cargar Asignación de Drivers a Entidades
5. 5, El usuario selecciona el archivo Asignación de Drivers a Entidades
6. 6, El usuario presiona "Cargar".

**Resultado esperado:**
El archivo Asignación de Drivers a Entidades ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-03.3
- Implementado: No

**Titulo:** Carga del archivo Drivers Drivers Objetos definidos en el proceso de Asignaciones de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo.

**Datos:**
- Archivo Asignación de Drivers Objetos definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación de Drivers Objetos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar"
4. El usuario presiona el botón Elegir archivo en el modal Cargar Asignación de Drivers Objetos
5. 5, El usuario selecciona el archivo Asignación de Drivers Objetos
6. 6, El usuario presiona "Cargar".

**Resultado esperado:**
El archivo Asignación de Drivers Objetos ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-03.4
- Implementado: No

**Titulo:** Carga del archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo.

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación Especiales Niif".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar"
4. El usuario presiona el botón Elegir archivo en el modal Cargar Asignación Especiales Niif
5. 5, El usuario selecciona el archivo Asignación Especiales Niif
6. 6, El usuario presiona "Cargar".

**Resultado esperado:**
El archivo Asignación Especiales Niif ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-03.5
- Implementado: No

**Titulo:** Carga del archivo Asignación Líneas Niif definidos en el proceso de Asignaciones de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo.

**Datos:**
- Archivo Asignación Líneas Niif definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación Líneas Niif".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar"
4. El usuario presiona el botón Elegir archivo en el modal Cargar Asignación Líneas Niif
5. 5, El usuario selecciona el archivo Asignación de Líneas Niif
6. 6, El usuario presiona "Cargar".

**Resultado esperado:**
El archivo Líneas Niif ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GG-03.6
- Implementado: No

**Titulo:** Carga del archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Generales en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo.

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > "Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar"
4. El usuario presiona el botón Elegir archivo en el modal Cargar Asignación Cuentas Conceptos
5. 5, El usuario selecciona el archivo Asignación Cuentas Conceptos
6. 6, El usuario presiona "Cargar".

**Resultado esperado:**
El archivo Asignación Cuentas Conceptos ha sido cargado satisfactoriamente.

---

## Escenario: E4-GF-03
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Asignaciones de Gastos Financiero

### Caso de prueba: E4-GF-03.1
- Implementado: No

**Titulo:** Carga del archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Financiero en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo.

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Asignaciones" > " Asignación Especiales Niif".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar"
4. El usuario presiona el botón Elegir archivo en el modal Cargar Asignación Método Valoración
5. 5, El usuario selecciona el archivo Asignación Especiales Niif
6. 6, El usuario presiona "Cargar".

**Resultado esperado:**
El archivo Asignación Especiales Niif ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GF-03.2
- Implementado: No

**Titulo:** Carga del archivo signación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo.

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Asignaciones" > " Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar"
4. El usuario presiona el botón Elegir archivo en el modal Cargar Asignación Cuentas Conceptos
5. 5, El usuario selecciona el archivo Asignación Cuentas Conceptos
6. 6, El usuario presiona "Cargar".

**Resultado esperado:**
El archivo Asignación Cuentas Conceptos ha sido cargado satisfactoriamente, despues de eliminar las filas repetidas manualmente del archivo.

---

## Escenario: E4-GT-03
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Asignaciones de Gastos Técnicos

### Caso de prueba: E4-GT-03.1
- Implementado: No

**Titulo:** Carga del archivo Asignaciones de Métodos Subcanal definidos en el proceso de Asignaciones de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo.

**Datos:**
- Archivo Asignaciones de Métodos Subcanal definidos en el proceso de Asignación de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignaciones de Métodos Subcanal".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar"
4. El usuario presiona el botón Elegir archivo en el modal Cargar Asignaciines de Métodos Subcanal
5. 5, El usuario selecciona el archivo Asignaciines de Métodos Subcanal
6. 6, El usuario presiona "Cargar".

**Resultado esperado:**
El archivo Asignación de Métodos Subcanal ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GT-03.2
- Implementado: No

**Titulo:** Carga del archivo Asignaciones Especiales Niif definidos en el proceso de Asignaciones de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo.

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignaciones de Asignación Especiales Niifl".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar"
4. El usuario presiona el botón Elegir archivo en el modal Cargar Asignación Método Valoración
5. 5, El usuario selecciona el archivo Asignación Especiales Niif
6. 6, El usuario presiona "Cargar".

**Resultado esperado:**
El archivo Asignación Especiales Niif ha sido cargado satisfactoriamente.
### Caso de prueba: E4-GT-03.3
- Implementado: No

**Titulo:** Carga del archivo Asignaciones Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Técnicos en el formato permitido

**Descripcion:** Validar la carga del archivo correspondiente en el formato establecido por el motor

**Precondiciones:**
1. Existencia del archivo.

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar"
4. El usuario presiona el botón Elegir archivo en el modal Cargar Asignación Cuentas Conceptos
5. 5, El usuario selecciona el archivo Asignación Cuentas Conceptos
6. 6, El usuario presiona "Cargar".

**Resultado esperado:**
El archivo Asignación Cuentas Conceptos ha sido cargado satisfactoriamente.

---

## Escenario: E4-AM-03
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Asignaciones de Asientos Manuales

_Sin casos de prueba asociados._

---

## Escenario: E4-MT-03
**Descripcion:** Validación de la carga de los archivos en formato permitido en el proceso de Asignaciones de Margen Técnico

_Sin casos de prueba asociados._

---

## Escenario: E5-C-01
**Descripcion:** Validar que no se cargue un archivo que no corresponde con la opción/funcionalidad del proceso de comunes

### Caso de prueba: E5-C-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Líneas diferente al definidos en el proceso Comunes

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia del archivo correspondiente para el periodo
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
1. Existencia del archivo correspondiente para el periodo
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
1. Existencia del archivo correspondiente para el periodo
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
1. Existencia del archivo correspondiente para el periodo
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
1. Existencia del archivo correspondiente para el periodo
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
1. Existencia del archivo correspondiente para el periodo
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
1. Existencia del archivo correspondiente para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

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
1. Existencia del archivo correspondiente para el periodo
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

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
1. Existencia del archivo correspondiente para el periodo
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

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
1. Existencia del archivo correspondiente para el periodo
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

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
1. Existencia del archivo correspondiente para el periodo
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

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
1. Existencia del archivo correspondiente para el periodo
2. usuario registrado tenga el rol de Administrador de Gastos.
3. que el archivo anterior se haya cargado

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. El usuario presiona el botón "Cargar".
4. Se levanta el modal con titulo "Configuración de Parches", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo distinto a Configuración de Parches

**Resultado esperado:**
El sistema no habilita el boton procesar archivo y muestra un mensaje "El Archivo [nombre archivo no coincide con los permitidos [nombre archivo]"

---

## Escenario: E5-GG-01
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Parametrización de Gastos Generales

### Caso de prueba: E5-GG-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Cuentas Contables-periodo diferente al definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Cuentas contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Cuentas contables a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-01.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Partidas-periodo diferente al definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Partidas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Partidas a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-01.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Centro de Costo-periodo diferente al definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Centro de Costo".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Centro de Costo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-01.4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Producto-periodo diferente al definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Producto".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Producto a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-01.5
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Sub Canales-periodo diferente al definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Sub Canales a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E5-GF-01
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Parametrización de Gastos Financieros

### Caso de prueba: E5-GF-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Cuentas Contables-periodo diferente al definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Cuentas contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Cuentas contables a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GF-01.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Producto-periodo diferente al definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Producto".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Producto a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GF-01.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Sub Canales-periodo diferente al definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Sub Canales a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GF-01.4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Centro de Costo-periodo diferente al definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Centro de Costo".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Centro de Costo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E5-GT-01
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Parametrización de Gastos Técnicos

### Caso de prueba: E5-GT-01.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Cuentas Contables-periodo diferente al definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Cuentas contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Cuentas contables a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GT-01.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Producto-periodo diferente al definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Producto".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Producto a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GT-01.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Sub Canales-periodo diferente al definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Sub Canales a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E5-AM-01
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Parametrización de Asientos Manuales

_Sin casos de prueba asociados._

---

## Escenario: E5-MT-01
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Parametrización de Margen Técnico

_Sin casos de prueba asociados._

---

## Escenario: E5-GG-02
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Aprovisionamiento de Gastos Generales

### Caso de prueba: E5-GG-02.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Exactus diferencte al definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. No ejecutar, actualmente se genera un bucle si se realiza este escenerario

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Exactus a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-02.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Drivers -Centro de Costo diferencte al definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. No ejecutar, actualmente se genera un bucle si se realiza este escenerario

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Drivers -Centro de Costo".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Drivers -Centro de Costo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-02.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Drivers- Objeto de Costo diferencte al definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. No ejecutar, actualmente se genera un bucle si se realiza este escenerario

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Drivers- Objeto de Costo".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Drivers- Objeto de Costo a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-02.4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Unidades de cuenta PAA diferente al definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Unidades de cuenta PAA a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-02.5
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asiento Manuales diferente al diferente al definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Asiento Manuales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Asiento Manuales a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-02.6
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Cuenta UoA diferente al definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Cuenta UoA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Cuenta UoA a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-02.7
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Configuración de Excepciones diferente al definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Configuración de Excepciones a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-02.8
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Redistribución Ingreso Financiero GG-GT diferente al definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Redistribución Ingreso Financiero GG-GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Redistribución Ingreso Financiero GG-GT a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E5-GF-02
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Aprovisionamiento de Gastos Financieros

### Caso de prueba: E5-GF-02-1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Exactus diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. No ejecutar, actualmente se genera un bucle si se realiza este escenerario

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Exactus a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GF-02-2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Drivers Productos diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. No ejecutar, actualmente se genera un bucle si se realiza este escenerario

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Drivers Productos a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GF-02-3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Drivers Sub canal diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. No ejecutar, actualmente se genera un bucle si se realiza este escenerario

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers Sub canal ".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers Sub canal a cargar.
4. El usuario presiona "Cargar".
5. El sistema carga los datos de las Drivers Sub canal.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GF-02-4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Drivers-Centro de Costo Vida diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. No ejecutar, actualmente se genera un bucle si se realiza este escenerario

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers-Centro de Costo Vida ".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Drivers-Centro de Costo Vida a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GF-02.5
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Unidades de cuenta PAA diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Archivo Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Archivo Unidades de cuenta PAA.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GF-02.6
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Configuración de Excepciones diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Configuración de Excepciones a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GF-02.7
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Redistribución Ingreso Financiero GG-GT diferente al definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Redistribución Ingreso Financiero GG-GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Redistribución Ingreso Financiero GG-GT a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E5-GT-02
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Aprovisionamiento de Gastos Técnicos

### Caso de prueba: E5-GT-02.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Exactus diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. No ejecutar, actualmente se genera un bucle si se realiza este escenerario

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Exactus a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GT-02.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Drivers Productos diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos Sub canales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. No ejecutar, actualmente se genera un bucle si se realiza este escenerario

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Drivers Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Drivers Productos a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GT-02.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Drivers Subcanal diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos Sub canales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. No ejecutar, actualmente se genera un bucle si se realiza este escenerario

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Drivers Subcanal".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Drivers Productos a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GT-02.4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Unidades de cuenta PAA diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Unidades de cuenta PAA a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GT-02.5
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Cuentas UoA diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Cuentas UoA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Cuentas UoA a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GT-02.6
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Configuración de Excepciones diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Configuración de Excepciones a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GT-02.7
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Redistribución Rescate GT diferente al definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Redistribución Rescate GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Redistribución Rescate GT a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E5-AM-02
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Aprovisionamiento de Asientos Manuales

_Sin casos de prueba asociados._

---

## Escenario: E5-MT-02
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Aprovisionamiento de Margen Técnico

_Sin casos de prueba asociados._

---

## Escenario: E5-GG-03
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Asignaciones de Gastos Generales

### Caso de prueba: E5-GG-03.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignación de Drivers de Centros a Bolsas definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación de Drivers de Centros a Bolsas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Asignación de Drivers de Centros a Bolsas a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-03.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignación de Drivers a Entidades definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > "Asignación de Drivers a Entidades".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Asignación de Drivers a Entidades a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-03.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignación de Drivers Objetos definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación de Drivers Objetos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación de Drivers Objetos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-03.4
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación Especiales Niif".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Asignación Especiales Niif a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-03.5
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignación Líneas Niif definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación Líneas Niif".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Líneas Niif a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GG-03.6
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > "Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Asignación Cuentas Conceptos a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E5-GF-03
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Asignaciones de Gastos Financiero

### Caso de prueba: E5-GF-03.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Financiero

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financiero " > "Asignaciones" > " Asignación Especiales Niif ".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Asignación Especiales Niif a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GF-03.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financiero " > "Asignaciones" > " Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Asignación Cuentas Conceptos a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E5-GT-03
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Asignaciones de Gastos Técnicos

### Caso de prueba: E5-GT-03.1
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignaciones de Métodos Subcanal definidos en el proceso de Asignación de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignaciones de Métodos Subcanal".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Asignaciones de Métodos Subcanal a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GT-03.2
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidad Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignaciones de Asignación Especiales Niifl".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Asignación Especiales Niif a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.
### Caso de prueba: E5-GT-03.3
- Implementado: No

**Titulo:** Carga de un archivo en la opción/funcionalidade Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo que no corresponde a la opción/ funcionalidad seleccionala.

**Precondiciones:**
1. Existencia de otros archivos del flujo

**Datos:**
- Archivo generado en cualquiera de los 3 flujos o archivo en el formato definido pero ajeno a la opción

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. 4, El usuario selecciona el archivo distinto a Asignación Cuentas Conceptos a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo seleccionado no contiene información. Verifique el contenido antes de intentar cargarlo nuevamente.

---

## Escenario: E5-AM-03
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Asignaciones de Asientos Manuales

_Sin casos de prueba asociados._

---

## Escenario: E5-MT-03
**Descripcion:** Validación la carga de un archivo que no corresponde con la opción/funcionalidad del proceso de Asignaciones de Margen Técnico

_Sin casos de prueba asociados._

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
- Implementado: No

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
- Implementado: No

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
- Implementado: No

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

## Escenario: E6-GG-01
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Parametrización de Gastos Generales sin datos

### Caso de prueba: E6-GG-01.1
- Implementado: No

**Titulo:** Carga del archivo Cuentas Contables con la estructura definida y sin datos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Cuentas contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨.

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-01.2
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Partidas del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Partidas definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Partidas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-01.3
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Centro de Costo del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Centro de Costo definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Centro de Costo".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-01.4
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Líneas del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Líneas definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Línea".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-01.5
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Productos del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-01.6
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Canales del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Canales definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-01.7
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Subcanales del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Subcanales definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-01.8
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Unidades de cuenta del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Unidades de cuenta definidos para en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Unidades de cuenta".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.

---

## Escenario: E6-GF-01
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Parametrización de Gastos Financieros sin datos

### Caso de prueba: E6-GF-01.1
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Conceptos del proceso de Parametrización de Gastos Financiero

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Conceptos definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-01.2
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Cuentas Contables del proceso de Parametrización de Gastos Financiero

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Cuentas Contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-01.3
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Líneas del proceso de Parametrización de Gastos Financiero

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Líneas definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Líneas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-01.4
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Productos del proceso de Parametrización de Gastos Financiero

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-01.5
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Canales del proceso de Parametrización de Gastos Financiero

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Canales definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-01.6
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Subcanales del proceso de Parametrización de Gastos Financiero

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-01.7
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Centros del proceso de Parametrización de Gastos Financiero

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Centros definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Centros".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-01.8
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Unidades de cuenta del proceso de Parametrización de Gastos Financiero

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Unidades de cuenta definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Unidades de cuenta".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨.

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.

---

## Escenario: E6-GT-01
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Parametrización de Gastos Técnicos sin datos

### Caso de prueba: E6-GT-01.1
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Ramos del proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Ramos definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Ramos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-01.2
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Conceptos del proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Conceptos definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨.

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-01.3
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Cuentas Contables del proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Cuentas Contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-01.4
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Líneas del proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Líneas definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Líneas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-01.5
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Productos del proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-01.6
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Canales del proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Canales definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-01.7
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Subcanales del proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Subcanales definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-01.8
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Unidades de cuenta del proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Unidades de cuenta definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Unidades de cuenta".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.

---

## Escenario: E6-GG-02
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Aprovisionamiento de Gastos Generales sin datos

### Caso de prueba: E6-GG-02.1
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Exactus del proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > "Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-02.2
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Detalles de Gasto del proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Detalles de Gasto definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Detalles de Gasto".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨.

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-02.3
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Drivers -Centro de Costo del proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Drivers -Centro de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Drivers -Centro".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-02.4
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Drivers- Objeto de Costo del proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Drivers- Objeto de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Detalles de Gasto".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo de Detalles de Gasto a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-02.5
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Unidades de cuenta PAA del proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos General

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-02.6
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Asiento Manuales del proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Asiento Manuales definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Asiento Manuales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-02.7
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Cuentas UoA del proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Cuentas UoA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona el botón "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-02.8
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Configuración de Excepciones del proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-02.9
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Redistribución Ingreso Financiero GG-GT del proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Redistribución Ingreso Financiero GG-GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.

---

## Escenario: E6-GF-02
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Aprovisionamiento de Gastos Financieros sin datos

### Caso de prueba: E6-GF-02.1
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Exactus del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-02.2
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Drivers Productos del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-02.3
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Drivers Subcanal del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Drivers Subcanal definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers Sub canal ".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-02.4
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Drivers-Centro de Costo Vida del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Drivers-Centro de Costo Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers-Centro de Costo Vida".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-02.5
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Unidades de cuenta PAA del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Archivo Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-02.6
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Configuración de Excepciones del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-02.7
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Redistribución Ingreso Financiero GG-GT del proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Redistribución Ingreso Financiero GG-GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.

---

## Escenario: E6-GT-02
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Aprovisionamiento de Gastos Técnicos sin datos

### Caso de prueba: E6-GT-02.1
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Drivers Productos del proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Drivers Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-02.2
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Drivers subcanaldel proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Drivers subcanal".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-02.3
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Exactus del proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Exactus".
2. El usuario selecciona el periodo (Mes y Año) y la versión.
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨.
5. El usuario especifica el delimitador y da clic en el botón Cargar.

**Resultado esperado:**
El sistema carga y procesa el archivo y muestra un mensaje de error.
### Caso de prueba: E6-GT-02.4
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Unidades de cuenta PAA del proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-02.5
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Cuentas UoA del proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Cuentas UoA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-02.6
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Configuración de Excepciones del proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-02.7
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Redistribución Rescate GT del proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Redistribución Rescate GT definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Redistribución Rescate GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.

---

## Escenario: E6-GG-03
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Asignaciones de Gastos Generales sin datos

### Caso de prueba: E6-GG-03.1
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Asignación de Drivers de Centros a Bolsas del proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Asignación de Drivers de Centros a Bolsas definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación de Drivers de Centros a Bolsas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-03.2
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Asignación de Drivers a Entidades del proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Asignación de Drivers a Entidades definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > "Asignación de Drivers a Entidades".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-03.3
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Asignación de Drivers Objetos del proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Asignación de Drivers Objetos definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación de Drivers Objetos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-03.4
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Asignación Especiales Niif del proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación Especiales Niif".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-03.5
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Asignación Líneas Niif del proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Asignación Líneas Niif definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación Líneas Niif".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GG-03.6
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Asignación Cuentas Conceptos del proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > "Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.

---

## Escenario: E6-GF-03
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Asignaciones de Gastos Financieros sin datos

### Caso de prueba: E6-GF-03.1
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Asignación Especiales Niif del proceso de Asignaciones de Gastos Financiero

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Asignaciones" > " Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GF-03.2
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Asignación Cuentas Conceptos del proceso de Asignaciones de Gastos Financiero

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Asignaciones" > " Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.

---

## Escenario: E6-GT-03
**Descripcion:** Validar la carga de un archivo con la estructura definida para el proceso de Asignaciones de Gastos Técnicos sin datos

### Caso de prueba: E6-GT-03.1
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Métodos Subcanal del proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Asignaciones de Métodos Subcanal definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignaciones de Métodos Subcanal".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-03.2
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Asignación Especiales Niif del proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignaciones de Asignación Especiales Niifl".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.
### Caso de prueba: E6-GT-03.3
- Implementado: No

**Titulo:** Carga del archivo con la estructura definida y sin datos en Asignación Cuentas Conceptos del proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo sin datos

**Precondiciones:**
1. Existencia de un archivos con la estructura y sin datos

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo a cargar y da clic en el botón ¨Abrir¨

**Resultado esperado:**
El sistema carga y procesa el archivo, muestra en el modal el mensaje de que no se ha seleccionado un archivo y desactiva el botón Cargar.

---

## Escenario: E7-GG-01
**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo en el proceso de Parametrización de Gastos Generales

### Caso de prueba: E7-GG-01.1
- Implementado: No

**Titulo:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo de Cuentas Contables del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo.

**Precondiciones:**
1. Archivo preparado

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Cuentas contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Cargar".
4. El usuario selecciona el archivo de cuentas contables a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.
### Caso de prueba: E7-GG-01.2
- Implementado: No

**Titulo:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo de Partidas del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo.

**Precondiciones:**
1. Archivo preparado

**Datos:**
- Archivo Partidas definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Partidas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Partidas a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.
### Caso de prueba: E7-GG-01.3
- Implementado: No

**Titulo:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo de Centro de Costo del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo.

**Precondiciones:**
1. Archivo preparado

**Datos:**
- Archivo Centro de Costo definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Centro de Costo".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Centro de Costo a cargar.
4. El usuario presiona "Cargar".
5. El sistema carga los datos de las Centro de Costo.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.
### Caso de prueba: E7-GG-01.4
- Implementado: No

**Titulo:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo de Productos del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo.

**Precondiciones:**
1. Archivo preparado

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Productos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.
### Caso de prueba: E7-GG-01.5
- Implementado: No

**Titulo:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo de Sub Canales del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo.

**Precondiciones:**
1. Archivo preparado

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Sub Canales a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.

---

## Escenario: E7-GF-01
**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo en el proceso de Parametrización de Gastos Financieros

### Caso de prueba: E7-GF-01.1
- Implementado: No

**Titulo:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo de Cuentas Contables definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo.

**Precondiciones:**
1. Archivo preparado

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Cuentas Contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Cuentas Contables a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.
### Caso de prueba: E7-GF-01.2
- Implementado: No

**Titulo:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo de Productos definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo.

**Precondiciones:**
1. Archivo preparado

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Productos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.
### Caso de prueba: E7-GF-01.3
- Implementado: No

**Titulo:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo de Sub Canales definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo.

**Precondiciones:**
1. Archivo preparado

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Sub Canales a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.
### Caso de prueba: E7-GF-01.4
- Implementado: No

**Titulo:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo de Centros definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo.

**Precondiciones:**
1. Archivo preparado

**Datos:**
- Archivo Centros definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Centros".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Centros a cargar.
4. El usuario presiona "Cargar".
5. El sistema carga los datos de las Centros.

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.

---

## Escenario: E7-GT-01
**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo en el proceso de Parametrización de Gastos Técnicos

### Caso de prueba: E7-GT-01.1
- Implementado: No

**Titulo:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo de Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo.

**Precondiciones:**
1. Archivo preparado

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Cuentas Contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Cuentas Contables a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.
### Caso de prueba: E7-GT-01.2
- Implementado: No

**Titulo:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo de Productos definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo.

**Precondiciones:**
1. Archivo preparado

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Productos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.
### Caso de prueba: E7-GT-01.3
- Implementado: No

**Titulo:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo de Sub Canales definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar la carga de un archivo con datos nuevos no registrados en el catálogo.

**Precondiciones:**
1. Archivo preparado

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Sub Canales a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
El sistema no carga el archivo y muestra un mensaje de error.

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

## Escenario: E8-GG-01
**Descripcion:** Validar la carga de un archivo con los datos incompletos en el proceso de Parametrización de Gastos Generales

_Sin casos de prueba asociados._

---

## Escenario: E8-GF-01
**Descripcion:** Validar la carga de un archivo con los datos incompletos en el proceso de Parametrización de Gastos Financieros

_Sin casos de prueba asociados._

---

## Escenario: E8-GT-01
**Descripcion:** Validar la carga de un archivo con los datos incompletos en el proceso de Parametrización de Gastos Técnicos

_Sin casos de prueba asociados._

---

## Escenario: E8-AM-01
**Descripcion:** Validar la carga de un archivo con los datos incompletos en el proceso de Parametrización de Asientos Manuales

_Sin casos de prueba asociados._

---

## Escenario: E8-MT-01
**Descripcion:** Validar la carga de un archivo con los datos incompletos en el proceso de Parametrización de Margen Técnico

_Sin casos de prueba asociados._

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
4. Se levanta el modal con titulo "Cargar Lineas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.2
- Implementado: No

**Titulo:** Validar la carga del archivo de mas de 30 mb de peso para Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de mas de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Líneas debe exeder el maximo permitido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Lineas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.3
- Implementado: No

**Titulo:** Validar la carga del archivo de mas de 30 mb de peso para Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de mas de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Líneas debe exeder el maximo permitido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Lineas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.4
- Implementado: No

**Titulo:** Validar la carga del archivo de mas de 30 mb de peso para Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de mas de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Líneas debe exeder el maximo permitido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Lineas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.5
- Implementado: No

**Titulo:** Validar la carga del archivo de mas de 30 mb de peso para Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de mas de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Líneas debe exeder el maximo permitido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Lineas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.6
- Implementado: No

**Titulo:** Validar la carga del archivo de mas de 30 mb de peso para Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de mas de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Líneas debe exeder el maximo permitido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Lineas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.7
- Implementado: No

**Titulo:** Validar la carga del archivo de mas de 30 mb de peso para Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de mas de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Líneas debe exeder el maximo permitido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Lineas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.8
- Implementado: No

**Titulo:** Validar la carga del archivo de mas de 30 mb de peso para Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de mas de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Líneas debe exeder el maximo permitido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Lineas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.9
- Implementado: No

**Titulo:** Validar la carga del archivo de mas de 30 mb de peso para Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de mas de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Líneas debe exeder el maximo permitido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Lineas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.10
- Implementado: No

**Titulo:** Validar la carga del archivo de mas de 30 mb de peso para Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de mas de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Líneas debe exeder el maximo permitido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Lineas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.11
- Implementado: No

**Titulo:** Validar la carga del archivo de mas de 30 mb de peso para Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de mas de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Líneas debe exeder el maximo permitido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Lineas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.12
- Implementado: No

**Titulo:** Validar la carga del archivo de mas de 30 mb de peso para Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de mas de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Líneas debe exeder el maximo permitido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Lineas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

**Resultado esperado:**
El sistema no carga el archivo.
1- muestra un mensaje de error. El archivo excede el tamaño máximo permitido (30 MB). Seleccione un archivo que cumpla con el límite establecido para completar la carga.
### Caso de prueba: E61-C-01.13
- Implementado: No

**Titulo:** Validar la carga del archivo de mas de 30 mb de peso para Líneas definido en el proceso Comunes

**Descripcion:** Validar la carga del archivo de mas de 30 mb de peso para el periodo

**Precondiciones:**
1. El archivo Líneas debe exeder el maximo permitido para el periodo
2. el usuario registrado tenga el rol de Administrador de Gastos

**Datos:**
- Archivo Línea definidos en el proceso de Comunes

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Lineas".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Lineas", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

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
4. Se levanta el modal con titulo "Cargar Productos", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

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
4. Se levanta el modal con titulo "Cargar Canales", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

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
4. Se levanta el modal con titulo "Cargar Subcanales", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

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
4. Se levanta el modal con titulo "Cargar Parches", el botón aceptar esta deshablitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo preparado a cargar.
5. Selecionar el archivo que exceda el peso permitido
6. El botón aceptar queda habilitado y el usuario presiona "Aceptar".
7. El sistema muestra el mensaje de error definido para la carga de un archivo que excede el limite del tamaño.

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
- Implementado: No

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
- Implementado: No

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
- Implementado: No

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

## Escenario: E9-GG-01
**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados en el proceso de Asignaciones de Gastos Generales

### Caso de prueba: E9-GG-01.1
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Cuentas Contables del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Cuentas contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de cuentas contables a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-01.2
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Partidas definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Partidas definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Partidas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Partidas a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-01.3
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Centro de Costo definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Centro de Costo definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Centro de Costo".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Centro de Costo a cargar.
4. El usuario presiona "Cargar".
5. El sistema carga los datos de las Centro de Costo.

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-01.4
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Líneas definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Líneas definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Línea".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Línea a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-01.5
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Productos definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Productos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-01.6
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Canales definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Canales definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Línea".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Línea a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-01.7
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Sub Canales definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Sub Canales a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-01.8
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Unidades de cuenta definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Unidades de cuenta definidos para en el proceso de Parametrización de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Unidades de cuenta".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Unidades de cuenta a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-02.1
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Exactus definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > "Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Exactus a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-02.2
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Detalles de Gasto definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Detalles de Gasto definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Detalles de Gasto".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Detalles de Gasto a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-02.3
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Drivers -Centro de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Drivers -Centro de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Drivers -Centro".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers -Centro a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-02.4
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Drivers- Objeto de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Drivers- Objeto de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Detalles de Gasto".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Detalles de Gasto a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-02.5
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos General

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Unidades de cuenta PAA a cargar.
4. El usuario presiona "Cargar".
5. El sistema carga los datos de las Unidades de cuenta PAA.

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-02.6
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Unidades de Cuenta BBA y VFA Pacífico".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona el botón "Traer PCF".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-02.7
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Asiento Manuales definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Asiento Manuales definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Asiento Manuales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asiento Manuales a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-02.8
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Cuentas UoA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona el botón "Cargar".
4. El usuario selecciona el archivo de Cuentas UoA a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-02.9
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Configuración de Excepciones a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-02.10
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Redistribución Ingreso Financiero GG-GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Redistribución Ingreso Financiero GG-GT a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-03.1
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Asignación de Drivers de Centros a Bolsas definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Asignación de Drivers de Centros a Bolsas definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación de Drivers de Centros a Bolsas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación de Drivers de Centros a Bolsas a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-03.2
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Asignación de Drivers a Entidades definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Asignación de Drivers a Entidades definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > "Asignación de Drivers a Entidades".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación de Drivers a Entidades a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-03.3
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Asignación de Drivers Objetos definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Asignación de Drivers Objetos definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación de Drivers Objetos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación de Drivers Objetos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-03.4
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación Especiales Niif".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Especiales Niif a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-03.5
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Asignación Líneas Niif definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Asignación Líneas Niif definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación Líneas Niif".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Líneas Niif a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GG-03.6
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Generales

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > "Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Cuentas Conceptos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: E9-GF-01
**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados en el proceso de Asignaciones de Gastos Financiero

### Caso de prueba: E9-GF-01.1
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Conceptos definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Conceptos definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Conceptos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-01.2
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Cuentas Contables definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Cuentas Contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Cuentas Contables a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-01.3
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Líneas definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Líneas definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Líneas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Líneas a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-01.4
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Productos definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Productos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-01.5
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Canales definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Canales definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Canales a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-01.6
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Sub Canales definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Sub Canales a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-01.7
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Centros definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Centros definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Centros".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Centros a cargar.
4. El usuario presiona "Cargar".
5. El sistema carga los datos de las Centros.

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-01.8
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Unidades de cuenta definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Unidades de cuenta definidos en el proceso de Parametrización de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Unidades de cuenta".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Unidades de cuenta a cargar.
4. El usuario presiona "Cargar".
5. El sistema carga los datos de las Unidades de cuenta.

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.1
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Exactus definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Exactus a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.2
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers Productos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.3
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Drivers Sub canal definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Drivers Sub canal definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers Sub canal ".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers Sub canal a cargar.
4. El usuario presiona "Cargar".
5. El sistema carga los datos de las Drivers Sub canal.

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.4
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Drivers-Centro de Costo Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Drivers-Centro de Costo Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers-Centro de Costo Vida ".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers-Centro de Costo Vida a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.5
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Archivo Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Archivo Unidades de cuenta PAA.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.6
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Unidades de Cuenta BBA y VFA Pacífico".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona el botón "Traer PCF".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.7
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Configuración de Excepciones a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-02.8
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Redistribución Ingreso Financiero GG-GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Redistribución Ingreso Financiero GG-GT a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GF-03.1
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Asignaciones" > " Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Cuentas Conceptos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.

---

## Escenario: E9-GT-01
**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados en el proceso de Asignaciones de Gastos Técnicos

### Caso de prueba: E9-GT-01.1
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Ramos definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Ramos definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Ramos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Ramos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-01.2
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Conceptos definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Conceptos definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Conceptos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-01.3
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Cuentas Contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Cuentas Contables a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-01.4
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Líneas definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Líneas definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Líneas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Líneas a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-01.5
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Productos definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Productos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-01.6
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Canales definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Canales definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Canales a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-01.7
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Sub Canales definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Sub Canales a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-01.8
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Unidades de cuenta definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Unidades de cuenta definidos en el proceso de Parametrización de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Unidades de cuenta".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Unidades de cuenta a cargar.
4. El usuario presiona "Cargar".
5. El sistema carga los datos de las Unidades de cuenta.

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-02.1
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Exactus definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Exactus a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-02.2
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Técnicos Sub canales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Drivers Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers Productos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-02.3
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Drivers Subcanal definidos en el proceso de Aprovisionamiento de Gastos Técnicos Sub canales

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Drivers Subcanal definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Subcanal".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona el botón "Cargar"
4. El usuario selecciona el archivo de Subcanal a cargar.
5. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-02.4
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Unidades de cuenta PAA a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-02.5
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Unidades de Cuenta BBA y VFA Pacífico".
2. El usuario selecciona el periodo (Mes y Año).

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-02.6
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Cuentas UoA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Cuentas UoA a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-02.7
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Configuración de Excepciones a cargar.
4. El usuario presiona "Cargar".
5. El sistema carga los datos de las Configuración de Excepciones

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-02.8
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Redistribución Rescate GT definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Redistribución Rescate GT definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Redistribución Rescate GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Redistribución Rescate GT a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-03.1
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Asignaciones de Métodos Subcanal definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Asignaciones de Métodos Subcanal definidos en el proceso de Asignación de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignaciones de Métodos Subcanal".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignaciones de Métodos Subcanal a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-03.2
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignaciones de Asignación Especiales Niifl".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Especiales Niif a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.
### Caso de prueba: E9-GT-03.3
- Implementado: No

**Titulo:** Validar que se muestren en el FronEnd los archivos Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar que se muestren en el FronEnd los datos de los archivos cargados

**Precondiciones:**
1. La carga de archivo

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Técnicos

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Cuentas Conceptos a cargar.
4. El usuario presiona "Cargar".

**Resultado esperado:**
Se muestra una tabla cuyas columnas es la estructura de datos del documento. Los datos mostrados deben coincidir con los datos previos a la carga.

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
El archivo se descarga correctamente y se debe tener acceso al archivo.
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
El archivo se descarga correctamente y se debe tener acceso al archivo.
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
El archivo se descarga correctamente y se debe tener acceso al archivo.
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
El archivo se descarga correctamente y se debe tener acceso al archivo.
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
El archivo se descarga correctamente y se debe tener acceso al archivo.
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
El archivo se descarga correctamente y se debe tener acceso al archivo.
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
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E10-GG-01
**Descripcion:** Validar la correcta ejecución del flujo de descargas de los archivos cargados en el proceso Asignaciones de Gastos Generales

### Caso de prueba: E10-GG-01.1
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Cuentas Contables periodo y catalogo del proceso de Parametrización de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Cuentas contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-01.2
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Partidas periodo y catalogo definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Partidas definidos en el proceso de Parametrización de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Partidas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-01.3
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Centros periodo y catalogo definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Centro de Costo definidos en el proceso de Parametrización de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Centros".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-01.4
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Líneas definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Líneas definidos en el proceso de Parametrización de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Línea".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-01.5
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Productos periodo y catalogo definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-01.6
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Canales definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Canales definidos en el proceso de Parametrización de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Línea".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-01.7
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Sub Canales catalogo y periodo definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-01.8
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Unidades de cuenta definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Unidades de cuenta definidos para en el proceso de Parametrización de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Unidades de cuenta".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-02.1
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > "Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Exactus a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-02.2
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Detalles de Gasto definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Detalles de Gasto definidos en el proceso de Aprovisionamiento de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Detalles de Gasto".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Detalles de Gasto a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-02.3
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Drivers -Centro de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Drivers -Centro de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Drivers -Centro".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers -Centro a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-02.4
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Drivers- Objeto de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Drivers- Objeto de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Detalles de Gasto".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Detalles de Gasto a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-02.5
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos General cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Unidades de cuenta PAA a cargar.
4. El usuario presiona "Cargar".
5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-02.6
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Aprovisionamiento de Gastos General cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Unidades de Cuenta BBA y VFA Pacífico".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona el botón "Descargar PCF".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-02.7
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Asiento Manuales definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Asiento Manuales definidos en el proceso de Aprovisionamiento de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Asiento Manuales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asiento Manuales a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-02.8
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Cuentas UoA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Cuentas UoA a cargar.
4. El usuario presiona "Cargar".
5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-02.9
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Configuración de Excepciones a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-02.10
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Redistribución Ingreso Financiero GG-GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Redistribución Ingreso Financiero GG-GT a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-03.1
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Asignación de Drivers de Centros a Bolsas definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Asignación de Drivers de Centros a Bolsas definidos en el proceso de Asignaciones de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación de Drivers de Centros a Bolsas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación de Drivers de Centros a Bolsas a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-03.2
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Asignación de Drivers a Entidades definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Asignación de Drivers a Entidades definidos en el proceso de Asignaciones de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > "Asignación de Drivers a Entidades".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación de Drivers a Entidades a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-03.3
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Asignación de Drivers Objetos definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Asignación de Drivers Objetos definidos en el proceso de Asignaciones de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación de Drivers Objetos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación de Drivers Objetos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-03.4
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación Especiales Niif".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Especiales Niif a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-03.5
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Asignación Líneas Niif definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Asignación Líneas Niif definidos en el proceso de Asignaciones de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación Líneas Niif".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Líneas Niif a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GG-03.6
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Generales cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > "Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Cuentas Conceptos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E10-GF-01
**Descripcion:** Validar la correcta ejecución del flujo de descargas de los archivos cargados en el proceso de Asignaciones de Gastos Financiero

### Caso de prueba: E10-GF-01.1
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Conceptos definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Conceptos definidos en el proceso de Parametrización de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. 3 El usuario presiona "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-01.2
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Cuentas Contables peridodo y catalogo definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Cuentas Contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-01.3
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Líneas definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Líneas definidos en el proceso de Parametrización de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Líneas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-01.4
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Productos peridodo y catalogo definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-01.5
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Canales definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Canales definidos en el proceso de Parametrización de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-01.6
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Sub Canales perido y catalogo definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-01.7
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Centros peridodo y catalogo definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Centros definidos en el proceso de Parametrización de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Centros".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-01.8
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Unidades de cuenta definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Unidades de cuenta definidos en el proceso de Parametrización de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Unidades de cuenta".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar".

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.1
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Exactus a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.2
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers Productos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.3
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Drivers Sub canal definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Drivers Sub canal definidos en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers Sub canal ".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers Sub canal a cargar.
4. El usuario presiona "Cargar".
5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.4
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Drivers-Centro de Costo Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Drivers-Centro de Costo Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers-Centro de Costo Vida ".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers-Centro de Costo Vida a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.5
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Archivo Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Archivo Unidades de cuenta PAA.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.6
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Unidades de Cuenta BBA y VFA Pacífico".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.7
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Configuración de Excepciones a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-02.8
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Financieros cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Redistribución Ingreso Financiero GG-GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Redistribución Ingreso Financiero GG-GT a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GF-03.1
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Asignaciones" > " Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

---

## Escenario: E10-GT-01
**Descripcion:** Validar la correcta ejecución del flujo de descargas de los archivos cargados en el proceso de Asignaciones de Gastos Técnicos

### Caso de prueba: E10-GT-01.1
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Ramos definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Ramos definidos en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Ramos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-01.2
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Conceptos definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Conceptos definidos en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-01.3
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Cuentas Contables catalogo definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Cuentas Contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-01.3.1
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Cuentas Contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Cuentas Contables a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-01.4
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Líneas definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Líneas definidos en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Líneas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-01.5
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Productos catalogo definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Productos catalogo".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-01.5.1
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Productos definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-01.6
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Canales definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Canales definidos en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-01.7
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Sub Canales catalogo definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-01.7.1
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Sub Canales definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-01.8
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Unidades de cuenta definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Unidades de cuenta definidos en el proceso de Parametrización de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Unidades de cuenta".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-02.1
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Técnicos Sub canales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Drivers Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-02.2
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Drivers Subcanal definidos en el proceso de Aprovisionamiento de Gastos Técnicos Sub canales

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Drivers Subcanal definidos en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Drivers Subcanal".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-02.3
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-02.4
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-02.5
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Unidades de Cuenta BBA y VFA Pacífico".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar PCF"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-02.6
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Cuentas UoA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-02.7
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-02.8
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Redistribución Rescate GT definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Redistribución Rescate GT definidos en el proceso de Aprovisionamiento de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Redistribución Rescate GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-03.1
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Asignaciones de Métodos Subcanal definidos en el proceso de Asignación de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Asignaciones de Métodos Subcanal definidos en el proceso de Asignación de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignaciones de Métodos Subcanal".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-03.2
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignaciones de Asignación Especiales Niifl".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.
### Caso de prueba: E10-GT-03.3
- Implementado: No

**Titulo:** Validar la correcta ejecución del flujo de descargas del archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Verificar la correcta ejecución del flujo de descargas

**Precondiciones:**
1. Se active el botón descarga

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Técnicos cargado en el motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar"

**Resultado esperado:**
El archivo se descarga correctamente y se debe tener acceso al archivo.

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

## Escenario: E11-GG-01
**Descripcion:** Validar que el archivo descargado en el proceso de Asignaciones de Gastos Generales muestre los datos correctamente y no tenga perdida de información

### Caso de prueba: E11-GG-01.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Cuentas Contables periodo y catalogo del proceso de Parametrización de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Cuentas contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de cuentas contables a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar".

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-01.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Partidas definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Partidas definidos en el proceso de Parametrización de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Partidas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Partidas a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar".

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-01.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Centro de Costo definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Centro de Costo definidos en el proceso de Parametrización de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Centro de Costo".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Centro de Costo a cargar.
4. El usuario presiona "Cargar".
5. El usuario presiona "Descargar".

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-01.4
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Líneas definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Líneas definidos en el proceso de Parametrización de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Línea".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Línea a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar".

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-01.5
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Productos periodo y catalogo definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Productos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar".

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-01.6
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Canales definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Canales definidos en el proceso de Parametrización de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Línea".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Línea a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar".

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-01.7
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Sub Canales definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Sub Canales a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar".

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-01.8
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Unidades de cuenta definidos en el proceso de Parametrización de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Unidades de cuenta definidos para en el proceso de Parametrización de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Parametrización" > "Unidades de cuenta".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Unidades de cuenta a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar".

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-02.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Exactus definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > "Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Exactus a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-02.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Detalles de Gasto definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Detalles de Gasto definidos en el proceso de Aprovisionamiento de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Detalles de Gasto".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Detalles de Gasto a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-02.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Drivers -Centro de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Drivers -Centro de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Drivers -Centro".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers -Centro a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-02.4
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Drivers- Objeto de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Drivers- Objeto de Costo definidos en el proceso de Aprovisionamiento de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Detalles de Gasto".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Detalles de Gasto a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-02.5
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos General descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Unidades de cuenta PAA a cargar.
4. El usuario presiona "Cargar".
5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-02.6
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos General descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Unidades de Cuenta BBA y VFA Pacífico".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar PCF"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-02.7
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asiento Manuales definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Asiento Manuales definidos en el proceso de Aprovisionamiento de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Asiento Manuales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asiento Manuales a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-02.8
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Cuentas UoA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Cuentas UoA a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-02.9
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Configuración de Excepciones a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-02.10
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Aprovisionamiento" > " Redistribución Ingreso Financiero GG-GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Redistribución Ingreso Financiero GG-GT a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-03.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asignación de Drivers de Centros a Bolsas definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Asignación de Drivers de Centros a Bolsas definidos en el proceso de Asignaciones de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación de Drivers de Centros a Bolsas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación de Drivers de Centros a Bolsas a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-03.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asignación de Drivers a Entidades definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Asignación de Drivers a Entidades definidos en el proceso de Asignaciones de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > "Asignación de Drivers a Entidades".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación de Drivers a Entidades a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-03.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asignación de Drivers Objetos definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Asignación de Drivers Objetos definidos en el proceso de Asignaciones de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación de Drivers Objetos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación de Drivers Objetos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-03.4
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación Especiales Niif".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Especiales Niif a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-03.5
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asignación Líneas Niif definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Asignación Líneas Niif definidos en el proceso de Asignaciones de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > " Asignación Líneas Niif".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Líneas Niif a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GG-03.6
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Generales

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Generales descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Generales" y en el menú lateral "Asignaciones" > "Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Cuentas Conceptos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E11-GF-01
**Descripcion:** Validar que el archivo descargado en el proceso de Asignaciones de Gastos Financieros muestre los datos correctamente y no tenga perdida de información

### Caso de prueba: E11-GF-01.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Conceptos definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Conceptos definidos en el proceso de Parametrización de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Conceptos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar".

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-01.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Cuentas Contables periodo y Catalogo definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Cuentas Contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Cuentas Contables a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar".

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas.
en el ctalogo:
la vista la cabecera es “Codigo” en el archivo es "CODCTACTB_EX"
la vista la cabecera es “nombre” en el archivo es "DESCTACTB_EX" .
Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-01.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Líneas definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Líneas definidos en el proceso de Parametrización de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Líneas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Líneas a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-01.4
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Productos periodo y catalogo definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Productos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar".

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-01.5
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Canales definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Canales definidos en el proceso de Parametrización de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Canales a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-01.6
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Sub Canales definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Sub Canales a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar".

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-01.7
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Centros periodo y catalogo definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Centros definidos en el proceso de Parametrización de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Centros".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Centros a cargar.
4. El usuario presiona "Cargar".
5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-01.8
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Unidades de cuenta definidos en el proceso de Parametrización de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Unidades de cuenta definidos en el proceso de Parametrización de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Parametrización" > "Unidades de cuenta".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Unidades de cuenta a cargar.
4. El usuario presiona "Cargar".
5. El usuario presiona "Descargar".

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Exactus definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Exactus a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers Productos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Drivers Sub canal definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Drivers Sub canal definidos en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers Sub canal ".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers Sub canal a cargar.
4. El usuario presiona "Cargar".
5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.4
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Drivers-Centro de Costo Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Drivers-Centro de Costo Vida definidos en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Drivers-Centro de Costo Vida ".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers-Centro de Costo Vida a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.5
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Archivo Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Archivo Unidades de cuenta PAA.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.6
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Unidades de Cuenta BBA y VFA Pacífico".
2. El usuario selecciona el periodo (Mes y Año).
3. 3, El usuario presiona "Descargar PCF"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.7
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Configuración de Excepciones a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-02.8
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Financieros

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Redistribución Ingreso Financiero GG-GT definidos en el proceso de Aprovisionamiento de Gastos Financieros descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Aprovisionamiento" > " Redistribución Ingreso Financiero GG-GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Redistribución Ingreso Financiero GG-GT a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-03.0
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Financiero

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Asignaciones" > " Especiales Niif ".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Cuentas Conceptos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GF-03.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Financiero descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Financieros" y en el menú lateral "Asignaciones" > " Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Cuentas Conceptos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E11-GT-01
**Descripcion:** Validar que el archivo descargado en el proceso de Asignaciones de Gastos Técnicos muestre los datos correctamente y no tenga perdida de información

### Caso de prueba: E11-GT-01.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Ramos definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Ramos definidos en el proceso de Parametrización de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Ramos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Ramos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-01.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Conceptos definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Conceptos definidos en el proceso de Parametrización de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Conceptos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-01.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Cuentas Contables definidos en el proceso de Parametrización de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Cuentas Contables".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Cuentas Contables a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-01.4
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Líneas definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Líneas definidos en el proceso de Parametrización de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Líneas".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Líneas a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-01.5
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Productos periodo y catalogo definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Productos definidos en el proceso de Parametrización de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Productos a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-01.6
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Canales definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Canales definidos en el proceso de Parametrización de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Canales a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-01.7
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Sub Canales definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Sub Canales definidos en el proceso de Parametrización de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Sub Canales".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Sub Canales a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-01.8
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Unidades de cuenta definidos en el proceso de Parametrización de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Unidades de cuenta definidos en el proceso de Parametrización de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Parametrización" > "Unidades de cuenta".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Unidades de cuenta a cargar.
4. El usuario presiona "Cargar".
5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-02.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Drivers Productos definidos en el proceso de Aprovisionamiento de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Drivers Productos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers Productos a cargar.
4. El usuario presiona "Cargar".
5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-02.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Drivers Subcanal definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Drivers Subcanal definidos en el proceso de Aprovisionamiento de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Drivers Subcanal".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Drivers Subcana a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-02.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Exactus definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Exactus definidos en el proceso de Aprovisionamiento de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Exactus".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Exactus a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-02.4
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Unidades de cuenta PAA definidos en el proceso de Aprovisionamiento de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Unidades de cuenta PAA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Unidades de cuenta PAA a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-02.5
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Unidades de Cuenta BBA y VFA Pacífico definidos en el proceso de Aprovisionamiento de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Unidades de Cuenta BBA y VFA Pacífico".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario presiona "Descargar PCF"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-02.6
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Cuentas UoA definidos en el proceso de Aprovisionamiento de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Cuentas UoA".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Cuentas UoA a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-02.7
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Configuración de Excepciones definidos en el proceso de Aprovisionamiento de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Configuración de Excepciones".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Configuración de Excepciones a cargar.
4. El usuario presiona "Cargar".
5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-02.8
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Redistribución Rescate GT definidos en el proceso de Aprovisionamiento de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Redistribución Rescate GT definidos en el proceso de Aprovisionamiento de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Aprovisionamiento" > " Redistribución Rescate GT".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Redistribución Rescate GT a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-03.1
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asignaciones de Métodos Subcanal definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Asignaciones de Métodos Subcanal definidos en el proceso de Asignación de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignaciones de Métodos Subcanal".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignaciones de Métodos Subcanal a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-03.2
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Asignación Especiales Niif definidos en el proceso de Asignaciones de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignaciones de Asignación Especiales Niifl".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Especiales Niif a cargar.
4. El usuario presiona "Cargar". 5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.
### Caso de prueba: E11-GT-03.3
- Implementado: No

**Titulo:** Validar alteración en el archivo descargado Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Técnicos

**Descripcion:** Validar alteraciones en los datos de los archivos descargado

**Precondiciones:**
1. Descarga exitosa del archivo del motor.

**Datos:**
- Archivo Asignación Cuentas Conceptos definidos en el proceso de Asignaciones de Gastos Técnicos descargado del motor

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real", el tipo de gasto "Gastos Técnicos" y en el menú lateral "Asignaciones" > " Asignación Cuentas Conceptos".
2. El usuario selecciona el periodo (Mes y Año).
3. El usuario selecciona el archivo de Asignación Cuentas Conceptos a cargar.
4. El usuario presiona "Cargar".
5. El usuario presiona "Descargar"

**Resultado esperado:**
Verificar que el archivo descargado mantenga la estructura de las columnas. Validar la permanencia de los datos cargados inicialmente.

---

## Escenario: E18-C
**Descripcion:** Validar el Tiempo de procesamiento de la vista de inicio

### Caso de prueba: E18
- Implementado: No

**Titulo:** Tiempo de carga de la página de Inicio

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. ya debe haber sido cargado el archivo Grupo Producto definido para el periodo

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de Inicio.

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página de Inicio. El tiempo de carga de la versión actual del sistema es 51 ms

---

## Escenario: E18-GG-1
**Descripcion:** Validar el Tiempo de procesamiento de la vista de Parametrización de Gastos Generales

_Sin casos de prueba asociados._

---

## Escenario: E18-GG-2
**Descripcion:** Validar el Tiempo de procesamiento de la vista de Aprovisionamiento de Gastos Generales

_Sin casos de prueba asociados._

---

## Escenario: E18-GG-3
**Descripcion:** Validar el Tiempo de procesamiento de la vista de Asignaciones de Gastos Generales

_Sin casos de prueba asociados._

---

## Escenario: E18-GG-4
**Descripcion:** Validar el Tiempo de procesamiento de la vista de los Procesos de Gastos Generales

### Caso de prueba: E18-GG-01.1
- Implementado: No

**Titulo:** Tiempo de carga de la página Cuentas contables de Gastos Generales/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas contables".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 972 ms.
### Caso de prueba: E18-GG-01.2
- Implementado: No

**Titulo:** Tiempo de carga de la página Cuentas contables/Catálogos de Gastos Generales/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas contables".
3. El usuario selecciona el botón "Catálogo".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 1,56 s.
### Caso de prueba: E18-GG-01.3
- Implementado: No

**Titulo:** Tiempo de carga de la página Partidas de Gastos Generales/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Partidas".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 162 ms.
### Caso de prueba: E18-GG-01.4
- Implementado: No

**Titulo:** Tiempo de carga de la página Partidas-Catálogo de Gastos Generales/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Partidas".
3. El usuario selecciona el botón "Catálogo".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 1,29s.
### Caso de prueba: E18-GG-01.5
- Implementado: No

**Titulo:** Tiempo de carga de la página Centros de costo de Gastos Generales/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 188 ms
### Caso de prueba: E18-GG-01.6
- Implementado: No

**Titulo:** Tiempo de carga de la página Centros de costo-Catálogo de Gastos Generales/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. El usuario selecciona el botón "Catálogo".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 816 ms
### Caso de prueba: E18-GG-01.7
- Implementado: No

**Titulo:** Tiempo de carga de la página Líneas-Catálogo de Gastos Generales/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Líneas".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 160 ms.
### Caso de prueba: E18-GG-01.8
- Implementado: No

**Titulo:** Tiempo de carga de la página Productos de Gastos Generales/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Productos".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 149ms.
### Caso de prueba: E18-GG-01.9
- Implementado: No

**Titulo:** Tiempo de carga de la página Productos-Catálogo de Gastos Generales/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Productos".
3. El usuario selcciona el botón "Catálogo".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 249 ms.
### Caso de prueba: E18-GG-01.10
- Implementado: No

**Titulo:** Tiempo de carga de la página Canales de Gastos Generales/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Canales".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 226 ms.
### Caso de prueba: E18-GG-01.11
- Implementado: No

**Titulo:** Tiempo de carga de la página Subcanales de Gastos Generales/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Subcanales".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 151 ms.
### Caso de prueba: E18-GG-01.12
- Implementado: No

**Titulo:** Tiempo de carga de la página Subcanales-Catálogo de Gastos Generales/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Subcanales".
3. El usuario selcciona el botón "Catálogo".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 251ms.
### Caso de prueba: E18-GG-01.13
- Implementado: No

**Titulo:** Tiempo de carga de la página Unidades de Cuenta de Gastos Generales/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Parametrización" > "Unidades de Cuenta".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 868 ms.
### Caso de prueba: E18-GG-02.1
- Implementado: No

**Titulo:** Tiempo de carga de la página Exactus de Gastos Generales/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Cuentas contables".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 168 ms.
### Caso de prueba: E18-GG-02.2
- Implementado: No

**Titulo:** Tiempo de carga de la página Detalle de Gastos Generales/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Detalle gasto".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 212 ms.
### Caso de prueba: E18-GG-02.3
- Implementado: No

**Titulo:** Tiempo de carga de la página Drivers- Centro de Costos de Gastos Generales/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers centro".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 806 ms.
### Caso de prueba: E18-GG-02.4
- Implementado: No

**Titulo:** Tiempo de carga de la página Drivers- Objetos de Costos de Gastos Generales/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers objeto".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 336 ms.
### Caso de prueba: E18-GG-02.5
- Implementado: No

**Titulo:** Tiempo de carga de la página Unidades de Cuenta-PAA de Gastos Generales/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Unidades de Cuenta-PAA".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 214 ms.
### Caso de prueba: E18-GG-02.6
- Implementado: No

**Titulo:** Tiempo de carga de la página Unidades de Cuenta-BBA y VFA-Pacífico de Gastos Generales/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Unidades de Cuenta-BBA y VFA-Pacífico".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 502 ms.
### Caso de prueba: E18-GG-02.7
- Implementado: No

**Titulo:** Tiempo de carga de la página Asientos manuales de Gastos Generales/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Asientos manuales".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 746 ms.
### Caso de prueba: E18-GG-02.8
- Implementado: No

**Titulo:** Tiempo de carga de la página Unidades de cuenta- Asientos y GT de Gastos Generales/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Cuenta UoA".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 117 ms.
### Caso de prueba: E18-GG-02.9
- Implementado: No

**Titulo:** Tiempo de carga de la página Configuración de Excepciones de Gastos Generales/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Configuración de Excepciones".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 136 ms.
### Caso de prueba: E18-GG-02.10
- Implementado: No

**Titulo:** Tiempo de carga de la página Redistribución Ingreso Financiero GG-GF de Gastos Generales/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Redistribución Ingreso Financiero GG-GF".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 99 ms.
### Caso de prueba: E18-GG-03.1
- Implementado: No

**Titulo:** Tiempo de carga de la página Redistribución Asignaciones de Driver de Centros a Bolsas de Gastos Generales/Asignaciones

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Fase 2- Cascadas".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 178 ms.
### Caso de prueba: E18-GG-03.2
- Implementado: No

**Titulo:** Tiempo de carga de la página Asignaciones de Driver a Entidades de Gastos Generales/Asignaciones

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Fase 1- Bolsas".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 166 ms.
### Caso de prueba: E18-GG-03.3
- Implementado: No

**Titulo:** Tiempo de carga de la página Asignaciones de Drivers Objetos de Gastos Generales/Asignaciones

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Fase 3- Objetos".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 166 ms.
### Caso de prueba: E18-GG-03.4
- Implementado: No

**Titulo:** Tiempo de carga de la página Asignaciones Especiales Niif de Gastos Generales/Asignaciones

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Fase 4- Especiales Niif".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 108 ms.
### Caso de prueba: E18-GG-03.5
- Implementado: No

**Titulo:** Tiempo de carga de la página Asignaciones de Lineas Niif de Gastos Generales/Asignaciones

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Líneas Niif".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 117 ms.
### Caso de prueba: E18-GG-03.6
- Implementado: No

**Titulo:** Tiempo de carga de la página Asignaciones de Cuenta Concepto de Gastos Generales/Asignaciones

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Cuenta Concepto".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 3,45s.
### Caso de prueba: E18-GG-03.7
- Implementado: No

**Titulo:** Tiempo de carga de la página Gastos generales de Gastos Generales/Procesos

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Gastos generales".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 143ms.
### Caso de prueba: E18-GG-03.8
- Implementado: No

**Titulo:** Tiempo de carga de la página Asientos manuales de Gastos Generales/Procesos

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Generales".
2. El usuario selecciona del menú lateral "Asignaciones" > "Asientos manuales".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 137ms.

---

## Escenario: E18-GF-1
**Descripcion:** Validar el Tiempo de procesamiento de la vista de Parametrización de Gastos Financieros

_Sin casos de prueba asociados._

---

## Escenario: E18-GF-2
**Descripcion:** Validar el Tiempo de procesamiento de la vista de aprovisionamiento de Gastos Financieros

_Sin casos de prueba asociados._

---

## Escenario: E18-GF-3
**Descripcion:** Validar el Tiempo de procesamiento de la vista de Asignaciones de Gastos Financieros

_Sin casos de prueba asociados._

---

## Escenario: E18-GF-4
**Descripcion:** Validar el Tiempo de procesamiento de la vista de los procesos de Gastos Financieros

### Caso de prueba: E18-GF-01.1
- Implementado: No

**Titulo:** Tiempo de carga de la página Conceptos de Gastos Financieros/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Conceptos".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 270ms.
### Caso de prueba: E18-GF-01.2
- Implementado: No

**Titulo:** Tiempo de carga de la página Cuentas contables de Gastos Financieros/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas contables".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 802ms.
### Caso de prueba: E18-GF-01.3
- Implementado: No

**Titulo:** Tiempo de carga de la página Cuentas contables/Catálogos de Gastos Financieros/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas contables".
3. El usuario selecciona el botón "Catálogo".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 1,11s.
### Caso de prueba: E18-GF-01.4
- Implementado: No

**Titulo:** Tiempo de carga de la página Líneas-Catálogo de Gastos Financieros/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Líneas".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 187ms.
### Caso de prueba: E18-GF-01.5
- Implementado: No

**Titulo:** Tiempo de carga de la página Productos de Gastos Financieros/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Productos".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 380ms.
### Caso de prueba: E18-GF-01.6
- Implementado: No

**Titulo:** Tiempo de carga de la página Productos-Catálogo de Gastos Financieros/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Productos".
3. El usuario selcciona el botón "Catálogo".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 377ms.
### Caso de prueba: E18-GF-01.7
- Implementado: No

**Titulo:** Tiempo de carga de la página Canales de Gastos Financieros/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Canales".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 182ms.
### Caso de prueba: E18-GF-01.8
- Implementado: No

**Titulo:** Tiempo de carga de la página Subcanales de Gastos Financieros/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Subcanales".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 243ms.
### Caso de prueba: E18-GF-01.9
- Implementado: No

**Titulo:** Tiempo de carga de la página Subcanales-Catálogo de Gastos Financieros/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Subcanales".
3. El usuario selcciona el botón "Catálogo".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 294ms.
### Caso de prueba: E18-GF-01.10
- Implementado: No

**Titulo:** Tiempo de carga de la página Centros de costo de Gastos Financieros/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 1,54s.
### Caso de prueba: E18-GF-01.11
- Implementado: No

**Titulo:** Tiempo de carga de la página Centros de costo-Catálogo de Gastos Financieros/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Centros".
3. El usuario selecciona el botón "Catálogo".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 1,85s.
### Caso de prueba: E18-GF-01.12
- Implementado: No

**Titulo:** Tiempo de carga de la página Unidades de Cuenta de Gastos Financieros/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Parametrización" > "Unidades de Cuenta".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 745ms.
### Caso de prueba: E18-GF-02.1
- Implementado: No

**Titulo:** Tiempo de carga de la página Exactus de Gastos Financieros/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página versión 1

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 1 s
### Caso de prueba: E18-GF-02.1.1
- Implementado: No

**Titulo:** Tiempo de carga de la página Exactus de Gastos Financieros/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página versión 1

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 1.44 s
### Caso de prueba: E18-GF-02.2
- Implementado: No

**Titulo:** Tiempo de carga de la página Drivers - Productos de Gastos Financieros/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers producto".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 686 ms.
### Caso de prueba: E18-GF-02.3
- Implementado: No

**Titulo:** Tiempo de carga de la página Drivers - Subcanales de Gastos Financieros/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers subcanal".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 140 ms.
### Caso de prueba: E18-GF-02.4
- Implementado: No

**Titulo:** Tiempo de carga de la página Drivers - CC Vida de Gastos Financieros/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers CC Vida".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 167 ms.
### Caso de prueba: E18-GF-02.5
- Implementado: No

**Titulo:** Tiempo de carga de la página Unidades de Cuenta - PAA de Gastos Financieros/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Unidades de Cuenta - PAA".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 310ms.
### Caso de prueba: E18-GF-02.6
- Implementado: No

**Titulo:** Tiempo de carga de la página Unidades de Cuenta - BBA y VFA - Pacífico de Gastos Financieros/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Unidades de Cuenta - BBA y VFA - Pacífico".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 7.82 s.
### Caso de prueba: E18-GF-02.7
- Implementado: No

**Titulo:** Tiempo de carga de la página Configuración de Excepciones de Gastos Financieros/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Configuración de Excepciones".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 575ms..
### Caso de prueba: E18-GF-02.8
- Implementado: No

**Titulo:** Tiempo de carga de la página Redistribución Ingreso Financiero GG - GF de Gastos Financieros/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Redistribución Ingreso Financiero GG - GF".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 140ms.
### Caso de prueba: E18-GF-03.1
- Implementado: No

**Titulo:** Tiempo de carga de la página Asignaciones Especiales Niif de Gastos Financieros/Asignaciones

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Asignaciones" > "Fase 4- Especiales Niif".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 797ms.
### Caso de prueba: E18-GF-03.2
- Implementado: No

**Titulo:** Tiempo de carga de la página Asignaciones de Cuenta Concepto de Gastos Financieros/Asignaciones

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Asignaciones" > "Cuenta Concepto".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 6.26s.
### Caso de prueba: E18-GF-03.3
- Implementado: No

**Titulo:** Tiempo de carga de la página Procesos Gastos Financieros de Gastos Financieros/Procesos

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Asignaciones" > "Gastos financieros".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 413ms.

---

## Escenario: E18-GT-1
**Descripcion:** Validar el Tiempo de procesamiento de la vista de Parametrización de Gastos Técnicos

_Sin casos de prueba asociados._

---

## Escenario: E18-GT-2
**Descripcion:** Validar el Tiempo de procesamiento de la vista de Aprovisionamiento de Gastos Técnicos

_Sin casos de prueba asociados._

---

## Escenario: E18-GT-3
**Descripcion:** Validar el Tiempo de procesamiento de la vista de Asignaciones de Gastos Técnicos

_Sin casos de prueba asociados._

---

## Escenario: E18-GT-4
**Descripcion:** Validar el Tiempo de procesamiento de la vista de los Procesos de Gastos Técnicos

### Caso de prueba: E18-GT-01.1
- Implementado: No

**Titulo:** Tiempo de carga de la página Ramos-Catálogo de Gastos Técnicos/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Ramos".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 196ms.
### Caso de prueba: E18-GT-01.2
- Implementado: No

**Titulo:** Tiempo de carga de la página Conceptos - Catálogo de Gastos Técnicos/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Conceptos".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 1.66s.
### Caso de prueba: E18-GT-01.3
- Implementado: No

**Titulo:** Tiempo de carga de la página Cuentas Contables de Gastos Técnicos/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Cuentas Contables".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 667s.
### Caso de prueba: E18-GT-01.4
- Implementado: No

**Titulo:** Tiempo de carga de la página Cuentas Contables - Catálogo de Gastos Técnicos/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Conceptos".
3. El usuario selecciona el botón "Catálogo".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 340s.
### Caso de prueba: E18-GT-01.5
- Implementado: No

**Titulo:** Tiempo de carga de la página Líneas - Catálogo de Gastos Técnicos/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Líneas".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 198ms.
### Caso de prueba: E18-GT-01.6
- Implementado: No

**Titulo:** Tiempo de carga de la página Productos de Gastos Técnicos/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Productos".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 289ms.
### Caso de prueba: E18-GT-01.7
- Implementado: No

**Titulo:** Tiempo de carga de la página Productos - Catálogo de Gastos Técnicos/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Productos".
3. El usuario presiona el botón "Catálogo".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 274ms.
### Caso de prueba: E18-GT-01.8
- Implementado: No

**Titulo:** Tiempo de carga de la página Canales- Catálogo de Gastos Técnicos/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Canales".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 158ms.
### Caso de prueba: E18-GT-01.9
- Implementado: No

**Titulo:** Tiempo de carga de la página Subcanales de Gastos Técnicos/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Subcanales".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 531ms.
### Caso de prueba: E18-GT-01.10
- Implementado: No

**Titulo:** Tiempo de carga de la página Subcanales - Catálogo de Gastos Técnicos/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Subcanales".
3. El usuario presiona el botón "Catálogo".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 287ms.
### Caso de prueba: E18-GT-01.11
- Implementado: No

**Titulo:** Tiempo de carga de la página UoA de Gastos Técnicos/Parametrización

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Parametrización" > "Unidades de Cuenta".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 1,09s.
### Caso de prueba: E18-GT-02.1
- Implementado: No

**Titulo:** Tiempo de carga de la página Exactus de Gastos Técnicos/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Exactus".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 5,19s.
### Caso de prueba: E18-GT-02.2
- Implementado: No

**Titulo:** Tiempo de carga de la página Drivers - Productos de Gastos Técnicos/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers producto".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 655ms.
### Caso de prueba: E18-GT-02.3
- Implementado: No

**Titulo:** Tiempo de carga de la página Drivers - Subcanales de Gastos Técnicos/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Drivers subcanal".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 4,23s.
### Caso de prueba: E18-GT-02.4
- Implementado: No

**Titulo:** Tiempo de carga de la página Unidades de cuenta - Asientos y GT de Gastos Técnicos/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Cuenta UoA".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 5,47s.
### Caso de prueba: E18-GT-02.5
- Implementado: No

**Titulo:** Tiempo de carga de la página Unidades de Cuenta - PAA de Gastos Técnicos/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Unidades de Cuenta - PAA".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 562ms
### Caso de prueba: E18-GT-02.6
- Implementado: No

**Titulo:** Tiempo de carga de la página Unidades de Cuenta - BBA y VFA - Pacífico de Gastos Técnicos/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Unidades de Cuenta - BBA y VFA - Pacífico".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 3.33s
### Caso de prueba: E18-GT-02.7
- Implementado: No

**Titulo:** Tiempo de carga de la página Configuración de Excepciones de Gastos Técnicos/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Configuración de Excepciones".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 172ms.
### Caso de prueba: E18-GT-02.8
- Implementado: No

**Titulo:** Tiempo de carga de la página Redistribución Ingreso Financiero GG - GF de Gastos Técnicos/Aprovisionamiento

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Aprovisionamiento" > "Redistribución Ingreso Financiero GG - GF".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 214 ms.
### Caso de prueba: E18-GT-03.1
- Implementado: No

**Titulo:** Tiempo de carga de la página Asignaciones Especiales Niif de Gastos Técnicos/Asignaciones

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. 

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Técnicos".
2. El usuario selecciona del menú lateral "Asignaciones" > "Fase 4- Especiales Niif".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 148 ms.
### Caso de prueba: E18-GT-03.2
- Implementado: No

**Titulo:** Tiempo de carga de la página Asignaciones de Cuenta Concepto de Gastos Técnicos/Asignaciones

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Asignaciones" > "Cuenta Concepto".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 2,92s.
### Caso de prueba: E18-GT-03.3
- Implementado: No

**Titulo:** Tiempo de carga de la página Asignaciones de Metodos Subcanal de Gastos Técnicos/Asignaciones

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Asignaciones" > "Método subcanal".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 1.15 s.
### Caso de prueba: E18-GT-03.4
- Implementado: No

**Titulo:** Tiempo de carga de la página Procesos Gastos Técnicos de Gastos Técnicos/Procesos

**Descripcion:** Tomar el tiempo de duración de la carga de esta página

**Precondiciones:**
1. Correcto funcionamiento del sistema. La vista debe tener informacion ya cargada.

**Datos:**
- 

**Pasos:**
1. El usuario accede a la página de inicio, selecciona el tipo de distribución "Real" y el tipo de gasto "Gastos Financieros".
2. El usuario selecciona del menú lateral "Asignaciones" > "Gastos técnicos".

**Resultado esperado:**
Medir de forma satisfactoria el tiempo de carga de la página. El tiempo de carga de la versión actual del sistema es 300ms.

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
- Toda combinación que no corresponda con LA MATRIZ DE VALIDACIONES PARA CADA CAMPO
- Codigo: LPER,LCOM,VEHI,SOAT,AMED, AFP,SEPE,VCRD,RVIT,VGRP,VIND
- Nombre: LINEAS PERSONALES, LINEAS COMERCIALES, AUTOS, SOAT, ASISTENCIA MEDICA, AFP, SEPELIO, VIDA CREDITO, RENTAS, VIDA GRUPO, VIDA INDIVIDUAL secuencia homologa a la del campo código
- Negocio: GENERALES (LPER,LCOM,VEHI,SOAT, AMED) y VIDA (AFP,SEPE,VCRD,RVIT, VGRP,VIND).
- Estado: Activo, Inactivo (por defecto activo)

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
- Toda combinación que no corresponda con LA MATRIZ DE VALIDACIONES PARA CADA CAMPO
- codigo: comienza con el código de la línea a la que estará asociado y con un número consecutivo a los producto creados anteriormente
- Nombre: Frase corta similar al objeto social de este producto
- codigo Línea: Se seleciona de llos valores cargados en lineas: LPER,LCOM,VEHI,SOAT,AMED, AFP, SEPE, VCRD, RVIT, VGRP, VIND
- Nombre Línea: Se selecciona en correspondencia al codigo, LINEAS PERSONALES, LINEAS COMERCIALES, AUTOS, SOAT, ASISTENCIA MEDICA, AFP, SEPELIO, VIDA CREDITO, RENTAS, VIDA GRUPO, VIDA INDIVIDUAL secuencia homologa a la secuencia del campo código.
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
- Toda combinación que no corresponda con LA MATRIZ DE VALIDACIONES PARA CADA CAMPO
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
- Toda combinación que no corresponda con:
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
- Toda combinación que no corresponda con:
- Atribuible: debe mostrar Si (Atri) y No (No Atri) y permitir seleccionar
- Tipo de Gasto: debe mostrar GG,GF,GT y AM y permitir seleccionar
- GA/GM: debe mostrar GA y GM y permitir seleccionar
- Código Concepto: solo números y punto
- Dígito de Cuenta: solo números,
- Cuenta: solo números y punto
- Ramo: cadena letras
- Producto: string
- Subcanal: cadena letras y números
- UoA Antes:cadena letras, guión bajo y números
- UoA Después: cadena letras, guión bajo y números
- Porciento %: solo números

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
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
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
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
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
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
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
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
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
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Parche".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro ha sido editado correctamente.
1-se muestra el mensaje de exito ¡Cambios guardados correctamente!
2-se actualiza correctamente cada dato en la tabla
3-se actualiza la fecha y la hora

---

## Escenario: E36-C-02
**Descripcion:** Validar las reglas de negocio al editar un registro en el flujo de comunes

### Caso de prueba: E36-C-02.1
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro de Líneas porque no cumplen con las reglas definidas de negocio en el flujo de comunes

**Descripcion:** Validar que no se pueda editar un registro porque no cumplen con las reglas definidas de negocio desde el modal "Editar Línea" de Líneas

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. El estado de la distribución debe ser creada.
4. El valor del campo código no es editable.
5. Para cambiar el nombre, se verifica si tiene productos asociados, de tener muestra el mensaje de advertencia: El registro que desea modificar cuenta con datos asociados. Favor de validar.
6. Los campos Negocio y Estado son select.
7. Activar un registro inactivo, se puede realizar sin restricción.
8. Para cambiar el estado a Inactivo, se verifica si tiene productos asociados y están inactivos, de lo contrario muestra el mensaje de advertencia: El registro que desea inactivar aún tiene datos asociados activos. Favor de validar.

**Datos:**
- Campos del formulario que se pueden editar:
- código: No editable y obligatorio
- Nombre: editable y obligatorio
- Negocio: editable, solo valores (Generales o Vida) y obligatorio
- Estado: editable, solo valores (Activo e Inactivo) y obligatorio

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Línea".
5. El usuario edita los campos
6. El usuario presiona "Actualizar".

**Resultado esperado:**
El nuevo registro no ha sido editado correctamente.
1-se muestra el mensaje de error Algo no coincide entre los datos ingresados. Por favor, revise que los campos estén relacionados correctamente e intente de nuevo.
### Caso de prueba: E36-C-02.2
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro de Grupo Producto porque no cumplen con las reglas definidas de negocio en el flujo de comunes

**Descripcion:** Validar que no se pueda editar un registro porque no cumplen con las reglas definidas de negocio desde el modal "Editar Producto" de Grupo Producto

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. El estado de la distribución debe ser creada.
4. El valor del campo código no es editable.
5. Los campos codigo Linea, nombre línea, Método de valoración y Estado son select.

**Datos:**
- Campos del formulario que se pueden editar:
- codigo: No editable y obligatorio
- Nombre: editable y obligatorio
- codigo Línea: editable, valores (muestra solo las líneas creadas) y obligatorio
- Nombre Línea: No editable, se autocompleta según la línea seleccionada y obligatorio
- Método de Valoración: editable, solo valores (PAA, BBA, VFA y BBA /VFA) y obligatorio
- Estado: editable, solo valores (Activo e Inactivo) y obligatorio

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Producto".
5. El usuario edita los campos
6. El usuario presiona "Actualizar".

**Resultado esperado:**
El nuevo registro no ha sido editado correctamente.
1-se muestra el mensaje de error Algo no coincide entre los datos ingresados. Por favor, revise que los campos estén relacionados correctamente e intente de nuevo.
### Caso de prueba: E36-C-02.3
- Implementado: No

**Titulo:** 

**Descripcion:** Validar que no se pueda editar un registro porque no cumplen con las reglas definidas de negocio desde el modal "Editar Canal" de Canales

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. El estado de la distribución debe ser creada.
4. El valor del campo código no es editable.
5. Para cambiar el nombre, se verifica si tiene Subcanales asociados, de tener muestra el mensaje de advertencia: El registro que desea modificar cuenta con datos asociados. Favor de validar.
6. El campo Estado es un select.
7. Activar un registro inactivo, se puede realizar sin restricción.
8. Para cambiar el estado a Inactivo, se verifica si tiene Subcanales asociados y están inactivos, de lo contrario muestra el mensaje de advertencia: El registro que desea inactivar aún tiene datos asociados activos. Favor de validar.

**Datos:**
- Campos del formulario que se pueden editar:
- codigo: No editable y obligatorio
- Nombre: editable y obligatorio
- Estado: editable, solo valores (Activo e Inactivo) y obligatorio

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Canal".
5. El usuario edita los campos
6. El usuario presiona "Actualizar".

**Resultado esperado:**
El nuevo registro no ha sido editado correctamente.
1-se muestra el mensaje de error Algo no coincide entre los datos ingresados. Por favor, revise que los campos estén relacionados correctamente e intente de nuevo.
### Caso de prueba: E36-C-02.4
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro de Subcanales porque no cumplen con las reglas definidas de negocio en el flujo de comunes

**Descripcion:** Validar que no se pueda editar un registro porque no cumplen con las reglas definidas de negocio desde el modal "Editar Subcanal" de Subcanales

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. El estado de la distribución debe ser creada.
4. El valor del campo código no es editable.
5. Los campos Codigo Canal, nombre Canal y Estado son select.

**Datos:**
- Campos del formulario que se pueden editar:
- codigo Subcanal: No editable y obligatorio
- Nombre Subcanal: editable y obligatorio
- codigo canal: editable, valores (muestra solo los canales creados) y obligatorio
- Nombre canal: No editable, se autocompleta según el canal seleccionado y obligatorio
- Estado: editable, solo valores (Activo e Inactivo) y obligatorio

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Subcanal".
5. El usuario edita los campos
6. El usuario presiona "Actualizar".

**Resultado esperado:**
El nuevo registro no ha sido editado correctamente.
1-se muestra el mensaje de error Algo no coincide entre los datos ingresados. Por favor, revise que los campos estén relacionados correctamente e intente de nuevo.
### Caso de prueba: E36-C-02.5
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro de Configuración de Parches porque no cumplen con las reglas definidas de negocio en el flujo de comunes

**Descripcion:** Validar que no se pueda editar un registro porque no cumplen con las reglas definidas de negocio desde el modal "Editar Parche" de Configuración de Parches

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. la UoA que se quiere ingresar debe existir dentro del Maestro UoA. En caso contrario, se debe mostrar un mensaje de error ''La unidad de cuenta no existe dentro del maestro. Favor de revisa'' y es bloqueante para continuar con el flujo.
4. al aplicar un parche, el sistema debe validar que la suma de los porcentajes debe ser 100% por cada combinación que se parche.

**Datos:**
- Campos del formulario que se pueden editar:
- Atribuible: editable, debe mostrar Si (Atri) y No (No Atri) y permitir seleccionar, no es obligatorio
- Tipo de Gasto: editable, debe mostrar GG,GF,GT y AM y permitir seleccionar, es obligatorio
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
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Parche".
5. El usuario edita los campos
6. El usuario presiona "Actualizar".

**Resultado esperado:**
El nuevo registro no ha sido editado correctamente.
1-se muestra el mensaje de error Algo no coincide entre los datos ingresados. Por favor, revise que los campos estén relacionados correctamente e intente de nuevo.

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
- Campos del formulario
- codigo: no debe pernitir caracteres especiales. este campo es obligatorio.
- Nombre: no debe pernitir caracteres especiales. este campo es obligatorio.
- Negocio: no debe pernitir caracteres especiales. este campo es obligatorio.
- Estado: campo editable, debe mostrar y permitir seleccionar Activo e Inactivo

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Línea".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.
### Caso de prueba: E36-C-03.2
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Grupo Producto por error de formato de los campos en el flujo de comunes

**Descripcion:** Validar que no se puede editar un registro desde el modal "Editar Producto" de Grupo Producto

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. todos los campos son obligatorios

**Datos:**
- Campos del formulario que se pueden editar:
- codigo: no debe pernitir caracteres especiales. este campo es obligatorio.
- Nombre: no debe pernitir caracteres especiales. este campo es obligatorio.
- codigo Línea: debe mostrar las Líneas creadas y pernitir seleccionar, este campo es obligatorio.
- Nombre Línea: debe autocompletar según la linea seleccionada, este campo es obligatorio
- Método de Valoración: debe mostrar PAA, BBA, VFA y BBA /VFA y pernitir seleccionar uno de estos campos, este campo es obligatorio.
- Estado: campo editable, debe mostrar Activo e Inactivo y permitir seleccionar, este campo es obligatorio

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Producto".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.
### Caso de prueba: E36-C-03.3
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Canales por error de formato de los campos en el flujo de comunes

**Descripcion:** Validar que no se puede editar un registro desde el modal "Editar Canal" de Canales

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. todos los campos son obligatorios

**Datos:**
- Campos del formulario que se pueden editar:
- codigo: no debe pernitir caracteres especiales. este campo es obligatorio.
- Nombre: no debe pernitir caracteres especiales. este campo es obligatorio.
- Estado: campo editable, debe mostrar Activo e Inactivo y permitir seleccionar, este campo es obligatorio

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Canal".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.
### Caso de prueba: E36-C-03.4
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Subcanales por error de formato de los campos en el flujo de comunes

**Descripcion:** Validar que no se puede editar un registro desde el modal "Editar Subcanal" de Subcanales

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. todos los campos son obligatorios

**Datos:**
- Campos del formulario que se pueden editar:
- codigo Subcanal: no debe pernitir caracteres especiales. este campo es obligatorio.
- Nombre Subcanal: no debe pernitir caracteres especiales. este campo es obligatorio.
- codigo canal: debe mostrar los Canales creados y pernitir seleccionar, este campo es obligatorio.
- Nombre canal: debe autocompletar según la linea seleccionada, este campo es obligatorio
- Estado: campo editable, debe mostrar Activo e Inactivo y permitir seleccionar, este campo es obligatorio

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Subcanal".
5. El usuario edita los campos
6. . El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.
### Caso de prueba: E36-C-03.5
- Implementado: No

**Titulo:** Validar que se pueda editar un nuevo registro de Configuración de Parches por error de formato de los campos en el flujo de comunes

**Descripcion:** Validar que no se puede editar un registro desde desde el modal "Editar Parche" de Configuración de Parches

**Precondiciones:**
1. El registro debe haber sido creado anteriormente.
2. el usuario debe tener rol de Administrador de Gastos
3. los campos: Atribuible y Tipo de Gasto son select

**Datos:**
- Campos del formulario que se pueden editar:
- Atribuible: editable, debe mostrar Si (Atri) y No (No Atri) y permitir seleccionar, no es obligatorio
- Tipo de Gasto: editable, debe mostrar GG,GF,GT y AM y permitir seleccionar, es obligatorio
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
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
4. Se levanta el modal "Editar Parche".
5. El usuario edita los campos
6. El usuario presiona el botón "Actualizar".

**Resultado esperado:**
El nuevo registro no ha sido editado.
1-se muestra el mensaje de error, Los datos en el campo [nombre del campo] no son correctos, favor de validarlos.

---

## Escenario: E37-C-01
**Descripcion:** Validar que el sistema pueda eliminar un registro en el flujo de comunes

### Caso de prueba: E37-C-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Líneas en el flujo de comunes

**Descripcion:** Validar que se puede eliminar un registro desde el menu de acciones en el flujo de comunes de Lineas

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. no se debe eliminar el registro si ya se ha cerrado un proceso.
4. si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono basurero.
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: Está seguro de que desea eliminar este registro?".
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-C-01.2
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Grupo Producto en el flujo de comunes

**Descripcion:** Validar que se puede eliminar un registro desde el menu de acciones en el flujo de comunes de Lineas

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. no se debe eliminar el registro si ya se ha cerrado un proceso.
4. si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono basurero.
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: Está seguro de que desea eliminar este registro?".
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-C-01.3
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Canales en el flujo de comunes

**Descripcion:** Validar que se puede eliminar un registro desde el menu de acciones en el flujo de comunes de Lineas

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. no se debe eliminar el registro si ya se ha cerrado un proceso.
4. si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono basurero.
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: Está seguro de que desea eliminar este registro?".
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-C-01.4
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Subcanales en el flujo de comunes

**Descripcion:** Validar que se puede eliminar un registro desde el menu de acciones en el flujo de comunes de Lineas

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. no se debe eliminar el registro si ya se ha cerrado un proceso.
4. si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: Está seguro de que desea eliminar este registro?".
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-C-01.5
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Maestro UoA en el flujo de comunes

**Descripcion:** Validar que se puede eliminar un registro desde el menu de acciones en el flujo de comunes de Lineas

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. no se debe eliminar el registro si ya se ha cerrado un proceso.
4. si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. 

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: Está seguro de que desea eliminar este registro?".
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.
### Caso de prueba: E37-C-01.6
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de eliminar un registro de Configuración de Parche en el flujo de comunes

**Descripcion:** Validar que se puede eliminar un registro desde el menu de acciones en el flujo de comunes de Lineas

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. no se debe eliminar el registro si ya se ha cerrado un proceso.
4. si el mismo está siendo usado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parche".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal con la advertencia "Está seguro de que desea eliminar este registro?".
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro ha sido eliminado correctamente.
1- Advertencia: Está seguro de que desea eliminar este registro?".
2- se muestra el mensaje de exito ¡Registro eliminado con éxito!
3- no se muestra en la tabla del front.

---

## Escenario: E37-C-02
**Descripcion:** Validar las reglas de negocio al eliminar un registro en el flujo de comunes

### Caso de prueba: E37-C-02.1
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Líneas

**Descripcion:** Validar que no se puede eliminar un registro desde el menu de acciones en el flujo de comunes de Lineas

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. el registro está siendo usado en la corrida de un proceso.
4. el proceso ya ha sido cerrado.
5. si tiene productos asociados deben ser eliminados tambien. En caso contrario, se debe mostrar el mensaje de error. No se puede eliminar el registro ya que tiene datos asociados. Favor de validar.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Líneas".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal del mensaje de error indicado.
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-C-02.2
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Grupo Producto

**Descripcion:** Validar que no se puede eliminar un registro desde el menu de acciones en el flujo de comunes de Grupo Producto

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. el registro está siendo usado en la corrida de un proceso.
4. el proceso ya ha sido cerrado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Grupo Producto".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal del mensaje de error indicado.
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-C-02.3
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Canales

**Descripcion:** Validar que no se puede eliminar un registro desde el menu de acciones en el flujo de comunes de Canales

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. el registro está siendo usado en la corrida de un proceso.
4. el proceso ya ha sido cerrado.
5. si tiene subcanales asociados deben ser eliminados tambien. En caso contrario, se debe mostrar el mensaje de error. No se puede eliminar el registro ya que tiene datos asociados. Favor de validar.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Canales".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal del mensaje de error indicado.
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-C-02.4
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Subcanales

**Descripcion:** Validar que no se puede eliminar un registro desde el menu de acciones en el flujo de comunes de Subcanales

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. el registro está siendo usado

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal del mensaje de error indicado.
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-C-02.5
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Maestro UoA

**Descripcion:** Validar que no se puede eliminar un registro desde el menu de acciones en el flujo de comunes de Maestro UoA

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. el registro está siendo usado en la corrida de un proceso.
4. el proceso ya ha sido cerrado.

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal del mensaje de error indicado.
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.
### Caso de prueba: E37-C-02.6
- Implementado: No

**Titulo:** Validar que no se pueda editar un nuevo registro porque no cumplen con las reglas definidas de negocio en el flujo de comunes de Configuración de Parches

**Descripcion:** Validar que no se puede eliminar un registro desde el menu de acciones en el flujo de comunes de Configuración de Parches

**Precondiciones:**
1. El registro debe haber sido creado correctamente
2. el usuario debe tener rol de Administrador de Gastos
3. el registro está siendo usado

**Datos:**
- Registro seleccionado para eliminar

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Configuración de Parches".
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono basurero
4. Se levanta el modal del mensaje de error indicado.
5. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
El registro no ha sido eliminado
1- Se muestra el mensaje de error: Actualmente hay un proceso en ejecución, por lo que no es posible editar o eliminar el registro. Espere a que finalice el proceso.

---

## Escenario: E56-PAG-01
**Descripcion:** Validar el funcionamiento integral del paginador en el sistema

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
3. las columnas por defecto siempre se mostrarán a menos que el usuario las oculte de forma manual.
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
3. las columnas por defecto siempre se mostrarán a menos que el usuario las oculte de forma manual.
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
3. las columnas por defecto siempre se mostrarán a menos que el usuario las oculte de forma manual.
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
3. las columnas por defecto siempre se mostrarán a menos que el usuario las oculte de forma manual.
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
3. las columnas por defecto siempre se mostrarán a menos que el usuario las oculte de forma manual.
4. las columna definidas Por defecto, se pueden desmarcar manualmente

**Datos:**
- Nombre de las columnas que se muestran en el desplegable del archivo Maestro UoA del flujo de comunes: aniomes, ifrsGroup, profDesc, measureShortDesc, ifrsCurrency, entryYear, entryMonth, collectionName, grossCeded, uoaCeded, uoaPeriodo, Estatus.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Maestro UoA".
3. El usuario presiona el botón "Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario porcede a desmarcar manualmente una, algunas o todas las columnas definidas Por defecto
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
3. las columnas por defecto siempre se mostrarán a menos que el usuario las oculte de forma manual.
4. la opción ''Mostrar todas'': muestra todas las columnas de la tabla.
5. la opción ''Ocultar todas'': Oculta todas las columna excepto las que están definidas Por defecto.

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
3. las columnas por defecto siempre se mostrarán a menos que el usuario las oculte de forma manual.
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
3. las columnas por defecto siempre se mostrarán a menos que el usuario las oculte de forma manual.
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
3. las columnas por defecto siempre se mostrarán a menos que el usuario las oculte de forma manual.
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
### Caso de prueba: E60-C-02.5
- Implementado: No

**Titulo:** Validar el correcto funcionamiento de la selección de columnas por defecto del componente columnas en el flujo de comunes de Unidades de Cuenta - BBA/VFA

**Descripcion:** Validad el correcto funcionamiento de la selección de columnas por defecto del componente columnas del archivo Unidades de Cuenta - BBA/VFA de comunes

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. Estén configurados los nombre de las columnas del archivo Unidades de Cuenta - BBA/VFA definido para el motor.
3. las columnas por defecto siempre se mostrarán a menos que el usuario las oculte de forma manual.
4. las columna definidas Por defecto, se pueden desmarcar manualmente

**Datos:**
- Nombre de las columnas que se mostraran en el desplegable: obId, Periodo, SistemaOrigen, IdPoliza, CodigoProductoPacifico, NumeroPoliza, DescripcionUoA_LRC_LIC, DescripcionUoA_REA, CodigoMoneda, DescripcionMoneda, CodigoOnerosidad, DescripcionOnerosidad, AniadaAnio, AniadaMes, CodigoPortafolio, DescripcionPortafolio, CentroCosto, LineaNegocio, ProductoPPTO, CanalDistribucion, SubCanal, CodigoMetodologia, DescripcionMetodologia, CodigoLineaSBS, IndPolizaRehabilitada del archivo Unidades de Cuenta - BBA/VFA del flujo de comunes.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Unidades de Cuenta - BBA/VFA".
3. El usuario presiona el botón "Ver"
4. Se levanta el modal ''Columnas'' se mostrarán marcadas las columnas por defecto las cuales tienen puesto (Por Defecto) al lado.
5. El usuario porcede a desmarcar manualmente una, algunas o todas las columnas definidas Por defecto
6. El usuario presiona el botón "Aceptar".

**Resultado esperado:**
Se muestran la tabla del Front sin las columnas del archivo definidas Por defecto que han sido desmarcadas manualmente.

---

## Escenario: E62-ERROR
**Descripcion:** Validar el correcto tratamiento de errores propios del sistema

### Caso de prueba: E62-ERROR-01
- Implementado: No

**Titulo:** Validar el tratamiento de errores ante una falla en la carga del archivo

**Descripcion:** Validar que se muestre el mensaje de error correcto ante una falla en la carga de un archivo

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. validar que el o los archivos anteriores se hayan cargado antes
3. existencia del archivo correspondiente
4. Incluye condiciones externas que afecten el funcionamiento del sistema.

**Datos:**
- Archivo de Comunes a cargar.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Subcanales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
Se deben mostrar mensajes de error visibles y específicos por campo, indicando el motivo del error, por ejemplo:
1-Codigo Concepto: El código de concepto debe tener el formato XX.XX.XX, donde cada X es un dígito. Ejemplo válido: 12.34.56
2-Digito Cuenta; El dígito de cuenta debe ser un número de dos dígitos entre 01 y 99, o estar vacío. Ejemplo válido: 05 o vacío
3-Cuenta:La cuenta debe tener el formato XX.XX.XX.XX.XX, donde cada X es un dígito. Ejemplo válido: 12.34.56.78.90
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
3. Desde el menu acciones de la tabla principal, el usuario presiona el icono lápiz
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
### Caso de prueba: E62-ERROR-05
- Implementado: No

**Titulo:** Validar el tratamiento de errores al fallar el pipeline durante la carga de un archivo

**Descripcion:** Validar que se muestre el mensaje de error correcto ante una falla del pipeline durante la carga de un archivo

**Precondiciones:**
1. El usuario debe tener rol de Administrador de Gastos.
2. validar que el o los archivos anteriores se hayan cargado antes
3. existencia del archivo correspondiente
4. Incluye condiciones externas que afecten el funcionamiento del sistema.

**Datos:**
- Archivo de Comunes a cargar.

**Pasos:**
1. El usuario accede a la página de inicio ''Distribución''
2. El usuario selecciona del menú lateral "Comunes" > "Subcanales".
3. El usuario presiona el botón ¨Cargar¨,
4. Se levanta el modal con titulo "Cargar Subcanales", el botón aceptar está deshabilitado, el usuario da clic en "Haz click para examinar" y selecciona el archivo a cargar.
5. El botón aceptar queda habilitado y se muestra un nuevo botón ''Subir nuevo archivo'' por si se ha equivocado o necesita cargar nuevamente el archivo. Regresa al paso 4.
6. El usuario presiona "Aceptar".

**Resultado esperado:**
La consulta no ha sido realizada
1- Se muestra el mensaje de error: ''Ocurrió un error durante el procesamiento de la información. Favor de cargar el archivo nuevamente.''

---

## Escenario: E63-BUS-01
**Descripcion:** Validar el funcionamiento integral del buscador en el sistema

### Caso de prueba: E63-BUS-01
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
