import React, { useEffect } from "react";
import { useState } from "react";

export function ThemeSelector() {
    const [rango, setRango] = useState(1)

    if (rango == 2) {
        document.querySelector("body").setAttribute('data-theme', 'tema2');
    } else if (rango == 3) {
        document.querySelector("body").setAttribute('data-theme', 'tema3');
    } else {
        document.querySelector("body").setAttribute('data-theme', '');
    }


    return (
        <div className='contenedor-selector' >
            <p className='theme' id='cal' >calc</p>
            <p className='theme' id='theme'>THEME</p>
            <div className='contenedor'>
                <p className='selector3'>
                    1 2 3
                </p>
                <input
                    min={1}
                    max={3}
                    type="range"
                    className='selector2'
                    onChange={(ev) => {
                        setRango(ev.target.value)
                    }} />
            </div>
        </div>
    )
}