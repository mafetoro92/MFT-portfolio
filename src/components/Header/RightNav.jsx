import React from 'react'
import styled from 'styled-components';
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import cv from '../../assets/MafeToro.pdf'
import {Link} from "react-router-dom"



const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li {
    padding: 0.5rem 1rem;
    color: white;
    transition: all 0.4s linear;
    border-radius: 5px;
    }
    li:hover{
        color: rgb(34,162,190,100%);
    }
    @media (max-width: 989px) {
        flex-flow: column nowrap;
        background-color:black;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
        color: #fff;
        display: flex;
        justify-content:space-around;
        padding: 9px 10px;
        }
    }
`;

function RightNav({open}) {
    return (
        <Ul open={open}>
                <Link style={{ textDecoration: 'none' }} to="/about"> <li>about</li> </Link>
                <Link style={{ textDecoration: 'none' }} to="/skills"> <li>skills</li> </Link>
                <Link style={{ textDecoration: 'none' }} to="/portfolio"> <li>portfolio</li> </Link>
                <Link style={{ textDecoration: 'none' }} to="/contact"> <li>contact</li></Link>
                <a  style={{ textDecoration: 'none' }} href={cv} target="_blank=" ><li>cv/resume</li></a> 
                <a  href="https://twitter.com/MafeToro7" target="_blank=">  <li><FaTwitter/></li></a>
                <a  href="https://www.linkedin.com/in/mafe-toro/"  target="_blank=" ><li><FaLinkedin/></li></a>
                <a  href="https://github.com/mafetoro92"  target="_blank=" ><li><FaGithub/></li></a>
                <a  href="https://www.instagram.com/mafetoro26/"  target="_blank=" ><li><FaInstagram/></li></a>
        </Ul>
    )
}

export default RightNav
