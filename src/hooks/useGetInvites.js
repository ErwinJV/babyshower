import { useState, useEffect} from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL+ "/api/invitados"
const useGetInvites= () => {
     
    const [invites, setInvites] = useState([]);
	
	useEffect( async () => {
            
       let response = await axios(API);
	   console.log(response.data)
       response = response.data
       setInvites(response.data);
		 
	}, [])
    
    return invites;
};

export default useGetInvites;