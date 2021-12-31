import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import WsLink from "./WsLink";

const Contact = () => {
  return (
    <div className=" w-100 contact d-flex  align-items-center justify-content-around mt-3 ">
      <a href="https://wa.link/5w54vp" target={"_blank"} className="d-flex align-self-center text-decoration-none justify-content-center text-secondary">
        <span className="align-self-center me-3 fs-5 d-none d-md-block">Si tienes alguna inquietud, te puedes comunicar con Mami o Papi por este medio.</span>
        <WsLink  />
      </a>

      <FontAwesomeIcon icon={faWhatsapp} className="d-none d-md-block icon-ws" />
    </div>
  );
};

export default Contact;
