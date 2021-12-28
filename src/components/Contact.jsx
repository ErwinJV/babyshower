import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'



const Contact = () => {
    
    return (
        <div className=" w-100 contact d-flex  align-items-center justify-content-around mt-3 ">
                 
                <div className=' fs-4 align-self-center  ms-4  '>
                  Lorem, ipsum dolor sit amet consectetur 
                </div>

                <FontAwesomeIcon  icon={ faWhatsapp } className='icon-ws' />
            
        </div>
    );
};

export default Contact;