import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import twinStars from "../assets/img/estrellitas.webp";

const SendForm = ({ gift }) => {
  const PATH = process.env.REACT_APP_API_URL;
  const API_INVITADOS = PATH + "/api/invitados";
  const API_REGALOS = PATH + `/api/regalos/${gift.id}`;
  const MySwal = withReactContent(Swal);

  const form = useRef(null);
  let navigate = useNavigate();

  let data = {
    nombre: "",
    apellido: "",
    email: "",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    data = {
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      id: gift.id,
    };

    if (data.nombre == "" || data.apellido == "" || data.email == "") {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tiene que llenar todos los campos!",
      });
    } else {
      await axios
        .get(API_REGALOS)
        .then(async (response) => {
          if (!response.data.data.attributes.apartado) {
            await axios
              .post(API_INVITADOS, {
                data: {
                  nombre: data.nombre,
                  apellido: data.apellido,
                  email: data.email,
                  regalo: data.id,
                },
              })
              .then(async function (response) {
                if (response.status === 200) {
                  await axios
                    .put(API_REGALOS, {
                      data: {
                        apartado: true,
                      },
                    })
                    .then(function (response) {
                      if (response.status === 200) {
                        document
                          .getElementById("nombre")
                          .setAttribute("disabled", "true");
                        document
                          .getElementById("apellido")
                          .setAttribute("disabled", "true");
                        document
                          .getElementById("email")
                          .setAttribute("disabled", "true");
                        document
                          .getElementById("apartarRegalo")
                          .classList.add("d-none");
                        document
                          .getElementById("apartado")
                          .classList.remove("d-none");
                        MySwal.fire({
                          title: "Muchas gracias!",
                          text: "Vamos a ver otros regalos",
                          imageUrl: twinStars,
                          confirmButtonText: "<button>Hola</button>",
                          timer: 5000,
                          color: "white",
                          imageWidth: 320,
                          imageHeight: 240,
                          imageAlt: "Happy-star",
                          background: "rgba(88, 93, 112, .45 )",
                          backdrop: `
                                                rgba(255, 255, 255, 0)
                                                
                                                left top
                                                no-repeat`,
                        });
                      }
                    });
                }
              });
          } else {
            MySwal.fire({
              icon: "error",
              title: "Oops...",
              text: "El regalo se acabo de apartar hace unos instantes",
            });
            navigate("/");
          }
        })
        .then(function () {
          setTimeout(() => {
            navigate("/");
          }, 5000);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="quiero-apartar  px-5 pt-3 pb-5 d-flex flex-column justify-content-center">
      <form action="/" className="d-flex flex-column" ref={form}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Ingrese su nombre:
          </label>
          <input
            type="text"
            name="nombre"
            className="form-control "
            placeholder="Ej: Miguel"
            aria-describedby="helpId"
            id="nombre"
            disabled={gift.attributes.apartado}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Ingrese su apellido:
          </label>
          <input
            type="text"
            name="apellido"
            className="form-control"
            placeholder="Ej: Peréz"
            aria-describedby="helpId"
            id="apellido"
            disabled={gift.attributes.apartado}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Ingrese su correo electronico:
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Ej: example@gmail.com"
            aria-describedby="helpId"
            id="email"
            disabled={gift.attributes.apartado}
          />
        </div>
        {gift.attributes.apartado ? (
          ""
        ) : (
          <button
            className="btn  bg-announce text-white fw-bolder rounded-pill"
            onClick={handleSubmit}
            id="apartarRegalo"
          >
            Quiero Apartar
          </button>
        )}
      </form>
    </div>
  );
};

export default SendForm;
