import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import useGetSliders from '../hooks/useGetSliders';

const WelcomeSlider = () => {
  const PATH = "http://localhost:1337";
  const sliders = useGetSliders();
 
  
let arraySliders = sliders.map(slider => {
                     
    return {
      altText: `${slider.attributes.titulo}`,
      caption: `${slider.attributes.subtitulo}`,
      key: `${(Math.random() * (1000 / 50 )) * (Math.random() * (15/34)) }`,
      src: `${PATH + slider.attributes.url_image}`
         
    }

  })

  
  console.log(arraySliders)
    
        
    
  
   
  return (
        <UncontrolledCarousel 
       
        items={arraySliders}
       />
    );
};

export default WelcomeSlider;