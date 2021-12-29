import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'



const Contact = () => {
    
    return (
        <div className=" w-100 contact d-flex  align-items-center justify-content-around mt-3 ">
                 
                <div className=' fs-6 align-self-center  ms-4  '>
                Si tienes alguna inquietud, te puedes comunicar con Mami o Papi por este medio. 
                </div>

                <FontAwesomeIcon  icon={ faWhatsapp } className='icon-ws' />
            
        </div>
    );
};

export default Contact;