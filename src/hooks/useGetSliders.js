import { useState, useEffect} from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL+ "/api/slider-images"

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








