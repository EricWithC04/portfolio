import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./AboutContent.module.css";
import react1 from "../../assets/react1.jpg";
import react2 from "../../assets/react2.jpg";

const AboutContent = () => {
    return (
        <div className={styles.about}>
            <div className={styles.left}>
                <h1>Who Am I?</h1>
                <p>
                    Soy un Frontend Developer Jr en búsqueda de mi primera
                    oportunidad en la industria tecnologica!
                </p>
                <Link to="/Contact">
                    <button className={styles.btn}>Contact</button>
                </Link>
            </div>
            <div className={styles.right}>
                <div className={styles.imgContainer}>
                    <div className={styles.imgStackTop}>
                        <img src={react1} className={styles.img} alt="true" />
                    </div>
                    <div className={styles.imgStackBottom}>
                        <img src={react2} className={styles.img} alt="true" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;