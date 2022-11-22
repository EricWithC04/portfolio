import React from 'react';
import Footer from '../Footer/Footer.jsx';
import NavBar from "../NavBar/NavBar.jsx";
import Heroimg from "./Heroimg.jsx"

const Home = () => {
    return (
        <div>
            <NavBar />
            <Heroimg />
            <Footer />
        </div>
    );
};

export default Home;