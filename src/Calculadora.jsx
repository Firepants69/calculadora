import { useState } from 'react';
import './App.css';
import { Pantalla } from './pantalla';
import { formatoOperacion, LimpiarOperacion } from './calculadoraLogica.js'




export function Calculadora() {
  const [strCalculadora, setStrCalculadora] = useState("")
  const tema = document.querySelector('body').getAttribute('data-theme')



  const TeclearSimbolos = (simbolo) => {
    if (strCalculadora === "Syntax Error") {
      setStrCalculadora("")
      setStrCalculadora(simbolo)
    }
    else if (simbolo == "0" && strCalculadora.length == 0) {
      setStrCalculadora("")
    } else {
      if (strCalculadora.length >= 19) {
        setStrCalculadora(strCalculadora)

      } else {
        const operacionLimpia = LimpiarOperacion(strCalculadora)
        setStrCalculadora(formatoOperacion(operacionLimpia + simbolo))
      }
    }
  }


  const Del = () => {
    if (strCalculadora === "Syntax Error") {
      setStrCalculadora("")
    } else {
      const variante = strCalculadora.slice(0, strCalculadora.length - 1)
      setStrCalculadora(variante)
    }
  }

  const igual = () => {
    const operacionVirgen = LimpiarOperacion(strCalculadora)
    const resultado = eval(operacionVirgen).toString()
    if (resultado == "Infinity") {
      throw new TypeError("no se puede dividir entre 0")
    }

    if (resultado.length >= 19) {
      const resultadoRecortado = resultado.slice(0, 19);
      const OperacionVirgenParaResultadoRecorado = LimpiarOperacion(resultadoRecortado)
      setStrCalculadora(formatoOperacion(OperacionVirgenParaResultadoRecorado))
    }
    else {
      setStrCalculadora(formatoOperacion(resultado))
    }
  }

  const reset = () => {
    if (strCalculadora === "Syntax Error") {
      setStrCalculadora("")
    } else {
      setStrCalculadora("")
    }

  }

  console.log(strCalculadora, tema)



  return (
    <div className='calculadora' >
      <section>
        <Pantalla numeroVisualizado={strCalculadora}></Pantalla>
        <div className='cuadro'  >
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
              reset()
            }}>RESET</button>
            <button id='igual' onClick={() => {
              try {
                igual()
              } catch {
                setStrCalculadora("Syntax Error")
              }

            }}>=</button>
          </div>
        </div>
      </section>
    </div>
  );
}
{/*s */ }
