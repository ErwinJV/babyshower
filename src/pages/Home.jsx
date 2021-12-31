import React from 'react';
import NavSite from '../components/NavSite';
import WelcomeHeader from '../containers/WelcomeHeader';
import GIftList from '../containers/GIftList';
import Footer from '../containers/Footer';
import Pagos from '../components/Pagos';


const Home = () => {
    return (
        <div className="home position-relative" >
             <NavSite  />
             <WelcomeHeader />
             <GIftList />
             <Pagos/>
             <Footer />


        </div>
    );
};

export default Home;