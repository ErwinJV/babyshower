import { useState, useEffect} from 'react';
import axios from 'axios';

const useGetGifts= (API) => {
     
    const [gifts, setGifts] = useState([]);
	
	useEffect( async () => {
            
       let response = await axios(API);
	    response = response.data;
       setGifts(response.data);
		 
	}, [])
    
    return gifts;
};

export default useGetGifts;