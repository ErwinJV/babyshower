import React from "react";
import { Card, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

import 'animate.css/animate.css'

const Gift = ({ gifts, loading }) => {
  if (loading) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row mx-2">
      
        {gifts.map((gift) => (
          <div className="col-12 col-md-6 col-lg-4 col-xl-3  mt-3 ">
            <Card className="gift mx-md-2 mb-3 animate__animated animate__fadeIn animate__delay-2s  ">
              <img
                alt={gift.attributes.nombre}
                src={gift.attributes.url_image}
                className="w-100  "
                height="180"
              />
              <CardBody className="position-relative d-flex flex-column align-items-center">
                <CardText className="w-100 mb-0 align-self-start text-center font-questrial fw-bolder ">
                  {gift.attributes.nombre}
                </CardText>

                <a
                  href={gift.attributes.enlace}
                  target={"_blank"}
                  className=" text-decoration-none text-danger mb-1 "
                >
                  Ver en tienda
                </a>

                {gift.attributes.apartado ? (
                  <span className="apartado btn btn-secondary rounded-pill ">
                    Apartado
                  </span>
                ) : (
                  <Link
                    to={`/apartar-regalo/${gift.id}`}
                    className="apartar-regalo btn align-self-center   bg-announce text-white rounded-pill "
                  >
                    Get it
                  </Link>
                )}
              </CardBody>
            </Card>
          </div>
        ))}

    </div>
  );
};

export default Gift;
