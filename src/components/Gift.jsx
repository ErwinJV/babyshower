import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';


const Gift = ({ gift }) => {
const API ="http://localhost:1337";

  return (
        <Card className="mx-2 mb-3 h-100 w-100" >
        
        <img
          alt={  gift.attributes.nombre }
          src={ API + gift.attributes.url_image }
          className="w-100  "
        
          height="180"
        />
        <CardBody className='position-relative d-flex flex-column align-items-center'>
          <CardText className="align-self-start">
              { gift.attributes.nombre } 
          </CardText>
           
       
               
               {
                 
                   ( gift.attributes.apartado) 
                                        ? <span className="apartado btn btn-danger ">Apartado</span>
                                  
                
                                        : <Link to={ `/apartar-regalo/${gift.id}`} className='apartar-regalo btn btn-success'>
                                             Apartar regalo 
                                          </Link> 
             
                  }

              
        </CardBody>
      </Card>
    );
};

export default Gift;