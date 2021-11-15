import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import Burger from './Burger'
import {Link} from "react-router-dom"


function Header() {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <Link to="/"> <img src={logo} alt="logo" /> </Link>
            </div>
            <Burger/>
        </div>
        
    )
}

export default Header
