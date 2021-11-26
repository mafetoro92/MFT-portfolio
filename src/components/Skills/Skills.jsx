import React from 'react'
import styles from './Skills.module.css';
import {FaHtml5} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {FaJs} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {FaDatabase} from 'react-icons/fa'
import {FaFreeCodeCamp} from 'react-icons/fa'
import udemy from '../../assets/udemy.png'
import PyBuc from '../../assets/pyBuc.png'
import PyCom from '../../assets/pycom.png'
import programate from '../../assets/programate.png'
import upb from '../../assets/upb.png'
import freeCodeCamp from '../../assets/freecodecamp.png'
import Udemy from '../../assets/Udemy.pdf'


function Skills() {
    return (
        <div className={styles.containerSkills}>
            <div className={styles.mainTitle}>
                <h1>Skills</h1>
            </div>

            <div className={styles.faSkills}>
                <FaHtml5 className={styles.fonts}/>
                <FaCss3 className={styles.fonts}/>
                <h2 className={styles.sudTitle}>Front-end development using HTML5 and CSS3.</h2>
            </div>

            <div className={styles.faSkills}>
                <FaJs className={styles.fonts}/>
                <FaReact className={styles.fonts}/>
                <h2 className={styles.sudTitle}>Front-end development using  JS and React.</h2>
            </div>

            <div className={styles.faSkills}>
                <FaPython className={styles.fontsBack}/>
                <h2 className={styles.sudTitle}>Backend development using Python and Django.</h2>
            </div>

            <div className={styles.faSkills}>
                <FaDatabase className={styles.fontsBack}/>
                <h2 className={styles.sudTitle}>Database Management Systems using MySQL.</h2>
            </div>

            <div className={styles.volunteerTitle}>
                <h1 className={styles.volunteerTitle}>Volunteer Experience</h1>
            </div>

            <div className={styles.faSkills}>
                <img src={PyBuc} className={styles.Volunteer} alt="pybucLogo"/>
                <h2 className={styles.VolunteerTextLink}> <a href="https://www.meetup.com/PythonBucaramanga/members/"  target="_blank=">Python Bucaramanga.</a> </h2>
            </div>

            <div className={styles.faSkills}>
                <img src={PyCom} className={styles.Volunteer} alt="pycom"/>
                <h2 className={styles.VolunteerTextLink}> <a href="https://2021.pycon.co/equipo/"  target="_blank=">PyCon 2021 Colombia.</a></h2>
            </div>

            <div className={styles.faSkills}>
                <img src={programate} className={styles.VolunteerA} alt="programate"/>
                <h2 className={styles.VolunteerText}>Programate, English Teacher.</h2>
            </div>

            <div className={styles.licensesTitle}>
                <h1 className={styles.volunteerTitle}>Licenses and Certifications</h1>
            </div>

            <div className={styles.faSkills}>
                <img src={upb} className={styles.university} alt="upb"/>
                <h2 className={styles.VolunteerText}>UPB, Psychology.</h2>
            </div>

            <div className={styles.faSkills}>
                <FaFreeCodeCamp className={styles.certificationsSpecial}/>
                <h2 className={styles.sudTitle}> <a href={freeCodeCamp} target="_blank=">FreeCodeCamp, Scientific Computing with Python.</a>  </h2>
            </div>

            <div className={styles.faSkills}>
                <img src={programate} className={styles.bookcamp} alt="bookcamp"/>
                <h2 className={styles.VolunteerText}>Programate, Fullstack Developer.</h2>
            </div>

            <div className={styles.faSkills}>
                <img src={udemy} className={styles.bookcamp} alt="udemy"/>
                <h2 className={styles.sudTitle}> <a href={Udemy} target="_blank=">Udemy, Python Programming.</a>  </h2>
            </div>
            
        </div>
    )
}

export default Skills
