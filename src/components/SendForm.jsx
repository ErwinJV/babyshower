import React, { useState, useRef } from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter,  } from 'reactstrap';
//import {useNavigate}  from 'react-router-dom';

import axios from 'axios';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import nyanCat from '../assets/gif/nyan-cat-nyan.gif';



const SendForm = ({ gift}) => {
   

   // let navigate = useNavigate();
    const PATH = "http://localhost:1337";
    const API_INVITADOS = PATH + "/api/invitados";
    const API_REGALOS =  PATH + `/api/regalos/${gift.id}`;
    const MySwal = withReactContent(Swal);
    
    const [open, setOpen] = useState(false); 
    
    const toggler = () => {
         
        setOpen(!open);

    }

    const form = useRef(null);
	let data ={

        nombre: '',
        apellido: ''
    }
    
    
    const handleSubmit = async (event) => {
       
        event.preventDefault()
		const formData = new FormData(form.current);
		 data = {

			 nombre: formData.get('nombre'),
			 apellido: formData.get('apellido'),
             id: gift.id
		} 
		
        await axios.post(API_INVITADOS,{
          data: {
            nombre: data.nombre,
            apellido: data.apellido,
            regalo: data.id

          }
        
        })
          .then( async function (response) {
            
            if(response.status === 200){

                await axios.put(API_REGALOS,{
                    data: {
                     
                      apartado: true
          
                    }
                  
                  })
                  .then(function (response) {

                    if(response.status === 200){
                       
                        console.log( document.getElementById('apartarRegalo').classList)
           document.getElementById('apartarRegalo').classList.remove('d-flex')
           document.getElementById('apartarRegalo').classList.add('d-none')
           document.getElementById('spanSuccess').classList.remove('d-none')
           
           
           setOpen(false)
              
            
               
                MySwal.fire({
                    title: 'Muchas Gracias!',
                    text: 'Se aparto el regalo.',
                    imageUrl: PATH + gift.attributes.url_image,
                    imageWidth: 400,
                    imageHeight: 300,
                    confirmButtonText:
                                     '<i class="fas fa-thumbs-up" onClick="Ver mas Regalos"></i> Listo',
                   
                    imageAlt: gift.attributes.nombre,
                    backdrop: `
                                rgba(0,0,123,0.4)
                                url("${nyanCat}")
                                left top
                                no-repeat`
                  })

                    }

                  })
          
          
           
            }
        
                  
          })
            .then(function () {
            
                
                
            })
            .catch(function (error) {
    
                console.log(error)
            })
        
	}
   
  /*   */

    return (
    
    <div className= "apartar-regalo d-flex justify-content-center" id='apartarRegalo'  >
    <Button
        className="w-50"
        color="danger"
        onClick={ () => toggler() }
    >
        Apartar
    </Button>
    <Modal
        isOpen = { open }
        toggle={ () => toggler() }
    >
        <ModalHeader toggle={ () => toggler() }>
        Modal title
        </ModalHeader>
       
       <form action='#' ref={ form }>
            <ModalBody>
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-12 col-md-6">
                    
                    <div className="mb-3">
                            <label htmlFor="nombre" className="form-label" >Ingrese su nombre:</label>
                            <input type="text" name="nombre" className="form-control" placeholder="Ej: Miguel" aria-describedby="helpId"   />
                        
                    </div>

                    <div className="mb-3">
                    <label htmlFor="apellido" className="form-label" >Ingrese su apellido:</label>
                            <input type="text" name="apellido" className="form-control" placeholder="Ej: Cisneros" aria-describedby="helpId" />
                        
                    </div>


                    </div>

                    <div className="col-12 col-md-6 ">
                    
                                <img src={ PATH + gift.attributes.url_image  } className="w-100 h-75" alt={ gift.attributes.nombre }  />         
                        
                    </div>

                </div>

            </div>
            </ModalBody>
        </form>
        <ModalFooter>
        <input type="submit" value="Apartar" className="btn btn-primary" onClick={ handleSubmit } />
        {' '}
        <Button onClick={ () => toggler()}>
            Cancelar
        </Button>
        </ModalFooter>
    </Modal>

    
    </div>
    );
};

export default SendForm;