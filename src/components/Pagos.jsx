import React, { useState } from "react";
import { Button } from "reactstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Pagos = () => {
  let navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const zelle = () => {
    MySwal.fire({
      background: "rgba(88, 93, 112, .45 )",
      title: "Zelle:",
      text: "email@example.com",
      color: "white",
      backdrop: "rgba(255, 255, 255, 0)",
    });
  };
  const wompi = () => {
    MySwal.fire({
      html: `<form action="https://checkout.wompi.co/p/" method="GET">
                 <!-- OBLIGATORIOS -->
                 <input type="hidden" name="public-key" value="LLAVE_PUBLICA_DEL_COMERCIO" />
                 <input type="hidden" name="currency" value="MONEDA" />
                 <input type="hidden" name="amount-in-cents" value="MONTO_EN_CENTAVOS" />
                 <input type="hidden" name="reference" value="REFERENCIA_DE_PAGO" />
                 <!-- OPCIONALES -->
                
                 <input type="hidden" name="redirect-url" value="URL_REDIRECCION" />
                 
                 <button type="submit">Pagar con Wompi</button>
               </form>`,
    });
  };
  //Paypal funcs y config
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: pricePaypal,
          },
        },
      ],
    });
  };

  const handlePay = () => {
    console.log("El pago ha sido exitoso");

     navigate("/");

     MySwal.fire({
        
        icon: 'success',
        title: 'Transaccion Exitosa',
        showConfirmButton: true,
        
      })
  }

  const onApprove = (data, actions) => {
    return actions.order.capture(handlePay());
  };

  const [pricePaypal, setPricePaypal] = useState(0);

 

  function handleChange(e) {
    setPricePaypal(e.target.value);
    console.log(pricePaypal);
  }

  return (
    <div className="bg-light d-flex flex-column p-4 justify-content-center">
      <p className="align-self-center my-3 text-center fs-3">
        Si deseas darnos un regalo en efectivo, aqui estan estas opciones
      </p>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column justify-content-around">
              <div className="mb-3">
                <label htmlFor className="form-label" />
                <input
                  type="number"
                  value={pricePaypal}
                  className="form-control"
                  min="0"
                  max="10000"
                  name
                  id
                  aria-describedby="helpId"
                  onChange={handleChange}
                />
                <small id="helpId" className="form-text text-muted">
                  Monto a transferir
                </small>
              </div>

              <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="d-flex justify-content-center p-2">
              <Button color="success" onClick={() => zelle()}>
                Zelle
              </Button>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="d-flex justify-content-center p-2">
              <Button color="info" onClick={() => wompi()}>
                Wompi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagos;
