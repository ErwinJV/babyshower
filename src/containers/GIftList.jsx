import React from 'react';
import Gift from '../components/Gift';
import useGetGifts from '../hooks/useGetGifts';

const API = process.env.REACT_APP_API_URL + '/api/regalos';
const GIftList = () => {
   const gifts = useGetGifts(API);
   
   return (
        <div className="container-fluid gift-list py-3 my-3 px-0 ">
            
            <div className="w-50 whishlist-text d-flex flex-column mx-auto p-2 ">
                <h1 className='fs-2 fw-bolder align-self-center'>Whishlist</h1>
                <p className='align-self-center fs-5 text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
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