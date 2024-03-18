import { useDebugValue } from 'react'
import './App.css'
import { Calculadora } from './Calculadora'
import { Pantalla } from './pantalla'
import { Temas } from './Seleccionar_thema'

function App() {

  return (
    <div className='calculadora'> 
      <div className='contenedor-selector'>
      <p className='theme' id='cal' >cal</p>
      <p className='theme' id='theme'>THEME</p>
      <Temas/>
      </div>
      <Pantalla/>
      <Calculadora/>
    </div>
  )
}

export default App
