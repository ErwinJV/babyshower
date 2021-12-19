import React from 'react';
import Contact from '../components/Contact';
import ThankYou from '../components/ThankYou';
import LegalSite from '../components/LegalSite';

const Footer = () => {
    return (
        <footer className=" w-100  position-absolute bottom-0">
            <Contact />
             <ThankYou />
             <LegalSite />
        </footer>
    );
};

export default Footer;