import React from 'react';



const WelcomeHeader = () => {
    return (
        <div className='welcome container '>
           <div className='welcome-header position-relative  d-flex '>
                <div className='d-flex flex-column welcome-text position-absolute justify-content-center align-items-center  ' >
                    <h1 className=' fs-md-1 mb-3  text-center align-self-center ' id='welcome-title'>
                    ¡BIENVENIDOS A NUESTRO MUNDO!

                    </h1>

                    <p className="m-0 p-0 fs-4 d-flex justify-content-center" id='welcome-text'>Si estás aquí es porque nuestros papás te consideran una persona importante para nosotros. Por acá podrás apartar y adquirir tu presente que luego mami y papi abrirán el día del BabyShower a través de una trasmisión en vivo.
 </p>
                </div>

              
          </div>  
        </div>
    );
};

export default WelcomeHeader;