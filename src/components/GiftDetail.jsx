import React  from 'react';
import SendForm from './SendForm';
import useGetGift from '../hooks/useGetGift';

import {Link} from 'react-router-dom';

//Hola Mundo

const GiftDetail = ({ id }) => {
   const PATH = process.env.REACT_APP_API_URL;
   const query = `/api/regalos/${id.id}`;
   const API = PATH + query;
  
   const gift  =   useGetGift(API);
   
     return (
       
      <div className="gift-detail container-fluid    ">
        { 
        //Si ya la los datos solicitados se cargaron...
             (gift) ?    
                   
                   //Traemos los datos y los renderizamos
                   <div className="row fix-reflow ">
                        <div className="col-12 col-xl-7 p-0 m-0  h-100 ">
                        
                        <img src={ gift.attributes.url_image } className="img-fluid " alt={ gift.attributes.nombre } />
                        
                        </div>

                        <div className="col-12 col-xl-5 p-0 m-0 ">
                           
                            
                            <div className="w-100 h-100 d-flex flex-column ">
                                
                                 <div className='d-flex ver-tienda pt-4  flex-column w-100'>
                                    <h1 className='text-center text-capitalize'>{ gift.attributes.nombre }</h1>
                                     <a href={ gift.attributes.enlace } className="btn rounded-pill text-white mt-3 bg-announce align-self-center mb-4 w-50">Ver en Tienda</a>
                                 </div>
                                  
                                 <SendForm gift={ gift }  />
                                   
                                    
                                  {
                                     //
                                       (gift.attributes.apartado) 
                                                           ? 
                                                             <div className='d-flex  flex-column quiero-apartar'>
                                                                 <span className='btn btn-success rounded-pill w-50 align-self-center mb-2'>Apartado</span>

                                                                <Link to="/" className="apartado my-3 btn btn-info w-50 text-white rounded-pill text-decoration-none align-self-center" >
                                                                    Ver otros regalos
                                                                </Link>
                                                             </div>

                                                            : '' 
                                      
                                  }
                                    <div className='apartado d-none my-2 d-flex flex-column' id='apartado'>
                                        <span className='btn btn-success rounded-pill w-50 align-self-center mb-2'>Apartado</span>

                                            <Link to="/" className=" my-2 btn btn-info w-50 text-white rounded-pill text-decoration-none align-self-center" >
                                                Ver otros regalos
                                             </Link>
                                      </div>

                            </div>
                            

                        </div>
                    </div>
         
         :       //Preloader
                   <div className="d-flex justify-content-center">
                            <div className="spinner-border bg-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                    </div>


         }
        </div> 

       
    );
}; 

export default GiftDetail;