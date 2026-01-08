import React from 'react'

export default function Perfil({ nombre, edad, profesion}) {
  return (
    <div className='bg-blue-50 p-4 rounded-lg mb-4'>
        <p className='text-lg'>
            Soy <strong>{nombre}</strong>, tengo {edad} años y medico a la {profesion}
        </p>
    </div>
  )
}

