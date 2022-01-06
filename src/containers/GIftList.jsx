import React, { useEffect, useState } from "react";
import Gift from "../components/Gift";
import Pagination from "../components/Pagination";
import belenStarLeft from "../assets/img/belen-stars-left.webp";
import belenStarRight from "../assets/img/belen-stars-right.webp";
import axios from "axios";

const GIftList = () => {
  const API = process.env.REACT_APP_API_URL + `/api/regalos`;
  const [total,setTotal] = useState()
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [giftsPerPage, setGiftsPerPage] = useState(4);
  console.log(giftsPerPage);
  useEffect(() => {
    const fetchGifts = async () => {
      setLoading(true);
      const res = await axios.get(API);
      setGifts(res.data.data);
      let total = Math.ceil( gifts.length / giftsPerPage);
      setTotal(total)
      setLoading(false);
      
    };

    fetchGifts();
  }, []);

  //Obtener regalos
  
  const indexOfLastGift = currentPage * giftsPerPage;
  const indexOfFirstGift = indexOfLastGift - giftsPerPage;
  const currentGifts = gifts.slice(indexOfFirstGift, indexOfLastGift);
  console.log(total)
  //cambiar pagina

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const next = () => {
     // console.log(total,'total', currentPage)
      if(currentPage === total ){

          setCurrentPage(total)
      }else{

         setCurrentPage(currentPage + 1)
      }
  }

  const prev = () => {

    if(currentPage === 1 ){

        setCurrentPage(currentPage)
    }else{

       setCurrentPage(currentPage - 1)
    }
}

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
        currentPage={currentPage}
        next={next}
        prev={prev}
      />
    </div>
  );
};

export default GIftList;
