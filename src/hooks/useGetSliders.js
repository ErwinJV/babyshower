import { useState, useEffect} from 'react';
import axios from 'axios';

const API = "http://localhost:1337/api/slider-images"

const useGetSliders= () => {
     
    const [Sliders, setSliders] = useState([]);
	
	useEffect( async () => {
            
       let response = await axios(API);
	    response = response.data;
       setSliders(response.data);
		 
	}, [])
    
    return Sliders;
};

export default useGetSliders;








