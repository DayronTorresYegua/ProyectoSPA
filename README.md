# ProyectoSPA

# Parte 1 · Planificación

## 1. Backlog

| Prioridad | Funcionalidad |
| --- | --- |
| Alta | Inicio con hotel asignado y botón «Acceder» |
| Alta | Inicio sin hotel («No hay hoteles asignados») |
| Alta | Listado de tareas del empleado |
| Media | Marcar tarea como completada |
| Media | Registro de cuenta |
| Media | Inicio de sesión |
| Media | Acciones del jefe |
| Media | Crear hotel |
| Baja | Crear y editar tareas desde Acciones |
| Baja | Asignar hoteles y empleados |

## 2. Mapa de pantallas

### Perfiles

| Perfil | Pantallas que ve |
| --- | --- |
| Todos | Iniciar sesion |
| Todos | Registro |
| Empleado con hotel | Inicio + Mis tareas |
| Empleado sin hotel | Inicio con aviso |
| Jefe con hotel | Inicio + Acciones |
| Jefe sin hotel | Inicio con aviso + accion |

### Pantallas

| Pantalla | Archivo | Acceso | Datos que muestra | Estado |
| --- | --- | --- | --- | --- |
| Registro de cuenta | `pages/registro.html` | Sin sesión | Nombre, correo y contraseña | Pendiente |
| Inicio de sesión | `pages/login.html` | Sin sesión | Correo y contraseña | Pendiente |
| Inicio con hotel | `index.html` | Usuario con sesión | Bienvenida, hotel asignado y botón «Acceder» | Implementada |
| Inicio sin hotel | `index.html` | Usuario con sesión | Bienvenida y aviso «No hay hoteles asignados» | Pendiente |
| Mis tareas | `pages/tareasEmpleado.html` | Empleado con hotel | Tareas con su estado y botón para completarlas | Implementada |
| Acciones | `pages/acciones.html` | Jefe con hotel | Botones de gestión del hotel | Pendiente |
| Crear hotel | `pages/crearHotel.html` | Jefe sin hotel | Creacion del hotel | Pendiente |
