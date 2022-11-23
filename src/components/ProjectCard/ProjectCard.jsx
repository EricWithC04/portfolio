import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ img, title, view, text }) => {
    return (
        <div className={styles.projectCard}>
            <img src={img} alt="image" />
            <h2 className={styles.projectTitle}>{title}</h2>
            <div className={styles.projectDetails}>
                <p>{text}</p>
                <div className={styles.proBtns}>
                    <NavLink to={view} className={styles.btn}>VIEW</NavLink>
                    <NavLink to="#" className={styles.btn}>SOURCE</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;