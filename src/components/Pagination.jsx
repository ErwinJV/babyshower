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
  if (loading) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  let totalPages = Math.ceil(totalItems / itemsPerPage);
  let maxPages = totalPages - 3;
  let pages = currentPage + 3;

  // let limit = (currentPage < maxPages) ? pages : totalPages

  // let i = ((currentPage < 4) || (currentPage < maxPages)) ? 1 : (currentPage - 3)
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
      <ul className="pagination pagination-sm  justify-content-center">
        <li className="page-item " onClick={() => prev()}>
          <span className="page-link" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </span>
        </li>

        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "page-item active" : "page-item"
            }
          >
            <span onClick={() => paginate(number)} class="page-link">
              {number}
            </span>
          </li>
        ))}

        <li className="page-item" onClick={() => next()}>
          <span className="page-link" aria-label="Next">
            <span aria-hidden="true">»</span>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
