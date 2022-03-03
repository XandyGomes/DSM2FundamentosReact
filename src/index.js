import React from "react"
import ReactDOM from "react-dom"
// import Componente1 from './componentes/Componente1'
import {CompA, CompB as B} from './componentes/DoisComponentes'

const element = document.getElementById('root')

ReactDOM.render(
    <div>
        {/* <Componente1 valor = "A minha soma é " soma = {10+15}/> */}
        <CompA valor="Aqui é o Componente A"/>
        <B valor="Aqui é o Componente B"/>
    </div>,
    element
)