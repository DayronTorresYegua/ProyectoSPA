import { tareas } from './datos.js';

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

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(boton);

        listaTareas.appendChild(tarjeta);
    });
}
