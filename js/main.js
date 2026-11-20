import { tareas, empleados } from './datos.js';

document.addEventListener('DOMContentLoaded', () => {
    mostrarTareas();
});

function mostrarTareas() {
    const listaTareas = document.getElementById('listaTareas');

    tareas.forEach((tarea) => {
        const tarjeta = document.createElement('article');
        tarjeta.className = 'tarea';

        const titulo = document.createElement('h2');
        titulo.className = 'tarea__titulo';
        titulo.textContent = tarea.titulo;

        const descripcion = document.createElement('p');
        descripcion.className = 'tarea__descripcion';
        descripcion.textContent = tarea.descripcion;

        const boton = document.createElement('button');
        boton.className = 'tarea__boton';
        boton.type = 'button';
        boton.textContent = 'Marcar como completada';

        tarjeta.addEventListener('click', () => mostrarInformacionTarea(tarea));

        boton.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(boton);

        listaTareas.appendChild(tarjeta);
    });
}

function mostrarInformacionTarea(tarea) {
    const empleado = empleados.find((e) => e.id === tarea.empleadoId);

    const ficha = document.createElement('div');
    ficha.className = 'ficha';

    const contenido = document.createElement('div');
    contenido.className = 'ficha__contenido';

    const titulo = document.createElement('h2');
    titulo.className = 'ficha__titulo';
    titulo.textContent = tarea.titulo;

    const descripcion = document.createElement('p');
    descripcion.className = 'ficha__descripcion';
    descripcion.textContent = tarea.descripcion;

    const estado = document.createElement('p');
    estado.className = 'ficha__dato';
    estado.textContent = 'Estado: ' + (tarea.completada ? 'Completada' : 'Pendiente');

    const persona = document.createElement('p');
    persona.className = 'ficha__dato';
    persona.textContent = 'Asignada a: ' + (empleado ? empleado.nombre : 'Sin asignar');

    const botonCerrar = document.createElement('button');
    botonCerrar.className = 'ficha__boton';
    botonCerrar.type = 'button';
    botonCerrar.textContent = 'Cerrar';
    botonCerrar.addEventListener('click', () => ficha.remove());

    ficha.addEventListener('click', (e) => {
        if (e.target === ficha) {
            ficha.remove();
        }
    });

    contenido.appendChild(titulo);
    contenido.appendChild(descripcion);
    contenido.appendChild(estado);
    contenido.appendChild(persona);
    contenido.appendChild(botonCerrar);

    ficha.appendChild(contenido);

    document.body.appendChild(ficha);
    ficha.classList.add('ficha--abierta');
}
