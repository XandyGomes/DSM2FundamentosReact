import React from "react"

export default props =>
    <div>
        {props.nome}
        <strong>{props.sobrenome}</strong>
        {props.endereco}
        {props.numero}
        {props.cidade}
        {props.estado}
    </div>