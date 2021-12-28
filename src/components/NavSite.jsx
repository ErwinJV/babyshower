import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import navlogoLg from "../assets/img/navsite-logo@3x.jpg";
import navlogoSm from "../assets/img/navsite-logo@2x.jpg";

const NavSite = () => {

 
  
  return (
    <Nav className=" nav-site d-flex justify-content-center">
        
        
        <NavItem className="d-flex flex-column m-2">
          <Link to="/" className='text-decoration-none text-white '>
            <img src={ navlogoSm }  alt="Web site logo" />
          </Link>
         
        </NavItem>
   
   
  </Nav>
    );
};

export default NavSite;