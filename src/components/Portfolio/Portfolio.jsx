import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio(info) {
    console.log(info.language);
    console.log(info.github);
    return (
        <div className={styles.containerCard}>
            <div className={styles.containerInfo}>
                <h2 className={styles.projectTitle}>{info.title}</h2>
                <p>{info.language}</p>
                <img className={styles.projectImg} src={info.img} alt="img"/>
                <div className={styles.projectButtons}>
                    <a className={styles.projectA} href={info.github}> <button>GitHub</button></a>
                    <a className={styles.projectA} href={info.deploy}><button>View project</button></a>
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio
