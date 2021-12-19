import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
const NavSite = () => {
  let location = useLocation()
  console.log(location.pathname)
  
  return (
    <Nav className="d-flex justify-content-center bg-danger">
        
        
        <NavItem className="d-flex flex-column bg-success p-3">
          <Link to="/" className='text-decoration-none text-white '>Baby Shower</Link>
         
        </NavItem>
   
   
  </Nav>
    );
};

export default NavSite;