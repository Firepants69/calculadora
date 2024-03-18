import './App.css';

export function Calculadora() {
  return (
    <div className='cuadro'>
      <div className='botones_principales'> 
        <button className='botones-arriba'>7</button>
        <button className='botones-arriba'>8</button>
        <button className='botones-arriba'>9</button>
        <button className='botones-arriba-del'>DEL</button>
        <button className='botones-arriba'>4</button>
        <button className='botones-arriba'>5</button>
        <button className='botones-arriba'>6</button>
        <button className='botones-arriba'>+</button>
        <button className='botones-arriba'>1</button>
        <button className='botones-arriba'>2</button>
        <button className='botones-arriba'>3</button>
        <button className='botones-arriba'>-</button>
        <button className='botones-arriba'>.</button>
        <button className='botones-arriba'>0</button>
        <button className='botones-arriba'>/</button>
        <button className='botones-arriba'>x</button>
      </div>
      <div className="botones-abajo">
        <button id='RESET'>RESET</button>
        <button id='igual'>=</button>
      </div>
    </div>
  );
}
