import React from 'react';
import Contact from '../components/Contact';
import ThankYou from '../components/ThankYou';


const Footer = () => {
    return (
        <footer className=" w-100  position-absolute bottom-0">
          
             <ThankYou />
             <Contact />
        </footer>
    );
};

export default Footer;