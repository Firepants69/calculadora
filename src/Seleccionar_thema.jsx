import './App.css'

export function Temas(){
    return(
        <div className='contenedor'>
            <p className='selector3'>
                1  2    3
            </p>
            <input min={1} max = {3} type = "range" className='selector2'/>
         
        </div>
    )
}