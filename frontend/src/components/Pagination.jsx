import React from 'react';

const Pagination = ({ currentPage, totalPages, prevPage, nextPage, pageCall }) => {
  return (
    <div className="pagination flex items-center justify-center text-white my-4">
      <div className={`page p-4 cursor-pointer ${prevPage <= 0 ? 'text-gray-500' : ''}`} onClick={() => pageCall(prevPage)}>Previous Page</div>
      <div className="current p-4 border-4 border-orange-500 rounded-full text-2xl font-semibold">{currentPage}</div>
      <div className={`page p-4 cursor-pointer ${nextPage > totalPages ? 'text-gray-500' : ''}`} onClick={() => pageCall(nextPage)}>Next Page</div>
    </div>
  );
};

export default Pagination;
