import React from "react";
import style from 'styled-components'

export default function Button({text, blue = false}){
    const btnColor = blue ? "blue" : "";
    return (
        <Div >
            <button className = {btnColor} > {text} </button>   
        </Div>
    )
}

const Div = style.div`
    button {
        border-radius: 4rem;
        padding: 0.8rem 1rem;
        border: none;
        color: white;
        font-size: 1.1rem;
        cursor: pointer;
    }

    button:not(.blue) {
        background-color: transparent;
        border: 1px solid white;

        transition: 0.4s ease-in-out;
        &:hover{
            background-color: #2d69fd;
        }
    }

    .blue{
        background-color: #2d69fd;
    }

`;