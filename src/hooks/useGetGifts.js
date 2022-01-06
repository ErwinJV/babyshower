import { useState, useEffect } from "react";
import axios from "axios";

const useGetGifts = (API) => {
  const [gifts, setGifts] = useState([]);
  const [total, setTotal] = useState();

  useEffect(async () => {
    let response = await axios(API);
    response = response.data;
    console.log(response.meta.pagination.total);
    setTotal(response.meta.pagination.total);

    setGifts(response.data);
  }, []);

  return {
    gifts,
    total,
  };
};

export default useGetGifts;
