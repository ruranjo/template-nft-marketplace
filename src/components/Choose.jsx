import React from 'react'
import style from 'styled-components'
import choose from '../assets/choose.png'
import Button from "./Button";

export default function Choose() {
  return (
    <Section>
        <div className="imagen">
            <img src={choose} alt="choose" />
        </div>
        <div className="content">
            <h2>why should you Choose Our Webside?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ipsam expedita harum optio quas illo distinctio provident,
            deserunt numquam blanditiis minima amet iste nobis,
            quis consectetur? Ipsum ratione recusandae quis consequatur!</p>
            <Button text="Read More" blue/>
        </div>
        

    </Section>
  )
}


const Section = style.section`
    display:flex;
    justify-content: center;
    align-content:center;
    margin: 0 9rem;
    gap: 3rem;
    margin-bottom: 5rem;
    .image{

    }
    .content{
        display:flex;
        justify-content:center;
        flex-direction:column;
        gap: 3rem;

        h2{
            font-size: 2rem;
        }
        p{
            color: #7b7e86;
            line-height: 2rem;
        }
    }
`;
/*
  .content {
    h2 {
      font-size: 4rem;
    }
    p {
      color: #7b7e86;
      line-height: 2rem;
    }
  }
*/