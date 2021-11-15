import React from 'react';
import photo from '../../assets/slider_1.png'
import styles from './About.module.css';




function About() {
    return (
        <div className={styles.containerAbout}>
            <div className={styles.mainTitle}>
                <h1>About</h1>
            </div>
            
            <div className={styles.secondSection}>
                <div className={styles.picture}>
                    <img className={styles.mafePicture} src={photo} alt="" />
                </div>

                <div>
                    <h2 className={styles.sudTitle}>Hi,</h2>
                    <h2 className={styles.sudTitle}>I'm Mafe Toro.</h2>
                </div>
            </div>

            <div className={styles.text}>
                <p>I am a full stack developer with a passion for Python. I live in Bucaramanga, Colombia.  I  believe that technology can change and improve the world and  can help create great experiences.</p> <br />
                <p>I started coding in 2020 when I was in the USA. My first language was Python and then I moved to a bootcamp to compliment my knowledge with frontend technologies. During this program we built websites, learned new topics and solved challenging problems.</p><br />
                <p>I'm an active member of the Python community. I currently run Python Bucaramanga and I volunteered in the Pycon Colombia conference in 2021. I am a native Spanish speaker and also speak conversational English.</p> <br />
            </div>
        </div>
    )
}

export default About
