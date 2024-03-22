import { useDebugValue } from 'react'
import './App.css'
import { Calculadora } from './Calculadora.jsx'
import { ThemeSelector } from './SelectTheme.jsx'

function App() {

  return (
      <>
      <ThemeSelector></ThemeSelector>
      <Calculadora data-theme ="tema2"/>
    </>
  )
}

export default App
