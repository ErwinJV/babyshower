import React from 'react';
import Gift from '../components/Gift';
import useGetGifts from '../hooks/useGetGifts';

const API ='http://localhost:1337/api/regalos';
const GIftList = () => {
   const gifts = useGetGifts(API);
   
   return (
        <main className="container-fluid bg-primary py-3 my-3 ">
            
            <div className="w-100 bg-success d-flex justify-content-center p-2 "><h3>Whislist</h3></div>
            <div className="container h-auto">
                <div className="row">
                  
            
                  {gifts.map(gift => (
                   
                   <div className="col-12 col-md-6 col-lg-4 col-xl-3 h-100 mt-3"> 
                      <Gift gift ={gift} key={gift.id} />
                   </div>
				))}
                    


                  

                 
                  
                  
                 

                </div>
               

            </div>

        </main>
    );
};

export default GIftList;