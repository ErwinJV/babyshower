import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';


const Gift = ({ gift }) => {
const API ="http://localhost:1337";

  return (
        <Card className="mx-md-2 mb-3 " >
        
        <img
          alt={  gift.attributes.nombre }
          src={ API + gift.attributes.url_image }
          className="w-100  "
        
          height="180"
        />
        <CardBody className='position-relative d-flex flex-column align-items-center'>
          <CardText className="w-100 align-self-start text-center font-questrial fw-bolder ">
              { gift.attributes.nombre } 
          </CardText>
           
       
               
               {
                 
                   ( gift.attributes.apartado) 
                                        ? <span className="apartado btn btn-secondary rounded-pill ">Apartado</span>
                                  
                
                                        : <Link to={ `/apartar-regalo/${gift.id}`} className='apartar-regalo btn bg-announce text-white rounded-pill '>
                                             Get it
                                          </Link> 
             
                  }

              
        </CardBody>
      </Card>
    );
};

export default Gift;