import { useState, useEffect} from 'react';
import axios from 'axios';

const useGetGift= (API) => {
     
    
    const [gift, setGift] = useState();
	
	useEffect( async () => {
            
        let response = await axios(API);
         response = response.data;
        setGift(response.data);
          
     }, [])

    
   
    return gift;
};

export default useGetGift;