import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"
import styles from "./NavBar.module.css";

const NavBar = () => {

    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    const handleClick = () => setClick(!click);

    window.addEventListener("scroll", changeColor)

    return (
        <div className={color ? styles.headerBg : styles.header}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? styles.navMenuActive : styles.navMenu}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
            <div className={styles.hamburger} onClick={(e) => handleClick()}>
                {
                    click ? (
                        <FaTimes size={20} style={{ color: "#fff" }}/>
                    ) : (
                        <FaBars size={20} style={{ color: "#fff" }}/>
                    )
                }   
            </div>
        </div>
    );
};

export default NavBar;