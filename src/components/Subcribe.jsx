import React from 'react'

import styled from "styled-components";
import subcribe from "../assets/subscribe.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Subcribe() {
  return (
    <Section>
      
        <div className="contentSubcribe">
          <h2 className='title'>Subcribe for get update every new Offers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <div className="input-container">
            <input type="text" placeholder="Enter Email" />
            <BsFillArrowRightCircleFill />
          </div>
        </div>
        <div className="image">
          <img src={subcribe} alt="holamundo" />
        </div>
      
    </Section>
  )
}

const Section = styled.section`
  display:flex;
  align-content:center;
  ajustify-content:center;
  margin: 0 9rem;
  gap: 10rem;
  .image{
    img{
      width: 300px
    }
  }
  .contentSubcribe{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
     width: 50%;
    h2 {
      font-size: 3rem;
    }
    p {
      color: #7b7e86;
      line-height: 2rem;
    }
  }
  .input-container {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    gap: 1rem;
    border: 1px solid #c4c4c4;
    border-radius: 3rem;
    input {
      border: none;
      &:focus {
        outline: none;
      }
      padding-left: 2rem;
      padding-right: 5rem;
      font-size: 1.3rem;
    }
    svg {
      color: #2d69fd;
      font-size: 3rem;
    }
  }
`

/*
  margin: 0 9rem;
  gap: 10rem;
  margin-bottom: 5rem;
  .image {
    img {
    }
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
     width: 50%;
    h2 {
      font-size: 4rem;
    }
    p {
      color: #7b7e86;
      line-height: 2rem;
    }
    .input-container {
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      gap: 1rem;
      border: 1px solid #c4c4c4;
      border-radius: 3rem;
      input {
        border: none;
        &:focus {
          outline: none;
        }
        padding-left: 2rem;
        padding-right: 5rem;
        font-size: 1.3rem;
      }
      svg {
        color: #2d69fd;
        font-size: 3rem;
      }
    }
  }

*/