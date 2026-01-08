export default function BotonAlerta() {
    const handleClick = () => {
        alert('has hecho click');
    };
    return (
    <button onClick={handleClick}>Alerta</button>
    );
}
