import React from 'react';
import Gift from '../components/Gift';
import useGetGifts from '../hooks/useGetGifts';
import belenStarLeft from '../assets/img/belen-stars-left.webp';
import belenStarRight from '../assets/img/belen-stars-right.webp';

const API = process.env.REACT_APP_API_URL + '/api/regalos';
const GIftList = () => {
   const gifts = useGetGifts(API);
   
   return (
        <div className="container-fluid gift-list py-3 my-3 px-0 ">
            
            <div className="w-50 whishlist-text d-flex flex-column mx-auto p-2 ">
                <div className='d-flex justify-content-around'>
                   <img src={ belenStarLeft } alt="belen-star-left" />
                    <h1 className='fs-2 fw-bolder text-center'>
                        Nuestro Whishlist.
                    </h1>

                    <img src={ belenStarRight } className='' alt="belen-star-right" />
                </div>
                <p className='align-self-center fs-5 text-center '>
                    Aparta tu presente entre las opciones que dejaron mami y papi a continuación, si no consigues algo disponible ve al final de la página.
                </p>
                <p className='text-center'>NOTA: Mami y Papi no sabrán quién aparto los regalos hasta el día de nuestro Babyshower. </p>
            </div>
            
            <div className="container-fluid container-md h-auto">
                <div className="row mx-2 ">
                  
            
                  {gifts.map(gift => (
                   
                   <div className="col-12 col-md-6 col-lg-4 col-xl-3  mt-3 "> 
                      <Gift gift ={gift} key={gift.id} />
                   </div>
				))}
                    


                  

                 
                  
                  
                 

                </div>
               

            </div>

        </div>
    );
};

export default GIftList;