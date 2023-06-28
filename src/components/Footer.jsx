import React from 'react'
import styled from 'styled-components'

//---- ICONOS
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

//----- IMAGENES STATICAS
import logo from "../assets/logo.png";


export default function Footer() {
    const serviceLinks = ["Art", "Common", "Trading", "Rare", "Generic"]
    const companyLinks = ["Home", "About", "Marketplace", "Sellers", "Create"];
    const contactInfo = [
        {
          icon: <MdEmail />,
          value: "rubens.rangel.job@gmail.com",
        },
        {
          icon: <MdPhoneInTalk />,
          value: "+(480) 555-0103",
        },
        {
          icon: <IoLocationSharp />,
          value: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        },
      ];
    const socialIcons = [
        <AiFillFacebook />,
        <FaTwitterSquare />,
        <BsLinkedin />,
        <FaInstagramSquare />,
      ];
    

    return (
    <Conteiner>
        <div className="row">
                <div className="brand">
                    <img src={logo} alt="logo" />
                </div>
                <p className="description">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                {
                    socialIcons.map((item) => (
                            <div className='icon'> <a href="#">{item}</a></div>
                    ))
                }
            
        </div>
        <div className="row">
            <h3>Our Services</h3>
            <ul className='list-items-service'>
                {
                    serviceLinks.map((item,index) => (
                        <li key={index}>
                            <a href="#">{item}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className="row">
            <h3>Contacts</h3>
            <ul className='list-items-service'>
                {
                    companyLinks.map((item,index) => (
                        <li key={index}>
                            <a href="#">{item}</a>
                        </li>
                    ))
                }
            </ul>
        </div>

        <div className="row">
                <div className="brand">
                    <img src={logo} alt="logo" />
                </div>
                <p className="description">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                <ul>
                {
                    contactInfo.map(({icon, value}) => { 
                        return (
                            <li className='contact-row'>
                                <a href="#">{icon}</a>
                                <p> {value} </p>
                            </li>
                        )
                    })
                }
                </ul>
            
        </div>
    </Conteiner>
  )
}

const Conteiner = styled.footer`
    background: #443357;
    background: linear-gradient(to right, #443357, #394053);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 8rem;
    gap: 5rem;
    .row {
        color: #9ea7ad;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .brand {
        }
        h3 {
          color: white;
        }
        .description {
          color: white;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          .icon {
            border: 1px solid #2d68fd7f;
            padding: 0.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.3rem;
            cursor: pointer;
            svg {
              color: #2d69fd;
              font-size: 1.5rem;
            }
          }
        }
        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          li {
            display: flex;
            gap: 2rem;
            display: flex;
            align-items: center;
            .icon {
              border: 1px solid #2d68fd7f;
              padding: 0.2rem;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 0.3rem;
              cursor: pointer;
              svg {
                color: #2d69fd;
                font-size: 1.5rem;
              }
            }
          }
        }
      }
`;
/*


const Container = styled.footer`
  
  padding: 8rem;
  gap: 7rem;
  .row {
    color: #9ea7ad;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .brand {
    }
    h3 {
      color: white;
    }
    .description {
      color: white;
    }
    .social-icons {
      display: flex;
      gap: 1rem;
      .icon {
        border: 1px solid #2d68fd7f;
        padding: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;
        cursor: pointer;
        svg {
          color: #2d69fd;
          font-size: 1.5rem;
        }
      }
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        display: flex;
        gap: 2rem;
        display: flex;
        align-items: center;
        .icon {
          border: 1px solid #2d68fd7f;
          padding: 0.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.3rem;
          cursor: pointer;
          svg {
            color: #2d69fd;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }
`;
*/