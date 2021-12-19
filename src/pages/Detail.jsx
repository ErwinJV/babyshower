import React from 'react';
import NavSite from '../components/NavSite';
import GiftDetail from '../components/GiftDetail';
import Footer from '../containers/Footer';
import { useParams } from 'react-router-dom';


const Detail = () => {
   console.log(useParams())
   const id = useParams();
    return (
        <div className="detail  bg-secondary  position-relative" >
             <NavSite  />
          
            <GiftDetail id={id} />
            <Footer />
            

        </div>
          
        
    );

};

export default Detail;