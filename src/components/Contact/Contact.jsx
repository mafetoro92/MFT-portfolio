import React, { useRef } from 'react';
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import styles from './Contact.module.css'
import emailjs from 'emailjs-com';

function Contact() {
    const form = useRef();
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_zvut4k8', form.current, 'user_p76k3ixuleJzrb8MZ3wSP')
        .then((result) => {
            alert('Your message is sent successfully!')
        }, (error) => {
            alert(error.message)
        });
        e.target.reset();
    }

    return (
        <div className={styles.containerContactMe}>
            <div className={styles.contacMe}>
                <h1>contact</h1>
            </div>
            <div className={styles.pContac}>
                <p>Thanks for your interest in getting in touch!</p> 
                <br/>
                <p>If you have a question about my portfolio or my volunteering experience, or if you’d just like to get in touch please reach out!</p>
            </div>
            <div className={styles.containerContacInfo}>
                <div className={styles.info}>
                    <h2 className={styles.infoGeneral}>Gmail</h2>
                    <h2 className={styles.infoGeneral}>mtoro0926@gmail.com</h2>
                </div>
                
            </div>
            <div className={styles.socialMedia}>
                <a className={styles.social} href="https://twitter.com/MafeToro7" target="_blank=">  <li className={styles.socialTwitter}><FaTwitter/></li></a>
                <a className={styles.social} href="https://www.linkedin.com/in/mafe-toro/"  target="_blank=" ><li className={styles.socialLinkedIn}><FaLinkedin/></li></a>
                <a className={styles.social} href="https://github.com/mafetoro92"  target="_blank=" ><li className={styles.socialGithub}><FaGithub/></li></a>
                <a className={styles.social} href="https://www.instagram.com/mafetoro26/"  target="_blank=" ><li className={styles.socialInstagram}><FaInstagram/></li></a>
            </div>
            <div className={styles.formContainer}>
                <form ref={form} onSubmit={sendEmail}>
                    <h2 className={styles.title}>Send me an email</h2>
                    <div>
                        <label className={styles.labels}>Name</label>
                        <input className={styles.inputs} type="text" name="to_name" placeholder="Name"></input>
                    </div>
                    <div>
                        <label className={styles.labels}>Email</label>
                        <input className={styles.inputs} type="text" name="from_name" placeholder="Email"></input>
                    </div>
                    <div>
                        <label className={styles.labels}>Message</label>
                        <input className={styles.inputs} type="text"  name="message" placeholder="Message"></input>
                    </div>
                    <div>
                        <input className={styles.submit} type="submit" value="Send message"></input>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Contact
