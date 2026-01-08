export function Contenido( {contenido} ) {
  return (
    <p>{contenido}</p>
  )
}

export function Tarjeta( { titulo, contenido }) {
  return (
    <div>
        <h2>{titulo}</h2>
        <Contenido contenido={contenido} />
    </div>
  )
}
