import { useState, useEffect} from 'react';
import axios from 'axios';

const API = "http://localhost:1337/api/invitados"
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