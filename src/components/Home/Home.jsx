import React from 'react'
import styles from './Home.module.css'
import photo from '../../assets/mafe_first.png'
import Typewriter from "typewriter-effect"

function Home() {
    
    return (
        < div className={styles.container}>
    
            <div className={styles.intro}>
                <div className={styles.image}>
                    <img className={styles.picture} src={photo} alt="" />
                </div>

            <div className={styles.text}>
                <Typewriter
                options={{autoStart:true,
                loop:true,
                delay:40,
                strings:[
                    "Hello everyone!",
                    "I'm Mafe Toro frontend and backend developer.",
                    "Welcome to my portfolio!"
                ],
                }}/>
            </div>
            </div>
        </div>

    )
}

export default Home
