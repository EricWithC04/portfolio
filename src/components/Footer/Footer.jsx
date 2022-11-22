import React from "react";
import { FaHome,
         FaMailBulk, 
         FaPhone, 
         FaLinkedin, 
         FaTwitter, 
         FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.left}>
                    <div className={styles.location}>
                        <FaHome 
                            size={20} 
                            style={{ color:"#fff",
                            marginRight: "2rem" }}
                        />
                        <div>
                            <p>Pirane, Formosa.</p>
                            <p>Argentina.</p>
                        </div>
                    </div>
                    <div className={styles.phone}>
                        <h4>
                            <FaPhone 
                                size={20} 
                                style={{ color:"#fff", 
                                marginRight: "2rem" }}
                            />
                            +54-9-370-460-7556
                        </h4>
                    </div>
                    <div className={styles.email}>
                        <h4>
                            <FaMailBulk 
                                size={20} 
                                style={{ color:"#fff", 
                                marginRight: "2rem" }}
                            />
                            negativegame117@gmail.com
                        </h4>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.social}>
                        <FaGithub 
                            size={20} 
                            style={{ color:"#fff", 
                            marginRight: "1rem" }}
                        />
                        <FaTwitter
                            size={20} 
                            style={{ color:"#fff", 
                            marginRight: "1rem" }}
                        />
                        <FaLinkedin 
                            size={20} 
                            style={{ color:"#fff", 
                            marginRight: "1rem" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer