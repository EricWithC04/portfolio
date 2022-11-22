import React from 'react';
import Footer from '../Footer/Footer.jsx';
import Heroimg from '../Heroimg/Heroimg.jsx';
import NavBar from "../NavBar/NavBar.jsx";

const Projects = () => {
    return (
        <div>
            <NavBar />
            <Heroimg heading="PROJECTS" text="Some of my works."/>
            <Footer />
        </div>
    );
};

export default Projects;