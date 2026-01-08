import { useState } from "react"

export default function FormularioNombre() {
    const [nombre, setnombre] = useState('');
  return (
    <div>
        <input type="text" value={nombre} onChange={(e) => setnombre(e.target.value)}/>
        <p>{nombre ? `Hola, ${nombre}` : 'Escribe el nombre'}</p>
    </div>
  );
}