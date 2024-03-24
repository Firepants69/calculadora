import { useState } from 'react'
import './App.css'

export function Pantalla({ numeroVisualizado }) {
    const tema = document.querySelector("body").getAttribute('data-theme')


    return (
        <h1 id="pantalla" >
            {numeroVisualizado}
        </h1>
    )
}