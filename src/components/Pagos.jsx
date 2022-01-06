import React, { useState } from "react";
import { Button } from "reactstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";



const Pagos = () => {
  let navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const zelle = () => {
    MySwal.fire({
      background: "rgba(88, 93, 112, .45 )",
      title: "Zelle:",
      text: "mitri.gd@gmail.com",
      color: "white",
      backdrop: "rgba(255, 255, 255, 0)",
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
      icon: "success",
      title: "Transaccion Exitosa",
      showConfirmButton: true,
    });
  };

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
          <div className="col-12 col-md-4  d-flex align-items-center justify-content-center">
           

            <div className="d-flex justify-content-center  p-2">
              <a
                href="https://paypal.me/soyderwin/"
                target={"_blank"}
              >
                <Button className="bg-announce rounded-pill">Paypal</Button>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <div className="d-flex justify-content-center  p-2">
              <Button className="bg-announce rounded-pill" onClick={() => zelle()}>
                Zelle
              </Button>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <div className="d-flex justify-content-center  p-2">
              <a
                href="https://checkout.wompi.co/l/VPOS_PyGzJw"
                target={"_blank"}
              >
                <Button className="bg-announce rounded-pill">Wompi</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagos;
