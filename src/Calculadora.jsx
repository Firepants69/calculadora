import { useState } from 'react';
import './App.css';
import { Pantalla } from './pantalla';
export function Calculadora() {
  const [strCalculadora, setStrCalculadora] = useState("")
  const TeclearSimbolos = (simbolo) => {
    if (simbolo == "0" && strCalculadora.length == 0) {
      setStrCalculadora(strCalculadora)
    } else {
      if (strCalculadora.length >= 16) {
        setStrCalculadora(strCalculadora)

      } else { setStrCalculadora(strCalculadora + simbolo) }
    }
  }


  const Del = () => {
    const variante = strCalculadora.slice(0, strCalculadora.length - 1)
    setStrCalculadora(variante)
  }

  const igual = () => {
    const resultado = eval(strCalculadora).toString();

    if (resultado.length >= 16) {
      const resultadoRecortado = resultado.slice(0, 16);
      setStrCalculadora(resultadoRecortado)
    }
    else {
      setStrCalculadora(resultado)
    }
  }
  console.log(strCalculadora)


  return (
    <>
      <Pantalla numeroVisualizado={strCalculadora}></Pantalla>
      <div className='cuadro'>
        <div className='botones_principales'>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("7")}>7</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("8")}>8</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("9")}>9</button>
          <button className='botones-arriba-del' onClick={() => Del()}>DEL</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("4")}>4</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("5")}>5</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("6")}>6</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("+")}>+</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("1")}>1</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("2")}>2</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("3")}>3</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("-")}>-</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos(".")}>.</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("0")}>0</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("/")}>/</button>
          <button className='botones-arriba' onClick={() => TeclearSimbolos("*")}>x</button>
        </div>
        <div className="botones-abajo">
          <button id='RESET' onClick={() => {
            setStrCalculadora("")
          }}>RESET</button>
          <button id='igual' onClick={() => igual()}>=</button>
        </div>
      </div>
    </>
  );
}
