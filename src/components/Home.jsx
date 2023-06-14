import React, { Component } from "react";
import NavBar from "./navbar";
import style from 'styled-components'

export default function Home(){
    return (
        <>
            <Section>
                <NavBar/>
            </Section>
        </>
    )
}

const Section = style.section`
    margin: 0.5rem;
    background-color: #76747d;
    border-radius: 1rem;
    height: 100vh;
`;


