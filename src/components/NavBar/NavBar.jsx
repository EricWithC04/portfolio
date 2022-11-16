import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={styles.header}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={styles.navMenu}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;