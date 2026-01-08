import { useState } from "react";

export function Tarea( {titulo, onEliminar }) {
  return (
    <li>
        <span>✅ {titulo}</span>
        <button onClick={onEliminar}>Eliminar</button>
    </li>
  );
}

export function ListaTareas() {
    const [tareas, setTareas] = useState(['Aprender React', 'Practicar hooks', 'Terminar el Dojo', 'Leer los enunciados']);

    const eliminarTarea = (index) => {
        setTareas(tareas.filter((_, i) => i !== index));
    };
    return (
        <ul>
            {tareas.map((tarea, index) => (
                <Tarea key={index} titulo={tarea} onEliminar={() => eliminarTarea(index)}/>
            ))}
        </ul>
    );
}

