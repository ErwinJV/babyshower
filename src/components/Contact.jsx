import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'



const Contact = () => {
    
    return (
        <div className=" w-100 d-flex flex-column align-items-center justify-content-center  bg-success p-4">
                 
                 <h5 className="text-white">Tu Regalo no esta?</h5>
                
                <p className="text-white p-0 m-0">No hay problema, escribenos al:</p>
                 <a href="#" className="w-100 d-flex justify-content-center  d-block text-decoration-none  ">
                   
                   <div className="d-inline-block">

                        <span className="text-white d-inline me-1 "> +57 565-55665</span>
                            
                        <FontAwesomeIcon className="text-white  fs-3 d-inline ml-2" icon={ faWhatsapp } />
                     
                   </div>
                    
                     </a>
            
        </div>
    );
};

export default Contact;