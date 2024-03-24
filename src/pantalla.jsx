import { useState } from 'react'
import './App.css'

export function Pantalla({ numeroVisualizado }) {


    return (
        <h1 id="pantalla" >
            {numeroVisualizado}
        </h1>
    )
}