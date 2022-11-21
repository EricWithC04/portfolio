import React from 'react';
import { Link } from "react-router-dom"
import IntroImg from "../../assets/intro-bg.jpg";
import styles from "./Heroimg.module.css";

const Heroimg = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.mask}>
                <img className={styles.introImg} src={IntroImg} alt="IntroImg" />
            </div>
            <div className={styles.content}>
                <p>HI, I'M ERICWITHC.</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/Projects" className={styles.btn}>Projects</Link>
                    <Link to="/Contact" className={styles.btnLight}>Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Heroimg;