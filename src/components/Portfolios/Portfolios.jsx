import React from 'react'
import data from '../../database/list.json'
import Portfolio from '../Portfolio/Portfolio'
import styles from './Portfolios.module.css'


function Portfolios() {
    // console.log(data);
    return (
        <div className={styles.Main}>
            <div className={styles.MainTitle}>
                <h1>Portfolio</h1>
                <p className={styles.pProject}>Check out some of my latest websites and Python projects.    </p>
            </div>
        <div className={styles.containerFather}>
            {data.map((item)=> (<Portfolio title={item.title} language={item.language} key={item.title} img={item.img} github={item.gitHub} deploy={item.deploy}/>))}
        </div>
        </div>
    )
}

export default Portfolios