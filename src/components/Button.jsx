import React from "react";
import style from 'styled-components'

export default function Button({text}){
    return (
        <Btm>{text}</Btm>
    )
}

const Btm = style.button`
    
`;