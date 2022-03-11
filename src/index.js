import React from "react"
import ReactDOM from "react-dom"
// import Componente1 from './componentes/Componente1'
// import {CompA, CompB as B} from './componentes/DoisComponentes'
// import MultiElementos from "./componentes/MultiElementos"
// import { Teste1, Teste2, Teste3 } from "./componentes/MultiElementos"
// import FamiliaGomes from "./componentes/FamiliaGomes"
// import FamiliaSilva from "./componentes/FamiliaSilva"
// import Familia from "./componentes/Familia"
// import Nome from "./componentes/Nome"
// import ComponenteComFuncao from "./componentes/ComponenteComFuncao"
import Pai from "./componentes/Pai"

const element = document.getElementById('root')

ReactDOM.render(
    <div>
        {/* <Componente1 valor = "A minha soma é " soma = {10+15}/> */}
        {/* <CompA valor="qui é o Componente AA"/>
        <B valor="Aqui é o Componente B"/> */}
        {/* <MultiElementos/> */}
        {/* <Teste1/>
        <Teste2/>
        <Teste3/> */}

        {/* <h1>Família Gomes</h1>
        <FamiliaGomes sobrenome="Gomes"/>

        <h1>Família Silva</h1>
        <FamiliaSilva sobrenome="Silva"/> */}

        {/* <Familia sobrenome="Gomes " endereco="Rua Tal " numero=" 1854" cidade=" Franca" estado=" SP">
            <Nome nome="João "/>   
            <Nome nome="Pedro "/>
            <Nome nome="Alexandre "/>
        </Familia> */}

        {/* <Familia>
            <Nome nome="Caio " sobrenome="Cintra"/>
            <Nome nome="Isabela " sobrenome="Cintra"/>
        </Familia> */}

        {/* <ComponenteComFuncao/> */}
        <Pai/>

    </div>,
    element
)