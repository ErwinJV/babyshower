import React from 'react';

//import WelcomeSlider from '../components/WelcomeSlider';

const WelcomeHeader = () => {
    return (
        <div className='welcome container p-0'>
           <div className='welcome-header position-relative  d-flex '>
                <div className=' flex-column welcome-text position-absolute   mx-4 ' >
                    <h1 className=' fs-md-1  m-0 p-0 ' >
                    ¡BIENVENIDOS A NUESTRO MUNDO!

                    </h1>

                    <p className="m-0 p-0 fs-4  ">Si estás aquí es porque nuestros papás te consideran una persona importante para nosotros. Por acá podrás apartar y adquirir tu presente que luego mami y papi abrirán el día del BabyShower a través de una trasmisión en vivo.
 </p>
                </div>

              
          </div>  
        </div>
    );
};

export default WelcomeHeader;