import React from 'react';

//import WelcomeSlider from '../components/WelcomeSlider';

const WelcomeHeader = () => {
    return (
        <div className='welcome container p-0'>
           <div className='welcome-header position-relative  d-flex '>
                <div className=' flex-column welcome-text position-absolute   mx-4 ' >
                    <h1 className=' fs-md-1  m-0 p-0 ' >
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing
                    </h1>

                    <p className="m-0 p-0 fs-4  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde laborum dolores mol. </p>
                </div>

              
          </div>  
        </div>
    );
};

export default WelcomeHeader;