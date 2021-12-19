import React  from 'react';
import SendForm from './SendForm';
import useGetGift from '../hooks/useGetGift';

import {Link} from 'react-router-dom';



const GiftDetail = ({ id }) => {
   const PATH = "http://localhost:1337";
   const query = `/api/regalos/${id.id}`;
   const API = PATH + query;
  
   const gift  =   useGetGift(API);
   
   
  


 
     return (
       
      <div className="container-fluid bg-warning py-5  ">
        { 
        //Si ya la los datos solicitados se cargaron...
             (gift) ?    
                   
                   //Traemos los datos y los renderizamos
                   <div className="row ">
                        <div className="col-12 col-md-7 ">
                        
                        <img src={ PATH +  gift.attributes.url_image } className="w-100 h-100 img-thumbnail" alt={ gift.attributes.nombre } />
                        
                        </div>

                        <div className="col-12 col-md-5 ">
                            <h1 className='text-center text-capitalize'>{ gift.attributes.nombre }</h1>
                            
                            <div className="w-100 h-100 d-flex flex-column  justify-content-center ">
                                    <a href={ gift.attributes.enlace } className="btn btn-primary mb-4 w-50 align-self-center">Ver en Tienda</a>
                                    
                                  {
                                     //
                                       (gift.attributes.apartado) 
                                                           ? <Link to="/" className="apartado btn btn-info w-50 text-white text-decoration-none align-self-center" >
                                                                   Ya esta apartado - Regresar
                                                             </Link>

                                                            :  <SendForm gift={ gift }  />
                                      
                                  }
                                   <Link to="/" className="d-none btn btn-info w-50 text-white text-decoration-none align-self-center" id='spanSuccess'>
                                       Ya esta apartado - Regresar
                                   </Link>

                            </div>
                            

                        </div>
                    </div>
         
         :       //Preloader
                   <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                    </div>


         }
        </div> 

       
    );
}; 

export default GiftDetail;