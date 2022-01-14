import React from "react";

const Pagination = ({
  itemsPerPage,
  totalItems,
  loading,
  paginate,
  currentPage,
  next,
  prev,
}) => {
  

  let totalPages = Math.ceil(totalItems / itemsPerPage);
  let maxPages = totalPages - 3;
  let pages = currentPage + 3;

  
  let i;
  let limit;
  if (
    currentPage >= 1 &&
    currentPage !== totalPages &&
    currentPage + 3 < totalPages
  ) {
    i = currentPage;
    limit = currentPage + 3;
  } else if (currentPage <= totalPages) {
    i = currentPage - 3;
    limit = currentPage;
  }

  const pageNumbers = [];

  for (i; i <= limit; i++) {
    pageNumbers.push(i);
  }
  console.log(limit, " ", currentPage);
  return (
    <nav aria-label="Page navigation example" className="px-2">
      <ul className="pagination   justify-content-center">
        <li  className={ (currentPage === 1) ? "page-item d-none" : "page-item"} onClick={() => prev()}>
          <span className="page-link" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </span>
        </li>

        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "page-item active " : "page-item"
            }
          >
            <span onClick={() => paginate(number)} class="page-link">
              {number}
            </span>
          </li>
        ))}

        <li className={ (currentPage === totalPages) ? "page-item d-none" : "page-item"} onClick={() => next()} id="next">
          <span className="page-link" aria-label="Next">
            <span aria-hidden="true">»</span>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
