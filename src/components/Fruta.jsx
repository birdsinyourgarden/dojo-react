export function Fruta( {nombre} ) {
  return (
    <li>{nombre}</li>
  )
}

export function ListaFruta( {frutas} ) {
  return (
    <ul>{frutas.map((fruta, index) => (
        <Fruta key={index} nombre={fruta} />
    ))}</ul>
  );
}
