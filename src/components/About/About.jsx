import React from 'react';
import Footer from '../Footer/Footer.jsx';
import Heroimg from '../Heroimg/Heroimg.jsx';
import NavBar from "../NavBar/NavBar.jsx";

const About = () => {
    return (
        <div>
            <NavBar />
            <Heroimg heading="ABOUT ME" text="I'm a React Developer Jr."/>
            <Footer />
        </div>
    );
};

export default About;