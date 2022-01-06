import React, { useEffect, useState } from "react";
import Gift from "../components/Gift";
import Pagination from "../components/Pagination";
import belenStarLeft from "../assets/img/belen-stars-left.webp";
import belenStarRight from "../assets/img/belen-stars-right.webp";
import axios from "axios";

const GIftList = () => {
  const API = process.env.REACT_APP_API_URL + `/api/regalos`;

  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [giftsPerPage, setPostPerPage] = useState(4);
  console.log(giftsPerPage);
  useEffect(() => {
    const fetchGifts = async () => {
      setLoading(true);
      const res = await axios.get(API);
      setGifts(res.data.data);
      setLoading(false);
    };

    fetchGifts();
  }, []);

  //Obtener regalos

  const indexOfLastGift = currentPage * giftsPerPage;
  const indexOfFirstGift = indexOfLastGift - giftsPerPage;
  const currentGifts = gifts.slice(indexOfFirstGift, indexOfLastGift);

  //cambiar pagina

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container-fluid gift-list py-3 my-3 px-0 ">
      <div className="w-50 whishlist-text d-flex flex-column mx-auto p-2 ">
        <div className="d-flex justify-content-around">
          <img src={belenStarLeft} alt="belen-star-left" />
          <h1 className="fs-2 fw-bolder text-center">Nuestro Whishlist.</h1>

          <img src={belenStarRight} className="" alt="belen-star-right" />
        </div>
        <p className="align-self-center fs-5 text-center ">
          Aparta tu presente entre las opciones que dejaron mami y papi a
          continuación, si no consigues algo disponible ve al final de la
          página.
        </p>
        <p className="text-center">
          NOTA: Mami y Papi no sabrán quién aparto los regalos hasta el día de
          nuestro Babyshower.{" "}
        </p>
      </div>

      <div className="container-fluid container-md h-auto">
        <Gift gifts={currentGifts} loading={loading} />
      </div>
      <Pagination
        itemsPerPage={giftsPerPage}
        totalItems={gifts.length}
        loading={loading}
        paginate={paginate}
      />
    </div>
  );
};

export default GIftList;
