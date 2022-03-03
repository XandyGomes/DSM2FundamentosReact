import React from "react"

var vf = true

export default (props) =>
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.soma}</h2>
        <p>{2+2}</p>
        <p>{Math.random()}</p>
        <p>{2**8}</p>
        <p>{Math.pow(2,8)}</p>
        <p>Verdadeiro ou Falso? {vf ? 'Verdadeiro' : 'Falso' }</p>
    </div>









// export default () => (
//     <div>
//         <h1>Nosso Componente Arrow</h1>
//         <h2>Olá</h2>

//     </div>

// )

// export default () => <h1>Nosso Componente Arrow</h1>

// function func1() {
//     return <h1>Nosso Primeiro Componente</h1>
// }

// export default func1