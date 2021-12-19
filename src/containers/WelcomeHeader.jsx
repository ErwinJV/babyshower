import React from 'react';
import WelcomeSlider from '../components/WelcomeSlider';

const WelcomeHeader = () => {
    return (
        <div className="container-fluid bg-dark  p-3">
            <div className="row">
               <div className="col-12 col-md-4 bg-warning mb-3 mb-md-0">
                
                 <h1>Bienvenidos!</h1>

                 <p class="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde laborum dolores molestiae dicta iusto suscipit aliquid harum, enim, blanditiis itaque iure. Laboriosam tenetur illum suscipit debitis modi recusandae delectus.</p>

               </div>
               <div className="col-12 col-md-8">
                <WelcomeSlider />

               </div>

                 
            </div>
        </div>
    );
};

export default WelcomeHeader;