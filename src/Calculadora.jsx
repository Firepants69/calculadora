import { useState } from 'react';
import './App.css';
import { Pantalla } from './pantalla';


export function Calculadora() {
  const [ strCalculadora,setStrCalculadora] = useState("")
  const [rango,setRango] = useState(1)
  let tema ="";
  if (rango==2){
    tema ="tema2";
  }else if(rango==3){
    tema ="tema3"
  }


  const TeclearSimbolos = (simbolo) =>{
      if(simbolo == "0" && strCalculadora.length ==0){
        setStrCalculadora("")
      }else{
      if(strCalculadora.length >= 19){
        setStrCalculadora(strCalculadora)
        
      }else{setStrCalculadora(strCalculadora+simbolo)}
    }
  }

  
  const Del = ()=>{
    const variante= strCalculadora.slice(0,strCalculadora.length-1) 
    setStrCalculadora(variante)
  } 

  const igual =()=>{
    const resultado = eval(strCalculadora).toString();
    if(strCalculadora[0]=="0" && strCalculadora[1]!="."){
      const resultadoRecortado = resultado.slice(1,)
    }
    if(resultado.length >= 19){
      const resultadoRecortado = resultado.slice(0,19);
      setStrCalculadora(resultadoRecortado)
    }
    else{
      setStrCalculadora(resultado)
    }
  }
  console.log(strCalculadora)
  
 
  return (
    <div className='calculadora' data-theme ={tema}> 
    <section>
      <Pantalla numeroVisualizado={strCalculadora}></Pantalla>
    <div className='cuadro'  >
      <div className='botones_principales'> 
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("7")}>7</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("8")}>8</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("9")}>9</button>
        <button className='botones-arriba-del' onClick={()=>Del()}>DEL</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("4")}>4</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("5")}>5</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("6")}>6</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("+")}>+</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("1")}>1</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("2")}>2</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("3")}>3</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("-")}>-</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos(".")}>.</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("0")}>0</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("/")}>/</button>
        <button className='botones-arriba' onClick={()=>TeclearSimbolos("*")}>x</button>
      </div>
      <div className="botones-abajo">
        <button id='RESET' onClick={()=>{
          setStrCalculadora("")
        }}>RESET</button>
        <button id='igual' onClick={()=>igual()}>=</button>
      </div>
    </div>
    </section>
    </div>
  );
}
{/*s */}
