import React from "react";
import logo from '../assets/logo.png'
import style from 'styled-components'
import Button from "./Button";



export default function NavBar(){
    return (
        <Nav>
            <div className="brand">
                <img src={logo} alt="logo" />
            </div>
            <div className="toggle"></div>
            <div className="links">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Markeplace</a>
                    </li>
                    <li>
                    <a href="#">Sellers</a>
                    </li>
                    <li>
                    <a href="#">Create</a>
                    </li>
                </ul>
            </div>
            <Button text = "Contact"/>
        </Nav>
    )
}

const Nav = style.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem;

    .toggle{
        display: none;
    }

    .links{
        height: 4rem;
        display: flex;
        justify-content: center;
        aling-items:center;
        background-color: white;
        clip-path:  polygon(0 0, 100% 0, 80% 100%, 20% 100%);
        padding: 2.5rem 8rem;
        ul{
            display: flex;
            list-style-type: none;
            gap: 3rem;
            li{
                a{
                    color: #002000;
                    text-decoration:none;
                    transition: 0.4s ease-in-out;
                    &:hover{
                        color:#2d69fd;
                    }
                }
            }
        }
    }
`;
