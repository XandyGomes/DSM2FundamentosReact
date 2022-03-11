import React from "react"
import { filhosComProps } from "./ComponenteUtil"

export default props =>
    <div>
        <h1>Família</h1>
        {filhosComProps(props)}

        {/* {React.Children.map(props.children, filho => {
            return React.cloneElement(filho, {...props})
        })} */}
        {/* {React.cloneElement(props.children, {...props})} */}
    </div>