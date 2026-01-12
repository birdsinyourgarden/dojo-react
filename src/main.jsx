import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Saludo from './components/Saludo'
import Perfil from './components/Perfil'
import { Tarjeta, Contenido } from './components/Tarjeta'
import BotonAlerta from './components/BotonAlerta'
import InputConsola from './components/InputConsola'
import { ListaFruta } from './components/Fruta'
import Contador from './components/Contador'
import FormularioNombre from './components/FormularioNombre'
import { ListaTareas } from './components/Tarea'
import LoginForm from './components/LoginForm'

const frutas = ["Manzana", "Plátano", "Naranja"];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Saludo nombre="Ana"/>
    <Perfil nombre="Paco" edad="37" profesion="enseñanza" />
    <Tarjeta titulo="tarjeta 1" contenido="Este es el contenido de la tarea 1" />
    <Contenido contenido="Este contenido" />
    <BotonAlerta />
    <InputConsola />
    <ListaFruta frutas={frutas} />
    <Contador />
    <FormularioNombre />
    <ListaTareas />
    <LoginForm />
  </StrictMode>,
)
