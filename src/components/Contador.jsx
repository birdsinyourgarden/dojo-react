import { useState } from "react"

export default function Contador() {
    const [contador, setcontador] = useState(0);
  return (
    <div>
        <p>{contador}</p>
        <button onClick={() => setcontador(contador + 1)}>Incrementar</button>
    </div>
  );
}
