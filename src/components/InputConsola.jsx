import { useState } from "react";

export default function InputConsola() {
    const [valor, setvalor] = useState('');
    const handleClick = () => {
        console.log('Valor del input', valor);
    };
    return (
    <div>
        <input type="text" value={valor} onChange={(e) => setvalor(e.target.value)} />
        <button onClick={handleClick}>Imprimir</button>
    </div>
    );
}
