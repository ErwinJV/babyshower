import React from "react";


const Pagination = ({ itemsPerPage, totalItems, loading, paginate }) => {
   
    console.log(itemsPerPage,totalItems,loading)
    if(loading){

        return <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
     }
 
 
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} class="page-item">
            <a onClick={() => paginate(number)} class="page-link" href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
