import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <h1 className={styles.righs}>Created and maintained by Mafe Toro</h1>
            <h3 className={styles.righsAuthor}>Title: Portfolio Author: <a  href="https://www.linkedin.com/in/mafe-toro/"  target="_blank=">@mtoro0926</a></h3>
            <h2 className={styles.footerInfo}>© 2021 MFT IT all right reserved.</h2>
        </div>
    )
}

export default Footer
