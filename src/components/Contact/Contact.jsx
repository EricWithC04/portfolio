import React from 'react';
import Footer from '../Footer/Footer.jsx';
import Heroimg from '../Heroimg/Heroimg.jsx';
import NavBar from "../NavBar/NavBar.jsx";

const Contact = () => {
    return (
        <div>
            <NavBar />
            <Heroimg heading="CONTACT" text="Let's have a chat!"/>
            <Footer />
        </div>
    );
};

export default Contact;