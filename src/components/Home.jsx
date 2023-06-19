import React, { Component } from "react";
import NavBar from "./navbar";
import style from 'styled-components'
import hero from '../assets/hero.png'
import heroText from '../assets/heroText.png'
import Button from "./Button";

export default function Home(){
    return (
        <>
            <Section>
                <NavBar/>
                <div className="ellipse"></div>
                <div className="container">
                    <div className="content">
                        <h1>
                            Explore Our 
                            <span>
                                <img src={heroText} alt="hero Text" />
                            </span>
                            Hero Text Digital NFT Market Place
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repudiandae eligendi debitis odit, nemo eaque architecto ducimus provident necessitatibus doloribus esse.
                            Nobis exercitationem mollitia molestiae quo nemo quod perspiciatis officiis adipisci. 
                        </p>
                        <div className="buttons">
                            <Button blue text="Explore Now" />
                            <Button text="Create NFT" />
                        </div>
                        <div className="data">
                            <div className="dataTab">
                                 <h2>140k</h2>
                                 <h5>artwork</h5>
                            </div>
                            <div className="dataTab">
                                 <h2>60k</h2>
                                 <h5>artwork</h5>
                            </div>
                            <div className="dataTab">
                                 <h2>30k</h2>
                                 <h5>artwork</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={hero} alt="hero" />
                </div>
            </Section>
        </>
    )
}

const Section = style.section`
    margin: 0.5rem;
    background-color: #232835;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    margin-bottom: 5rem;
    .ellipse{
        background-color: #ae54c27d;
        height: 30rem;
        width: 30rem;
        border-radius:100%;
        filter: blur(2000px);
        opacity: 0.5;
        position: absolute;
        bottom: -30%;
        left: -10%;
        z-index: 1;
    }
    .container{
        padding: 2rem;
        margin: 0 2rem;
        display: flex;
        .content{
            z-index:10;
            display:flex;
            flex-direction: column;
            gap:2rem;
            margin-top:5rem;
            padding-right:2rem;
            h1{
                color:white;
                font-size:5rem;
                span{
                    .img{

                    }
                }
            }
            p{
                color:#a6a6a6
            }
            .buttons{
                display:flex;
                gap:2rem;
            }
            .data{
                display:flex;
                gap:5rem;
                .dataTab{
                    display:flex;
                    flex-direction:column;
                    gap:1rem;
                    h2{
                        font-size:2rem;
                    }
                    h5{
                        text-align:center;
                        color:#a6a6a6;
                    }
                }
            }
        }
        .image {
            img {
              height: 40rem;
            }
          }
    }

`;

/*
  .container {
    .image {
      img {
        height: 40rem;
      }
    }
  }
*/