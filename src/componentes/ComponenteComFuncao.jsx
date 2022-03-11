import React from "react";

const aprovados = ["Alexandre", "Janaina", "Josimara", "Joyce", "Angelica", "Isabela", "Rafael"]

export default props => {
    const gerarItens = itens =>{
        return itens.map(item => <li>{item}</li>)
    }
    return (
        <ul>{gerarItens(aprovados)}</ul>
    )
}