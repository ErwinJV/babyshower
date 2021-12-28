import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from '../pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import '@fortawesome/free-solid-svg-icons'
import Detail from '../pages/Detail';

const App = () => {
  
   return (
      
       <BrowserRouter>
            <Routes>
               <Route exact path="/" element={ <Home /> } />
               <Route exact path="/apartar-regalo/:id" element={ <Detail /> } /> 
               
             </Routes>
       </BrowserRouter>

    );
};

export default App;